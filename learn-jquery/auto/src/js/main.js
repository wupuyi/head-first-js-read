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
    
    // var btn = document.getElementById('btn');
    // btn.onclick = function() {
    //     var arrays = new Array();
    //     var items = document.getElementsByName('check');
    //     for (var i = 0; i < items.length; i++) {
    //         if(items[i].checked) {
    //             arrays.push(items[i].value);
    //         }
    //     }
    //     alert('选中的个数为：' + arrays.length);
    // }
    
    // console.log($('#btn'));
    // console.log($("div:hidden")); 

    var small = false;

    function smallImg(el) {
        el.animate({
            opacity: 0.6,
            width: '240px',
            height: '160px'
        }, 3000);
        small = true;
    }

    function largeImg(el) {
        el.animate({
            opacity: 1,
            width: '1200px',
            height: '800px'
        }, 3000);
        small = false;
    }

    $('#btn').click(function() {

        var el = $('.myImg img');
        if(small) {
            largeImg(el);
            $('#btn').text('缩小');
        } else {
            smallImg(el);
            $('#btn').text('恢复');

        }
        // $('div:hidden').show(5000);
        // $('div:hidden').slideDown(3000);
        // $('div:hidden').show(3000);
        // $('.myImg').slideToggle(3000);
        // $('[data-img="hidden"]').css('border', '1px solid red');
        // var el = document.querySelector('[data-img="hidden"]');
        // el.style.border = '1px solid blue';
        // $('[data-img="hidden"]').slideDown(3000);


    })

})