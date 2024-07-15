function checkAnswer() {
  let correctAnswer = "4";

  let quizValue = document.querySelector('[name="quiz"]:checked');
  let userAnswer = quizValue.value;
  let textDisplay = document.querySelector("#feedback ");

  if (correctAnswer === userAnswer) {
    textDisplay.textContent = "Correct! Well done.";
  } else {
    textDisplay.textContent = "That's incorrect. Try again!";
  }
}
let submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
