/* ================================
   SCREEN NAVIGATION
================================ */

function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.style.display = "none";
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.style.display = "block";
    }

    window.scrollTo(0, 0);
}


/* ================================
   PASSWORD CHALLENGE
================================ */

function togglePassword() {
    const passwordInput = document.getElementById("passwordInput");
    const eyeButton = document.getElementById("eyeButton");

    if (!passwordInput) return;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";

        if (eyeButton) {
            eyeButton.textContent = "🙈";
        }
    } else {
        passwordInput.type = "password";

        if (eyeButton) {
            eyeButton.textContent = "👁️";
        }
    }
}


function checkPasswordStrength() {
    const passwordInput = document.getElementById("passwordInput");
    const strengthText = document.getElementById("passwordStrength");

    if (!passwordInput || !strengthText) return;

    const password = passwordInput.value;

    let score = 0;

    if (password.length >= 8) {
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
        strengthText.textContent = "";
    } else if (score <= 2) {
        strengthText.textContent = "Weak Password ❌";
    } else if (score === 3 || score === 4) {
        strengthText.textContent = "Medium Password ⚠️";
    } else {
        strengthText.textContent = "Strong Password ✅";
    }
}


/* ================================
   SPOT THE SCAM
================================ */

function scamAnswer(answer) {
    const result = document.getElementById("scamResult");

    if (!result) return;

    if (answer === "scam") {
        result.innerHTML =
            "🎉 Correct! This is a scam. Never share your banking details or OTP.";

        result.style.background = "#dff5e4";
        result.style.color = "#217a36";
    } else {
        result.innerHTML =
            "❌ Incorrect. This message is a scam. Never share your banking details or OTP.";

        result.style.background = "#ffe2e2";
        result.style.color = "#b3261e";
    }

    result.style.padding = "12px";
    result.style.borderRadius = "10px";
    result.style.marginTop = "12px";
}


/* ================================
   OTP SAFETY
================================ */

function otpAnswer(answer) {
    const result = document.getElementById("otpResult");

    if (!result) return;

    if (answer === "never") {
        result.innerHTML =
            "🎉 Correct! Never share your OTP with anyone.";

        result.style.background = "#dff5e4";
        result.style.color = "#217a36";
    } else {
        result.innerHTML =
            "❌ Incorrect. OTPs are private and should never be shared.";

        result.style.background = "#ffe2e2";
        result.style.color = "#b3261e";
    }

    result.style.padding = "12px";
    result.style.borderRadius = "10px";
    result.style.marginTop = "12px";
}


/* ================================
   DO OR DON'T ACTIVITY
================================ */

const doDontQuestions = [
    {
        question: "Should you share your UPI PIN with another person?",
        answer: "dont",
        explanation: "Never share your UPI PIN with anyone."
    },
    {
        question: "Should you check the receiver's name before making a UPI payment?",
        answer: "do",
        explanation: "Always verify the receiver before sending money."
    },
    {
        question: "Should you click unknown links received through SMS?",
        answer: "dont",
        explanation: "Unknown links may be phishing links."
    },
    {
        question: "Should you report an unknown bank transaction?",
        answer: "do",
        explanation: "Report suspicious transactions to your bank immediately."
    },
    {
        question: "Should you share your OTP with someone claiming to be from the bank?",
        answer: "dont",
        explanation: "Banks never need your OTP."
    }
];

let doDontCurrent = 0;
let doDontScore = 0;
let doDontAnswered = false;


function startDoDont() {
    doDontCurrent = 0;
    doDontScore = 0;
    doDontAnswered = false;

    showScreen("doDontActivity");

    loadDoDontQuestion();
}


function loadDoDontQuestion() {
    const questionElement = document.getElementById("doDontQuestion");
    const resultElement = document.getElementById("doDontResult");

    if (!questionElement) return;

    const question = doDontQuestions[doDontCurrent];

    questionElement.textContent = question.question;

    if (resultElement) {
        resultElement.innerHTML = "";
    }

    doDontAnswered = false;
}


