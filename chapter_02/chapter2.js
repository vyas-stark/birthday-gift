// ======================================
// EDIT YOUR PERSONAL CONTENT HERE
// ======================================
const chapterContent = {
  number: "Chapter 02",
  title: "When It Became Something More",
  pages: [
    "Ipo nee enaku evalo important nu keta just words la solla mudiyadhu avalo important 🤗. namma first time pesunadhuku apro apo apo pesi and later ipo daily pesitu iruko , oru naal pesama irundhalum oru mari edho miss pandra mari irukum 🤧. nee enakaga unnoda study routine ah change panni iruka adhu la yaaru avalo sekiro panna mataga but nee panna adhu la irundhu theridhu nee enna evalo value pandra and enaku evalo importance thara nu🤗💗🌎. nee first time enta pesuna apo azhudha apo sonna na yaarutayum ivalo sekiro pesa maten and ipdi person la share panna maten nu but enta sonna so apo namma kulla takkunu oru bond create aachu🤗. ",
    "[YOUR NEXT CHAPTER 02 PAGE WILL GO HERE]",
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
    window.location.href = "../chapter_03/chapter3.html";
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
