document.addEventListener("DOMContentLoaded", function () {
    
    // --- SCROLL ANİMASYONLARI ---
    const animatedElements = document.querySelectorAll('.scroll-anim');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));

    // --- ARKA PLAN CANLI DNA ANİMASYONU ---
    const canvas = document.getElementById("dna-canvas");
    const ctx = canvas.getContext("2d");

    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    let time = 0;

    function drawDNA() {
        // Ekranı hafif transparan siyahla temizle (hareket izi - trailing efekti için)
        ctx.fillStyle = "rgba(3, 3, 5, 0.15)";
        ctx.fillRect(0, 0, width, height);

        let rows = 40; // Yukarıdan aşağıya nokta sayısı
        let spacing = height / rows; // Noktalar arası mesafe
        let amplitude = width > 768 ? 150 : 80; // Sarmalın genişliği
        let centerX = width / 2;

        for (let i = 0; i < rows; i++) {
            let y = i * spacing;
            
            // İki sarmalın X eksenindeki konumları (Sinüs dalgası kullanarak 3D dönüş hissi)
            let x1 = centerX + Math.sin(i * 0.2 + time) * amplitude;
            let x2 = centerX + Math.sin(i * 0.2 + time + Math.PI) * amplitude; // Zıt faz

            // Sarmalları birleştiren gen bağları (çizgiler)
            ctx.beginPath();
            ctx.moveTo(x1, y);
            ctx.lineTo(x2, y);
            
            // Çizgiye neon renk geçişi (Cyan -> Purple)
            let gradient = ctx.createLinearGradient(x1, y, x2, y);
            gradient.addColorStop(0, "rgba(0, 243, 255, 0.3)");
            gradient.addColorStop(1, "rgba(189, 0, 255, 0.3)");
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // 1. Sarmal Noktaları (Mavi)
            ctx.beginPath();
            ctx.arc(x1, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = "#00f3ff";
            ctx.fill();

            // 2. Sarmal Noktaları (Mor)
            ctx.beginPath();
            ctx.arc(x2, y, 3, 0, Math.PI * 2);
            ctx.fillStyle = "#bd00ff";
            ctx.fill();
        }

        time += 0.03; // Dönüş hızı
        requestAnimationFrame(drawDNA);
    }

    // Animasyonu başlat
    drawDNA();
});
