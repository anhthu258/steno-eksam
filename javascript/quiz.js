const questions = [
  {
question: "Hvor mange procent % af unge i Danmark <br> har haft en Angst lidelse inden de bliver 18?",
    options: ["20%", "13%", "15%", "17%"],
    answer: 2
  },
  {
    question: "Hvilket af følgende symptomer er IKKE <br> et muligt tegn på et angstanfald?",
    options: ["Hjertebanken", "Feber", "Kvalme", "Sortnen for øjnene"],
    answer: 1
  },
  {
    question: "Hvad kan et slemt angstanfald føles som?",
    options: ["En allergisk reaktion", "En madforgiftning", "En influenza", "Et hjerteanfald"],
    answer: 3
  },
  {
    question: "Hvad er det bedste, du kan gøre for en ven under et angstanfald?",
    options: ["Være til stede og spørge hvad de har brug for", "Give dem et kram", "Tage dem med ud i frisk luft uden at spørge først", "Fortælle dem hvad de skal gøre"],
    answer: 0
  }
];


let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const current = questions[currentQuestion];

  questionElement.textContent = current.question;
  optionsElement.innerHTML = '';

  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const resultElement = document.getElementById('result');
  if (selectedIndex === questions[currentQuestion].answer) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Wrong answer.";
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(() => {
      resultElement.textContent = "";
      showQuestion();
    }, 1000);
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}.</h2>`;
}

showQuestion();