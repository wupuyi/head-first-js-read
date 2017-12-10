//更简单的原型语法

function Person(){

};

Person.prototype = {
    // constructor: Person,
    name: 'Nicholas',
    age: 29,
    job: 'Software Engineer',
    sayName: function() {
        console.log(this.name);
    }
};

//重设构造函数，只适用于ES5兼容的浏览器
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
});
