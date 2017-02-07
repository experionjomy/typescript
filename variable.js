var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function t() {
    var message = "Hello, world!";
    return message;
}
b = t();
document.getElementById("one").innerHTML = b;
// ************************************************************************************************************************
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g();
document.getElementById("two").innerHTML = g();
/**************************************************************************************************************************/
function f1() {
    var a1 = 1;
    a1 = 2;
    var b1 = g1();
    // a1 = 3;
    document.getElementById("five").innerHTML = "modified " + a1;
    return b1;
    function g1() {
        document.getElementById("four").innerHTML = "inside " + a1;
        a1 = 10;
        return a1;
    }
}
document.getElementById("three").innerHTML = "return from f1 is " + f1();
/**************************************************************************************************************************/
function f2(shouldInitialize) {
    if (shouldInitialize) {
        var x = 101111;
    }
    return x;
}
document.getElementById("six").innerHTML = f2(true);
document.getElementById("seven").innerHTML = f2(false);
/**************************************************************************************************************************/
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
document.getElementById("eight").innerHTML = sumMatrix([[1, 2, 3], [1, 2, 3]]);
/**************************************************************************************************************************/
// for (var i = 0; i < 10; i++) {
//    setTimeout(function() { 
//    	console.log("jomy"); 
//    }, 100 *i);
// }
/**************************************************************************************************************************/
function f2(input) {
    var a = 100;
    if (input) {
        // Still okay to reference 'a'
        var tot = a + 1;
        document.getElementById("nine1").innerHTML = "got " + tot;
    }
    // Error: 'b' doesn't exist here
    document.getElementById("nine2").innerHTML = "got1 " + tot;
    return tot;
}
document.getElementById("nine").innerHTML = "got2 " + f2(true);
/**************************************************************************************************************************/
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/**************************************************************************************************************************/
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("Jomy");
document.getElementById("ten").innerHTML = greeter.greet();
