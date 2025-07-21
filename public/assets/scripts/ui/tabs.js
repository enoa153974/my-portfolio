import { qsa, removeClass, addClass } from './utils.js';
//タブメニューの処理
//タブメニューのボタンには.tab-buttonクラス、タブパネルには.tab-panelクラスを付与して使用する
//タブメニューのボタンをクリックすると、.activeクラスが付与され、タブパネルが表示される
export function initTabs() {
    const tabButtons = qsa('.tab__button');
    const tabPanels = qsa('.tab__panel');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            tabButtons.forEach((btn) => removeClass(btn, 'active'));
            tabPanels.forEach((panel) => removeClass(panel, 'active'));
            addClass(button, 'active');
            addClass(tabPanels[index], 'active');
        });
    });
}
