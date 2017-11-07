window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = blurAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = "img/" + name + ".jpg";
    image.src = name;
}

function blurAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = "img/ " + name + "blur.jpg";
    image.src = name;
}