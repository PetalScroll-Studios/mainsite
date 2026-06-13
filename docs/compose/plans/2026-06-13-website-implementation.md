# PetalScrolls Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use compose:subagent (recommended) or compose:execute to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-purpose personal + professional + game development website with theme switching, responsive design, and dashboard functionality.

**Architecture:** Static HTML/CSS/JS site with vanilla JavaScript for interactivity. CSS custom properties enable theme switching. No build tools required - pure frontend.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, localStorage, GitHub Pages

---

## Task 1: Project Setup & Base Structure

**Covers:** [S3]

**Files:**
- Create: `website-mimo_created/index.html`
- Create: `website-mimo_created/css/base.css`
- Create: `website-mimo_created/css/themes.css`
- Create: `website-mimo_created/js/theme.js`
- Create: `website-mimo_created/README.md`

- [ ] **Step 1: Create project directory structure**

```bash
cd /home/richards/Projects/website-mimo_created
mkdir -p css js blog assets/images assets/icons assets/game-thumbnails assets/scroll-textures
```

- [ ] **Step 2: Create base HTML file**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PetalScrolls - Personal website of Richards. Game development, AI workflows, and professional portfolio.">
    <title>PetalScrolls | Home</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/themes.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="logo">PetalScrolls</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="games.html">Games</a></li>
                <li><a href="ai-workflow.html">AI Workflow</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h1>Welcome to PetalScrolls</h1>
            <p>Game development, AI workflows, and professional journey</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026 PetalScrolls Studio. All rights reserved.</p>
    </footer>
    
    <script src="js/theme.js"></script>
    <script src="js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create base CSS**

```css
/* base.css */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-primary);
    color: var(--text-primary);
}

a {
    color: var(--accent-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--accent-secondary);
}

img {
    max-width: 100%;
    height: auto;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }

p {
    margin-bottom: 1rem;
}

/* Navigation */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--bg-secondary);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-primary);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-primary);
    font-weight: 500;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--accent-primary);
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
}

.nav-toggle span {
    width: 25px;
    height: 3px;
    background-color: var(--text-primary);
    transition: 0.3s;
}

.theme-toggle {
    background: none;
    border: 2px solid var(--accent-primary);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    background-color: var(--accent-primary);
    color: var(--bg-primary);
}

/* Hero Section */
.hero {
    padding: 4rem 2rem;
    text-align: center;
    background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
}

.hero h1 {
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.25rem;
    opacity: 0.9;
}

/* Footer */
footer {
    margin-top: auto;
    padding: 2rem;
    text-align: center;
    background-color: var(--bg-secondary);
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }
    
    .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background-color: var(--bg-secondary);
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        gap: 1.5rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
}
```

- [ ] **Step 4: Create theme CSS**

```css
/* themes.css */
:root {
    /* Hybrid Scroll (default for light mode) */
    --bg-primary: #f5f0e6;
    --bg-secondary: #e8dcc8;
    --accent-primary: #c9a84c;
    --accent-secondary: #b8860b;
    --text-primary: #3d3225;
    --text-secondary: #5a4a3a;
    --border-color: #d4c4a8;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
    /* Dark Fantasy */
    --bg-primary: #0f0f23;
    --bg-secondary: #1a1a2e;
    --accent-primary: #9b59b6;
    --accent-secondary: #8e44ad;
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
    --border-color: #3a3a5c;
    --shadow-color: rgba(0, 0, 0, 0.3);
}

@media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
        --bg-primary: #0f0f23;
        --bg-secondary: #1a1a2e;
        --accent-primary: #9b59b6;
        --accent-secondary: #8e44ad;
        --text-primary: #e0e0e0;
        --text-secondary: #b0b0b0;
        --border-color: #3a3a5c;
        --shadow-color: rgba(0, 0, 0, 0.3);
    }
}
```

- [ ] **Step 5: Create theme toggle JavaScript**

