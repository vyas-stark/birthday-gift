// ======================================
// EDIT YOUR PERSONAL CONTENT HERE
// ======================================
const loginContent = {
  question: "Who am I to you?",
  password: "son",
  wrongMessages: [
    "Hmm... think about it.",
    "You already know the answer.",
    "Mummy... come on.",
  ],
  welcome: "Welcome, Mummy.",
};

const form = document.querySelector(".unlock-form");
const input = document.querySelector("#answer");
const response = document.querySelector(".response");
const question = document.querySelector(".question");
const accessWelcome = document.querySelector(".access-message strong");
let attempts = 0;
question.textContent = loginContent.question;
accessWelcome.textContent = loginContent.welcome;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    input.value.trim().toLowerCase() ===
    loginContent.password.trim().toLowerCase()
  ) {
    document.body.classList.add("is-unlocked");
    setTimeout(() => {
      window.location.href = "../book_opening/book.html";
    }, 3100);
    return;
  }
  response.textContent =
    loginContent.wrongMessages[
      Math.min(attempts, loginContent.wrongMessages.length - 1)
    ];
  attempts += 1;
  input.select();
});
