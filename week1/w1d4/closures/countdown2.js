var countdownGenerator = function (x) {
    return function() {
        // checks if countdown has gone below zero
        if (x < 0) {
            return "Rockets already gone, bub!";

        }
        // checks if countdown has reached zero, which will print blast off but also needs to bring x down 1 to ensure the top line prints 
        else if (x === 0) {
            x--;
            return "Blast Off!";
        }
        // prints t-minus our x and subtracts the x once
        else {
            return "T-minus " + x-- + "...";
        }


    }
  };
  
  var countdown = countdownGenerator(3);
  //countdown(); // T-minus 3...
//   countdown(); // T-minus 2...
//   countdown(); // T-minus 1...
//   countdown(); // Blast Off!
//   countdown(); // Rockets already gone, bub!
//   countdown(); // Rockets already gone, bub!
  console.log(countdown());
  console.log(countdown());
  console.log(countdown());
  console.log(countdown());
  console.log(countdown());
  console.log(countdown());
  console.log(countdown());
