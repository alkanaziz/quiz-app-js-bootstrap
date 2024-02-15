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

    console.log(this)
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

// console.log(questionsArr);

for(let question of questionsArr) {
    console.log(question.questionText);
    for(let option in question.answerOptions) {
        console.log(option + ": " + question.answerOptions[option]);
    };
    console.log(question.answer);
};

// console.log(questionsArr[0].checkAnswer("b"));