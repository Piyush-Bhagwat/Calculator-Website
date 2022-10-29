var eqnEL = document.querySelector(".eqn");
var ansEL = document.querySelector(".ans");
var ansArea = document.querySelector(".ansArea")

var clickAudio = new Audio("sounds/click.wav");

var toReset = false;
var ans=0;
var equation="";

ansEL.style.transform = "scale(1)";
ansEL.style.padding = "0px";

for(var i=0; i<document.getElementsByClassName("clcBtn").length; i++){
    document.getElementsByClassName("clcBtn")[i].addEventListener("click", onClick);
}

function onClick(){
    clickAudio.play();
}

function del(){
    equation = equation.slice(0, -1);
    eqnEL.innerHTML = equation;
    ans = eval(equation);
    
    if(ans == undefined){
        ans = 0;
    }
    ansEL.innerHTML = ans;
}

function display(num){
    if(toReset){
        reset();
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

function reset(){
    ans=0;
    equation="";
    toReset = false;
    ansEL.style.transform = "scale(1)";
    ansEL.style.padding = "0px";
}
