class ParticleSystem {
  constructor() {
    this.particles = [];
  }

  addParticle(p) {
    this.particles.push(p);
  }

  run(meteor) {
    for (let p of this.particles) {
      let drag = p.calculateDrag();
      p.addForce(drag);

      let returnForce = p.calculateReturnForce(0.05);
      p.addForce(returnForce);

      if (dist(meteor.pos.x, meteor.pos.y, p.pos.x, p.pos.y) < 125) {
        let force = meteor.calculateAttraction(p);
        p.addForce(force);
      }

      p.update();
      p.show();
    }
  }
}
