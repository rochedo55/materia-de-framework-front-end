let selectedAnswer = null;
let count = 0
const questions = [
    {
        statement: "questão 1",
        opcao: [
            'opcao 1',
            'opcao 2',
            'opcao 3',
            'opcao 4',
        ]
    },
    {
        statement: "questão 2",
        opcao: [
            'opcao 1',
            'opcao 2',
            'opcao 3',
            'opcao 4',
        ]
    },
    {
        statement: "questão 3",
        opcao: [
            'opcao 1',
            'opcao 2',
            'opcao 3',
            'opcao 4',
        ]
    },
    {
        statement: "questão 4",
        opcao: [
            'opcao 1',
            'opcao 2',
            'opcao 3',
            'opcao 4',
        ]
    },
]

let answers = [];

function selectAnswer(htmlElement) {
    selectedAnswer = htmlElement.textContent;
}

function submit() {
    if (selectedAnswer === null) {
        return;
    }

    answers.push(selectedAnswer);
    selectedAnswer = null;

    if(count < questions.length-1) {
        count++;
    }

    renderQuiz();
}

function renderQuiz() {
    let quizElement = document.getElementById('quiz');
    clearChilds(quizElement);

    createQuestionTitle(quizElement);
    createQuestions(quizElement);
    createSubmit(quizElement);

    printAwnswers(quizElement);
}

function clearChilds(htmlElement) {
    while (htmlElement.childNodes.length != 0) {
        htmlElement.removeChild(htmlElement.childNodes[0]);
    }
}

function createQuestionTitle(htmlParent) {
    let questionTitle = document.createElement('h1');
    questionTitle.textContent = questions[count].statement;
    htmlParent.appendChild(questionTitle);
}

function createQuestions(htmlParent) {
    for (let i=0; i < questions[count].opcao.length; i++) {
        let answer = document.createElement('button');
        answer.textContent = questions[count].opcao[i];
        answer.onclick = function() {
            selectAnswer(answer);
        }

        htmlParent.appendChild(answer);
    }
}

function createSubmit(htmlElement) {
    let answer = document.createElement('button');
    answer.textContent = 'submit';
    answer.onclick = function() {
        submit();
    }
    htmlElement.appendChild(answer);
}


function printAwnswers(quizElement) {
    for(let i=0; i < answers.length; i++) {
        let p = document.createElement('p');
        p.textContent = answers[i];
        quizElement.appendChild(p);
    }
}

renderQuiz();