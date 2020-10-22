var formula = "";
var answer = 0;
// set regex to look for operators
const regex = new RegExp(/\+|\-|\*|\//);

function updateFormula(digit) {

    //  find last operator in string
    var chk = regex.test(formula);
    
// if formula doesn't contain an operator
    if (!chk){
        formula = handleDigit(digit,formula);
        }
    else{
        // get the index of the last operator
        var i = getnum();

        // check for invalid operator
         if (multiOp(formula,digit)){
            formula = formula.slice(0,i+1) + handleDigit(digit,formula.slice(i+1));
            }
        }   
    
    updateDisp(answer,formula)
}


function multiOp(formula,digit){

// if digit is an operator check its valid
    if ( regex.test(digit)){
        
        var chkchar = formula.slice(length-1)

        // check if last char in formula is operator
        if (regex.test(chkchar))
            {
                // check if valid operator
                switch(chkchar) {
                    case "+":
                        // + already entered allow -
                        if (digit === "-"){
                            return true
                            }
                        else {
                            return false
                        }
                      break;

                      case "-":
                        // + already entered allow -
                        if (digit === "+"){
                            return true
                            }
                        else {
                            return false
                        }
                      break;

                      case "*":
                        // + already entered allow -
                        if (digit === "+" || digit === "-"){
                            return true
                            }
                        else {
                            return false
                        }
                      break;

                      case "/":
                        // + already entered allow -
                        if (digit === "+" || digit === "-"){
                            return true
                            }
                        else {
                            return false
                        }
                      break;

                    default:
                            return false
                        break;
                    }

            }
        else {
            return true
        }

        }
        // 
    else{
        return true
        }
}


// function to return the index of the last operator
function getnum(){
    
    var j = formula.length;

    for (j; j > 0; j--){
        // get last charcater in string then work backwards
        var chkchar = formula.slice(j-1,j)
        // check if character is operator or decimal
            if (regex.test(chkchar)){
                return j-1
            }
    }

    return 0
}

// function handles input of new digit
function handleDigit(digit,chkStr) {

// switch statement for digit
    switch(digit) {
        case "0":
            // double zeros - don't append
            if (chkStr === "0"){
              return chkStr
                }
            else {
                return chkStr + digit
            }
          break;
        case ".":
          // if no decimal already entered - append
            if (chkStr.indexOf(".") === -1 ){
                return chkStr + digit
                }
            else {
                return chkStr
                }
            break;
        default:

            // if string = "0" return digit only
            if (chkStr === "0"){
                return digit
                }
            else {
                return chkStr + digit
                }
            break;
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
    document.getElementById("iddisp").innerHTML = wrk;
}

// calculate answer 
function calculate() {
  
    answer = parseFloat(eval(formula));
    

// set answer to exp if v large or small 
    if(answer >= 1000000000000 || answer <= -1000000000000 || (answer <= 0.00001 && answer >= -0.00001 && answer !== 0)){
        answer = expo(answer,4);
       }
   else {
        // max 8 decimal places
         answer = answer.toFixed(8);
          // set to max 10 decimals (convert answer back to a number datatype)
         answer = Number(answer).toPrecision(10);
         

     // format large +ve and negative 
     if (answer > 999 || answer < -999){
        answer = new Intl.NumberFormat().format(answer)

     }
        // remove rounding anomalies
        answer = (answer *1000) / 1000;
        
   

        }

    updateDisp(answer,formula);

}

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }