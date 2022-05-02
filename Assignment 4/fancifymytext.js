function biggerFunction (){
	alert("Hello, world!");
	document.getElementById("Text").style.fontSize="24pt";
}

function fancyFunction (){
	alert("Hello, world!");
	document.getElementById("Text").style.fontWeight="bold";
	document.getElementById("Text").style.color="blue";
	document.getElementById("Text").style.textDecoration="underline";


	document.getElementById("r2").checked = false;
}

function boringFunction(){
	alert("Hello, world!");
	document.getElementById("Text").style.fontWeight="normal";
	document.getElementById("Text").style.fontSize="10pt";
	document.getElementById("Text").style.color=null;
	document.getElementById("Text").style.textDecoration=null;
	document.getElementById("r1").checked = false;
}

function mooFunction(){
	document.getElementById("Text").value = document.getElementById("Text").value.toUpperCase();

	var parts = document.getElementById("Text").value.split(".");
	document.getElementById("Text").value = parts.join("-Moo.");
}