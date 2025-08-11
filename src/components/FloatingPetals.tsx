import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  sway: number;
  swaySpeed: number;
  swayAmplitude: number;
}

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Petal[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = 20;
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 15 + 10,
          speedY: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.3 + 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          sway: Math.random() * Math.PI * 2,
          swaySpeed: Math.random() * 0.01 + 0.01,
          swayAmplitude: Math.random() * 20 + 10,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((petal) => {
        petal.y += petal.speedY;
        petal.rotation += petal.rotationSpeed;
        petal.sway += petal.swaySpeed;
        const currentSway = Math.sin(petal.sway) * petal.swayAmplitude;

        if (petal.y > canvas.height + petal.size) {
          petal.y = -petal.size;
          petal.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = petal.opacity;
        ctx.font = `${petal.size}px serif`;
        ctx.translate(petal.x + currentSway, petal.y);
        ctx.rotate(petal.rotation);
        ctx.fillText('🌸', -petal.size / 2, petal.size / 2);
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

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