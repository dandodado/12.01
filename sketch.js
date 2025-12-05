let system;
let meteor;
let w = 20;

function setup() {
  createCanvas(800, 800);

  system = new ParticleSystem();

  for (let y = 0; y < height; y += w + 10) {
    for (let x = 0; x < width; x += w + 10) {
      system.addParticle(new Particle(x, y, w));
    }
  }

  meteor = new Meteor();
}

function draw() {
  background(220);

  system.run(meteor);

  meteor.show();
  meteor.move();
}
