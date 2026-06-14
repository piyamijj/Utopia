import { useState } from "react";
import { ChevronDown, Zap, Microscope, Dna, Heart, Brain, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Longevity Research Page - Kapsamlı Araştırma Rehberi
 * Neo-Brutalist tasarım: Siyah-beyaz-elektrik mavisi
 * İçerik: Bilimsel, detaylı, interaktif
 */

interface ResearchArea {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  stage: string;
  icon: React.ReactNode;
  details: string[];
  timeline: string;
  organizations: string[];
  impact: string;
}

interface TimelinePhase {
  period: string;
  years: string;
  developments: string[];
  probability: string;
}

const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Senolitikler & Senomorfikler",
    subtitle: "Zombi Hücrelerle Savaş",
    description:
      "Vücutta biriken, ölmeyi reddeden ve çevresine toksik iltihap saçan 'zombi hücreleri' (senescent cells) bulup yok eden veya susturan ilaçlar.",
    stage: "İleri Aşama",
    icon: <Zap className="w-6 h-6" />,
    details: [
      "Senescent hücreler yaşlanmanın 12 temel belirtisinden birini oluşturur",
      "Dasatinib + Quercetin kombinasyonu hayvan modellerinde başarılı",
      "Unity Biotechnology'nin UBX0101 insan deneylerinde (Faz 2)",
      "Senomorfikler: Hücreleri öldürmek yerine, iltihap sinyallerini susturma",
      "Potansiyel etki: Yaşlılık hastalıklarında %20-40 iyileşme",
    ],
    timeline: "2026-2028",
    organizations: ["Unity Biotechnology", "Mayo Clinic", "Calico Labs"],
    impact: "Yaşlılık hastalıklarının temel nedenini ortadan kaldırma",
  },
  {
    id: 2,
    title: "Hücresel Yeniden Programlama",
    subtitle: "Yamanaka Faktörleri & Epigenetik Gençleşme",
    description:
      "Yetişkin bir hücrenin kimliğini bozmadan onu epigenetik olarak gençlik durumuna geri döndürme işlemi.",
    stage: "Hayvan Deneyleri",
    icon: <Dna className="w-6 h-6" />,
    details: [
      "Yamanaka Faktörleri (Oct4, Sox2, Klf4, c-Myc) hücreleri geri programlıyor",
      "Altos Labs: Yaşlı farelerin gözlerinde görme kaybını tersine çevirdi (2022)",
      "Horvath Saati: Biyolojik yaşı ölçen epigenetik saat (doğruluk: 99%)",
      "Kısmi reprogramlama: Hücre kimliğini kaybetmeden sadece yaş sıfırlanıyor",
      "Riski: Tam reprogramlama kanser riskini artırabilir",
    ],
    timeline: "2030-2035",
    organizations: ["Altos Labs", "Stanford University", "Harvard Medical School"],
    impact: "Organ ve doku rejenerasyonunun kapısını açma",
  },
  {
    id: 3,
    title: "Metabolik Terapiler",
    subtitle: "Rapamisin, NAD+, Metformin",
    description:
      "Halihazırda var olan ilaçların yaşlanma karşıtı mekanizmaları hedeflenerek yeniden konumlandırılması.",
    stage: "Uygulamaya Yakın",
    icon: <Heart className="w-6 h-6" />,
    details: [
      "Rapamisin: mTOR inhibitörü, otofaji tetikleyici, farelerde ömür %18 uzatıyor",
      "NAD+ takviyesi: Mitokondriyal fonksiyonu iyileştiriyor, enerji üretimine yardımcı",
      "Metformin: Diyabet ilacı, yaşlanmayı yavaşlatıyor (TAME çalışması devam ediyor)",
      "Resveratrol & Quercetin: Sirtuin aktivatörleri, hücresel stres direnci",
      "GLP-1 agonistleri: Diyabet ilacı, yaşlanma karşıtı etkileri keşfediliyor",
    ],
    timeline: "2025-2028",
    organizations: ["NIH", "Mayo Clinic", "Intervene Robotics"],
    impact: "Bugün eczanelerde var olan ilaçlarla yaşlanmayı yavaşlatma",
  },
  {
    id: 4,
    title: "Bağışıklık Yaşlanması (Immunosenescence)",
    subtitle: "Timüs Rejenerasyonu & CAR-T Terapileri",
    description:
      "Yaşla birlikte zayıflayan bağışıklık sistemini desteklemek için bağışıklık hücrelerinin eğitildiği 'Timüs' bezini yeniden büyütme çalışmaları.",
    stage: "İnsan Deneyleri (Faz 1-2)",
    icon: <Brain className="w-6 h-6" />,
    details: [
      "Timüs: 20'li yaşlarda en büyük, 60'lı yaşlarda neredeyse yok oluyor",
      "REPAIR-Aging: Timüs rejenerasyonu için gen terapisi (Faz 1 başarılı)",
      "CAR-T hücreler: Kanser tedavisinde başarılı, yaşlanma hücrelerine uygulanıyor",
      "Thymosin Alpha 1: Timüs hormonu takviyesi, bağışıklık fonksiyonunu iyileştiriyor",
      "Potensiyel: Enfeksiyonlara karşı direnci restore etme, kanser riskini azaltma",
    ],
    timeline: "2027-2032",
    organizations: ["Stanford", "NIH", "Calico Labs"],
    impact: "Yaşlı bireylerde enfeksiyon ve kanser riskini azaltma",
  },
  {
    id: 5,
    title: "Ekzozom & Genç Plazma Terapileri",
    subtitle: "Heterochronic Parabiosis'in Moleküler Temeli",
    description:
      "Genç hücrelerden alınan sinyallerin yaşlı dokulara enjekte edilerek tamir sürecinin başlatılması.",
    stage: "İnsan Deneyleri",
    icon: <Microscope className="w-6 h-6" />,
    details: [
      "Heterochronic Parabiosis: Genç ve yaşlı farelerin kan dolaşımı birleştirildi, yaşlı farenin kasları gençleşti",
      "Ekzozomlar: Hücreler tarafından salgılanan mikro-veziküllerdir, bilgi taşırlar",
      "GDF11 & Oxytocin: Genç plazmada bulunan gençleştirici faktörler",
      "Parabiosis Therapeutics: Genç plazma transfüzyonu klinik deneylerde",
      "Riski: Etik endişeler, enfeksiyon riski, uzun dönem etkileri bilinmiyor",
    ],
    timeline: "2028-2035",
    organizations: ["Stanford", "Parabiosis Therapeutics", "Grifols"],
    impact: "Yaşlı dokuların gençleştirilmesi için doğrudan müdahale",
  },
  {
    id: 6,
    title: "CRISPR & Gen Terapileri",
    subtitle: "Genetik Yaşlanma Faktörlerini Düzeltme",
    description:
      "Yaşlanma ile ilişkili genetik mutasyonları doğrudan düzeltme ve yaşlanmayı yavaşlatan genleri aktive etme.",
    stage: "Hayvan Deneyleri / Erken İnsan Deneyleri",
    icon: <TrendingUp className="w-6 h-6" />,
    details: [
      "CRISPR-Cas9: Hatalı genleri cerrahî kesinlikle düzeltebiliyor",
      "In-vivo CRISPR: Doğrudan vücutta gen düzeltme (2024'te ilk başarılar)",
      "Yaşlanma genleri: FOXO, SIRT1, mTOR - bu genleri optimize etme çalışmaları",
      "Telomeraz aktivasyonu: Telomerleri uzatan enzimi geri aktive etme",
      "Riski: Off-target mutasyonlar, etik endişeler, uzun dönem bilinmezlikler",
    ],
    timeline: "2030-2040",
    organizations: ["Editas Medicine", "CRISPR Therapeutics", "Sangamo"],
    impact: "Genetik seviyede yaşlanmayı yeniden programlama",
  },
];

