import React from 'react';

const images = [
  'https://blog.lunarum.app/wp-content/uploads/2025/08/teddy.png',
  'https://blog.lunarum.app/wp-content/uploads/2025/08/heart.png',
  'https://blog.lunarum.app/wp-content/uploads/2025/08/kiss.png',
  'https://blog.lunarum.app/wp-content/uploads/2025/08/shoes.png',
];

export const FloatingImages: React.FC = () => {
  const animationNames = ['float1', 'float2', 'float3', 'float4'];

  const imageStyles = images.map((_, index) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 8 + 4}rem`, // Random width between 4rem and 12rem
    animationName: animationNames[index % animationNames.length],
    animationDuration: `${Math.random() * 20 + 15}s`,
    animationDelay: `${Math.random() * 10}s`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
  }));

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-10">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="absolute"
          style={imageStyles[index] as React.CSSProperties}
        />
      ))}
    </div>
  );
};
