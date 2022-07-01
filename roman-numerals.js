const RomanNumerals = {

    _romans: ['I', 'V', 'X', 'L', 'C', 'D', 'M'], // Define an array of Roman symbols

    _decimals: [1, 5, 10, 50, 100, 500, 1000], // Define an array of roman symbol decimal weights

    toRoman(n) {
        let romanArray = []; // Declare an empty array for roman symbols 
        let digits = n.toString().split('').map(num => parseInt(num, 10)); // Create an array of number digits
        let k = 0;
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 4) {
                romanArray.unshift(this._romans[k].repeat(digits[i])); // Add roman symbol for digits from 0 to 4
            } else if (digits[i] === 4) {
                romanArray.unshift(this._romans[k] + this._romans[k + 1]); // Add roman symbol for digit 4
            } else if (digits[i] < 9) {
                romanArray.unshift(this._romans[k + 1] + this._romans[k].repeat(digits[i] - 5)); // Add roman symbol for digits from 5 to 9
            } else {
                romanArray.unshift(this._romans[k] + this._romans[k + 2]); // Add roman symbol for digit 9
            }
            k += 2;
        }
        let result = romanArray.join('');
        return result;
    },

    fromRoman(r) {
        const romansDecimals = {}; // Define an object with roman symbols as properties and corresponding decimals as values
        /* Define an object with roman symbols as properties and following values:
        1 (if symbol decimal weight need to be add to result)
        -1 (if symbol decimal weight need to be subtract from result) */
        const romansObject = {};
        let k = 0;
        this._romans.forEach(elem => {
            romansObject[elem] = 1; // Fill the object with 1
            romansDecimals[elem] = this._decimals[k]; // Fill the object with corresponding decimals
            k += 1;
        });
        let result = 0;
        for (let roman of r.split('').reverse().join('')) { // Iterate through the roman symbols string
            let indexOfRoman = this._romans.indexOf(roman); // Define the index of roman symbol in romans array
            for (let i = 0; i < indexOfRoman; i++) {
                romansObject[this._romans[i]] = -1; // Fill all properties symbols that have lower weight than current symbol with -1 
            }
            result += romansDecimals[roman] * romansObject[this._romans[indexOfRoman]]; // Add the decimal to result
        }
        return result;
    }
}


console.log(RomanNumerals.toRoman(1));
console.log(RomanNumerals.toRoman(3));
console.log(RomanNumerals.toRoman(4));
console.log(RomanNumerals.toRoman(5));
console.log(RomanNumerals.toRoman(8));
console.log(RomanNumerals.toRoman(9));
console.log(RomanNumerals.toRoman(10));
console.log(RomanNumerals.toRoman(20));
console.log(RomanNumerals.toRoman(23));
console.log(RomanNumerals.toRoman(49));
console.log(RomanNumerals.toRoman(89));
console.log(RomanNumerals.toRoman(99));
console.log(RomanNumerals.toRoman(499));
console.log(RomanNumerals.toRoman(999));
console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.fromRoman('MCMXC'));