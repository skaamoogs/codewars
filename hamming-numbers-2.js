function hamming (n) {
    let arr = [1];
    let i = 0, j = 0, k = 0;
    let x = 2, y = 3, z = 5;
    for (let counter = 1; counter < n; counter++) {
        arr.push(Math.min(x, y, z));
        if (arr[counter] === x) {
            i++;
            x = 2 * arr[i];
        }
        if (arr[counter] === y) {
            j++;
            y = 3 * arr[j];
        }
        if (arr[counter] === z) {
            k++;
            z = 5 * arr[k];
        }
    }    
    return arr[n - 1];
}

console.time('main');
console.log(hamming(5000));
console.timeEnd('main');