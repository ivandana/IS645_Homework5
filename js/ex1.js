class Square {
    constructor(side) {
        this.side = side;
    };
    //perimeter method
    perimeter() {
        return this.side * 4;
    };

    //area method
    area() {
        return this.side * this.side;
    };

    //diagonal method
    diagonal() {
        return Math.sqrt(2) * this.side;
    };

    describe() {
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal ${this.diagonal()}`
    };

};

const square1 = new Square(2);
const square2 = new Square(3);
const square3 = new Square(4);
console.log(square1.describe());
console.log(square2.describe());
console.log(square3.describe());