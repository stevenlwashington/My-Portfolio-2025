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
    
    // Zoom in more - use 60% of the width for a tighter crop on face/shoulders
    const cropSize = Math.floor(width * 0.6);
    const cropHeight = Math.floor(cropSize * 1.15);
    
    // Center horizontally, position near top for face
    const left = Math.floor((width - cropSize) / 2);
    const top = Math.floor(height * 0.05); // Start slightly below top

    await image
      .extract({
        left: left,
        top: top,
        width: cropSize,
        height: cropHeight
      })
      .resize(512, 588, {
        fit: 'cover',
        position: 'center'
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
