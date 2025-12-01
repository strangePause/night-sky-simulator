import React, { useState, useEffect } from 'react';
import './App.css';

// Star component to render individual stars
const Star = ({ star }) => {
  const starClass = star.brightness > 0.7 ? 'star bright' : star.brightness > 0.4 ? 'star' : 'star dim';
  
  return (
    <div
      className={starClass}
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: star.opacity,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`
      }}
    />
  );
};

// Night sky component
const NightSky = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars with different properties for realism
    const generateStars = () => {
      const starCount = 300;
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        const brightness = Math.random();
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1, // Size between 1-4px
          opacity: Math.random() * 0.8 + 0.2, // Opacity between 0.2-1
          delay: Math.random() * 5, // Random delay for twinkling
          duration: Math.random() * 3 + 2, // Random duration for twinkling
          brightness: brightness // For determining star class (bright/dim)
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="night-sky">
      {stars.map(star => (
        <Star key={star.id} star={star} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NightSky />
    </div>
  );
}

export default App;
