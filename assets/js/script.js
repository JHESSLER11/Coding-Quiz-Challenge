const startButton = document.getElementById('start-btn')
const firstPage = document.getElementById('first')
const questionContainerEl = document.getElementById("question-container")
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


const questions = [

    {
        question: 'How many chickens does it take to cross a road?',
        choices: ['one', 'two', 'three', 'four'],
        answers: 'three'
    },

    {
        question: 'How many chickens does it take to cross a road?',
        choices: ['one', 'two', 'three', 'four'],
        answers: 'three'
    },

    {
        question: 'How many chickens does it take to cross a road?',
        choices: ['one', 'two', 'three', 'four'],
        answers: 'three'
    },

    {
        question: 'How many chickens does it take to cross a road?',
        choices: ['one', 'two', 'three', 'four'],
        answers: 'three'
    },

    {
        question: 'How many chickens does it take to cross a road?',
        choices: ['one', 'two', 'three', 'four'],
        answers: 'three'
    },

]