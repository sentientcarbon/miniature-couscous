// 1. Select the button from the HTML
const button = document.getElementById('colorButton');

// 2. Define the function that changes the color
function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777216).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = "#" + randomColor;
}

// 3. Listen for a 'click' on the button
button.addEventListener('click', changeColor);
