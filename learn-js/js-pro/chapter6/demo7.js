//实现原型链的基本模式

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue());  //true

console.log(instance instanceof Object);     //true
console.log(instance instanceof SuperType);   //true
console.log(instance instanceof SubType);    //true


console.log(Object.prototype.isPrototypeOf(instance));       //true
console.log(SuperType.prototype.isPrototypeOf(instance));    //true
console.log(SubType.prototype.isPrototypeOf(instance));      //true


function SuperType2() {
    this.colors = ['red', 'blue', 'green'];
}


//继承了SuperType
function SubType2() {

}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors);

var instance2 = new SubType();
console.log(instance2.colors); 

