var isWin = false;
var timerCount = 15;
var winCount = 0;
var lossCount = 0;
var currentQuestion = 0;
var score = 0;

var questions = [
  { question: "What does CSS stand for?",
    options: ["Common Style Syntax", "Cosmetic Syntax Slides", "Cascading Style Sheets"]
    answer:["Cascading Style Sheets"]} 
    question: "GitHub is a _____?",
    options: ["Local repository", "Remote Repository"]
    answer:["Remote Repository"] 
  { question: "Who invented Bootstrap?",
    options: ["Mark Zuckerberg", "Elon Musk", "Mark Otto and Jacob Thornton"]
    answer:["Mark Otto and Jacob Thornton"]} 
]

function initiategame () {
  isWin = false;
  timerCount = 15;
  startButton.disabled = true;
  renderBlanks();
  startTimer();
}
function losegame() {
  wordBlank.textContent - "You're a WINNER!";
  winCounter++;
  startButton.disabled = false;
  setWins();
}
function wingame() {
  workBlank.textContent = "The game is OVER! Keep Trying!"
  loserCounter++;
  startButton = false;
  setLosses();
}

function startTimer() {
  timerCount--;
  timerElement.textContent = timerCount;
  if (timerCount >= 0) {
    if (isWin && timerCount > 0) {
        clearInterval(timer);
        wingame();
    }
  }

  if (timerCount === 0) {
    clearInterval(timer);
    losegame();
  }} 1000;

//need to figure out how to validate answers
//need to complete the tracker
//I listend to recordings again and ran out of time to finish.
