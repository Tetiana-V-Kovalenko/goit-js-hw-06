function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const inputValue = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
console.log(inputValue.value);

btnCreate.addEventListener("click", onCreateClick);
btnDestroy.addEventListener("click", destroyBoxes);

function onCreateClick() {
  createBoxes(inputValue.value);
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    const color = getRandomHexColor();
    box.style.backgroundColor = `${color}`;
    boxes.appendChild(box);
    size += 10;
  }
}

function destroyBoxes(event) {
  boxes.innerHTML = ''; 
//   console.log(boxes.childNodes);
//   [...boxes.childNodes].forEach((item) => item.remove());
}