```javascript
// theme.js
(function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or use OS preference
    const savedTheme = localStorage.getItem('theme');
    const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    } else if (osPrefersDark) {
        html.setAttribute('data-theme', 'dark');
    }
    
    // Update toggle button icon
    function updateToggleIcon() {
        const currentTheme = html.getAttribute('data-theme');
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon();
    });
    
    // Initial icon update
    updateToggleIcon();
    
    // Listen for OS theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            updateToggleIcon();
        }
    });
})();
```

- [ ] **Step 6: Create navigation JavaScript**

```javascript
// nav.js
(function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
})();
```

- [ ] **Step 7: Create README.md**

```markdown
# PetalScrolls Website

Personal website for Richards - game development, AI workflows, and professional portfolio.

## Features

- Responsive design (mobile-first)
- Theme switching (Hybrid Scroll / Dark Fantasy)
- OS theme detection
- Game development showcase
- AI workflow documentation
- Public and private dashboards

## Structure

- `/` - Home page
- `/about` - About and contact
- `/games` - Game development showcase
- `/ai-workflow` - AI tools and workflows
- `/dashboard` - Public dashboard
- `/dashboard/private` - Private dashboard (login required)

## Development

1. Open `index.html` in a browser
2. No build tools required
3. Edit files directly

## Deployment

Deploy to GitHub Pages:
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

## License

All rights reserved. © 2026 PetalScrolls Studio
```

- [ ] **Step 8: Test the base structure**

Open `index.html` in a browser and verify:
- Page loads without errors
- Theme toggle works (click to switch between light/dark)
- Navigation menu displays correctly
- Responsive behavior on mobile

- [ ] **Step 9: Commit initial structure**

```bash
git init
git add .
git commit -m "feat: initial project structure with theme system"
```

---

## Task 2: Home Page Content

**Covers:** [S5]

**Files:**
- Modify: `website-mimo_created/index.html`
- Create: `website-mimo_created/css/components.css`

- [ ] **Step 1: Create components CSS**

```css
/* components.css */
/* Cards */
.card {
    background-color: var(--bg-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px var(--shadow-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px var(--shadow-color);
}

/* Sections */
.section {
    padding: 4rem 2rem;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
}

/* Grid layouts */
.grid-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.btn-primary {
    background-color: var(--accent-primary);
    color: var(--bg-primary);
    border: none;
}

.btn-primary:hover {
    background-color: var(--accent-secondary);
    color: var(--bg-primary);
}

.btn-secondary {
    background-color: transparent;
    color: var(--accent-primary);
    border: 2px solid var(--accent-primary);
}

.btn-secondary:hover {
    background-color: var(--accent-primary);
    color: var(--bg-primary);
}

/* Hero variants */
.hero-featured {
    padding: 6rem 2rem;
    text-align: center;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    position: relative;
    overflow: hidden;
}

.hero-featured::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('../assets/scroll-textures/scroll-unrolled-1.png') center/cover;
    opacity: 0.1;
    pointer-events: none;
}

/* Featured game card */
.featured-game {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 3rem;
}

@media (max-width: 768px) {
    .featured-game {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

/* Stats */
.stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    padding: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-primary);
    font-family: 'Playfair Display', Georgia, serif;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Social links */
.social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background-color: var(--accent-primary);
    color: var(--bg-primary);
    transform: scale(1.1);
}
```

- [ ] **Step 2: Update index.html with full content**

Replace the `<main>` section with:

