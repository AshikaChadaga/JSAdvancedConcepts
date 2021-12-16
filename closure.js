function greetCustomer() {
    const customerName = "Ashika";
    function greetingMsg() {
        console.log("Hi! " + customerName);
    }
    return greetingMsg;
}

const callGreetCustomer = greetCustomer();
callGreetCustomer(); // output – Hi! anchal
// console.dir(callGreetCustomer);

//Counter : Closure stores the reference of the variable
function counter() {
    let count = 0;
    return function () {
        return count++;
    };
}

const countValue = counter();
console.log(countValue()); // 0
console.log(countValue()); // 1
console.log(countValue()); // 2
