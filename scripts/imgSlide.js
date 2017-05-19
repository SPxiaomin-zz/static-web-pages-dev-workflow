function showBrandList(index) {
    let $rollobj = $('#jnBrandList');
    let rollWidth = $rollobj.find('li').outerWidth();
    rollWidth = rollWidth * 4;

    $rollobj.stop(true, false).animate({
        left: -rollWidth * index
    }, 1000);
}

$(function() {
    $('#jnBrandTab li a').click(function() {
        $(this).parent().addClass('chos')
                .siblings().removeClass('chos');

        let index = $('#jnBrandTab li a').index(this);
        showBrandList(index);

        return false;
    }).eq(0).click();
});
