

 // ------ Quiz --------- //



    //-- Create (properties) ==>     nubmerofquestion , categories , deifficlty
    // -- (methods) ==>  getQuestion() , endQuiz()




// ------ Qestion --------- //

   //  (properties) ==>     question , correctQuestion , WrongQuerstion , AllAnswer , score,  categories , index
   //  (methods) ==>  displayQuestion() , checkAnswer() , nextQuestion() , animateAnswer() 


import { Question } from "./question.js";
import { Quiz } from "./quiz.js";



const categoryInput = document.getElementById("categoryMenu");
const difficultyOptionsInput = document.getElementById("difficultyOptions");
const questionsNumberInput = document.getElementById("questionsNumber");
const startQuizBtn = document.getElementById("startQuiz");
const quizForm = document.getElementById('quizOptions');
export const questionContainer = document.getElementById("question-container");
export let questions ;
export let quiz ;

startQuizBtn.addEventListener("click", async() => {

    const category = categoryInput.value;
    const levelQuestion = difficultyOptionsInput.value;
    const amountQuestion = questionsNumberInput.value;

    quiz = new Quiz(amountQuestion , category, levelQuestion)
    console.log(quiz);
    questions =  await quiz.getQuestions()
    console.log(questions);
    
    let questionShow = new Question(0)
    console.log(questionShow);

    quizForm.classList.replace('d-flex', 'd-none')

    // // // display question 

    questionShow.displayQuestion()
    
    
})















// import { Quiz } from "./quiz.js";

// export const categoryInput = document.getElementById("categoryMenu");
// export const difficultyOptionsInput = document.getElementById("difficultyOptions");
// export const questionsNumberInput = document.getElementById("questionsNumber");
// export const startQuizBtn = document.getElementById("startQuiz");
// export const quizForm = document.getElementById("quizOptions");
// export const questionsContainer = document.querySelector(".questions-container")

// let quiz ;
// // let questions ;


// startQuizBtn.addEventListener("click", function() {
//    const category =  categoryInput.value
//    const level =  difficultyOptionsInput.value
//    const questionNubmer =  questionsNumberInput.value
   
// //    quiz = new Quiz(category , level, questionNubmer)
//    console.log(questionNubmer);


// })

