// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    }

    // Changement de couleur du header au scroll
    window.onscroll = () => {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
            
            // Fermeture du menu mobile lors du scroll
            if (menuIcon) menuIcon.classList.remove('bx-x');
            if (navbar) navbar.classList.remove('active');
        }
    };

    // Animation de texte
    if (document.querySelector('.multiple-text')) {
        const typed = new Typed('.multiple-text', {
            strings: ['Youtuber', 'Web Designer', 'Frontend Developer', 'UX/UI Designer', 'Graphic Designer'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting);
        });
    });

    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

    // Effet de révélation au scroll
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            element.classList.toggle('active', elementTop < windowHeight - elementVisible);
        });
    }

    window.addEventListener('scroll', reveal);
    reveal();

    // Effet de particules (seulement sur desktop)
    if (window.innerWidth > 768) {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();

        const particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
            color: `rgba(0, 171, 240, ${Math.random() * 0.5 + 0.1})`
        }));

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                
                p.x += p.speedX;
                p.y += p.speedY;
                
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        window.addEventListener('resize', resizeCanvas);
    }
});
