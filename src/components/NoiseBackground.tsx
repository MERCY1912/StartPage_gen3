import React from 'react';

export const NoiseBackground: React.FC = () => {
  return (
    <svg className="pointer-events-none absolute -z-10 h-0 w-0">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          stitchTiles="stitch"
        />
      </filter>
    </svg>
  );
};
