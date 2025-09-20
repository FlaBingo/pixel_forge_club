import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
  gradient: string;
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const gradients = [
      'from-purple-400/20 to-pink-400/20',
      'from-blue-400/20 to-cyan-400/20',
      'from-indigo-400/20 to-purple-400/20',
      'from-pink-400/20 to-rose-400/20',
      'from-cyan-400/20 to-blue-400/20',
      'from-violet-400/20 to-indigo-400/20'
    ];

    // Initialize fewer floating elements for better performance
    const initialElements: FloatingElement[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      opacity: Math.random() * 0.6 + 0.3,
      speed: Math.random() * 0.3 + 0.1,
      direction: Math.random() * Math.PI * 2,
      gradient: gradients[i % gradients.length]
    }));
    
    setElements(initialElements);

    // Reduced frequency for better performance
    const animateElements = () => {
      setElements(prev => prev.map(element => {
        let newX = element.x + Math.cos(element.direction) * element.speed;
        let newY = element.y + Math.sin(element.direction) * element.speed;
        let newDirection = element.direction;

        // Bounce off edges
        if (newX <= 0 || newX >= 100) {
          newDirection = Math.PI - element.direction;
          newX = Math.max(0, Math.min(100, newX));
        }
        if (newY <= 0 || newY >= 100) {
          newDirection = -element.direction;
          newY = Math.max(0, Math.min(100, newY));
        }

        return {
          ...element,
          x: newX,
          y: newY,
          direction: newDirection,
        };
      }));
    };

    // Reduced frequency from 50ms to 100ms
    const interval = setInterval(animateElements, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute rounded-full bg-gradient-to-br ${element.gradient} blur-sm`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.1s linear',
          }}
        />
      ))}
    </div>
  );
}