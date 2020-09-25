//Global Variables
let leaves = []; //an empty array to store variables
let numLeaves = 9;
let button;

let leave1; //declare a variable
let leave2;
let leave3;
let leave4;
let leave5;
let leave6;
let leave7;
let leave8;
let leave9;


var counter = 0; //declare a variable for countdown timer
var timeleft = 60;

//load images before program runs
function preload(){
  
  leave1 = loadImage('leave1.png');//store image in a variable
  leave2 = loadImage('leave2.png');
  leave3 = loadImage('leave3.png');
  leave4 = loadImage('leave4.png');
  leave5 = loadImage('leave5.png');
  leave6 = loadImage('leave6.png');
  leave7 = loadImage('leave7.png');
  leave8 = loadImage('leave8.png');
  leave9 = loadImage('leave9.png');
  leaves = [leave1,leave2,leave3,leave4,leave5,leave6,leave7,leave8,leave9]; //store variables in an array
  
}

//sketch
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


function draw() {
  
  //store random image in a variable
  let randoImg = random(leaves)
  //draw to the canvas the random image
  image(randoImg, 450, 50, width/2,height);
}
