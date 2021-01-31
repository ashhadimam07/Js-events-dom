const button = document.querySelector('#exercise-1');
button.addEventListener('click',event => {
   console.log(button.value++);
});