var colors = ['yellow', 'blue', 'green', 'red', 'orange', 'purple', 'grey', 'black', 'lightgreen','darkblue'];

var buttonNext = document.querySelector('#Next');

var buttonPrev = document.querySelector('#Prev');

var result = document.querySelector('#result');

var color = 0;

result.style.background = colors[0];

buttonNext.onclick = function () {
    color++
    if (color > colors.length - 1) {
        color = 0;
    }
    result.style.background = colors[color];
}
buttonPrev.onclick = function () {
    color--
    if (color < colors.length - 10) {
        color = 9;
    }
    result.style.background = colors[color];
    console.log(color);
}