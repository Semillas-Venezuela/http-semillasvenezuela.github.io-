const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDown = new Date('Nov 1, 2018 00:00:00').getTime();
const x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDown - now;

  document.getElementById('days').innerText = Math.floor(distance / (day)),
  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
}, second);