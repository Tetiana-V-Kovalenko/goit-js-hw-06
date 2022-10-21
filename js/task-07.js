const fontSizeControler = document.querySelector('#font-size-control');
const textChanged = document.querySelector('#text');
console.log(textChanged);
fontSizeControler.addEventListener('input', onInputChange);

function onInputChange(event){
    textChanged.style.fontSize = `${event.currentTarget.value}px`;
}