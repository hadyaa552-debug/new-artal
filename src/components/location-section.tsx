"use client";

import { MapPin } from "lucide-react";
import { siteConfig } from "@/../configs/site";

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
            <span className="gold-gradient">في قلب منطقة R8</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-2xl mx-auto text-cream/50 text-lg">
            موقع مختار بعناية بالقرب من أهم المحاور الحيوية بالعاصمة الإدارية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Location Images */}
          <div className="space-y-4">
            <div className="rounded-sm overflow-hidden group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.images.location}
                alt="موقع بلاتو العاصمة الإدارية R8"
                className="w-full h-auto object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="rounded-sm overflow-hidden group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.images.compound}
                alt="كمبوند بلاتو العاصمة الإدارية"
                className="w-full h-auto object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Landmarks */}
          <div>
            <h3 className="text-cream font-bold text-lg mb-6">
              أبرز المعالم والطرق القريبة
            </h3>
            <div className="space-y-3 mb-8">
              {siteConfig.nearbyLandmarks.map((landmark) => (
                <div
                  key={landmark}
                  className="glass-card hover-gold rounded-sm p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-sm shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-cream/80 text-sm font-medium">{landmark}</span>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-sm p-6 text-center border-accent/20">
              <p className="text-cream/50 text-sm mb-4">
                يتميز موقع بلاتو داخل R8 بالقرب من مراكز الأعمال والخدمات مع تحقيق
                توازن مثالي بين الهدوء والحيوية
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
        </div>
      </div>
    </section>
  );
}
