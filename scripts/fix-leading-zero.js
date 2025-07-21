// scripts/fix-leading-zero.js
import fs from 'fs';
import path from 'path';

const filePath = './dist/assets/style/main.css';

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // 0.7rem → .7rem, 0.5em → .5em, 0.25px → .25px など
    content = content.replace(/\b0+(\.\d+)([a-z%]*)\b/g, '$1$2');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✔ ${filePath} のゼロを削除しました`);
} else {
    console.warn(`⚠ CSSファイルが見つかりません: ${filePath}`);
}
