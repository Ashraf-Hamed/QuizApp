import { questions, questionContainer , quiz} from "./index.js";



export class Question {

    constructor(index) {
        this.index = index;
        this.question = questions[index].question;
        this.category = questions[index].category;
        this.correctAnswer = questions[index].correct_answer;
        this.incorrectAnswer = questions[index].incorrect_answers;
        this.allAnswer = this.setAllAnswer()  ;
        this.answered = false ;
      }


    setAllAnswer() {

        return this.incorrectAnswer.concat(this.correctAnswer).sort()
    }

    displayQuestion() {

        const questionShape = `
        <div class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn">
              
              <div class="w-100 d-flex justify-content-between">
                <span class="btn btn-category">${this.category}</span>
                <span class="fs-6 btn btn-questions">${this.index + 1} of ${questions.length} Questions</span>
              </div>

              <h2 class="text-capitalize h4 text-center">${this.question}</h2>  

              <ul class="Answer w-100 list-unstyled m-0 d-flex flex-wrap text-center">
                ${this.allAnswer.map((answer) => `<li>${answer}</li>`).join('')}
              </ul>
              
               <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="fa-regular fa-face-smile"></i> Score: ${quiz.score} </h2>        

            </div>
        
        `
        questionContainer.innerHTML = questionShape;

        let answeBtn = document.querySelectorAll("ul li");
        for (let i = 0; i < answeBtn.length ; i++)  {
                 answeBtn[i].addEventListener("click", (e) => {
                        this.checkQuestion(e)
                    })
        }
    }



    checkQuestion(e) {
        
        
        if(this.answered == false) {
            this.answered = true;
            if (e.target.innerHTML == this.correctAnswer) {
                quiz.score +=1;
                console.log('correct');
                e.target.classList.add('correct' , 'animate__animated' ,'animate__shakeY')
            }
            else {
                e.target.classList.add('wrong' , 'animate__animated' ,'animate__bounce')
            }
        }

      this.animateCardQuestion(e.target , 800);
    }


    animateCardQuestion(element , duration) {

     setTimeout(() => {
        
        element.closest('.question').classList.replace('animate__bounceIn' , 'animate__backOutLeft')
     }, duration);
     setTimeout(() => {
         this.nextQuestion()
         element.closest('.question').classList.replace('animate__backOutLeft' , 'animate__backInLeft')
     }, duration * 2);
        
    }


    nextQuestion() {

       this.index +=1 ;

       if (this.index > questions.length - 1)  {

        questionContainer.innerHTML = quiz.endQuiz();

        const loadBtn = document.getElementById('reload')
        loadBtn.addEventListener('click', () => {
            window.location.reload()
        })

        return ;
       }
       let newQuestion = new Question(this.index);
       console.log(newQuestion);
       newQuestion.displayQuestion()
    }
    
}