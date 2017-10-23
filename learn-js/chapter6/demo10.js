// 寄生式继承

function createAnother(original) {
    var clone = object(original);
    clone.sayHi = function() {
        console.log('hi');
    }
    return clone;
}

var person = {
    name: 'Nicholas',
    friends : ['Shelby', 'Court', 'Van']
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();    //hi