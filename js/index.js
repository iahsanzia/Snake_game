//Constants and Variables
let direction = {x:0, y: 0};
const foodSound = new Audio('../music/food.mp3');
const moveSound = new Audio('../music/move.mp3');
const gameOverSound = new Audio('../music/gameover.mp3');
const music = new Audio('../music/music.mp3');
let speed = 5;
let lastPaintTime = 0;
let snakeArr = [{x: 13, y: 15}];
let food = {x: 6, y: 7};
let score = 0;
let hiscoreval = 0;
const board = document.getElementById('board');
const scoreBox = document.getElementById('scoreBox');
const hiscoreBox = document.getElementById('HighscoreBox');
//Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function isCollide(snakeArr) {
    // If snake collides with itself or walls
    for (let i = 1; i < snakeArr.length; i++) {
        if(snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
            return true;
}}
    if (snakeArr[0].x >= 18 || snakeArr[0].x <= 0 || snakeArr[0].y >= 18 || snakeArr[0].y <= 0) {
        return true;
        }
    
    return false;
} 

function gameEngine() {
    // Update the game logic
    // For example, update snake position, check for collisions, etc.    // If collides with itself or walls, end the game
    if(isCollide(snakeArr)){
        gameOverSound.play();
        music.pause();
        direction = {x: 0, y: 0};
        alert("Game Over! Press any key to play again.");
        snakeArr = [{x: 13, y: 15}];
        music.play();
        score = 0;
        scoreBox.innerHTML = "Score: " + score;
    }
    // if snake eats food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score += 1;
        if(score> hiscoreval){
            localStorage.setItem("hiscore", JSON.stringify(score));
            hiscoreval = score;
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        speed += 0.5; // Increase speed
        // Generate new food position
        food = {x: Math.floor(Math.random() * 18) + 1, y: Math.floor(Math.random() * 18) + 1};
        snakeArr.unshift({x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y});
    }
    // Move the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i]};
    }   
    snakeArr[0].x += direction.x;
    snakeArr[0].y += direction.y;
    
    // Render the game state
    // For example, draw the snake and food on the canvas
    board.innerHTML = "";    snakeArr.forEach((e, index) => { 
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if (index === 0 ){
            snakeElement.classList.add('head');

        }        else{
             snakeElement.classList.add('snake');

        }
        board.appendChild(snakeElement);
    });
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);



}



//Logic
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
}
// Initialize displays
scoreBox.innerHTML = "Score: " + score;
hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    direction = {x: 0, y: 1} // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            direction.x = 0;
            direction.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            direction.x = 0;
            direction.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            direction.x = -1;
            direction.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            direction.x = 1;
            direction.y = 0;
            break;
        default:
            break;
    }

});