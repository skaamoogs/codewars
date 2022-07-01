function multiply(a, b, base) {
    let c = '';
    let carry = 0;
    for (let aDigit of a) {
        let result = parseInt(aDigit, base) * b + carry;
        result = result.toString(base);
        if (result.length > 1) {
            carry = result[0];
            cDigit = result[1];
        } else {
            cDigit = result[0];
        }
        c += cDigit;
    }
    return c;
}