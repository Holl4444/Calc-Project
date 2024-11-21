function operate(num1, operator, num2) {
    const op = operator;
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
        '{\displaystyle {\sqrt {x}},}': () => {
            return Math.sqrt(num1)},
    };
   return methods[op]();
}

console.log(operate(36, '{\displaystyle {\sqrt {x}},}', 2));