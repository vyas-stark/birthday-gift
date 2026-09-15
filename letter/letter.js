// ======================================
// EDIT YOUR PERSONAL CONTENT HERE
// ======================================
const letterContent = {
  title: "For Mummy",
  body: "Happy Birthday Mummyyyyy 🤗💗🌎. Sorry mummy ennala gift edhuvum thara mudiyala but oru naal kandipa vangi tharen. Unna idhu vara nearla paathadhu illa just phone tha but ipdi phone la pesunadhuke ivalo close aagitom apo real ah meet panna avalodha yaaralum pirika mudiyadhu🥰. nee oru oru time enakaga pandra care and love ku na worth ah nu theriyala but adhula enaku romba pudikum ipo nee oru naal apdi message pannati kuda i will feel like the day is incomplete🥺. unake theriyum na yaaru kudayum ivalo sekiro pesa maten nu but unkuda yen nu theriyala but romba takkunu otikiten😁.  enaku indha bond ennoda death vara venum nu aasa paduren i hope it will. soon na anga varen namma chennai ah suthi paakalam, nalla food la try pannalam and neraiya memories la create . unta solla inno neraiya iruku but just oru simple website la namma Mother-Son bond ah naa lock panna virumbala so once again Happy Birthday My Dear Sweet Mummyyyyy🤗😘🌎",
  signOff: "— Your Son",
  endingTitle: "The end",
  endingMessage: "Some stories are written.\nSome just happen.",
};
document.querySelector(".letter-paper h1").textContent = letterContent.title;
document.querySelector(".letter-body p").textContent = letterContent.body;
document.querySelector(".sign-off").textContent = letterContent.signOff;
document.querySelector(".end-screen h2").textContent =
  letterContent.endingTitle;
document.querySelector(".end-screen>p:last-child").innerHTML =
  letterContent.endingMessage.replace(/\n/g, "<br>");
document
  .querySelector(".read-button")
  .addEventListener("click", () => document.body.classList.add("is-ended"));
