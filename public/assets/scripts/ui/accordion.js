import { qsa, hasClass, addClass, removeClass } from './utils.js';

export function accordion() {
    const accordionButtons = qsa('.accordion__btn');

    accordionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const container = button.closest('.accordion');
            const isOpen = hasClass(content, 'is-open');

            // すべて閉じる
            qsa('.accordion__content').forEach((c) => {
                removeClass(c, 'is-open');
                c.style.maxHeight = null;
                removeClass(c.closest('.accordion'), 'open'); // ←ここ追加
            });

            // 押されたものを開く
            if (!isOpen) {
                addClass(content, 'is-open');
                addClass(container, 'open'); // ←ここ追加
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}
