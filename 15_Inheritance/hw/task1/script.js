// Write your own extend/assign method.
// Invocation example:
// var defaults = { width: 100, height: 100 };
// var options = { width: 150 };
// var configs = assign({}, defaults, options); // -> {width: 150, height: 100}

function extend(target) {

    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
    }

    var to = Object(target);

    for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0; nextIndex < keysArray.length; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          to[nextKey] = nextSource[nextKey];
        }
    }

    return to;
}

module.exports = extend;