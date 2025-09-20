import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Palette, X } from 'lucide-react';

interface Theme {
  name: string;
  primary: string;
  secondary: string;
  warm: string;
  cool: string;
}

const themes: Theme[] = [
  {
    name: 'Default',
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    cool: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    name: 'Ocean',
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    warm: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    cool: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    name: 'Sunset',
    primary: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    cool: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)'
  },
  {
    name: 'Forest',
    primary: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    secondary: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    warm: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    cool: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    name: 'Cosmic',
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    warm: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    cool: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  }
];

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    root.style.setProperty('--gradient-primary', theme.primary);
    root.style.setProperty('--gradient-secondary', theme.secondary);
    root.style.setProperty('--gradient-warm', theme.warm);
    root.style.setProperty('--gradient-cool', theme.cool);
  };

  const handleThemeChange = (index: number) => {
    setCurrentTheme(index);
    applyTheme(themes[index]);
    setIsOpen(false);
  };

  // Fun easter egg: cycle through themes on multiple clicks
  const [clickCount, setClickCount] = useState(0);
  
  const handleToggle = () => {
    setClickCount(prev => prev + 1);
    
    if (clickCount >= 4) {
      // Rainbow mode - cycle through all themes quickly
      let themeIndex = 0;
      const interval = setInterval(() => {
        applyTheme(themes[themeIndex]);
        themeIndex = (themeIndex + 1) % themes.length;
      }, 200);
      
      setTimeout(() => {
        clearInterval(interval);
        applyTheme(themes[currentTheme]);
        setClickCount(0);
      }, 2000);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="absolute bottom-16 right-0 p-4 bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl mb-2 w-64">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Choose Theme</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {themes.map((theme, index) => (
              <button
                key={theme.name}
                onClick={() => handleThemeChange(index)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                  currentTheme === index 
                    ? 'border-purple-500 shadow-lg' 
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex space-x-1 mb-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ background: theme.primary }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ background: theme.secondary }}
                  />
                </div>
                <div className="text-xs font-medium">{theme.name}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-3 text-xs text-gray-500 text-center">
            Tip: Click the palette button 5 times for a surprise! 🎨
          </div>
        </Card>
      )}
      
      <Button
        onClick={handleToggle}
        className="w-14 h-14 rounded-full bg-gradient-primary text-white border-0 shadow-2xl hover:shadow-xl hover:scale-110 transition-all duration-300"
        title="Change Theme"
      >
        <Palette className="w-6 h-6" />
      </Button>
    </div>
  );
}