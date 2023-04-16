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
function clear(){
    ctx.fillStyle = boardBackground;
      ctx.fillRect(0, 0, width, gameHeight);
  };
  function createHealth(){
      function randomFood(min, max){
          const randNum = Math.round((Math.random() * (max - min) + min) / size) * size;
          return randNum;
      }
      foodX = randomFood(0, width - size);
      foodY = randomFood(0, width - size);
  };
  function drawFood(){
    ctx.fillStyle = healthColor;
    ctx.fillRect(foodX, foodY, size, size);
};
function moveSnake(){
    const head = {x: snake[0].x + horizontalMove,
                  y: snake[0].y + verticalMove};
    
    snake.unshift(head);
  
    if(snake[0].x == foodX && snake[0].y == foodY){
        score+=1;
        scoreText.textContent = score;
        createHealth();
    }
    else{
        snake.pop();
    }};