document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navbar = document.querySelector('.glass-nav');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    const navItems = document.querySelectorAll('.nav-links li a');

    // Sticky Navbar Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.padding = '0 30px';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.7)';
            navbar.style.padding = '0 50px';
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close Mobile Menu on Link Click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });



    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Note: You can add CSS classes for .in-view to animate elements
    // For now, let's just observe sections to lazy load or trigger something if needed
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scrolling for anchor links is handled by CSS (html { scroll-behavior: smooth; })
});