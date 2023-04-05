function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function displayBlock() {
  document.querySelector(".modal").style.display = "block";

  const btn = document.querySelector(".modal-btn-icon");
  btn.removeChild(btn.firstElementChild);

  let iNode = document.createElement("i");
  iNode.className = "fa-solid fa-xmark fa-2xl close";
  iNode.setAttribute("onclick", "displayNone()");
  iNode.style.fontSize = "3em";
  btn.appendChild(iNode);
}
function displayNone() {
  document.querySelector(".modal").style.display = "none";

  const btn = document.querySelector(".modal-btn-icon");
  btn.removeChild(btn.firstElementChild);

  let iNode = document.createElement("i");
  iNode.className = "fa-solid fa-bars fa-2xl close";
  iNode.setAttribute("onclick", "displayBlock()");
  iNode.style.fontSize = "3em";
  btn.appendChild(iNode);
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  const btt = document.querySelector(".to-top");
  console.log(document.body.scrollTop);
  if (document.body.scrollTop > 41 || document.documentElement.scrollTop > 41) {
    document.querySelector(".navbar").style.backgroundColor = "#e4e7ff";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  }
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    btt.style.display = "block";
  } else {
    btt.style.display = "none";
  }
}
