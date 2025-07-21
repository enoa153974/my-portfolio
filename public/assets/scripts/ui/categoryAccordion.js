import { qsa, hasClass, addClass, removeClass } from './utils.js';

export function categoryAccordion() {
    const faqButtons = qsa('.faq__button');

    faqButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const container = button.closest('.faq');
            const icon = button.querySelector('.faq__toggle-icon');
            const isOpen = hasClass(container, 'is-open');

            // すべて閉じる
            qsa('.faq').forEach((faq) => {
                const c = faq.querySelector('.faq__content');
                const btn = faq.querySelector('.faq__button');
                const icn = faq.querySelector('.faq__toggle-icon');

                removeClass(faq, 'is-open');
                c.style.maxHeight = null;
                btn.setAttribute('aria-expanded', 'false');
                if (icn) icn.textContent = '＋'; // ←ここで閉じたら＋にする
            });

            // 押されたものだけ開く
            if (!isOpen) {
                addClass(container, 'is-open');
                content.style.maxHeight = content.scrollHeight + 'px';
                button.setAttribute('aria-expanded', 'true');
                if (icon) icon.textContent = '－'; // ←開いたら−にする
            }
        });
    });
}