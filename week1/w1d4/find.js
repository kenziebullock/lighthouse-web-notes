/*
 * list.find(function(item) { return item === 2; });
 */

var list = [2, 4, 6, 8, 10];

var result = list.find(function(item) {
    return item === 6;
});

console.log(result);

function myFind(list, cb) {
    var result;

    for (var i = 0; i < list.length; i++) {
        if (cb(list[i], i, list)) {
            result = list[i];
            break;
        }
    }
    return result;
}