import $ from 'jquery';

const stopLoading= ()=>{
    $('#preloader-active').delay(2000).fadeOut('slow');
    $('body').delay(450).css({
        overflow: 'visible',
    });
}

export default stopLoading;