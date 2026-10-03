/**
 * ====================================================================
 * ALIQYAN LIGHTWALA - FUTURISTIC PORTFOLIO CONTROLLER & ANIMATIONS
 * ====================================================================
 * Zero Photo Dependencies • Pure Vector & Algorithmic Schematics
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData || {};

  // Initialize interactive components
  initNeuralCanvas();
  initCursorSpotlight();
  initTypewriter(data.personal);
  initNavbar();
  renderSkills(data.skills);
  initSkillFilters();
  renderProjects(data.projects);
  initContactForm(data.social?.email);
  initCopyEmail(data.social?.email);
  initBackToTop();
  updateCopyright();
  initProjectDetailsModal();
});

/* ====================================================================
   1. NEURAL PARTICLE NETWORK CANVAS BACKGROUND
   ==================================================================== */
function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 32 : 68;
  const maxDistance = 135;

  let mouse = {
    x: null,
    y: null,
    radius: 150
  };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.6 + 1;
      this.color = Math.random() > 0.4 ? '#00f0ff' : '#a855f7';
      this.baseAlpha = Math.random() * 0.45 + 0.25;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      if (mouse.x !== null && mouse.y !== null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          this.x -= dirX * force * 1.1;
          this.y -= dirY * force * 1.1;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.baseAlpha;
      ctx.shadowBlur = 6;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          let alpha = (1 - distance / maxDistance) * 0.2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#00f0ff';
          ctx.globalAlpha = alpha;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ====================================================================
   2. CURSOR SPOTLIGHT TRACKER
   ==================================================================== */
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursor-spotlight');
  if (!spotlight || window.innerWidth < 768) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function smoothFollow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;
    requestAnimationFrame(smoothFollow);
  }

  smoothFollow();
}

/* ====================================================================
   3. TYPEWRITER EFFECT
   ==================================================================== */
function initTypewriter(personal) {
  const element = document.getElementById('typewriter');
  if (!element) return;

  const roles = [
    "Aspiring Agentic AI Engineer",
    "CSE (AI & ML) @ Sandip University",
    "Building Practical Micro-Projects",
    "Python, Flask & SQLite Developer",
    "Exploring Intelligent Agents & Automation"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 85;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      speed = 40;
    } else {
      charIndex++;
      speed = 85;
    }

    element.textContent = currentRole.substring(0, charIndex);

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      speed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

/* ====================================================================
   4. NAVBAR SCROLL & ACTIVE LINK SPY
   ==================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isActive = toggleBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
      toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ====================================================================
   5. RENDER SKILLS & FILTERING
   ==================================================================== */
function renderSkills(skills, category = 'all') {
  const container = document.getElementById('skills-container');
  if (!container || !skills) return;

  const filtered = category === 'all' 
    ? skills 
    : skills.filter(s => s.category === category);

  container.innerHTML = filtered.map(skill => `
    <article class="skill-card" data-category="${skill.category}">
      <div class="skill-card-top">
        <div class="skill-icon-wrapper" aria-hidden="true">
          ${skill.icon}
        </div>
        <span class="skill-level-badge">${skill.tag}</span>
      </div>
      <h3 class="skill-card-name">${skill.name}</h3>
      <p class="skill-card-desc">${skill.description}</p>
    </article>
  `).join('');
}

function initSkillFilters() {
  const buttons = document.querySelectorAll('.skill-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderSkills(window.portfolioData.skills, category);
    });
  });
}

/* ====================================================================
   6. ABSTRACT TECHNICAL PREVIEWS (NO PHOTOS ANYWHERE)
   ==================================================================== */
