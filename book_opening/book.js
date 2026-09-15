// ======================================
// EDIT YOUR PERSONAL CONTENT HERE
// ======================================
const bookContent = { title: "For Mummy", subtitle: "A story by your son" };
const book = document.querySelector("#book");
const openButton = document.querySelector(".open-button");
book.querySelector(".book-cover p").textContent = "For";
book.querySelector(".book-cover strong").textContent =
  bookContent.title.replace(/^For\s*/i, "");
book.querySelector(".book-cover small").textContent = bookContent.subtitle;
let opened = false;
function openBook() {
  if (opened) return;
  opened = true;
  document.body.classList.add("is-opening");
  setTimeout(() => {
    document.body.classList.add("is-leaving");
    setTimeout(() => {
      window.location.href = "../chapter_01/chapter1.html";
    }, 1150);
  }, 1900);
}
book.addEventListener("click", openBook);
book.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openBook();
  }
});
openButton.addEventListener("click", openBook);
