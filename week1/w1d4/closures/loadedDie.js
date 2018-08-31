function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var roll = -1;
  
    return function() {
      if (!list[roll + 1]) {
          roll = 0;
      }
      roll += 1;
      return list[roll];
    }
  }
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());