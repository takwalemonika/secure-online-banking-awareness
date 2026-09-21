/* =====================================================
   SECURE BANKING AWARENESS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   SCREEN NAVIGATION
===================================================== */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(screenId);

    if (!targetScreen) {
        console.error("Screen not found:", screenId);
        return;
    }

    targetScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   PASSWORD CHECKER
===================================================== */

function checkPassword() {

    const passwordInput =
        document.getElementById("passwordInput");

    const result =
        document.getElementById("passwordResult");

    const password = passwordInput.value;

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

        result.style.color = "#d32f2f";

        return;
    }


    if (score <= 2) {

        result.innerHTML =
            "🔴 Weak password. Make it longer and less predictable.";

        result.style.color = "#d32f2f";

    }

    else if (score <= 4) {

        result.innerHTML =
            "🟠 Medium strength. Make it longer and unique.";

        result.style.color = "#ef6c00";

    }

    else {

        result.innerHTML =
            "🟢 Stronger password! Keep it unique and never share it.";

        result.style.color = "#2e7d32";
    }
}


/* =====================================================
   SPOT THE SCAM
===================================================== */

function scamAnswer(answer) {

    const result =
        document.getElementById("activityResult");

    if (answer === "scam") {

        result.innerHTML =
            "🎉 Correct! An urgent message asking for an OTP is a warning sign of a scam.";

        result.style.color = "#2e7d32";

    } else {

        result.innerHTML =
            "❌ Incorrect. Urgent messages asking for an OTP are warning signs of a scam.";

        result.style.color = "#d32f2f";
    }
}


/* =====================================================
   OTP ACTIVITY
===================================================== */

function otpAnswer(answer) {

    const result =
        document.getElementById("otpResult");

    if (answer === "dontShare") {

        result.innerHTML =
            "🎉 Correct! Never share your OTP with another person.";

        result.style.color = "#2e7d32";

    } else {

        result.innerHTML =
            "❌ Wrong! Never share your OTP.";

        result.style.color = "#d32f2f";
    }
}


/* =====================================================
   DO OR DON'T QUESTIONS
===================================================== */

const doDontQuestions = [

    {
        question:
            "You receive a call from an unknown person asking for your OTP. Should you share it?",

        answer: "dont",

        correctMessage:
            "🎉 Correct! DON'T share your OTP with anyone."
    },

    {
        question:
            "You want to open your bank account online. Should you use the official bank app or official website?",

        answer: "do",

        correctMessage:
            "🎉 Correct! DO use official banking apps and websites."
    },

    {
        question:
            "You receive a suspicious link saying you won a prize. Should you click it?",

        answer: "dont",

        correctMessage:
            "🎉 Correct! DON'T click suspicious links."
    },

    {
        question:
            "Before making a payment, should you check the receiver's name and details?",

        answer: "do",

        correctMessage:
            "🎉 Correct! DO check payment details carefully."
    },

    {
        question:
            "Should you share your UPI PIN with a caller who says they work for your bank?",

        answer: "dont",

        correctMessage:
            "🎉 Correct! DON'T share your UPI PIN."
    }

];


let doDontCurrent = 0;
let doDontScore = 0;
let doDontAnswered = false;


/* =====================================================
   START DO OR DON'T
===================================================== */

function startDoDont() {

    doDontCurrent = 0;
    doDontScore = 0;
    doDontAnswered = false;

    showScreen("dosDont");

    loadDoDontQuestion();
}


/* =====================================================
   LOAD DO OR DON'T QUESTION
===================================================== */

function loadDoDontQuestion() {

    doDontAnswered = false;

    const result =
        document.getElementById("doDontResult");

    const nextButton =
        document.getElementById("doDontNext");

    result.innerHTML = "";

    nextButton.style.display = "none";


    const current =
        doDontQuestions[doDontCurrent];


    document.getElementById("doDontNumber").innerHTML =
        "Situation " +
        (doDontCurrent + 1) +
        " of " +
        doDontQuestions.length;


    document.getElementById("doDontQuestion").innerHTML =
        current.question;
}


/* =====================================================
   ANSWER DO OR DON'T
===================================================== */

function answerDoDont(answer) {

    if (doDontAnswered) {
        return;
    }

    doDontAnswered = true;

    const current =
        doDontQuestions[doDontCurrent];

    const result =
        document.getElementById("doDontResult");


    if (answer === current.answer) {

        doDontScore++;

        result.innerHTML =
            current.correctMessage;

        result.style.color = "#2e7d32";

    } else {

        result.innerHTML =
            "❌ Incorrect. Think carefully about how to protect your banking information.";

        result.style.color = "#d32f2f";
    }


    document.getElementById("doDontNext")
        .style.display = "inline-block";
}


