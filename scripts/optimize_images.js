const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../Images');
const outputDir = path.join(__dirname, '../Images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

const image = 'Home_Screen.jpg';
const inputPath = path.join(inputDir, image);
const outputPath = path.join(outputDir, 'Home_Screen.webp');

sharp(inputPath)
    .resize({ width: 600 }) // Resize to a reasonable width for mobile/web
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(info => {
        console.log('Image optimized:', info);
    })
    .catch(err => {
        console.error('Error optimizing image:', err);
    });
