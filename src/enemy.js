class Enemy {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 200;
  }
  update() {

  }
  draw() {

  }
}

class Ghost extends Enemy {
  constructor() {
    super();
    this.color = 'white';
  }
}

