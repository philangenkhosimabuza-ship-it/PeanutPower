// Anime.js animations for the website

// Hero section animations on page load
window.addEventListener('load', () => {
    // Animate hero title
    anime({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        easing: 'easeOutExpo'
    });

    // Animate hero subtitle
    anime({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200,
        delay: 200,
        easing: 'easeOutExpo'
    });

    // Animate anime text
    anime({
        targets: '.hero-anime-text',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
        delay: 400,
        easing: 'easeOutElastic(1, .6)'
    });

    // Animate CTA button
    anime({
        targets: '.cta-button',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
        delay: 600,
        easing: 'easeOutBack'
    });

    // Animate decorations
    anime({
        targets: '.decoration-circle',
        opacity: [0.05, 0.15],
        rotate: [0, 360],
        duration: 20000,
        easing: 'linear',
        loop: true
    });

    anime({
        targets: '.decoration-square',
        opacity: [0.05, 0.15],
        rotate: [0, -360],
        duration: 25000,
        easing: 'linear',
        loop: true
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Feature cards animation
            if (entry.target.classList.contains('feature-card')) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
            }

            // Showcase items animation
            if (entry.target.classList.contains('showcase-item')) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
            }

            // Stats animation
            if (entry.target.classList.contains('stat')) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateX: [-50, 0],
                    duration: 800,
                    easing: 'easeOutQuad'
                });
            }

            // About text animation
            if (entry.target.classList.contains('about-text')) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutQuad'
                });
            }

            // CTA section animations
            if (entry.target.classList.contains('cta-content')) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    scale: [0.9, 1],
                    duration: 1000,
                    easing: 'easeOutQuad'
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-anime attribute
document.querySelectorAll('[data-anime]').forEach(el => {
    if (!el.classList.contains('hero-title') && 
        !el.classList.contains('hero-subtitle') && 
        !el.classList.contains('hero-anime-text') &&
        !el.classList.contains('cta-button') &&
        !el.classList.contains('hero-decoration')) {
        observer.observe(el);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            anime({
                targets: 'html, body',
                scrollTop: target.offsetTop,
                duration: 1000,
                easing: 'easeInOutQuad'
            });
        }
    });
});

// Add hover animation to buttons
document.querySelectorAll('.btn, .cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        anime({
            targets: this,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    button.addEventListener('mouseleave', function() {
        anime({
            targets: this,
            scale: 1,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
});

// Parallax effect on mouse move
const hero = document.querySelector('.hero');
if (hero) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;

        anime.set('.decoration-circle', {
            translateX: x,
            translateY: y
        });

        anime.set('.decoration-square', {
            translateX: -x,
            translateY: -y
        });
    });
}

// Stagger animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: card,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 600,
                    delay: index * 150,
                    easing: 'easeOutQuad'
                });
                observer.unobserve(card);
            }
        });
    }, observerOptions);
    observer.observe(card);
});

// Stagger animation for showcase items
const showcaseItems = document.querySelectorAll('.showcase-item');
showcaseItems.forEach((item, index) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: item,
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    duration: 600,
                    delay: index * 150,
                    easing: 'easeOutQuad'
                });
                observer.unobserve(item);
            }
        });
    }, observerOptions);
    observer.observe(item);
});