```html
<main>
    <section class="hero-featured">
        <div class="container">
            <h1>Welcome to PetalScrolls</h1>
            <p class="hero-subtitle">Game development, AI workflows, and professional journey</p>
            <div class="hero-actions">
                <a href="games.html" class="btn btn-primary">Explore Games</a>
                <a href="about.html" class="btn btn-secondary">Learn About Me</a>
            </div>
        </div>
    </section>
    
    <section class="section">
        <div class="container">
            <h2 class="section-title">Featured Game</h2>
            <div class="card featured-game">
                <div class="featured-game-image">
                    <img src="assets/game-thumbnails/thumbnail-1.png" alt="Call of the Druid" loading="lazy">
                </div>
                <div class="featured-game-content">
                    <h3>Call of the Druid</h3>
                    <p>An immersive game experience developed by PetalScrolls Studio. Journey through mystical lands and discover the power of nature.</p>
                    <p class="alpha-badge">Alpha Target: Winter 2026</p>
                    <a href="games/call-of-the-druid.html" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section" style="background-color: var(--bg-secondary);">
        <div class="container">
            <h2 class="section-title">What I Do</h2>
            <div class="grid-3">
                <div class="card">
                    <h3>🎮 Game Development</h3>
                    <p>Creating immersive gaming experiences with Roblox and modern development tools.</p>
                </div>
                <div class="card">
                    <h3>🤖 AI Workflows</h3>
                    <p>Exploring local AI models, LM Studio, and automated development workflows.</p>
                </div>
                <div class="card">
                    <h3>💼 Professional</h3>
                    <p>Business management background with expertise in technology and entrepreneurship.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section">
        <div class="container">
            <h2 class="section-title">Latest Updates</h2>
            <div class="grid-2">
                <div class="card">
                    <h3>Development Progress</h3>
                    <p>Call of the Druid enters Alpha testing phase with new creature AI systems.</p>
                    <a href="blog.html" class="btn btn-secondary">Read More</a>
                </div>
                <div class="card">
                    <h3>AI Workflow Update</h3>
                    <p>New MiMoCode integration streamlines development process.</p>
                    <a href="ai-workflow.html" class="btn btn-secondary">View Details</a>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section" style="background-color: var(--bg-secondary);">
        <div class="container">
            <h2 class="section-title">Connect With Me</h2>
            <div class="social-links">
                <a href="#" aria-label="GitHub" title="GitHub">GH</a>
                <a href="#" aria-label="Twitter" title="Twitter">TW</a>
                <a href="#" aria-label="Discord" title="Discord">DC</a>
                <a href="#" aria-label="YouTube" title="YouTube">YT</a>
            </div>
        </div>
    </section>
</main>
```

- [ ] **Step 3: Add components.css link to index.html**

Add to `<head>`:
```html
<link rel="stylesheet" href="css/components.css">
```

- [ ] **Step 4: Test home page**

Open in browser and verify:
- Hero section displays correctly
- Featured game card shows
- Three-column grid works
- Social links display
- All sections responsive

- [ ] **Step 5: Commit home page**

```bash
git add .
git commit -m "feat: complete home page with featured game and social links"
```

---

## Task 3: About Page

**Covers:** [S5]

**Files:**
- Create: `website-mimo_created/about.html`

