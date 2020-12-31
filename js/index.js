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
    })
});
