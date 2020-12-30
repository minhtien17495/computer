import $ from 'jquery';
$(() => {
    const $text=$('.svg_text');
    const $svgImg = $('.svg_img');
    // const $circle=$('.circle');
    const $line=$('.svg_line');
    const $svgGroup = $('.svg_group');
    const $svgClick=$('.svg_click');
    $svgClick.click(function () {
        $line.addClass('width160');
        $svgImg.addClass('opacity');
        $text.hide();
        // $circle.addClass('displayNone');
        // $line.addClass('displayNone');
        $svgGroup.addClass('displayNone');
        $(this).removeClass('opacity');
        const dataMatch = $(this).data('match');
        if (dataMatch === 'item35') {
            $('.svg_img35').removeClass('opacity');
        }
        // $circle.each(function(){
        //     if ( $(this).data('match')=== dataMatch ) {
        //         $(this).removeClass('displayNone');
        //     }
        // })
        // $line.each(function(){
        //     if ( $(this).data('match')=== dataMatch ) {
        //         $(this).removeClass('displayNone');
        //     }
        // })
        $svgGroup.each(function () {
            if ($(this).data('match') === dataMatch) {
                $(this).removeClass('displayNone');
            }
        });
    })
    $('.svg_click_end').click(function(){
        $text.show();
        $svgImg.removeClass('opacity');
        $line.removeClass('width160');
        $svgGroup.removeClass('displayNone')
    })
});
