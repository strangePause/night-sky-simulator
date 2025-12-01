# Night Sky Simulator

A React-based night sky simulator with twinkling stars and realistic visual effects.

## Features

- Dynamic star field generation with random positions
- Twinkling animation effects for stars
- Realistic star sizes and brightness variations
- Responsive design that works on different screen sizes
- Dark gradient background for authentic night sky appearance

## Technologies Used

- React.js
- CSS animations for twinkling effect
- Responsive design principles

## How It Works

The simulator generates 300 stars with random positions, sizes, opacities, and twinkling behaviors. Each star has:
- Random position on the screen (x, y coordinates)
- Random size between 1-4 pixels
- Random opacity between 0.2-1.0
- Random twinkling animation duration and delay
- Different brightness levels to create a realistic night sky

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

## Project Structure

```
src/
├── App.js          # Main component with night sky simulation
├── App.css         # Styling for the night sky and stars
└── index.js        # Entry point
```

## License

This project is open source and available under the MIT License.
