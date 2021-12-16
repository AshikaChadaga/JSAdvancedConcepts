//Without Memoization

console.log("--------------------Without Memoization-----------------------");

const multiply = (n) => (n * 10);
console.log(multiply(9));
console.log(multiply(9));

console.log("--------------------------------------------------------------");


console.log("----------------With Memoization for Multiply-----------------");

//using memoization
const memoizedMultiply = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');
            console.log("cache : ", cache)
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    }
}

const newMultiply = memoizedMultiply();
console.log(newMultiply(9)); // calculated
console.log(newMultiply(9)); // cached

console.log(newMultiply(4)); // calculated
console.log(newMultiply(4)); // cached

console.log("--------------------------------------------------------------");

console.log("---------------With Memoization for Factorial----------------");

//Memoization of factorial
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache', n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
);
console.log("Factorial of 5 is  : ", factorial(5)); // calculated
console.log("Factorial of 5 is  : ", factorial(6)); // calculated for 6 and cached for 5

console.log("--------------------------------------------------------------");