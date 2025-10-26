# Technology Stack

## Framework & Libraries
- **React 18.2.0** - Main frontend framework
- **Create React App** - Build tooling and development server
- **TailwindCSS 3.2.4** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth transitions
- **EmailJS** - Client-side email sending for contact forms

## Key Dependencies
- **react-type-animation** - Typewriter text effects
- **react-countup** - Animated number counters
- **react-intersection-observer** - Scroll-based animations
- **react-scroll** - Smooth scrolling navigation
- **react-icons** - Icon library

## Build System
Uses Create React App with custom Node.js options for legacy OpenSSL support.

## Common Commands
```bash
# Development server
npm start

# Production build
npm run build

# Run tests
npm test

# Deploy to Netlify (automatic on push to main)
```

## Deployment
- **Platform**: Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `build/`
- **Auto-deploy**: Configured via netlify.toml

## Node.js Configuration
All scripts use `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with older OpenSSL versions.