let message = "ajay";
enum Color {
  Red,
  Blue,
  Green
}

//datatype in typescript
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: string[] = ["ajay", "kotnala"];
let f: any[] = [1, false, "ajay"];

let msg; //now this is type=any
msg = "abc";
//let endswithC = (<string>msg).endsWith('c'); //now this is inline type change
//let endswithCletter = (msg as string).endsWith('c'); //now this is inline type change another way

//one way
let log = function(msg) {
  console.log(msg);
};

//another way

let dolog = msg => console.log(msg); //with arrow function

let dolog1 = () => console.log("ajay"); //with arrow function

let drawPoints = (x, y) => {};

//custome type functions if input params are to manys then
//then use interface

interface Point {
  x: number;
  y: number;
}

interface PointWithMethod {
  x: number;
  draw: () => void;
}
let drawPointsWithMultiplePoints = (point: Point) => {};

drawPointsWithMultiplePoints({ x: 1, y: 2 });

//coheision concept says do one thing at one time so we will have class example
class PointWithMethodClass {
  x: number;
  y: number;
  draw() {
    console.log("X is: " + this.x);
    // .. logic here
  }
}

//call
let pointClass = new PointWithMethodClass();
pointClass.x = 10;
pointClass.draw();

//constructor in class with optional parameters
// with private keyword (access modifiers)
class PointWithMethodClassWithConstructor {
  // private x: number;
  // private y: number;
  // constructor(x: number, y: number){
  //     this.x = x;
  //     this.y = y;
  // }

  // or
  constructor(private x: number, private y: number) {
    this.x = x;
    this.y = y;
  }

  methodwithOptionalParam(x?: number, y?: number) {
    // once one param is optional then all right side should be optionals.
    //...
  }

  draw() {
    // by default all membrs or methods are public.
    console.log("X is: " + this.x);
    // .. logic here
  }
}

//class with properties
class PropertiesDefination{
    constructor(private _x: number, private y: number){
        this.x = _x;
        this.y = y;
    }

    set x(value){
        if(value<0){
            throw new Error("value cant be less then 0.")
        }

        this.x = value;
    }

    // how to call  let PropertiesDefinationObj = new PropertiesDefination(10,20);
    //this.X = 10; //set the value
    //let newX = this.X; get this

    get x(){
        return this.x;
    }
}