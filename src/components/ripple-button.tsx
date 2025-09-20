import React, { useState } from 'react';
import { Button } from './ui/button';

interface RippleEffect {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
  rippleColor?: string;
}

export function RippleButton({ 
  children, 
  className = '', 
  rippleColor = 'rgba(255, 255, 255, 0.4)',
  onClick,
  ...props 
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple: RippleEffect = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    // Call original onClick if provided
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      {...props}
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ping pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
            animationDuration: '600ms',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationFillMode: 'forwards'
          }}
        />
      ))}
    </Button>
  );
}