class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    set widthRectangle (value){
        return this.width = value;
    }
    set heightRectangle (value){
        return this.width = value;
    }
    set colorRectangle (value){
        return this.width = value;
    }
    calcArea(){
        return this.width * this.height;
    }
}
let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
