import "phaser";
import Scene from "./scenes/scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [Scene],
};

export default new Phaser.Game(config);
