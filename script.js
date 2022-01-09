const $ = document;
const tab = $.querySelector(".header__tabs");
const tabBtns = tab.querySelectorAll("button");
const btnBorder = tab.querySelector(".btnBorder");
const main = $.querySelector("main");
const containerIcon = $.querySelector(".container__icon i");
const containerPenIcon = $.querySelector(".container__pen-icon");
const video = $.querySelector("video");

main.style.left = "0";

video.onmouseover = () => {
  const randomNumber = Math.floor(Math.random() * video.duration);
  video.currentTime = randomNumber;
};

const switchPages = (index, left, iconClassName, penIconBottom) => {
  main.style.left = `${left}rem`;
  btnBorder.style.width = `${tabBtns[index].clientWidth}px`;
  btnBorder.style.left = `${tabBtns[index].offsetLeft}px`;
  tab.querySelector("button.active").classList.remove("active");
  tabBtns[index].classList.add("active");
  containerIcon.className = iconClassName;
  containerPenIcon.style.bottom = `${penIconBottom}rem`;
};

tabBtns[0].onclick = () => {
  switchPages(0, 0, "fas fa-comment-alt", 1);
};
tabBtns[1].onclick = () => {
  switchPages(1, -18, "fas fa-camera", 4.5);
};
tabBtns[2].onclick = () => {
  switchPages(2, -37, "fas fa-phone-alt", 1);
};
