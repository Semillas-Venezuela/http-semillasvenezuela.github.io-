const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDown = new Date('May 20, 2019 23:59:00').getTime();
const x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDown - now;

  document.getElementById('days').innerText = Math.floor(distance / (day)),
  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
}, second);
