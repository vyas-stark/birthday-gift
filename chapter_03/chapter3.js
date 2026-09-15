// ======================================
// EDIT YOUR PERSONAL CONTENT HERE
// ======================================
const chapterContent = {
  number: "Chapter 03",
  title: "The Mummy-Son Chapter",
  pages: [
    "Nee enna care pandra vidham enaku romba pudikum like andha mari enna yaarum care pannadhu illa so adhu enaku romba pudikum. adhuvum andha exam time la na message panna takku takkunu reply pannuva that to nee exam ku padichutu iruka modhu enaku andha time la na romba special nu feel aagum 🥰🤗. nee oru oru time unnoda time ah enakaga spent panna modhu na romba romba special ah feel pannuven thank you for that Mummyyy 🤗🌎. ",
    "[YOUR NEXT CHAPTER 03 PAGE WILL GO HERE]",
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
    window.location.href = "../agreement/agreement.html";
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
