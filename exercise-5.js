const text = document.querySelector("#input");
const value = document.querySelector("#value");

text.addEventListener('input', event => {
    value.style.backgroundColor = text.value;
})