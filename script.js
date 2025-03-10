const daysList = ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const monthsList = ['January', 'February', 'March',
   'April', 'May', 'June',
    'July', 'August', 'September',
     'October', 'November', 'December'];

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let currentYear = 2025;

let hours = 0;
let minutes = 0;
// let seconds = 0;
let day = 1;
let currentDayIndex = 0;
let currentDay = daysList[currentDayIndex];
let currentMonthIndex = 0;
let currentMonth = monthsList[currentMonthIndex];


// let updateSeconds = document.getElementById('seconds');
let updateMinutes = document.getElementById('minutes');
let updateHours = document.getElementById('hours');
let updateDays = document.getElementById('days');
let updateGreeting = document.getElementById('greeting');

const timeLoop = setInterval(() => {
  minutes++;

 /* if ( seconds === 60 ) {
    minutes++;
    seconds = 0;
  }; */
  if ( minutes === 60 ) {
    hours++;
    minutes = 0;
  };
  if (hours >= 5 && hours < 12) {
    updateGreeting.innerText = 'Good Morning';
  } else if (hours >= 12 && hours < 17) {
    updateGreeting.innerText = 'Good Afternoon';
  } else if (hours >= 17 && hours < 21) {
    updateGreeting.innerText = 'Good Evening';
  } else if( hours >= 21 && hours < 24){
    updateGreeting.innerText = 'Good Night';
  } else {
    updateGreeting.innerText = 'Sleep Tight';
  }

  if ( hours === 24 ) {
   currentDayIndex = (currentDayIndex + 1) % daysList.length;
    day++;
   // console.log(day);
   currentDay = daysList[currentDayIndex]
    hours = 0;
  };
  if (day > daysInMonth[currentMonthIndex]) {
    currentMonthIndex = (currentMonthIndex + 1) % monthsList.length;
    currentMonth = monthsList[currentMonthIndex];
    day = 1;
   // console.log(day);
   // console.log(currentMonth);
  };
  if (currentMonth === 'December') {
    currentMonthIndex = 0;
    currentYear++;
   // console.log(currentYear);
  }

  

// Format hours, minutes, and days to always show two digits
const formattedHours = String(hours).padStart(2, '0');
const formattedMinutes = String(minutes).padStart(2, '0');
const formattedDays = String(days).padStart(2, '0');

// updateSeconds.innerHTML = seconds;
updateMinutes.innerHTML = formattedMinutes;
updateHours.innerHTML = formattedHours;
updateDays.innerHTML = currentDay;
// console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

  if ( currentMonth === monthsList[3] ) {
    clearInterval(timeLoop);
   // console.log(currentMonth)
  //  console.log('! Day has passed!');
  }
}, 1000);




/*


let accountBalance = 1000;
let hygineLevel = 90;
let stomachLevel = 90;
let faithLevel = 50;
let investments = 0;
let restLevel = 80;
let popularity = 0;
let socialLife = 0;
let selfConfidence = 0;
let numberOfFriends = 0;
let criminality = 0;
let relationshipStatus = 'single';
let employmentStatus = 'unemployed';
let workXp = 0;
let foodItems = 0;
let beautyProducts = 0;
let houseRent = 0;


// gambling scenerio
tries = 0;

while (tries <= 20) {
  function playBetting() {
    playerGuess = 32;
    bet = 20;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    if (playerGuess === randomNumber) {
      console.log('You win!')
      accountBalance += 100;
      faithLevel++;
      selfConfidence++;
      return true;
    }
    else{
      accountBalance -= bet;
      faithLevel--; 
      selfConfidence--;
      
    }
    console.log(randomNumber);
    console.log(faithLevel);
    console.log(selfConfidence);
  }
  playBetting();

  console.log(accountBalance);
  tries++;
}  */
  
//console.log(currentMonth);