//原型模式

function Person() {

};

Person.prototype.name = 'Nicholas';
Person.prototype.age = 29;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person();

person1.sayName();   //Nicholas

var person2 = new Person();

person2.sayName();   //Nicholas

console.log(person1.sayName == person2.sayName);  //true

//isPrototypeOf()
console.log(Person.prototype.isPrototypeOf(person1));  //true

//Object.getPrototypeOf()
console.log(Object.getPrototypeOf(person1) == Person.prototype); //true

person1.name = 'Greg';

console.log(person1.name); //屏蔽掉原型中的name属性
console.log(person2.name);


//hasOwnProperty()

console.log(person1.hasOwnProperty('name'));  //true  --来自实例
console.log('name' in person1);   //true

console.log(person2.hasOwnProperty('name'));  //false --来自原型
console.log('name' in person2);  //true
console.log('love' in person2);  //false


//in操作符返回true，hasOwnProperty()返回false。就可以确定属性是原型中的属性。
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

console.log(hasPrototypeProperty(person1, 'name'));   //false
console.log(hasPrototypeProperty(person2, 'name'));   //true

var keys = Object.keys(Person.prototype);
console.log(keys);    //name,age,job,sayName

var p1 =  new Person();
p1.name = 'Rob';
p1.age = 31;
var p1keys = Object.keys(p1);
console.log(p1keys);