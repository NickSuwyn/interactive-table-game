class Player2 extends Entity {
    constructor(x, y) {
        super('Player1', x, y);
        this.direction ='right';
        this.color = 'blue';
        this.speed = 200;
        this.sprite = this.color + '_' + this.direction;
        this.init();
        this.setCollisionChecks(['Item']);
    }

    onKeyPress(key) {
        if (key == keys.CTRL) {
            this.shoot();
        } else if (key == keys.D) {
            this.setXVelocity(this.speed);
            this.direction = "right";
        } else if (key == keys.A) {
            this.setXVelocity(-this.speed);
            this.direction = "left";
        } else if (key == keys.W) {
            this.setYVelocity(-this.speed);
            this.direction = "up";
        } else if (key == keys.S) {
            this.setYVelocity(this.speed);
            this.direction = "down";
        }
        this.changeSprite(this.color + '_' + this.direction);
    }

    shoot() {
        if (this.direction == "up") {
            this.createEntity(BlueRing, this.x + 12, this.y - 50, 0, -500);
        } else if (this.direction == "down") {
            this.createEntity(BlueRing, this.x + 12, this.y + 60, 0, 500);
        } else if (this.direction == "left") {
            this.createEntity(BlueRing, this.x - 50, this.y, -500, 0);
        } else if (this.direction == "right") {
            this.createEntity(BlueRing, this.x + 60, this.y, 500, 0);
        }
    }

    onCollision(data) {
        if (this.instance.hit('Item')) {
            data[0].obj.destroy();
            this.instance.destroy();
        }
    }
}