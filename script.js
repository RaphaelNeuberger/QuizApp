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


function(selection) {

}