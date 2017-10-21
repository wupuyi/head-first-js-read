function object(o) {
    function F(){}
    F.prototype = o;
    return new F();
}


var person = {
    name: 'Nicholas',
    friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = object(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');

var yetAnotherPerson = object(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Barbie');

console.log(person.friends); //



// Object.create()

var person1 = {
    name: 'Nicholas',
    friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson1 = Object.create(person1);
anotherPerson1.name = 'Greg';
anotherPerson1.friends.push('Rob');

var yetAnotherPerson1 = Object.create(person1);
yetAnotherPerson1.name = 'Linda';
yetAnotherPerson1.friends.push('Barbie');


console.log(person1.friends); //

var person2 = {
    name: 'Nicholas',
    friends: ['Shelby', 'Court', 'Van']
};
var anothoerPerson2 = Object.create(person2, {
    name: {
        value: 'Greg'
    }
});

console.log(anothoerPerson2.name);  //Greg