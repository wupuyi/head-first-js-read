


var form = $('#search');
var input = $('input#username');
var result = $('#result');
var username;

form.on('submit', function(event) {
    event.preventDefault();
    username = input.val();
    $.ajax('http://api.github.com/users/' + username)
    .done(function(data) {
        var html = 
            '<div>用户名：' + data.login + '</div>'+
            '<div>介绍：' + (data.bio || '无') + '</div>';
        result.html(html);
    })
})