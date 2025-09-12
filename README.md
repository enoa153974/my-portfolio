# aoi miyakeのポートフォリオ

## 概要
三宅　葵（miyake aoi）のポートフォリオサイトです。
初めまして、三宅葵です。
こちらのポートフォリオサイトでは、私のプロフィールや経歴、過去のお仕事内容や制作物をまとめてあります。
お仕事のご依頼は aoi.153974@gmail.com までお気軽にお問い合わせください。
TEl：070-9072-5657
公開URL: https://my-portfolio-tau-seven-74.vercel.app/

## 開発環境について
本プロジェクトは **Astro** をベースにした静的サイト構築環境です。  
ポートフォリオやLP制作など、納品物としての利用も想定して以下のような構成を採用しています。

### 技術スタック
- **Astro** 4.x  
- **React / Vue** コンポーネント統合（必要に応じて部分的に利用可能）  
- **Sass (SCSS)** によるスタイル管理  
- **Shiki** によるMarkdown構文ハイライト  
- **Vercel** を利用したホスティング／自動デプロイ

### ビルド・出力仕様
- **出力形式**: 静的HTML（`output: 'static'`）  
- **出力先**: `dist/`  
- **アセット管理**: 納品を意識し、カテゴリごとに整理  
  - JavaScript → `assets/scripts/main.min.js`  
  - CSS → `assets/styles/style.min.css`  
  - 画像 → `assets/images/[name].min.[ext]`  
  - フォント → `assets/fonts/[name].[ext]`  
- HTML圧縮は無効化（`compressHTML: false`）し、納品後もコードが可読可能な状態を維持  

### サーバー設定
- 開発時は `http://localhost:2000` で起動  
- 起動時にブラウザが自動的に開く設定  
- `site` パラメータは環境に応じて切り替え  
  - Production: `https://example.com`  
  - Development: `http://localhost:2000`

### SEO / その他
- **@astrojs/sitemap** によるサイトマップ自動生成  
- `trailingSlash: 'ignore'` によりURL末尾のスラッシュ差異を無視  

---

この構成により、**学習用途**から**実案件の納品**まで対応可能な柔軟性と再利用性を持たせています。


