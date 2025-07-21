/* header、footerの各ナビの
・<a href={siteData.example.path} class={currentPath === '/example' ? 'is-active' : ''}>価格・スペック</a>  と
・page.astroの const currentPath = '/';  の該当ID名を書き換えして使用することで自動的に各ページを判別 + metaデータの自動入力 */

export default {
    home: {
        title: 'サイトタイトル',
        description: 'サイトタイトルの説明文です',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'website',
        path: '/'
    },
    sample: {
        title: '下層サンプルページ１',
        description: '下層サンプルページの説明文です',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/sample'
    },
    faq: {
        title: '下層サンプルページ２',
        description: '投稿一覧ページの説明文です',
        ogpImage: '/assets/images/ogp_default.png',
        type: 'article',
        path: '/faq'
    }
};
