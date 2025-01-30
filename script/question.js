const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const shearX = 300;
const shearY = 300;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Awww! My baby! I knew it!🥺";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

// noBtn.addEventListener("click", () => {
//   question.innerHTML = "Awww! My baby!🥺";
//   gif.src =
//     "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
// });
//

noBtn.addEventListener("mouseover", () => {
    const windownCenter = Math.ceil(window.innerWidth / 2);
    const minX = windownCenter - shearX;
    const maxX = windownCenter + shearX;

    const randomX = getRandomInt(minX, maxX);
    const randomY = getRandomInt(-shearY, shearY)

    console.log(`MOVING BUTTON TO: (${randomX},${randomY})`);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// yesBtn.addEventListener("mouseover", () => {
//   const yesBtnRect = noBtn.getBoundingClientRect();
//   const maxX = window.innerWidth - yesBtnRect.width;
//   const maxY = window.innerHeight - yesBtnRect.height;
//
//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);
//
//   yesBtn.style.left = randomX + "px";
//   yesBtn.style.top = randomY + "px";
// });
