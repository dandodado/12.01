balls = [];
let meteor;
let w =20;
function setup() {
  createCanvas(800, 800);
   for (let y = 0; y < height; y += w+10) {
    for (let x = 0; x < width; x += w+10) {
      balls.push(new Ball(x, y, w));
    }
  }
  meteor = new Meteor();
}

function draw() {
  background(220);
  for (let ball of balls) {
    ball.show();
    let drag = ball.calculateDrag();
    ball.addForce(drag);
    let returnForce = ball.calculateReturnForce(0.05);
    ball.addForce(returnForce);
    if(dist(meteor.pos.x, meteor.pos.y, ball.pos.x, ball.pos.y) < 125){
    let force = meteor.calculateAttraction(ball);
    ball.addForce(force);
    }
    ball.update();
  }
meteor.show();
meteor.move();
}

