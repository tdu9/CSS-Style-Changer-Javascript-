const paragraph = document.getElementById('paragraph');

function myFunction(){
    let font = document.getElementById('select').value;

    switch(font){
        case "MS Gothic":
            paragraph.style.fontFamily = "MS Gothic";
            break;
        case "monospace":
            paragraph.style.fontFamily = "Monospace";
            break;
        case "arial":
            paragraph.style.fontFamily = "Arial";
            break;
        case "cambria":
            paragraph.style.fontFamily = "Cambria";
            break;
        case "Comic Sans MS":
            paragraph.style.fontFamily = "Comic Sans MS";
            break;
            case "default":
            paragraph.style.fontFamily = "";
            break;
    }
}

let slider = document.getElementById('range-slider')
let output = document.getElementById('size');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    let num = this.value;
    let string = num.toString;
    paragraph.style.fontSize = num + "px";

    let black = document.getElementById('black');
    let red = document.getElementById('red');
    let blue = document.getElementById('blue');
    let green = document.getElementById('green');

    black.addEventListener('click', function() {
paragraph.style.color = "black"
    }) 
    red.addEventListener('click', function() {
paragraph.style.color = "red"
    }) 
    blue.addEventListener('click', function() {
paragraph.style.color = "blue"
    }) 
    green.addEventListener('click', function() {
     paragraph.style.color = "green"   
    })
}

let normal = document.getElementById('normal');
let cursive = document.getElementById('cursive');
let light = document.getElementById('light');
let bold = document.getElementById('bold');

normal.addEventListener('click', function() {
    paragraph.style.fontStyle = "normal";
})
cursive.addEventListener('click', function() {
    paragraph.style.fontStyle = "italic";
})
light.addEventListener('click', function() {
    paragraph.style.fontWeight = "lighter";
})
bold.addEventListener('click', function() {
    paragraph.style.fontWeight = "bold";
})

