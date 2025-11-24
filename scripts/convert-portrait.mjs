import heicConvert from 'heic-convert';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function convertAndCropPortrait() {
  const inputPath = path.join(__dirname, '../attached_assets/IMG_8980_1764013112976.HEIC');
  const outputPath = path.join(__dirname, '../attached_assets/generated_images/steven_portrait.png');

  try {
    console.log('Reading HEIC file...');
    const inputBuffer = fs.readFileSync(inputPath);

    console.log('Converting HEIC to PNG...');
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'PNG',
      quality: 1
    });

    console.log('Processing image with sharp...');
    const image = sharp(outputBuffer);
    const metadata = await image.metadata();
    
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

    const width = metadata.width;
    const height = metadata.height;
    const cropSize = Math.min(width, height);
    
    const left = Math.floor((width - cropSize) / 2);
    const top = 0;

    await image
      .extract({
        left: left,
        top: top,
        width: cropSize,
        height: Math.floor(cropSize * 1.2)
      })
      .resize(512, 614, {
        fit: 'cover',
        position: 'top'
      })
      .toFile(outputPath);

    console.log(`Portrait saved to: ${outputPath}`);
    console.log('Conversion complete!');
  } catch (error) {
    console.error('Error converting portrait:', error);
    process.exit(1);
  }
}

convertAndCropPortrait();
