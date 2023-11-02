function product() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var p = 1;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var i = args_1[_a];
        p *= i;
    }
    return p;
}
var x = product(1, 2, 3, 4, 5, 6);
console.log(x);
