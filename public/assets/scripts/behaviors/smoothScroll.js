import { qsa } from '../ui/utils.js';
import { smoothScrollToTarget } from '../ui/utils.js';

// ヘッダーアンカーリンクのスムーススクロールの処理
export function initSmoothAnchorScroll() {
    const scrollOffset = {
        pc: 101, //PC表示のヘッダーの高さ
        sp: 70 //SP表示のヘッダーの高さ
    };

    const anchorLinks = qsa('a[href^="#"]');

    anchorLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                smoothScrollToTarget(href, scrollOffset);
            }
        });
    });
}

//ページ下層に配置したscrollbuttonを押すとページトップに戻る処理
export function scrollToTopBtn() {
    const scrollOffset = {
        pc: 101,
        sp: 70
    };

    const topButton = document.getElementById('scrollToTopBtn');
    if (!topButton) return;

    // クリック処理
    topButton.addEventListener('click', () => {
        smoothScrollToTarget('html', scrollOffset);
    });

    // 表示制御
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topButton.classList.add('is-visible');
        } else {
            topButton.classList.remove('is-visible');
        }
    });
}