import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  id: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationId: number;
    let pointId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        id: pointId++
      };

      setTrail(prev => [...prev, newPoint].slice(-15)); // Keep last 15 points
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      setTrail(prev => prev
        .map(point => ({ ...point, opacity: point.opacity * 0.9 }))
        .filter(point => point.opacity > 0.01)
      );
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-sm transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: point.x,
            top: point.y,
            opacity: point.opacity,
            transform: `translate(-50%, -50%) scale(${point.opacity})`,
            transition: 'opacity 0.1s ease-out'
          }}
        />
      ))}
    </div>
  );
}