(function() {
    //私有变量和私有函数
    var privateVariable = 10;
    
    function privateFunction() {
        return false;
    }

    //构造函数
    MyObject = function(){

    };

    //公有/特权方法
    MyObject.prototype.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    };
})();