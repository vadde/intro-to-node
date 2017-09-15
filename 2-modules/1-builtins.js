// Requiring a built-in module "os"
// Used for getting information about the CPU, operating system, user, network interfaces
// The arguement of the require method is the string identifier of the module
var os = require('os');

var toMb = function(f) {
    return(Math.round((f/1024/1024)*100)/100);
}

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');

