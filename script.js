console.log("connecté !");
// define our data and state objects
const quizQuestions = [
  {
    questionText: "What is the capital of Ireland?",
    answerOptions: ["New York", "Dublin", "Madrid", "Paris"],
    answer: "Dublin",
  },
  {
    questionText: "Comment s'appelle le prophète",
    answerOptions: ["Abdullah", "Harry Potter", "Omar", "Mohamed"],
    answer: "Mohamed",
  },
  {
    questionText: "How many days are in September",
    answerOptions: ["28", "29", "30", "31"],
    answer: "30",
  },
];

console.log(quizQuestions.length);

let currentQuestion = 0; //computers start counting from zero remember!
let currentScore = 0;

// get our elements from the dom
let progress = document.querySelector("#progressBar");
console.log(progress);
let percentage = parseInt(progress.getAttribute("data-progress").replace("%", ""));
// percentage = 40;
console.log(percentage);
progress.setAttribute("data-progress", percentage + "%");
document.documentElement.style.setProperty("--progress", percentage + "%");

const quizContainer = document.querySelector(".quiz-container");
const questionDisplay = document.querySelector(".question");
const answerList = document.querySelector(".answer-list");
const score = document.querySelector(".quiz-score");
const answerValidate = document.querySelector(".answer-validate");

// helper methods to create our elements
// const createQuizQuestion = quizQuestion => {
function createQuizQuestion(quizQuestion) {
  createQuestionText(quizQuestion.questionText);
  createAnswerButtons(quizQuestion.answerOptions);
}

// const createQuizScore = () => {
function createQuizScore() {
  questionDisplay.style.display = "none";
  answerList.style.display = "none";
  answerValidate.style.display = "none";
  progress.style.display = "none";
  // show the score
  score.style.display = "block";
  score.textContent = "You scored " + currentScore + " out of " + quizQuestions.length;
}

// const createQuestionText = questionText => {
//   // append our div to our answer list
//   questionDisplay.textContent = "Q)" + questionText;
// };
function createQuestionText(questionText) {
  questionDisplay.textContent = "Q)" + questionText;
}
function progressBar() {
  let progress = document.querySelector("#progressBar");
  console.log(progress);
  let percentage = parseInt(progress.getAttribute("data-progress").replace("%", ""));
  percentage += 100 / quizQuestions.length;
  console.log(percentage);
  progress.setAttribute("data-progress", percentage + "%");
  document.documentElement.style.setProperty("--progress", percentage + "%");
  percentage += 100 / quizQuestions.length;
  console.log(percentage);
}

function answerValid() {
  answerValidate.style.display = "flex";
  answerValidate.textContent = "Valider";
  answerValidate.addEventListener("click", () => {
    console.log("c'est bon");
    currentQuestion += 1;
     progressBar();
    
    // display questions if we still have them,
    // otherwise display the scores
    if (quizQuestions[currentQuestion]) {
      createQuizQuestion(quizQuestions[currentQuestion]);
    } else {
      createQuizScore();
    }
  });
}
answerValid();

// const createAnswerButtons = answerOptions => {
function createAnswerButtons(answerOptions) {
  //clear our answer list before creating new answer buttons
  answerList.innerHTML = "";

  // our answerOptions is an array, so we map over it to
  // create a list of answer buttons
  answerOptions.map((answerOption) => {
    // create an answer item div and give it a class
    const answerItemDiv = document.createElement("div");
    answerItemDiv.className = "answer-item";
    //answerItemDiv.classList.add("answer-item");

    //create a button
    const answerButton = document.createElement("button");
    answerButton.textContent = answerOption;

    // add an eventlistener to this button to check if answer is correct or not
    // handleAnswerButtonClick();

    answerButton.addEventListener("click", () => {
      // get our currentQuestion
      answerButton.style.background = "linear-gradient(126deg, rgba(86, 69, 185, 1) 10%, rgba(228, 117, 181, 0.9925012241224614) 94%);";
      const question = quizQuestions[currentQuestion];
      // compare the answer the user selected to the correct answer
      if (question.answer === answerButton.textContent) {
        currentScore += 1;
      }
      // move on to the next question
    });

    // append button to our div
    answerItemDiv.appendChild(answerButton);

    // append our div to our answer list
    answerList.appendChild(answerItemDiv);
  });
}

// const handleAnswerButtonClick = answerButton => {};
function handleAnswerButtonClick(answerButton) {}

(function () {
  createQuizQuestion(quizQuestions[0]);
})();
