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
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 192, 203, 0.2)'; // Pink color

      const waveCount = 10;
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const amplitude = 40 + i * 20;
        const frequency = 0.005 + i * 0.001;
        const yOffset = canvas.height / 2 + (i - (waveCount - 1) / 2) * 60;

        for (let x = -100; x < canvas.width + 100; x++) {
          const y = Math.sin(x * frequency + frame * 0.02 + i * 0.5) * amplitude;
          const rotation = Math.PI / 4; // 45 degrees
          const rotatedX = x * Math.cos(rotation) - y * Math.sin(rotation);
          const rotatedY = x * Math.sin(rotation) + y * Math.cos(rotation);
          ctx.lineTo(rotatedX + canvas.width / 4, rotatedY + yOffset);
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
