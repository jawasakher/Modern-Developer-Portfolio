import React, { useEffect, useState, useRef } from 'react'

const FadeIn = ({children, delay=0, duration=500, threshold=0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        //trigger animation when element enters viewport
        if (entry.isIntersecting ) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin:'0px'
      }
    );
    if(elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  },[threshold, isVisible]);
  
  return (
    <div 
    ref={elementRef} 
    className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
    style={{
      animationDelay : isVisible ? `${delay}ms` : '0ms' ,
      animationDuration: `${duration}ms`,
      animationFillMode : 'both'
    }}
    >
     {children}
    </div>
   
  );
};

export default FadeIn;