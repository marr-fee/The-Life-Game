let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

let updateSeconds = document.getElementById('seconds');
let updateMinutes = document.getElementById('minutes');
let updateHours = document.getElementById('hours');
let updateDays = document.getElementById('days');

const timeLoop = setInterval(() => {
  seconds++;

  if ( seconds === 60 ) {
    minutes++;
    seconds = 0;
  };
  if ( minutes === 60 ) {
    hours++;
    minutes = 0;
  };
  if ( hours === 24 ) {
    days++;
    hours = 0;
  }

  updateSeconds.innerHTML = seconds;
  updateMinutes.innerHTML = minutes;
  updateHours.innerHTML = hours;
  updateDays.innerHTML = days;
 // console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

  if ( days >= 1 ) {
    clearInterval(timeLoop);
  //  console.log('! Day has passed!');
  }
}, 1000);
