window.addEventListener('load', start);

function refreshText() {
  let i = 0;
  while (i < 3) {
    label[i].value = arrayRgb[i].value;
    i++;
  }
}

function start() {}
console.log('tudo pronto');
var rgb = document.querySelectorAll('input.slider');
var arrayRgb = Array.from(rgb);
var label = document.querySelectorAll('input.txt');
var arrayLabel = Array.from(label);
let colorBox = document.querySelector('.color-box');
console.log(arrayRgb[0].value);
console.log(arrayLabel[0].value);

window.addEventListener('change', (event) => {
  switch (event.target.id) {
    case '#redLabel':
      arrayRgb[0].value = event.target.value;
      break;
    case '#GreenLabel':
      arrayRgb[1].value = event.target.value;
      break;
    case '#blueLabel':
      arrayRgb[2].value = event.target.value;
      break;
  }
  refreshText();
  colorBox.style.backgroundColor = `rgb(${arrayRgb[0].value},${arrayRgb[1].value},${arrayRgb[2].value})`;
});
