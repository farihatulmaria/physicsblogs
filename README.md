# Aurora Physics Blog

A modern, high-end physics blog website with a chic, clean, and relaxing aesthetic. Built with React, Vercel, and Tailwind CSS, featuring smooth animations, elegant typography, and a luxurious color palette.

## Features

### Design & UX
- **Modern Aesthetic**: Soft neutrals, luxurious emerald greens, light grays, and subtle gold accents
- **Elegant Typography**: Playfair Display (serif) for headings, DM Sans (sans-serif) for body text
- **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations using Framer Motion
- **Mobile-First**: Fully responsive design that looks stunning on all devices
- **Smooth Scrolling**: Seamless navigation between sections

### Pages
- **Home**: Hero section with compelling copy, statistics, and call-to-action
- **About**: Editorial-style layout with personal branding and social links
- **Blog Listing**: Featured articles, category filters, search functionality, and newsletter signup
- **Single Blog Post**: Rich article layout with table of contents, author bio, and related articles
- **Support/Contact**: Contact form with map integration and studio information

### Functionality
- **Search & Filter**: Real-time search and category filtering for blog posts
- **Navigation**: Sticky header with mobile hamburger menu
- **Scroll Spy**: Active section highlighting in navigation
- **Newsletter**: Email subscription integration ready
- **Social Sharing**: Share buttons for blog posts

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.x | UI Framework |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 10.x | Animations |
| React Router DOM | 6.x | Routing |
| Lucide React | Latest | Icons |

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aurora-physics-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## Project Structure

```
aurora-physics-blog/
├── public/                 # Static assets
│   └── og-image.png       # Open Graph image
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── header.jsx        # Navigation header
│   │   ├── footer.jsx        # Site footer
│   │   ├── BlogPageCompo.jsx # Blog post card
│   │   ├── BackToTop.jsx     # Blog post card
│   │   ├── login.jsx         # login page
│   │   └── SideBarItems.jsx  # dashboard side bar
│   ├── lib/
│   │   └── data.ts       # all data 
│   ├── about/
│   │   └── page.tsx      # about page
│   ├── blog/
|   |   ├── page.tsx      # blog page
│   │   └── SingleBlogPOst.tsx  
│   ├── dashboard/
|   |   ├── article/
|   │   │   └── page.tsx 
|   |   ├── analysis/
|   │   │   └── page.tsx 
|   |   └── newpost/
|   │       └── page.tsx 
│   ├── layout.jsx        # Main app component
│   ├── globals.css       # Global styles
│   └── page.jsx          # Entry point (the home page)
├── eslint.config.mjs     # eslint configuration
├── next.config.ts        # nextjs configuration
├── package.json          # Dependencies & scripts
├── tsconfig.json         # Tailwind configuration
├── postcss.config.mjs    # Vite configuration
└── README.md             # This file
```

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Emerald-950 | `#022c22` | Primary, headers, buttons |
| Emerald-900 | `#064e3b` | Secondary, accents |
| Emerald-700 | `#047857` | Links, highlights |
| Stone-50 | `#fafaf9` | Background |
| Stone-100 | `#f5f5f4` | Cards, sections |
| Stone-200 | `#e7e5e4` | Borders |
| Amber-400 | `#fbbf24` | Accents, badges |

### Typography

```css
/* Headings */
font-family: 'Playfair Display', serif;

/* Body & UI */
font-family: 'DM Sans', sans-serif;
```

### Spacing Scale
- Uses Tailwind's default spacing scale (4, 8, 12, 16, 20, 24, etc.)

##  Customization

### Changing Colors
Edit `tailwind.config.js` to customize the color palette:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#022c22',
        accent: '#fbbf24',
        // Add your custom colors
      }
    }
  }
}
```
##  Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Design inspiration from modern editorial layouts
- Icons by [Lucide](https://lucide.dev/)
- Built with passion using React and Tailwind CSS

## Support

For questions or support, please:
- Open an issue on GitHub
- Contact us through the Support page
- Email: hello@auroraphysics.blog

---

**Made with React, Typescript & Tailwind CSS** 
