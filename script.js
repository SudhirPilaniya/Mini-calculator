function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printhistory(num){
    return document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("outout-value").innerText;
}
function printoutput(putmun){
    if(putmun==""){
        document.getElementById("outout-value").innerText=putmun;
    }else{
         document.getElementById("outout-value").innerText=formated(putmun);
    }

}
function formated(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printhistory("");
			printoutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getoutput()).toString();
			if(output){//if output has a value
				output= output.substring(0,output.length-1);
				printoutput(output);
			}
		}
		else{
			var output=getoutput();
			var history=gethistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substring(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printoutput(result);
					printhistory("");
				}
				else{
					history=history+this.id;
					printhistory(history);
					printoutput("");
				}
			}
		}

	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getoutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printoutput(output);
		}
	});
} 