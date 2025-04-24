// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
function addWordToDOM(){
  const randomIndex = Math.floor(Math.random() * words.length);
  word.innerHTML = words[randomIndex];
}
  const words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
  ];



//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;
let timerInterval;

function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}

function updateTime(){
  timerInterval = setInterval(() => {
    time--;
    timeEl.innerHTML = time;

    if(time === 0){
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

function gameOver(){
  endgameEl.style.display = 'flex';

  endgameEl.innerHTML = `
    <div>
      <h1>Game Over!</h1>
      <h2>Your final score is: ${score}</h2>
      <button onclick = "location.reload()">Play Again</button>
    </div> 
  `;
}

text.addEventListener('input', function(e){
  const inputText = e.target.value;

  if (inputText === word.innerHTML){
    updateScore();

    addWordToDOM();

    time +=5 ;
    timeEl.innerHTML = time;

    e.target.value = '';
  }
});

addWordToDOM();
updateTime();