function min(numbers) {

  //initialize variables
  var current = numbers[0];

  for (var i = 1; i < numbers.length; i++) {
    if (current > numbers[i]) {
      current = numbers[i];
    }
  }
  return current;
}