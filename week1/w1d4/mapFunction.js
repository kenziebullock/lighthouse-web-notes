var words = ["ground", "control", "to", "major", "tom"];


function map(array, cb) {
    var newArray = [];
    array.forEach(function (string) {
        newArray.push(cb(string));
    })
    return newArray;
}

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));

