var $ = require('jquery');

$(function () {
    function demo() {
        alert('Hello, jQuery！');
    }
    $('.demo').click(demo);
})