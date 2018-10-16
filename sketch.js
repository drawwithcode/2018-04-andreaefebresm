function preload() {
  // put preload code here
}

var myColors = ['#2364AA',
  '#3DA5D9',
  '#73BFB8',
  '#FEC601',
  '#EA7317'
];

var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);


  var ballNumber = 100;

  for (var i = 0; i < ballNumber; i++) {

    var myBall = new Ball(random(0, width), random(0, height), random(10, 100));


    balls.push(myBall);

  }
}


function draw() {
  background(color(myColors[1]))

  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
  }





  // salvagente
  noStroke();

  fill(color(myColors[3]));
  ellipse(windowWidth / 3 - 10, windowHeight / 4, 830);

  fill(color(myColors[4]));
  ellipse(windowWidth / 3, windowHeight / 4, 800);

  fill(255, 95);
  arc(windowWidth / 3, windowHeight / 4, 800, 800, -15, 15, PIE)
  fill(250, 95);
  arc(windowWidth / 3, windowHeight / 4, 800, 800, 75, 105, PIE)
  fill(250, 95);
  arc(windowWidth / 3, windowHeight / 4, 800, 800, 180 - 15, 180 + 15, PIE)
  fill(250, 95);
  arc(windowWidth / 3, windowHeight / 4, 800, 800, 270 - 15, 270 + 15, PIE)

  fill(color(myColors[3]));
  ellipse(windowWidth / 3 - 10, windowHeight / 4, 430);

  fill(color(myColors[1]));
  ellipse(windowWidth / 3, windowHeight / 4, 400);

  textFont('Futura');
  noStroke();
  fill(255);
  textSize(50);
  text('Click to clean the pool',windowWidth/1.7,windowHeight*3/4);



}

function mousePressed() {
  for (var k = 0; k < balls.length; k++)
    balls[k].click();
}


function Ball(_x, _y, _diameter) {

  this.size = _diameter;
  this.x = _x;
  this.y = _y;

  this.color = '#73BFB8';
  this.speed = 0.5;

  this.yDir = 60;
  this.xDir = 10;

  this.move = function() {
    this.x += this.speed * this.xDir / 10;
    this.y += this.speed * this.yDir / 20;

    if (this.y >= height || this.y <= 0) {

      this.yDir *= -1;
    }

    if (this.x >= width || this.x <= 0) {
      this.xDir *= -1;
    }

    this.display = function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size);
    }

    this.click = function() {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < 50) {
        this.size = 0;
      }
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
