import { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  size: number;
  gradient: string;
  speed: number;
}

export function InteractiveParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const gradients = [
    'from-purple-400/30 to-pink-400/30',
    'from-blue-400/30 to-cyan-400/30',
    'from-indigo-400/30 to-purple-400/30',
    'from-pink-400/30 to-rose-400/30',
    'from-cyan-400/30 to-blue-400/30',
    'from-violet-400/30 to-indigo-400/30'
  ];

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = Array.from({ length: 12 }, (_, i) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      return {
        id: i,
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 4 + 2,
        gradient: gradients[i % gradients.length],
        speed: Math.random() * 0.02 + 0.01
      };
    });
    setParticles(initialParticles);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const animate = () => {
      setParticles(prev => prev.map(particle => {
        // Calculate distance from mouse
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Repel particles from mouse (within 20% of screen)
        if (distance < 20) {
          const force = (20 - distance) / 20;
          const angle = Math.atan2(dy, dx);
          return {
            ...particle,
            x: Math.max(0, Math.min(100, particle.x - Math.cos(angle) * force * 2)),
            y: Math.max(0, Math.min(100, particle.y - Math.sin(angle) * force * 2))
          };
        }
        
        // Slowly return to original position
        const returnX = particle.originalX + Math.sin(Date.now() * particle.speed) * 2;
        const returnY = particle.originalY + Math.cos(Date.now() * particle.speed) * 2;
        
        return {
          ...particle,
          x: particle.x + (returnX - particle.x) * 0.02,
          y: particle.y + (returnY - particle.y) * 0.02
        };
      }));
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-gradient-to-br ${particle.gradient} blur-sm transition-all duration-100 ease-out`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
}