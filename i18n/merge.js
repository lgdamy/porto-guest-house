const fs = require('fs-extra');
const path = require('path');

const inputDir = path.join(__dirname, '.');
const outputDir = path.join(__dirname, '../src/assets/i18n');

fs.ensureDirSync(outputDir);

fs.readdirSync(inputDir);

console.log('Iniciando merge de traducoes');
fs.readdirSync(inputDir).forEach((lang) => {
    const langDir = path.join(inputDir, lang);
    if (fs.lstatSync(langDir).isDirectory()) {
        let merged = {};
        fs.readdirSync(langDir).forEach((file) => {
            if (file.endsWith('.json')) {
                const filePath = path.join(langDir, file);
                console.log('lendo: ', filePath);
                const content = fs.readJsonSync(filePath);
                const key = path.basename(file, '.json');
                merged[key] = content;
            }
        });
        fs.writeJsonSync(path.join(outputDir, `${lang}.json`), merged, { spaces: 2 });
    }
});