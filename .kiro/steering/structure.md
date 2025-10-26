# Project Structure

## Root Directory
```
├── public/           # Static assets and HTML template
├── src/             # Source code
├── build/           # Production build output (generated)
├── node_modules/    # Dependencies (generated)
├── .netlify/        # Netlify deployment config
├── package.json     # Project dependencies and scripts
├── netlify.toml     # Netlify build configuration
└── tailwind.config.js # TailwindCSS configuration
```

## Source Code Organization (`src/`)
```
src/
├── components/      # React components (one per section)
│   ├── About.js
│   ├── Banner.js
│   ├── Contact.js
│   ├── Header.js
│   ├── Nav.js
│   ├── Services.js
│   └── Work.js
├── assets/          # Images and static files
├── App.js           # Main application component
├── index.js         # React entry point
├── index.css        # Global styles and Tailwind imports
└── variants.js      # Animation variants for Framer Motion
```

## Component Architecture
- **Single Page Application**: All sections rendered in App.js
- **Component-per-section**: Each portfolio section is a separate component
- **Functional Components**: Uses React hooks, no class components
- **Import Structure**: Components imported at top of App.js

## Styling Conventions
- **TailwindCSS**: Primary styling method using utility classes
- **Custom CSS**: Global styles and component-specific styles in index.css
- **CSS Classes**: Custom utility classes (.btn, .section, .text-gradient)
- **Responsive Design**: Mobile-first approach with custom breakpoints

## File Naming
- **Components**: PascalCase (e.g., `Banner.js`, `About.js`)
- **Assets**: kebab-case (e.g., `site-bg.jpg`)
- **Config files**: Standard naming conventions