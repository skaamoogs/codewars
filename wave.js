function wave(str){
    let result = [];
    let waveStr = '';
    for (let i = 0; i < str.length; i++) {
      waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(waveStr);
    }
    return result;
  }

console.log(wave('two words'));