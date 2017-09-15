console.log("Is stdout writeable? " + process.stdout.writable);

process.stdout.write("Hello ");
process.stdout.write("world.");