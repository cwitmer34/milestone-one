const _URL = "https://opentdb.com/api.php?amount=1&category=27&type=multiple";
const _questionHTML = document.getElementById("question");

async function getQuestion() {
  let questionData = await fetch(`${_URL}`);
  let data = await questionData.json();
  return (question = data.results[0]);
}

function randomElement(array) {
  // Credits: Jacob Relkin (https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array)
  return (randomElement = array[Math.floor(Math.random() * array.length)]);
}

async function appendQuestion() {
  let question = await getQuestion().then();
  _questionHTML.textContent = `${question.question}`;
}

async function displayQuestion() {
  let question = await getQuestion().then();
  console.log(question.incorrect_answers);
}

displayQuestion();
appendQuestion();
