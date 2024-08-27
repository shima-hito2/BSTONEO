$(document).ready(function(){
    let currentIndex = 0;
    const images = $('.top img');
    const imageCount = images.length;

    function showNextImage() {
        images.eq(currentIndex).fadeOut(1000);
        currentIndex = (currentIndex + 1) % imageCount;
        images.eq(currentIndex).fadeIn(1000);
    }

    setInterval(showNextImage, 3000); // 3秒ごとに画像を切り替える
});