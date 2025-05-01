// Menu mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Changement de couleur du header au scroll
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Fermeture du menu mobile lors du scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Animation de texte
const typed = new Typed('.multiple-text', {
    strings: ['Youtuber', 'Web Designer', 'Frontend Developer', 'UX/UI Designer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true
});

// Animation au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Effet de révélation au scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Initialisation
reveal();

// Animation des lettres pour le premier mot
function animateFirstLetters() {
    const words = document.querySelectorAll('.word');
    if (words.length > 0) {
        const firstWord = words[0];
        const letters = firstWord.textContent.split('');
        firstWord.textContent = '';
        
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.className = 'letter';
            if (index === 0) {
                span.classList.add('first-letter');
            }
            span.textContent = letter;
            firstWord.appendChild(span);
        });
    }
}

// Appel des fonctions d'animation
document.addEventListener('DOMContentLoaded', () => {
    animateFirstLetters();
    
    // Délai pour l'animation du contenu principal
    setTimeout(() => {
        document.querySelector('.home-content').classList.add('loaded');
    }, 500);
});

// Effet de particules
document.addEventListener('DOMContentLoaded', function() {
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5,
            color: `rgba(0, 171, 240, ${Math.random() * 0.5 + 0.1})`
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            p.x += p.speedX;
            p.y += p.speedY;
            
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});