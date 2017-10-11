window.onload = init;

function init() {
    // var image = document.getElementById("one");
    // image.onclick = showAnswer;
    
    // 给所有img元素绑定showAswer事件
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    // var image = document.getElementById("one");
    // image.src = "img/001.jpg";
    var image = eventObj.target;
    var name = image.id;
    name = "img/" + name + ".jpg";
    image.src = name;
}

