let currentQuestion = 0;
let score = 0;
let timer;
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  resetTimer();
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const btn = document.createElement("div");
    btn.className = "choice";
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(index);
    choicesEl.appendChild(btn);
  });
  startTimer();
}

function startTimer() {
  let timeLeft = 35;
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timerEl.textContent = "35";
}

function checkAnswer(index) {
  const correct = questions[currentQuestion].answer;
  if (index === correct) score++;
  nextQuestion();
}

function nextQuestion() {
  resetTimer();
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.style.display = "none";
  choicesEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.style.display = "block";
  resultEl.textContent = `Tes selesai! Skor kamu: ${score} dari ${questions.length}`;
}

nextBtn.onclick = nextQuestion;
showQuestion();
