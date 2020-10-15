var formula = "";
var answer = 0;


function updateFormula(digit) {

// check no multiple zeros at start

if (formula === "0" && digit === "0"){
    return
}

// if zero already entered remove leading zero
if (formula === "0" && digit !=== "0"){
    formula = formula.slice(1,formula.length)
}

// check if decimal already in formula and new decimal not input
     
        if (formula.indexOf(".") === -1 ){
      
            formula = formula + digit;
            updateDisp(0,formula)
        }
        else {
                // check not an extra decimal
                if (digit !== "."){
                    formula = formula + digit;
                    updateDisp(0,formula)}
        }
}
          

function backSpace(){
    formula = formula.slice(0,formula.length - 1)
    updateDisp(0,formula)
}


// initialize dispaly and formula
function initialize() {

    formula = "";
    answer = 0
    updateDisp(answer,formula)
}

// update display 
function updateDisp(ans,wrk) {

    document.getElementById("idans").value = ans;
    document.getElementById("iddisp").value = wrk;
}

// calculate answer 
function calculate() {

 
}