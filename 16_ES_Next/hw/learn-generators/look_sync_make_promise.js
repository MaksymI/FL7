// ## Task

// Write run function that gets a generator as an argument, starts it and
// yields promise value foo. Use run from callback exercise as a example.

// Follow this boilerplate:

function askFoo () {
    return new Promise(function (resolve, reject) {
    resolve('foo');
    });
}

function run (generator) {
  var it = generator();

  function go(result) {

	if (result.done) {
        return result.value;
    }

    return result.value.then(function (value) {
        return go(it.next(value));
    }, function (error) {
        return go(it.throw(error));
    });
  }

  go(it.next());
}

run(function* () {
  try {
    var foo = yield askFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
});