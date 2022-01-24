function add(result, character) {
	if(result.value == null || result.value == "0")
		result.value = character
    else if(result.value.length<15){
        result.value += character    
    }
	
	//	result.value += character
}
result=(text)=>{
    var ans=eval(text.value);
    document.getElementById('userinput').value=ans;
};
allclear=()=>{
    document.getElementById('userinput').value="0";
};
clearchar=(txt)=>{
    var ans=txt.value;
    if(ans.length==1)
    {
        document.getElementById('userinput').value="0";
    }
    else{
    document.getElementById('userinput').value=ans.slice(0,-1);
    }
};
square=(text)=>{
    var ans=text.value;
    document.getElementById('userinput').value=ans*ans;
};
sqrt=(text)=>{
  var ans=text.value;
  document.getElementById('userinput').value=Math.sqrt(ans);
};
ten=(text)=>{
    var ans=text.value;
    document.getElementById('userinput').value=Math.pow(10,ans);
};
log=(text)=>{
    var ans=text.value;
    document.getElementById('userinput').value=Math.log10(ans);
};
ln=(text)=>{
    var ans=text.value;
    document.getElementById('userinput').value=Math.log(ans);
};
invdiv=(text)=>{
    var ans=text.value;
    document.getElementById('userinput').value=1/ans;
};
fact=(text)=>{
    var ans=text.value;
    var factvalue=1;
    for(var i=1;i<=ans;i++)
    {
        factvalue*=i;
    }
    document.getElementById('userinput').value=factvalue;
};
abs=(text)=>{
    var ans=text.value;
    document.getElementById('userinput').value=Math.abs(ans);
};
exp=(text)=>{
    var ans=text.value;
    document.getElementById('userinput').value=Math.pow(Math.E,ans);
};
pie=()=>{
    document.getElementById('userinput').value=Math.PI;
};
e=()=>{
    document.getElementById('userinput').value=Math.E;
}
plusmin=(input) =>{
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
};


/*
function f0() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "0";
    }
    else {
        document.getElementById("userinput").value = result + "0";
    }
}
function f1() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "1";
    }
    else {
        document.getElementById("userinput").value = result + "1";
    }
}
function f2() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "2";
    }
    else {
        document.getElementById("userinput").value = result + "2";
    }
}
function f3() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "3";
    }
    else {
        document.getElementById("userinput").value = result + "3";
    }
}
function f4() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "4";
    }
    else {
        document.getElementById("userinput").value = result + "4";
    }
}
function f5() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "5";
    }
    else {
        document.getElementById("userinput").value = result + "5";
    }
}
function f6() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "6";
    }
    else {
        document.getElementById("userinput").value = result + "6";
    }
}
function f7() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "7";
    }
    else {
        document.getElementById("userinput").value = result + "7";
    }
}
function f8() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "8";
    }
    else {
        document.getElementById("userinput").value = result + "8";
    }
}
function f9() {
    var result = document.getElementById("userinput").value;
    if (result == "0") {
        document.getElementById("userinput").value = "9";
    }
    else {
        document.getElementById("userinput").value = result + "9";
    }
}
plus=()=>{
   var result = document.getElementById("userinput").value;
  
    document.getElementById("userinput").value = result + "+";
   
};
*/