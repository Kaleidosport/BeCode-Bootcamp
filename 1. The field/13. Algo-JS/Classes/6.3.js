class Rectangle {
    constructor (_topLeftXPos, _topLeftYPos, _width, _length) {
        console.log("Here comes your rectangle.");

        this.topLeftXPos = _topLeftXPos;
        this.topLeftYPos = _topLeftYPos;
        this.width = _width;
        this.length = _length;
    }

    collision (otherRectangle) {
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.length + this.topLeftYPos > otherRectangle.topLeftYPos) {
                return true
            }
            else {
                return false
            }
    }
}

function collidedRectangles() {
    let aThousandRectangles = [];
    let collided = [];
    for (let i = 0; i <= 1000; i++) {
        aThousandRectangles[i] = new Rectangle(Math.random() * 70, Math.random() * 70, Math.random() * 70, Math.random() * 70);
    }

    for (let j = 0; j <= 1000; j++) {
        let k = 0;
        while (aThousandRectangles[j].collision(aThousandRectangles[k]) === false) {
            k++;
            if (aThousandRectangles[j].collision(aThousandRectangles[k])) {
                collided.unshift(aThousandRectangles[j]);
            }
        }
    }
    return collided;
}

console.log(collidedRectangles());