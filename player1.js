class Player1 extends Entity {
    constructor(x, y) {
        super('Player1', x, y);
        this.direction ='left';
        this.color = 'pink';
        this.speed = 200;
        this.sprite = this.color + '_' + this.direction;
        this.init();
        this.setCollisionChecks(['Item']);
    }

    onKeyPress(key) {
        if (key == keys.ENTER) {
            this.shoot();
        } else if (key == keys.RIGHT_ARROW) {
            this.setXVelocity(this.speed);
            this.direction = "right";
        } else if (key == keys.LEFT_ARROW) {
            this.setXVelocity(-this.speed);
            this.direction = "left";
        } else if (key == keys.UP_ARROW) {
            this.setYVelocity(-this.speed);
            this.direction = "up";
        } else if (key == keys.DOWN_ARROW) {
            this.setYVelocity(this.speed);
            this.direction = "down";
        }
        this.changeSprite(this.color + '_' + this.direction);
    }

    shoot() {
        if (this.direction == "up") {
            this.createEntity(PurpleRing, this.x + 12, this.y - 50, 0, -500);
        } else if (this.direction == "down") {
            this.createEntity(PurpleRing, this.x + 12, this.y + 60, 0, 500);
        } else if (this.direction == "left") {
            this.createEntity(PurpleRing, this.x - 50, this.y, -500, 0);
        } else if (this.direction == "right") {
            this.createEntity(PurpleRing, this.x + 60, this.y, 500, 0);
        }
    }

    onCollision(data) {
        if (this.instance.hit('Item')) {
            data[0].obj.destroy();
            this.instance.destroy();
        }
    }
}