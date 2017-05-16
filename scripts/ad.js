function showImg(index) {
    let $rollobj = $('#jnImageroll');
    let $rolllist = $rollobj.find('div a');

    let newhref = $rolllist.eq(index).attr('href');
    $('#JS_imgWrap').attr('href', newhref)
            .find('img').eq(index).stop(true, true).fadeIn()
            .siblings().fadeOut();

    $rolllist.removeClass('chos').css('opacity', '0.7')
            .eq(index).addClass('chos').css('opacity', '1');
}

$(function() {
    let $imgrolls = $('#jnImageroll div a');
    let len = $imgrolls.length;
    let index = 0;
    let adTimer = null;

    // 鼠标控制显示的图片
    $imgrolls.mouseover(function() {
        index = $imgrolls.index(this);
        showImg(index);
    }).eq(index).mouseover();

    // 滑入停止动画，滑出开始动画
    $('#jnImageroll').hover(function() {
        if (adTimer) {
            clearInterval(adTimer);
        }
    }, function() {
        adTimer = setInterval(function () {
            showImg(index);
            index++;
            if (index === len) {
                index = 0;
            }
        }, 5000);
    }).trigger('mouseleave');
});
