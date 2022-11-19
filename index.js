// index.js

$('.active').click(function(){

    $(this).find('.red_dot').remove();
    $(this).removeClass('active');

    $('#counter').text(($('#counter').text() - 1).toFixed(0));
    $(this).off('click')
});

$('#mark_all_read').click(function() {
    $('.active').find('.red_dot').remove();
    $('.active').removeClass('active');
    $('#counter').text("0");
})
