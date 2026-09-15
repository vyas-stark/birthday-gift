const progressFill = document.querySelector(".progress-fill");
const progressNumber = document.querySelector(".progress-number");
let progress = 0;
const timer = setInterval(() => {
  progress = Math.min(progress + Math.ceil(Math.random() * 7), 100);
  progressFill.style.width = `${progress}%`;
  progressNumber.textContent = String(progress).padStart(2, "0");
  if (progress >= 100) {
    clearInterval(timer);
    document.body.classList.add("is-ready");
    setTimeout(() => {
      window.location.href = "../login_page/login.html";
    }, 550);
  }
}, 48);
