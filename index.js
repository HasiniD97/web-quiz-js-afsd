function startQuiz() {
    let userName = document.getElementById('nameInput').value;
    if (!userName) {
        alert('Enter Name');
    }
    else {

        // add username to session storage
        sessionStorage.setItem("name", userName);
        // goto next page
        window.location.href = 'question.html';
    }
}


let questions = [
    {
        qNumber: 1,
        q: "What is HTML used for?",
        answers: ["Running server code", "Storing data","Styling web pages","Structuring web content"],
        selectedAnswer: null,
        isCorrect: false,
        correctAnswer: 4
    },

    {
        qNumber: 2,
        q: "What does <div> do?",
        answers: ["Adds color", "Links to other pages", "Groups content", "Shows images"],
        selectedAnswer: null,
        isCorrect: false,
        correctAnswer: 3
    },

    {
        qNumber: 3,
        q: "What is CSS used for?",
        answers: ["Styling pages", "Writing logic", "Creating databases", "Handling clicks"],
        selectedAnswer: null,
        isCorrect: false,
        correctAnswer: 1
    },

    {
        qNumber: 4,
        q: "What is let?",
        answers: ["A constant", "A function", "A variable", "A tag"],
        selectedAnswer: null,
        isCorrect: false,
        correctAnswer: 3
    },

    {
        qNumber: 5,
        q: "What is <a> used for?",
        answers: ["Making lists", "Creating links", "Adding styles", "Writing scripts"],
        selectedAnswer: null,
        isCorrect: false,
        correctAnswer: 2
    }

];

let currentIndex = 0;
let correctAnswerCount = 0;
let timecount = 0;
let oneQuestionTime = 0;


function beginQuestion() {

    // time count 20s

    let time = 20;
    timecount = setInterval(countTime, 1000);

    function countTime() {
        document.getElementById('timer-section').innerHTML = `
      <label class="h5 me-5 my-3 fw-bold" for="" style="z-index: 2;">00:${time}</label>`;
        time--;
    }

    // selection -Radio button

    document.getElementById('question-number').innerHTML = ` 
     <div class="d-flex justify-content-center">
     <h5 style="z-index: 4;" id="questionNO">Questions ${questions[0].qNumber}/5</h2> 
     </div>`;

    document.getElementById('question-form').innerHTML = `
    <div class="d-flex justify-content-center mb-2">
    <form action="" class="d-flex flex-column align-items-center shadow p-4 m-2"
      style="background-color:#ffffff; width: 550px; height: 55vh;z-index: 5;">
      <h5 class="p-4 fw-bold" id="showedQuestion">${questions[0].qNumber}.  ${questions[0].q}</h5>
      
      <div class="d-flex flex-column">
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;" >
          <input type="radio" name="Q" id="answerInput1">
          <label for="answerInput1" class="ps-3" >${questions[0].answers[0]}</label>
        </div>
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;">
          <input type="radio" name="Q" id="answerInput2">
          <label for="answerInput2" class="ps-3" >${questions[0].answers[1]}</label>
        </div>
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;">
          <input type="radio" name="Q" id="answerInput3">
          <label for="answerInput3" class="ps-3" >${questions[0].answers[2]}</label>
        </div>
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;">
          <input type="radio" name="Q" id="answerInput4">
          <label for="answerInput4" class="ps-3" >${questions[0].answers[3]}</label>
        </div>
      </div>

    </form>
  </div> `;


    currentIndex++;

    // --------Go to next -time out --------------------------
    oneQuestionTime = setTimeout(goNextQ, 20000);

}

// next questions load
function goNextQ() {
    let selectedRadio = null;
    let selectedID = 0;
    let selectedAnswerNo = null;


    if (currentIndex != 5) {

        // selection -Radio button
        selectedRadio = document.querySelector('input[name="Q"]:checked');

        // check previous question correct answer
        if (selectedRadio) {
            selectedID = selectedRadio.id;
            selectedAnswerNo = parseInt(selectedID.charAt(selectedID.length - 1));
            if (selectedAnswerNo == questions[currentIndex - 1].correctAnswer) {
                questions[currentIndex - 1].isCorrect = true;
            }
        }
        else {
            questions[currentIndex - 1].isCorrect = false;
        }

        //display next question and answers
        document.getElementById('question-number').innerHTML = ` 
       <div class="d-flex justify-content-center">
       <h5 style="z-index: 4;" id="questionNO">Questions ${questions[currentIndex].qNumber}/5</h2> 
       </div>`;

        document.getElementById('question-form').innerHTML = `
        <div class="d-flex justify-content-center mb-2">
        <form action="" class="d-flex flex-column align-items-center shadow p-5 m-2"
        style="background-color:#ffffff; width: 550px; height: 55vh;z-index: 5;">
        <h5 class="p-1 fw-bold" id="showedQuestion">${questions[currentIndex].qNumber}.  ${questions[0].q}</h5>
      
        <div class="d-flex flex-column">
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;" >
          <input type="radio" name="Q" id="answerInput1">
          <label for="answerInput1" class="ps-3" >${questions[currentIndex].answers[0]}</label>
        </div>
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;">
          <input type="radio" name="Q" id="answerInput2">
          <label for="answerInput2" class="ps-3" >${questions[currentIndex].answers[1]}</label>
        </div>
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;">
          <input type="radio" name="Q" id="answerInput3">
          <label for="answerInput3" class="ps-3" >${questions[currentIndex].answers[2]}</label>
        </div>
        <div class="d-flex flex-row justify-content-start m-3" style="width: 350px;">
          <input type="radio" name="Q" id="answerInput4">
          <label for="answerInput4" class="ps-3" >${questions[currentIndex].answers[3]}</label>
        </div>
        </div>

        </form>
        </div> `;
        currentIndex++;

        // time count 20s
        clearInterval(timecount);
        // time count 20s

        let time = 20;
        timecount = setInterval(countTime, 1000);

        function countTime() {
            document.getElementById('timer-section').innerHTML = `
      <label class="h5 me-5 my-3 fw-bold" for="" style="z-index: 2;">00:${time}</label>`;
            time--;
        }
        // --------Go to next -time out --------------------------
        clearTimeout(oneQuestionTime);
        oneQuestionTime = setTimeout(goNextQ, 20000);
    }

    else {
        clearInterval(timecount);
        clearTimeout(oneQuestionTime);

        document.getElementById('timer-section').innerHTML = `
        <label class="h5 me-5 my-3 fw-bold" for="" style="z-index: 2;">00:00</label>`;



        selectedRadio = document.querySelector('input[name="Q"]:checked');
        if (selectedRadio) {
            selectedID = selectedRadio.id;
            selectedAnswerNo = parseInt(selectedID.charAt(selectedID.length - 1));
            if (selectedAnswerNo == questions[currentIndex - 1].correctAnswer) {
                questions[currentIndex - 1].isCorrect = true;
            }
        }
        else {
            questions[currentIndex - 1].isCorrect = false;
        }

        questions.forEach(item => {
            if (item.isCorrect) {
                correctAnswerCount++;
            }
        })

        document.getElementById('question-number').innerHTML = ` 
        <div class="d-flex justify-content-center">
        <h3 style="z-index: 4;" id="questionNO"> Result : ${correctAnswerCount}/5</h3> 
        </div>`;
        document.getElementById('question-form').innerHTML = `<div></div>`
        document.getElementById('btn-display').innerHTML = `<div></div>`

    }
}
