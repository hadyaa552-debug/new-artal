"use client";

import { useEffect, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary to-primary-light" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-[120px]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal gold line */}
        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent rotate-12 origin-top" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pre-title */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-accent/80 text-sm tracking-[0.3em] uppercase mb-6">
            <span className="w-8 h-[1px] bg-accent/50" />
            Artal Developments
            <span className="w-8 h-[1px] bg-accent/50" />
          </span>
        </div>

        {/* Main title */}
        <h1
          className={`transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold gold-gradient mb-4 tracking-tight">
            PLATÓ
          </span>
          <span className="block font-[family-name:var(--font-accent)] text-xl sm:text-2xl md:text-3xl text-cream/60 italic tracking-wide">
            A Way of Movement
          </span>
        </h1>

        {/* Location badge */}
        <div
          className={`mt-8 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 rounded-sm px-5 py-2.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-cream/80 text-sm">
              الحي السكني الثامن R8 — العاصمة الإدارية الجديدة
            </span>
          </div>
        </div>

        {/* Key highlights */}
        <div
          className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { value: "5%", label: "مقدم" },
            { value: "12", label: "سنة تقسيط" },
            { value: "2.27M", label: "يبدأ من" },
            { value: "+27", label: "سنة خبرة" },
          ].map((item) => (
            <div key={item.label} className="text-center p-4">
              <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-accent mb-1">
                {item.value}
              </div>
              <div className="text-cream/50 text-xs tracking-wider uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[1100ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#contact"
            className="group relative px-8 py-3.5 bg-accent text-primary font-bold text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-accent/20"
          >
            <span className="relative z-10">احجز وحدتك الآن</span>
            <div className="absolute inset-0 bg-accent-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
          </a>
          <a
            href={`https://wa.me/201116663367?text=${encodeURIComponent("مهتم بمشروع PLATÓ - العاصمة الإدارية الجديدة")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-accent/40 text-accent text-sm tracking-wider uppercase hover:bg-accent/10 transition-all duration-500"
          >
            تواصل واتساب
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-accent/40 hover:text-accent transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
