const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

const gravity = 0.5;

export class Player {
    constructor(position) {
        this.position = position;
        this.velocity = { x: 0, y: 1 };
        this.height = 100;
    }

    draw() {
        c.fillStyle = "#ff6961";
        c.fillRect(this.position.x, this.position.y, 100, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}
