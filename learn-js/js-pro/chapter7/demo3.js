function outputNumbers(count) {
    for( var i = 0; i < count; i++) {
        console.log(i);
    }
    console.log(i);
}


outputNumbers(5);

var someFunction = function() {
    //这里是块级作用域
};

someFunction();

(function() {
    //这里是块级作用域
})();

function outputNumbers2(count) {
    (function(){
        for(var i = 0; i < count; i++) {
            console.log(i);
        }
    })();
    // console.log(i);
}

outputNumbers2(5);