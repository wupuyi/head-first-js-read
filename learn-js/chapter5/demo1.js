function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

//arguments对象的callee属性指向拥有这个arguments对象的函数。

function factorial2(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}


console.log(factorial(6));

console.log(factorial2(6));