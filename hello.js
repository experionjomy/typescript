function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
//document.body.innerHTML = greeter(user);
/******************************************************************************************************************************/
function greeter1(person) {
    return "Hello, " + person;
}
var user1 = [0, 1, 2];
function greeter2(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jomy", lastName: "Jose" };
//document.body.innerHTML = greeter2(user);
/******************************************************************************************************************************/
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// function greeter3(person: Person1) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
var user = new Student("Jomy", "G.", "JoseGeorge");
//document.body.innerHTML = greeter2(user);
/******************************************************************************************************************************/
var fullName = "Jomy Jose";
var age = 22;
// let sentence: string = `Hello, my name is ${ fullName }.
// I'll be ${ age + 1 } years old next month.`
var sentence1 = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
document.getElementById("one").innerHTML = sentence1;
/******************************************************************************************************************************/
// let list: number[] = [11, 22, 33];
var list = [12, 23, 34];
document.getElementById("two").innerHTML = list;
/******************************************************************************************************************************/
var x;
x = ['hello', 10];
x[3] = "jomyjose";
document.getElementById("three").innerHTML = x[0].substr(2) + "  " + x[3];
/******************************************************************************************************************************/
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
document.getElementById("four").innerHTML = "enum of 2 " + colorName;
/******************************************************************************************************************************/
var decimal = 1.12345678;
document.getElementById("five").innerHTML = decimal.toFixed(2);
/******************************************************************************************************************************/
// let notSure: any = 4;
// notSure.ifItExists();
// notSure.toFixed();
/******************************************************************************************************************************/
function warnUser() {
    alert("This is my warning message");
}
warnUser();
