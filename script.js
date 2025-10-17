let currentQuestions = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestions();
}

function showQuestions() {
  let question = questions[currentQuestions];

  document.getElementById("question").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(selection) {
  let question = questions[currentQuestions];
  console.log("Selected answer is ", selection);
  console.log("Current question is ", question["right_answer"]);

  let rightAnswer = question["right_answer"];

  if (selection == question["right_answer"]) {
    console.log("Richtige Antwort");
    document.getElementById(selection).parentNode.classList.add("bg-success");
  } else {
    console.log("Falsche Antwort");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(rightAnswer).parentNode.classList.add("bg-success");
  }

  document.getElementById('next-button').
}

