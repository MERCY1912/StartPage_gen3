import React, { useEffect, useState } from 'react';

const FlyingEmojis: React.FC = () => {
  const [emojis, setEmojis] = useState<any[]>([]);

  useEffect(() => {
    const generateEmojis = () => {
      const newEmojis = Array.from({ length: 20 }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          fontSize: `${Math.random() * 2 + 1}rem`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
        return (
          <div key={i} className="absolute animate-fly" style={style}>
            ❤️
          </div>
        );
      });
      setEmojis(newEmojis);
    };

    generateEmojis();
  }, []);

  return <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">{emojis}</div>;
};

export default FlyingEmojis;
