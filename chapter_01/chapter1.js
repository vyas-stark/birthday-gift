// ======================================
// EDIT YOUR PERSONAL CONTENT HERE
// ======================================
const chapterContent = {
  number: "Chapter 01",
  title: "How It All Started",
  pages: [
    "I  don't know that you will become this much close to me. This all starts from SRI, without sri i might not know who you are for that i will say a big thank you for sriii. unmaiya sollanuna idhu oru unexpected bond, but much needed bond for me. Naa unta first pesunadhu sri oda birthday ku ena gift vangalam nu keka but andha call la adha thavara namma ellathayum pesuno apdiye konja konjama pesi pesi ipo life la romba important person ahh marita 🤗💗. ipdiye life long irukanum mummyy 😭🤗🌎 ",
    " second page content",
  ],
};
const title = document.querySelector(".chapter-title");
const copy = document.querySelector(".story-copy");
const count = document.querySelector(".page-count");
const continueButton = document.querySelector(".continue");
let pageIndex = 0;
let isNavigating = false;
function renderPage() {
  title.textContent = chapterContent.title;
  copy.textContent = chapterContent.pages[pageIndex];
  count.textContent = `${String(pageIndex + 1).padStart(2, "0")} / ${String(chapterContent.pages.length).padStart(2, "0")}`;
  continueButton.innerHTML =
    pageIndex === chapterContent.pages.length - 1
      ? "Continue <span>→</span>"
      : "Turn the page <span>→</span>";
}
continueButton.addEventListener("click", () => {
  if (isNavigating) return;
  isNavigating = true;
  document.body.classList.add("is-turning");
  setTimeout(() => {
    window.location.href = "../chapter_02/chapter2.html";
  }, 620);
});
const audio = document.querySelector(".ambient-audio");
document.querySelector(".music-control").addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
    } catch (error) {
      return;
    }
  } else {
    audio.pause();
  }
});
renderPage();
