//これはindex.htmlに使用されるjs処理の実行をまとめたファイルです。

//以下の構文で他ファイルに定義された関数の処理を使いまわすことができる
import { hamburger } from './hamburger.js';
import { gallerySlider } from './gallerySlider.js';
// AOSの読み込み
import AOS from 'aos';
import 'aos/dist/aos.css';

//ui.jsからハンバーガーメニューのとタブメニューの関数をインポートする
window.addEventListener('DOMContentLoaded', () => {
    // HTML読み込みが終わったあとに実行される処理
    hamburger();
    gallerySlider();
    // 初期化
    AOS.init({
        once: true,      // 一度だけアニメ
        duration: 600,   // アニメ速度(ms)
    });
    console.log('jsファイルの読み込みが完了しました！');
});
