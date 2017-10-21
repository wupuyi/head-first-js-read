// 工厂模式
function createPerson(name, age, job) {
    var o = new Object;
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        alert(this.name);
    };
    return o;
}

var person1 = createPerson('Nicholas', 29, 'Software Engineer');

// console.log(person1);

// 构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        alert(this.name);
    };
}

var person2 = new Person('Nicholas', 29, 'Software Engineer');

console.log(person2);


//当作构造函数使用

var person3 = new Person('Nicholas', 29, 'Software Engineer');
person3.sayName;


//当作普通函数使用

Person('Greg', 27, 'Doctor');   //添加到window
window.sayName();   //Greg

//在另一个对象的作用域中调用

var o = new Object;
Person.call(o, 'Kristen', 25, 'Nurse');
o.sayName();     //Kristen

