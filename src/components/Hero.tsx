import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="text-center text-warm-brown p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
        Ваш ИИ-стилист и толкователь снов
      </h1>
      <p className="text-lg md:text-xl font-sans leading-relaxed max-w-3xl mx-auto">
        Получите персональные рекомендации по стилю, основанные на погоде, или узнайте тайны своих сновидений. Наш ИИ-помощник к вашим услугам.
      </p>
    </motion.div>
  );
};

export default Hero;