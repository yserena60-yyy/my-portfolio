let drops = [];
let order = 1.0;
let decayRate = 0.0010;
let t = 0;

let bolt = null;
let boltCooldown = 0;

function setup() {
  createCanvas(900, 600);
  background(0);

  for (let i = 0; i < 220; i++) {
    drops.push(new RainDrop(random(width), random(height)));
  }
}

function draw() {
  background(0, 18);

  order = max(0, order - decayRate);
  t += 0.01;

  for (let d of drops) {
    d.update();
    d.display();
  }

  handleLightning();

  drawHUD();
}

function mousePressed() {
  order = 1.0;
  background(0);

  for (let d of drops) {
    d.vx += random(-1, 1);
    d.vy += random(-1, 1);
  }
}

function drawHUD() {
  noStroke();
  fill(255);
  textSize(14);
  text("Control vs System — Rain Version", 14, 22);
  text("Move mouse = attempt control | Click = reset order", 14, 42);

  const barW = 220;
  const barH = 10;
  const x = 14;
  const y = 56;

  noFill();
  stroke(255);
  rect(x, y, barW, barH);

  noStroke();
  fill(255);
  rect(x, y, barW * order, barH);

  fill(255);
  text("Order: " + nf(order, 1, 2), x + barW + 12, y + 10);
}

// -------------------- Rain --------------------

class RainDrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.vx = random(-1, 1);
    this.vy = random(2, 5);

    this.seed = random(1000);
    this.len = random(10, 20);
  }

  update() {
    // Human intention: wind toward mouse
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;

    const dist = sqrt(dx * dx + dy * dy) + 0.0001;
    const ux = dx / dist;
    const uy = dy / dist;

    // System intention: noise field
    const n = noise(this.seed, t);
    const sx = map(n, 0, 1, -1, 1);

    const humanPower = 2.0 * order;
    const systemPower = 2.5 * (1.0 - order);

    this.vx += ux * humanPower * 0.2 + sx * systemPower;
    this.vy += 0.4 + abs(sx) * systemPower * 0.3;

    // speed limit
    const speed = sqrt(this.vx * this.vx + this.vy * this.vy);
    const maxSpeed = 6;
    if (speed > maxSpeed) {
      this.vx = (this.vx / speed) * maxSpeed;
      this.vy = (this.vy / speed) * maxSpeed;
    }

    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.92;
    this.vy *= 0.92;

    // recycle rain
    if (this.y > height) {
      this.y = random(-50, -10);
      this.x = random(width);
    }
  }

  display() {
    const alpha = map(order, 0, 1, 60, 180);

    stroke(255, alpha);
    strokeWeight(1.2);

    line(this.x, this.y,
         this.x - this.vx * 3,
         this.y - this.len);
  }
}

// -------------------- Lightning --------------------

function handleLightning() {
  boltCooldown = max(0, boltCooldown - 1);

  const chance = lerp(0.001, 0.02, 1.0 - order);

  if (!bolt && boltCooldown === 0 && random() < chance) {
    bolt = new Bolt(random(width), 0);
    boltCooldown = 40;
  }

  if (bolt) {
    bolt.update();
    bolt.display();
    if (bolt.done) bolt = null;
  }
}

class Bolt {
  constructor(x, y) {
    this.points = [{ x, y }];
    this.step = 0;
    this.maxSteps = 24;
    this.done = false;
  }

  update() {
    if (this.done) return;

    const last = this.points[this.points.length - 1];

    const jag = lerp(0.2, 1.1, 1.0 - order);
    const ang = PI / 2 + random(-jag, jag);

    const nx = last.x + cos(ang) * 20;
    const ny = last.y + abs(sin(ang)) * 20;

    this.points.push({ x: nx, y: ny });
    this.step++;

    if (ny > height || this.step > this.maxSteps) {
      this.done = true;
    }
  }

  display() {
    const flash = map(order, 0, 1, 30, 10);
    noStroke();
    fill(255, flash);
    rect(0, 0, width, height);

    stroke(255, 220);
    strokeWeight(2);

    for (let i = 0; i < this.points.length - 1; i++) {
      const a = this.points[i];
      const b = this.points[i + 1];
      line(a.x, a.y, b.x, b.y);
    }
  }
}
