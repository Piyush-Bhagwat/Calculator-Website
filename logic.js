var eqnEL = document.querySelector(".eqn");
var ansEL = document.querySelector(".ans");
var ansArea = document.querySelector(".ansArea")

var clickAudio = new Audio("sounds/click.wav");

var toReset = false;
var ans=0;
var equation="";

ansEL.style.transform = "scale(1)";
ansEL.style.padding = "0px";

document.addEventListener("keydown", function(event){ //handles Keyboard Input
    console.log(event.key);
    num = event.key;
    if(isNumeric(num) || num == '.' || num =='*' || num=='/' || num=='-' || num=='+' || num=='%'){
        clickAudio.play();
        display(num);
    }

    switch (num) {
        case "Enter":
            clickAudio.play();
            calculat();
        break;
        
        case 'c':
            clickAudio.play();
            location.reload()
            break;
        case "Backspace":
            clickAudio.play();
            del();
        default:
            break;
    }
});

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isFloat(value) {
    if (
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    ) {
      return true;
    }
  
    return false;
  }

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

    if(isFloat(ans)){
        ans = eval(equation).toFixed(3); 
    }
    
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
    if(isFloat(ans)){
        ans = eval(equation).toFixed(3); 
    }
    ansEL.innerHTML = ans;
}

function calculat(){
    equation = "";
    eqnEL.innerHTML = "";
    toReset = true;

    ansEL.style.transform = "scale(2)";
    ansEL.style.padding = "20px 30px";
}

function reset(){
    ans=0;
    equation="";
    toReset = false;
    ansEL.style.transform = "scale(1)";
    ansEL.style.padding = "0px";
}

// num = event.key;
//     if(isNumeric(num) || num == '.' || num =='*' || num=='/' || num=='-' || num=='+'){
//         clickAudio.play();
//         display(num);
//     }

//     switch (num) {
//         case "Enter":
//             calculat();
//         break;
        
//         case 'c':
//             location.reload()
//             break;
//         case 
//         default:
//             break;
//     }