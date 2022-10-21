// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const bodyEl = document.querySelector('body');
const textChanged = document.querySelector('span.color');
const btnChange = document.querySelector('.change-color');

btnChange.addEventListener("click", onBtnClick)






function onBtnClick(){
  const colorNow = getRandomHexColor();
  console.log(colorNow);
  bodyEl.style.backgroundColor = `${colorNow}`;
textChanged.textContent = `${colorNow}`;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}