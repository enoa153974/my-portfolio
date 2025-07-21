import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, 'dist');

async function getHtmlFilePathList(dir) {
    let htmlFilePathList = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            htmlFilePathList = htmlFilePathList.concat(await getHtmlFilePathList(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            const relativePath = path.relative(directoryPath, fullPath);
            htmlFilePathList.push(relativePath);
        }
    }
    return htmlFilePathList;
}

async function replaceRelativePath() {
    try {
        const htmlFiles = await getHtmlFilePathList(directoryPath);
        for (const file of htmlFiles) {
            const fullPath = path.join(directoryPath, file);
            const relativePath = path.relative(directoryPath, fullPath);
            const relativePathArray = relativePath.split('/');
            let depth = null;
            if (1 < relativePathArray.length) {
                depth = '../'.repeat(relativePathArray.length - 1);
            } else {
                depth = './';
            }
            const content = await fs.readFile(fullPath, 'utf8');
            const modifiedContent = content
                .replace(/href="\/(.*?)"/g, `href="${depth}$1"`)
                .replace(/src="\/(.*?)"/g, `src="${depth}$1"`)
                .replace(/srcset="\/(.*?)"/g, `srcset="${depth}$1"`);
            await fs.writeFile(fullPath, modifiedContent, 'utf8');
        }
    } catch (error) {
        console.log(error);
    }
}

replaceRelativePath();
