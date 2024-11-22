const opBtns = document.getElementsByClassName('op-btn-container');
const digitBtns = document.getElementsByClassName('digit-btns-container');
const advancedBtns = document.getElementsByClassName('advanced-btns-container');
const display = document.getElementsByClassName('inp-out')

function operate(arr) {
    const op = arr[1];
    const num1 = arr[0];
    const num2 = arr[2];
    const methods = {
        '+': () => {
            return num1 + num2;},
        '-': () => {
            return num1 - num2;},
        '*': () => {
            return num1 * num2;},
        '/': () => {
            return num1 / num2;},
        '**': () => {
            return num1 ** num2;},
        '√': () => {
            return Math.sqrt(num1)},
    };
   return methods[op]();
}

console.log(operate([36, '√', 2]));


/* Function to accept digits up to screen length
   create string until operator pressed
   return string / save string as calcStr[indx]
   and flag true.
   then reset string
    Contingency for sqrt
*/ 




/* Reset
    reset list
    reset flags
    reset display
*/