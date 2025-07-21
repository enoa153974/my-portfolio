//これはよく使うDOM操作をまとめたファイルです。

//セレクタを取得して返す系のDOM操作
//【const 変数名 = qs('クラス名');】でセレクタを取得して返す
//【const 変数名 = qsa('クラス名');】でセレクタを取得して配列に変換して返す
export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

export function qsa(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

//クラスの付けはずし系のDOM操作
//指定した要素(element)に対して、classNameを付けたり外したりする関数
//【toggleClass(element, className) 】で使用
export function toggleClass(element, className) {
    element.classList.toggle(className);
}

//指定した要素(element)に対して、classNameを付ける関数（こっちはつけるのみ）
//【addClass(element, className) 】で使用
export function addClass(element, className) {
    element.classList.add(className);
}

// 新しい要素(element)を作成する関数
//tagNameの要素をclassNameかtextを付けて作成する（tagName,）className or text)
//【createElement(element, className か text) 】で使用
export function createElement(tagName, className = '', text = '') {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
}

//指定した要素(element)に対して、classNameを外す関数（こっちは外すのみ）
//【removeClass(element, className) 】で使用
export function removeClass(element, className) {
    element.classList.remove(className);
}

// 指定要素に特定のクラスが含まれているかを判定する関数
//【hasClass(content, 'is-open');】で使用
export function hasClass(element, className) {
    return element.classList.contains(className);
}

//スムーススクロールをさせる処理
/* 使用時は
    const scrollOffset = {
        pc: 数値,
        sp: 数値
    };
を定義してから、
【smoothScrollToTarget('#section2', scrollOffset;】で使用*/

export function smoothScrollToTarget(selector, offset = { pc: 101, sp: 70 }) {
    const target = document.querySelector(selector); //対象の要素を取得
    if (!target) return;

    const isMobile = window.innerWidth <= 768;
    const headerOffset = isMobile ? offset.sp : offset.pc; //モバイルかどうか判別し、オフセット量を決定

    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset; //対象要素の位置をページ全体のスクロール位置で取得

    window.scrollTo({
        //アニメーション付きで決定した位置までスクロールさせる処理
        top: offsetPosition,
        behavior: 'smooth'
    });
}
