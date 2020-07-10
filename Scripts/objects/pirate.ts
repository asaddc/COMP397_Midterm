module objects {
  export class Pirate extends createjs.Bitmap {
    // Variables
    // Constructor
    constructor(
      assetManager: createjs.LoadQueue,
      imageString: string,
      x: number = 0,
      y: number = 0
    ) {
      super(assetManager.getResult(imageString));

      // Default position
      this.x = x;
      this.y = y;

      // Set up event handlers
      this.on("mouseover", this.mouseOver);
      this.on("mouseout", this.mouseOut);
      this.makePirateJump();
    }
    // Methods
    // Event Handlers
    private mouseOver(): void {
      this.alpha = 0.85;
    }

    private mouseOut(): void {
      this.alpha = 1.0;
    }

    private makePirateJump() {
      setInterval(() => {
        this.x = Math.floor(Math.random() * (895 - 1 + 1)) + 1;
        this.y = Math.floor(Math.random() * (595 - 1 + 1)) + 1;
      }, 600);
    }
  }
}
