# SOS Robotics Team Website

A modern, multi-language website for SOS Robotics Team participating in RoboCup Rescue League.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` folder, ready to upload to your server.

### Preview Production Build
```bash
npm run preview
```

## 📦 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions using KeyHelp.

## 🌐 Features

- ✅ Multi-language support (English, Hungarian, German)
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with structured data (JSON-LD)
- ✅ Code splitting & lazy loading
- ✅ Google Analytics integration
- ✅ PWA support (Progressive Web App)
- ✅ Modern Apple-style design
- ✅ Image lightbox with touch gestures
- ✅ Enhanced form validation
- ✅ RSS feed for blog
- ✅ Social sharing buttons
- ✅ Newsletter signup
- ✅ FAQ section
- ✅ Privacy policy page
- ✅ Robot comparison tool
- ✅ Timeline and testimonials
- ✅ Touch gesture support

## 📖 Dokumentáció

- **[TELJES_TUTORIAL.md](./TELJES_TUTORIAL.md)** - Teljes tutorial magyarul (képek, videók, logó, minden!)
- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Részletes telepítési útmutató
- **[IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** - Képek hozzáadásának részletes útmutatója
- **[FAVICON_GUIDE.md](./FAVICON_GUIDE.md)** - Favicon és app ikonok beállítása

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── contexts/        # React contexts (Language)
├── data/            # Content data and translations
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── utils/           # Utility functions
└── App.tsx          # Main app component
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (see `.env.example`):

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
SITE_URL=https://yourdomain.com
```

### Google Analytics

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Add it to `.env` as `VITE_GA_MEASUREMENT_ID`
3. Analytics will automatically track page views and events

### Contact Form

1. Sign up at [Formspree](https://formspree.io/)
2. Get your form ID
3. Replace `YOUR_FORMSPREE_ID` in `src/pages/Contact.tsx`

### Newsletter

1. Choose an email service (Mailchimp, ConvertKit, etc.)
2. Update the integration in `src/components/NewsletterSignup.tsx`

## 🎨 Customization

### Team Colors
Update colors in `src/index.css`:
```css
--color-primary: #0e3455;
--color-secondary: #494f54;
```

### Content
- Team members: `src/data/teamData.ts`
- Robots: `src/data/teamData.ts`
- Blog posts: `src/data/blogData.ts`
- Gallery images: `src/data/galleryData.ts`
- Sponsors: `src/data/sponsorsData.ts`
- Translations: `src/data/translations.ts`

### Images
- Add images to `public/` folder
- Update image paths in data files
- See `IMAGE_GUIDE.md` for detailed instructions

### Logo
- Add logo to `public/logo.png`
- It will automatically replace the text logo

## 📝 Architecture Overview

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router DOM 7
- **Styling**: CSS with CSS Variables
- **State Management**: React Context API
- **Code Splitting**: React.lazy() with Suspense
- **SEO**: Dynamic meta tags, structured data (JSON-LD)
- **PWA**: Service worker and manifest.json

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 SOS Robotics Team. All rights reserved.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
