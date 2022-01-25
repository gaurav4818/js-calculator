//get the userinput element
var userinput = document.getElementById('userinput');

//function for adding the user input
function add(char) {
    if (userinput.value == null || userinput.value == "0")
        userinput.value = char
    else if (userinput.value.length < 15) {
        userinput.value += char
    }

}

//function for +,-,*,/,%
result = () => {
    var ans = eval(userinput.value);
    userinput.value = ans;
};

//clear screen function
allclear = () => {
    userinput.value = "0";
};

//delete one char function
clearchar = () => {
    var ans = userinput.value;
    if (ans.length == 1) {
        userinput.value = "0";
    }
    else {
        userinput.value = ans.slice(0, -1);
    }
};

//square function
square = () => {
    var ans = userinput.value;
    userinput.value = ans * ans;
};

//square root function
sqrt = () => {
    var ans = userinput.value;
    userinput.value = Math.sqrt(ans);
};

//10^x function
ten = () => {
    var ans = userinput.value;
    userinput.value = Math.pow(10, ans);
};

//log function
log = () => {
    var ans = userinput.value;
    userinput.value = Math.log10(ans);
};

//ln function
ln = () => {
    var ans = userinput.value;
    userinput.value = Math.log(ans);
};

//1/x function
invdiv = () => {
    var ans = userinput.value;
    userinput.value = 1 / ans;
};

//factorial function
fact = () => {
    var ans = userinput.value;
    var factvalue = 1;
    for (var i = 1; i <= ans; i++) {
        factvalue *= i;
    }
    userinput.value = factvalue;
};

//Absolute function
abs = () => {
    var ans = userinput.value;
    userinput.value = Math.abs(ans);
};

//Exp function
exp = () => {
    var ans = userinput.value;
    userinput.value = Math.pow(Math.E, ans);
};

//value of pie
pie = () => {
    userinput.value = Math.PI;
};

//e function
e = () => {
    userinput.value = Math.E;
}

//+,- function
plusmin = () => {
    if (userinput.value.substring(0, 1) == "-")
        userinput.value = userinput.value.substring(1, userinput.value.length)
    else
        userinput.value = "-" + userinput.value
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