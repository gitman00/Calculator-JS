function History() {
	return document.getElementById("history").innerText;
}
function printHistory(num) {
	document.getElementById("history").innerText=num;
}

function Output() {
	return document.getElementById("result").innerText;
}
function printOutput(num) {
	if(num=="") {
		document.getElementById("result").innerText=num;
	}
	else{
		document.getElementById("result").innerText=FormatedNumber(num);
	}
}
function FormatedNumber(num) {
	if(num=="-") {
		return "";
	}
	let n = Number(num);
	let value = n.toLocaleString("en");
	return value;
}

function ReverseFormatedNumber(num) {
	return Number(num.replace(/,/g,""));
}

var operator = document.getElementsByClassName("operator");
for(var i =0;i< operator.length;i++){
	operator[i].addEventListener('click',function () {
		if(this.id=="clear") {
			printHistory("");
			printOutput("");
		}
								
		else if(this.id=="backspace"){
			let output=ReverseFormatedNumber(Output()).toString();
			if(output) {
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else {
			var output = Output();
			var history = History();
			if(output==""&&history!="") {
				if(isNaN(history[history.length-1])) {
					history = history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!="") {
				output = output==""?
				output:ReverseFormatedNumber(output);
				history = history+output;
				if(this.id=="equals") {
					let result = eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	})
}
var number = document.getElementsByClassName("number");
for(var i =0;i< number.length;i++){
	number[i].addEventListener('click',function () {
		let output = ReverseFormatedNumber(Output());
		if(output!=NaN) {
			output = output+this.id;
			printOutput(output);
		}
	})
}
