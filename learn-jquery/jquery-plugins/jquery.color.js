/*
 * @Author: Puyi Wu 
 * @Date: 2017-12-16 10:58:21 
 * @Last Modified by: Puyi Wu
 * @Last Modified time: 2017-12-16 11:05:57
 */

 /**
  * 插件名：jquery.color.js
  * 插件用途：
  * 1、设置匹配的元素
  * 2、获取匹配的元素（元素集合第一个）的颜色
  */

;(function($) {
    //jQuery.fn.extend()方法扩展
    $.fn.extend({
        'color': function(value) {
            // if(vaule == undefined) {
            //     return this.css('color');
            // } else {
            //     return this.css('color', value);
            // }
            return this.css('color', value);
        }
    })
})(jQuery);