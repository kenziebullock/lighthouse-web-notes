var input = process.argv[2];
var output = [];

var dice = function(number) {
  var i = 0;
  while (i < number) {

    var random = Math.floor(Math.random() * 7);
    output += random;
    i++;
    if (i < number) {
    output += ", "
    }
  }

  return "Rolled " + input + " dice: " + output;

}

console.log(dice(input));
