const questions = [
    {
      question: "1-savol: HTML nima uchun ishlatiladi?",
      options: ["Ma'lumotlar saqlash uchun", "Web sahifalarni yaratish uchun", "Dasturlash uchun", "O'yin yaratish uchun"],
      correct: 1
    },
    {
      question: "2-savol: CSSning asosiy vazifasi nima?",
      options: ["Sahifani animatsiya qilish", "Sahifa dizaynini boshqarish", "JavaScript kodlarini yozish", "Ma'lumotlar tahlili"],
      correct: 1
    },
    {
      question: "3-savol: JavaScript nima qiladi?",
      options: ["Web dizaynni boshqaradi", "Interaktivlik qo'shadi", "Serverni boshqaradi", "Fayllarni boshqaradi"],
      correct: 1
    },
    {
      question: "4-savol: HTMLda bo'limni belgilash uchun qaysi teg ishlatiladi?",
      options: ["<div>", "<span>", "<section>", "<article>"],
      correct: 0
    },
    {
      question: "5-savol: Flexbox nimani boshqaradi?",
      options: ["Fayllar", "Tartib", "Ranglar", "Havolalar"],
      correct: 1
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option-btn');
    options.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.classList.remove('selected', 'correct', 'incorrect');
      button.disabled = false;
    });
  }
  
  function selectOption(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    options.forEach((button, i) => {
      button.disabled = true;
      if (i === currentQuestion.correct) {
        button.classList.add('correct');
      }
      if (i === index && i !== currentQuestion.correct) {
        button.classList.add('incorrect'); 
      }
    });
    if (index === currentQuestion.correct) {
      score++;
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    loadQuestion();
  }

  function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').textContent = score;
  }
  loadQuestion();
  