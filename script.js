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