//complete this code
class Rectangle {
	constructor(width,height){
        get width(){
			return this.width;
		}
		get height(){
			return this.height;
		}
		getArea(){
			return this.width*this.height;
		}
	}
}

class Square extends Rectangle {
	getPerimeter(){
		return 4*this.height;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
