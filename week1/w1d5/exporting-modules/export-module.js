var list = [];

function ascendingList(list) {
    list.sort(function(a, b) {
        return (a === b ? 0 : (a < b ? -1 : 1));
    });
    return list;
}

module.exports = {
    addToList: function(num) {
        return list.push(num);
    },
    listReturn: function() {
        return list;
    },
    ascendingListReturn: function() {
        return ascendingList(list);
        
    }
}

