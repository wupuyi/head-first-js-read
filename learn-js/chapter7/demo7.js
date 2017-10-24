var singleton = {
    name: value,
    method: function() {
        //这里是方法的代码
    }
};


var singleton2 = function(){
    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }
    
    //特权/公有方法和属性

    return {

        publicProperty: true,

        publicMethod: function() {
            privateVariable++;
            return privateFunction();
        }
    };

}();


var application = function() {
    //私有变量和函数
    var components = new Array();

    //初始化
    components.push(new BaseComponent());

    //公共
    return {
        getComponentCount: function() {
            return components.length;
        },

        registerComponent: function(component) {
            if(typeof component == 'object'){
                components.push(component);
            }
        }
    };
}();

