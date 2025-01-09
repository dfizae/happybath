$(document).ready(function(){

    /* 
    * 모바일 메뉴
    */

    $(document).ready(function () {
        const btnOpen = $('.btn-open')
        const BtnClose = $('.btn-close')
        const mMenu = $('.m-menu')
    
        btnOpen.click(function(){
            mMenu.animate({left: 0}, 300)
        })
    
        BtnClose.click(function () {
            mMenu.animate({left: '-100%'}, 300)
        })
    })


    /*
     swiper slide 구현 
     */
    const swiper = new Swiper('#main-slide', {
        loop: true,
        pagination: {
            el: '#main-slide .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#main-slide .swiper-button-next',
            prevEl: '#main-slide .swiper-button-prev',
        },
        autoplay: {
            delay: 3000, // 3초마다 자동 슬라이드
            disableOnInteraction: false,
        },
        
    });
}); //문서가 로드되면 실행