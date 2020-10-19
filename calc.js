var formula = "";
var answer = 0;

function updateFormula(digit) {


// set regex to look for operators
    const regex = new RegExp(/\+|\-|\*|\//);
    
    //  find last operator in string
    var chk = regex.test(formula);
    
// if formula doesn't contain an operator

    if (!chk){
        formula = handleZeroDec(digit,formula);
    }
// formula does have an operator
    else{

// get the index of the last operator
        var subForm = "";
        var i = getnum();

        // if operator is last char 
        if (i === formula.length - 1){
            formula = handleZeroDec(digit,formula);
        }

        else {
            subForm = formula.slice(i+1);
            
       // new formula is slice of formula incl index and concat sub formula
            formula = formula.slice(0,i+1) + handleZeroDec(digit,subForm);
            }

        
    }
    
    updateDisp(answer,formula)
}

// function to return the index of the last operator
function getnum(){
    const indexRegex = new RegExp(/\+|\-|\*|\/|\./);
    var j = formula.length -1;

    for (j; j >= 0; j--){
        // get last charcater in string
        var chkchar = formula.substring(j,j + 1)
        // check if character is operator or decimal
            if (indexRegex.test(chkchar)){
                return j
            }
    }

    return 0
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