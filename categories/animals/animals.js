const _URL = "https://opentdb.com/api.php?amount=1&category=27&type=multiple";
const _questionHTML = document.getElementById("question");
const _answerOne = document.getElementById("answer-1");
const _answerTwo = document.getElementById("answer-2");
const _answerThree = document.getElementById("answer-3");
const _answerFour = document.getElementById("answer-4");

async function getQuestion() {
  let questionData = await fetch(`${_URL}`);
  let data = await questionData.json();
  return data.results[0];
}

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

async function appendQuestion() {
  let question = await getQuestion();
  // Credits to JJ99#7150 on discord for teaching me this trick below (HTML entities were showing instead of the symbol - i.e single quotes showed as &#039; instead of ')
  const doc = new DOMParser().parseFromString(question.question, "text/html");
  _questionHTML.textContent = doc.documentElement.textContent;
}

async function appendAnswers() {
  let question = await getQuestion();
  question.incorrect_answers[3] = question.correct_answer;
  let sorted = shuffleArray(question.incorrect_answers);
  console.log(sorted);
  console.log(question.incorrect_answers);
}

async function displayQuestionData() {
  appendQuestion();
}

appendAnswers();
displayQuestionData();
