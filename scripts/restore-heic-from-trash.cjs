#!/usr/bin/env node

/**
 * Restore HEIC files from Trash to gallery/original folder
 * 
 * Usage: node scripts/restore-heic-from-trash.cjs
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetFolder = path.join(process.cwd(), 'public', 'gallery', 'original');

// Ensure target folder exists
if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder, { recursive: true });
  console.log(`✅ Created folder: ${targetFolder}`);
}

// Try to find HEIC files in Trash
const trashPaths = [
  path.join(process.env.HOME, '.Trash'),
  path.join(process.env.HOME, 'Library', 'Mobile Documents', 'com~apple~CloudDocs', '.Trash'),
];

let foundFiles = [];

for (const trashPath of trashPaths) {
  if (fs.existsSync(trashPath)) {
    try {
      const files = fs.readdirSync(trashPath);
      const heicFiles = files.filter(file => 
        file.toLowerCase().endsWith('.heic') || file.toLowerCase().endsWith('.heif')
      );
      
      if (heicFiles.length > 0) {
        console.log(`\n📁 Found ${heicFiles.length} HEIC file(s) in: ${trashPath}`);
        heicFiles.forEach(file => {
          foundFiles.push({
            name: file,
            path: path.join(trashPath, file)
          });
        });
      }
    } catch (error) {
      // Skip if we can't access this trash folder
    }
  }
}

if (foundFiles.length === 0) {
  console.log('\n❌ No HEIC files found in Trash folders.');
  console.log('\n💡 Manual restoration:');
  console.log('   1. Open Finder');
  console.log('   2. Go to Trash (Cmd+Shift+Delete)');
  console.log('   3. Select all HEIC files');
  console.log('   4. Right-click → "Put Back" or drag to:');
  console.log(`      ${targetFolder}`);
  process.exit(0);
}

console.log(`\n🔄 Found ${foundFiles.length} HEIC file(s) to restore:`);
foundFiles.forEach((file, index) => {
  console.log(`   ${index + 1}. ${file.name}`);
});

console.log(`\n📦 Restoring to: ${targetFolder}\n`);

let restored = 0;
let skipped = 0;

foundFiles.forEach((file) => {
  const targetPath = path.join(targetFolder, file.name);
  
  if (fs.existsSync(targetPath)) {
    console.log(`⏭️  Skipped ${file.name} (already exists)`);
    skipped++;
    return;
  }
  
  try {
    // Copy file from trash to target folder
    fs.copyFileSync(file.path, targetPath);
    console.log(`✅ Restored: ${file.name}`);
    restored++;
  } catch (error) {
    console.error(`❌ Failed to restore ${file.name}: ${error.message}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Restored: ${restored} file(s)`);
console.log(`   Skipped: ${skipped} file(s) (already exist)`);
console.log(`\n✨ Done! Files are now in: ${targetFolder}`);
console.log(`\n💡 Next step: Run 'npm run optimize-images gallery' to convert them to WebP\n`);

