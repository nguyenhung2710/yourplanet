jQuery(document).ready(function ($) {
    // Intro
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
        $(".home-page__btn").css('opacity', '1');
        $(".home-page__btn").css('transform', 'translate(-50%, 0)');
        $(".home-logo").css('opacity', '1');
        $(".home__more-info").css('opacity', '1');
        $(".top").css('opacity', '1');
        $(".top").css('transform', 'translateY(0)');
        $(".bottom").css('opacity', '1');
        $(".bottom").css('transform', 'translateY(0)');
        $(".viewport__animation-item").css('transform', 'translate(0, 0)');
        $(".viewport__animation-item").css('opacity', '1');
        $(".viewport__descript-btn").css('opacity', '1');
    });
    
    // Notification
    $(".home-page__notification").click(function() {
        $(".main-notification").css('visibility', 'inherit');
        $(".main-notification").css('opacity', '1');
        $(".main-notification").css('pointer-events', 'all');
        $(".main-notification").css('transition', 'all 0.5s');
        $(".notification-bg__item").css('animation-name', 'showNotifi');
        $(".notification-bg__item").css('animation-duration', '0.5s');
        $(".notification-bg__item").css('animation-delay', '0.3s');
        $(".notification-item").css('animation-name', 'showContent');
        $(".notification-bg__pulse").css('animation-name', 'showPulse');
    });
    $(".notification-btn").click(function() {
        $(".main-notification").css('visibility', 'hidden');
        $(".main-notification").css('opacity', '0');
        $(".main-notification").css('pointer-events', 'none');
        $(".main-notification").css('transition', 'all 0.7s');
        $(".notification-bg__item").css('animation-name', 'hideNotifi');
        $(".notification-bg__item").css('animation-duration', '0.8s');
        $(".notification-bg__item").css('animation-delay', '0s');
        $(".notification-item").css('animation-name', 'hideContent');
        $(".notification-bg__pulse").css('animation-name', 'hidePulse');
    })

    //More info
    $(".home__more-info").click(function() {
        $(".main-more").css('visibility', 'inherit');
        $(".main-more").css('opacity', '1');
        $(".main-more").css('pointer-events', 'all');
        $(".main-more").css('transition', 'all 0.5s');
        $(".more-bg__item").css('animation-name', 'showNotifi');
        $(".more-bg__item").css('animation-duration', '0.5s');
        $(".more-bg__item").css('animation-delay', '0.3s');
        $(".more-item").css('animation-name', 'showContent');
        $(".more-item").css('animation-delay', '0.6s');
        $(".more-bg__pulse").css('animation-name', 'showPulse');
    });
    $(".more-btn").click(function() {
        $(".main-more").css('visibility', 'hidden');
        $(".main-more").css('opacity', '0');
        $(".main-more").css('pointer-events', 'none');
        $(".main-more").css('transition', 'all 1.5s');
        $(".more-bg__item").css('animation-name', 'hideMore');
        $(".more-bg__item").css('animation-duration', '0.8s');
        $(".more-bg__item").css('animation-delay', '0s');
        $(".more-item").css('animation-name', 'hideContent');
        $(".more-item").css('animation-delay', '0s');
        $(".more-bg__pulse").css('animation-name', 'hidePulse');
    })

    //Mo.js
    const stuff = new mojs.Shape({
        parent: '#viewport1',
        isShowStart: true,
        stroke: '#ceead6',
        strokeWidth: 2, // Độ rộng border
        fill: 'none',
        radius: { 70: 85 }, //Độ rộng của vòng
        opacity: { 1: 0 },
        duration: 800,
        delay: 1000,
        repeat: 999999999999999999999999999999999999999999999999999999999999999999,
        // top: '128px',
        // left: '438px',
        // radius: { 85: 85 },
        // opacity: { 1: 1 },
    }).play();
    const water = new mojs.Shape({
        parent: '#viewport2',
        isShowStart: true,
        stroke: '#d2e3fc',
        strokeWidth: 2, // Độ rộng border
        fill: 'none',
        radius: { 70: 85 }, //Độ rộng của vòng
        opacity: { 1: 0 },
        duration: 800,
        delay: 1000,
        repeat: 999999999999999999999999999999999999999999999999999999999999999999,
    }).play();
    const food = new mojs.Shape({
        parent: '#viewport3',
        isShowStart: true,
        stroke: '#f8d2ce',
        strokeWidth: 2, // Độ rộng border
        fill: 'none',
        radius: { 70: 85 }, //Độ rộng của vòng
        opacity: { 1: 0 },
        duration: 800,
        delay: 1000,
        repeat: 999999999999999999999999999999999999999999999999999999999999999999,
    }).play();
    const energy = new mojs.Shape({
        parent: '#viewport4',
        isShowStart: true,
        stroke: '#ffefc3',
        strokeWidth: 2, // Độ rộng border
        fill: 'none',
        radius: { 70: 85 }, //Độ rộng của vòng
        opacity: { 1: 0 },
        duration: 800,
        delay: 1000,
        repeat: 999999999999999999999999999999999999999999999999999999999999999999,
    }).play();
});