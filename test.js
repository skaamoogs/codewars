var keepCalling = true;
console.time('main');
setTimeout(function () {
  keepCalling = false;
}, 2000);

while ( keepCalling ) {
  console.timeLog('main');
  console.log(keepCalling)
}