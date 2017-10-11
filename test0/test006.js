
function makeCounter() {
    var count = 0;
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
    
}


var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

function makeCounter2() {
    var count = 0;
    var myCount = {
        increment: function() {
            count = count + 1;
            return count;
        }
    };

    return myCount; 
    
    /*****
     * 上面部分可以简写为：
     * var count = 0;
     * return {
     *     increment: function() {
     *         count++;
     *     }
     * };
     * 
     */
}

var counter2 = makeCounter2();
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());



// function makeTimer(doneMessage, n) {
//     setTimeout(function () {
//         alert(doneMessage);
//     }
//     , n);
// }


function makeTimer(doneMessage, n) {
    var handler = function () {
        alert(doneMessage);
    }
    setTimeout(handler, n);
}

makeTimer("Cookies are done!", 3000);



/**
 * 示例二：不使用闭包创建
 */


//  var count = 0;

//  window.onload = function() {
//      var button = document.getElementById("clickme");
//      button.onclick = handleClick;
//  }

// function handleClick() {
//     var message = "You click me ";
//     var div = document.getElementById("message");
//     count++;
//     div.innerHTML = message + count + " times!";
// }


/***
 * 使用闭包
 */

 window.onload = function() {
     var count = 0;
     var message = "You click me ";
     var div = document.getElementById("message");
     var button = document.getElementById("clickme");

     button.onclick = function() {
         count++;
         div.innerHTML = message + count + " times!";
     }
 }