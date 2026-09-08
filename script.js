

/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(screenId) {

    let screens =
        document.querySelectorAll(".screen");


    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });


    document
        .getElementById(screenId)
        .classList.add("active");


    window.scrollTo(0, 0);

}



/* =========================
   PASSWORD CHECKER
========================= */

function checkPassword() {

    let password =
        document.getElementById("passwordInput").value;


    let result =
        document.getElementById("passwordResult");


    let score = 0;


    if (password.length >= 12) {

        score++;

    }


    if (/[A-Z]/.test(password)) {

        score++;

    }


    if (/[a-z]/.test(password)) {

        score++;

    }


    if (/[0-9]/.test(password)) {

        score++;

    }


    if (/[^A-Za-z0-9]/.test(password)) {

        score++;

    }


    if (password.length === 0) {

        result.innerHTML =
            "⚠️ Please enter a practice password.";

    }

    else if (score <= 2) {

        result.innerHTML =
            "🔴 Weak password. Make it longer and less predictable.";

    }

    else if (score <= 4) {

        result.innerHTML =
            "🟠 Medium strength. Make it longer and more unique.";

    }

    else {

        result.innerHTML =
            "🟢 Stronger password! Keep it unique and never share it.";

    }

}



/* =========================
   ACTIVITY 1 - SCAM
========================= */

function scamAnswer(answer) {

    let result =
        document.getElementById("activityResult");


    if (answer === "scam") {

        result.innerHTML =
            "🎉 Correct! This message contains warning signs of a scam.";

    }

    else {

        result.innerHTML =
            "❌ Be careful! This is a scam message.";

    }

}



/* =========================
   ACTIVITY 2 - OTP
========================= */

function otpAnswer(answer) {

    let result =
        document.getElementById("otpResult");


    if (answer === "dontShare") {

        result.innerHTML =
            "🎉 Correct! Never share your OTP.";

    }

    else {

        result.innerHTML =
            "❌ Wrong! OTP should never be shared.";

    }

}



/* =========================
   ACTIVITY 3 - LINK
========================= */

function linkAnswer(answer) {

    let result =
        document.getElementById("linkResult");


    if (answer === "fake") {

        result.innerHTML =
            "🎉 Correct! This link looks suspicious.";

    }

    else {

        result.innerHTML =
            "❌ Be careful! Unknown links can be dangerous.";

    }

}



/* =========================
   ACTIVITY 4 - BANK CALL
========================= */

function callAnswer(answer) {

    let result =
        document.getElementById("callResult");


    if (answer === "verify") {

        result.innerHTML =
            "🎉 Correct! Disconnect and contact your bank.";

    }

    else {

        result.innerHTML =
            "❌ Wrong! Never share confidential information.";

    }

}



/* =========================
   ACTIVITY 5 - UPI
========================= */

function upiAnswer(answer) {

    let result =
        document.getElementById("upiResult");


    if (answer === "careful") {

        result.innerHTML =
            "🎉 Correct! Always verify before scanning.";

    }

    else {

        result.innerHTML =
            "❌ Be careful! Unknown QR codes can be dangerous.";

    }

}



/* =========================
   ACTIVITY 6 - TRUE FALSE
========================= */

function trueFalseAnswer(answer) {

    let result =
        document.getElementById("trueFalseResult");


    if (answer === "false") {

        result.innerHTML =
            "🎉 Correct! Passwords should remain private.";

    }

    else {

        result.innerHTML =
            "❌ Wrong! Never share your banking password.";

    }

}



/* =========================
   QUIZ DATA - 10 QUESTIONS
========================= */

const questions = [

    {

        question:
            "Should you share your OTP with anyone?",

        options: [

            "Yes",

            "No",

            "Only with friends",

            "Only with strangers"

        ],

        answer: 1

    },


    {

        question:
            "What should you do with a suspicious banking link?",

        options: [

            "Click immediately",

            "Enter password",

            "Avoid clicking and verify",

            "Forward to everyone"

        ],

        answer: 2

    },


    {

        question:
            "Which is safer for banking?",

        options: [

            "Official banking app",

            "Random message link",

            "Unknown website",

            "Random advertisement"

        ],

        answer: 0

    },


    {

        question:
            "Which password is better?",

        options: [

            "12345678",

            "password",

            "Your birthday",

            "Long and unique password"

        ],

        answer: 3

    },


    {

        question:
            "What should you do if a caller asks for confidential information?",

        options: [

            "Share information",

            "Verify using official bank contact",

            "Share OTP",

            "Give password"

        ],

        answer: 1

    },


    {

        question:
            "Should you share your ATM PIN?",

        options: [

            "Yes",

            "Only with friends",

            "Never",

            "By SMS"

        ],

        answer: 2

    },


    {

        question:
            "Which is a phishing warning sign?",

        options: [

            "Urgent request to click a link",

            "Expected bank message",

            "Personal note",

            "Saved contact"

        ],

        answer: 0

    },


    {

        question:
            "Before entering banking details on a website, what should you do?",

        options: [

            "Enter quickly",

            "Verify official website",

            "Share with strangers",

            "Ignore security"

        ],

        answer: 1

    },


    {

        question:
            "What should you do if your account may be compromised?",

        options: [

            "Ignore it",

            "Tell everyone your password",

            "Contact your bank",

            "Wait many days"

        ],

        answer: 2

    },


    {

        question:
            "Which information must remain private?",

        options: [

            "OTP, PIN, Password and CVV",

            "Favorite color",

            "First name",

            "City name"

        ],

        answer: 0

    }

];



let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;



/* =========================
   START QUIZ
========================= */

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;


    showScreen("quiz");

    loadQuestion();

}



/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {

    selectedAnswer = null;


    document
        .getElementById("nextButton")
        .style.display = "none";


    let question =
        questions[currentQuestion];


    document
        .getElementById("questionNumber")
        .innerHTML =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    document
        .getElementById("quizQuestion")
        .innerHTML =
        question.question;


    let optionsDiv =
        document.getElementById("quizOptions");


    optionsDiv.innerHTML = "";


    question.options.forEach(
        function(option, index) {


            let button =
                document.createElement("button");


            button.innerHTML = option;


            button.className =
                "quizOption";


            button.onclick =
                function() {

                    selectAnswer(
                        index,
                        button
                    );

                };


            optionsDiv.appendChild(button);

        }

    );

}



/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(index, button) {

    selectedAnswer = index;


    let buttons =
        document.querySelectorAll(".quizOption");


    buttons.forEach(function(btn) {

        btn.classList.remove("selected");

    });


    button.classList.add("selected");


    document
        .getElementById("nextButton")
        .style.display =
        "inline-block";

}



/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        loadQuestion();

    }

    else {

        showResult();

    }

}



/* =========================
   SHOW RESULT
========================= */

function showResult() {

    showScreen("result");


    document
        .getElementById("finalScore")
        .innerHTML =
        score +
        " / " +
        questions.length;


    let message =
        document.getElementById("scoreMessage");


    if (
        score === questions.length
    ) {

        message.innerHTML =
            "🎉 Excellent! Perfect score!";

    }

    else if (
        score >= 6
    ) {

        message.innerHTML =
            "👍 Good job! Keep learning.";

    }

    else {

        message.innerHTML =
            "📚 Keep learning and try again!";

    }

}



/* =========================
   EXIT QUIZ
========================= */

function exitQuiz() {

    showScreen("quizMenu");

}