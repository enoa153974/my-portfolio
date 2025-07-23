/* header、footerの各ナビの
・<a href={siteData.example.path} class={currentPath === '/example' ? 'is-active' : ''}>価格・スペック</a>  と
・page.astroの const currentPath = '/';  の該当ID名を書き換えして使用することで自動的に各ページを判別 + metaデータの自動入力 */

export default {
    home: {
        title: 'aoi miyake’s Atelier | 三宅葵のポートフォリオサイト',
        description: '三宅葵のポートフォリオサイトです。デザインを中心にさまざまな作品を掲載しています。',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'website',
        path: '/'
    },
    about: {
        title: 'aboutページ',
        description: 'aboutページの説明文です',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/about'
    },
    works: {
        title: 'worksページ',
        description: 'worksページの説明文です',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/works'
    },
    contact: {
        title: 'contactページ',
        description: 'contactページの説明文です',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/contact'
    },
};
