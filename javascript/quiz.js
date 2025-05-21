'use strict';
const quiz = [
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
    question: "Hvad er det bedste du kan gøre <br> for en ven under et angstanfald?",
    options: ["Være til stede og spørge hvad de har brug for", "Give dem et kram", "Tage dem med ud i frisk luft uden at spørge først", "Fortælle dem hvad de skal gøre"],
    answer: 0
  }
];

let current = 0;
let correct = 0;

function showQuestion() {
  document.getElementById('questionNumber').textContent = current + 1;
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('result').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';

  const q = quiz[current];
  document.getElementById('question').innerHTML = q.question; 
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => selectOption(index);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(index) {
  const q = quiz[current];
  correct++;

  document.getElementById('correctCount').textContent = correct;
  Array.from(document.getElementById('options').children).forEach(btn => btn.disabled = true);
  document.getElementById('nextBtn').style.display = 'inline';

  const optionButtons = Array.from(document.getElementById('options').children);
  optionButtons[q.answer].classList.add('correct');
}

document.getElementById('nextBtn').onclick = () => {
  current++;
  if (current < quiz.length) {
    document.getElementById('question').style.height = '100px';
    showQuestion();
  } else {
    const questionElem = document.getElementById('question');
    questionElem.textContent = 'Ligesom du lige oplevede i videoen, kan nogle angstanfald også medføre ringen for ørerne, hvilket kan gøre det vanskeligt at høre og opfatte sine omgivelser. Det kan derfor være udfordrende at modtage og forstå forskellige informationer.';
    questionElem.style.height = '175px'; 
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('result').textContent = `You got ${correct} out of ${quiz.length} correct.`;

    const restartLink = document.createElement('a');
    restartLink.href = 'index.html';
    restartLink.textContent = 'Tilbage til start';
    restartLink.style.display = 'block';
    restartLink.style.marginTop = '20px';
    restartLink.style.textAlign = 'center';
    restartLink.style.color = '#fff';
    restartLink.style.fontSize = '1.2em';
    restartLink.style.textDecoration = 'none'; 
    document.getElementById('result').appendChild(restartLink);
  }
};



showQuestion();