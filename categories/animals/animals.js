const _URL = "https://opentdb.com/api.php?amount=1&category=27&type=multiple";

async function getQuestion() {
  let questionData = await fetch(`${_URL}`)
  let data = await questionData.json();
  console.log(data.results[0], "1")
}

// function displayQuestion() {
//   let question = getQuestion()
//   console.log(question.result[0])
// }
getQuestion()