const timelinePhases: TimelinePhase[] = [
  {
    period: "Kısa Vade",
    years: "2025-2028",
    developments: [
      "Rapamisin ve NAD+ takviyelerinin 'uzun ömür protokolü' olarak yaygınlaşması",
      "İlk jenerasyon senolitiklerin FDA onayı ve piyasaya çıkması",
      "Timüs rejenerasyonu tedavilerinin Faz 2 sonuçları",
      "Ekzozom terapilerinin ilk klinik uygulamaları",
      "Yaşlanma karşıtı ilaçlara erişim artmaya başlıyor",
    ],
    probability: "Çok Yüksek (%85+)",
  },
  {
    period: "Orta Vade",
    years: "2028-2035",
    developments: [
      "Senolitiklerin 'yaşlanma karşıtı' etiketle FDA onayı",
      "Hücresel yeniden programlamanın ilk organ rejenerasyonları (karaciğer, böbrek)",
      "Genetik profillere göre kişiselleştirilmiş longevity protokolleri",
      "Biyolojik yaş sıfırlama terapilerinin yaygınlaşması",
      "Yaşlılık hastalıklarında %30-50 iyileşme oranları",
    ],
    probability: "Yüksek (%70+)",
  },
  {
    period: "Uzun Vade",
    years: "2035-2050",
    developments: [
      "Hücresel yeniden programlama ve gen terapilerinin standart medikal prosedürler olması",
      "Kaçış Hızı (Longevity Escape Velocity) aşamasına ulaşma",
      "İnsan sağkalım süresinin radikal uzatılması (120-150 yıl hedefleri)",
      "Yaşlanmanın tedavi edilebilir bir hastalık olarak kabul görmesi",
      "Geleceğin tıbbı: Yaşlanmayı önlemek, iyileştirmek, tersine çevirmek",
    ],
    probability: "Orta (%50+)",
  },
];

