/**
 * 
 * 1.
 * 
 */

 var stringArray = ["This", "is", "Woqu", "Company"];
 function alertStr(arr) {
     var newStr = arr.join(" ");
     console.log(newStr);
}

alertStr(stringArray);


var str = 'I am a student.';
(function() {
    console.log(str);
    var str = 'I am a engineer.';
})()


var hellword = (function() {
    console.log("hello one");
    setTimeout(function(){
        console.log("hello two");
    },100);
    setTimeout(function() {
        console.log("hello three");
    },0);
    console.log("hello four");
})()