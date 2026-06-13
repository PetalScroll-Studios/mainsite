# PetalScrolls Website - Design Specification

**Date:** 2026-06-13
**Version:** 1.0
**Status:** Approved

## [S1] Overview

A multi-purpose personal + professional + game development website for Richards, featuring:
- Personal introduction and professional background
- Game development studio showcase (PetalScrolls Studio - Call of the Druid)
- Public AI workflow dashboard
- Private personal dashboard with authentication

**Target Audience:**
- General public (personal/professional)
- Game development community
- AI/technology enthusiasts
- Local community (Akron/Cleveland)

## [S2] Site Architecture

### Sitemap

```
/ (Home)
├── /about
├── /games
│   └── /games/call-of-the-druid
├── /blog
├── /ai-workflow
├── /dashboard (public)
└── /dashboard/private (login required)
```

### Navigation Structure

**Top Navigation (5 items + theme toggle):**
- PetalScrolls (logo/home link)
- Home
- About (includes contact)
- Games (includes development)
- AI Workflow
- Dashboard (public/private)
- 🌙/☀️ Theme Toggle

**Mobile Navigation:**
- Hamburger menu with same items
- Full-screen overlay on mobile
- Theme toggle always visible

## [S3] Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties for theme switching
- **Vanilla JavaScript** - Theme toggle, dashboard widgets, navigation
- **Markdown** - Blog content files (future conversion)
- **localStorage** - Theme preference persistence

### Hosting & Deployment
- **GitHub Pages** - Free static hosting
- **HTTPS** - Automatic via GitHub Pages
- **CDN** - Global edge caching
- **Custom Domain** - Optional (CNAME file)
- **No Backend** - Pure frontend architecture

### File Structure

```
website-mimo_created/
├── index.html
├── about.html
├── games.html
├── games/
│   └── call-of-the-druid.html
├── ai-workflow.html
├── blog.html
├── dashboard.html
├── dashboard-private.html
├── css/
│   ├── base.css
│   ├── themes.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── theme.js
│   ├── nav.js
│   └── dashboard.js
├── blog/
│   └── *.md (future)
├── assets/
│   ├── images/
│   │   ├── logo.svg (PetalScroll emblem)
│   │   ├── game-thumbnails/ (from Call-of-the-Druid)
│   │   ├── scroll-textures/ (for Hybrid Scroll theme)
│   │   └── concept-art/
│   └── icons/
└── README.md
```

### Asset Sources (from /home/richards/Projects/Call-of-the-Druid/COTD-support-files/)
- `PetalScroll emblem.png` → Convert to SVG for logo
- `thumbnail 1.png`, `thumbnail 2-a.png` → Game showcase thumbnails
- `visual and mockups.png` → Game section hero image
- `boy in clearing take 2.png` → Concept art
- `in-game resources/scroll*.png` → Texture for Hybrid Scroll theme background
- `design board 2.png` → Design reference

## [S4] Theme System

### Theme Toggle
- **Default:** Detect OS preference via `prefers-color-scheme` media query
- **Dark Mode OS** → Default to Dark Fantasy
- **Light Mode OS** → Default to Hybrid Scroll
- **User Override:** Manual toggle saves preference to localStorage
- **Persistence:** User choice persists across sessions

