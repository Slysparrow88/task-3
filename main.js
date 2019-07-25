var colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "lightcoral",
    "orange",
    "grey",
    "black",
    "darkblue",
    "darkcyan"    
];

var buttonNext = document.querySelector('#Next');

var buttonPrev = document.querySelector('#Prev');

var result = document.querySelector('#result');

result.style.background = colors[0];

for (var color of colors) {
    color = 1;
}

buttonNext.onclick = function () {
    result.style.background = colors[color++];
    if(color > 9){
        color = 0;
    }
}
buttonPrev.onclick = function () {
    result.style.background = colors[color--];
    if(color < 0){
        color = 9;
    }
}