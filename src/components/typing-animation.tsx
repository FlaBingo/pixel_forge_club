import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export function TypingAnimation({ 
  words, 
  speed = 200, // Slightly slower for better performance
  deleteSpeed = 150, 
  delayBetweenWords = 2500, // Longer delay
  className = ""
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      
      return () => clearTimeout(waitTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setIsWaiting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, currentWordIndex, isDeleting, isWaiting, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}