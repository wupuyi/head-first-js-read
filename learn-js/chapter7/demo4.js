function MyObject() {
    
    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }

    //特权方法

    this.publicMethos = function() {
        privateVariable++;
        return privateFunction();
    }
    
}

function Person(name) {
    this.getName = function() {
        return name;
    };

    this.setName = function(value) {
        name = value;
    }
}

var person = new Person('Nicholas');
console.log(person.getName());
person.setName('Greg');
console.log(person.getName());