export default function LongevityResearch() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl">UTOPIA</span>
          </a>
          <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-cyan-400" />
            <h1 className="font-serif text-6xl font-bold leading-tight">
              LONGEVITY<br />
              <span className="text-cyan-400">RESEARCH</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Yaşlanmayı durdurmak, tersine çevirmek ve insan ömrünü radikal olarak uzatmak için yapılan bilimsel çalışmaların kapsamlı rehberi.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-16">
            <span className="text-cyan-400">6</span> Temel Araştırma Alanı
          </h2>

          <div className="space-y-6">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                className="border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedCard(expandedCard === area.id ? null : area.id)}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-cyan-400/5 to-transparent p-6 flex items-start justify-between">
                  <div className="flex gap-6 flex-1">
                    <div className="text-cyan-400 pt-1">{area.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-2xl font-bold">{area.title}</h3>
                        <span className="text-xs font-mono bg-cyan-400/20 text-cyan-400 px-3 py-1">
                          {area.stage}
                        </span>
                      </div>
                      <p className="text-gray-400">{area.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                      expandedCard === area.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Expanded Content */}
                {expandedCard === area.id && (
                  <div className="border-t border-cyan-400/20 p-6 space-y-6 bg-black/50">
                    <div>
                      <h4 className="font-bold text-cyan-400 mb-3">Açıklama</h4>
                      <p className="text-gray-300 leading-relaxed">{area.description}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-cyan-400 mb-3">Detaylı Bilgi</h4>
                      <ul className="space-y-2">
                        {area.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-300">
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Tahmini Zaman</p>
                        <p className="font-mono text-cyan-400">{area.timeline}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Beklenen Etki</p>
                        <p className="text-sm text-gray-300">{area.impact}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Öncü Kuruluşlar</p>
                        <p className="text-sm text-gray-300">{area.organizations.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-16">
            Tahmini <span className="text-cyan-400">Zaman Çizelgesi</span>
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {timelinePhases.map((phase, idx) => (
              <div
                key={idx}
                className={`border-l-4 pl-6 py-6 cursor-pointer transition-all duration-300 ${
                  activePhase === idx
                    ? "border-cyan-400 bg-cyan-400/5"
                    : "border-cyan-400/30 hover:border-cyan-400/60"
                }`}
                onClick={() => setActivePhase(idx)}
              >
                <h3 className="font-serif text-2xl font-bold mb-2">{phase.period}</h3>
                <p className="text-cyan-400 font-mono text-sm mb-4">{phase.years}</p>
                <p className="text-xs text-gray-500 mb-3">{phase.probability}</p>

                {activePhase === idx && (
                  <div className="mt-4 space-y-2 text-sm text-gray-300">
                    {phase.developments.map((dev, devIdx) => (
                      <div key={devIdx} className="flex gap-2">
                        <span className="text-cyan-400">→</span>
                        <span>{dev}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 px-6 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-16">
            Bilimsel <span className="text-cyan-400">İstatistikler</span>
          </h2>

          <div className="grid grid-cols-4 gap-6">
            <div className="border border-cyan-400/30 p-6">
              <p className="text-4xl font-bold text-cyan-400 mb-2">$10B+</p>
              <p className="text-gray-400">Yıllık Longevity Yatırımı</p>
            </div>
            <div className="border border-cyan-400/30 p-6">
              <p className="text-4xl font-bold text-cyan-400 mb-2">500+</p>
              <p className="text-gray-400">Longevity Şirketi Kuruldu</p>
            </div>
            <div className="border border-cyan-400/30 p-6">
              <p className="text-4xl font-bold text-cyan-400 mb-2">30%</p>
              <p className="text-gray-400">Farelerde Ömür Uzatma</p>
            </div>
            <div className="border border-cyan-400/30 p-6">
              <p className="text-4xl font-bold text-cyan-400 mb-2">2045</p>
              <p className="text-gray-400">Tekillik Yılı (Kurzweil)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl font-bold">
            Geleceğin Tıbbı Bugün Yazılıyor
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Longevity araştırmaları sadece yaşlanmayı yavaşlatmakla kalmıyor, insan evriminin yeni bir çağını açıyor. Siz de bu yolculuğun parçası olabilirsiniz.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <Button className="bg-cyan-400 text-black hover:bg-cyan-300 font-bold px-8 py-6">
              Araştırmaları Takip Et
            </Button>
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-6"
            >
              Kaynakları Gör
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cyan-400/20 text-center text-gray-500 text-sm">
        <p>
          © 2026 Utopia Vision Hub. Bilimsel doğruluk ve dürüstlük bizim temelidir.
        </p>
      </footer>
    </div>
  );
}
