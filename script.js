const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {

  currentQuestionIndex++

  setNextQuestion()

})

function startGame() {

  startButton.classList.add('hide')

  shuffledQuestions = questions.sort()

  currentQuestionIndex = 0

  questionContainerElement.classList.remove('hide')

  setNextQuestion()

}

function setNextQuestion() {

  resetState()

  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

  questionElement.innerText = question.question

  question.answers.forEach(answer => {

    const button = document.createElement('button')

    button.innerText = answer.text

    button.classList.add('btn')

    if (answer.correct) {

      button.dataset.correct = answer.correct

    }

    button.addEventListener('click', selectAnswer)

    answerButtonsElement.appendChild(button)

  })

}

function resetState() {

  clearStatusClass(document.body)

  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

  }

}

function selectAnswer(e) {

  const selectedButton = e.target

  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {

    setStatusClass(button, button.dataset.correct)

  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')

  } else {

    startButton.innerText = 'Restart'

    startButton.classList.remove('hide')

  }

}

function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct) {

    element.classList.add('correct')

  } else {

    element.classList.add('wrong')

  }

}

function clearStatusClass(element) {

  element.classList.remove('correct')

  element.classList.remove('wrong')

}

const questions = [

  {

    question: 'How many feet in a mile?',

    answers: [

      {text: '5280', correct: true},
      {text: '5300', correct: false},
      {text: '5260', correct: false},
      {text: '5320', correct: false}

    ]

  },

  {

    question: 'How many moons does Saturn have now?',

    answers: [

      {text: '72', correct: false},
      {text: '62', correct: false},
      {text: '82', correct: true},
      {text: '52', correct: false}

    ]

  },

  {

    question: 'How big is jupiter?',

    answers: [

      {text: '67.700 km', correct: false},
      {text: '69.911 km', correct: true},
      {text: '62.583 km', correct: false},
      {text: '72.091 km', correct: false}

    ]

  },

  {

    question: 'What is the height of Burj Khalifa to the tip?',

    answers: [

      {text: '828', correct: false},
      {text: '832', correct: false},
      {text: '826', correct: false},
      {text: '830', correct: true}

    ]

  },

  {
    
    question: 'How many months that have 28 days?',

    answers: [

        {text: '7', correct: false},
        {text: '6', correct: false},
        {text: '12', correct: true},
        {text: '1', correct: false}
    ]

  },

  {
    question: 'What is the capital of Canada',

    answers: [

        {text: 'Toronto', correct: false},
        {text: 'Ottawa', correct: true},
        {text: 'Montreal', correct: false},
        {text: 'Vancouver', correct: false}
    ]
  },

  {
    question: 'When is Earth Day',

    answers: [

        {text: '22 April', correct: true},
        {text: '21 April', correct: false},
        {text: '20 April', correct: false},
        {text: '23 April', correct: false}
    ]
  },

  {
    question: 'How many seconds in a day',

    answers: [

      {text: '68400', correct: false},
      {text: '64800', correct: false},
      {text: '84600', correct: false},
      {text: '86400', correct: true}
    ]
  },

  {
    question: 'How years in an eon',

    answers: [

      {text: '10000', correct: false},
      {text: '100000', correct: true},
      {text: '1000000', correct: false},
      {text: '1000', correct: false}
    ]
  }

]
