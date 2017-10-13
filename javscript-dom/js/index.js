
// 点击链接切换图片
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    if(whichpic.getAttribute("title")) {
        var text = whichpic.getAttribute("title");
    } else {
        var text = "";
    }

    // var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "" ;
    
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");
    if(!placeholder) return false;
    placeholder.setAttribute("src",source);
    if(description){
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

// function countBodyChildren() {
//     var bodyElement = document.getElementsByTagName("body")[0];
//     alert(bodyElement.nodeType);
//     alert(bodyElement.childNodes.length);
// }

// window.onload = countBodyChildren;



// 添加事件处理函数。
function prepareGallery() {
    var imageGallery = document.getElementById("imagegallery");
    // 判断对DOM的支持。
    if (!document.getElementById || !document.getElementsByTagName) return false; 
    if(!imageGallery) return false;
    var links = imageGallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            //返回执行结果
            return !showPic(this);
        }
    }
}

// window.onload = prepareGallery;

function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldOnload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);