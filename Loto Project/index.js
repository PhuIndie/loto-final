//card
var usedNums = new Array(50);

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 25; i = i + 5) {  //<--always this code for loops. change in #E41B66
		setSquare(i,10,1);
	}
    for(var i=1; i < 25; i = i + 5) {  //<--always this code for loops. change in #E41B66
		setSquare(i,20,11);
	}
    for(var i=2; i < 25; i = i + 5) {  //<--always this code for loops. change in #E41B66
		setSquare(i,30,21);
	}
    for(var i=3; i < 25; i = i + 5) {  //<--always this code for loops. change in #E41B66
		setSquare(i,40,31);
	}
    for(var i=4; i < 25; i = i + 5) {  //<--always this code for loops. change in #E41B66
		setSquare(i,50,41);
	}
}

function setSquare(thisSquare,x,y) {
	var currSquare = "square"+thisSquare;
	var newNum;
	do {
		newNum = getNewNum(x,y);
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum(x,y) {
	return Math.floor(Math.random() * (x-y+1) ) + y;
	
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {  
	usedNums[i] = false;
	}
	
	newCard();
}

//change color td..
function colorChanged1() {
	document.getElementById('square0').style.backgroundColor = "#E41B66";

}
function colorChanged2() {
	document.getElementById('square1').style.backgroundColor = "#E41B66";

}
function colorChanged3() {
	document.getElementById('square2').style.backgroundColor = "#E41B66";

}
function colorChanged4() {
	document.getElementById('square3').style.backgroundColor = "#E41B66";

}
function colorChanged5() {
	document.getElementById('square4').style.backgroundColor = "#E41B66";

}
function colorChanged6() {
	document.getElementById('square5').style.backgroundColor = "#E41B66";

}
function colorChanged7() {
	document.getElementById('square6').style.backgroundColor = "#E41B66";

}
function colorChanged8() {
	document.getElementById('square7').style.backgroundColor = "#E41B66";

}
function colorChanged9() {
	document.getElementById('square8').style.backgroundColor = "#E41B66";

}
function colorChanged10() {
	document.getElementById('square9').style.backgroundColor = "#E41B66";

}
function colorChanged11() {
	document.getElementById('square10').style.backgroundColor = "#E41B66";

}
function colorChanged12() {
	document.getElementById('square11').style.backgroundColor = "#E41B66";

}
function colorChanged13() {
	document.getElementById('square12').style.backgroundColor = "#E41B66";

}
function colorChanged14() {
	document.getElementById('square13').style.backgroundColor = "#E41B66";

}
function colorChanged15() {
	document.getElementById('square14').style.backgroundColor = "#E41B66";

}
function colorChanged16() {
	document.getElementById('square15').style.backgroundColor = "#E41B66";

}
function colorChanged17() {
	document.getElementById('square16').style.backgroundColor = "#E41B66";

}
function colorChanged18() {
	document.getElementById('square17').style.backgroundColor = "#E41B66";

}
function colorChanged19() {
	document.getElementById('square18').style.backgroundColor = "#E41B66";

}
function colorChanged20() {
	document.getElementById('square19').style.backgroundColor = "#E41B66";

}
function colorChanged21() {
	document.getElementById('square20').style.backgroundColor = "#E41B66";

}
function colorChanged22() {
	document.getElementById('square21').style.backgroundColor = "#E41B66";

}
function colorChanged23() {
	document.getElementById('square22').style.backgroundColor = "#E41B66";

}
function colorChanged24() {
	document.getElementById('square23').style.backgroundColor = "#E41B66";

}
function colorChanged25() {
	document.getElementById('square24').style.backgroundColor = "#E41B66";

}
function TraceBack1() {
	document.getElementById('square0').style.backgroundColor = "white";
}
function TraceBack2() {
	document.getElementById('square1').style.backgroundColor = "white";
}
function TraceBack3() {
	document.getElementById('square2').style.backgroundColor = "white";
}
function TraceBack4() {
	document.getElementById('square3').style.backgroundColor = "white";
}
function TraceBack5() {
	document.getElementById('square4').style.backgroundColor = "white";
}
function TraceBack6() {
	document.getElementById('square5').style.backgroundColor = "white";
}
function TraceBack7() {
	document.getElementById('square6').style.backgroundColor = "white";
}
function TraceBack8() {
	document.getElementById('square7').style.backgroundColor = "white";
}
function TraceBack9() {
	document.getElementById('square8').style.backgroundColor = "white";
}
function TraceBack10() {
	document.getElementById('square9').style.backgroundColor = "white";
}
function TraceBack11() {
	document.getElementById('square10').style.backgroundColor = "white";
}
function TraceBack12() {
	document.getElementById('square11').style.backgroundColor = "white";
}
function TraceBack13() {
	document.getElementById('square12').style.backgroundColor = "white";
}
function TraceBack14() {
	document.getElementById('square13').style.backgroundColor = "white";
}
function TraceBack15() {
	document.getElementById('square14').style.backgroundColor = "white";
}
function TraceBack16() {
	document.getElementById('square15').style.backgroundColor = "white";
}
function TraceBack17() {
	document.getElementById('square16').style.backgroundColor = "white";
}
function TraceBack18() {
	document.getElementById('square17').style.backgroundColor = "white";
}
function TraceBack19() {
	document.getElementById('square18').style.backgroundColor = "white";
}
function TraceBack20() {
	document.getElementById('square19').style.backgroundColor = "white";
}
function TraceBack21() {
	document.getElementById('square20').style.backgroundColor = "white";
}
function TraceBack22() {
	document.getElementById('square21').style.backgroundColor = "white";
}
function TraceBack23() {
	document.getElementById('square22').style.backgroundColor = "white";
}
function TraceBack24() {
	document.getElementById('square23').style.backgroundColor = "white";
}
function TraceBack25() {
	document.getElementById('square24').style.backgroundColor = "white";
}
//get random number

function getNumber() {
	document.getElementById("storage").innerHTML = Math.floor(Math.random() * (50-1+1) ) + 1;
}