- [ ] **Step 1: Create about.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="About Richards - Business professional, game developer, and AI enthusiast. Learn about my background and skills.">
    <title>About | PetalScrolls</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/themes.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="logo">PetalScrolls</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html" class="active">About</a></li>
                <li><a href="games.html">Games</a></li>
                <li><a href="ai-workflow.html">AI Workflow</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <div class="container">
                <h1>About Me</h1>
                <p>Business professional, game developer, and AI enthusiast</p>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <div class="grid-2">
                    <div>
                        <h2>Personal Background</h2>
                        <p>Hello! I'm Richards, a passionate individual with diverse interests spanning technology, business, and creative development.</p>
                        <p>With a foundation in business management and a deep fascination for artificial intelligence and game development, I'm constantly exploring new ways to combine these disciplines.</p>
                        <p>When I'm not coding or developing games, you can find me exploring the latest AI tools, driving for Uber, or enjoying events in the Akron and Cleveland areas.</p>
                    </div>
                    <div class="card">
                        <h3>Quick Facts</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">📍 Location: Akron/Cleveland, Ohio</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">🎓 Education: Business Management & Administration</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">💼 Current: Independent Game Developer</li>
                            <li style="padding: 0.5rem 0;">🤖 AI Tools: MiMoCode, LM Studio, Claude</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section" style="background-color: var(--bg-secondary);">
            <div class="container">
                <h2 class="section-title">Professional Experience</h2>
                <div class="grid-2">
                    <div class="card">
                        <h3>Education</h3>
                        <h4>Bachelor's in Business Management & Administration</h4>
                        <p>Foundation in business principles, management strategies, and organizational leadership.</p>
                    </div>
                    <div class="card">
                        <h3>Skills & Expertise</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 0.25rem 0;">• Business Management</li>
                            <li style="padding: 0.25rem 0;">• Game Development (Roblox/Lua)</li>
                            <li style="padding: 0.25rem 0;">• AI Workflow Automation</li>
                            <li style="padding: 0.25rem 0;">• Project Management</li>
                            <li style="padding: 0.25rem 0;">• Technical Documentation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <h2 class="section-title">Employment History</h2>
                <div class="card">
                    <h3>[Position Title]</h3>
                    <p class="text-secondary">[Company Name] | [Start Date] - [End Date]</p>
                    <p>[Description of responsibilities and achievements]</p>
                </div>
                <!-- Add more positions as needed -->
            </div>
        </section>
        
        <section class="section" style="background-color: var(--bg-secondary);">
            <div class="container">
                <h2 class="section-title">Certifications & Achievements</h2>
                <div class="grid-3">
                    <div class="card">
                        <h3>[Certification 1]</h3>
                        <p>[Issuing Organization]</p>
                    </div>
                    <div class="card">
                        <h3>[Certification 2]</h3>
                        <p>[Issuing Organization]</p>
                    </div>
                    <div class="card">
                        <h3>[Achievement]</h3>
                        <p>[Description]</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <h2 class="section-title">Contact</h2>
                <div class="grid-2">
                    <div class="card">
                        <h3>Get in Touch</h3>
                        <p>Interested in collaborating or have questions? Feel free to reach out!</p>
                        <p><strong>Email:</strong> [your-email@example.com]</p>
                        <div class="social-links" style="justify-content: flex-start; margin-top: 1rem;">
                            <a href="#" aria-label="GitHub">GH</a>
                            <a href="#" aria-label="Twitter">TW</a>
                            <a href="#" aria-label="LinkedIn">LI</a>
                        </div>
                    </div>
                    <div class="card">
                        <h3>Resume/CV</h3>
                        <p>Download my full resume for detailed professional information.</p>
                        <a href="#" class="btn btn-primary">Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026 PetalScrolls Studio. All rights reserved.</p>
    </footer>
    
    <script src="js/theme.js"></script>
    <script src="js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 2: Test about page**

Open in browser and verify:
- All sections display correctly
- Responsive layout works
- Theme toggle works
- Navigation highlights "About"

- [ ] **Step 3: Commit about page**

```bash
git add .
git commit -m "feat: add about page with personal and professional sections"
```

---

## Task 4: Games Page

**Covers:** [S5]

**Files:**
- Create: `website-mimo_created/games.html`
- Create: `website-mimo_created/games/call-of-the-druid.html`
- Copy: Game thumbnails and assets

- [ ] **Step 1: Copy game assets**

```bash
cp /home/richards/Projects/Call-of-the-Druid/COTD-support-files/thumbnail\ 1.png /home/richards/Projects/website-mimo_created/assets/game-thumbnails/
cp /home/richards/Projects/Call-of-the-Druid/COTD-support-files/thumbnail\ 2-a.png /home/richards/Projects/website-mimo_created/assets/game-thumbnails/
cp /home/richards/Projects/Call-of-the-Druid/COTD-support-files/visual\ and\ mockups.png /home/richards/Projects/website-mimo_created/assets/game-thumbnails/
cp /home/richards/Projects/Call-of-the-Druid/COTD-support-files/boy\ in\ clearing\ take\ 2.png /home/richards/Projects/website-mimo_created/assets/game-thumbnails/
cp /home/richards/Projects/Call-of-the-Druid/COTD-support-files/PetalScroll\ emblem.png /home/richards/Projects/website-mimo_created/assets/images/
cp /home/richards/Projects/Call-of-the-Druid/COTD-support-files/in-game\ resources/scroll*.png /home/richards/Projects/website-mimo_created/assets/scroll-textures/
```

