class Item extends Entity {

    constructor(x, y, name) {
        super(name, x, y);
    }
}

class GreenRing extends Item {
    constructor(x, y) {
        super(x, y, 'Item');
        this.sprite = 'green';
        this.init();
    }
}

class RedRing extends Item {
    constructor(x, y) {
        super(x, y, 'Item');
        this.sprite = 'red';
        this.init();
    }
}

class BlueRing extends Item {
    constructor(x, y) {
        super(x, y, 'Item');
        this.sprite = 'blue';
        this.init();
    }
}

class YellowRing extends Item {
    constructor(x, y) {
        super(x, y, 'Item');
        this.sprite = 'yellow';
        this.init();
    }
}

class PurpleRing extends Item {
    constructor(x, y) {
        super(x, y, 'Item');
        this.sprite = 'purple';
        this.init();
    }
}