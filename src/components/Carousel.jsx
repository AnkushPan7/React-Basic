import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Function to advance to the next image
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set up the interval timer
    timerRef.current = setInterval(nextImage, interval);

    // Clear the interval on component unmount
    return () => clearInterval(timerRef.current);
  }, [images, interval]);

  const goToPrevious = () => {
    clearInterval(timerRef.current); // Clear existing timer
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    timerRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); // Restart timer
  };

  const goToNext = () => {
    clearInterval(timerRef.current); // Clear existing timer
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    timerRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); // Restart timer
  };

  const goToImage = (index) => {
    clearInterval(timerRef.current); // Clear existing timer
    setCurrentImageIndex(index);
    timerRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); // Restart timer
  };

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '20px auto', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        <img
          src={images[currentImageIndex]}
          alt={`Carousel Image ${currentImageIndex + 1}`}
          style={{ width: '100%', display: 'block' }}
        />
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', display: 'flex', justifyContent: 'space-between', transform: 'translateY(-50%)' }}>
        <button onClick={goToPrevious} style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
          &lt;
        </button>
        <button onClick={goToNext} style={{ background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>
          &gt;
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            style={{
              background: index === currentImageIndex ? 'blue' : 'gray',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '12px',
              height: '12px',
              margin: '0 5px',
              padding: 0,
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;