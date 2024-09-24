const display = document.getElementById("display");

function addElement(input){
    display.value += input;
}
function forOperator(){

}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}

