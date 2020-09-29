var counter = 0; //declare a variable for countdown timer
var timeleft = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
  createCanvas(windowWidth, windowHeight);
  var timer = select ('#timer'); //create a countdown timer
  timer.html(timeleft - counter);
  var interval = setInterval(timeIt, 1000);

function timeIt(){
  counter++;
  timer.html(timeleft - counter);
  if (counter == timeleft) {
    clearInterval(interval);
    counter = 0;
  }
}
   
}
