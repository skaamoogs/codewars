function simple_assembler(program) {
	let k = 0;
    let registers = {};
    let command = [];
    while (k < program.length) {
        command = program[k].split(' ');
        switch (command[0]) {
            case 'mov':
                if (isNaN(command[2])) {
                    registers[command[1]] = registers[command[2]];
                } else {
                    registers[command[1]] = parseInt(command[2]);
                }
                k++;
                break;
            case 'inc':
                registers[command[1]]++;
                k++;
                break;
            case 'dec':
                registers[command[1]]--;
                k++;
                break;
            case 'jnz':
                if (registers[command[1]]) {
                    if (isNaN(command[2])) {
                        k += registers[command[2]];
                    } else {
                        k += parseInt(command[2]);
                    }
                    break;
                }
                k++;
        }
        // console.log(registers);
        // console.log(k);        
    }
	return registers;
}

console.log(simple_assembler(['mov a -10','mov b a','inc a','dec b','jnz a -2']));