const startButton = document.getElementById('start-btn')
const firstPage = document.getElementById('first')
const questionContainerEl = document.getElementById("question-container")
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame () {
    console.log('started')
    firstPage.classList.add('hide')
    //random question so they're not always asked in same order 
    //shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    var score = 0
    
    questionContainerEl.classList.remove('hide')
    
    setQuestion()
}

function setQuestion () {
    resetState()
    console.log(questions[currentQuestionIndex])

    while(currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex])
    }

}

//shows question and runs correct or false logic 
function showQuestion(question) {
    questionEl.innerText = question.question
    console.log(question)
    for (let index = 0; index < question.answers; index++) {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        button.setAttribute('id', index)
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
        
    }
    
        
        //if(answers.correct) {
       //     button.dataset.correct = answers.correct
      // }

    
}

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
    // button.addEventListener('click', () => {
    //     currentQuestionIndex++
    //     setNextQuestion()
    // })

}


function selectAnswer(e) {
    const selectedButton = e.target
    console.log('things');
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
        
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    

    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } 
    else {
        element.classList.add('correct')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'How many chickens does it take to cross a road?',
        answers: [ 
            { text: 'five'},
            { text: 'nine'},
            { text: 'fourteen'},
            { text: 'seven'},
        ],
        answerWord: 2

    },

    {
        question: 'How many xxxx does it take to cross a road?',
        answers: [ 
            { text: 'x', correct: false },
            { text: 'x2', correct: false},
            { text: 'fourteen', correct: true},
            { text: 'seven', correct: false}
        ]
    },

    {
        question: 'How many cens does it take to cross a road?',
        answers: [ 
            { text: 'five', correct: false },
            { text: 'nine', correct: false},
            { text: 'fourteen', correct: true},
            { text: 'seven', correct: false}
        ]
    }
]