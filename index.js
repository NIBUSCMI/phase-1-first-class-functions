function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return namedFunction;
}
function namedFunction() {

}

function returnsAnAnonymousFunction() {
    return function(){};
}