var baconator = function(words) {

  var pigged = "";

  words.forEach(function(element, i) {

    if (i < 2) {
      return;
    }

    pigged = pigged + element.slice(1) + element.slice(0, 1) + "ay ";

  });
  return pigged;
};

var argument = process.argv;
console.log(baconator(argument));