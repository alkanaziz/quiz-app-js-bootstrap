// OOP: Object-oriented programming - Objektorientierte Programmierung

// Object

let questions = {
    question1: {
        questionText: "Which of the following is not a primitive data type in JavaScript?",
        answerOptions: {
            a: "String",
            b: "Object",
            c: "Boolean",
            d: "Undefined",
        },
        answer: "b",
        checkAnswer: function (userAnswer) {
            return userAnswer === this.answer;
        },
    },
    
    question2: {
        questionText: "What will the following code output? \n\nconsole.log(typeof []);",
        answerOptions: {
            a: "object",
            b: "array",
            c: "boolean",
            d: "undefined",
        },
        answer: "a",
        checkAnswer: function (userAnswer) {
            return userAnswer === this.answer;
        },
    },
}

for(let question in questions) {
    console.log(questions[question].questionText);
    console.log(questions[question].answerOptions.a);
    console.log(questions[question].answerOptions.b);
    console.log(questions[question].answerOptions.c);
    console.log(questions[question].answerOptions.d);
    console.log(questions[question].answer);
}
