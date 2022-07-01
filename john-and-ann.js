const casheJohn = {};
const casheAnn = {};

function j(n) {
    if (!casheJohn.hasOwnProperty(n)) {
        if (n === 0) {
            casheJohn[n] = 0;
        } else {
            casheJohn[n] = n - a(j(n - 1));
        }
    }
    return casheJohn[n]; 
}
function a(n) {
    if (!casheAnn.hasOwnProperty(n)) {
        if (n === 0) {
            casheAnn[n] = 1;
        } else {
            casheAnn[n] = n - j(a(n - 1));
        }
    }
    return casheAnn[n]; 
}

function john(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(j(i));
    }
    return result;
}
function ann(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(a(i));
    }
    return result;
}

function sumJohn(n) {
    let total = 0;
    for (let num of john(n)) {
        total += num;
    }
    return total;
}

function sumAnn(n) {
    let total = 0;
    for (let num of ann(n)) {
        total += num;
    }
    return total;
}

console.log(john(11));
console.log(ann(6));
console.log(sumJohn(75));
console.log(sumAnn(150));