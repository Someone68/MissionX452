const config = {
  type: Phaser.AUTO,
  width: 750,
  height: 500,
  parent: "gamecontainer",
  pixelArt: true,
  scene: [Main],
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
  },
};
