
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