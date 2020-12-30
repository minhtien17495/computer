import $ from 'jquery';
$(() => {
    const $listCard=$('.list_card');
    const $text=$('.svg_text');
    const $svgImg = $('.svg_img');
    // const $circle=$('.circle');
    const $line=$('.svg_line');
    const $svgGroup = $('.svg_group');
    const $svgClick=$('.svg_click');
    $svgClick.click(function () {
        $listCard.removeClass('displayNone');
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
        $svgGroup.removeClass('displayNone');
        if (!$listCard.hasClass('displayNone')) {
            $listCard.addClass('displayNone');
        }
    })
    // const resizeFunction=()=>{
    //     if (window.innerWidth < 991 && $text.length > 0 && $line.length > 0) {
    //         if ($('.svg').data('flat')==='1') {
    //             $('.svg').data('flat','2');
    //             $('.svg').attr('viewBox','0 0 1020 560');
    //             $text.each(function(){
    //                 const xText=$text.attr('x');
    //                 if (xText) {
    //                     $(this).attr("x",parseInt(xText)-200);
    //                 }
    //             })
    //             $line.each(function(){
    //                 const widthLine=$line.attr('width');
    //                 if (widthLine) {
    //                     $(this).attr("width",parseInt(widthLine)-200);
    //                 }
    //             }) 
    //         }
    //         if ($('.svg').data('flat')==='2') {
    //             $('.svg').data('flat','1');
    //             $('.svg').attr('viewBox','0 0 1220 560');
    //             $text.each(function(){
    //                 const xText=$text.attr('x');
    //                 if (xText) {
    //                     $(this).attr("x",parseInt(xText)+200);
    //                 }
    //             })
    //             $line.each(function(){
    //                 const widthLine=$line.attr('width');
    //                 if (widthLine) {
    //                     $(this).attr("width",parseInt(widthLine)+200);
    //                 }
    //             }) 
    //         }
    //     }
    // }
    // resizeFunction();
    // $(window).on('resize',()=>{
    //     resizeFunction();
    // })
});
