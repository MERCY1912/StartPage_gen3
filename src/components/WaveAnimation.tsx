import React, { useEffect, useRef } from 'react';

const WaveAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 192, 203, 0.16)'; // Pink color with 20% less opacity

      const waveCount = 15;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const amplitude = 50 + i * 20;
        const frequency = 0.004 + i * 0.0005;
        const yOffset = (i - (waveCount - 1) / 2) * 80;

        for (let x = -canvas.width; x < canvas.width * 2; x++) {
          const y = Math.sin(x * frequency + frame * 0.02 + i * 0.5) * amplitude;

          // The rotation is applied here to move from top-left to bottom-right
          const diagonalX = x + y - yOffset;
          const diagonalY = (x - y + yOffset) / 2;

          ctx.lineTo(diagonalX, diagonalY);
        }
        ctx.stroke();
      }
    };

    const animate = () => {
      frame++;
      drawWaves();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default WaveAnimation;
