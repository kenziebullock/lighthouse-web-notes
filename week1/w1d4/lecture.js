var list = [1, 3, 5, 7, 11, 13];

function backwards (list, cb) {
    return cb(list);
}

/*
var results = backwards(list, function(list) {
    var newList = [];

    for (var i = 0; i < list.length; i++) {
        newList.unshift(list[i]);
    }

    return newList;
});
*/

var results = backwards(list, function(list) {
    var newList = [];

    for (var i = 0; i < list.length; i += 2) {
        newList.unshift(list[i]);
    }

    return newList;
});

console.log(results);