- [ ] **Step 2: Create games.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Game development projects by PetalScrolls Studio. Explore Call of the Druid and other creative works.">
    <title>Games | PetalScrolls</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/themes.css">
    <link rel="stylesheet" href="css/components.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="logo">PetalScrolls</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="games.html" class="active">Games</a></li>
                <li><a href="ai-workflow.html">AI Workflow</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <div class="container">
                <h1>Game Development</h1>
                <p>Creating immersive gaming experiences with PetalScrolls Studio</p>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="grid-2">
                    <div class="card">
                        <img src="assets/game-thumbnails/thumbnail-1.png" alt="Call of the Druid" style="width: 100%; border-radius: 4px; margin-bottom: 1rem;">
                        <h3>Call of the Druid</h3>
                        <p>An immersive game experience journeying through mystical lands and discovering the power of nature.</p>
                        <p class="alpha-badge">Alpha Target: Winter 2026</p>
                        <a href="games/call-of-the-druid.html" class="btn btn-primary">View Details</a>
                    </div>
                    <div class="card">
                        <div style="height: 200px; background: var(--bg-primary); border-radius: 4px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <p style="opacity: 0.5;">Coming Soon</p>
                        </div>
                        <h3>Future Project</h3>
                        <p>New exciting game project in development. Stay tuned for updates!</p>
                        <a href="#" class="btn btn-secondary" style="opacity: 0.5;">Coming Soon</a>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section" style="background-color: var(--bg-secondary);">
            <div class="container">
                <h2 class="section-title">About PetalScrolls Studio</h2>
                <div class="grid-2">
                    <div>
                        <img src="assets/images/PetalScroll emblem.png" alt="PetalScrolls Studio Logo" style="max-width: 150px; margin-bottom: 1rem;">
                        <p>PetalScrolls Studio is an independent game development studio focused on creating immersive gaming experiences. We combine creative storytelling with modern development tools to bring unique worlds to life.</p>
                    </div>
                    <div class="card">
                        <h3>Development Tools</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">🎮 Roblox Studio</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">🤖 AI-Assisted Development</li>
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">📝 Lua Scripting</li>
                            <li style="padding: 0.5rem 0;">🎨 Custom Asset Creation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <h2 class="section-title">Development Roadmap</h2>
                <div class="card">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                        <div>
                            <h4 style="color: var(--accent-primary);">Phase 1: Concept</h4>
                            <p>✓ Core mechanics defined</p>
                            <p>✓ Art style established</p>
                        </div>
                        <div>
                            <h4 style="color: var(--accent-primary);">Phase 2: Development</h4>
                            <p>✓ Core systems implemented</p>
                            <p>○ Content creation</p>
                        </div>
                        <div>
                            <h4 style="color: var(--accent-primary);">Phase 3: Testing</h4>
                            <p>○ Alpha testing</p>
                            <p>○ Bug fixes</p>
                        </div>
                        <div>
                            <h4 style="color: var(--accent-primary);">Phase 4: Launch</h4>
                            <p>○ Beta release</p>
                            <p>○ Full launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026 PetalScrolls Studio. All rights reserved.</p>
    </footer>
    
    <script src="js/theme.js"></script>
    <script src="js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create Call of the Druid detail page**

Create `games/call-of-the-druid.html` with detailed game information, screenshots, and development log.

- [ ] **Step 4: Test games pages**