function generateTechnicalPreviewSvg(previewType) {
  switch (previewType) {
    // Project: E-Commerce Sales & Customer Analysis Excel Dashboard
    case 'excel':
      return `
        <svg class="schematic-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="barGradCyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#0066ff" stop-opacity="0.4"/>
            </linearGradient>
            <linearGradient id="barGradPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#a855f7" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#6366f1" stop-opacity="0.4"/>
            </linearGradient>
          </defs>

          <!-- Chart Grid Lines -->
          <line x1="30" y1="36" x2="370" y2="36" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <line x1="30" y1="72" x2="370" y2="72" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <line x1="30" y1="108" x2="370" y2="108" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
          <line x1="30" y1="144" x2="370" y2="144" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

          <!-- Top Mini KPI Cards -->
          <rect x="25" y="8" width="105" height="30" rx="5" fill="#0f1523" stroke="#00f59b" stroke-width="1.2"/>
          <text x="35" y="20" fill="#94a3b8" font-size="7.5" font-family="monospace">TOTAL REVENUE</text>
          <text x="35" y="32" fill="#00f59b" font-size="10.5" font-family="monospace" font-weight="bold">$1,245,670</text>

          <rect x="140" y="8" width="105" height="30" rx="5" fill="#0f1523" stroke="#00f0ff" stroke-width="1.2"/>
          <text x="150" y="20" fill="#94a3b8" font-size="7.5" font-family="monospace">PROFIT MARGIN</text>
          <text x="150" y="32" fill="#00f0ff" font-size="10.5" font-family="monospace" font-weight="bold">24.1% [↑8.5%]</text>

          <rect x="255" y="8" width="120" height="30" rx="5" fill="#0f1523" stroke="#a855f7" stroke-width="1.2"/>
          <text x="265" y="20" fill="#94a3b8" font-size="7.5" font-family="monospace">ORDER VOLUME</text>
          <text x="265" y="32" fill="#c084fc" font-size="10.5" font-family="monospace" font-weight="bold">8,743 ORDERS</text>

          <!-- Interactive Slicer Panel (Left) -->
          <rect x="25" y="46" width="75" height="98" rx="6" fill="#090d16" stroke="rgba(0, 240, 255, 0.4)" stroke-width="1"/>
          <text x="33" y="58" fill="#00f0ff" font-size="8" font-family="monospace" font-weight="bold">SLICER: REGION</text>
          <rect x="30" y="63" width="65" height="15" rx="3" fill="rgba(0, 240, 255, 0.2)" stroke="#00f0ff" stroke-width="0.8"/>
          <text x="35" y="74" fill="#ffffff" font-size="7.5" font-family="monospace">✓ North Am.</text>
          <rect x="30" y="82" width="65" height="15" rx="3" fill="#111827" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>
          <text x="35" y="93" fill="#94a3b8" font-size="7.5" font-family="monospace">  Europe</text>
          <rect x="30" y="101" width="65" height="15" rx="3" fill="#111827" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>
          <text x="35" y="112" fill="#94a3b8" font-size="7.5" font-family="monospace">  Asia-Pacific</text>
          <rect x="30" y="120" width="65" height="15" rx="3" fill="#111827" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>
          <text x="35" y="131" fill="#94a3b8" font-size="7.5" font-family="monospace">  Other</text>

          <!-- Clustered Column Chart (Center) -->
          <rect x="115" y="94" width="10" height="50" rx="2" fill="url(#barGradCyan)"/>
          <rect x="130" y="82" width="10" height="62" rx="2" fill="url(#barGradCyan)"/>
          <rect x="145" y="70" width="10" height="74" rx="2" fill="url(#barGradCyan)"/>
          <rect x="160" y="86" width="10" height="58" rx="2" fill="url(#barGradCyan)"/>
          <rect x="175" y="66" width="10" height="78" rx="2" fill="url(#barGradCyan)"/>
          <rect x="190" y="54" width="10" height="90" rx="2" fill="url(#barGradCyan)"/>
          <rect x="205" y="76" width="10" height="68" rx="2" fill="url(#barGradCyan)"/>
          <rect x="220" y="62" width="10" height="82" rx="2" fill="url(#barGradCyan)"/>

          <!-- Trendline Curve (Profit Margin Spline) -->
          <path d="M120 108 Q 150 68, 180 82 T 225 58" fill="none" stroke="#00f59b" stroke-width="2.2" stroke-linecap="round"/>
          <circle cx="120" cy="108" r="3" fill="#00f59b"/>
          <circle cx="150" cy="76" r="3" fill="#00f59b"/>
          <circle cx="180" cy="82" r="3" fill="#00f59b"/>
          <circle cx="225" cy="58" r="3" fill="#00f59b"/>

          <!-- Category Donut Breakdown (Right) -->
          <circle cx="310" cy="95" r="34" fill="none" stroke="#1e293b" stroke-width="12"/>
          <circle cx="310" cy="95" r="34" fill="none" stroke="#00f0ff" stroke-width="12" stroke-dasharray="80 135" stroke-dashoffset="20"/>
          <circle cx="310" cy="95" r="34" fill="none" stroke="#a855f7" stroke-width="12" stroke-dasharray="55 160" stroke-dashoffset="-60"/>
          <circle cx="310" cy="95" r="34" fill="none" stroke="#00f59b" stroke-width="12" stroke-dasharray="40 175" stroke-dashoffset="-115"/>
          <text x="310" y="93" fill="#ffffff" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">CATEGORY</text>
          <text x="310" y="104" fill="#94a3b8" font-size="7.5" font-family="monospace" text-anchor="middle">SALES</text>

          <!-- Formula Bar Indicator (Bottom) -->
          <rect x="25" y="152" width="350" height="18" rx="4" fill="#080c14" stroke="rgba(255,255,255,0.08)"/>
          <text x="35" y="165" fill="#00f0ff" font-size="8.5" font-family="monospace">fx  =PIVOT.DASHBOARD(Sales[Revenue], Slicer[Region], Slicer[Category])</text>
        </svg>
      `;

    // Project 1: Frame-Based Knowledge Representation
    case 'krr':
      return `
        <svg class="schematic-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Connectors -->
          <line x1="80" y1="90" x2="200" y2="45" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
          <line x1="80" y1="90" x2="200" y2="135" stroke="#a855f7" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
          <line x1="200" y1="45" x2="320" y2="90" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
          <line x1="200" y1="135" x2="320" y2="90" stroke="#a855f7" stroke-width="2" stroke-dasharray="4 4" opacity="0.6"/>
          
          <!-- Node 1: Patient Frame -->
          <rect x="20" y="65" width="120" height="50" rx="8" fill="#0f1523" stroke="#00f0ff" stroke-width="1.8"/>
          <text x="80" y="88" fill="#00f0ff" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">FRAME: PATIENT</text>
          <text x="80" y="103" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">slots: id, triage</text>

          <!-- Node 2: Slot Rule Frame -->
          <rect x="140" y="20" width="120" height="50" rx="8" fill="#0f1523" stroke="#a855f7" stroke-width="1.8"/>
          <text x="200" y="43" fill="#c084fc" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">SLOT: DIAGNOSIS</text>
          <text x="200" y="58" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">rule_based_check()</text>

          <!-- Node 3: Bed & Doctor Frame -->
          <rect x="140" y="110" width="120" height="50" rx="8" fill="#0f1523" stroke="#38bdf8" stroke-width="1.8"/>
          <text x="200" y="133" fill="#38bdf8" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">FRAME: DOCTOR</text>
          <text x="200" y="148" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">dept: allocation</text>

          <!-- Node 4: Inference Engine -->
          <rect x="260" y="65" width="120" height="50" rx="8" fill="#0f1523" stroke="#00f59b" stroke-width="1.8"/>
          <text x="320" y="88" fill="#00f59b" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">KRR REASONING</text>
          <text x="320" y="103" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">triage_resolved: OK</text>
        </svg>
      `;

    // Project 2: Priority Queue (heapq) Dispatcher
    case 'queue':
      return `
        <svg class="schematic-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Binary Min-Heap Tree Structure -->
          <line x1="200" y1="40" x2="110" y2="95" stroke="#00f0ff" stroke-width="2" opacity="0.6"/>
          <line x1="200" y1="40" x2="290" y2="95" stroke="#00f0ff" stroke-width="2" opacity="0.6"/>
          <line x1="110" y1="95" x2="60" y2="150" stroke="#a855f7" stroke-width="2" stroke-dasharray="3 3" opacity="0.5"/>
          <line x1="110" y1="95" x2="160" y2="150" stroke="#a855f7" stroke-width="2" stroke-dasharray="3 3" opacity="0.5"/>
          <line x1="290" y1="95" x2="240" y2="150" stroke="#a855f7" stroke-width="2" stroke-dasharray="3 3" opacity="0.5"/>
          <line x1="290" y1="95" x2="340" y2="150" stroke="#a855f7" stroke-width="2" stroke-dasharray="3 3" opacity="0.5"/>

          <!-- Root Node (Urgent P1) -->
          <circle cx="200" cy="40" r="22" fill="#0f1523" stroke="#00f0ff" stroke-width="2"/>
          <text x="200" y="44" fill="#00f0ff" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">P1 (Min)</text>

          <!-- Level 1 Nodes -->
          <circle cx="110" cy="95" r="19" fill="#0f1523" stroke="#a855f7" stroke-width="2"/>
          <text x="110" y="99" fill="#c084fc" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">P2: High</text>

          <circle cx="290" cy="95" r="19" fill="#0f1523" stroke="#a855f7" stroke-width="2"/>
          <text x="290" y="99" fill="#c084fc" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">P2: High</text>

          <!-- Level 2 Leaf Nodes -->
          <circle cx="60" cy="150" r="15" fill="#0f1523" stroke="#64748b" stroke-width="1.5"/>
          <text x="60" y="154" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">P3</text>
          <circle cx="160" cy="150" r="15" fill="#0f1523" stroke="#64748b" stroke-width="1.5"/>
          <text x="160" y="154" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">P3</text>
          <circle cx="240" cy="150" r="15" fill="#0f1523" stroke="#64748b" stroke-width="1.5"/>
          <text x="240" y="154" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">P4</text>
          <circle cx="340" cy="150" r="15" fill="#0f1523" stroke="#64748b" stroke-width="1.5"/>
          <text x="340" y="154" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">P4</text>
        </svg>
      `;

    // Project 3: AI World Platform
    case 'ai-world':
      return `
        <svg class="schematic-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Global Neural Network Circles -->
          <circle cx="200" cy="90" r="65" stroke="rgba(0, 240, 255, 0.2)" stroke-width="1" stroke-dasharray="4 4"/>
          <circle cx="200" cy="90" r="42" stroke="rgba(168, 85, 247, 0.25)" stroke-width="1"/>
          
          <!-- Central Sphere -->
          <circle cx="200" cy="90" r="24" fill="#0f1523" stroke="#00f0ff" stroke-width="2"/>
          <text x="200" y="94" fill="#00f0ff" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">AI WORLD</text>

          <!-- Surrounding Domain Nodes -->
          <circle cx="100" cy="45" r="18" fill="#0f1523" stroke="#a855f7" stroke-width="1.8"/>
          <text x="100" y="49" fill="#c084fc" font-size="8.5" font-family="monospace" text-anchor="middle">AGENTS</text>
          <line x1="118" y1="52" x2="180" y2="78" stroke="#a855f7" stroke-width="1.5" opacity="0.6"/>

          <circle cx="300" cy="45" r="18" fill="#0f1523" stroke="#38bdf8" stroke-width="1.8"/>
          <text x="300" y="49" fill="#38bdf8" font-size="8.5" font-family="monospace" text-anchor="middle">ML DOMAINS</text>
          <line x1="282" y1="52" x2="220" y2="78" stroke="#38bdf8" stroke-width="1.5" opacity="0.6"/>

          <circle cx="100" cy="135" r="18" fill="#0f1523" stroke="#00f59b" stroke-width="1.8"/>
          <text x="100" y="139" fill="#00f59b" font-size="8.5" font-family="monospace" text-anchor="middle">ROBOTICS</text>
          <line x1="118" y1="128" x2="180" y2="102" stroke="#00f59b" stroke-width="1.5" opacity="0.6"/>

          <circle cx="300" cy="135" r="18" fill="#0f1523" stroke="#f59e0b" stroke-width="1.8"/>
          <text x="300" y="139" fill="#f59e0b" font-size="8.5" font-family="monospace" text-anchor="middle">FUTURE AI</text>
          <line x1="282" y1="128" x2="220" y2="102" stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>
        </svg>
      `;

    // Project 4: RelationX Discrete Math Network Graph
    case 'graph':
    default:
      return `
        <svg class="schematic-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Graph Edges / Relations -->
          <line x1="80" y1="50" x2="170" y2="120" stroke="#00f0ff" stroke-width="1.8" opacity="0.6"/>
          <line x1="80" y1="50" x2="210" y2="40" stroke="#00f0ff" stroke-width="1.8" opacity="0.6"/>
          <line x1="170" y1="120" x2="210" y2="40" stroke="#a855f7" stroke-width="1.8" opacity="0.6"/>
          <line x1="210" y1="40" x2="270" y2="130" stroke="#00f0ff" stroke-width="1.8" opacity="0.6"/>
          <line x1="170" y1="120" x2="270" y2="130" stroke="#00f0ff" stroke-width="1.8" opacity="0.6"/>
          <line x1="270" y1="130" x2="330" y2="60" stroke="#a855f7" stroke-width="1.8" opacity="0.6"/>

          <!-- Student Vertices / Nodes -->
          <circle cx="80" cy="50" r="18" fill="#0f1523" stroke="#00f0ff" stroke-width="2"/>
          <text x="80" y="54" fill="#00f0ff" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">S1</text>

          <circle cx="170" cy="120" r="18" fill="#0f1523" stroke="#a855f7" stroke-width="2"/>
          <text x="170" y="124" fill="#c084fc" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">S2</text>

          <circle cx="210" cy="40" r="18" fill="#0f1523" stroke="#00f0ff" stroke-width="2"/>
          <text x="210" y="44" fill="#00f0ff" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">S3</text>

          <circle cx="270" cy="130" r="18" fill="#0f1523" stroke="#38bdf8" stroke-width="2"/>
          <text x="270" y="134" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">S4</text>

          <circle cx="330" cy="60" r="18" fill="#0f1523" stroke="#00f59b" stroke-width="2"/>
          <text x="330" y="64" fill="#00f59b" font-size="10" font-family="monospace" text-anchor="middle" font-weight="bold">S5</text>

          <!-- Matrix Dimension Label -->
          <rect x="290" y="125" width="95" height="28" rx="6" fill="#0f1523" stroke="rgba(255, 255, 255, 0.1)"/>
          <text x="337" y="143" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">M_R [5x5] • 50%</text>
        </svg>
      `;
  }
}

