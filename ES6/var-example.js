log(name); // undefined

var tinyize = function(name) {
  log(name); // Rick   This is Hoisting!

  log(myName); // undefined Hasn't been defined yet. Hoisting didn't work
  var myName = "Tiny " + name + "!";
  log(myName); // Tiny Rick!

  return myName;
};

var name = tinyize("Rick");
log(name); // output: Tiny Rick!
//log(myName); // output: Undefined This is a reference error, it's declared within a different function

log(i); // output: undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: 555555
  }, 100);
}
log(i); // output: 5

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
