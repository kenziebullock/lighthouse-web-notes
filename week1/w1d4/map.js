/*
 * list.map(function(item) { reurn item + 1; });
 */

// Map is built to run the function we have designed on each item in the array we used it on

 var list = [1, 2, 3, 4, 5];

var newList = list.map(function(item) {
    return item + 1;
});

console.log(newList);

function myMap(list, cb) {
    var newList = [];

    for (var i = 0; i < list.length; i++) {
        newList.push(cb(list[i]));
    }

    return newList;
}
var results_b = myMap(list, function(item) {
    return item + 1;
});

console.log(results_b);