### Theme: Hybrid Scroll (Default for Light Mode)
- **Background:** Warm sepia, parchment tones (#f5f0e6, #e8dcc8)
- **Accents:** Gold, bronze, amber (#c9a84c, #b8860b)
- **Text:** Dark brown (#3d3225, #2c2318)
- **Feel:** Ancient scrolls meets modern web

### Theme: Dark Fantasy (Default for Dark Mode)
- **Background:** Deep purple, midnight blue (#0f0f23, #1a1a2e)
- **Accents:** Gold, mystic purple (#c9a84c, #9b59b6)
- **Text:** Light gray (#e0e0e0, #f0f0f0)
- **Feel:** Dark druid forest aesthetic

### CSS Implementation
```css
:root {
  /* Hybrid Scroll (default) */
  --bg-primary: #f5f0e6;
  --bg-secondary: #e8dcc8;
  --accent-primary: #c9a84c;
  --text-primary: #3d3225;
}

[data-theme="dark"] {
  /* Dark Fantasy */
  --bg-primary: #0f0f23;
  --bg-secondary: #1a1a2e;
  --accent-primary: #9b59b6;
  --text-primary: #e0e0e0;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-primary: #0f0f23;
    --bg-secondary: #1a1a2e;
    --accent-primary: #9b59b6;
    --text-primary: #e0e0e0;
  }
}
```

## [S5] Page Designs

### Home Page
- Hero section with personal intro
- Featured game showcase (Call of the Druid)
- Latest blog posts (3 most recent)
- Quick links to key sections
- Social media links

### About Page
- Personal bio and background
- Business degree (Bachelor's in Business Management & Administration)
- Employment history
- Skills and certifications
- Professional accomplishments
- Contact form/links

### Games Page
- Call of the Druid showcase
- PetalScrolls Studio introduction
- Development updates placeholder
- AI tools and software used
- Roadmap and milestones
- Alpha target: Winter 2026

### AI Workflow Page
- Local AI setup guide
- LM Studio configuration
- MiMoCode workflows
- Tools and resources
- Model recommendations

### Blog Page
- Markdown-based posts (future)
- Post listing with excerpts
- Category/tag filtering
- RSS feed support (future)

### Public Dashboard
- AI Models (LM Studio, MiMo Auto, Claude Code)
- Tools & Apps (MiMoCode, Roblox Studio, VS Code)
- Game Progress (Call of the Druid, PetalScrolls Studio)
- Quick Stats (development hours, features, milestones)

### Private Dashboard
- Password gate authentication
- Calendar widget
- Dev task tracker
- Quick links to tools
- Session expires after 24 hours

## [S6] Security

### Phase 1 (Immediate)
- HTTPS enforcement (GitHub Pages)
- Simple password gate for private dashboard
- No sensitive data in repository
- CSP headers via meta tags
- Input sanitization on forms

### Phase 2+ (Future)
- Rate limiting on login attempts
- OAuth integration (Google/GitHub)
- Two-factor authentication
- Session management improvements
- Admin audit logging

### Password Gate Implementation
- Single password stored in localStorage (hashed)
- Session cookie expires after 24 hours
- No server-side validation (frontend only)
- User can log out to clear session

## [S7] SEO Strategy

### Technical SEO
- Semantic HTML5 markup
- Meta descriptions per page
- Open Graph tags for social sharing
- XML sitemap generation
- robots.txt configuration
- Structured data (JSON-LD)

### Content SEO
- Target keywords per page
- Blog posts with proper headings (H1-H6)
- Image alt text optimization
- Internal linking strategy
- FAQ sections for rich snippets
- Regular content updates

## [S8] Content Strategy

### Content Types
1. **Blog Posts** - Game dev updates, AI tutorials, Roblox tips
2. **Static Pages** - Portfolio showcases, tool lists, bio pages
3. **Dynamic Content** - Dashboard widgets, milestones, stats

### Content Calendar
- Weekly: Development updates
- Bi-weekly: AI workflow tutorials
- Monthly: Game progress reports
- As needed: News and announcements

## [S9] Branding

### Logo Concept
- "PetalScrolls" wordmark
- Scroll + petal icon motif
- Works in both themes
- SVG format for crisp scaling

### Typography
- **Headings:** Serif (Playfair Display)
- **Body:** Sans-serif (Inter or Roboto)
- **Code:** Monospace (JetBrains Mono)
- **Weights:** Maximum 3 per font

## [S10] Implementation Phases

### Phase 1: Foundation (Week 1-2)
- Core HTML structure
- Theme system (both themes)
- Responsive navigation
- Home, About, Contact pages
- Basic SEO setup

### Phase 2: Content (Week 3-4)
- Games section
- AI Workflow page
- Blog system (Markdown)
- Public dashboard
- Social media links

### Phase 3: Features (Week 5-6)
- Private dashboard
- Password gate auth
- Dashboard widgets
- Calendar integration
- Task tracker

### Phase 4: Community (Future)
- User registration system
- Discussion forums
- User profiles
- Comment system
- Notification system

### Phase 5: Advanced (Future)
- OAuth authentication
- Two-factor security
- PWA offline support
- Analytics dashboard
- API development

## [S11] Risks & Mitigations

### Risks
1. **Scope Creep** - Adding too many features before core is solid
   - *Mitigation:* Strict phase gates, MVP-first approach
2. **Content Bottleneck** - Site launches with empty pages
   - *Mitigation:* Placeholder content, staggered launches
3. **Technical Debt** - Quick hacks become permanent
   - *Mitigation:* Clean file structure, documented patterns
4. **Maintenance Burden** - Too many manual updates
   - *Mitigation:* Static generation, automated builds later

### Opportunities
1. **Community Building** - Game community, user accounts, forums
2. **Revenue Streams** - Game sales, consulting, tutorials
3. **Content Ecosystem** - YouTube, podcast, newsletter
4. **Technical Expansion** - PWA, offline access, APIs

## [S12] Success Metrics

- [ ] Site loads in < 3 seconds
- [ ] Mobile responsive on all screen sizes
- [ ] Both themes work correctly
- [ ] Theme preference persists
- [ ] SEO score > 90 (Lighthouse)
- [ ] All pages have meta descriptions
- [ ] Blog system functional
- [ ] Dashboard loads without errors
- [ ] Password gate works
- [ ] No console errors