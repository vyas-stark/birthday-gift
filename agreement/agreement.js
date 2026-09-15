// ======================================
// EDIT YOUR PERSONAL CONTENT HERE
// ======================================
const agreementContent = {
  terms: [
    ["Article 01", "Life a endha problem vandhalum vitutu poga kudadhu🥰."],
    ["Article 02", "Ipo irukura mariye eppodhum irukanum🙌."],
    ["Article 03", "Naa apo apo ipdi tha lusu mari edhachu pannuven adjust panniko😅."],
    ["Article 04", "Ipo kudukura care and love ahh future la kammi panniradha maa 🤗."],
    ["Article 05", "Unaku eppo endha problem nanu sollanum okk vaa, nee sonna na feel pannuven nu sollama irukadha💗."],
    ["Article 06", "Unnoda happiness, sadness, kovam ,edhuva irundhalum share pannu unakaga na iruken maa🤗🌎."],
  ],
  cancelMessages: [
    "Nice try.",
    "Mummy... seriously?",
    "That option doesn't seem to work.",
    "There is no cancellation clause.",
  ],
};
const terms = document.querySelector(".terms");
agreementContent.terms.forEach(([number, text]) => {
  const item = document.createElement("article");
  item.innerHTML = `<p class="term-number">${number}</p><p class="term-copy">${text}</p>`;
  terms.appendChild(item);
});
const scene = document.querySelector(".agreement-scene");
const cancel = document.querySelector(".cancel-button");
const cancelMessage = document.querySelector(".cancel-message");
const signaturePanel = document.querySelector(".signature-panel");
const canvas = document.querySelector("#signature-pad");
const context = canvas.getContext("2d");
let cancelCount = 0;
let drawing = false;
let signed = false;
function moveCancel() {
  const travel = Math.min(42, window.innerWidth * 0.08);
  cancel.style.transform = `translate(${(cancelCount % 2 ? -1 : 1) * travel}px, ${cancelCount % 3 === 0 ? -14 : 12}px)`;
  cancelMessage.textContent =
    agreementContent.cancelMessages[
      Math.min(cancelCount, agreementContent.cancelMessages.length - 1)
    ];
  cancelCount += 1;
}
cancel.addEventListener("click", moveCancel);
cancel.addEventListener(
  "touchstart",
  (event) => {
    event.preventDefault();
    moveCancel();
  },
  { passive: false },
);
function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  context.scale(ratio, ratio);
  context.strokeStyle = "#29251f";
  context.lineWidth = 2;
  context.lineCap = "round";
  context.lineJoin = "round";
}
function point(event) {
  const rect = canvas.getBoundingClientRect();
  const touch = event.touches ? event.touches[0] : event;
  return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
}
function startDraw(event) {
  drawing = true;
  context.beginPath();
  const p = point(event);
  context.moveTo(p.x, p.y);
  event.preventDefault();
}
function draw(event) {
  if (!drawing) return;
  const p = point(event);
  context.lineTo(p.x, p.y);
  context.stroke();
  event.preventDefault();
}
function stopDraw() {
  drawing = false;
}
canvas.addEventListener("pointerdown", startDraw);
canvas.addEventListener("pointermove", draw);
canvas.addEventListener("pointerup", stopDraw);
canvas.addEventListener("pointerleave", stopDraw);
canvas.addEventListener("touchstart", startDraw, { passive: false });
canvas.addEventListener("touchmove", draw, { passive: false });
canvas.addEventListener("touchend", stopDraw);
window.addEventListener("resize", () => {
  if (scene.classList.contains("is-signing")) resizeCanvas();
});
document.querySelector(".accept-button").addEventListener("click", () => {
  scene.classList.add("is-signing");
  signaturePanel.setAttribute("aria-hidden", "false");
  requestAnimationFrame(resizeCanvas);
});
document.querySelector(".close-signature").addEventListener("click", () => {
  scene.classList.remove("is-signing");
  signaturePanel.setAttribute("aria-hidden", "true");
});
document.querySelector(".clear-button").addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
document.querySelector(".agreement-button").addEventListener("click", () => {
  signed = true;
  scene.classList.remove("is-signing");
  scene.classList.add("is-accepted");
});
document.querySelector(".last-page-button").addEventListener("click", () => {
  if (signed) window.location.href = "../letter/letter.html";
});
