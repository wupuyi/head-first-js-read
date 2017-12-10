var person = {
    name: 'Nicholas',
    age: 29,
    job: 'Software Engineer',

    sayName: function() {
        alert(this.name);
    }
};

// writable: false
var prson1 = {};
Object.defineProperty(prson1, 'name', {
   writable: false,
   value: 'Nicholas'
});

console.log(prson1.name);
prson1.name = 'wupuyi';
console.log(prson1.name);

//configurable: false
var prson2 = {};
Object.defineProperty(prson2, 'name', {
   configurable: false,
   value: 'Nicholas'
});

console.log(prson2.name);
delete prson2.name;
console.log(prson2.name);


var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, 'year', {
    get: function() {
        return this._year;
    },
    set: function(newValue) {

        if(newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
console.log(book.edition);