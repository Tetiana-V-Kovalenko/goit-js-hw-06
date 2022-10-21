const inputEl = document.querySelector("input#validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener('focus', () => {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
})


function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.toggle("valid");
  } else {
    inputEl.classList.toggle("invalid");

  }
}
