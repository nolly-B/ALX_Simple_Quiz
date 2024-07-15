function checkAnswer() {
  let correctAnswer = "4";
  let quizValue = document.querySelector('input[name="quiz"]');
  let userAnswer = quizValue.value;
  let textContent = document.querySelector("#feedback ");

  if (correctAnswer === userAnswer) {
    return (textContent.innerHTML = "Correct! Well done.");
  } else {
    return (textContent.innerHTML = "That's incorrect. Try again!");
  }
}
let submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
