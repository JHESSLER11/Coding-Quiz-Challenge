const startButton = document.getElementById('start-btn')
const firstPage = document.getElementById('first')
const questionContainerEl = document.getElementById("question-container")
startButton.addEventListener('click', startGame)


function startGame () {
    console.log('started')
    firstPage.classList.add('hide')
    questionContainerEl.classList.remove('hide')

    setQuestion()

}

function setQuestion () {

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
    }
]