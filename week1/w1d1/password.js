var replacer = function(l) {

  switch(l) {
    case 'a':
      return '4';
      break;
    case 'e':
      return '3';
      break;
    case 'o':
      return '0';
      break;
    case 'l':
      return '1';
      break;
    default:
      return l;
  }
}

var obfuscator = function(password) {

var newpassword = "";
  for (let index in password) {
    var l = password.charAt(index);
    newpassword += replacer(l);
  }
  return newpassword;
}

var args = process.argv;
console.log(obfuscator(args[2]));