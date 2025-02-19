const quizData = [
    { question: "Is Eating Excessive Junk Food Healthy for Mental Health?", a: "No", b: "Yes", c: "Maybe", correct: "a" },
    { question: "Does Binge watching TV affect our mental well - being?", a: "Definately Yes", b: "Absolutely No", c: "Maybe", correct: "a" },
    { question: "Which category does excessive average screen time fall in?", a: "Common Health Practice", b: "Healthy Practice", c: "Unhealthy Practice", correct: "c" },
    { question: "Is eating foods that you enjoy is always an Unhealthy practice for your mental well - being?", a: "No", b: "Yes", c: "Maybe", correct: "a" },
    { question: "To what extent you should take Caffeine during your exam periods?", a: "Greater Extent", b: "Likely Extent", c: "Lower Extent", correct: "b" },
    { question: "Is Engaging in negative self - talk a good thing?", a: "Yes, it acts as a reality check or a motivator to identify areas for improvement", b: "No, majorly it leads to demotivation", c: "All of the above", correct: "b" },
    { question: "What is Social Isolation?", a: "Less Connectivity with the people of Society", b: "A very major effect of following Unhealth mental practices", c: "All of the above", correct: "c" },
    { question: "Is Connecting with Family and Friends a Solution for increasing Mental well - being?", a: "No, it is a loss of concentration", b: "Yes, It can make our daily life happy", c: "All of the above", correct: "b" }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = quizData.map((q, index) => `
        <div class="question">
            <div>${index + 1}. ${q.question}</div>
            <label><input type="radio" name="answer${index}" value="a"> ${q.a}</label>
            <label><input type="radio" name="answer${index}" value="b"> ${q.b}</label>
            <label><input type="radio" name="answer${index}" value="c"> ${q.c}</label>
        </div>
    `).join('');
}

document.getElementById('submit').addEventListener('click', () => {
    let score = 0; // Reset score for each submission
    quizData.forEach((q, index) => {
        const answer = document.querySelector(`input[name="answer${index}"]:checked`);
        if (answer && answer.value === q.correct) {
            score++;
        }
    });
    document.getElementById('result').innerText = `You scored ${score} out of ${quizData.length}`;
});

loadQuiz();
