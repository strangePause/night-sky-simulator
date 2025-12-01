# Night Sky Simulator

A React-based night sky simulator with twinkling stars and realistic visual effects.

## Features

- Dynamic star field generation with random positions
- Twinkling animation effects for stars
- Realistic star sizes and brightness variations
- Stellar classification system (O, B, A, F, G, K, M) with distinct colors
- Configurable star density and brightness
- Visibility controls for different stellar classes
- Responsive design that works on different screen sizes
- Dark gradient background for authentic night sky appearance

## Technologies Used

- React.js
- CSS animations for twinkling effect
- Responsive design principles

## How It Works

The simulator generates stars with realistic stellar classifications based on spectral types:
- **O-type**: Blue-white, hottest and brightest
- **B-type**: Blue-white
- **A-type**: White
- **F-type**: Yellow-white
- **G-type**: Yellow (like our Sun)
- **K-type**: Orange
- **M-type**: Red, coolest and dimmest

Each star has:
- Random position on the screen (x, y coordinates)
- Size based on stellar class
- Brightness determined by class and configuration settings
- Random opacity between 0.2-1.0
- Random twinkling animation duration and delay

## Configuration Controls

The simulator includes interactive controls to customize the night sky:
- **Star Density**: Adjust the number of stars (50-1000)
- **Brightness**: Control overall brightness level (0.1x-2.0x)
- **Star Class Visibility**: Toggle visibility for each stellar class

## Running the Project

1. Make sure you have Node.js installed
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server
5. Open [http://localhost:3001](http://localhost:3001) in your browser

## Customization

You can customize the simulator by:
- Adjusting the number of stars in the `generateStars()` function
- Modifying star sizes, opacities, and animation properties
- Changing the background gradient colors in CSS
- Adding more celestial objects like planets or constellations
- Extending the stellar classification system with additional classes

## Project Structure

```
src/
├── App.js          # Main component with night sky simulation and controls
├── App.css         # Styling for the night sky and stars
└── index.js        # Entry point
```

## License

This project is open source and available under the MIT License.