function answerDoDont(answer) {
    if (doDontAnswered) return;

    doDontAnswered = true;

    const question = doDontQuestions[doDontCurrent];
    const resultElement = document.getElementById("doDontResult");

    if (!resultElement) return;

    if (answer === question.answer) {

        doDontScore++;

        resultElement.innerHTML =
            "🎉 Correct! " + question.explanation;

        resultElement.style.background = "#dff5e4";
        resultElement.style.color = "#217a36";

    } else {

        resultElement.innerHTML =
            "❌ Incorrect. " + question.explanation;

        resultElement.style.background = "#ffe2e2";
        resultElement.style.color = "#b3261e";
    }

    resultElement.style.padding = "12px";
    resultElement.style.borderRadius = "10px";
    resultElement.style.marginTop = "12px";
}


function nextDoDont() {

    if (!doDontAnswered) {
        return;
    }

    doDontCurrent++;

    if (doDontCurrent < doDontQuestions.length) {

        loadDoDontQuestion();

    } else {

        showDoDontResult();
    }
}


function showDoDontResult() {

    const questionElement = document.getElementById("doDontQuestion");
    const resultElement = document.getElementById("doDontResult");

    if (questionElement) {
        questionElement.textContent =
            "Activity Completed!";
    }

    if (resultElement) {

        resultElement.innerHTML =
            "🎉 Your Score: " +
            doDontScore +
            " / " +
            doDontQuestions.length;

        resultElement.style.background = "#dff5e4";
        resultElement.style.color = "#217a36";
        resultElement.style.padding = "12px";
        resultElement.style.borderRadius = "10px";
    }
}


/* ================================
   QUIZ
================================ */

const questions = [
    {
        question: "Should you share your ATM PIN with anyone?",
        options: [
            "Yes",
            "No",
            "Only with friends",
            "Only with bank staff"
        ],
        answer: 1
    },
    {
        question: "What should you do if you receive a suspicious banking link?",
        options: [
            "Click it",
            "Share it",
            "Ignore and verify through the official bank website/app",
            "Forward it"
        ],
        answer: 2
    },
    {
        question: "Should you share your OTP with someone?",
        options: [
            "Yes",
            "No",
            "Only on phone",
            "Only with friends"
        ],
        answer: 1
    },
    {
        question: "What should you do after noticing an unknown transaction?",
        options: [
            "Ignore it",
            "Wait for a few days",
            "Report it to the bank immediately",
            "Delete the SMS"
        ],
        answer: 2
    },
    {
        question: "What should a strong password contain?",
        options: [
            "Only your name",
            "Only numbers",
            "A combination of letters, numbers and special characters",
            "Your date of birth"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


function startQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    showScreen("quiz");

    loadQuestion();
}


function loadQuestion() {

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("quizResult");

    if (!questionElement || !optionsElement) return;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";

    selectedAnswer = null;

    if (resultElement) {
        resultElement.innerHTML = "";
    }

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.className = "quiz-option";

        button.onclick = function () {
            selectAnswer(index, button);
        };

        optionsElement.appendChild(button);
    });
}


function selectAnswer(index, button) {

    selectedAnswer = index;

    const buttons = document.querySelectorAll(".quiz-option");

    buttons.forEach(btn => {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}


function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();
    }
}


function showResult() {

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("quizResult");

    if (questionElement) {
        questionElement.textContent = "🎉 Quiz Completed!";
    }

    if (optionsElement) {
        optionsElement.innerHTML = "";
    }

    if (resultElement) {

        resultElement.innerHTML =
            "Your Score: " +
            score +
            " / " +
            questions.length;

        resultElement.style.background = "#dff5e4";
        resultElement.style.color = "#217a36";
        resultElement.style.padding = "15px";
        resultElement.style.borderRadius = "10px";
    }
}


function exitQuiz() {
    showScreen("home");
}


/* ================================
   NEW ACTIVITY RESULT
================================ */

