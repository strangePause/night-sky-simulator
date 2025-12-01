import React, { useState, useEffect } from 'react';
import './App.css';

// Stellar classification mapping with colors and characteristics
const spectralClasses = {
  'O': { color: '#9bb4ff', baseBrightness: 1.5, sizeMultiplier: 1.8 },
  'B': { color: '#b3c8ff', baseBrightness: 1.3, sizeMultiplier: 1.5 },
  'A': { color: '#d0e2ff', baseBrightness: 1.2, sizeMultiplier: 1.3 },
  'F': { color: '#f0f4ff', baseBrightness: 1.1, sizeMultiplier: 1.2 },
  'G': { color: '#fff8e6', baseBrightness: 1.0, sizeMultiplier: 1.1 },
  'K': { color: '#ffe3b4', baseBrightness: 0.9, sizeMultiplier: 1.0 },
  'M': { color: '#ffcc80', baseBrightness: 0.7, sizeMultiplier: 0.9 }
};

// Star component to render individual stars
const Star = ({ star }) => {
  const starClass = star.brightness > 0.7 ? 'star bright' : star.brightness > 0.4 ? 'star' : 'star dim';
  
  return (
    <div
      className={`${starClass} ${star.spectralClass.toLowerCase()}`}
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        backgroundColor: star.color,
        opacity: star.opacity,
        animationDelay: `${star.delay}s`,
        animationDuration: `${star.duration}s`
      }}
    />
  );
};

// Night sky component with configuration
const NightSky = () => {
  const [stars, setStars] = useState([]);
  const [config, setConfig] = useState({
    starDensity: 300,
    brightnessMultiplier: 1.0,
    visibleClasses: {
      'O': true,
      'B': true,
      'A': true,
      'F': true,
      'G': true,
      'K': true,
      'M': true
    }
  });

  // Generate stars with stellar classification
  const generateStars = () => {
    const newStars = [];
    const spectralTypes = Object.keys(spectralClasses);
    
    for (let i = 0; i < config.starDensity; i++) {
      // Randomly assign a spectral class
      const randomClassIndex = Math.floor(Math.random() * spectralTypes.length);
      const spectralClass = spectralTypes[randomClassIndex];
      const classData = spectralClasses[spectralClass];
      
      // Generate star properties
      const baseBrightness = Math.random();
      // Apply class-based brightness multiplier
      const brightness = Math.min(1.0, baseBrightness * classData.baseBrightness * config.brightnessMultiplier);
      // Calculate size based on class
      const size = (Math.random() * 2 + 1) * classData.sizeMultiplier;
      // Calculate opacity based on brightness
      const opacity = Math.min(1.0, brightness * 0.8 + 0.2);
      
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        opacity: opacity,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        brightness: brightness,
        spectralClass: spectralClass,
        color: classData.color
      });
    }
    
    setStars(newStars);
  };

  // Regenerate stars when config changes
  useEffect(() => {
    generateStars();
  }, [config.starDensity, config.brightnessMultiplier, config.visibleClasses]);

  // Handle configuration changes
  const handleDensityChange = (e) => {
    setConfig(prev => ({
      ...prev,
      starDensity: parseInt(e.target.value)
    }));
  };

  const handleBrightnessChange = (e) => {
    setConfig(prev => ({
      ...prev,
      brightnessMultiplier: parseFloat(e.target.value)
    }));
  };

  const toggleClassVisibility = (spectralClass) => {
    setConfig(prev => ({
      ...prev,
      visibleClasses: {
        ...prev.visibleClasses,
        [spectralClass]: !prev.visibleClasses[spectralClass]
      }
    }));
  };

  // Filter stars based on visibility settings
  const visibleStars = stars.filter(star => config.visibleClasses[star.spectralClass]);

  return (
    <div className="night-sky-container">
      <div className="controls">
        <h3>Star Configuration</h3>
        <div className="control-group">
          <label htmlFor="density">Star Density: {config.starDensity}</label>
          <input
            type="range"
            id="density"
            min="50"
            max="1000"
            value={config.starDensity}
            onChange={handleDensityChange}
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="brightness">Brightness: {config.brightnessMultiplier.toFixed(1)}x</label>
          <input
            type="range"
            id="brightness"
            min="0.1"
            max="2.0"
            step="0.1"
            value={config.brightnessMultiplier}
            onChange={handleBrightnessChange}
          />
        </div>
        
        <div className="control-group">
          <h4>Star Class Visibility</h4>
          <div className="class-toggle-container">
            {Object.keys(spectralClasses).map(classType => (
              <label key={classType} className="class-toggle">
                <input
                  type="checkbox"
                  checked={config.visibleClasses[classType]}
                  onChange={() => toggleClassVisibility(classType)}
                />
                <span className={`class-indicator ${classType.toLowerCase()}`}>
                  {classType}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
      
      <div className="night-sky">
        {visibleStars.map(star => (
          <Star key={star.id} star={star} />
        ))}
      </div>
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
