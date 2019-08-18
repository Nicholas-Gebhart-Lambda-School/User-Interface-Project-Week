let hamburgerOpen = document.getElementById("hamburger-open");
let hamburgerClose = document.getElementById("hamburger-close");
let hamburger = document.querySelector(".hamburger");
let navUl = document.querySelector(".container ul");
let open = true;

hamburger.addEventListener("click", () => {
  if (open) {
    hamburgerOpen.style.display = "none";
    hamburgerClose.style.display = "flex";
    navUl.style.display = "flex";
    open = false;
  } else {
    hamburgerOpen.style.display = "flex";
    hamburgerClose.style.display = "none";
    navUl.style.display = "none";
    open = true;
  }
});
