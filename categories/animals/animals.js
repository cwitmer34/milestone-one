const _URL = "https://opentdb.com/api.php?amount=1&category=27&type=multiple";
const _questionHTML = document.getElementById("question");
const _answerOne = document.getElementById("answer-1");
const _answerTwo = document.getElementById("answer-2");
const _answerThree = document.getElementById("answer-3");
const _answerFour = document.getElementById("answer-4");
// Credits to my friend Jonah for teaching me how to cache data that I get from an API call.
var triviaData = null;

async function getTrivia() {
  if (triviaData != null) {
    return triviaData;
  }

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

function checkAnswer() {}

async function appendQuestion() {
  const trivia = await getTrivia();
  console.log(trivia.results[0].question);
  // Credits to JJ99#7150 on discord for teaching me this trick below (HTML entities were showing instead of the symbol - i.e single quotes showed as &#039; instead of ')
  const doc = new DOMParser().parseFromString(
    trivia.results[0].question,
    "text/html"
  );
  console.log(doc);
  _questionHTML.textContent = doc.documentElement.textContent;
}

async function appendAnswers() {
  const trivia = await getTrivia();
  console.log(trivia);
  questionData.incorrect_answers[3] = questionData.correct_answer;
  let totalAnswers = questionData.incorrect_answers;
  // Apparently I need 2 different arrays to sort them because array variables are stored by reference? Learn something new everyday I guess.
  let totalAnswers2 = [...totalAnswers];
  console.log(totalAnswers);
  let sorted = shuffleArray(totalAnswers2);
  console.log(sorted, "sorted");
  console.log(trivia.correct_answer, "- Correct Answer");
  _answerOne.textContent = sorted[0];
  _answerTwo.textContent = sorted[1];
  _answerThree.textContent = sorted[2];
  _answerFour.textContent = sorted[3];
}

async function displayQuestionData() {
  appendQuestion();
}

async function checkAnswer(buttonId) {
  let questionData = await getQuestion();
  let button = document.getElementById(`${buttonId}`);
  console.log(button.textContent, "content");
  console.log(questionData.correct_answer);
  if (button.textContent === questionData.correct_answer) {
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
}

// appendAnswers();
// displayQuestionData();

appendQuestion();
