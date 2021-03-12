jQuery(document).ready(function ($) {
    // $(".intro-title").addClass('intro-title--up');
    let titleOn = setInterval(function () {
        $(".intro-title").css('opacity', '1');
    }, 2000);
    let titleUp = setInterval(function () {
        $(".intro-title").css('transform', 'translateY(0)');
    }, 2300);
    let introContent = setInterval(function () {
        $(".intro-content").css('opacity', '1');
        $(".intro-content").css('transform', 'translateY(0)');
    }, 2500);
    let introBtn = setInterval(function () {
        $(".intro-btn").css('opacity', '1');
        $(".intro-btn").css('transform', 'translateY(0)');
    }, 2700);
    let introLogo = setInterval(function () {
        $(".intro-logo").css('opacity', '1');
        $(".intro-logo").css('transform', 'translateY(0)');
    }, 2900);
    $(".intro-btn").click(function() {
        $(".main-intro").css('display', 'none');
        $(".main-header").css('opacity', '1');
        $(".main-header").css('transform', 'translateY(0)');
        $(".global").css('opacity', '1');
        $(".home-page__btn").css('transform', 'translate(-50%, 0)');
        $(".home-logo").css('opacity', '1');
        $(".home__more-info").css('opacity', '1');
        $(".top").css('opacity', '1');
        $(".top").css('transform', 'translateY(0)');
        $(".bottom").css('opacity', '1');
        $(".bottom").css('transform', 'translateY(0)');
    })
});