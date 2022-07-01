let cashe = [];

function isRegularNumber (n) {
    let factors = [2, 3, 5];
    let isDivisble = true;
    while (n > 1 && isDivisble) {
        isDivisble = false;
        for (let factor of factors) {
            if (n % factor === 0) {
                n /= factor;
                isDivisble = true;
            }
        }
    }
    return n === 1;
}


function hamming (n) {
    let k = 0;
    let counter = 0;
    if (cashe.length < n) {
        if (cashe.length !== 0) {
            k = cashe[cashe.length - 1];
            counter = cashe.length;
        }
    } else {
        return cashe[n - 1];
    }
    while (counter < n) {
        k++;
        if (isRegularNumber(k)) {
            counter++;
            cashe.push(k);
        }
    }
    return k;
}

console.time('main')
//console.log(hamming(1300));


 for (let i = 1; i <= 1300; i+=1) {
    console.time('iter')
    console.log(hamming(i));
    console.timeEnd('iter');

}
//console.log(cashe);
console.timeEnd('main');