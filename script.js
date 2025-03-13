// Collect and use user's preferred username
// -------------------------------------------

let getUserName = document.querySelector('.username');
let userInfoBlock = document.getElementById('user-info');
let submitUserNameBtn = document.querySelector('.submit-user-info-btn');
let updateUserName = document.getElementById('username');

submitUserNameBtn.addEventListener('click', () => {
  updateUserName.innerHTML = getUserName.value;
  getUserName.value = '';
  userInfoBlock.style.display = 'none';
})

// -------------------------------------------


// Set and modify time loop
// -------------------------------------------

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

// -------------------------------------------
// Menu Navigation

const mainMenuBlock = document.getElementById('main-menu-block');
const locationsMenuBlock = document.getElementById('locations-menu-block');
const phoneMenuBlock = document.getElementById('phone-menu-block');
const casinoMenuBlock = document.getElementById('casino-menu-block');
const guessingGameBlock = document.getElementById('guessing-game-block');
const investmentMenuBlock = document.getElementById('investment-menu-block');
const cryptoInvestmentBlock = document.getElementById('crypto-block');

let goToLocations = document.getElementById('locations');
let goToMainMenu = document.getElementById('main-menu');
let goToCasino = document.getElementById('casino');
let goToGuessingGame = document.getElementById('guess-number-game');
let goBackToMainMenu = document.querySelectorAll('.return-to-main-menu');
let goToPhoneMenu = document.getElementById('phone');
let goToInvestment = document.getElementById('investment');
let goToCryptoInvest = document.getElementById('crypto-investment');
let exitCryptoPage = document.getElementById('exit-crypto-page-btn');
let addFundsBlock = document.getElementById('add-funds-block')
let addFundsBtn = document.getElementById('add-funds-btn');
let returnToAddFundsBlockBtn = document.getElementById('return-to-crypto-block')
let mafInvestmentAmountInput = document.getElementById('maf-investment-amount');
let bteInvestmentAmountInput = document.getElementById('bte-investment-amount');
let buyMafCoin = document.getElementById('buy-maf-coin');
let buyBteCoin = document.getElementById('buy-bte-coin');



goToMainMenu.addEventListener('click', () => {
  mainMenuBlock.classList.remove('inactive-menu');
  locationsMenuBlock.classList.add('inactive-menu');
  casinoMenuBlock.classList.add('inactive-menu');
  guessingGameBlock.classList.add('inactive-menu');
});

goBackToMainMenu.forEach(icon => {
  icon.addEventListener('click', () => {
    mainMenuBlock.classList.remove('inactive-menu');
    locationsMenuBlock.classList.add('inactive-menu');
    casinoMenuBlock.classList.add('inactive-menu');
    guessingGameBlock.classList.add('inactive-menu');
    phoneMenuBlock.classList.add('inactive-menu');
    investmentMenuBlock.classList.add('inactive-menu');
  });
});

goToPhoneMenu.addEventListener('click', () => {
  phoneMenuBlock.classList.remove('inactive-menu');
  mainMenuBlock.classList.add('inactive-menu');
})

goToLocations.addEventListener('click', () => {
  locationsMenuBlock.classList.remove('inactive-menu');
  mainMenuBlock.classList.add('inactive-menu');
});

goToCasino.addEventListener('click', () => {
  casinoMenuBlock.classList.remove('inactive-menu');
  locationsMenuBlock.classList.add('inactive-menu');
});

goToGuessingGame.addEventListener('click', () => {
  guessingGameBlock.classList.remove('inactive-menu');
  casinoMenuBlock.classList.add('inactive-menu');
})

goToInvestment.addEventListener('click', () => {
  phoneMenuBlock.classList.add('inactive-menu');
  investmentMenuBlock.classList.remove('inactive-menu');
})

goToCryptoInvest.addEventListener('click', () => {
  investmentMenuBlock.classList.add('inactive-menu');
  cryptoInvestmentBlock.classList.remove('inactive-menu');
})

exitCryptoPage.addEventListener('click', () => {
  cryptoInvestmentBlock.classList.add('inactive-menu');
  investmentMenuBlock.classList.remove('inactive-menu');
})

addFundsBtn.addEventListener('click', () => {
  addFundsBlock.classList.remove('inactive-menu');
})

returnToAddFundsBlockBtn.addEventListener('click', () => {
  addFundsBlock.classList.add('inactive-menu');
})
// -------------------------------------------



// -------------------------------------------

let accountBalance = 1000;
//let hygineLevel = 90;
//let stomachLevel = 90;
//let faithLevel = 50;
//let investments = 0;
//let restLevel = 80;
//let popularity = 0;
//let socialLife = 0;
//let selfEsteem = 0;
//let numberOfFriends = 0;
//let criminalityLevel = 0;
//let relationshipStatus = 'single';
//let employmentStatus = 'unemployed';
//let workXp = 0;
//let foodItems = 0;
//let beautyProducts = 0;
//let houseRent = 0;

// Set up betting feature
// -------------------------------------------------------

let updateAccountBalance = document.getElementById('account-balance');
updateAccountBalance.innerText = accountBalance;

// gambling scenerio
tries = 0;
let getPlayerBet = document.getElementById('player-bet');
let getPlayerNumber = document.getElementById('player-number');
let updateOutcomeMessage = document.querySelector('.outcome-message');

