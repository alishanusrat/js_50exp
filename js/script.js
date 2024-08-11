/*example1*/

function showDate(){
	document.getElementById('s_date').innerHTML=Date();
}

/*example2*/

function l_on(){
	document.getElementById('pic').src="images/pic_bulbon.gif";
}
function l_off(){
	document.getElementById('pic').src="images/pic_bulboff.gif";
}

/*example3*/

function showText(){
	document.getElementById('s_text').innerHTML="hello ssb";
}

/*example4*/

function show(){
	document.getElementById('sh_text').style.display="block";
}
function notshow(){
	document.getElementById('sh_text').style.display="none";
}

/*example5*/

function showfont(){
	document.getElementById('sz_text').style.fontSize="60px";
}

/*example 6*/
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

/*example 6
document.getElementById("number_add").write(5+6);*/

/*exmple 7*/
x=10;
y=22;
z=x+y;
document.getElementById("demoadd").innerHTML =
"The value of z is: " +z;

/*exmple 8*/
var m=2;
document.getElementById("num").innerHTML = "The value of m is: "+m;

/*exmple 8*/
var n=2;
var o=10;
var p=n+o;
document.getElementById("num1").innerHTML = "The value of p is: "+p;

/*exmple 9*/
let q=20;
let r=100;
let s=q+r;
document.getElementById("num2").innerHTML = "The value of s is: "+s;

/*exmple 10*/
const t=40;
const u=100;
 const v=t+u;
document.getElementById("num3").innerHTML = "The value of v is: "+v;

/*exmple 11*/
const number1=20;
const number2=100;
 const w=number1+number2;
document.getElementById("num4").innerHTML = "The value of w is: " +w;

/*exmple 12*/

 var v1= x-y;
document.getElementById("num5").innerHTML = "The value of v1 is: "+v1;

/*exmple 13*/
var v2= x*y;
document.getElementById("num6").innerHTML = "The value of v2 is: "+v2;

/*exmple 14*/
var v3= x/y;
document.getElementById("num7").innerHTML = "The value of v3 is: "+v3;
/*exmple 14*/
var v4= x%y;
document.getElementById("num8").innerHTML = "The value of v4 is: "+v4;
/*ex15*/
let car = 16 + "Volvo";
document.getElementById("string").innerHTML = car;

/*ex16
var farenheit=40;
let result = "The temperature is " + toCelsius(77) + " Celsius";
document.getElementById("celcius").innerHTML = "the result is:" +result;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
  */
  /*ex17*/
function dbl(){
	document.getElementById("double_click").innerHTML="Done";
}

  /*ex18*/
function mouse(){
	document.getElementById("mouseover").innerHTML="Done Done";
}
/*ex19*/
let text = "ABCDEFGHIJKLMNOPQRSTUVWXY";
document.getElementById("text_l").innerHTML = text.length;

/*ex20*/
var text_c = "HELLO WORLD";
document.getElementById("char").innerHTML = text_c.charAt(2);