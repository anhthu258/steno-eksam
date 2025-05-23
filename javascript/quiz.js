'use strict';

// Quiz-spørgsmål og svarmuligheder
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

// Variabler til at holde styr på nuværende spørgsmål og antal rigtige svar
let current = 0;
let correct = 0;

// Viser intro-siden med start-knap
function showIntro() {
  document.getElementById('home-button').style.display = 'none';
  document.body.classList.add('intro-bg'); // Tilføj baggrundsbillede til intro
  document.getElementById('svarCounter').style.display = 'none'; // Skjul svar-tæller
  document.getElementById('spmCounter').style.display = 'none';  // Skjul spørgsmål-tæller
  document.getElementById('nextBtn').style.display = 'none';     // Skjul næste-knap

  // Sæt tekst og pil i intro knappen
  const questionDiv = document.getElementById('question');
  questionDiv.innerHTML = `Test din viden om angst her <img src="/img/hvid-pil.png" alt="Start" style="height:1em;vertical-align:middle;margin-left:1rem;">`;

  // Tilføj "Tilbage til start"-link under intro knappen
  const restartLink = document.createElement('a');
  restartLink.href = 'index.html';
  restartLink.textContent = 'Tilbage til start';
  restartLink.classList.add('restartLink');
  document.getElementById('result').appendChild(restartLink);

  // Når man klikker på boksen, starter quizzen
  questionDiv.onclick = () => {
    document.body.classList.remove('intro-bg'); // Fjerner de hvide streger fra hjørnerne på intro siden
    questionDiv.onclick = null; // deaktivere spørsmålsknappen så man ikke kan klikke på den efter introen
    questionDiv.style.cursor = "";
    questionDiv.classList.remove('intro-btn');
    showQuestion();
  };
}

// Viser det aktuelle spørgsmål og svarmuligheder
function showQuestion() {
  document.getElementById('svarCounter').style.display = ''; // Vis svar-tæller
  document.getElementById('spmCounter').style.display = ''; // Vis spørgsmål-tæller
  document.getElementById('home-button').style.display = ''; // Vis "Tilbage til start"-knap
  document.getElementById('questionNumber').textContent = current + 1; // Opdater spørgsmålstæller
  document.getElementById('correctCount').textContent = correct; // Opdater korrekt tæller
  document.getElementById('result').textContent = ''; // Nulstil resultat
  document.getElementById('nextBtn').style.display = 'none'; // Skjul næste-knap

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

    // Tilpas fontstørrelse på sidste spørgsmål
    if (current === 3) {
      btn.style.fontSize = '2vh';
    } else {
      btn.style.fontSize = '2.8vh';
    }
    optionsDiv.appendChild(btn);
  });
}

// Håndterer valg af svar
function selectOption(index) {
  const q = quiz[current];
  if (index === q.answer) {
    correct++;
  }
  document.getElementById('correctCount').textContent = correct;
  // Deaktiver alle svar-knapper
  Array.from(document.getElementById('options').children).forEach(btn => btn.disabled = true);
  document.getElementById('nextBtn').style.display = 'inline';

  // Marker det rigtige svar
  const optionButtons = Array.from(document.getElementById('options').children);
  optionButtons[q.answer].classList.add('correct');
}

// Når man klikker på næste-knappen
document.getElementById('nextBtn').onclick = () => {
  current++;
  if (current < quiz.length) {
    document.getElementById('svarCounter').style.display = '';
    document.getElementById('spmCounter').style.display = '';
    showQuestion();
  } else {
    // Quiz er slut, vis resultat og afslutningsside
    document.getElementById('svarCounter').style.display = 'none';
    document.getElementById('spmCounter').style.display = 'none';
    document.getElementById('home-button').style.display = 'none';

    const finalResult = document.createElement('div');
    finalResult.id = 'finalResultLine';
    finalResult.textContent = `! Du fik  ${correct} / ${quiz.length} rigtige svar !`;
    finalResult.classList.add('final-result');

    document.querySelector('.quiz-container').insertBefore(finalResult, document.getElementById('question'));

    document.body.classList.add('body-final-bg');

    // viser spørsmålskassen med en lille tekst
    const questionElem = document.getElementById('question');
    questionElem.textContent = 'Ligesom du lige oplevede i videoen, kan nogle angstanfald også medføre ringen for ørerne, hvilket kan gøre det vanskeligt at høre og opfatte sine omgivelser. Det kan derfor være udfordrende at modtage og forstå forskellige informationer.';
    questionElem.style.height = '200px';
    questionElem.classList.add('final-bg');
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('result').textContent = '';

    // Tilføj "Tilbage til start"-link på slutskærm
    const restartLink = document.createElement('a');
    restartLink.href = 'index.html';
    restartLink.textContent = 'Tilbage til start';
    restartLink.classList.add('restartLink');
    document.getElementById('result').appendChild(restartLink);

    // Tilføj billede på slutskærm
    const finalImg = document.createElement('img');
    finalImg.src = '/img/sidder-ned.webp';
    finalImg.alt = 'Sidder ned';
    finalImg.className = 'final-img';
    document.body.appendChild(finalImg);
  }
};

// Start med at vise intro-siden
showIntro();