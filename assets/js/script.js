

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
  }}, 1000);
