const ANY_CATEGORY_URL = "https://opentdb.com/api.php?amount=10&type=multiple";
const GENERAL_KNOWLEDGE_URL =
  "https://opentdb.com/api.php?amount=10&category=9";
const VIDEO_GAMES_URL = "https://opentdb.com/api.php?amount=10&category=15";
const MOVIES_URL = "https://opentdb.com/api.php?amount=10&category=11";
const MUSIC_URL = "https://opentdb.com/api.php?amount=10&category=12";
const SPORTS_URL = "https://opentdb.com/api.php?amount=10&category=21";
const COMPUTERS_URL = "https://opentdb.com/api.php?amount=10&category=18";
const ART_URL = "https://opentdb.com/api.php?amount=10&category=25";
const ANIMALS_URL = "https://opentdb.com/api.php?amount=10&category=27";

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
