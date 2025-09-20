import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngle?: number;
  perspective?: number;
  scale?: number;
  transitionDuration?: number;
}

export function TiltCard({
  children,
  className = '',
  tiltMaxAngle = 15,
  perspective = 1000,
  scale = 1.05,
  transitionDuration = 300
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -tiltMaxAngle;
    const rotateY = (mouseX / (rect.width / 2)) * tiltMaxAngle;
    
    setTransform(
      `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    );
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform('');
  };

  return (
    <div
      ref={cardRef}
      className={`transform-gpu ${className}`}
      style={{
        transform: transform,
        transition: isHovering 
          ? 'transform 0.1s ease-out' 
          : `transform ${transitionDuration}ms ease-out`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}