Open in browser and verify:
- Game thumbnails display correctly
- Detail page loads
- Responsive layout works

- [ ] **Step 5: Commit games pages**

```bash
git add .
git commit -m "feat: add games pages with Call of the Druid showcase"
```

---

## Task 5: AI Workflow Page

**Covers:** [S5]

**Files:**
- Create: `website-mimo_created/ai-workflow.html`

- [ ] **Step 1: Create ai-workflow.html**

Create page showcasing:
- Local AI setup guide
- LM Studio configuration
- MiMoCode workflows
- Tools and resources
- Model recommendations

- [ ] **Step 2: Add content sections**

Include placeholder content for:
- Hardware requirements
- Software stack
- Workflow diagrams
- Tips and tricks

- [ ] **Step 3: Test AI workflow page**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add AI workflow page with local AI setup guide"
```

---

## Task 6: Public Dashboard

**Covers:** [S5]

**Files:**
- Create: `website-mimo_created/dashboard.html`
- Modify: `website-mimo_created/js/dashboard.js`

- [ ] **Step 1: Create dashboard.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Public dashboard showing AI workflow, game development progress, and tools.">
    <title>Dashboard | PetalScrolls</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/themes.css">
    <link rel="stylesheet" href="css/components.css">
    <style>
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }
        .widget {
            background: var(--bg-secondary);
            border-radius: 8px;
            padding: 1.5rem;
            border-left: 4px solid var(--accent-primary);
        }
        .widget h3 {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .widget-content {
            font-size: 0.95rem;
        }
        .widget-content ul {
            list-style: none;
            padding: 0;
        }
        .widget-content li {
            padding: 0.4rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        .widget-content li:last-child {
            border-bottom: none;
        }
        .stat-highlight {
            font-size: 2rem;
            font-weight: 700;
            color: var(--accent-primary);
            font-family: 'Playfair Display', Georgia, serif;
        }
        .private-link {
            display: inline-block;
            margin-top: 2rem;
            padding: 0.75rem 1.5rem;
            background: var(--accent-primary);
            color: var(--bg-primary);
            border-radius: 4px;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="logo">PetalScrolls</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="games.html">Games</a></li>
                <li><a href="ai-workflow.html">AI Workflow</a></li>
                <li><a href="dashboard.html" class="active">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <div class="container">
                <h1>Public Dashboard</h1>
                <p>AI workflow, development progress, and tools at a glance</p>
            </div>
        </section>
        
        <section class="section">
            <div class="container">
                <div class="dashboard-grid">
                    <div class="widget" style="border-left-color: #9b59b6;">
                        <h3>🤖 AI Models</h3>
                        <div class="widget-content">
                            <ul>
                                <li>LM Studio (Local)</li>
                                <li>MiMo Auto</li>
                                <li>Claude Code</li>
                                <li>Custom Fine-tunes</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="widget" style="border-left-color: #3498db;">
                        <h3>🛠️ Tools & Apps</h3>
                        <div class="widget-content">
                            <ul>
                                <li>MiMoCode</li>
                                <li>Roblox Studio</li>
                                <li>VS Code</li>
                                <li>Custom Scripts</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="widget" style="border-left-color: #27ae60;">
                        <h3>🎮 Game Progress</h3>
                        <div class="widget-content">
                            <div class="stat-highlight">75%</div>
                            <p>Call of the Druid - Alpha Ready</p>
                            <p style="font-size: 0.85rem; opacity: 0.7;">Target: Winter 2026</p>
                        </div>
                    </div>
                    
                    <div class="widget" style="border-left-color: #e74c3c;">
                        <h3>📊 Quick Stats</h3>
                        <div class="widget-content">
                            <ul>
                                <li>Development Hours: 500+</li>
                                <li>Features Completed: 45</li>
                                <li>Bugs Fixed: 120+</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <a href="dashboard-private.html" class="private-link">🔒 Access Private Dashboard</a>
                </div>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026 PetalScrolls Studio. All rights reserved.</p>
    </footer>
    
    <script src="js/theme.js"></script>
    <script src="js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 2: Test public dashboard**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add public dashboard with AI workflow and game progress widgets"
```

