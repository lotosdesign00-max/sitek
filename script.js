// Language Switcher
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

// Smooth scroll for anchor links
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

// Add scroll reveal animation
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

// Parallax effect for hero background
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

// Add glow effect on hover for primary buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 50px rgba(255, 0, 51, 0.5)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 30px rgba(255, 0, 51, 0.3)';
    });
});

// Detect browser language on first visit
if (!localStorage.getItem('preferredLang')) {
    const browserLang = navigator.language || navigator.userLanguage;
    const detectedLang = browserLang.startsWith('ru') ? 'ru' : 'en';
    switchLanguage(detectedLang);
}
