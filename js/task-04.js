const value = document.querySelector('#value');
console.log(value);
const btnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(btnDecrement);
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);
let counterValue = 0;


btnDecrement.addEventListener('click', () => {
    
    counterValue--;
    console.log(counterValue);
    value.textContent = `${counterValue}`;
})
btnIncrement.addEventListener('click', () => {
    counterValue++;
    console.log(counterValue);
    value.textContent = `${counterValue}`;
})

