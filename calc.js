var formula = "";
var answer = 0;

function updateFormula(digit) {

// if formula has previous operator do checks on 

// set regex to look for operators
    var regex = /\+|\-|\*|\//;
    var chk = formula.search(regex);
    
// if formula doesn't contain an operator

    if (chk === -1){
        formula = handleZeroDec(digit,formula);
    }
// formula does have an operator
    else{
// get the part of string after the last operator
        var subForm = formula.slice(chk + 1,formula.length);
    
        formula = formula.slice(0,chk +1) + handleZeroDec(digit,subForm);
    }
    
    updateDisp(answer,formula)
}

function handleZeroDec(digit,chkStr) {

// if number starts with zero 
    if (chkStr === "0" ){   
    // and a zero is entered return same string
        if (digit === "0"){
            return chkStr
        }
// if zero already entered return "0." otherwise return digit
        else {
            if (digit === "."){
                return chkStr + digit
                }
                else {
                    return digit
                }
            }
        }

// check if decimal not in string then add
    if (chkStr.indexOf(".") === -1 ){
            return chkStr + digit;
         }

    else {
// check not an extra decimal
        if (digit !== "."){
            return chkStr + digit;
            }
        else {
            return chkStr
            }
        }
}




function backSpace(){
    formula = formula.slice(0,formula.length - 1)
    updateDisp(0,formula)
}


// initialize display and formula
function initialize() {
    formula = "";
    answer = 0;
    updateDisp(0,"")
}

// update display 
function updateDisp(ans,wrk) {

    document.getElementById("idans").value = ans;
    document.getElementById("iddisp").value = wrk;
}

// calculate answer 
function calculate() {

   
    answer = eval(formula);
    updateDisp(answer,formula)

}