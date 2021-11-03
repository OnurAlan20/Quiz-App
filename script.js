const quizData = [
    {
        question: "Who is the best programer in the world?",
        a: "Onur Alan",
        b: "Alan Onur",
        c: "Muharrem Onur Alan",
        d: "Onur Muharrem Alan",
        correct: "c",
    },
    {
        question: "What is the model of Onur's computer?",
        a: "Lenovo",
        b: "Hp",
        c: "Monster",
        d: "Apple",
        correct: "a",
    },
    {
        question: "What is the first program langue learnd by onur? ",
        a: "Python",
        b: "Java",
        c: "C++",
        d: "C",
        correct: "a",
    },
    {
        question: "What is Onur's sister name?",
        a: "Elif Sucuk",
        b: "Witch",
        c: "Realy Witch",
        d: "Elif Su Alan",
        correct: "c",
    },
    {
        question: "What Colage has the best programer in the world?",
        a: "Ankara University",
        b: "Harward",
        c: "MIT",
        d: "Stanford",
        correct: "a",
    },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question[currentQuestion]
    currentQuestion++;
    
}













































