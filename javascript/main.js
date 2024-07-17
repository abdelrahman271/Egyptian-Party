function getNavWidth() {
    return window.innerWidth <= 767 ? '150px' : '250px';
}
$('.open').on('click', function() {
        $('.leftnav').addClass('show');
        $('.caption').animate({ 'margin-left': getNavWidth() }, 300);
});
$('.btn-close').on('click', function() {
    $('.leftnav').removeClass('show');
    $('.caption').animate({ 'margin-left': '10px' },300);
});

$('.leftnav a[href^="#"]').on('click',function(){
    let target=$(this).attr('href');
    let move=$(target).offset().top;
    $("html , body").animate({scrollTop:move},1000);
}
);

//=============================================================================

$('.cli').on('click',function(){
    if($(this).next().hasClass('clicked')){
        $(this).next().slideUp(500);
        $(this).next.removeClass('clicked');
    }
    else{
        $('html').find('.clicked').slideUp(500);
        $('html').find('.clicked').removeClass('clicked');
        $(this).next().slideDown(500);
        $(this).next().addClass('clicked');
        
    }
});

//============================================================================

document.addEventListener('DOMContentLoaded', function(){
    function updatetime(){
        let future = new Date(2024, 6, 30);
        let current = new Date();
        let timeDifference = future - current;

        let seconds = Math.floor((timeDifference / 1000) % 60);
        let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        $('.days').text(days + ' D');
        $('.hours').text(hours + ' H');
        $('.minutes').text(minutes + ' M');
        $('.seconds').text(seconds + ' S');
    }

    updatetime();
    setInterval(updatetime, 1000);
});

//=====================================================================
$('.area').on('input',function(){
    let x=$('.area').val().length;
    if(x>100){
        $('#charcounter').text('your available character finished');
    }
    else{
        $('#charcounter').text(100-x);
    }
})