let winnings = 0;

console.log(winnings);


while (tries <= 1) {
  function playBetting(playerNumber) {
    
    bet = Number(getPlayerBet.value);
    accountBalance-= bet;
    updateAccountBalance.innerText = accountBalance;
    console.log(Number(getPlayerNumber.value));

    
    randomNumber = Math.floor(Math.random() * 100) + 1;
    if (playerNumber === randomNumber) {
      winnings+= 100;
      updateOutcomeMessage.innerHTML = `You have won $${winnings}`
      accountBalance += 100;
     // faithLevel++;
     // selfConfidence++;
      return true;
    }
    else{
      updateOutcomeMessage.innerText = `Not quite! better luck next time.`;
     // faithLevel--; 
     // selfConfidence--;
      
    }
   // console.log(randomNumber);
   // console.log(faithLevel);
   // console.log(selfConfidence);
  }

  tries++;
}  

// -------------------------------------------------------

//console.log(currentMonth);

// crypto investment test
let cryptoInvestmentAmount = 0;
let cryptBalance = 0;
let changes = 0;
let mafChanges = 0;
let bteChanges = 0;





let updateCryptoBalance = document.getElementById('crypto-balance');
let updateMafPercentChange = document.getElementById('maf-changes-24hr');
let updateBtePercentChange = document.getElementById('bte-changes-24hr');
let updateBtePrice = document.getElementById('bte-latest-price');
let updateMafPercentageDisplay = document.querySelector('.maf-percent-changes');
let updateBtePercentageDisplay = document.querySelector('.bte-percent-changes');
let updateMafPrice = document.getElementById('maf-latest-price');
let updatePurchaseMsg = document.getElementById('coin-purchace-msg');
buyMafCoin.addEventListener('click', () => {

  accountBalance -= Number(mafInvestmentAmountInput.value);
  updateAccountBalance.innerText = accountBalance;
   updatePurchaseMsg.innerText = `$${mafInvestmentAmountInput.value} successfully added.`
  cryptoInvestmentAmount += Number(mafInvestmentAmountInput.value);
  mafInvestmentAmountInput.value = "";
 
  console.log(cryptoInvestmentAmount);
});

buyBteCoin.addEventListener('click', () => {
  accountBalance -= Number(bteInvestmentAmountInput.value);
  updateAccountBalance.innerText = accountBalance;
   updatePurchaseMsg.innerText = `$${bteInvestmentAmountInput.value} successfully added.`
  cryptoInvestmentAmount += Number(bteInvestmentAmountInput.value);

  bteInvestmentAmountInput.value = "";
  
});

const investmentLoop = setInterval(() => {
  
  let randomCryptoChange = Math.floor(Math.random() * 100) + 1;
  
  let percentMafChange = 0;
  let percentBteChange = 0;
  let percentChange = 0;
  let mafCoinCost = 29000;
  let bteCoinCost = 180;

  if ((randomCryptoChange >= 1 && randomCryptoChange < 25) || (randomCryptoChange >= 50 && randomCryptoChange < 75)) {
    percentChange += (cryptoInvestmentAmount * 0.01);
    cryptBalance = (cryptoInvestmentAmount += percentChange);
    changes += percentChange;

    percentMafChange -= (mafCoinCost * 0.0001);
    mafChanges += percentMafChange;

    percentBteChange += (bteCoinCost * 0.009);
    bteChanges += percentBteChange;


  } else if ((randomCryptoChange >= 25 && randomCryptoChange < 50) || (randomCryptoChange >= 75 && randomCryptoChange <= 100))
    {

    percentChange -= (cryptoInvestmentAmount * 0.01);
    cryptBalance = (cryptoInvestmentAmount += percentChange);
    changes += percentChange;

    percentMafChange += (mafCoinCost * 0.0001);
    mafChanges += percentMafChange;

    percentBteChange -= (bteCoinCost * 0.009);
    bteChanges += percentBteChange;
  }
  
  updateMafPercentChange.innerHTML = `${mafChanges.toFixed(2)}`
  updateBtePercentChange.innerHTML = `${bteChanges.toFixed(2)}`
  updateMafPrice.innerHTML = `${(mafCoinCost += mafChanges).toFixed(2)}`;
  updateBtePrice.innerHTML = `${(bteCoinCost += bteChanges).toFixed(2)}`
  updateCryptoBalance.innerHTML = `$${cryptBalance.toFixed(2)}`;

  if (mafChanges < 0) {
    updateMafPercentageDisplay.style.backgroundColor = 'red';
    }
    else if (mafChanges > 0) {
    updateMafPercentageDisplay.style.backgroundColor = 'green';
   } else{
    updateMafPercentageDisplay.style.backgroundColor = 'grey';
  }

  if (bteChanges < 0) {
    updateBtePercentageDisplay.style.backgroundColor = 'red';
    }
    else if (bteChanges > 0) {
    updateBtePercentageDisplay.style.backgroundColor = 'green';
   } else{
    updateBtePercentageDisplay.style.backgroundColor = 'grey';
  }
  //console.log(`${(mafCoinCost += changes).toFixed(2)}`)
  //console.log(changes.toFixed(2));
  //console.log(cryptBalance);
  //console.log(percentChange);
  //console.log(randomCryptoChange);
  //console.log(mafCoinCost);


}, 1000);

