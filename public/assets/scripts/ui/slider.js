export function initSlider() {
    $(document).ready(function () {
        //コンソールログデバッグ用
        const $target = $('.slider__track');
        console.log('スライダー対象：', $target);

        if ($target.length === 0) {
            console.error('⚠ スライダー対象が見つかりませんでした！');
            return;
        }

        $('.autoplay').slick({
            slidesToShow: 3, // PC時は3枚表示
            slidesToScroll: 1, // スクロール時に1枚ずつ動かす
            variableWidth: false, // 幅はCSS任せにせず等分する
            autoplay: false, // ← 自動再生なし。
            dots: true, // 下部のドットナビゲーションを表示
            arrows: true, // 左右の矢印を表示
            prevArrow: '.slick-prev',
            nextArrow: '.slick-next',
            responsive: [
                {
                    breakpoint: 768, // 767px以下の画面幅になったら
                    settings: {
                        slidesToShow: 1, // スライドを1枚ずつ表示
                        variableWidth: false // ← SPではCSSの幅無視して自動調整。これ超重要！
                        // ※これが無いと、variableWidth:true のままで表示が崩れる！
                    }
                }
            ]
        });

        // slickにクラスが追加されたか確認
        setTimeout(() => {
            console.log('追加後のクラス：', $target.attr('class'));
        }, 100);
    });
}
