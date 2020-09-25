let image1;
let image2;
let image3;

var counter = 0;
var timeleft = 60;

function preload (){
  image1 = loadImage("P1.1.png");
  image2 = loadImage("P1.2.png");
  image3 = loadImage("P1.3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  var timer = select ('#timer');
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
function draw() {
  background(220);
  image(image1, 50, 50, [500], [600]);
  image(image2, 600, 50, [500], [600]);
  image(image3, 1150, 50, [500], [600]);
}