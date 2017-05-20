$(function() {
    // 添加span元素
    $('#jnBrandList li').each(function() {
        let img = $(this).find('img');
        let img_w = img.width();
        let img_h = img.height();
        let spanHtml = `
            <span style="position: absolute; top: 0; left: 6px; width: ${img_w}px; height: ${img_h}px;" class="imageMask"></span>
        `;
        $(spanHtml).appendTo(this);
    });

    // 为 span 元素绑定 hover 实现，然后触发.imageOver class的交替
    $('#jnBrandList .imageMask').hover(function() {
        $(this).toggleClass('imageOver');
    });
});
