console.log('timers');

// DOM API
// timer API - builtin library in the browser

// setTimeout(function(){}, 5000);
// setInterval(function(){}, 1000);

// separation of concerns
// data

var startBtn = document.querySelector('.start-btn');
var pauseBtn = document.querySelector('.pause-btn');
var resetBtn = document.querySelector('.reset-btn');
var display = document.querySelector('.display');

var timerId = null; // falsey

var handleStart = function() {
  // guard condition
  if (timerId) {
    // quit the function
    return;
  }
  
  // start timer so that every second it updates the display
  timerId = setInterval(function() {
    // increment the display by 1
    display.textContent = Number(display.textContent ) + 1
  }, 1000)
}

var handlePause = function() {
  // stop the timer
  clearInterval(timerId)
  timerId = null
}

var handleReset = function() {
  // stop the timer
  clearInterval(timerId)
  timerId = null
  // clear the contents of the display
  display.textContent = 0
}

startBtn.addEventListener('click', handleStart); 
pauseBtn.addEventListener('click', handlePause);
resetBtn.addEventListener('click', handleReset);
