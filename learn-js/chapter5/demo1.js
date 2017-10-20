

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


window.color = "red";
var o ={
    color: "blue"
};
function sayColor() {
    console.log(this.color);
}

sayColor();

sayColor.call(this);

sayColor.call(window);

sayColor.call(o);

sayColor.apply(o);

var objectSayColor = sayColor.bind(o);

objectSayColor();

var s1 = "some text";
var s2 = s1.substring(2);

console.log(s1.indexOf("s"));

// alert(s2);


var stringValue = "   hello world   ";

// console.log(stringValue.indexOf("o",6));

var trimmedStringValue = stringValue.trim();

console.log(trimmedStringValue);