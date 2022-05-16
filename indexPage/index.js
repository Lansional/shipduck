
// 위로 올리는 함수
function scrollToTop() {
    //스크롤 속도를 빠르게 하려면 이동 간격 시간을 줄이거나, 이동 크기 픽셀을 늘리면 됩니다.
    var between = 16; // 이동 간격 시간
    var scroll = window.setInterval(function () {
        var pos = window.pageYOffset;
        var step = 50; // 이동 크기 픽셀
        if (pos > 0) {
            window.scrollTo(0, pos - step);
        } else {
            window.clearInterval(scroll);
        }
    }, between);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('scrollUp').addEventListener('click', function () {
        scrollToTop();
    });
});