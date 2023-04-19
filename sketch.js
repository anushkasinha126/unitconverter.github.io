// let rate1=document.querySelector(".rate1");
// let rate2=document.querySelector(".rate2");
// let resultBtn=document.querySelector(".result");
// let selects=document.querySelectorAll(".options select");
// let sel1=selects[0];
// let sel2=selects[1];
// let inputs=document.querySelectorAll(".input input");
// let inpt1=inputs[0];
// let inpt2=inputs[1];

// let rates={};

var input=document.getElementById('input');
var result=document.getElementById('result');
var input=document.getElementById('input');
var inputTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// inputTypeValue=inputType.value;


function myResult(){

    inputTypeValue=inputType.value;
    // result.value=input.value;

    if(inputTypeValue === "length"){
        result.value=Number(input.value)*0.001;
    }
    else if(inputTypeValue === "area"){
        result.value=Number(input.value) * 0.0001;
    }
    else if(inputTypeValue === "weight"){
        result.value=Number(input.value) * 0.0022046226;
    }
    else if(inputTypeValue === "temp"){
        result.value=Number(input.value) * 33.8;
    }
    else if(inputTypeValue === "power"){
        result.value=Number(input.value) * 0.0013410221;
    }

}