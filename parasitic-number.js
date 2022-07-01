// This function returns the string with number in the format accepatble for BigInt function
function formatIntByBase (str, base) {
    switch (base) {
        case 2:     return '0b' + str;
        case 8:     return '0o' + str;
        case 16:    return '0x' + str;
        default:    return str;        

    }
}
//Since numbers is bigger than Integer type can handle, this function use BigInt type
function calculateSpecial(lastDigit, base) {
    lastDigit = BigInt(lastDigit); // Convert to BigInt
    let k = lastDigit; // Initialize multiplier
    let k0 = 1n;    // This variable is to store previous multiplier
    let product = 1n; // Initialize variable for product of multiplication
    let infiniteLoop = false; // Condition of infinite loop. It will true if current multiplier (product after shifting) equal to the previous one
    let leadingZero = false; // Condition of leading zero in multiplier
    while (true) {
        product = lastDigit * k;
        // Check if the current multiplier is required special number
        if (product.toString(base).length > 1 && k === BigInt(formatIntByBase(product.toString(base).slice(1) + product.toString(base).slice(0, 1), base))) { 
            return k.toString(base);
        }
        infiniteLoop = k0 === k //
        k0 = k;
        if (infiniteLoop || leadingZero) {
            // In case of infinite loop or leading zero in previous multiplier next multiplier will not be shifted
            k = BigInt(formatIntByBase(product.toString(base) + lastDigit.toString(base), base)); 
        } else {
            // Normal case: current product shifted and lastdigit append
            k = BigInt(formatIntByBase(product.toString(base).slice(1) + lastDigit.toString(base), base));
        }
        leadingZero = k.toString(base)[0] == 0; 
        console.log(product.toString(base), k.toString(base), infiniteLoop, leadingZero);
    }
    
}

console.log(formatIntByBase('3c4'));
console.log('0xf2');

for (let i of [16]) {
    for (let j = 13; j < 14; j++) {
        console.time('test');
        console.log(`The smallest special parasitic number for ${j.toString(i)} (base ${i}) is ${calculateSpecial(j, i)}`);
        console.timeEnd('test');
    }
}
//105263157894736842
//102040816326530612244897959183673469387755
//10112359550561797752808988764044943820224719

