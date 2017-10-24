'use strict';

// function fac(num) {
//     if(num <= 1) {
//         return 1;
//     } else {
//         return num * arguments.callee(num - 1);
//     }
// }

// console.log(fac(5));


// 由于严格模式下上述方法不可用，可采用如下命名函数的方法。

var factorial = (function f(num) {
    if (num <= 1){
        return 1;
    } else {
        return num * f(num-1);
    } 
});

console.log(factorial(5))


function createComparisonFunction(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if(value1 < value2) {
            return -1;
        } else if(value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
}
//创建函数
var compareNames = createComparisonFunction('name');
//调用函数
var result = compareNames({name: 'Nicholas'} , {name: 'Greg'});
//解除对匿名函数的引用（释放内存）
compareNames = null;

console.log(result);