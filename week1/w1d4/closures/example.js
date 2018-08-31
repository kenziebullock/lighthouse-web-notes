function makeIdGenerator() {
    var id = 0;
  
    return function() {
      id += 1;
      return id;
    }
  }
  
  var nextId = makeIdGenerator();
  
  console.log(nextId());