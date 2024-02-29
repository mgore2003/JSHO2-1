/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Mark Gore
      Date:  02/29/2024

      Filename: project02-01.js
 */
function FarenheitToCelsius(degree){
	return (degree - 32)/1.8;
}

function CelsiusToFarenheit(degree){
	return degree * 1.8 + 32;
}

document.getElementById("cValue").onchange = function() {
	let cDegree = document.getElementById("cValue").value;
	document.getElementById("fValue").value = CelsiusToFarenheit(cDegree);
}

document.getElementById("fValue").onchange = function() {
	let fDegree = document.getElementById("fValue").value;
	document.getElementById("cValue").value= FarenheitToCelsius(fDegree);
}

