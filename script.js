
const quizQuestions = [
  {
    level: 1,
    tableaux:[
  {
    questionText: "Quelle est la capitale des Comores?",
    answerOptions: ["Econol", "Dublin", "Moroni", "Gaza"],
    answer: "Moroni",
  },
  {
    questionText: "Comment s'appelle le prophète",
    answerOptions: ["Abdullah", "Harry Potter", "Omar", "Mohamed"],
    answer: "Mohamed",
  },
  {
    questionText: "2X8",
    answerOptions: ["16", "29", "14", "12"],
    answer: "16",
  }
] 
  },
  {
     level: 2,
    tableaux: [
  {
    questionText: "Comment s'appelle le Premier Calife",
    answerOptions: ["Omar", "Abou Bakr", "Ali", "Bilal"],
    answer: "Abou Bakr",
    },
   {     questionText: "Comment s'appelle le deuxième Calife",
    answerOptions: ["Omar", "Abou Bakr", "Ali", "Othman"],
     answer: "Omar",
   },
   {
    questionText: "Comment s'appelle le troisième Calife",
    answerOptions: ["Omar", "Abou Bakr", "Ali", "Othman"],
    answer: "Ali",
   },
 {
  questionText: "Comment s'appelle le quatrième Calife",
  answerOptions: ["Bilal", "Othman", "Ali", "Abou Bakr"],
    answer: "Othman",
   }
  ]
 },
 {
  level: 3,
 tableaux: [
{
 questionText: "Quelle est la traduction de : ntsanu ",
 answerOptions: ["8 ", "5", "2", "4"],
 answer: "5",
 },
{   
  questionText: "Quelle est la traduction de : kume na ntsanu ",
  answerOptions: ["8 ", "10", "14", "15"],
  answer: "15",
},
{
  questionText: "Quelle est la traduction de : mengo mfukare ",
  answerOptions: ["60 ", "70", "80", "50"],
  answer: "70",
},
{
  questionText: "Quelle est la traduction de : madjana mayili ",
  answerOptions: ["40 ", "200", "400", "2000"],
  answer: "200",
},
{
  questionText: "Quelle est la traduction de : shihwi ",
  answerOptions: ["8000", "10000", "1000", "900"],
  answer: "1000",
},
 {
  questionText: "Quelle est la traduction de : mengo shenda ",
  answerOptions: ["85 ", "90", "600", "60"],
  answer: "90",
 }
]
}
];

let level = 0;

let currentQuestion = 0; //computers start counting from zero remember!
let currentScore = 0;
let percentage = 0;


// get our elements from the dom
let progress = document.querySelector("#progressBar");
console.log(progress);
// let percentage = parseInt(progress.getAttribute("data-progress").replace("%", ""));
// percentage = 40;
// console.log(percentage);
progress.setAttribute("data-progress", percentage + "%");
document.documentElement.style.setProperty("--progress", percentage + "%");

const letters = ["A","B","C","D"];
const quizContainer = document.querySelector(".quiz-container");
const questionDisplay = document.querySelector(".question");
const answerList = document.querySelector(".answer-list");
const score = document.querySelector(".quiz-score");
// const answerValidate = document.querySelector(".answer-validate");
const resultBar = document.querySelector(".resultBar");
let nbreQuestion = document.querySelector(".nbre_question");
const reloadPlay = document.querySelector(".quiz-level");
const quizReplay = document.querySelector(".quiz-replay");
const buttonConfirm = document.querySelector(".buttonConfirm");
const responseFalse = document.querySelector(".response-false");

console.log(quizQuestions.length);

// helper methods to create our elements
// const createQuizQuestion = quizQuestion => {
function createQuizQuestion(tableau) {
  createQuestionText(tableau.questionText);
  createAnswerButtons(tableau.answerOptions);
  buttonConfirm.style.display = "none";
  responseFalse.style.display = "none"
  
}

// const createQuizScore = () => {
function createQuizScore() {
  questionDisplay.style.display = "none";
  answerList.style.display = "none";
  // answerValidate.style.display = "none";
  progress.style.display = "none";
  resultBar.style.display = "none";
  responseFalse.style.display = "none"
    // show the score
  score.style.display = "flex";
  buttonConfirm.style.display = "flex";
  if ((currentScore > (50*(quizQuestions[level].tableaux.length)) / 100) &&
  ((level + 1) === quizQuestions.length)){
    reloadPlay.style.display = "none";
    score.style.display = "flex";
    quizReplay.textContent= "Rejouer la partie";
    score.textContent = "Votre score est de  " + currentScore + "/" + quizQuestions[level].tableaux.length +  " Super!!! vous avez terminé 😃!!";
  } else if ((currentScore > (50*(quizQuestions[level].tableaux.length)) / 100)) {
    reloadPlay.style.display = "flex";
    score.textContent = "Votre score est de  " + currentScore + "/" + quizQuestions[level].tableaux.length +  " Super vous passez au niveau supérieur 😃!!"; 
  }else{
    reloadPlay.style.display = "none";
    score.textContent = "Votre score est de  " + currentScore + "/" + quizQuestions[level].tableaux.length +  " Dommage vous devez rejouer 😥";
  };
  
  
  // progress.dataset.progress = 0
    // rejouer();
}


function niveau() {
  reloadPlay.addEventListener("click",function(){
   score.style.display = "none";
  // location.reload();
  level += 1;
  // if (level < quizQuestions.length){
    
  currentQuestion = 0;
  currentScore = 0;
  nbreQuestion.textContent = "";
   progress.dataset.progress = 0;
  
  // progress = 0;
  
  
  
  console.log(level);
  createQuizQuestion(quizQuestions[level].tableaux[0]);
   
    questionDisplay.style.display = "flex";
    answerList.style.display = "block";
    // answerValidate.style.display = "flex";
     progress.style.display = "flex";
    resultBar.style.display = "flex";
    //  createQuizQuestion();
    //  location.reload();
    console.log(level);
  // }else{
  //   reloadPlay.style.display = "none";
  //   score.style.display = "flex";
  //   score.textContent = "Fin de la partie";  
  // };  
  // });

})
}
niveau();

