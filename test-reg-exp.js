function parseMsg(msg, registers) {
    let isText = false;
    let isArg = true;
    let isComments = false;
    let text = '';
    let arg = '';
    let output = [];
    for (let char of msg) {       
        if (isComments) {
            break;
        }
        if (!isText && char === ';') {
            isComments = true;
            isArg = false;
            isText = false;
        }
        if (isText) {
            text += char;
        } else {
            (isArg && char !== ' ' && char !== ',' && char !== '\'') ? arg += char : null;
            (char === ',') ? isArg = true : null;
            if ((char === ',' || char === ' ') && arg !== '') {
                isArg = false;
                isNaN(arg) ? output.push(registers[arg]) : parseInt(arg, 10);
                arg = '';
            } 
        }
        if (char === '\'') {
            (isText && text !== '') ? output.push(text.replace(/\'/, '')) : null;
            isText = !isText;
            text = '';
        }
        //console.log(char, isText, isArg, isComments);
        //console.log(output);            
    }
    (arg !== '') ? isNaN(arg) ? output.push(registers[arg]) : parseInt(arg, 10) : null;
    return output.filter(element => element !== '');
}
let registers = {a: 10, b: 20, c: 30, d: 40};
console.log(parseMsg(' \'(5+1)/2 = \', a    ; output message', registers));
console.log(parseMsg('  a, \'! = \', c ; output text', registers));
console.log(parseMsg('  \'Term \', a, \' of Fibonacci series is: \', b        ; output text', registers));
console.log(parseMsg('   \'gcd(\', a, \', \', b, \') = \', c', registers));
//console.log(parseMsg('  a, \'! = \', c ; output text', registers));