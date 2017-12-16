/*
 * @Author: Puyi Wu 
 * @Date: 2017-12-16 11:09:48 
 * @Last Modified by: Puyi Wu
 * @Last Modified time: 2017-12-16 11:27:06
 */

 
/**
 * 表格隔行变色插件
 */
;(function($) {
    $.fn.extend({
        'alterBgColor': function(options){
            //插件代码
            //设置默认值
            options=$.extend({
                odd: 'odd',              //偶数行样式
                even: 'even',            //奇数行样式
                selected: 'selected'     //选中行样式
            }, options);
            $('tbody>tr:odd', this).addClass(options.odd);
            $('tbody>tr:even', this).addClass(options.even);
            $('tbody>tr', this).click(function() {
                // 判断当前行是否选中
                var hasSelected = $(this).hasClass(options.selected);
                // 如果选中，则移除selected类，否则就加上selected类
                $(this)[hasSelected ? 'removeClass' : 'addClass'](options.selected)
                       //查找内部的checkbox，设置对应的属性
                       .find(':checkbox').attr('checked', !hasSelected);
            });
            $('tbody>tr:has(:checked)', this).addClass(options.selected);
            return this;
        }
    })
})(jQuery);