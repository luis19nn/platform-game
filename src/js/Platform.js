//canvas and context creation
import { context } from "./utils";

export class Platform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y,
        };
        this.image = image;
        this.width = image.width;
        this.height = image.height;
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}
