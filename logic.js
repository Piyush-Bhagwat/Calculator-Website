var eqnEL = document.querySelector(".eqn");
var ansEL = document.querySelector(".ans");
var ansArea = document.querySelector(".ansArea")

var toReset = false;
var ans=0;
var equation="";

ansEL.style.transform = "scale(1)";
ansEL.style.padding = "0px";


function display(num){
    if(toReset){
        ans=0;
        equation="";
        toReset = false;
        ansEL.style.transform = "scale(1)";
        ansEL.style.padding = "0px";
    }
    equation += num;
    eqnEL.innerHTML = equation;

    ans = eval(equation);
    ansEL.innerHTML = ans;
}

function calculat(){
    equation = "";
    eqnEL.innerHTML = "";
    toReset = true;

    ansEL.style.transform = "scale(2)";
    ansEL.style.padding = "20px";
}
