function doubles(maxk, maxn) {
  let total = 0.0;
    for (let i = 1; i <= maxk; i++) {
      for (let j = 1; j <= maxn; j++) {
        total += 1 / (i * (j + 1) ** (2 * i));
      }
    }
  return total;
}

console.log(doubles(1, 3));
console.log(doubles(1, 10));
console.log(doubles(20, 10000));