// Wait for DOM to load
window.addEventListener('DOMContentLoaded', () => {
    // Create Mobile Menu Button
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.side-nav').prepend(mobileMenuBtn);

    // Toggle Side Nav & Nav Links
    mobileMenuBtn.addEventListener('click', function () {
        document.querySelector('.side-nav').classList.toggle('active');
        document.querySelector('.nav-links').classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        const sideNav = document.querySelector('.side-nav');
        if (!sideNav.contains(event.target)) {
            sideNav.classList.remove('active');
            document.querySelector('.nav-links').classList.remove('show');
        }
    });

    // Close menu on nav-link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('show');
            document.querySelector('.side-nav').classList.remove('active');
        });
    });

    // External link warning
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.addEventListener('click', function (e) {
                if (!confirm('You are about to leave my portfolio. Continue?')) {
                    e.preventDefault();
                }
            });
        }
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Message sent successfully! (This is a demo)');
            this.reset();
        });
    }

    // Project card expand
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('a')) {
                this.classList.toggle('expanded');
            }
        });
    });

    // Mobile detection
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        document.documentElement.classList.add('mobile');
        console.log("Running on mobile device");
    }
});
