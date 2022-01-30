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
    //random question
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    
    questionContainerEl.classList.remove('hide')
    
    setQuestion()
}

function setQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])


}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if(answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    });
    
}

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }

}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        
    });
}



const questions = [
    {
        question: 'How many chickens does it take to cross a road?',
        answers: [ 
            { text: 'five', correct: false },
            { text: 'nine', correct: false},
            { text: 'fourteen', correct: true},
            { text: 'seven', correct: false}
        ]
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
    },
]