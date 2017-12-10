// function createFunction() {
//     var result = new Array();

//     for (var i = 0; i < 10; i++){
//         result[i] =function() {
//             return i;
//         };
//     }

//     return result;
// }
//上述情况下，数组result中的每一个元素都为10


function createFunction() {
    var result = new Array();

    for (var i = 0; i < 10; i++){
        result[i] = function(num) {
            return function () {
                return num;
            };
        }(i);
    }

    return result;
}

console.log(createFunction());