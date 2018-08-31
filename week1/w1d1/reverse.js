var reverse = function(word) {

  var array1 = [];
  var backwards = '';

  for (var i = 2; i < args.length; i++) {
    array1.push(args[i]);
  }

  for (var j = 0; j < array1.length; j++) {

    for (var k = array1[j].length - 1; k >= 0; k--) {

      backwards += array1[j][k];

    }

    if (j < array1.length - 1) {
    backwards += '\n';
    }

  }

  return backwards;
}

var args = process.argv;
console.log(reverse(args));
