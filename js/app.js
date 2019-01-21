// Get body element
const body = document.querySelector('body');

// Generate a random value from 0 to 200
function newColorValue() {
    return Math.random() * 200;
}

// Use the newValue() function to create an rgb value
function newRGB() {
    return `rgb( ${ newColorValue() }, ${ newColorValue() }, ${ newColorValue() } )`;
}

// A function that changes the background color when invoked
function changeBackgroundColor() {
    body.style.backgroundColor = newRGB();
}

window.setInterval(changeBackgroundColor, 3000);