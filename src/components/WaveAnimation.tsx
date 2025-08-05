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
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';

      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const amplitude = 20 + i * 10;
        const frequency = 0.01 + i * 0.005;
        const yOffset = canvas.height / 2 + (i - (waveCount - 1) / 2) * 50;

        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * frequency + frame * 0.05 + i * 0.5) * amplitude + yOffset;
          ctx.lineTo(x, y);
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
