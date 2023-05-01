'use strict'

const desk = document.querySelector('#board'),
      colors = ['#954b96', '#5c9fc7', '#C5D0E6', '#3BB08F', '#FF00FF', '#007FFF', '#007DFF', '#00FF00'],
      SQUARES_NUMBERS = 600;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  desk.append(square);
}

function setColor(square) {
  const color = getRandomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(square) {
  square.style.backgroundColor = '#1f1f1f';
  square.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const i = Math.floor(Math.random() * colors.length);

  return colors[i];
}