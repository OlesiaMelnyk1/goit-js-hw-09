import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  flatpickrSelector: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

let userSelectedTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      refs.buttonStart.setAttribute('disabled', 'disabled');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.buttonStart.removeAttribute('disabled');
      userSelectedTime = selectedDates[0];
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(refs.flatpickrSelector, options);

refs.buttonStart.addEventListener('click', onStart);

function onStart() {
  refs.buttonStart.setAttribute('disabled', 'disabled');
  let diff = userSelectedTime - Date.now();
  intervalId = setInterval(() => {
    diff -= 1000;
    if (diff < 0) {
      clearInterval(intervalId);
      return;
    }
    const convertedTime = convertMs(diff);
    refs.dataDays.textContent = convertedTime.days;
    refs.dataHours.textContent = convertedTime.hours;
    refs.dataMinutes.textContent = convertedTime.minutes;
    refs.dataSeconds.textContent = convertedTime.seconds;
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
