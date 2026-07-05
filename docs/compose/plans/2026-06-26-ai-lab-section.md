# AI Lab Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use compose:subagent (recommended) or compose:execute to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the AI Lab section (landing page, model database, benchmarks, testing methodology, tools) and update site navigation with dropdown menus.

**Architecture:** Static HTML/CSS/JS pages following existing site patterns. Model database uses data-* attributes for CSS/JS filtering. Navigation restructured with CSS-only dropdowns. AI Workflow content absorbed into AI Lab/Tools.

**Tech Stack:** HTML5, CSS3 (existing base/themes/components/responsive), vanilla JS (existing nav.js, theme.js pattern)

---

## File Map

### New Files
| File | Purpose |
|------|---------|
| `ai-lab.html` | Landing page for AI Lab section |
| `ai-lab/model-database.html` | Filterable model catalog table |
| `ai-lab/benchmarks.html` | Benchmark results + external eval links |
| `ai-lab/testing-methodology.html` | Personal testing philosophy (4 categories) |
| `ai-lab/tools.html` | AI tools list (content from ai-workflow.html) |
| `css/dropdowns.css` | Dropdown navigation styles |
| `js/filters.js` | Model database filter logic |

### Modified Files
| File | Changes |
|------|---------|
| `index.html` | Update nav, add AI Lab to hero cards |
| `about.html` | Update nav |
| `games.html` | Update nav |
| `dashboard.html` | Update nav |
| `dashboard-private.html` | Update nav |
| `blog.html` | Update nav |
| `ai-workflow.html` | Add redirect meta tag to ai-lab.html |

---

## Task 1: Create AI Lab Landing Page

**Files:**
- Create: `ai-lab.html`

- [ ] **Step 1: Create ai-lab.html with section overview**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="AI Lab - Model database, benchmarks, testing methodology, and tools for local AI experimentation.">
    <meta property="og:title" content="AI Lab | PetalScroll Studios">
    <meta property="og:description" content="Model database, benchmarks, testing methodology, and tools for local AI experimentation.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://petalscroll-studios.github.io/mainsite/ai-lab.html">
    <meta property="og:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="AI Lab | PetalScroll Studios">
    <meta name="twitter:description" content="Model database, benchmarks, testing methodology, and tools for local AI experimentation.">
    <meta name="twitter:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <title>AI Lab | PetalScroll Studios</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/themes.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="index.html" class="logo">PetalScroll Studios</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="games.html">Games</a></li>
                <li><a href="ai-lab.html" class="active">AI Lab</a></li>
                <li><a href="dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>AI Lab</h1>
                <p>Practical AI experimentation from a normal creator/developer perspective</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="section-title">What's Inside</h2>
                <div class="grid-2">
                    <a href="ai-lab/model-database.html" class="card">
                        <h3>📊 Model Database</h3>
                        <p>Every model I've tested, with hardware requirements, performance ratings, and honest notes about what worked and what didn't.</p>
                    </a>
                    <a href="ai-lab/benchmarks.html" class="card">
                        <h3>📈 Benchmarks</h3>
                        <p>My personal benchmark results plus links to standard AI evaluations and leaderboards.</p>
                    </a>
                    <a href="ai-lab/testing-methodology.html" class="card">
                        <h3>🔬 Testing Methodology</h3>
                        <p>How I test AI models before deciding whether they belong in my workflow. Not just benchmark scores.</p>
                    </a>
                    <a href="ai-lab/tools.html" class="card">
                        <h3>🛠️ Tools</h3>
                        <p>AI tools I use daily: LM Studio, MiMoCode, Unsloth Studio, and more.</p>
                    </a>
                </div>
            </div>
        </section>

        <section class="section" style="background-color: var(--bg-secondary);">
            <div class="container">
                <h2 class="section-title">My Setup</h2>
                <div class="card">
                    <h3>Hardware</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">💻 MSI GF63 Thin</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">🎮 RTX 3050 Laptop GPU (4GB VRAM)</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">🧠 16GB RAM</li>
                        <li style="padding: 0.5rem 0;">⚡ Real-world constraints, real results</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="section-title">Philosophy</h2>
                <div class="card" style="max-width: 800px; margin: 0 auto;">
                    <p style="font-size: 1.1rem; line-height: 1.8;">"I test this stuff on real hardware, with real constraints, and document what actually happens. A company testing a $100k enterprise AI deployment and me testing a 4GB VRAM laptop are doing similar things at different scales."</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 PetalScroll Studios. All rights reserved.</p>
    </footer>

    <script src="js/theme.js"></script>
    <script src="js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify page renders**

