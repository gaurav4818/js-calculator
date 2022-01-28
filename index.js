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

var m=0;

//ms function
ms=()=>{
     var ans=userinput.value;
     m=eval(ans);
     userinput.value=m;
}

//mc function
mc=()=>{
    m="0";
    userinput.value=m;
}

//mr function
mr=()=>{
    var ans=userinput.value;
    ans=m;
    userinput.value=ans;
}

//m+ function
mplus=()=>{
    var ans=userinput.value;
    m+=eval(ans);
    userinput.value=m;
}

//m- function
mminus=()=>{
    var ans=userinput.value;
    m-=eval(ans);
    userinput.value=m;
}

//sin function
sin=()=>{
    var ans=userinput.value;
    userinput.value=Math.sin(ans * (Math.PI / 180));
}

//cos function
cos=()=>{
    var ans=userinput.value;
    userinput.value=Math.cos(ans * (Math.PI / 180));
}

//tan function
tan=()=>{
    var ans=userinput.value;
    userinput.value=Math.tan(ans * (Math.PI / 180));
}

