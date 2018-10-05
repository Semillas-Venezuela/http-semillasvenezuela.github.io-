const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

var countDown = new Date('Nov 1, 2018 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //Hacer Algo cuando se cumpla la fecha
      //if (distance < 0) {
      //  clearInterval(x);
      //    Lanzamiento!;
      //}

    }, second)