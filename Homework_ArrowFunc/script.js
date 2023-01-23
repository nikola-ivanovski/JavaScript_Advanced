console.log('Connected');

// Create 2 variables with arrow functions.
// First arrow function will accept two parameters, one for element and one for color.
// The function should change the given element text color with the color given from the second color parameter.
// If no parameter is passed for color, the default value is black.
// Second arrow function will accept two parameters, one for element and one for textSize.
// The function should change the given element text size to the number given from the second textSize parameter.
// If no parameter is passed for textSize, the default value is 24.
// Create a HTML document with two inputs, a button and h1 header with some text. 
// The first input should be for text size and the second for color.
// When the button is clicked the h1 header should change according to the input values (change size as the first input value and color as the second input value).
// Use the functions that we declared earlier and use arrow function for the event listener of the button.

let btn = document.getElementById('btn');
let text = document.getElementById('text');

let changeTextColor = (element, color = "black") => {
    let colorPicker = document.getElementById('colorPicker');
    
    color = colorPicker.value;
    
    element.style.color = color;
       
    // if(color === undefined) {
    //     color = 'black';
    // }
}

let changeTextSize = (element, textSize = 24) => {
    let text = document.getElementById('textSize');

    textSize = text.value + 'px';

    element.style.fontSize = textSize;
    console.log('textSize value:', textSize)

    if(textSize === "") {
        element.style.fontSize = 24 + 'px';
    } else {
        element.style.fontSize = textSize;
    }
}


btn.addEventListener('click', () => {
    text.innerHTML = "";
    text.value = "";
    let header = document.createElement('h1');
    header.innerText = 'Heeeeellloooo from G5. This is Nikola Ivanovski.'
    text.appendChild(header);
    changeTextColor(header, colorPicker.value);
    changeTextSize(header, text.value);
})