/* ====================================================================
   7. RENDER PROJECTS (COLLEGE PROJECTS & EXCEL DASHBOARD)
   ==================================================================== */
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container || !projects) return;

  container.innerHTML = projects.map(proj => {
    const isLive = Boolean(proj.live);
    const isExcel = proj.badge === 'EXCEL DASHBOARD';
    const statusClass = isExcel ? 'live excel-badge' : (isLive ? 'live' : 'repo');
    const statusText = proj.badge ? `● ${proj.badge}` : (isLive ? '● LIVE DEPLOYMENT' : '◆ GITHUB REPOSITORY');

    const tagsHtml = (proj.technologies || []).map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');

    const technicalPreviewSvg = generateTechnicalPreviewSvg(proj.previewType);

    // If project defines an image preview, render the image thumbnail; otherwise SVG schematic
    const previewContentHtml = proj.image
      ? `
        <div class="schematic-grid-bg"></div>
        <img src="${proj.image}" alt="${proj.name} Preview" class="schematic-image" loading="lazy" />
      `
      : `
        <div class="schematic-grid-bg"></div>
        ${technicalPreviewSvg}
      `;

    // Render action buttons
    let actionsHtml = '';
    if (proj.customButtons && proj.customButtons.length > 0) {
      actionsHtml = proj.customButtons.map(btn => {
        if (btn.type === 'excel') {
          return `
            <a href="${btn.url}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="project-btn btn-excel" 
               id="${btn.id || `btn-excel-${proj.id}`}"
               aria-label="Open ${btn.text} in a new tab">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="16" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>${btn.text}</span>
            </a>
          `;
        } else if (btn.type === 'details') {
          return `
            <button type="button" 
                    class="project-btn btn-details" 
                    id="${btn.id || `btn-details-${proj.id}`}"
                    onclick="openProjectDetails('${proj.id}')"
                    aria-label="View project details for ${proj.name}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <span>${btn.text}</span>
            </button>
          `;
        }
        return '';
      }).join('');
    } else {
      const liveButtonHtml = isLive
        ? `
          <a href="${proj.live}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="project-btn btn-demo live" 
             id="btn-live-${proj.id}"
             aria-label="Open live demo of ${proj.name} in a new tab">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <span>Live Demo</span>
          </a>
        `
        : `
          <button type="button" 
                  class="project-btn btn-demo disabled" 
                  id="btn-live-${proj.id}" 
                  aria-disabled="true"
                  onclick="showToast('ℹ️ Live demo for ${proj.name} is coming soon. Explore the full code on GitHub!', 'info')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Coming Soon</span>
          </button>
        `;

      actionsHtml = `
        <a href="${proj.github}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="project-btn btn-code" 
           id="btn-github-${proj.id}"
           aria-label="Open ${proj.name} GitHub repository in a new tab">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          <span>GitHub</span>
        </a>
        ${liveButtonHtml}
      `;
    }

    return `
      <article class="project-card ${isExcel ? 'excel-project-card' : ''}" id="project-card-${proj.id}">
        <!-- Preview Header -->
        <div class="project-schematic-header">
          <div class="schematic-terminal-bar">
            <div class="terminal-dots">
              <span class="terminal-dot dot-red"></span>
              <span class="terminal-dot dot-yellow"></span>
              <span class="terminal-dot dot-green"></span>
            </div>
            <span class="terminal-title">${proj.codeHeader || proj.name}</span>
          </div>

          <div class="schematic-canvas-area ${proj.image ? 'has-thumb-img' : ''}">
            ${previewContentHtml}
          </div>

          <span class="project-status-badge ${statusClass}">
            ${statusText}
          </span>
        </div>

        <!-- Project Details -->
        <div class="project-content">
          <h3 class="project-title">${proj.name}</h3>
          <h4 class="project-subtitle">${proj.fullTitle}</h4>
          <p class="project-desc">${proj.description}</p>

          <!-- Technology Tags -->
          <div class="project-tech-tags">
            ${tagsHtml}
          </div>

          <!-- Buttons -->
          <div class="project-card-actions">
            ${actionsHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ====================================================================
   8. CONTACT FORM HANDLER (HONEST EMAIL CLIENT FLOW)
   ==================================================================== */
function initContactForm(receiverEmail) {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !subject || !message) {
      showToast('⚠️ Please fill in all required fields.', 'warning');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('⚠️ Please enter a valid email address.', 'warning');
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      <span>Preparing Email Client...</span>
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      showToast('📧 Opening your email client to send message to Aliqyan...', 'success');

      const targetEmail = receiverEmail || 'aliqyanlightwala@gmail.com';
      const mailtoUrl = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);

    }, 800);
  });
}

/* ====================================================================
   9. COPY EMAIL TO CLIPBOARD
   ==================================================================== */
function initCopyEmail(emailAddress) {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const targetEmail = emailAddress || 'aliqyanlightwala@gmail.com';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(targetEmail);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = targetEmail;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      showToast(`📋 Email copied: ${targetEmail}`, 'success');
      copyBtn.querySelector('span').textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.querySelector('span').textContent = 'Copy';
      }, 2500);
    } catch (err) {
      showToast('Could not copy email automatically.', 'warning');
    }
  });
}

/* ====================================================================
   10. BACK TO TOP
   ==================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ====================================================================
   11. COPYRIGHT YEAR
   ==================================================================== */
function updateCopyright() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ====================================================================
   12. TOAST NOTIFICATION UTILITY
   ==================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconSvg = type === 'success'
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f59b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

  toast.innerHTML = `
    <span class="toast-icon">${iconSvg}</span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 350);
  }, 3600);
}

