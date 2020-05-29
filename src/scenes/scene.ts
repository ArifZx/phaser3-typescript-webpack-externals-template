type ObjectTransform = Phaser.GameObjects.GameObject & Phaser.GameObjects.Components.Transform;

export default class Scene extends Phaser.Scene {
  constructor(asd: ObjectTransform) {
    super({
      key: "Scene"
    });

  }

  preload(): void {
    this.load.image("logo", "src/assets/logo.png");
  }

  create(): void {
    const logo = this.add.image(400, 150, "logo");

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
}