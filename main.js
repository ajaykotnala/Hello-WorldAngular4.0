var message = "ajay";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
//datatype in typescript
var a;
var b;
var c;
var d;
var e = ["ajay", "kotnala"];
var f = [1, false, "ajay"];
var msg; //now this is type=any
msg = "abc";
//let endswithC = (<string>msg).endsWith('c'); //now this is inline type change
//let endswithCletter = (msg as string).endsWith('c'); //now this is inline type change another way
//one way
var log = function (msg) {
    console.log(msg);
};
//another way
var dolog = function (msg) { return console.log(msg); }; //with arrow function
var dolog1 = function () { return console.log("ajay"); }; //with arrow function
var drawPoints = function (x, y) { };
var drawPointsWithMultiplePoints = function (point) { };
drawPointsWithMultiplePoints({ x: 1, y: 2 });
//coheision concept says do one thing at one time so we will have class example
var PointWithMethodClass = /** @class */ (function () {
    function PointWithMethodClass() {
    }
    PointWithMethodClass.prototype.draw = function () {
        console.log("X is: " + this.x);
        // .. logic here
    };
    return PointWithMethodClass;
}());
//call
var pointClass = new PointWithMethodClass();
pointClass.x = 10;
pointClass.draw();
//constructor in class with optional parameters
// with private keyword (access modifiers)
var PointWithMethodClassWithConstructor = /** @class */ (function () {
    // private x: number;
    // private y: number;
    // constructor(x: number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }
    // or
    function PointWithMethodClassWithConstructor(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    PointWithMethodClassWithConstructor.prototype.methodwithOptionalParam = function (x, y) {
        // once one param is optional then all right side should be optionals.
        //...
    };
    PointWithMethodClassWithConstructor.prototype.draw = function () {
        // by default all membrs or methods are public.
        console.log("X is: " + this.x);
        // .. logic here
    };
    return PointWithMethodClassWithConstructor;
}());
//class with properties
var PropertiesDefination = /** @class */ (function () {
    function PropertiesDefination(_x, y) {
        this._x = _x;
        this.y = y;
        this.x = _x;
        this.y = y;
    }
    Object.defineProperty(PropertiesDefination.prototype, "x", {
        // how to call  let PropertiesDefinationObj = new PropertiesDefination(10,20);
        //this.X = 10; //set the value
        //let newX = this.X; get this
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value cant be less then 0.");
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return PropertiesDefination;
}());
