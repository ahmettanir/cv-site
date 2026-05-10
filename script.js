document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');

    // Tema Değiştirme Mantığı
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        
        icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
        text.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    });

    // Sayfa İçi Pürüzsüz Kaydırma (Smooth Scroll)
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Gönderme Simülasyonu
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const status = document.getElementById('formStatus');
        status.textContent = "Sending your message...";
        
        setTimeout(() => {
            status.textContent = "Thank you! Your message has been sent successfully.";
            status.style.color = "#10b981";
            e.target.reset();
        }, 1500);
    });
});
