# TaskFlow API Documentation Site Setup

Modern documentation site built with Next.js, Tailwind CSS, and Cmd+K search.

## Features

✅ Cmd/Ctrl + K search menu  
✅ Dark/Light mode toggle  
✅ Syntax highlighting with copy buttons  
✅ Responsive design  
✅ Clean, modern UI  
✅ Static site export (deploy anywhere)  

## Quick Start

### 1. Install Dependencies

```bash
cd docs-site
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates a static site in the `out/` folder.

## Project Structure

```
docs-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx             # Main docs page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── header.tsx           # Top navigation bar
│       ├── sidebar.tsx          # Left sidebar navigation
│       ├── command-menu.tsx     # Cmd+K search
│       ├── code-block.tsx       # Code snippet component
│       ├── theme-provider.tsx   # Dark/light mode provider
│       └── sections/
│           ├── introduction.tsx
│           ├── authentication.tsx
│           ├── endpoints.tsx
│           └── errors.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Key Components

### Command Menu (Cmd+K)
Press Cmd/Ctrl + K to open the search menu. Navigate through documentation sections quickly.

### Code Blocks
All code examples have:
- Syntax highlighting
- Copy to clipboard button
- Language labels
- Dark theme

### Theme Toggle
Switch between dark and light modes with the button in the header.

## Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build static site
npm run build

# Deploy the 'out' folder to Netlify
```

### Static Hosting (VPS)
```bash
# Build
npm run build

# Copy 'out' folder to your web server
rsync -avz out/ user@yourserver:/var/www/taskflow-docs/
```

### Nginx Config Example
```nginx
server {
    listen 80;
    server_name docs.taskflow.example.com;
    root /var/www/taskflow-docs;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

## Customization

### Update API Base URL
Edit `src/components/sections/introduction.tsx`:
```typescript
const baseUrl = "https://api.taskflow.example.com";
```

### Add New Sections
1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add to sidebar in `src/components/sidebar.tsx`
4. Add to command menu in `src/components/command-menu.tsx`

### Change Colors
Edit `tailwind.config.ts` and `src/app/globals.css`

### Update GitHub Links
Replace `yourusername` in `src/components/header.tsx`

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **cmdk** - Command menu
- **prism-react-renderer** - Syntax highlighting
- **Lucide React** - Icons

## Performance

- Static site generation (blazing fast)
- Optimized CSS (Tailwind purge)
- No runtime JavaScript for content
- Sub-second page loads

## License

MIT - Free for portfolio use