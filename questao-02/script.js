// ELEMENTS
const buttonDecreaseFont = document.getElementById('decreaseFont');
const buttonIncreaseFont = document.getElementById('increaseFont');
const bodyElement = document.querySelector('body');

// LISTENERS
//buttonDecreaseFont.addEventListener('click', );

// GLOBAL VARIABLES
let changeFontSize = setFontSize();

// FUNCTIONS

function setFontSize () {
    let currentSize = parseInt(window.getComputedStyle(bodyElement, null).fontSize);
    console.log(currentSize);
    let incremetValues = 0;

    return function (value){
        incremetValues = incremetValues + value;
        console.log(incremetValues);
        document.body.style.fontSize = `${currentSize + incremetValues}px`;
    }

};