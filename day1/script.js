const wrappar = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrappar.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrappar.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrappar.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrappar.classList.remove("active-popup");
});