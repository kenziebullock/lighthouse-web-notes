var checkNumber = 123456789;


function luhnTest(num) {
    // split into an array of numbers
    var numberArray = checkNumber.toString();
    var newNumberArray = [];
    var result;
    var sumOfNumbers = [];
    // creates array with every second number starting from right side
    
    for (var i = numberArray.length - 2; i > 0; i = i - 2) {
        newNumberArray += numberArray[i];
    }
    for (var k = 0; k < newNumberArray.length; k++) {
        sumOfNumbers += (newNumberArray[j] * 2);
    }
    for (var j = numberArray.length - 1; j > 0; j = j - 2) {
        newNumberArray += numberArray[i];
    }
    // multiply numbers by 2
   
    // take every second digit starting from the first digit on right



    sumOfNumbers = sumOfNumbers.split('');
    console.log(sumOfNumbers.reduce((total, amount) => total + amount));

    console.log(typeof sumOfNumbers);
    console.log(sumOfNumbers);

    //console.log(result = sumOfNumbers.reduce(reducer));
    
    // console.log(result);
    // sum numbers

    // check if modulo 10
        
    

    
}

console.log(luhnTest(checkNumber));