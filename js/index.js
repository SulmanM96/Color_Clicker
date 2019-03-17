  var positions = document.querySelectorAll('.position');
  var scoreBoard = document.querySelector('.score');
  var wcircle = document.querySelectorAll('.wcircle');
  var pcircle = document.querySelectorAll('.pcircle');
  var rcircle = document.querySelectorAll('.rcircle');
  var ycircle = document.querySelectorAll('.ycircle');
  var bcircle = document.querySelectorAll('.bcircle');
  var ocircle = document.querySelectorAll('.ocircle');
  var blcircle = document.querySelectorAll('.blcircle');
  var brcircle = document.querySelectorAll('.brcircle');
  var gcircle = document.querySelectorAll('.gcircle');
  var elem = document.getElementById('timer');
  var lastposition;
  var timeUp = false;
  var score = 0;
  var timeLeft = 30;
  var timerId = setInterval(countdown, 1000);
// setting up variables
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };
//randomfying the at the speed in whcih the ball stays on the screen for
  function randomposition(positions) {
    var circlex = Math.floor(Math.random() * positions.length);
    var position = positions[circlex];
//randomfying the positions of the circles
    if(position === lastposition) {
      return randomposition(positions);
    }

    lastposition = position;
    return position;
  }
//not allowing the ball to spawn on the same location
  function randomify() {
    var time = randomTime(200, 800);
    var position = randomposition(positions);
    // console.log(time, position);
//the time for the ball to stay up varies between 200 milli and 800 milli
    position.classList.add('appear');
    setTimeout(() => {
      position.classList.remove('appear');
      if(!timeUp) randomify();
    }, time);
  }

  function startGame() {

    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    randomify();
    countdown();
    setTimeout(() => timeUp = true, 30000)


  }

  // set the timer for 30 secs

  function clicked(c) {
    // console.log(e);
    if(!c.isTrusted) return;
    score++; //returns a boolean value based on if event is trusted
    this.classList.remove('appear');
    scoreBoard.textContent = score;
  }

  function countdown() {
      if (timeLeft == -1) {
          clearTimeout(time);
      } else {
          elem.innerHTML = timeLeft + ' seconds remaining';
          timeLeft--;
      }
  }
  function timerUp() {
      alert("Times's Up!");
  }
//updates the score based on player

  wcircle.forEach(wcircle => wcircle.addEventListener('click', clicked));
  bcircle.forEach(bcircle => bcircle.addEventListener('click', clicked));
  rcircle.forEach(rcircle => rcircle.addEventListener('click', clicked));
  ycircle.forEach(ycircle => ycircle.addEventListener('click', clicked));
  pcircle.forEach(pcircle => pcircle.addEventListener('click', clicked));
  ocircle.forEach(ocircle => ocircle.addEventListener('click', clicked));
  blcircle.forEach(blcircle => blcircle.addEventListener('click', clicked));
  brcircle.forEach(brcircle => brcircle.addEventListener('click', clicked));
  gcircle.forEach(gcircle => gcircle.addEventListener('click', clicked));
  //added a event listner to listen to clicks
