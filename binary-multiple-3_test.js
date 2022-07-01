function printBinaryMulipleOf3 (n) {
    let counter = 0;
    let k = 0;
    while (counter < n) {
        if (k % 3 === 0) {
            console.log(k.toString(2))
            counter++; 
        }
        k++;
    }

}

printBinaryMulipleOf3(50);