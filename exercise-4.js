const text = document.querySelector("#text-input");
const output = document.querySelector("#char-value");

text.addEventListener('input', event => {
    output.innerHTML = text.value.length;
})