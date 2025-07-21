export function gallerySlider() {
    window.addEventListener('load', () => {
        const $target = $('.autoplay');

        if ($target.length) {
            $target.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                autoplay: false,
                dots: true,
                arrows: false,
                accessibility: false, 
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            variableWidth: false
                        }
                    }
                ]
            });

            setTimeout(() => {
                console.log('追加後のクラス：', $target.attr('class'));
            }, 100);
        } else {
            console.warn('.autoplay 要素が見つかりませんでした');
        }
    });
}
