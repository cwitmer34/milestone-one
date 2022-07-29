const _URL = "https://opentdb.com/api.php?amount=1&category=27&type=multiple";

async function getQuestion() {
  console.log("fetch start")
  let questionData = await fetch(`${_URL}`)
  console.log("fetch complete")
  console.log("json start")
  let data = await questionData.json();
  console.log("json complete")
  return question = data.results[0]
}

async function displayQuestion() {
  let question = await getQuestion().then();
  console.log(question.incorrect_answers)
}

displayQuestion()

// At the time of making this comment, the OpenTDB (https://opentdb.com) API was down and I was struggling to find the structure that their objects follow to create mock data.