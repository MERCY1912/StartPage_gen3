import React, { useMemo } from 'react';

const EMOJIS = ['👠', '👗', '💋', '❤️', '🔥'];
const NUM_EMOJIS = 20;

export const FloatingEmojis: React.FC = () => {
  const emojis = useMemo(() => {
    return Array.from({ length: NUM_EMOJIS }).map((_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      style: {
        left: `${Math.random() * 100}vw`,
        fontSize: `${Math.random() * 2 + 1}rem`, // 1rem to 3rem
        animationDuration: `${Math.random() * 15 + 10}s`, // 10s to 25s
        animationDelay: `${Math.random() * 10}s`,
      },
    }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-20 pointer-events-none">
      {emojis.map(({ id, emoji, style }) => (
        <span
          key={id}
          className="absolute bottom-0 animate-rise"
          style={style as React.CSSProperties}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};
