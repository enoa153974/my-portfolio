export function gallerySlider() {
    window.addEventListener('load', () => {
        const $target = $('.autoplay');

        if ($target.length) {
            $target.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                autoplay: false,
                dots: true,
                arrows: true,
                accessibility: false,

                prevArrow: `
                    <button type="button" class="slider__arrow slider__arrow--prev" aria-label="前へ">
                        <span></span>
                    </button>
                `,
                nextArrow: `
                    <button type="button" class="slider__arrow slider__arrow--next" aria-label="次へ">
                        <span></span>
                    </button>
                `,



                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
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
