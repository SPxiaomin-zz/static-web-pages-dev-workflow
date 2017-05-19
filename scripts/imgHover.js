$(function() {
    $('#jnBrandList li').each(function() {
        let $img = $(this).find('img');
        let img_w = $img.width();
        let img_h = $img.height();
        let spanHtml = `
            <span style="position: absolute; top: 0; left: 6px; width: ${img_w}px; height: ${img_h}px;" class="imageMask"></span>
        `;
        $(spanHtml).appendTo(this);
    });

    $('#jnBrandList .imageMask').hover(function() {
        $(this).toggleClass('imageOver');
    });
});
