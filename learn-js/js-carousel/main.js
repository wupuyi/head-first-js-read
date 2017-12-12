// /**
//  *给元素添加样式 
//  */
// function addClass(element) {
//     element.setAttribute('class', 'activated');
// }


// /**
//  * 移除元素上面的央视
//  */
// function removeClass() {
//     var items = getElement('#carousel-header li');
//     for (var i = 0; i < items.length; i++) {
//         items[i].removeAttribute('class', 'activated');
//     }
// }

// /**
//  * 获取元素
//  */
// function getElement(selector) {
//     return document.querySelectorAll(selector);
// }

// /**
//  * 设置图像
//  */
// function setImg(url) {
//     var img = document.getElementById('carousel-img');
//     img.setAttribute('src', url);
// }

// /**
//  * 切换图片
//  */
// function cutvoer(index, images) {
//     // var item = event.target;
//     var url = images[i];
//     //移除选中样式
//     removeClass();
//     //添加选中样式
//     addClass(item);
//     //设置图像
//     setImg(url);
// }

// /**
//  * 轮播函数
//  */
// function carousel(images) {
//     var items = getElement('#carousel-header li');
//     for (var i = 0; i < items.length; i++) {
//         (function (i) {
//             items[i].onclick = function () {

//             }
//         })(i);
//     }
// }

// var images = ['img/1.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg'];

// carousel(images);



