let currentQuestions = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio("./assets/sounds/615099_6890478-lq.mp3");
let AUDIO_FAIL = new Audio("./assets/sounds/264823_2261906-lq.mp3");

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestions();
}

function showQuestions() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNExtQuestion();
  }
}

function gameIsOver() {
  return currentQuestions >= questions.length;
}

function answer(selection) {
  let question = questions[currentQuestions];
  console.log("Selected answer is ", selection);
  console.log("Current question is ", question["right_answer"]);

  let rightAnswer = question["right_answer"];

  if (selection == question["right_answer"]) {
    console.log("Richtige Antwort");
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    console.log("Falsche Antwort");
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(rightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }

  document.getElementById("next-question").disabled = false;
}

function nextQuestion() {
  currentQuestions++; // z.b.erhöht um eine Frage von 0 auf 1

  document.getElementById("next-question").disabled = true;
  restAnswerButtons();
  showQuestions(); //zeigt nächste Frage an
}

function restAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("header-image").src =
    "./assets/img/quiz-2137664_1920.jpg";
  document.getElementById("questionBody").style = ""; //questionBody wieder anzeigen
  document.getElementById("endScreen").style = "display:none"; //Endsceen ausblenden
  currentQuestions = 0;
  rightQuestions = 0;
  init();
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display:none";

  document.getElementById("amoaunt-of-questions").innerHTML = questions.length;
  document.getElementById("amoaunt-of-right-questions").innerHTML =
    rightQuestions;
  document.getElementById("header-image").src = "./assets/img/brain result.png";
}

function updateToNExtQuestion() {
  let question = questions[currentQuestions];

  document.getElementById("questions-number").innerHTML = currentQuestions + 1;
  document.getElementById("question").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgressBar() {
  let percent = (currentQuestions + 1) / questions.length;
  percent = Math.round(percent * 100);

  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
}