Open `ai-lab.html` in browser. Confirm:
- Hero section displays
- 4 section cards link to correct (not yet created) pages
- Hardware section shows specs
- Theme toggle works

- [ ] **Step 3: Commit**

```bash
git add ai-lab.html
git commit -m "feat: add AI Lab landing page"
```

---

## Task 2: Create Model Database Page

**Files:**
- Create: `ai-lab/model-database.html`
- Create: `js/filters.js`

- [ ] **Step 1: Create model-database.html with filterable table**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Model Database - AI models I've tested with performance ratings and hardware requirements.">
    <meta property="og:title" content="Model Database | AI Lab | PetalScroll Studios">
    <meta property="og:description" content="AI models I've tested with performance ratings and hardware requirements.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://petalscroll-studios.github.io/mainsite/ai-lab/model-database.html">
    <meta property="og:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Model Database | AI Lab | PetalScroll Studios">
    <meta name="twitter:description" content="AI models I've tested with performance ratings and hardware requirements.">
    <meta name="twitter:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <title>Model Database | AI Lab | PetalScroll Studios</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/themes.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <style>
        .filter-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        .filter-btn {
            padding: 0.5rem 1rem;
            border: 2px solid var(--border-color);
            border-radius: 4px;
            background: var(--bg-secondary);
            color: var(--text-primary);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .filter-btn:hover,
        .filter-btn.active {
            border-color: var(--accent-primary);
            background: var(--accent-primary);
            color: var(--bg-primary);
        }
        .model-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        .model-table th,
        .model-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }
        .model-table th {
            background: var(--bg-secondary);
            font-weight: 600;
        }
        .model-table tr:hover {
            background: var(--bg-secondary);
        }
        .status-badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        .status-active {
            background: #22c55e;
            color: #fff;
        }
        .status-retired {
            background: #eab308;
            color: #000;
        }
        .status-failed {
            background: #ef4444;
            color: #fff;
        }
        .rating {
            display: flex;
            gap: 0.25rem;
        }
        .rating-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--border-color);
        }
        .rating-dot.filled {
            background: var(--accent-primary);
        }
        @media (max-width: 768px) {
            .model-table {
                font-size: 0.9rem;
            }
            .model-table th,
            .model-table td {
                padding: 0.75rem 0.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="../index.html" class="logo">PetalScroll Studios</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about.html">About</a></li>
                <li><a href="../games.html">Games</a></li>
                <li><a href="../ai-lab.html" class="active">AI Lab</a></li>
                <li><a href="../dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Model Database</h1>
                <p>Every model I've tested, with honest notes about what worked and what didn't</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="filter-bar">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="active">Active</button>
                    <button class="filter-btn" data-filter="retired">Retired</button>
                    <button class="filter-btn" data-filter="failed">Failed</button>
                </div>

                <div style="overflow-x: auto;">
                    <table class="model-table" id="model-table">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Size</th>
                                <th>Hardware</th>
                                <th>Runtime</th>
                                <th>Coding</th>
                                <th>Reasoning</th>
                                <th>Speed</th>
                                <th>Status</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-status="active">
                                <td><strong>Qwen 3.5 9B</strong></td>
                                <td>9B</td>
                                <td>RTX 3050</td>
                                <td>LM Studio</td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>~8 tok/s</td>
                                <td><span class="status-badge status-active">Active</span></td>
                                <td>Great daily assistant, solid coding</td>
                            </tr>
                            <tr data-status="active">
                                <td><strong>Gemma4:e2b</strong></td>
                                <td>~8B</td>
                                <td>RTX 3050</td>
                                <td>LM Studio</td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>~10 tok/s</td>
                                <td><span class="status-badge status-active">Active</span></td>
                                <td>Recommended by community, fast</td>
                            </tr>
                            <tr data-status="retired">
                                <td><strong>Qwen 2.5 Coder 7B</strong></td>
                                <td>7B</td>
                                <td>RTX 3050</td>
                                <td>LM Studio</td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot filled"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>~12 tok/s</td>
                                <td><span class="status-badge status-retired">Retired</span></td>
                                <td>Replaced by newer models</td>
                            </tr>
                            <tr data-status="failed">
                                <td><strong>Roblox-Coder-v2</strong></td>
                                <td>7B</td>
                                <td>RTX 3050</td>
                                <td>LM Studio</td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>
                                    <div class="rating">
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                        <span class="rating-dot"></span>
                                    </div>
                                </td>
                                <td>N/A</td>
                                <td><span class="status-badge status-failed">Failed</span></td>
                                <td>Failed to produce output, LM Studio issues</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p style="margin-top: 2rem; opacity: 0.7; font-size: 0.9rem;">
                    <strong>Note:</strong> Ratings are personal assessments based on my workflow, not standardized benchmarks.
                    Speed measured on RTX 3050 Laptop with 4GB VRAM.
                </p>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 PetalScroll Studios. All rights reserved.</p>
    </footer>

    <script src="../js/theme.js"></script>
    <script src="../js/nav.js"></script>
    <script src="../js/filters.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create js/filters.js for table filtering**

```javascript
// filters.js - Model database filter logic
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tableRows = document.querySelectorAll('#model-table tbody tr');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            tableRows.forEach(row => {
                if (filter === 'all' || row.dataset.status === filter) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
});
```

- [ ] **Step 3: Verify filtering works**

Open `ai-lab/model-database.html` in browser. Confirm:
- Table displays with 4 sample models
- Clicking "Active" shows only active models
- Clicking "Failed" shows only failed models
- Clicking "All" shows all models
- Theme toggle works
- Table scrolls horizontally on mobile

- [ ] **Step 4: Commit**

```bash
git add ai-lab/model-database.html js/filters.js
git commit -m "feat: add model database with filterable table"
```

---

## Task 3: Create Benchmarks Page

**Files:**
- Create: `ai-lab/benchmarks.html`

- [ ] **Step 1: Create benchmarks.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Benchmarks - My personal benchmark results and links to standard AI evaluations.">
    <meta property="og:title" content="Benchmarks | AI Lab | PetalScroll Studios">
    <meta property="og:description" content="My personal benchmark results and links to standard AI evaluations.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://petalscroll-studios.github.io/mainsite/ai-lab/benchmarks.html">
    <meta property="og:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Benchmarks | AI Lab | PetalScroll Studios">
    <meta name="twitter:description" content="My personal benchmark results and links to standard AI evaluations.">
    <meta name="twitter:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <title>Benchmarks | AI Lab | PetalScroll Studios</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/themes.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <style>
        .benchmark-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        .benchmark-table th,
        .benchmark-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }
        .benchmark-table th {
            background: var(--bg-secondary);
            font-weight: 600;
        }
        .external-links {
            list-style: none;
            padding: 0;
        }
        .external-links li {
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        .external-links a {
            color: var(--accent-primary);
            text-decoration: none;
            font-weight: 500;
        }
        .external-links a:hover {
            text-decoration: underline;
        }
        .external-links .link-desc {
            display: block;
            margin-top: 0.25rem;
            opacity: 0.7;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="../index.html" class="logo">PetalScroll Studios</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about.html">About</a></li>
                <li><a href="../games.html">Games</a></li>
                <li><a href="../ai-lab.html" class="active">AI Lab</a></li>
                <li><a href="../dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Benchmarks</h1>
                <p>My results plus links to standard AI evaluations</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="section-title">My Benchmark Results</h2>
                <p style="max-width: 800px; margin: 0 auto 2rem; text-align: center;">
                    Tested on MSI GF63 Thin, RTX 3050 Laptop (4GB VRAM), 16GB RAM. These are practical workflow tests, not synthetic benchmarks.
                </p>

                <div style="overflow-x: auto;">
                    <table class="benchmark-table">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Coding Task</th>
                                <th>Reasoning Task</th>
                                <th>Speed (tok/s)</th>
                                <th>Context Window</th>
                                <th>Overall</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Qwen 3.5 9B Q4_K_M</strong></td>
                                <td>8/10</td>
                                <td>7/10</td>
                                <td>~8</td>
                                <td>Good at 8K</td>
                                <td>8/10</td>
                            </tr>
                            <tr>
                                <td><strong>Gemma4:e2b</strong></td>
                                <td>8/10</td>
                                <td>8/10</td>
                                <td>~10</td>
                                <td>Good at 8K</td>
                                <td>8/10</td>
                            </tr>
                            <tr>
                                <td><strong>LFM2.5-8b-a1b (MOE)</strong></td>
                                <td>7/10</td>
                                <td>7/10</td>
                                <td>~9</td>
                                <td>Good at 8K</td>
                                <td>7/10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section class="section" style="background-color: var(--bg-secondary);">
            <div class="container">
                <h2 class="section-title">Standard AI Evaluations</h2>
                <p style="max-width: 800px; margin: 0 auto 2rem; text-align: center;">
                    <strong>Important:</strong> Benchmarks are useful, but they are not a replacement for testing your actual workflow.
                </p>

                <div class="grid-2">
                    <div class="card">
                        <h3>General LLM Benchmarks</h3>
                        <ul class="external-links">
                            <li>
                                <a href="https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard" target="_blank" rel="noopener">HuggingFace Open LLM Leaderboard</a>
                                <span class="link-desc">Community leaderboard for open models</span>
                            </li>
                            <li>
                                <a href="https://github.com/hendrycks/test" target="_blank" rel="noopener">MMLU</a>
                                <span class="link-desc">Massive Multitask Language Understanding</span>
                            </li>
                            <li>
                                <a href="https://arxiv.org/abs/2103.03874" target="_blank" rel="noopener">ARC (AI2 Reasoning Challenge)</a>
                                <span class="link-desc">Science reasoning questions</span>
                            </li>
                            <li>
                                <a href="https://github.com/openai/grade-school-math" target="_blank" rel="noopener">GSM8K</a>
                                <span class="link-desc">Grade school math problems</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Coding Benchmarks</h3>
                        <ul class="external-links">
                            <li>
                                <a href="https://github.com/openai/human-eval" target="_blank" rel="noopener">HumanEval</a>
                                <span class="link-desc">Code generation benchmark</span>
                            </li>
                            <li>
                                <a href="https://github.com/mbpp/mbpp" target="_blank" rel="noopener">MBPP</a>
                                <span class="link-desc">Mostly Basic Python Problems</span>
                            </li>
                            <li>
                                <a href="https://www.swebench.com/" target="_blank" rel="noopener">SWE-bench</a>
                                <span class="link-desc">Real GitHub issue resolution</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="grid-2" style="margin-top: 2rem;">
                    <div class="card">
                        <h3>Reasoning</h3>
                        <ul class="external-links">
                            <li>
                                <a href="https://github.com/idavidrein/gpqa" target="_blank" rel="noopener">GPQA</a>
                                <span class="link-desc">Graduate-level science questions</span>
                            </li>
                            <li>
                                <a href="https://github.com/hendrycks/math" target="_blank" rel="noopener">MATH</a>
                                <span class="link-desc">Competition mathematics</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Agent & Tool Use</h3>
                        <ul class="external-links">
                            <li>
                                <a href="https://gorilla.cs.berkeley.edu/leaderboard.html" target="_blank" rel="noopener">Berkeley Function Calling Leaderboard</a>
                                <span class="link-desc">Tool use and function calling</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 PetalScroll Studios. All rights reserved.</p>
    </footer>

    <script src="../js/theme.js"></script>
    <script src="../js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify page renders**

Open `ai-lab/benchmarks.html` in browser. Confirm:
- Personal benchmark table displays
- External links open in new tabs
- All 4 categories (General, Coding, Reasoning, Agent) display
- Theme toggle works

- [ ] **Step 3: Commit**

```bash
git add ai-lab/benchmarks.html
git commit -m "feat: add benchmarks page with personal results and external links"
```

---

## Task 4: Create Testing Methodology Page

**Files:**
- Create: `ai-lab/testing-methodology.html`

- [ ] **Step 1: Create testing-methodology.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Testing Methodology - How I test AI models before adding them to my workflow.">
    <meta property="og:title" content="Testing Methodology | AI Lab | PetalScroll Studios">
    <meta property="og:description" content="How I test AI models before adding them to my workflow.">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://petalscroll-studios.github.io/mainsite/ai-lab/testing-methodology.html">
    <meta property="og:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Testing Methodology | AI Lab | PetalScroll Studios">
    <meta name="twitter:description" content="How I test AI models before adding them to my workflow.">
    <meta name="twitter:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <title>Testing Methodology | AI Lab | PetalScroll Studios</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/themes.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <style>
        .methodology-step {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: var(--bg-secondary);
            border-radius: 8px;
            border-left: 4px solid var(--accent-primary);
        }
        .step-number {
            width: 50px;
            height: 50px;
            background: var(--accent-primary);
            color: var(--bg-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            flex-shrink: 0;
        }
        .step-content {
            flex: 1;
        }
        .step-content h3 {
            margin-bottom: 0.5rem;
        }
        .test-example {
            background: var(--bg-primary);
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.9rem;
            border: 1px solid var(--border-color);
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="../index.html" class="logo">PetalScroll Studios</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about.html">About</a></li>
                <li><a href="../games.html">Games</a></li>
                <li><a href="../ai-lab.html" class="active">AI Lab</a></li>
                <li><a href="../dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Testing Methodology</h1>
                <p>How I test AI models before deciding whether they belong in my workflow</p>
            </div>
        </section>

        <section class="section">
            <div class="container" style="max-width: 900px;">
                <h2 class="section-title">My Testing Philosophy</h2>
                <p style="margin-bottom: 2rem; text-align: center;">
                    I don't only care about benchmark scores. I test for real-world usefulness on my actual hardware with my actual tasks.
                </p>

                <div class="methodology-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>General Conversation</h3>
                        <p>Can it follow instructions? Does it understand context? Is it helpful without being verbose?</p>
                        <ul>
                            <li>Summarize a long document</li>
                            <li>Explain a concept simply</li>
                            <li>Reason through a problem step by step</li>
                        </ul>
                        <div class="test-example">
                            <strong>Test prompt:</strong> "Explain the difference between REST and GraphQL in 3 sentences."
                        </div>
                    </div>
                </div>

                <div class="methodology-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Coding Ability</h3>
                        <p>Can it understand an existing project? Modify code safely? Debug errors? Maintain style?</p>
                        <ul>
                            <li>Read a codebase and answer questions about it</li>
                            <li>Add a feature to existing code</li>
                            <li>Fix a bug without breaking other things</li>
                            <li>Match the existing code style</li>
                        </ul>
                        <div class="test-example">
                            <strong>Test prompt:</strong> "Add error handling to this function. Match the existing code style."
                        </div>
                    </div>
                </div>

                <div class="methodology-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Agent Behavior</h3>
                        <p>Can it use tools? Create files? Follow multi-step instructions?</p>
                        <ul>
                            <li>Use file read/write tools correctly</li>
                            <li>Execute commands safely</li>
                            <li>Follow a multi-step plan without losing track</li>
                        </ul>
                        <div class="test-example">
                            <strong>Test prompt:</strong> "Create a new file called utils.js with a function that formats dates. Then update index.html to use it."
                        </div>
                    </div>
                </div>

                <div class="methodology-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h3>Hardware Reality</h3>
                        <p>A benchmark saying a model is "excellent" does not matter if it doesn't fit VRAM, is too slow, or context destroys performance.</p>
                        <ul>
                            <li>Does it fit in 4GB VRAM?</li>
                            <li>Is it fast enough for interactive use?</li>
                            <li>How does it handle long contexts?</li>
                            <li>Does it crash or produce garbage at scale?</li>
                        </ul>
                        <div class="test-example">
                            <strong>Reality check:</strong> "I tested this model with a 16K context window. It worked at 2K, was slow at 8K, and produced garbage at 16K."
                        </div>
                    </div>
                </div>

                <div class="card" style="margin-top: 2rem;">
                    <h3>The Bottom Line</h3>
                    <p>A company testing a $100k enterprise AI deployment and me testing a 4GB VRAM laptop are doing similar things at different scales. The methodology is the same: test with real tasks, measure real performance, document what actually happens.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 PetalScroll Studios. All rights reserved.</p>
    </footer>

    <script src="../js/theme.js"></script>
    <script src="../js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify page renders**

Open `ai-lab/testing-methodology.html` in browser. Confirm:
- 4 methodology steps display with numbered circles
- Test examples show in code blocks
- Philosophy card at bottom displays
- Theme toggle works

- [ ] **Step 3: Commit**

```bash
git add ai-lab/testing-methodology.html
git commit -m "feat: add testing methodology page with 4-category philosophy"
```

---

## Task 5: Create Tools Page

**Files:**
- Create: `ai-lab/tools.html`

- [ ] **Step 1: Create tools.html (content migrated from ai-workflow.html)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="AI Tools - Tools I use daily for local AI experimentation and development.">
    <meta property="og:title" content="Tools | AI Lab | PetalScroll Studios">
    <meta property="og:description" content="Tools I use daily for local AI experimentation and development.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://petalscroll-studios.github.io/mainsite/ai-lab/tools.html">
    <meta property="og:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Tools | AI Lab | PetalScroll Studios">
    <meta name="twitter:description" content="Tools I use daily for local AI experimentation and development.">
    <meta name="twitter:image" content="https://petalscroll-studios.github.io/mainsite/assets/images/og-image.jpg">
    <title>Tools | AI Lab | PetalScroll Studios</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="../css/themes.css">
    <link rel="stylesheet" href="../css/components.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <style>
        .tool-card {
            border-left: 4px solid var(--accent-primary);
            margin-bottom: 1.5rem;
        }
        .tool-card h3 {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .tool-link {
            display: inline-block;
            margin-top: 0.5rem;
            color: var(--accent-primary);
            text-decoration: none;
        }
        .tool-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <nav class="navbar">
            <a href="../index.html" class="logo">PetalScroll Studios</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../about.html">About</a></li>
                <li><a href="../games.html">Games</a></li>
                <li><a href="../ai-lab.html" class="active">AI Lab</a></li>
                <li><a href="../dashboard.html">Dashboard</a></li>
            </ul>
            <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>AI Tools</h1>
                <p>Tools I use daily for local AI experimentation and development</p>
            </div>
        </section>

        <section class="section">
            <div class="container" style="max-width: 900px;">
                <div class="card tool-card">
                    <h3>🖥️ LM Studio</h3>
                    <p><strong>Purpose:</strong> Running local LLMs</p>
                    <p>My primary tool for loading and testing local models. Supports GGUF format, multiple model architectures, and provides a clean UI for model management.</p>
                    <p><strong>Why I use it:</strong> Easy to use, good model library, works well on my RTX 3050.</p>
                    <a href="https://lmstudio.ai/" target="_blank" rel="noopener" class="tool-link">Visit LM Studio →</a>
                </div>

                <div class="card tool-card">
                    <h3>🤖 MiMoCode</h3>
                    <p><strong>Purpose:</strong> AI-assisted development</p>
                    <p>Interactive CLI tool for software engineering tasks. Helps with code editing, debugging, and project navigation.</p>
                    <p><strong>Why I use it:</strong> Fast, understands context well, works with local models.</p>
                </div>

                <div class="card tool-card">
                    <h3>🦙 Unsloth Studio</h3>
                    <p><strong>Purpose:</strong> Model fine-tuning</p>
                    <p>Tool for fine-tuning models on custom data. Used for experimenting with model customization.</p>
                    <p><strong>Why I use it:</strong> Makes fine-tuning accessible on consumer hardware.</p>
                    <a href="https://unsloth.ai/" target="_blank" rel="noopener" class="tool-link">Visit Unsloth →</a>
                </div>

                <div class="card tool-card">
                    <h3>🔧 Ollama</h3>
                    <p><strong>Purpose:</strong> Model testing and comparison</p>
                    <p>Lightweight framework for running models locally. Good for quick tests and comparing different model versions.</p>
                    <p><strong>Why I use it:</strong> Fast setup, good for scripting and automation.</p>
                    <a href="https://ollama.ai/" target="_blank" rel="noopener" class="tool-link">Visit Ollama →</a>
                </div>

                <div class="card tool-card">
                    <h3>🎨 Meshy</h3>
                    <p><strong>Purpose:</strong> 3D asset generation</p>
                    <p>AI-powered 3D model generation for game development assets.</p>
                    <p><strong>Why I use it:</strong> Quick prototyping of game assets.</p>
                    <a href="https://www.meshy.ai/" target="_blank" rel="noopener" class="tool-link">Visit Meshy →</a>
                </div>

                <div class="card tool-card">
                    <h3>🧊 Blender</h3>
                    <p><strong>Purpose:</strong> 3D modeling and editing</p>
                    <p>Professional 3D creation suite for editing and refining game assets.</p>
                    <p><strong>Why I use it:</strong> Industry standard, free, powerful.</p>
                    <a href="https://www.blender.org/" target="_blank" rel="noopener" class="tool-link">Visit Blender →</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 PetalScroll Studios. All rights reserved.</p>
    </footer>

    <script src="../js/theme.js"></script>
    <script src="../js/nav.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify page renders**

Open `ai-lab/tools.html` in browser. Confirm:
- 6 tool cards display with descriptions
- External links open in new tabs
- Tool cards have left accent border
- Theme toggle works

- [ ] **Step 3: Commit**

```bash
git add ai-lab/tools.html
git commit -m "feat: add tools page with AI tool descriptions"
```

---

## Task 6: Create Dropdown Navigation CSS

**Files:**
- Create: `css/dropdowns.css`

- [ ] **Step 1: Create css/dropdowns.css**

```css
/* dropdowns.css - Navigation dropdown styles */

/* Dropdown container */
.nav-item {
    position: relative;
}

/* Dropdown toggle - items with dropdowns */
.nav-item > a::after {
    content: ' ▾';
    font-size: 0.7em;
    opacity: 0.7;
}

/* Dropdown menu */
.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: var(--bg-secondary);
    border-radius: 4px;
    box-shadow: 0 4px 16px var(--shadow-color);
    z-index: 1000;
    list-style: none;
    padding: 0.5rem 0;
    margin: 0;
}

/* Show dropdown on hover/focus */
.nav-item:hover > .dropdown-menu,
.nav-item:focus-within > .dropdown-menu {
    display: block;
}

/* Dropdown items */
.dropdown-menu li a {
    display: block;
    padding: 0.75rem 1.5rem;
    color: var(--text-primary);
    text-decoration: none;
    transition: background 0.2s ease;
}

.dropdown-menu li a:hover {
    background: var(--bg-primary);
    color: var(--accent-primary);
}

/* Mobile adjustments */
@media (max-width: 768px) {
    .dropdown-menu {
        position: static;
        box-shadow: none;
        background: var(--bg-primary);
        padding-left: 1rem;
    }

    .nav-item > a::after {
        content: ' +';
    }

    .nav-item.open > a::after {
        content: ' −';
    }

    .nav-item.open > .dropdown-menu {
        display: block;
    }
}
```

- [ ] **Step 2: Add dropdowns.css to all HTML files**

Add `<link rel="stylesheet" href="css/dropdowns.css">` (or `../css/dropdowns.css` for subdirectory pages) after the responsive.css link in:
- index.html
- about.html
- games.html
- ai-lab.html
- ai-lab/model-database.html
- ai-lab/benchmarks.html
- ai-lab/testing-methodology.html
- ai-lab/tools.html
- dashboard.html
- dashboard-private.html
- blog.html

- [ ] **Step 3: Update nav structure in all HTML files**

Replace the flat nav list with dropdown structure. Example for index.html:

```html
<ul class="nav-links">
    <li><a href="index.html" class="active">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li class="nav-item">
        <a href="games.html">Games</a>
        <ul class="dropdown-menu">
            <li><a href="games/call-of-the-druid.html">Call of the Druid</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a href="ai-lab.html">AI Lab</a>
        <ul class="dropdown-menu">
            <li><a href="ai-lab/model-database.html">Model Database</a></li>
            <li><a href="ai-lab/benchmarks.html">Benchmarks</a></li>
            <li><a href="ai-lab/testing-methodology.html">Testing Methodology</a></li>
            <li><a href="ai-lab/tools.html">Tools</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a href="youtube.html">YouTube</a>
        <ul class="dropdown-menu">
            <li><a href="youtube/video-notes.html">Video Notes</a></li>
            <li><a href="youtube/experiments.html">Experiments</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a href="resources.html">Resources</a>
        <ul class="dropdown-menu">
            <li><a href="resources/ai-evaluation-links.html">AI Evaluation Links</a></li>
            <li><a href="resources/guides.html">Guides</a></li>
            <li><a href="resources/downloads.html">Downloads</a></li>
        </ul>
    </li>
    <li><a href="dashboard.html">Dashboard</a></li>
</ul>
```

- [ ] **Step 4: Update js/nav.js to handle mobile dropdowns**

```javascript
// Add to existing nav.js - mobile dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                item.classList.toggle('open');
            }
        });
    });
});
```

- [ ] **Step 5: Verify dropdowns work**

Open site in browser. Confirm:
- Desktop: hovering over Games/AI Lab/YouTube/Resources shows dropdown
- Dropdown items link to correct pages
- Mobile: tapping dropdown toggle expands menu
- Active page is highlighted correctly
- Theme toggle still works

- [ ] **Step 6: Commit**

```bash
git add css/dropdowns.css index.html about.html games.html ai-lab.html ai-lab/*.html dashboard.html dashboard-private.html blog.html js/nav.js
git commit -m "feat: add dropdown navigation for new sections"
```

---

## Task 7: Redirect ai-workflow.html

**Files:**
- Modify: `ai-workflow.html`

- [ ] **Step 1: Add redirect to ai-workflow.html**

Replace entire content of ai-workflow.html with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0; url=ai-lab.html">
    <link rel="canonical" href="ai-lab.html">
    <title>Redirecting to AI Lab | PetalScroll Studios</title>
</head>
<body>
    <p>Redirecting to <a href="ai-lab.html">AI Lab</a>...</p>
</body>
</html>
```

- [ ] **Step 2: Verify redirect works**

Open `ai-workflow.html` in browser. Confirm it redirects to `ai-lab.html`.

- [ ] **Step 3: Commit**

```bash
git add ai-workflow.html
git commit -m "feat: redirect ai-workflow.html to ai-lab.html"
```

---

## Task 8: Update Homepage

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update hero section cards to include AI Lab**

Replace the "What I Do" section cards with:

```html
<section class="section" style="background-color: var(--bg-secondary);">
    <div class="container">
        <h2 class="section-title">What I Do</h2>
        <div class="grid-3">
            <a href="games.html" class="card">
                <h3>🎮 Game Development</h3>
                <p>Creating immersive gaming experiences with Roblox and modern development tools.</p>
            </a>
            <a href="ai-lab.html" class="card">
                <h3>🤖 AI Lab</h3>
                <p>Testing local AI models, documenting results, and sharing what actually works.</p>
            </a>
            <a href="about.html" class="card">
                <h3>💼 Professional</h3>
                <p>Transportation industry expert with 20+ years experience in logistics, billing, operations.</p>
            </a>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Add YouTube and Resources to Latest Updates section**

Update the Latest Updates section to include new sections:

```html
<section class="section">
    <div class="container">
        <h2 class="section-title">Latest Updates</h2>
        <div class="grid-2">
            <div class="card">
                <h3>AI Lab Launch</h3>
                <p>New section with model database, benchmarks, and testing methodology.</p>
                <a href="ai-lab.html" class="btn btn-secondary">Explore AI Lab</a>
            </div>
            <div class="card">
                <h3>Coming Soon</h3>
                <p>YouTube video notes and AI evaluation resources launching soon.</p>
                <a href="about.html" class="btn btn-secondary">Learn More</a>
            </div>
        </div>
    </div>
</section>
```

- [ ] **Step 3: Verify homepage updates**

Open `index.html` in browser. Confirm:
- AI Lab card replaces AI Workflows card
- Latest Updates section shows new content
- All links work

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update homepage with AI Lab section and new links"
```

---

## Task 9: Update Sitemap

**Files:**
- Modify: `sitemap.xml`

- [ ] **Step 1: Add new pages to sitemap.xml**

Add URLs for all new pages:

```xml
<url>
    <loc>https://petalscroll-studios.github.io/mainsite/ai-lab.html</loc>
    <lastmod>2026-06-26</lastmod>
    <priority>0.8</priority>
</url>
<url>
    <loc>https://petalscroll-studios.github.io/mainsite/ai-lab/model-database.html</loc>
    <lastmod>2026-06-26</lastmod>
    <priority>0.7</priority>
</url>
<url>
    <loc>https://petalscroll-studios.github.io/mainsite/ai-lab/benchmarks.html</loc>
    <lastmod>2026-06-26</lastmod>
    <priority>0.7</priority>
</url>
<url>
    <loc>https://petalscroll-studios.github.io/mainsite/ai-lab/testing-methodology.html</loc>
    <lastmod>2026-06-26</lastmod>
    <priority>0.7</priority>
</url>
<url>
    <loc>https://petalscroll-studios.github.io/mainsite/ai-lab/tools.html</loc>
    <lastmod>2026-06-26</lastmod>
    <priority>0.7</priority>
</url>
```

- [ ] **Step 2: Commit**

```bash
git add sitemap.xml
git commit -m "feat: add AI Lab pages to sitemap"
```

---

## Final Verification

- [ ] **Step 1: Test all new pages**

Open each page in browser and verify:
- ai-lab.html - Landing page with 4 cards
- ai-lab/model-database.html - Filterable table works
- ai-lab/benchmarks.html - Personal results + external links
- ai-lab/testing-methodology.html - 4 methodology steps
- ai-lab/tools.html - 6 tool cards
- ai-workflow.html - Redirects to ai-lab.html

- [ ] **Step 2: Test navigation**

Verify:
- Dropdown menus appear on hover (desktop)
- Dropdown menus expand on tap (mobile)
- All dropdown links work
- Active page is highlighted

- [ ] **Step 3: Test theme toggle**

Verify:
- Light/dark mode works on all new pages
- Dropdown styles adapt to theme

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete AI Lab section with dropdown navigation"
```
