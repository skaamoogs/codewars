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

function assemblerInterpreter(program) {
    //console.log(program);
    let commands = program.split('\n').filter(element => element !== '').map(element => element.trim());
    console.log('Commands: ', commands);
    let endPointer = commands.indexOf('end');
    let pointer = 0;
    let registers = {};
    let stack = [];
    let cmpReg;
    let msg = [];
    while (pointer !== endPointer) {
        let codeLine = commands[pointer];
        console.log('Code: ', codeLine);
        let instruction = codeLine.split(' ')[0];
        let instructionEndIndex = codeLine.indexOf(instruction) + instruction.length;
        console.log('Instruction: ', instruction);
        let pattern = / ?,/;
        let args = codeLine.slice(instructionEndIndex).split(' ').map(element => element.replace(pattern, '')).filter(element => element !== '');
        console.log('Arguments: ', args);
        let x, y;

        
        switch (instruction) {
            case 'mov':
                x = args[0];
                y = args[1];
                isNaN(y) ? registers[x] = registers[y] : registers[x] = parseInt(y, 10);
                console.log(y);
                pointer++;
                break;
            case 'inc':
                x = args[0];
                registers[x]++;
                pointer++;
                break;
            case 'dec':
                x = args[0];
                registers[x]--;
                pointer++;
                break;
            case 'add':
                x = args[0];
                y = args[1];
                isNaN(y) ? registers[x] += registers[y] : registers[x] += parseInt(y, 10);
                pointer++;
                break;
            case 'sub':
                x = args[0];
                y = args[1];
                isNaN(y) ? registers[x] -= registers[y] : registers[x] -= parseInt(y, 10);
                pointer++;
                break;
            case 'mul':
                x = args[0];
                y = args[1];
                isNaN(y) ? registers[x] *= registers[y] : registers[x] *= parseInt(y, 10);
                pointer++;
                break;
            case 'div':
                x = args[0];
                y = args[1];
                isNaN(y) ? registers[x] = Math.floor(registers[x] / registers[y]) : registers[x] = Math.floor(registers[x] / parseInt(y, 10));
                pointer++;
                break;
            case 'cmp':
                x = args[0];
                y = args[1];
                cmpReg = isNaN(x) ? isNaN(y) ? registers[x] - registers[y] : registers[x] - parseInt(y, 10) : parseInt(x, 10) - parseInt(y, 10);
                pointer++;
                break;
            case 'jne':
                (cmpReg !== 0) ? pointer = commands.indexOf(args[0].concat(':')) + 1 : pointer++;
                break;
            case 'je':
                (cmpReg === 0) ? pointer = commands.indexOf(args[0].concat(':')) + 1 : pointer++;
                break;
            case 'jge':
                (cmpReg >= 0) ? pointer = commands.indexOf(args[0].concat(':')) + 1 : pointer++;
                break;
            case 'jg':
                (cmpReg > 0) ? pointer = commands.indexOf(args[0].concat(':')) + 1 : pointer++;
                break;
            case 'jle':
                (cmpReg <= 0) ? pointer = commands.indexOf(args[0].concat(':')) + 1 : pointer++;
                break;
            case 'jl':
                (cmpReg < 0) ? pointer = commands.indexOf(args[0].concat(':')) + 1 : pointer++;
                break;
            case 'jmp':
                pointer = commands.indexOf(args[0].concat(':')) + 1;
                break;
            case 'call':
                stack.push(pointer + 1);
                pointer = commands.indexOf(args[0].concat(':')) + 1;
                break;
            case 'ret':
                pointer = stack.pop();
                break;
            case 'msg':
                console.log('Message line: ', codeLine.slice(instructionEndIndex));
                msg = parseMsg(codeLine.slice(instructionEndIndex), registers);
                pointer++;
                break;
            default:
                pointer++;       

            
        }
        if (pointer >= commands.length) {
            return -1;
        }
        console.log('Pointer: ', pointer);
        console.log('Registers: ', registers);

    }
    console.log('Message: ', msg);
    return msg.join('');
  }

let program = `; My first program
mov  a, 5
inc  a
call function
msg  '(5+1)/2 = ', a    ; output message
end

function:
    div  a, 2
    ret`
console.log(assemblerInterpreter(program));