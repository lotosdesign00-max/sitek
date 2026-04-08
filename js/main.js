// Advanced Interactive Landing Page for Rival Design
// Following ui-ux-pro-max UX guidelines

// ============================================
// Language Switcher
// ============================================
const langButtons = document.querySelectorAll('.lang-btn');
const elementsWithLang = document.querySelectorAll('[data-ru][data-en]');

let currentLang = 'ru';

function switchLanguage(lang) {
    currentLang = lang;

    // Update active button
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all text elements
    elementsWithLang.forEach(element => {
        const text = element.dataset[lang];
        if (text) {
            element.textContent = text;
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Initialize language
const savedLang = localStorage.getItem('preferredLang') || 'ru';
switchLanguage(savedLang);

// Add click handlers
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Detect browser language on first visit
if (!localStorage.getItem('preferredLang')) {
    const browserLang = navigator.language || navigator.userLanguage;
    const detectedLang = browserLang.startsWith('ru') ? 'ru' : 'en';
    switchLanguage(detectedLang);
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Intersection Observer for Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .why-card, .case-card, .testimonial-card, .faq-item, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Parallax Effect for Hero Background
// ============================================
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');

    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ============================================
// Enhanced Button Hover Effects
// ============================================
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 50px rgba(255, 0, 51, 0.6)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 30px rgba(255, 0, 51, 0.4)';
    });
});

// ============================================
// Custom Cursor Trail Effect
// ============================================
const cursorTrail = [];
const trailLength = 10;

// Create trail elements
for (let i = 0; i < trailLength; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = (1 - i / trailLength) * 0.6;
    trail.style.transform = `scale(${1 - i / trailLength})`;
    document.body.appendChild(trail);
    cursorTrail.push(trail);
}

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursorTrail() {
    // Smooth follow
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    cursorTrail.forEach((trail, index) => {
        const delay = index * 2;
        const x = currentX - delay;
        const y = currentY - delay;
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
    });

    requestAnimationFrame(animateCursorTrail);
}

// Check if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    animateCursorTrail();
} else {
    // Hide cursor trail for users who prefer reduced motion
    cursorTrail.forEach(trail => trail.style.display = 'none');
}

// ============================================
// Interactive Service Cards
// ============================================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// Case Card Click to Expand (Modal-like)
// ============================================
document.querySelectorAll('.case-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add pulse animation
        this.style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 300);
    });
});

// Pulse animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);

// ============================================
// FAQ Accordion Effect
// ============================================
document.querySelectorAll('.faq-item').forEach(item => {
    const answer = item.querySelector('p');
    const question = item.querySelector('h3');

    // Initially hide answers
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.3s ease';

    let isOpen = false;

    item.addEventListener('click', function() {
        if (isOpen) {
            answer.style.maxHeight = '0';
            question.style.color = '';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            question.style.color = 'var(--color-primary)';
        }
        isOpen = !isOpen;
    });
});

// ============================================
// Scroll Progress Indicator
// ============================================
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// ============================================
// Lazy Loading Images (if any added later)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Performance: Debounce Scroll Events
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Add Floating Animation to Hero Elements
// ============================================
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');

if (heroTitle && !prefersReducedMotion) {
    let floatOffset = 0;

    function floatAnimation() {
        floatOffset += 0.01;
        const y = Math.sin(floatOffset) * 5;
        heroTitle.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(floatAnimation);
    }

    floatAnimation();
}

// ============================================
// Interactive Particle Background
// ============================================
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(255, 0, 51, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create canvas for particles
const particleCanvas = document.createElement('canvas');
particleCanvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.6;
`;

const hero = document.querySelector('.hero');
if (hero && !prefersReducedMotion) {
    hero.appendChild(particleCanvas);

    const ctx = particleCanvas.getContext('2d');
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(particleCanvas));
    }

    function animateParticles() {
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(255, 0, 51, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Resize canvas on window resize
    window.addEventListener('resize', debounce(() => {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }, 250));
}

// ============================================
// Add Magnetic Effect to CTA Buttons
// ============================================
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ============================================
// Typing Effect for Hero Title (Optional)
// ============================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// const heroTitleText = heroTitle.textContent;
// typeWriter(heroTitle, heroTitleText, 50);

// ============================================
// Add Ripple Effect on Click
// ============================================
document.querySelectorAll('.btn, .service-card, .case-card').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ============================================
// Console Easter Egg
// ============================================
console.log('%c🎨 Rival Design', 'font-size: 24px; font-weight: bold; color: #ff0033;');
console.log('%cПремиум графический дизайн | Premium Graphic Design', 'font-size: 14px; color: #a0a0b0;');
console.log('%cТелеграм: https://t.me/rivaldesign', 'font-size: 12px; color: #6600ff;');

// ============================================
// Performance Monitoring
// ============================================
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
                console.warn('Long task detected:', entry.duration, 'ms');
            }
        }
    });
    observer.observe({ entryTypes: ['longtask'] });
}

// ============================================
// Accessibility: Skip to Main Content
// ============================================
const skipLink = document.createElement('a');
skipLink.href = '#services';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

console.log('✅ Rival Design Landing Page Loaded Successfully');
