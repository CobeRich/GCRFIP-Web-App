# GCRFIP Web Application

**Ghana Climate Resilience and Flood Intelligence Programme (GCRFIP) - Official Web Platform**

## 📋 Project Overview

The GCRFIP Web Application is Ghana's comprehensive digital platform for building national flood resilience. This modern, responsive web application serves as the central hub for information, coordination, research, and community engagement on flood management and climate adaptation.

The platform integrates:
- **Real-time flood monitoring and early warning systems**
- **Institutional coordination mechanisms**
- **Community engagement and resilience building**
- **Research and innovation initiatives**
- **Capacity building and training resources**
- **Data access and transparency**

## 🎯 Key Features

- **8 Primary Navigation Sections** with 55+ sub-pages
- **Responsive Design** optimized for desktop, tablet, and mobile
- **Data-Driven Content** on flood risks and climate adaptation
- **Community Engagement Tools** for participation and collaboration
- **Resource Library** with documents, data, maps, and training materials
- **News & Updates** on programme developments
- **Partnership Opportunities** for stakeholders across sectors
- **Contact & Support** systems for inquiries and collaboration

## 🏗️ Project Structure

```
GCRFIP-Web-App/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page
│   ├── about/                    # About section
│   │   ├── page.tsx              # Main About page
│   │   ├── gcrfip/               # About GCRFIP
│   │   ├── leadership/           # Leadership team
│   │   ├── governance/           # Governance structure
│   │   ├── advisory-board/       # Advisory Board members
│   │   └── strategic-partners/   # Partner organizations
│   ├── programme/                # Programme section
│   │   ├── page.tsx              # Programme landing
│   │   ├── overview/             # Programme overview
│   │   ├── executive-portfolio/  # Executive documentation
│   │   ├── prospectus/           # Programme prospectus
│   │   ├── blueprint/            # Technical blueprint
│   │   ├── national-roadmap/     # Implementation roadmap
│   │   ├── implementation-strategy/
│   │   └── pillars/              # Six strategic pillars
│   │       ├── page.tsx          # Pillars overview
│   │       ├── 1/                # Pillar 1: Flood Intelligence
│   │       ├── 2/                # Pillar 2: Institutional Coordination
│   │       ├── 3/                # Pillar 3: Community Engagement
│   │       ├── 4/                # Pillar 4: Research & Innovation
│   │       ├── 5/                # Pillar 5: Capacity Building
│   │       └── 6/                # Pillar 6: Policy & Governance
│   ├── research/                 # Research section
│   │   ├── page.tsx              # Research landing
│   │   ├── research-themes/      # Research themes
│   │   ├── publications/         # Research publications
│   │   ├── innovation-lab/       # Innovation initiatives
│   │   ├── flood-intelligence/   # Flood Intelligence Platform
│   │   ├── digital-twin/         # Digital Twin technology
│   │   ├── open-data/            # Open data portal
│   │   ├── student-opportunities/# Student programs
│   │   └── research-projects/    # Ongoing projects
│   ├── resources/                # Resources section
│   │   ├── page.tsx              # Resources landing
│   │   ├── reports/              # Research reports
│   │   ├── policy-briefs/        # Policy guidance
│   │   ├── infographics/         # Visual resources
│   │   ├── maps/                 # Interactive maps
│   │   ├── videos/               # Video content
│   │   ├── faqs/                 # FAQ section
│   │   ├── downloads/            # Document downloads
│   │   └── training-materials/   # Training resources
│   ├── news/                     # News section
│   │   ├── page.tsx              # News landing
│   │   ├── latest/               # Latest news articles
│   │   ├── events/               # Upcoming events
│   │   ├── workshops/            # Workshop announcements
│   │   ├── conferences/          # Conference information
│   │   ├── press-releases/       # Press releases
│   │   └── blog/                 # Blog articles
│   ├── get-involved/             # Get Involved section
│   │   ├── page.tsx              # Main page
│   │   ├── become-partner/       # Partnership opportunities
│   │   ├── founding-consortium/  # Founding member info
│   │   ├── research-collaboration/ # Research partnerships
│   │   ├── volunteer/            # Volunteering opportunities
│   │   ├── sponsorship-funding/  # Funding & sponsorship
│   │   ├── careers/              # Career opportunities
│   │   └── newsletter/           # Newsletter subscription
│   ├── contact/                  # Contact section
│   │   ├── page.tsx              # Main contact page
│   │   ├── office-information/   # Office details
│   │   ├── interactive-map/      # Location map
│   │   ├── social-media/         # Social media links
│   │   └── general-enquiries/    # General enquiries
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── .github/
│   └── workflows/                # CI/CD workflows
├── .gitignore
└── README.md

```

## 📊 Site Hierarchy

### Primary Navigation (8 Main Sections)

