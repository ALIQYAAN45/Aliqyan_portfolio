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
   7. RENDER ALL FOUR PROJECTS (HONEST BUTTONS & NO PHOTOS)
   ==================================================================== */
function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  if (!container || !projects) return;

  container.innerHTML = projects.map(proj => {
    const isLive = Boolean(proj.live);
    const statusClass = isLive ? 'live' : 'repo';
    const statusText = isLive ? '● LIVE DEPLOYMENT' : '◆ GITHUB REPOSITORY';

    const tagsHtml = (proj.technologies || []).map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');

    const technicalPreviewSvg = generateTechnicalPreviewSvg(proj.previewType);

    // Live button state: active link if deployed, disabled "Coming Soon" if not
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

    return `
      <article class="project-card" id="project-card-${proj.id}">
        <!-- Abstract Technical Schematic Preview (Zero Photos) -->
        <div class="project-schematic-header">
          <div class="schematic-terminal-bar">
            <div class="terminal-dots">
              <span class="terminal-dot dot-red"></span>
              <span class="terminal-dot dot-yellow"></span>
              <span class="terminal-dot dot-green"></span>
            </div>
            <span class="terminal-title">${proj.codeHeader || proj.name}</span>
          </div>

          <div class="schematic-canvas-area">
            <div class="schematic-grid-bg"></div>
            ${technicalPreviewSvg}
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

          <!-- Buttons: GitHub Repository & Live Demo -->
          <div class="project-card-actions">
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
