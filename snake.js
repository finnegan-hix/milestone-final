const board = document.querySelector("#board");
const ctx = board.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const width = board.width;
const gameHeight = board.height;
const boardBackground = "black";
const snakeColor = "green";
const snakeBorder = "black";
const healthColor = " white";
const size = 40;
let running = false;
let  horizontalMove = size;
let verticalMove = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:size * 4, y:0},
    {x:size * 3, y:0},
    {x:size * 2, y:0},
    {x:size, y:0},
    {x:0, y:0}
];
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);
gameStart();
function gameStart(){
    running= true;
    scoreText.textContent = score;
    createHealth();
    drawFood();
    resume();
};
function resume(){
    if(running){ setTimeout(()=>{clear();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            resume();
        }, 75);
    }
    else{
        displayGameOver();
    }
};