function add(a, b) {
    let diffLength = a.length - b.length;
    (diffLength > 0) ? b = '0'.repeat(diffLength) + b : (diffLength < 0) ? a = '0'.repeat(Math.abs(diffLength)) + a : null;
    let c = '';
    let transDigit = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        let digit = parseInt(a[i], 10) + parseInt(b[i], 10) + transDigit;
        transDigit = 0;
        if (digit > 9) {
            digit -= 10;
            transDigit = 1;
        }
        c = digit + c;
    }
    transDigit ? c = 1 + c : null;
    return c;
}

console.log(add('9387', '857394'));