// OOP: Object-oriented programming - Objektorientierte Programmierung

// Object

// let questions = {
//     question1: {
//         questionText: "Which of the following is not a primitive data type in JavaScript?",
//         answerOptions: {
//             a: "String",
//             b: "Object",
//             c: "Boolean",
//             d: "Undefined",
//         },
//         answer: "b",
//         checkAnswer: function (userAnswer) {
//             return userAnswer === this.answer;
//         },
//     },

//     question2: {
//         questionText: "What will the following code output? \n\nconsole.log(typeof []);",
//         answerOptions: {
//             a: "object",
//             b: "array",
//             c: "boolean",
//             d: "undefined",
//         },
//         answer: "a",
//         checkAnswer: function (userAnswer) {
//             return userAnswer === this.answer;
//         },
//     },
// }

// for(let question in questions) {
//     console.log(questions[question].questionText);
//     console.log(questions[question].answerOptions.a);
//     console.log(questions[question].answerOptions.b);
//     console.log(questions[question].answerOptions.c);
//     console.log(questions[question].answerOptions.d);
//     console.log(questions[question].answer);
// }


// CONSTRUCTOR FUNCTION (Question()) AND PROTOTYPE (checkAnswer()
function Question(questionText, answerOptions, answer) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.answer = answer;
};

// Prototype checkAnswer()
Question.prototype.checkAnswer = function (userAnswer) {
    return userAnswer === this.answer;
};

// let question1 = new Question("Which of the following is not a primitive data type in JavaScript?", { a: "String", b: "Object", c: "Boolean", d: "Undefined" }, "b");

// let question2 = new Question("What will the following code output? \n\nconsole.log(typeof []);", { a: "object", b: "array", c: "boolean", d: "undefined" }, "a");

let questionsArr = [
    new Question("Which of the following is not a primitive data type in JavaScript?", { a: "String", b: "Object", c: "Boolean", d: "Undefined" }, "b"),
    new Question("What will the following code output? \n\nconsole.log(typeof []);", { a: "object", b: "array", c: "boolean", d: "undefined" }, "a"),
];

// DISPLAY ALL QUESTIONS in questionsArr
// for(let question of questionsArr) {
//     console.log(question.questionText);
//     for(let option in question.answerOptions) {
//         console.log(option + ": " + question.answerOptions[option]);
//     };
//     console.log(question.answer);
// };

function Quiz(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
};

Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.currentQuestionIndex];
};

const quiz = new Quiz(questionsArr);

document.querySelector(".btn-start").addEventListener("click", function () {
    if (quiz.questions.length !== quiz.currentQuestionIndex) {
        console.log(quiz.getCurrentQuestion());
        quiz.currentQuestionIndex++;
    } else {
        console.log("Quiz is over")
    };
});