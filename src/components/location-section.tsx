"use client";

import { MapPin, Plane, Building, Landmark, Train, Globe } from "lucide-react";

const landmarks = [
  { icon: Plane, label: "مطار العاصمة الإدارية الدولي", distance: "دقائق" },
  { icon: Building, label: "فندق الماسة", distance: "قريب" },
  { icon: Landmark, label: "الحي الحكومي والنهر الأخضر", distance: "قريب" },
  { icon: Train, label: "محطة المونوريل", distance: "دقائق" },
  { icon: Globe, label: "حي السفارات والمنطقة الدبلوماسية", distance: "بالقرب" },
  { icon: MapPin, label: "القاهرة الجديدة وطريق السويس", distance: "20 دقيقة" },
];

export default function LocationSection() {
  return (
    <section id="location" className="relative py-24 lg:py-32 bg-dark/30">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // الموقع
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gold-gradient">موقع استراتيجي في قلب R8</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-2xl mx-auto text-cream/50 text-lg">
            يتميز الحي السكني الثامن R8 بموقعه على ربوة مرتفعة عن سطح البحر، وقربه
            من أهم المحاور والمعالم الرئيسية بالعاصمة الإدارية الجديدة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="glass-card rounded-sm overflow-hidden aspect-[4/3] lg:aspect-auto flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-dark" />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 50%)`,
              }}
            />
            <div className="relative text-center p-8">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-cream mb-2">
                الحي السكني الثامن R8
              </h3>
              <p className="text-cream/50 text-sm mb-4">
                العاصمة الإدارية الجديدة، مصر
              </p>
              <p className="text-cream/30 text-xs mb-6">
                مساحة الحي: 2,500 فدان
              </p>
              <a
                href="https://maps.google.com/?q=New+Administrative+Capital+R8+Egypt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-accent/30 text-accent text-sm hover:bg-accent/10 transition-all duration-300"
              >
                <MapPin className="w-4 h-4" />
                افتح على الخريطة
              </a>
            </div>
          </div>

          {/* Landmarks */}
          <div className="space-y-4">
            {landmarks.map((item) => (
              <div
                key={item.label}
                className="glass-card hover-gold rounded-sm p-5 flex items-center gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-cream font-semibold text-sm">{item.label}</h4>
                </div>
                <span className="text-accent text-xs font-bold bg-accent/10 px-3 py-1 rounded-sm">
                  {item.distance}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
