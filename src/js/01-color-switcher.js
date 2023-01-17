const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let intervalId = null;

buttonStart.addEventListener('click', onStartColorChange);
buttonStop.addEventListener('click', onStopColorChange);

function onStartColorChange() {
  buttonStart.setAttribute('disabled', 'disabled');
  buttonStop.removeAttribute('disabled');
  body.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopColorChange() {
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', 'disabled');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
