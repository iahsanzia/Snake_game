"# Snake Game

A classic Snake game built with HTML5, CSS3, and JavaScript. Control the snake to eat food and grow longer while avoiding collisions with walls and yourself!

## Features

- **Classic Gameplay**: Navigate the snake using arrow keys
- **Score System**: Earn points by eating food
- **High Score Tracking**: Your best score is saved in local storage
- **Progressive Difficulty**: Game speed increases as you score more points
- **Sound Effects**: Audio feedback for movement, eating food, and game over
- **Background Music**: Immersive gaming experience with music
- **Responsive Design**: Game board adapts to different screen sizes

## How to Play

1. Open `index.html` in your web browser
2. Use the arrow keys to control the snake:
   - ↑ Arrow Up: Move up
   - ↓ Arrow Down: Move down
   - ← Arrow Left: Move left
   - → Arrow Right: Move right
3. Eat the yellow food to grow and increase your score
4. Avoid hitting the walls or the snake's own body
5. Try to beat your high score!

## Game Controls

| Key | Action |
|-----|--------|
| ↑ | Move Up |
| ↓ | Move Down |
| ← | Move Left |
| → | Move Right |

## Technical Details

### Project Structure
```
Snake Game/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Game styling
├── js/
│   └── index.js        # Game logic and mechanics
├── music/
│   ├── food.mp3        # Sound when eating food
│   ├── move.mp3        # Movement sound
│   ├── gameover.mp3    # Game over sound
│   └── music.mp3       # Background music
├── img/
│   └── bg.jpg          # Background image
└── README.md           # Project documentation
```

### Technologies Used
- **HTML5**: Game structure and canvas
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic, collision detection, and audio management
- **Local Storage**: High score persistence

### Game Mechanics
- **Grid-based Movement**: 18x18 grid system
- **Collision Detection**: Wall and self-collision detection
- **Food Generation**: Random food placement
- **Score Management**: Real-time score updates and high score tracking
- **Speed Progression**: Increases by 0.5 units per food eaten

## Installation & Setup

1. Clone or download the repository
2. Ensure all files are in the correct directory structure
3. Open `index.html` in any modern web browser
4. No additional installation required!

## Browser Compatibility

This game works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

- [ ] Multiple difficulty levels
- [ ] Power-ups and special foods
- [ ] Multiplayer mode
- [ ] Mobile touch controls
- [ ] Leaderboard system
- [ ] Custom themes and skins

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the MIT License." 
