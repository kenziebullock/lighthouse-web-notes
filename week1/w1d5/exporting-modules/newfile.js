var exportModule = require("./export-module");

var newList = [5, 10, 11, 12, 15, 2, 1, 0];

newList.forEach(function(x) {
    exportModule.addToList(x);
})

console.log(exportModule.ascendingListReturn());