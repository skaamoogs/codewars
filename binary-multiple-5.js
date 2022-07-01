

//const divisibleByFive = /(^0*$)|(^(0*1)((10)*0)|(1(01)*1)(01*0(01)*1|(0(10)*0))*(10*)$)/;
const divisibleByFive = /^0+$|^(0*1(10)*(0|1(01)*1)(01*0(01)*(1|0(10)*0))*10*)+$/;


const printBinaryDivisibleBy5 = n => {
    let failCounter = 0;
    for (let i = 0; i <= n; i++) {
        let result = (divisibleByFive.test((i.toString(2))) === (i % 5 === 0)) ? 'passed' : 'failed';
        //console.log(i.toString(2), divisibleByFive.test((i.toString(2))));
        result === 'failed' ? failCounter++ : null;
        //console.log(i.toString(2), divisibleByFive.test((i.toString(2))), result);
    }
    console.log(`${failCounter} from ${n} tests failed!`);
}


printBinaryDivisibleBy5(10000);
console.log(divisibleByFive.test(''));