/* =====================================================
   NEXT DO OR DON'T QUESTION
===================================================== */

function nextDoDont() {

    doDontCurrent++;

    if (doDontCurrent < doDontQuestions.length) {

        loadDoDontQuestion();

    } else {

        showDoDontResult();
    }
}


/* =====================================================
   DO OR DON'T RESULT
===================================================== */

function showDoDontResult() {

    showScreen("doDontFinal");


    document.getElementById("doDontScore").innerHTML =
        doDontScore +
        " / " +
        doDontQuestions.length;


    const message =
        document.getElementById("doDontMessage");


    if (doDontScore === doDontQuestions.length) {

        message.innerHTML =
            "🎉 Excellent! You know how to make safer online banking decisions.";

    }

    else if (doDontScore >= 3) {

        message.innerHTML =
            "👍 Good job! Keep learning and stay alert.";

    }

    else {

        message.innerHTML =
            "📚 Keep learning! Review the safety information and try again.";
    }
}


/* =====================================================
   QUIZ QUESTIONS
===================================================== */

const questions = [

    {
        question:
            "Should you share your OTP with anyone?",

        options: [
            "Yes",
            "No",
            "Only with friends",
            "Only with unknown callers"
        ],

        answer: 1
    },

    {
        question:
            "What should you do when you receive a suspicious banking link?",

        options: [
            "Click immediately",
            "Enter your password",
            "Avoid clicking and verify through an official channel",
            "Forward it to everyone"
        ],

        answer: 2
    },

    {
        question:
            "Which is safer for accessing your bank?",

        options: [
            "Official banking app or verified official website",
            "Any link received in a message",
            "A website suggested by an unknown caller",
            "A random advertisement"
        ],

        answer: 0
    },

    {
        question:
            "Which password is generally better?",

        options: [
            "12345678",
            "password",
            "Your name and birthday",
            "A long and unique password or passphrase"
        ],

        answer: 3
    },

    {
        question:
            "What should you do if someone claims to be from the bank and asks for confidential information?",

        options: [
            "Share everything",
            "Verify independently using official contact information",
            "Share your OTP",
            "Give your password"
        ],

        answer: 1
    }

];


let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


/* =====================================================
   START QUIZ
===================================================== */

function startQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    showScreen("quiz");

    loadQuestion();
}


/* =====================================================
   LOAD QUIZ QUESTION
===================================================== */

function loadQuestion() {

    selectedAnswer = null;

    const nextButton =
        document.getElementById("nextButton");

    nextButton.style.display = "none";


    const question =
        questions[currentQuestion];


    document.getElementById("questionNumber").innerHTML =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    document.getElementById("quizQuestion").innerHTML =
        question.question;


    const optionsDiv =
        document.getElementById("quizOptions");

    optionsDiv.innerHTML = "";


    question.options.forEach(function (option, index) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.innerHTML = option;

        button.className = "quizOption";


        button.addEventListener("click", function () {

            selectAnswer(index, button);

        });


        optionsDiv.appendChild(button);
    });
}


/* =====================================================
   SELECT QUIZ ANSWER
===================================================== */

function selectAnswer(index, button) {

    selectedAnswer = index;


    const buttons =
        document.querySelectorAll(".quizOption");


    buttons.forEach(function (btn) {

        btn.classList.remove("selected");

    });


    button.classList.add("selected");


    document.getElementById("nextButton")
        .style.display = "inline-block";
}


/* =====================================================
   NEXT QUIZ QUESTION
===================================================== */

function nextQuestion() {

    if (selectedAnswer === null) {
        return;
    }


    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;
    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();
    }
}


/* =====================================================
   SHOW QUIZ RESULT
===================================================== */

function showResult() {

    showScreen("result");


    document.getElementById("finalScore").innerHTML =
        score +
        " / " +
        questions.length;


    const message =
        document.getElementById("scoreMessage");


    if (score === questions.length) {

        message.innerHTML =
            "🎉 Excellent! You have strong online banking safety knowledge.";

    }

    else if (score >= 3) {

        message.innerHTML =
            "👍 Good job! Keep learning about online banking safety.";

    }

    else {

        message.innerHTML =
            "📚 Keep learning! Try the quiz again after reading the safety information.";
    }
}


/* =====================================================
   EXIT QUIZ
===================================================== */

function exitQuiz() {

    showScreen("quizMenu");
}


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Secure Banking application loaded successfully.");

    showScreen("home");

});
