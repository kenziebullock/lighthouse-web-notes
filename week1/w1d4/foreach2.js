/*
 * list.forEach(function(item) {console.log(item); });
 */

function myForEach(list, cb) {
    for(var i = 0; i < list.length; i++) {
        cb(list[i], i, list);
    }
}

var list = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

list.forEach(function(person) {
    console.log(person);
});

myForEach(list, function(person, index) {
    console.log("Person #" + (index + 1 + " is " + person))
});