$(function() {
    let x = 10,
        y = 20;

    $('a.tooltip')
        .mouseover(function(event) {
            // 获取属性值&创建元素
            this.myTitle = this.title;
            this.title = '';
            let tooltip = `<div id="tooltip">${this.myTitle}</div>`;
            // 插入元素到文档中去
            $('body').append(tooltip);
            // 设置position位置值，以及显示元素
            $('#tooltip')
                .css({
                    top: `${event.pageY + y}px`,
                    left: `${event.pageX + x}px`
                })
                .show('fast');
        })
        .mouseout(function() {
            // 重新设置回 title 值
            this.title = this.myTitle;
            // 移除dom元素
            $('#tooltip').remove();
        })
        .mousemove(function(event) {
            // 重新设置元素的position位置
            $('#tooltip')
                .css({
                    top: `${event.pageY + y}px`,
                    left: `${event.pageX + x}px`
                });
        });
});
