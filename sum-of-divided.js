const isPrime = n => {
    if (n < 2) {
        return false;
    } else {
       for (let i = 2; i < n; i++) {
           if (n % i === 0) {
               return false;
           }
       }   
    }    
    return true;
}
    

const findPrimeFactors = n => {
    let result = [];
    for (let i = 2; i <= Math.abs(n); i++) {
        if (n % i === 0 && isPrime(i)) {
            result.push(i);
        }
    }
    return result;
}

function sumOfDivided(lst) {
    let primeNumbersSet = new Set();
    lst.forEach(elem1=> {
        let currentPrimes = findPrimeFactors(elem1);
        currentPrimes.forEach(elem2 => primeNumbersSet.add(elem2));
    });
    let primes = Array.from(primeNumbersSet).sort(function(a, b) {return a - b});
    let result = [];
    primes.forEach(elem1 => {
        let sum = 0;
        lst.forEach(elem2 => {
            if (elem2 % elem1 === 0) {
                sum += elem2;
            }
        });
        result.push([elem1, sum]);
    });
    return result;
  }


  console.log(sumOfDivided([ 1070, 1580, 2040, 1000, 1180, 1230, 1260, 1100, 1160, 1000 ]));
   