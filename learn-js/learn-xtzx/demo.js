// // console.log(typeof undefined);

// function remove(s) {
//     //coding and coding....
//     var arr = s.split(' ');
//     var strTest = /\!$/;
//     var newArr = arr.map(function (e) {
//         var eArr = e.split('');
//         while (strTest.test(e)) {
//             eArr.pop();
//             e = eArr.join('');
//         }
//         return e;
//     })
//     console.log(newArr);
//     s = newArr.join(' ');
//     console.log(s);
//     return s;
// }

// remove("Hi!")
// remove("Hi!!!")

function asc(s1, s2) {
    function asc2() {
        console.log(s1);
    }
    console.log('a');
    asc2();
}

asc('aaaaa', 'bbbbb');