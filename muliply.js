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

console.log(multiply('d', 13, 16));