1. **Home** - Landing page and programme overview
2. **About** - Organisation information, leadership, governance
3. **Programme** - Programme structure, pillars, strategy
4. **Research** - Research themes, publications, innovation
5. **Resources** - Documents, data, training materials
6. **News** - Updates, events, announcements
7. **Get Involved** - Partnership, volunteer, funding opportunities
8. **Contact** - Communication channels and enquiries

### Page Count

- **Primary Pages**: 8
- **About Section**: 5 sub-pages
- **Programme Section**: 13 sub-pages (including 6 pillars)
- **Research Section**: 8 sub-pages
- **Resources Section**: 8 sub-pages
- **News Section**: 6 sub-pages
- **Get Involved Section**: 7 sub-pages
- **Contact Section**: 5 sub-pages

**Total**: 63 pages

## 🛠️ Technology Stack

### Frontend
- **Framework**: [Next.js 14+](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Components**: React functional components with hooks

### Brand Colors
```css
--gcrfip-navy: #1e3a5f      /* Primary Navy Blue */
--gcrfip-green: #2d8659     /* GCRFIP Green */
--gcrfip-gold: #d4a574      /* Accent Gold */
--gcrfip-light-grey: #f5f5f5 /* Light Grey Background */
```

### Build Tools
- **Package Manager**: npm
- **Version Control**: Git & GitHub
- **Deployment**: Vercel / GitHub Pages / Custom hosting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/CobeRich/GCRFIP-Web-App.git
cd GCRFIP-Web-App
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

### Environment Variables

Create a `.env.local` file for environment-specific settings:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.gcrfip.gh
NEXT_PUBLIC_MOTION_MODE=balanced
```

`NEXT_PUBLIC_MOTION_MODE` options:
- `conservative` for lower animation intensity (recommended for official/stakeholder reviews)
- `balanced` default production profile
- `presentation` for higher visual energy during demos

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start development server

# Build
npm run build            # Create production build
npm run start            # Start production server

# Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript checks

# Format
npm run format           # Format code with Prettier
```

## 🎨 Styling & Customization

### Tailwind CSS Configuration
The project uses Tailwind CSS with custom brand colors. Update `tailwind.config.ts` to modify:
- Brand colors
- Typography
- Spacing
- Responsive breakpoints

### CSS Variables
Global styles defined in `app/globals.css`:
```css
:root {
  --gcrfip-navy: #1e3a5f;
  --gcrfip-green: #2d8659;
  --gcrfip-gold: #d4a574;
  --gcrfip-light-grey: #f5f5f5;
}
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Update `next.config.js` for static export
2. Push to `main` branch
3. Enable GitHub Pages in repository settings

### Custom Hosting
```bash
npm run build
npm start
```

## 📝 Content Management

### Adding New Pages
1. Create directory under appropriate section: `app/section/subsection/`
2. Add `page.tsx` file
3. Export default React component
4. Update navigation links in main layout

### Example: Adding a New Page
```typescript
// app/section/new-page/page.tsx
'use client'

export default function NewPage() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">
        Page Title
      </h1>
      {/* Content here */}
    </div>
  )
}
```

## 🔗 Navigation Structure

Navigation implemented with Next.js Link component for optimal performance:
```typescript
import Link from 'next/link'

<Link href="/about/leadership">
  Leadership
</Link>
```

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Responsive design for all devices

## 📱 Responsive Design

Breakpoints (Tailwind):
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

Utilities used:
- `sm:`, `md:`, `lg:` prefixes for responsive classes
- Mobile-first approach

## 🔒 Security

- No sensitive data in client-side code
- Environment variables for API keys
- HTTPS enforced on deployment
- Regular dependency updates

## 📄 License

[Specify your license here - e.g., MIT, GPL, etc.]

## 👥 Contributors

- **Project Lead**: Cobe Rich
- **Development**: GCRFIP Team

## 📞 Support & Feedback

For issues, feature requests, or feedback:
- **Email**: info@gcrfip.gh
- **GitHub Issues**: [Open an issue](https://github.com/CobeRich/GCRFIP-Web-App/issues)
- **Contact Form**: [Visit contact page](https://gcrfip.gh/contact)

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GCRFIP Official Website](https://gcrfip.gh)
- [Climate Resilience Guide](https://www.undrr.org/)

## 🗓️ Roadmap

### Phase 1 (Current - 2026)
- ✅ Core web application structure
- ✅ All primary and sub-pages
- ⏳ Content population
- ⏳ SEO optimization

### Phase 2 (2026-2027)
- Integration with Flood Intelligence Platform API
- User authentication and accounts
- Interactive data dashboards
- Mobile application

### Phase 3 (2027+)
- Advanced analytics
- Machine learning integrations
- Community features
- Multilingual support

## 📋 Version History

- **v1.0.0** (July 2026) - Initial release with 63 pages and complete site hierarchy

---

**Last Updated**: July 1, 2026  
**Maintained By**: GCRFIP Development Team  
**Repository**: [github.com/CobeRich/GCRFIP-Web-App](https://github.com/CobeRich/GCRFIP-Web-App)
