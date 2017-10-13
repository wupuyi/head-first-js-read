function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var text = whichpic.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");
    placeholder.setAttribute("src",source);
    description.firstChild.nodeValue = text;
}

// function countBodyChildren() {
//     var bodyElement = document.getElementsByTagName("body")[0];
//     alert(bodyElement.nodeType);
//     alert(bodyElement.childNodes.length);
// }

// window.onload = countBodyChildren;