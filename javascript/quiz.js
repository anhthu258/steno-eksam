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
    options: [
      "Være til stede og spørge <br> hvad de har brug for",
      "Give dem et kram",
      "Tage dem med ud i frisk <br> luft uden at spørge først",
      "Fortælle dem hvad <br> de skal gøre"
    ],
    answer: 0
  }
];

let current = 0;
let correct = 0;

function showIntro() {
  document.getElementById('svarCounter').style.display = 'none';
  document.getElementById('spmCounter').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';

  const questionDiv = document.getElementById('question');
  questionDiv.innerHTML = `Test din viden om angst her <img src="/img/hvid-pil.png" alt="Start" style="height:1em;vertical-align:middle;margin-left:1rem;">`;
  questionDiv.style.cursor = "pointer";
  questionDiv.classList.add('intro-btn');
  document.getElementById('options').innerHTML = '';
  document.getElementById('result').innerHTML = '';

  const restartLink = document.createElement('a');
  restartLink.href = 'index.html';
  restartLink.textContent = 'Tilbage til start';
  restartLink.classList.add('restartLink');
  document.getElementById('result').appendChild(restartLink);

  questionDiv.onclick = () => {
    questionDiv.onclick = null;
    questionDiv.style.cursor = "";
    questionDiv.classList.remove('intro-btn');
    showQuestion();
    document.getElementById('svarCounter').style.display = '';
    document.getElementById('spmCounter').style.display = '';
  };
}

function showQuestion() {
  document.getElementById('questionNumber').textContent = current + 1;
  document.getElementById('correctCount').textContent = correct;
  document.getElementById('result').textContent = '';
  document.getElementById('nextBtn').style.display = 'none';

  const q = quiz[current];
  const questionDiv = document.getElementById('question');
  questionDiv.innerHTML = q.question;
  questionDiv.style.cursor = "";
  questionDiv.classList.remove('intro-btn');
  questionDiv.onclick = null;

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.innerHTML = option;
    btn.onclick = () => selectOption(index);

    if (current === 3) {
      btn.style.fontSize = '2vh';
    } else {
      btn.style.fontSize = '2.8vh';
    }
    optionsDiv.appendChild(btn);
  });
}

function selectOption(index) {
  const q = quiz[current];
  if (index === q.answer) {
    correct++;
  }
  document.getElementById('correctCount').textContent = correct;
  Array.from(document.getElementById('options').children).forEach(btn => btn.disabled = true);
  document.getElementById('nextBtn').style.display = 'inline';

  const optionButtons = Array.from(document.getElementById('options').children);
  optionButtons[q.answer].classList.add('correct');
}

document.getElementById('nextBtn').onclick = () => {
  current++;
  if (current < quiz.length) {
    document.getElementById('svarCounter').style.display = '';
    document.getElementById('spmCounter').style.display = '';
    const resultLine = document.getElementById('finalResultLine');
    if (resultLine) resultLine.remove();
    showQuestion();
  } else {
    document.getElementById('svarCounter').style.display = 'none';
    document.getElementById('spmCounter').style.display = 'none';

    const finalResult = document.createElement('div');
    finalResult.id = 'finalResultLine';
    finalResult.textContent = `! Du fik  ${correct} / ${quiz.length} rigtige svar !`;
    finalResult.classList.add('final-result');

    document.querySelector('.quiz-container').insertBefore(finalResult, document.getElementById('question'));

    document.body.classList.add('body-final-bg');

    const questionElem = document.getElementById('question');
    questionElem.textContent = 'Ligesom du lige oplevede i videoen, kan nogle angstanfald også medføre ringen for ørerne, hvilket kan gøre det vanskeligt at høre og opfatte sine omgivelser. Det kan derfor være udfordrende at modtage og forstå forskellige informationer.';
    questionElem.style.height = '200px';
    questionElem.classList.add('final-bg');
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('result').textContent = '';

    const restartLink = document.createElement('a');
    restartLink.href = 'index.html';
    restartLink.textContent = 'Tilbage til start';
    restartLink.classList.add('restartLink');
    document.getElementById('result').appendChild(restartLink);

    const finalImg = document.createElement('img');
    finalImg.src = '/img/sidder-ned.png';
    finalImg.alt = 'Sidder ned';
    finalImg.className = 'final-img';
    document.body.appendChild(finalImg);
  }
};


showIntro();