/* ====================================================================
   13. PROJECT DETAILS MODAL CONTROLLER
   ==================================================================== */
function initProjectDetailsModal() {
  const modal = document.getElementById('project-details-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectDetails);
  }

  // Backdrop click to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectDetails();
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectDetails();
    }
  });
}

function openProjectDetails(projectId) {
  const modal = document.getElementById('project-details-modal');
  const bodyContent = document.getElementById('modal-body-content');
  const codeLabel = document.getElementById('modal-project-code');
  if (!modal || !bodyContent) return;

  const data = window.portfolioData || {};
  const project = (data.projects || []).find(p => p.id === projectId);
  if (!project) return;

  if (codeLabel) {
    codeLabel.textContent = project.codeHeader || `${project.name.toUpperCase().replace(/\s+/g, '_')}.md`;
  }

  const d = project.details || {};
  const kpisHtml = (d.kpis || []).map(k => `
    <div class="modal-kpi-item">
      <span class="modal-kpi-lbl">${k.label}</span>
      <span class="modal-kpi-val">${k.value}</span>
      <span class="modal-kpi-trend">${k.trend}</span>
    </div>
  `).join('');

  const toolsHtml = (d.tools || project.technologies || []).map(t => `
    <span class="modal-tech-chip">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${t}</span>
    </span>
  `).join('');

  const featuresHtml = (d.features || []).map(f => `
    <div class="modal-info-card">
      <div class="modal-card-head">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <h4>${f.title}</h4>
      </div>
      <p>${f.desc}</p>
    </div>
  `).join('');

  const analysisHtml = (d.analysis || []).map(a => `
    <div class="modal-info-card purple-accent">
      <div class="modal-card-head">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2.2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        <h4>${a.title}</h4>
      </div>
      <p>${a.desc}</p>
    </div>
  `).join('');

  const highlightsHtml = (d.highlights || []).map(h => `
    <li class="modal-highlight-item">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${h}</span>
    </li>
  `).join('');

  const excelActionBtn = project.excelUrl
    ? `
      <a href="${project.excelUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary modal-action-btn" id="modal-btn-view-excel">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        <span>View Live Excel Dashboard</span>
      </a>
    `
    : '';

  bodyContent.innerHTML = `
    <!-- Top Metadata Banner -->
    <div class="modal-title-group">
      <div class="modal-badge-row">
        <span class="modal-status-badge">● ${project.badge || 'PROJECT OVERVIEW'}</span>
        <span class="modal-meta-tag">Interactive Business Intelligence & Analytics</span>
      </div>
      <h2 class="modal-title">${project.name}</h2>
      <h3 class="modal-subtitle">${project.fullTitle}</h3>
    </div>

    <!-- Visual Dashboard Banner -->
    ${project.image ? `
      <div class="modal-visual-preview">
        <img src="${project.image}" alt="${project.name} Excel Dashboard" class="modal-preview-img" />
        <div class="modal-visual-overlay">
          <span>WPS Docs / Microsoft Excel Cloud Spreadsheet</span>
        </div>
      </div>
    ` : ''}

    <!-- Key Performance Indicators (KPIs) -->
    ${kpisHtml ? `
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
          Executive KPI Summary Metrics
        </h4>
        <div class="modal-kpi-grid">${kpisHtml}</div>
      </div>
    ` : ''}

    <!-- Project Objective -->
    <div class="modal-section">
      <h4 class="modal-section-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        Project Objective & Scope
      </h4>
      <p class="modal-desc-text">${d.objective || project.description}</p>
    </div>

    <!-- Tools & Technologies -->
    <div class="modal-section">
      <h4 class="modal-section-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        Tools & Technologies Utilized
      </h4>
      <div class="modal-chips-wrap">${toolsHtml}</div>
    </div>

    <!-- Key Features & Architecture -->
    ${featuresHtml ? `
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          Key Dashboard Features & Capabilities
        </h4>
        <div class="modal-grid-2col">${featuresHtml}</div>
      </div>
    ` : ''}

    <!-- Analysis Performed -->
    ${analysisHtml ? `
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
          Business & Statistical Analysis Performed
        </h4>
        <div class="modal-grid-2col">${analysisHtml}</div>
      </div>
    ` : ''}

    <!-- Main Project Highlights -->
    ${highlightsHtml ? `
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Main Project Highlights & Findings
        </h4>
        <ul class="modal-highlights-list">${highlightsHtml}</ul>
      </div>
    ` : ''}

    <!-- Modal Footer Actions -->
    <div class="modal-footer-actions">
      ${excelActionBtn}
      <button type="button" class="btn btn-secondary modal-close-action" onclick="closeProjectDetails()">
        <span>Close Window</span>
      </button>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectDetails() {
  const modal = document.getElementById('project-details-modal');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Make functions globally available
window.openProjectDetails = openProjectDetails;
window.closeProjectDetails = closeProjectDetails;

