#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script helps optimize images for the website.
 * Supports: JPG, JPEG, PNG, WebP, HEIC, HEIF
 * 
 * Prerequisites:
 * 1. Install Sharp: npm install sharp --save-dev
 * 2. For HEIC/HEIF support, ensure libvips with HEIF support is installed:
 *    - macOS: 
 *        brew install libheif
 *        brew install vips --with-heif
 *        OR: brew install vips (if HEIF support is included by default)
 *    - Linux: sudo apt-get install libvips-dev libheif-dev
 * 3. Place original images in public/[folder]/original/
 * 4. Run: node scripts/optimize-images.cjs [folder]
 * 
 * Example:
 *   node scripts/optimize-images.cjs gallery
 *   node scripts/optimize-images.cjs robots
 *   node scripts/optimize-images.cjs team
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('❌ Error: Sharp is not installed.');
  console.log('📦 Install it with: npm install sharp --save-dev');
  process.exit(1);
}

// Configuration
const config = {
  gallery: {
    thumbnail: { width: 400, quality: 80, suffix: '-thumb' },
    full: { width: 1200, quality: 85, suffix: '' }
  },
  robots: {
    thumbnail: { width: 400, quality: 80, suffix: '-thumb' },
    full: { width: 1600, quality: 85, suffix: '' }
  },
  team: {
    thumbnail: { width: 400, quality: 80, suffix: '-thumb' },
    full: { width: 800, quality: 85, suffix: '' }
  },
  sponsors: {
    thumbnail: { width: 400, quality: 80, suffix: '-thumb' },
    full: { width: 400, quality: 85, suffix: '' }
  }
};

// Get folder from command line argument
const folder = process.argv[2];

if (!folder) {
  console.error('❌ Please specify a folder name.');
  console.log('Usage: node scripts/optimize-images.js [folder]');
  console.log('Example: node scripts/optimize-images.js gallery');
  process.exit(1);
}

if (!config[folder]) {
  console.error(`❌ Unknown folder: ${folder}`);
  console.log('Available folders: gallery, robots, team, sponsors');
  process.exit(1);
}

const folderConfig = config[folder];
const originalPath = path.join(process.cwd(), 'public', folder, 'original');
const outputPath = path.join(process.cwd(), 'public', folder);

// Check if original folder exists
if (!fs.existsSync(originalPath)) {
  console.error(`❌ Original folder not found: ${originalPath}`);
  console.log(`💡 Create the folder and add your original images there.`);
  process.exit(1);
}

// Get all image files
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif'];
const files = fs.readdirSync(originalPath).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return imageExtensions.includes(ext);
});

if (files.length === 0) {
  console.error(`❌ No images found in ${originalPath}`);
  process.exit(1);
}

console.log(`\n🖼️  Found ${files.length} image(s) to optimize...\n`);

// Process each image
let processed = 0;
let totalOriginalSize = 0;
let totalOptimizedSize = 0;

// Helper function to convert HEIC to JPG using macOS sips (fallback)
function convertHeicToJpg(inputPath, outputPath) {
  const { execSync } = require('child_process');
  try {
    // Use sips to convert HEIC to JPEG
    execSync(`sips -s format jpeg -s formatOptions 80 "${inputPath}" --out "${outputPath}"`, {
      stdio: 'pipe',
      encoding: 'utf8'
    });
    // Verify the output file was created
    if (fs.existsSync(outputPath)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(`   ⚠️  sips conversion error: ${error.message}`);
    return false;
  }
}

async function optimizeImage(filename) {
  const inputPath = path.join(originalPath, filename);
  const baseName = path.basename(filename, path.extname(filename));
  const ext = path.extname(filename).toLowerCase();
  
  // Get original file size
  const originalStats = fs.statSync(inputPath);
  totalOriginalSize += originalStats.size;
  
  let actualInputPath = inputPath;
  let isHeicConverted = false;
  const tempJpgPath = path.join(originalPath, `${baseName}_temp.jpg`);
  
  // For HEIC files on macOS, always convert to JPG first using sips (more reliable)
  if ((ext === '.heic' || ext === '.heif') && process.platform === 'darwin') {
    console.log(`   🔄 Converting ${filename} (HEIC) to JPG using sips...`);
    if (convertHeicToJpg(inputPath, tempJpgPath)) {
      if (fs.existsSync(tempJpgPath)) {
        actualInputPath = tempJpgPath;
        isHeicConverted = true;
        console.log(`   ✅ HEIC converted to JPG successfully`);
      } else {
        console.error(`   ❌ HEIC conversion failed - output file not created`);
        return; // Skip this file and continue with others
      }
    } else {
      console.error(`   ❌ HEIC conversion failed - sips command returned error`);
      return; // Skip this file and continue with others
    }
  }
  
  try {
    // Load image with Sharp
    let image = sharp(actualInputPath);
    
    // Auto-rotate based on EXIF orientation data (important for HEIC conversions)
    image = image.rotate();
    
    // Create full-size optimized image (convert to WebP)
    const fullOutputPath = path.join(outputPath, `${baseName}.webp`);
    await image
      .clone()
      .resize(folderConfig.full.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: folderConfig.full.quality })
      .toFile(fullOutputPath);
    
    const fullStats = fs.statSync(fullOutputPath);
    totalOptimizedSize += fullStats.size;
    
    // Create thumbnail if needed
    if (folderConfig.thumbnail.width !== folderConfig.full.width) {
      const thumbOutputPath = path.join(outputPath, `${baseName}${folderConfig.thumbnail.suffix}.webp`);
      await image
        .clone()
        .rotate() // Auto-rotate based on EXIF orientation
        .resize(folderConfig.thumbnail.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: folderConfig.thumbnail.quality })
        .toFile(thumbOutputPath);
      
      const thumbStats = fs.statSync(thumbOutputPath);
      totalOptimizedSize += thumbStats.size;
    }
    
    // Clean up temporary JPG if we created one
    if (isHeicConverted && fs.existsSync(actualInputPath)) {
      fs.unlinkSync(actualInputPath);
    }
    
    processed++;
    const reduction = ((1 - fullStats.size / originalStats.size) * 100).toFixed(1);
    const formatInfo = ext === '.heic' || ext === '.heif' ? ' (HEIC→WebP)' : '';
    console.log(`✅ ${filename} → ${(fullStats.size / 1024).toFixed(1)} KB (${reduction}% smaller)${formatInfo}`);
    
  } catch (error) {
    // Clean up temporary JPG if we created one
    if (isHeicConverted && fs.existsSync(actualInputPath)) {
      fs.unlinkSync(actualInputPath);
    }
    
    console.error(`❌ Error processing ${filename}:`, error.message);
    if (ext === '.heic' || ext === '.heif') {
      console.error(`\n   ⚠️  HEIC/HEIF support issue detected.`);
      console.error(`   💡 To fix on macOS, try:`);
      console.error(`      1. brew install libheif`);
      console.error(`      2. brew reinstall vips`);
      console.error(`   💡 After reinstalling vips, rebuild sharp:`);
      console.error(`      npm rebuild sharp`);
      console.error(`   💡 Or manually convert HEIC files first using:`);
      console.error(`      sips -s format jpeg -s formatOptions 80 "${filename}" --out "${baseName}.jpg"`);
      console.error(`      (then rename .jpg files back to original names)\n`);
    }
  }
}

// Process all images
(async () => {
  for (const file of files) {
    await optimizeImage(file);
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Processed: ${processed} image(s)`);
  console.log(`   Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total reduction: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log(`\n✨ Optimization complete! Check: public/${folder}/\n`);
})();

