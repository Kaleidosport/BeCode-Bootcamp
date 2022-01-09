// As good as they come: https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection

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

let myRectangle1 = new Rectangle(14, 35, 14, 21);
let myRectangle2 = new Rectangle(3, 18, 9, 36);
let myRectangle3 = new Rectangle(11, 23, 6, 17);

console.log(myRectangle1);
console.log(myRectangle2);
console.log(myRectangle3);

console.log(myRectangle1.collision(myRectangle2));
console.log(myRectangle1.collision(myRectangle3));
console.log(myRectangle2.collision(myRectangle3));