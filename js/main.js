function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// const modal = document.getElementsByClassName("modal");
// const overlay = document.getElementsByClassName("overlay");
// console.log(modal);

function displayBlock() {
  document.querySelector(".modal").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
}
function displayNone() {
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}
