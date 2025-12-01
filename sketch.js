balls = [];
let w =20;
function setup() {
  createCanvas(400, 400);
   for (let y = 0; y < height; y += w+10) {
    for (let x = 0; x < width; x += w+10) {
      balls.push(new Ball(x, y, w));
    }
  }
}

function draw() {
  background(220);
  for (let ball of balls) {
    ball.show();
  }

}
