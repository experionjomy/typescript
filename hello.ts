function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

//document.body.innerHTML = greeter(user);
/******************************************************************************************************************************/

function greeter1(person: string) {
    return "Hello, " + person;
}

var user1 = [0, 1, 2];

//document.body.innerHTML = greeter1(user1);

/******************************************************************************************************************************/

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jomy", lastName: "Jose" };

//document.body.innerHTML = greeter2(user);

/******************************************************************************************************************************/

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


interface Person1 {
    firstName: string;
    lastName: string;
}
// function greeter3(person: Person1) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
var user = new Student("Jomy", "G.", "JoseGeorge");
//document.body.innerHTML = greeter2(user);
/******************************************************************************************************************************/


let fullName: string = `Jomy Jose`;
let age: number = 22;
// let sentence: string = `Hello, my name is ${ fullName }.

// I'll be ${ age + 1 } years old next month.`


let sentence1: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month."
    document.getElementById("one").innerHTML=sentence1;

/******************************************************************************************************************************/

// let list: number[] = [11, 22, 33];
let list: Array<number> = [12, 23, 34];
 document.getElementById("two").innerHTML = list;

/******************************************************************************************************************************/
let x: [string, number];
x=['hello',10];
x[3]="jomyjose"
 document.getElementById("three").innerHTML = x[0].substr(2)+"  "+x[3];

 /******************************************************************************************************************************/

enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
 document.getElementById("four").innerHTML = "enum of 2 "+ colorName;

/******************************************************************************************************************************/

let decimal=1.12345678;
 document.getElementById("five").innerHTML = decimal.toFixed(2);

/******************************************************************************************************************************/


// let notSure: any = 4;
// notSure.ifItExists();
// notSure.toFixed();

/******************************************************************************************************************************/
function warnUser(): void {
    alert("This is my warning message");
}
warnUser()