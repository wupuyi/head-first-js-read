var $ = require('jquery');

$(function () {
    //eg.1
    // function demo() {
    //     alert('Hello, jQuery！');
    // }
    // $('.demo').click(demo);


    //eg.2
    // var item = document.getElementById('tb');
    // var tbody = document.getElementsByTagName('tbody')[0];
    // var trs = tbody.getElementsByTagName('tr');
    // for(var i = 0; i < trs.length; i++) {
    //     if(i%2==0) {
    //         trs[i].style.backgroundColor = '#888';
    //     }
    // }

    // eg.3
    
    var btn = document.getElementById('btn');
    btn.onclick = function() {
        var arrays = new Array();
        var items = document.getElementsByName('check');
        for (var i = 0; i < items.length; i++) {
            if(items[i].checked) {
                arrays.push(items[i].value);
            }
        }
        alert('选中的个数为：' + arrays.length);
    }


})