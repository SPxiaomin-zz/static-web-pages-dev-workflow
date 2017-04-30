$(function() {

    // 当光标定位在搜索框上时，需要将提示文字去掉
    $('#inputSearch').focus(function() {

        if ($(this).val() === this.defaultValue) {
            $(this).val('');
        }

    // 当光标移开时，如果用户未填写任何内容，需要把提示文字恢复。
    }).blur(function() {

        if ($(this).val() === '') {
            $(this).val(this.defaultValue);
        }

    // 回车提交的效果
    }).keyup(function(event) {

        if (event.which === 13) {
            alert('回车提交表单！');
        }
    });
});
