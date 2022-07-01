function multiply(a, b, base=10) {
    let c = '';
    let carry = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        let aDigit = a[i];
        let result = parseInt(aDigit, base) * b + carry;
        let cDigit = '';
        
        //console.log(result.toString(base));

        result = result.toString(base);
        if (result.length > 1) {
            carry = parseInt(result[0], base);
            cDigit = parseInt(result[1], base);
        } else {
            carry = 0;
            cDigit = parseInt(result[0], base);
        }

        c = cDigit.toString(base) + c;
    }
    (carry !== 0) ? c = carry.toString(base) + c : null;
    (c === '') ? c = '0' : null;
    return c;
}

function calculateSpecial(lastDigit, base) {
    let k = lastDigit.toString(base); // Initialize multiplier
    let k0 = '';    // This variable is to store previous multiplier
    let product = ''; // Initialize variable for product of multiplication
    let infiniteLoop = false; // Condition of infinite loop. It will true if current multiplier (product after shifting) equal to the previous one
    let leadingZero = false; // Condition of leading zero in multiplier
    let counter = 0;
    console.log(k);
    while (true && counter < 1000) {
        product = multiply(k, lastDigit, base);
        // Check if the current multiplier is required special number
        if (product.length > 1 && k === product.slice(1) + product.slice(0, 1)) { 
            return k;
        }
        infiniteLoop = k0 === k //
        k0 = k;
        if (infiniteLoop || leadingZero) {
            // In case of infinite loop or leading zero in previous multiplier next multiplier will not be shifted
            k = product + lastDigit.toString(base); 
        } else {
            // Normal case: current product shifted and lastdigit append
            k = product.slice(1) + lastDigit.toString(base);
        }
        leadingZero = k[0] == 0; 
        //console.log(product, k, infiniteLoop, leadingZero);
        counter++;
    }
    
}


for (let i of [8, 10, 16]) {
    for (let j = 2; j < i; j++) {
        console.time('test');
        console.log(`The smallest special parasitic number for ${j.toString(i)} (base ${i}) is ${calculateSpecial(j, i)}`);
        console.timeEnd('test');
    }
}


