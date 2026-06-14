// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {
    
    // Animasyon eklenecek tüm elementleri seç
    const animatedElements = document.querySelectorAll('.scroll-anim');

    // Intersection Observer ayarları
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // Elementin %15'i göründüğünde tetikle
    };

    // Observer'ı oluştur
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Eğer element ekranda görünüyorsa
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animasyon bir kez çalışsın diye takibi bırak
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Her bir element için gözlemciyi başlat
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
