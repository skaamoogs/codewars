//let multipleOf3Regex = /((?<!.)(0*)(?!.))|(?<!.)(0*1(01*0)*10*)+(?!.)/;
let multipleOf3Regex = /^(0*(1(01*0)*10*)*)$/;
console.log(multipleOf3Regex.test(' 0'));
console.log(multipleOf3Regex.test('abc'));
console.log(multipleOf3Regex.test('000'));
console.log(multipleOf3Regex.test('110'));
console.log(multipleOf3Regex.test('111'));
console.log((12345678).toString(2));
console.log(multipleOf3Regex.test((12345678).toString(2)));