function rejouer() {
  
  quizReplay.addEventListener("click",function(){
    if (level+1 < quizQuestions.length){
    score.style.display = "none";
   // location.reload();
  //  level += 1;
   currentQuestion = 0;
   currentScore = 0;
   nbreQuestion.textContent = "";
    progress.dataset.progress = 0;
    createQuizQuestion(quizQuestions[level].tableaux[0]);
    
    questionDisplay.style.display = "flex";
    answerList.style.display = "block";
     progress.style.display = "flex";
    resultBar.style.display = "flex";
    }else if(( level + 1 === quizQuestions.length) && (currentScore < (50*(quizQuestions[level].tableaux.length)) / 100 )){
    
      score.style.display = "none";
   // location.reload();
  //  level += 1;
   currentQuestion = 0;
   currentScore = 0;
   nbreQuestion.textContent = "";
    progress.dataset.progress = 0;
    createQuizQuestion(quizQuestions[level].tableaux[0]);
    
    questionDisplay.style.display = "flex";
    answerList.style.display = "block";
    answerValidate.style.display = "flex";
     progress.style.display = "flex";
    resultBar.style.display = "flex";  
    }else{
      location.reload();
    }
})
};
rejouer();

function createQuestionText(questionText) {
  questionDisplay.textContent = "Q)" + questionText;
}

 function nbreQuest() {
   nbreQuestion.textContent = currentQuestion +"/"+ quizQuestions[level].tableaux.length;
   
  }
  
function progressBar() {
  let progress = document.querySelector("#progressBar");
  console.log(progress);
 percentage = parseInt(progress.getAttribute("data-progress").replace("%", ""));
percentage += Math.round(100 / quizQuestions[level].tableaux.length);
  console.log(percentage);
  progress.setAttribute("data-progress", percentage + "%");
  document.documentElement.style.setProperty("--progress", percentage + "%");
  percentage += 100 / quizQuestions[level].tableaux.length;
  console.log(percentage);
}

// function answerValid() {
//   // answerValidate.style.display = "flex";
//   answerValidate.textContent = "Valider";
//   answerValidate.addEventListener("click", () => {
//     console.log("c'est bon");
//     currentQuestion += 1;
//     responseFalse.style.display = "none";
//     percentage = 0;
//     // if (question.answer != answerButton.textContent) {
//     //   answerItemDiv.style.backgroundColor = "red";
//     // }
   
//     // if(level === 1){
//     //   currentQuestion = 0
//     // }
//       progressBar();
//       nbreQuest();
//       const question = quizQuestions[level].tableaux[currentQuestion];
//       // compare the answer the user selected to the correct answer
    
//     if (quizQuestions[level].tableaux[currentQuestion]) {
//       createQuizQuestion(quizQuestions[level].tableaux[currentQuestion]);
//     } else {
//       setTimeout(createQuizScore,500);
//     }
//   });
// }
// answerValid();

function createAnswerButtons(answerOptions) {

  //clear our answer list before creating new answer buttons
  answerList.innerHTML = "";

  // our answerOptions is an array, so we map over it to
  // create a list of answer buttons
  
  answerOptions.map((answerOption,i) => {
    
    // create an answer item div and give it a class
    const answerItemDiv = document.createElement("div");
    answerItemDiv.className = "answer-item";
    //answerItemDiv.classList.add("answer-item");
    

    //create a button
     //create a button
     const answerButton = document.createElement("button");
     console.log(answerButton)
     const divbutton = document.createElement("div");
     divbutton.className ="button";
      divbutton.innerHTML = letters[i];
     // divbutton.innerHTML = nextCharacter(propsButton);
     answerButton.textContent = answerOption;
      answerItemDiv.appendChild(divbutton);
      divbutton.style.border = "1px solid black";
    // console.log(answerList);
    
  
    // add an eventlistener to this button to check if answer is correct or not
    // handleAnswerButtonClick();

    answerItemDiv.addEventListener("click", () => {
      const question = quizQuestions[level].tableaux[currentQuestion];
      // compare the answer the user selected to the correct answer
      currentQuestion += 1;
      responseFalse.style.display = "none";
    
      if (question.answer === answerButton.textContent) {
        currentScore += 1;
        
        console.log(currentScore);
        console.log(`Félicitation! au top`)
        // currentScore.slice(-1);
        // console.log(`le slice : ${currentScore}`);
        
       }else{
        // currentScore = 0;
        answerItemDiv.classList.add("answer-false");
        responseFalse.style.display = "block";
        console.log(responseFalse);
        responseFalse.textContent = `La bonne réponse est: ${question.answer}`;
        console.log(`la bonne réponse est : ${question.answer}`)
       }
       progressBar();
      nbreQuest();
       if (quizQuestions[level].tableaux[currentQuestion]) {
       setTimeout(() => createQuizQuestion(quizQuestions[level].tableaux[currentQuestion]),1000);
      } else {
        setTimeout(createQuizScore,1000);
      }
      // move on to the next question
    
  }); 
  // append button to our div
  answerItemDiv.appendChild(answerButton);

  // append our div to our answer list
  answerList.appendChild(answerItemDiv);
});

}

//  const handleAnswerButtonClick = answerButton => {};
//  function handleAnswerButtonClick(answerButton) {};
// level = 1;
 (function () {
   createQuizQuestion(quizQuestions[level].tableaux[0]);
 })();


 