
const _totalCorrect = document.getElementById("amount-correct");
const _questionAmount = document.getElementById("question-amount");
const _question = document.getElementById("question");
const _possibleAnswers = document.getElementById("possible-answers");
const _correctAnswer = document.getElementById("correct-answer");
const _checkAnswerBtn = document.getElementById("check-answer");
const _playAgainBtn = document.getElementById("play-again");

function setCurrentTime() {
  setTimeout(() => {
    let getLocalTime = new Date().toLocaleTimeString();
    document.getElementById("current-time").textContent = getLocalTime; // updates time every ms (Counter seemed to be inconsistent with a timeout of 1000ms (1s))
    setCurrentTime();
  }, 1);
}



setCurrentTime();
