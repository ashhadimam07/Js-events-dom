const button = document.querySelector('#exercise-2');


const button1 = document.querySelector('#exercise-2-minus');
button1.addEventListener('click',event => {
   console.log(button.value--);
})



const button2 = document.querySelector('#exercise-2-plus');
button2.addEventListener('click',event => {
   console.log(button.value++);
})