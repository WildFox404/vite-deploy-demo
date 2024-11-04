import React, { useEffect, useRef, useState } from 'react';

const AnimatedFadeIn = ({ children, threshold = 0.1}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 一旦可见，停止观察
        }
      },
      { threshold } // 当指定比例的元素可见时触发
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
    ref={elementRef}
    className={`transition-opacity duration-1500 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
    }`}
    >
      {children}
    </div>
  );
};

export default AnimatedFadeIn;