---

## Task 7: Private Dashboard with Auth

**Covers:** [S5, S6]

**Files:**
- Create: `website-mimo_created/dashboard-private.html`
- Modify: `website-mimo_created/js/dashboard.js`

- [ ] **Step 1: Create dashboard-private.html with password gate**

Include:
- Password input form
- Session management via localStorage
- 24-hour session expiration
- Calendar widget
- Dev task tracker
- Quick links

- [ ] **Step 2: Create dashboard.js with auth logic**

```javascript
// dashboard.js
(function() {
    const SESSION_KEY = 'dashboard_session';
    const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
    
    function isAuthenticated() {
        const session = JSON.parse(localStorage.getItem(SESSION_KEY));
        if (!session) return false;
        return Date.now() - session.timestamp < SESSION_DURATION;
    }
    
    function login(password) {
        // Simple hash for demo - in production use proper auth
        if (password === 'your-secure-password') {
            localStorage.setItem(SESSION_KEY, JSON.stringify({
                timestamp: Date.now()
            }));
            return true;
        }
        return false;
    }
    
    function logout() {
        localStorage.removeItem(SESSION_KEY);
        window.location.href = 'dashboard.html';
    }
    
    // Export for use
    window.DashboardAuth = { isAuthenticated, login, logout };
})();
```

- [ ] **Step 3: Add dashboard widgets**

- Calendar display
- Task list with add/complete functionality
- Quick links to tools

- [ ] **Step 4: Test private dashboard**

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add private dashboard with password gate and widgets"
```

---

## Task 8: Blog System (Basic)

**Covers:** [S8]

**Files:**
- Create: `website-mimo_created/blog.html`
- Create: `website-mimo_created/blog/` directory

- [ ] **Step 1: Create blog.html with static post listing**

For now, create a static HTML blog page with placeholder posts. Markdown conversion can be added later.

- [ ] **Step 2: Add sample blog posts as HTML sections**

- [ ] **Step 3: Test blog page**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add blog page with static post structure"
```

---

## Task 9: Responsive Polish

**Covers:** [S3]

**Files:**
- Create: `website-mimo_created/css/responsive.css`

- [ ] **Step 1: Create responsive.css with media queries**

```css
/* responsive.css */

/* Tablet */
@media (max-width: 992px) {
    .featured-game {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .stats {
        gap: 2rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.5rem; }
    
    .section {
        padding: 3rem 1rem;
    }
    
    .hero-featured {
        padding: 4rem 1rem;
    }
    
    .dashboard-grid {
        grid-template-columns: 1fr;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .navbar {
        padding: 1rem;
    }
    
    .logo {
        font-size: 1.25rem;
    }
    
    .btn {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
}
```

- [ ] **Step 2: Test all pages at different breakpoints**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add responsive CSS for mobile and tablet"
```

---

## Task 10: SEO & Final Polish

**Covers:** [S7]

**Files:**
- Modify: All HTML files (add meta tags)
- Create: `website-mimo_created/robots.txt`
- Create: `website-mimo_created/sitemap.xml`

- [ ] **Step 1: Add meta descriptions to all pages**

- [ ] **Step 2: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

- [ ] **Step 3: Create basic sitemap.xml**

- [ ] **Step 4: Add Open Graph tags**

- [ ] **Step 5: Final testing**

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: add SEO meta tags, robots.txt, and sitemap"
```

---

## Self-Review Checklist

- [ ] All spec sections covered by tasks
- [ ] No placeholders or TODOs in implementation
- [ ] File paths are consistent across tasks
- [ ] Theme system works correctly
- [ ] Navigation functions on all pages
- [ ] Responsive design works
- [ ] Private dashboard auth works
- [ ] All pages have proper meta tags