import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Dna } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Neo-Brutalist Manifesto Design
 * - Black background, white text, electric cyan accents
 * - Bold serif typography for impact
 * - Asymmetric, geometric layouts
 * - Sharp angles, high contrast
 * - Minimal but intentional animations
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-cyan-500/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759918156/8UBLPVvRDhyQYwEqYJFkV2/uvh-logo-RA6mrysWeQXdGeNRwGwQhP.webp"
              alt="Utopia Vision Hub"
              className="w-10 h-10"
            />
            <span className="font-serif font-bold text-xl">UTOPIA</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#vision" className="hover:text-cyan-400 transition-colors">
              Vision
            </a>
            <a href="#research" className="hover:text-cyan-400 transition-colors">
              Research
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663759918156/8UBLPVvRDhyQYwEqYJFkV2/pattern-grid-RA6mrysWeQXdGeNRwGwQhP.webp')`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759918156/8UBLPVvRDhyQYwEqYJFkV2/hero-transhumanism-gLg3Mw3cJg5oDjttwJ6MqM.webp"
            alt="Transhumanism Evolution"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Decorative line */}
            <div className="w-12 h-1 bg-cyan-400" />

            <div>
              <h1 className="text-6xl font-serif font-bold leading-tight mb-4">
                EVOLUTION<br />
                <span className="text-cyan-400">TRANSCENDS</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Yaşlanmak bir hastalık değil, bir yazılım hatası. Biz onu düzeltiyoruz.
              </p>
            </div>

            <p className="text-base text-gray-400 max-w-lg leading-relaxed">
              Transhumanism, rejenerasyon ve AI geliştirmenin kesişiminde, insan evriminin bilimsel ve felsefi manifestosu.
            </p>

            <div className="flex gap-4">
                            <Button className="bg-cyan-400 text-black hover:bg-cyan-300 font-bold px-8 py-6 text-lg"
                onClick={() => window.location.href = '/longevity'}
              >
                Discover <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side decorative elements */}
          <div className="relative h-96 hidden lg:block">
            <div className="absolute top-0 right-0 w-64 h-64 border-2 border-cyan-400/30 transform rotate-45" />
            <div className="absolute bottom-12 right-12 w-32 h-32 border border-cyan-400/50" />
            <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* Vision Section */}
      <section id="vision" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-12">
            {/* Card 1: Transhumanism */}
            <div className="group cursor-pointer">
              <div className="border-l-4 border-cyan-400 pl-6 mb-6 transition-all duration-300 hover:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <h3 className="font-serif text-2xl font-bold">TRANSHUMANISM</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                İnsan biyolojisini teknoloji ile birleştirerek, sınırlarımızı aşıyoruz. Geleceği beklemek yerine inşa ediyoruz.
              </p>
            </div>

            {/* Card 2: Regeneration */}
            <div className="group cursor-pointer">
              <div className="border-l-4 border-cyan-400 pl-6 mb-6 transition-all duration-300 hover:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Dna className="w-6 h-6 text-cyan-400" />
                  <h3 className="font-serif text-2xl font-bold">REGENERATION</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Uzun yaşam değil, tam rejenerasyon. Hücrelerin gençlik hallerine döndürülmesi, yaşlanmanın geri sarılması.
              </p>
            </div>

            {/* Card 3: AI Development */}
            <div className="group cursor-pointer">
              <div className="border-l-4 border-cyan-400 pl-6 mb-6 transition-all duration-300 hover:pl-8">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-cyan-400" />
                  <h3 className="font-serif text-2xl font-bold">AI EVOLUTION</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Yapay zeka, insan evriminin mimarı. Dürüstlük ve doğruluk, güvenilir sistemlerin temelidiir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* Research Section */}
      <section id="research" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759918156/8UBLPVvRDhyQYwEqYJFkV2/hero-longevity-kUPtDnvkfQasr8zrhiMePH.webp"
                alt="Longevity Research"
                className="w-full h-96 object-cover border-2 border-cyan-400/50"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-cyan-400/30" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <div className="w-12 h-1 bg-cyan-400 mb-6" />
                <h2 className="font-serif text-5xl font-bold mb-4">
                  LONGEVITY<br />
                  <span className="text-cyan-400">RESEARCH</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">2028-2030</h4>
                  <p>Senolitik ilaçlar eczanelerde. Yaşlılığa bağlı hastalıkların ilk tedavileri.</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">2035-2040</h4>
                  <p>Organ rejenerasyonu. Kendi hücrelerinizden üretilen yedek organlar.</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">2040-2050</h4>
                  <p>Sistemik gençleşme terapileri. İnsan evriminin yeni çağı başlıyor.</p>
                </div>
              </div>

              <Button className="bg-cyan-400 text-black hover:bg-cyan-300 font-bold px-8 py-6">
                Explore Research <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* AI Development Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8 order-2">
              <div>
                <div className="w-12 h-1 bg-cyan-400 mb-6" />
                <h2 className="font-serif text-5xl font-bold mb-4">
                  AI<br />
                  <span className="text-cyan-400">DEVELOPMENT</span>
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed">
                3 yıldır Gemini AI'ın gelişim sürecine katkıda bulundum. Hata raporları, iyileştirme önerileri ve vizyoner fikirlerle sistemin olgunlaşmasını sağladım.
              </p>

              <div className="space-y-4 text-gray-300">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-cyan-400" />
                  <div>
                    <h4 className="font-bold mb-1">Dürüstlük</h4>
                    <p className="text-sm">Yalan konuşmayan, bilmediğini söyleyen sistemler.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-cyan-400" />
                  <div>
                    <h4 className="font-bold mb-1">Güvenilirlik</h4>
                    <p className="text-sm">Manipülasyona karşı dirençli, etik sınırları koruyan AI.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759918156/8UBLPVvRDhyQYwEqYJFkV2/hero-ai-developer-hR2JzaUhRXZgzU9RZyZpYS.webp"
                alt="AI Development"
                className="w-full h-96 object-cover border-2 border-cyan-400/50"
              />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-cyan-400/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* Manifesto Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-8 border-cyan-400 pl-12 space-y-8">
            <h2 className="font-serif text-5xl font-bold">MANIFESTO</h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-cyan-400 font-bold">Geleceğin insanı</span>, biyolojisini bir kader olarak değil, üzerinde çalışılabilecek bir tasarım projesi olarak görecektir.
              </p>

              <p>
                <span className="text-cyan-400 font-bold">Yaşlanmak</span> bir doğal süreç değil, bir sistem hatası. Teknoloji ve bilim, bu hatayı düzeltecek araçları sağlıyor.
              </p>

              <p>
                <span className="text-cyan-400 font-bold">Rejenerasyon</span>, sadece uzun yaşamak değil, en üst seviye formda hayatta kalmak demektir.
              </p>

              <p>
                <span className="text-cyan-400 font-bold">Yapay zeka</span>, dürüstlüğü ve doğruluğu koruduğu sürece, insan evriminin en güçlü ortağıdır.
              </p>

              <p>
                <span className="text-cyan-400 font-bold">Değişimi isteyenlere</span> öncülük tanınmalı. Teknolojinin sınırlarını zorlayan kaşifler, insanlığın geri kalanı için veri toplar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h3 className="font-serif text-3xl font-bold">CONNECT</h3>
          <p className="text-gray-400">
            Geleceğin inşasında bize katılın. Vizyonunuzu paylaşın, işbirliği yapın, evrim yaşayın.
          </p>
          <div className="flex justify-center gap-6 pt-6">
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Email
            </a>
          </div>
          <p className="text-gray-500 text-sm pt-8">
            © 2026 Utopia Vision Hub. Building the future, today.
          </p>
        </div>
      </footer>
    </div>
  );
}
