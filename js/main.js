// ==========================================
// LANGUAGE SWITCHER
// ==========================================

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pl' : 'en';
    const langButton = document.querySelector('.lang-switch');
    langButton.textContent = currentLang === 'en' ? 'PL' : 'EN';
    
    document.querySelectorAll('[data-pl][data-en]').forEach(element => {
        element.textContent = currentLang === 'en' 
            ? element.getAttribute('data-en') 
            : element.getAttribute('data-pl');
    });

    document.documentElement.lang = currentLang;
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

function scrollToSection(sectionId) {
    event.preventDefault();
    event.stopPropagation();
    const target = document.querySelector(sectionId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('active');
    }
    return false;
}

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Setup smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                const navLinks = document.getElementById('navLinks');
                navLinks.classList.remove('active');
            }
            return false;
        });
    });
});