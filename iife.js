//immediately invoked function expressions
var iife = function () {
    return 'Immediately Invoked Function Expressions(IIFEs) example ';
}();
console.log(iife);

(function() { console.log("Welcome to IIFE!"); })();

(function (value) {
    var greet = 'Hello';
    console.log(greet + ' ' + value);
})('Ashika');