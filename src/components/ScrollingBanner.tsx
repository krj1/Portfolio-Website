'use client';

import { useEffect, useState } from 'react';
import './ScrollingBanner.css';

export function ScrollingBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const text = "Design&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacturing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Integration&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Support";
  const repeatedText = `${text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.repeat(5); // Repeat the text to create a seamless loop

  return (
    <div className="scrolling-banner">
      <div 
        className={`scrolling-text ${isVisible ? 'visible' : ''}`}
        style={{
          animation: 'scroll 60s linear infinite',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: repeatedText }} style={{ letterSpacing: '0.5em' }} />
      </div>
    </div>
  );
}