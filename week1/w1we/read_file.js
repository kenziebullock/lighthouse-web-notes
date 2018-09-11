var fs = require("fs");
var args = process.argv[2];

//console.log(args);
fs.readFile(args, "ascii", cb);

function cb(err, data) {
    err ? Function("error", "throw error")(err) : console.log(JSON.stringify(data));
    //console.log("something");
}

