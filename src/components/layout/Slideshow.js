"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative hidden md:block">
      {/* Use CSS to set relative width and height */}
      <div style={{ width: '100%', paddingBottom: '90%', position: 'relative' }}>
        <Image
          key={currentImageIndex} // Update key to trigger re-render when image changes
          src={images[currentImageIndex]}
          alt="Slideshow"
          layout="fill"
          objectFit="contain"
          className="slide-animation"
        />
      </div>
    </div>
  );
};

export default Slideshow;
