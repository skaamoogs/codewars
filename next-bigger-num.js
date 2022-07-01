function nextBigger(n){
    let digitArray = n.toString().split('').map(num => parseInt(num, 10)); // Create an array of number digits
    let l = digitArray.length; // Define length of the digit's array
    /* The main idea is to split the main array in two and check if there are some element in right side is greater than last element of the left side*/
    for (let i = l - 1; i > 0; i--) {
        /* Take an array of digits from right side of main array and filtered from digits that lower than the last element of left side array */
        let rightSideArray = digitArray.slice(i).filter(element => element > digitArray[i - 1]); 
        if (rightSideArray != 0) { // Check if the filtered right side array is not empty
            let indexToChange = digitArray.lastIndexOf(Math.min(...rightSideArray)); // Define the last index of minimal digit in right side array
            [digitArray[i - 1], digitArray[indexToChange]] = [digitArray[indexToChange], digitArray[i - 1]]; // Swap the elements of left and right arrays
            let newNumArray = digitArray.slice(0, i).concat(digitArray.slice(i).sort()); // Create an array of digits for the new number
            let result = parseInt(newNumArray.join(''), 10); // Get the number from the string
            return result;
        }
    }
    return -1;
  }

  console.log(nextBigger(12000));