const countSameElements = (arr, element) => {
    let counter = 0;
    for (let el of arr) {
      if (el === element) {
        counter += 1;
      }
    }
    return counter;
  }
  
  function duplicateCount(text){
    const charArray = text.toLowerCase().split('');
    const charSet = new Set(charArray);
    const charObject = {};
    let total = 0;
    for (let char of charSet) {
      charObject[char] = countSameElements(charArray, char);
    }
    for (let number of Object.values(charObject)) {
      if (number > 1) {
        total += 1;
      }
    }
    return total;
  }

  console.log(duplicateCount('aabcbdedeb'));