// 1 ПРИМЕР

var addBtn = document.querySelector('#add');

addBtn.onclick = function() {
  document.querySelector('#add').style.background = randomColors();
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// 2 ПРИМЕР

var addBtn = document.querySelector('#add');

var color = 0;

var colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "white",
  "orange",
  "grey",
  "black",
  "purple",
  "darkcyan",
  "coral",
  "aqua",
  "greenyellow",
  "teal",
  "khaki"
];

addBtn.onclick = function() {
  color++;
  if (color > 14) {
    color = 0;
  }
  addBtn.style.background = colors[color];
}

// 3 ПРИМЕР

var addBtn = document.querySelector('#add');

var colorArray = [
  "red",
  "green",
  "blue",
  "yellow",
  "white",
  "orange",
  "grey",
  "black",
  "purple",
  "darkcyan",
  "coral",
  "aqua",
  "greenyellow",
  "teal",
  "khaki"
];

var i = 0;

addBtn.onclick = function () {
  addBtn.style.background = colorArray[i];
  i++;
  if (i > colorArray.length - 1) {
    i = 0;
  }
}

// 4 ПРИМЕР

var addBtn = document.querySelector('#add');

var bgar = [ 
"red",
"green",
"blue",
"yellow",
"white",
"orange",
"grey",
"black",
"purple",
"darkcyan",
"coral",
"aqua",
"greenyellow",
"teal",
"khaki"
]; 

curBg = 0;

addBtn.onclick = function(){ 
    addBtn.style.background = bgar[++curBg % bgar.length];
}



// 2 задача

var addText = document.querySelector('#create');

var removeText = document.querySelector('#delete');

var nameText = document.querySelector('#text');

var result = document.querySelector('#result');

var andPro = '';

addText.onclick = function () {

    andPro = andPro + nameText.value + '<br>';

    result.innerHTML = andPro;

    nameText.value = '';
}

removeText.onclick = function () {

    result.innerHTML = '';
}


// 2 задача

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
