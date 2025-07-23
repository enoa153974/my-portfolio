//これはindex.htmlに使用されるjs処理の実行をまとめたファイルです。

//以下の構文で他ファイルに定義された関数の処理を使いまわすことができる
import { hamburger } from './hamburger.js';
import { gallerySlider } from './gallerySlider.js';

//ui.jsからハンバーガーメニューのとタブメニューの関数をインポートする
window.addEventListener('DOMContentLoaded', () => {
    // HTML読み込みが終わったあとに実行される処理
    hamburger();
    gallerySlider();
    console.log('jsファイルの読み込みが完了しました！');
});
