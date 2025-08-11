import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { services } from '../services';

interface Message {
  text: string;
  isUser: boolean;
}

export const InteractivePanel: React.FC = () => {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleServiceClick = useCallback((serviceId: string) => {
    setActiveService(serviceId);
    setMessages([]);
    setInput('');
  }, []);

  const handleSendMessage = useCallback(async () => {
    if (!input.trim() || !activeService) return;

    const userMessage: Message = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    const service = services.find(s => s.id === activeService);
    if (service) {
      try {
        const response = await fetch(service.webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
        const aiMessage: Message = { text: data.reply, isUser: false };
        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        console.error('Error calling webhook:', error);
        const errorMessage: Message = {
          text: t('error_message'),
          isUser: false,
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  }, [input, activeService, t]);

  const activeServiceDetails = services.find(s => s.id === activeService);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
        {services.map(service => (
          <button
            key={service.id}
            onClick={() => handleServiceClick(service.id)}
            className={`
              flex-1 md:flex-none md:w-48 py-3 px-4 rounded-full text-white font-semibold text-sm md:text-base
              transition-all duration-300 ease-in-out transform hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-opacity-50
              ${
                activeService === service.id
                  ? 'bg-gradient-to-r from-warm-rose to-blush-pink shadow-md focus:ring-warm-rose'
                  : 'bg-gradient-to-r from-lavender to-cream opacity-80 hover:opacity-100 focus:ring-lavender'
              }
            `}
          >
            {t(service.id)}
          </button>
        ))}
      </div>

      {activeService && (
        <div className="transition-all duration-500 ease-in-out">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-serif font-bold text-warm-brown">{t(activeService)}</h2>
            <p className="text-md text-warm-brown/80">{activeServiceDetails?.description}</p>
          </div>
          <div className="h-64 overflow-y-auto bg-cream/50 rounded-2xl p-4 mb-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`
                    max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl
                    ${msg.isUser ? 'bg-gradient-to-r from-blush-pink to-warm-rose text-white' : 'bg-white text-warm-brown shadow-sm'}
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl bg-white text-warm-brown shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-lavender rounded-full animate-pulse delay-0"></div>
                    <div className="w-2 h-2 bg-lavender rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-lavender rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder={activeServiceDetails?.placeholder}
              className="flex-grow p-3 border-2 border-cream rounded-full focus:outline-none focus:ring-2 focus:ring-warm-rose transition-colors"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="
                px-6 py-3 rounded-full text-white font-semibold
                bg-gradient-to-r from-warm-rose to-blush-pink
                transition-all duration-300 ease-in-out transform hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-warm-rose focus:ring-opacity-50
                disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
              "
            >
              {isLoading ? t('sending') : t('send')}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default InteractivePanel;