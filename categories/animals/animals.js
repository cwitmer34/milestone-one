const _URL = "https://opentdb.com/api.php?amount=1&category=27&type=multiple";
const _questionHTML = document.getElementById("question");
const _answerOne = document.getElementById("answer-1");
const _answerTwo = document.getElementById("answer-2");
const _answerThree = document.getElementById("answer-3");
const _answerFour = document.getElementById("answer-4");
const btns = document.querySelectorAll("button[id^=answer-]");
var runCount = 0;
var correct = 0;
// Credits to my friend Jonah for teaching me how to cache data that I get from an API call.
var triviaData = null;

async function getTrivia() {
  return fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
    .then((res) => res.json())
    .then((res) => {
      triviaData = res;
      return res;
    });
}
// anywhere I want the trivia data:
// const trivia = await getTrivia() --- makes the call, or uses the cached data

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
async function triviaGame() {
  const trivia = await getTrivia();
  async function appendData() {
    let totalAnswers = [
      ...trivia.results[0].incorrect_answers,
      trivia.results[0].correct_answer,
    ];
    // Apparently I need 2 different arrays to sort them because array variables are stored by reference? Learn something new everyday I guess.
    let totalAnswers2 = [...totalAnswers];
    let sorted = shuffleArray(totalAnswers2);
    // Ensures the proper symbol shows instead of the HTML entities
    const doc = new DOMParser().parseFromString(
      trivia.results[0].question,
      "text/html"
    );
    _questionHTML.textContent = doc.documentElement.textContent;
    console.log(trivia.results[0].correct_answer, "- Correct Answer");
    // Appends info to the DOM
    _answerOne.textContent = sorted[0];
    _answerTwo.textContent = sorted[1];
    _answerThree.textContent = sorted[2];
    _answerFour.textContent = sorted[3];
  }
  async function checkAnswer() {
    btns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        console.log(event.target.textContent);
        if (event.target.textContent === trivia.results[0].correct_answer) {
          event.target.style.backgroundColor = "#52D452";
          // Disables all buttons after one has been clicked.
          btns.forEach((btn) => {
            btn.disabled = true;
          });
          setTimeout(() => {
            if (runCount === 10) {
              return;
            }
            runCount++;
            btns.forEach((btn) => {
              btn.disabled = false;
            });
            btn.style.backgroundColor = "";
            correct++;
            document.getElementById(
              "amount-correct"
            ).textContent = `${correct}/10`;
            triviaGame();
          }, 2000);
        } else {
          event.target.style.backgroundColor = "#FF3D33";
          // document.getElementById("correct-text").textContent =
          //   trivia.results[0].correct_answer;
          // document.getElementById("correct-answer").style.visibility =
          //   "visible";
          setTimeout(() => {
            if (runCount === 10) {
              return;
            }
            // document.getElementById("correct-answer").style.visibility =
            //   "hidden";
            btns.forEach((btn) => {
              btn.disabled = false;
            });
            btn.style.backgroundColor = "";
            runCount++;
            triviaGame();
          }, 3500);
        }
      });
    });
  }

  checkAnswer();
  appendData();
}

const iterate = () => {
  triviaGame();
  runCount++;
};

iterate();
