/* text text */
// this is a single line comment 

/*
var first = "Louis";

function first_name(){

	var second = "Chung";
	document.write(first+" "+second);
}

first_name();

var st = 3;
var nd = 2;
var calc = st + 2;

window.alert(calc+nd);

var Louis = 5;

Louis /= 2;

window.alert(Louis);

== /* is equal to */
/* != /* is not equal to*/
/* === /*strict is equal to */
/* !== // strict is not equal to
/* > // is greater than
 < // is less than
>= // greater than or equal
<= // less than or equal

4 == 4

(4+1) == (3+1)

4 != 4 // false
4 != 5 // true
4 > 3 // true
4 < 3 // false
*/

/* and operator
(2==2) && (3==3) // TRUE
(2==1) && (3==3) // FALSE

or operator
(2==2) || (3==3) //TRUE

not operator
!(33 == 33)
!(33 > 35)
*/

/*
var car = ""
if(car != ""){
	document.write("it's a string with characters");
}else{
		document.write("it's a string with no characters");
}
*/

/*
var car = "Mercedes";
var car2 = "Ferrar"

if (car == "Mercedes"){
	window.alert("car variable is a Mercedes, let's check next variable...");
		if (car2 == "Ferrari"){
				window.alert("car 2 variable is a Ferrari");
		}else{
				window.alert("car 2 variable is not a Ferrari");
		}
}else{
		window.alert("car variable is not Mercedes!")
}
*/

/*
var num1 = 3;
var num2 = 2;

if ((num1 > 4) || (num2 > 3)) 
		document.write ("It works!");
else
	document.write("The condition is false!");
*/


/*
var num1 = 2;
var num2 = 3;
if (num1 > 5) {
	document.write("num1 is bigger than one");
}else if(num2 < 1){
	document.write("num2 is less than 2");
}else if(num1 <= 2) {
	document.write("it works");
}else{
	document.write("none of the variables match with the conditions");
}
*/

/*
var name = "Louis";
switch (name){
	case "John":
		document.write("The variable is John");
		break;
	case "Mark":
		document.write("The variable is Mark");
		break;
	case "Victor":
		document.write("The variable is Victor");
		break;
	default:
		document.write("None of the values match the variable");
}
*/

/*
var name = window.prompt("Please type your name below");
if (name == "") {
	document.write("Please type something");
}else{
	document.write("Welcome "+name);
}
*/

/*
for (i = 0; i<10; i++){

	document.write(i+". Hello World!"+"<br />");

}
*/

/*
var test = 1;
do {
document.write(test+". Hello World!"+"<br />");
test++;
} while (test < 6)
*/

/*
var cars = new Array("Ferrari", "Mercedes", "Ford", "Range Rover");
for (i=0; i<cars.length; i++){
document.write(cars[i]+"<br />");
}
*/

/*
var cars = ["Ferrari", "Mercedes", "BMW"];
cars.length = 2;
for (i=0; i<cars.length; i++){
document.write(cars[i] + "<br />");
}
*/

/*
var city = ["New York", "Miami", "Lisbon", "Madrid"];
city.push("Paris", "Dublin");
for (i=0; i<city.length; i++){
	document.write(city[i] + "<br />");
}
*/

/*
var dwarf = new Object();
dwarf.strength = "7";
dwarf.armor = "8";
dwarf.attack = "6";
dwarf.show_properties = function (){
	document.write("hero strength: "+dwarf.strength+"<br />"+
					"hero armor: "+dwarf.armor+"<br />"+
					"hero attack: "+dwarf.attack+"<br />"
		);
};
dwarf.show_properties();
*/

/*
var dwarf = {strength: "7", armor: "8", attack: "6",}
document.write("hero strength: "+dwarf.strength+"<br />"+"hero armor: "+dwarf.armor+"<br />"+"hero attack: "+dwarf.attack+"<br />");
*/

/*
function Hero (Name, Armor, Strength, Attack){
	this.Name = Name;
	this.Armor = Armor;
	this.Strength = Strength;
	this.Attack = Attack;
}

var dwarf = new Hero("Dwarf","5","5","5");
var barbarian = new Hero("Barbarian","7","7","7");
var elf = new Hero("Elf","9","9","9");

for (var x in elf){
	document.write(x + ":" + elf[x] + "<br />");
}
*/

//NAVIGATOR OBJECTS

/*
window.alert("Your browser is : "+navigator.appName);
if(navigator.appName == "Microsoft Internet Explorer"){
	document.write("Welcome IE Users");
}else{
	document.write("You need IE to run this script!")
}
*/

/*
if(navigator.javaEnabled()){
	document.write("Java is enabled");
}else{
	alert("Java is not enabled on your browser!");
}
*/

// HISTORY OBJECT

// alert("my browser has visited: "+history.length+" pages!") 

//alert(history.back());
