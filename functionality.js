// Mobile Menu Toggle
const mobileMenuBtn = document.createElement('div');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

document.querySelector('.side-nav').prepend(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', function() {
    document.querySelector('.side-nav').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const sideNav = document.querySelector('.side-nav');
    if (!sideNav.contains(event.target)) {
        sideNav.classList.remove('active');
    }
});

// External Link Warning
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.addEventListener('click', function(e) {
            if (!confirm('You are about to leave my portfolio. Continue?')) {
                e.preventDefault();
            }
        });
    }
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent successfully! (This is a demo)');
        this.reset();
    });
}

// Project Card Interaction
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('a')) {
            this.classList.toggle('expanded');
        }
    });
});
