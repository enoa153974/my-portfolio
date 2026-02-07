
export function worksFilter(){(() => {
        const allowed = ['web', 'menu', 'logo', 'illust','app'];
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('cat');

        const validCat = allowed.includes(cat) ? cat : null;

        // ギャラリーの表示切り替え
        const sections = document.querySelectorAll('[data-gallery-cat]');
        sections.forEach((sec) => {
            const sectionCat = sec.getAttribute('data-gallery-cat');
            if (!(sec instanceof HTMLElement)) return;
            sec.hidden = !!(validCat && sectionCat !== validCat);
        });

        // ナビの is-active 切り替え
        const navItems = document.querySelectorAll('[data-works-nav] .c-worksNav__item');
        navItems.forEach((li) => {
            const key = li.getAttribute('data-cat');
            const isActive = (!validCat && key === 'all') || (validCat && key === validCat);
            li.classList.toggle('is-active', isActive);
        });
    })();
}