$(document).ready(function () {

    // 모바일 햄버거 메뉴 토글
    $(".hamburger-checkbox").click(function () {
        if ($(this).prop("checked") == true) {
            $(".nav-hamburger").css("display", "block");
        } else {
            $(".nav-hamburger").css("display", "");
        }
    });

    // 모바일 햄버거 메뉴 중복 방지
    $(".sub-nav-hamburger-checkbox").click(function (){
        $(".sub-nav-hamburger-checkbox").not(this).prop('checked', false);  
    });

    $("#icon_naver_1").click(function(){
        alert('네이버1')
    });

    $("#icon_kakao").click(function(){
        alert('카카오')
    });

    $("#icon_naver_2").click(function(){
        alert('네이버2')
    });

    // 슬라이드 VEGAS
    $(".main-background").vegas({
        timer: false,
        slides: [
            { src: "images/slide-1.jpg" },
            { src: "images/slide-2.jpg" },
            { src: "images/slide-3.jpg" },
            { src: "images/slide-4.jpg" }
        ]
    });
    
});
