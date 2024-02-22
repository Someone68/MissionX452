class Main extends Phaser.Scene {
  constructor() {
    super("Main");
  }

  init() {}

  preload() {
    this.load.image("spacebg", "../../../assets/spacebg.jpg");
  }

  create() {
    this.add.image(0, 0, "spacebg");
  }

  update() {}
}