function newActivityResult(id, message, correct) {

    const result = document.getElementById(id);

    if (!result) return;

    result.innerHTML = message;

    result.style.padding = "12px";
    result.style.borderRadius = "10px";
    result.style.marginTop = "12px";

    if (correct) {

        result.style.background = "#dff5e4";
        result.style.color = "#217a36";

    } else {

        result.style.background = "#ffe2e2";
        result.style.color = "#b3261e";
    }
}


/* ================================
   UPI SAFETY CHALLENGE
================================ */

function checkNewUPI(answer) {

    if (answer === "unsafe") {

        newActivityResult(
            "newUPIResult",
            "🎉 Correct! Never enter your UPI PIN to receive money.",
            true
        );

    } else {

        newActivityResult(
            "newUPIResult",
            "❌ Incorrect. A UPI PIN is used to authorize payments, not to receive money.",
            false
        );
    }
}


/* ================================
   OTP SAFETY CHALLENGE
================================ */

function checkNewOTP(answer) {

    if (answer === "unsafe") {

        newActivityResult(
            "newOTPResult",
            "🎉 Correct! Never share your OTP with anyone.",
            true
        );

    } else {

        newActivityResult(
            "newOTPResult",
            "❌ Incorrect. OTPs are confidential and should never be shared.",
            false
        );
    }
}


/* ================================
   PHISHING DETECTIVE
================================ */

function checkNewPhishing(answer) {

    if (answer === "unsafe") {

        newActivityResult(
            "newPhishingResult",
            "🎉 Correct! Suspicious links may be phishing attempts.",
            true
        );

    } else {

        newActivityResult(
            "newPhishingResult",
            "❌ Incorrect. Do not click suspicious banking links.",
            false
        );
    }
}


/* ================================
   SAFE OR UNSAFE
   5 REAL-LIFE SITUATIONS
================================ */

function checkNewSafeUnsafe(answer, button) {

    let resultId = "";
    let correctAnswer = "";
    let correctMessage = "";
    let wrongMessage = "";


    /* Situation 1 */

    if (answer === "unsafe1" || answer === "safe1") {

        resultId = "safeUnsafeResult1";

        correctAnswer = "unsafe1";

        correctMessage =
            "🎉 Correct! Never share your ATM PIN with anyone.";

        wrongMessage =
            "❌ Incorrect. Asking for your ATM PIN is unsafe.";
    }


    /* Situation 2 */

    else if (answer === "unsafe2" || answer === "safe2") {

        resultId = "safeUnsafeResult2";

        correctAnswer = "unsafe2";

        correctMessage =
            "🎉 Correct! Never enter your UPI PIN to receive money.";

        wrongMessage =
            "❌ Incorrect. A UPI PIN should never be entered just to receive money.";
    }


    /* Situation 3 */

    else if (answer === "unsafe3" || answer === "safe3") {

        resultId = "safeUnsafeResult3";

        correctAnswer = "unsafe3";

        correctMessage =
            "🎉 Correct! Do not click suspicious KYC links. Verify through the official bank app or website.";

        wrongMessage =
            "❌ Incorrect. Suspicious KYC links can be phishing attempts.";
    }


    /* Situation 4 */

    else if (answer === "unsafe4" || answer === "safe4") {

        resultId = "safeUnsafeResult4";

        correctAnswer = "safe4";

        correctMessage =
            "🎉 Correct! Contacting your bank quickly after losing your phone is a safe action.";

        wrongMessage =
            "❌ Incorrect. Securing your bank account after losing your phone is a safe action.";
    }


    /* Situation 5 */

    else if (answer === "unsafe5" || answer === "safe5") {

        resultId = "safeUnsafeResult5";

        correctAnswer = "safe5";

        correctMessage =
            "🎉 Correct! Reporting an unknown transaction to your bank immediately is a safe action.";

        wrongMessage =
            "❌ Incorrect. Reporting an unknown transaction immediately is a safe action.";
    }


    newActivityResult(
        resultId,
        answer === correctAnswer ? correctMessage : wrongMessage,
        answer === correctAnswer
    );
}


/* ================================
   PAGE LOAD
================================ */

document.addEventListener("DOMContentLoaded", function () {

    showScreen("home");

});
