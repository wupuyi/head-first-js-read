window.onload = init;

function init() {
    // var image = document.getElementById("one");
    // image.onclick = showAnswer;
    
    // 给所有img元素绑定showAswer事件
    var image = document.getElementsByTagName("img");
    for (var i = 0; i < image.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer() {
    // var image = document.getElementById("one");
    // image.src = "img/001.jpg";

}

