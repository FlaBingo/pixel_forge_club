import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 600,
  className = "" 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(current); // Stop observing once visible
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Reduced margin for better performance
      }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [delay, isVisible]);

  const getTransformClasses = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-8 opacity-0';
        case 'down':
          return '-translate-y-8 opacity-0';
        case 'left':
          return 'translate-x-8 opacity-0';
        case 'right':
          return '-translate-x-8 opacity-0';
        case 'fade':
          return 'opacity-0';
        default:
          return 'translate-y-8 opacity-0';
      }
    }
    
    return 'translate-x-0 translate-y-0 opacity-100';
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all ease-out duration-700 ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}