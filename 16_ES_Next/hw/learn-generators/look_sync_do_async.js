// ## Task

// Add error handling to this boilerplate. Teach run to throw an exception and
// catch that in generator. firstFile should be null if it doesn't exist.

// Follow this boilerplate:

var fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go (err, result) {
    if (err) {
        return it.throw(err);
    }
    it.next(result);
  }

  go();
}

run(function* (done) {
  var firstFile;
  try {
    var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    firstFile = dirFiles[0];
  } catch (err) {
    firstFile = null; // TypeError: Cannot read property '0' of undefined
  }

  console.log(firstFile);
});
