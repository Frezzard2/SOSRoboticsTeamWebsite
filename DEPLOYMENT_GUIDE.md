# Deployment Guide for SOS Robotics Website

## 🚀 Deployment Overview

You're using:
- **Hosting**: Friend's server with KeyHelp control panel
- **Domain**: Recently purchased domain
- **Stack**: React + Vite application

## 📋 Pre-Deployment Checklist

### 1. Build the Website
```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build
```

This creates a `dist/` folder with all optimized files.

### 2. Environment Variables
Create a `.env.production` file with:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Your Google Analytics ID
```

Then rebuild:
```bash
npm run build
```

## 🔧 KeyHelp Deployment Steps

### Step 1: Access KeyHelp
1. Log into your KeyHelp control panel
2. Navigate to your domain's file manager or FTP settings

### Step 2: Upload Files

**Option A: Using KeyHelp File Manager**
1. Go to **File Manager** in KeyHelp
2. Navigate to your domain's root directory (usually `public_html` or `www`)
3. Upload all files from the `dist/` folder
4. Make sure the structure is:
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js
   │   ├── index-[hash].css
   │   └── ...
   ├── robots.txt
   ├── sitemap.xml
   └── ...
   ```

**Option B: Using FTP/SFTP**
1. Get FTP credentials from KeyHelp:
   - Go to **FTP Accounts** in KeyHelp
   - Note your FTP host, username, and password
2. Use an FTP client (FileZilla, WinSCP, etc.)
3. Connect to your server
4. Upload all files from `dist/` to `public_html/`

### Step 3: Configure Domain

1. In KeyHelp, go to **Domains** → Your Domain
2. Ensure the domain points to the correct directory
3. Set up SSL certificate (HTTPS):
   - KeyHelp usually has Let's Encrypt integration
   - Go to **SSL/TLS** → Request certificate
   - Enable "Force HTTPS" redirect

### Step 4: Configure Server (Important!)

Since this is a Single Page Application (SPA), you need to configure the server to handle client-side routing.

#### For Apache (if KeyHelp uses Apache):

Create or edit `.htaccess` file in `public_html/`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### For Nginx (if KeyHelp uses Nginx):

You'll need to configure this in KeyHelp's Nginx settings or ask your friend to add:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}

# Cache static assets
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

### Step 5: Update Meta Tags

Update `index.html` with your actual domain:
```html
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="twitter:url" content="https://yourdomain.com/" />
```

Also update `public/sitemap.xml` with your domain.

## ✅ Post-Deployment Checklist

### 1. Test the Website
- [ ] Visit your domain - does it load?
- [ ] Test navigation between pages
- [ ] Test language switching
- [ ] Test mobile responsiveness
- [ ] Test contact form (if Formspree is configured)
- [ ] Check Google Analytics is tracking

### 2. Verify SEO
- [ ] Check `robots.txt` is accessible: `https://yourdomain.com/robots.txt`
- [ ] Check `sitemap.xml` is accessible: `https://yourdomain.com/sitemap.xml`
- [ ] Test with Google Search Console
- [ ] Verify meta tags with browser dev tools

### 3. Performance Check
- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Check page load speed
- [ ] Verify images are loading
- [ ] Check mobile performance

### 4. Security
- [ ] HTTPS is enabled and working
- [ ] SSL certificate is valid
- [ ] Test form submission
- [ ] Check for console errors

## 🔄 Updating the Website

When you make changes:

1. **Local Development:**
   ```bash
   npm run dev  # Test locally
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Upload:**
   - Delete old files in `public_html/` (or use KeyHelp file manager)
   - Upload new files from `dist/` folder
   - Clear any caching if KeyHelp has caching enabled

## 🛠️ KeyHelp-Specific Tips

### File Permissions
- Files: `644` (rw-r--r--)
- Folders: `755` (rwxr-xr-x)
- KeyHelp usually sets these automatically, but check if you have issues

### PHP Settings (if needed)
- KeyHelp might have PHP settings that don't affect your React app
- Your app doesn't need PHP, but ensure `.htaccess` works

### Database
- You don't need a database for this static React app
- All data is in the `src/data/` files

### Backups
- Use KeyHelp's backup feature to backup your `public_html/` folder
- Or manually download the `dist/` folder before updates

## 🐛 Troubleshooting

### Issue: 404 errors on page refresh
**Solution**: Ensure `.htaccess` (Apache) or Nginx config is set up correctly for SPA routing.

### Issue: Assets not loading
**Solution**: 
- Check file paths are correct
- Ensure all files from `dist/` are uploaded
- Check browser console for 404 errors

### Issue: Language not persisting
**Solution**: Check that `localStorage` is working (should work automatically).

### Issue: Form not submitting
**Solution**: 
- Check Formspree ID is correct in `Contact.tsx`
- Check browser console for errors
- Verify CORS settings if needed

### Issue: Google Analytics not working
**Solution**:
- Verify `VITE_GA_MEASUREMENT_ID` is set in build
- Check browser console for GA errors
- Verify domain is allowed in GA settings

## 📞 Need Help?

If you encounter issues:
1. Check browser console (F12) for errors
2. Check KeyHelp error logs
3. Verify all files are uploaded correctly
4. Test with a simple `index.html` first to ensure server works

## 🎉 Next Steps After Deployment

1. **Submit to Google Search Console**
   - Add your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Set up Google Analytics**
   - Verify tracking is working
   - Set up goals if needed

3. **Social Media**
   - Update social media profiles with new website link
   - Share the website!

4. **Monitor**
   - Check analytics regularly
   - Monitor for errors
   - Keep content updated

---

**Good luck with your deployment! 🚀**

