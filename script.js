 // Initialize GSAP animations
        document.addEventListener('DOMContentLoaded', () => {
            // Register ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);
            
            // Hero text animation
            gsap.from('.hero h1 span', {
                duration: 1.5,
                x: -50,
                opacity: 0,
                ease: 'power3.out'
            });
            
            gsap.from('.hero h1 br', {
                duration: 1.5,
                x: 50,
                opacity: 0,
                ease: 'power3.out',
                delay: 0.3
            });
            
            // Project card animations
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: 'back.out(1)'
                });
            });
            
            // Skill bubble animations
            gsap.utils.toArray('.skill-bubble').forEach((bubble, i) => {
                gsap.from(bubble, {
                    scrollTrigger: {
                        trigger: bubble,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    },
                    scale: 0,
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: 'back.out(2)'
                });
            });
            
            // Navigation highlight on scroll
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', () => {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= sectionTop - 300) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('text-primary');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('text-primary');
                    }
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });