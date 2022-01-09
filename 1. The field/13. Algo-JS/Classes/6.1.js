// This one came in handy: https://www.youtube.com/watch?v=2ZphE5HcQPQ

class Circle {
    constructor (_xPos, _yPos, _radius) {
        console.log("Here comes your circle.");

        this.xPos = _xPos;
        this.yPos = _yPos;
        this.radius = _radius;
    }

    move (xOffset, yOffset) {
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;
    }

    get area () {
        return Math.PI * Math.pow(this.radius, 2);
        // Checked here: https://dirask.com/posts/JavaScript-Math-PI-property-example-wDkmqj
    }
}

let myCircle1 = new Circle(7, 7, 4);
let myCircle2 = new Circle(4, 8, 6);

console.log(myCircle1);
console.log(myCircle2);

console.log("1st circle's area: " + myCircle1.area);
console.log("2nd circle's area: " + myCircle2.area);

myCircle1.move(3,3);
console.log(myCircle1);

myCircle2.move(5,2);
console.log(myCircle2);