function switchSkin(skinName) {
    // 切换 #skin 的 background-image postion
    $(`#${skinName}`).addClass('selected')
            .siblings()
            .removeClass('selected');

    // 更换 css skin file path
    $('#cssfile').attr('href', `./styles/skin/${skinName}.css`);

    // 设置 cookie
    Cookies.set('MyCssSkin', skinName, {path: '/', expires: 10});
}

$(function (){
    // 响应用户的点击事件，并切换皮肤
    $('#skin li').click(function (){
        switchSkin(this.id);
    });

    // 看是否已经存在 cookie了，并切换到相应的皮肤
    let cookieSkin = Cookies.get('MyCssSkin');
    if (cookieSkin) {
        switchSkin(cookieSkin);
    }
});
