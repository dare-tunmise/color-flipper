const colors = ["blue", "yellow", "green", "darksalmon", "maroon", "orange", "lemon", "gray", "violet", "purple", "aqua"];

const btn = document.querySelector(".btn");

const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    //get random number

    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber].toUpperCase();
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}