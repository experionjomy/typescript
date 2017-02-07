function t() {
    var message = "Hello, world!";

    return message;
}
b=t();
document.getElementById("one").innerHTML=b;


// ************************************************************************************************************************
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g();
document.getElementById("two").innerHTML=g();

/**************************************************************************************************************************/

function f1() {
    var a1 = 1;

    a1 = 2;
    var b1 = g1();
    // a1 = 3;
	 document.getElementById("five").innerHTML="modified "+a1;
    return b1;

    function g1() {
    	 document.getElementById("four").innerHTML="inside "+a1;
    	 a1=10;
        return a1;
       
    }
}

 document.getElementById("three").innerHTML="return from f1 is "+f1();

/**************************************************************************************************************************/

function f2(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 101111;
    }

    return x;
}
 document.getElementById("six").innerHTML=f2(true);
 document.getElementById("seven").innerHTML=f2(false);

 /**************************************************************************************************************************/




 function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];

        }

    }
    return sum;
}
	document.getElementById("eight").innerHTML=sumMatrix([[1,2,3],[1,2,3]]);


 /**************************************************************************************************************************/

	// for (var i = 0; i < 10; i++) {
 //    setTimeout(function() { 
 //    	console.log("jomy"); 
 //    }, 100 *i);
	// }
/**************************************************************************************************************************/

function f2(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let tot = a + 1;
        document.getElementById("nine1").innerHTML="got "+tot;
        // return b;
    }

    // Error: 'b' doesn't exist here
  document.getElementById("nine2").innerHTML="got1 "+tot;
    return tot;
}

document.getElementById("nine").innerHTML="got2 "+f2(true);

/**************************************************************************************************************************/
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);


/**************************************************************************************************************************/

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Jomy");

document.getElementById("ten").innerHTML=greeter.greet();


