/* header、footerの各ナビの
・<a href={siteData.example.path} class={currentPath === '/example' ? 'is-active' : ''}>価格・スペック</a>  と
・page.astroの const currentPath = '/';  の該当ID名を書き換えして使用することで自動的に各ページを判別 + metaデータの自動入力 */

export default {
    home: {
        title: 'Aoi Miyake’s Atelier｜三宅葵のポートフォリオ – グラフィック/WEBデザイン',
        description: '三宅葵のポートフォリオ。ロゴ・バナー・LP・WEBサイト制作、イラスト、動画編集まで一貫対応。顧客のイメージを言語化し、成果につながるデザインをご提案します。',
        ogpImage: '/assets/images/ogp_image.jpg',
        type: 'website',
        path: '/'
    },
    about: {
        title: 'プロフィール｜三宅葵 – デザイナー/マルチクリエイター',
        description: '三宅葵の自己紹介。飲食×販促の実務経験を活かし、課題の整理からデザイン/実装まで伴走。得意領域：ロゴ、販促物、WEBコーディング(HTML/CSS/JS/Astro)、イラスト、動画編集。',
        ogpImage: '/assets/images/ogp_image.jpg',
        type: 'article',
        path: '/about'
    },
    works: {
        title: '制作実績｜ロゴ・バナー・LP・WEBサイト・イラスト',
        description: '制作実績一覧。ロゴ/VI、バナー/サムネ、LP/WEBサイト、イラスト、動画など多ジャンルを掲載。目的と成果、制作プロセス、使用ツール(Photoshop/Illustrator/Figma/HTML/CSS/JS)を明記。',
        ogpImage: '/assets/images/ogp_image.jpg',
        type: 'article',
        path: '/works'
    },
    columns: {
        title: 'コラム｜記事・まとめ – Aoi Miyake’s Atelier',
        description: 'コラム、デザインのポイント、まとめなどの記事一覧。趣味などのお話もつれづれなるままに。',
        ogpImage: '/assets/images/ogp_image.jpg',
        type: 'article',
        path: '/columns'
    },
    contact: {
        title: 'お問い合わせ｜ご相談・お見積り – Aoi Miyake’s Atelier',
        description: 'デザイン/WEB制作のご相談・お見積りはこちら。用途・納期・ご予算をお知らせください。',
        ogpImage: '/assets/images/ogp_image.jpg',
        type: 'article',
        path: '/contact'
    },
};
