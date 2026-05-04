"use client";

import { siteConfig } from "@/../configs/site";

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // الخدمات والمرافق
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gold-gradient">حياة متكاملة الخدمات</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-2xl mx-auto text-cream/50 text-lg">
            كل ما تحتاجه لحياة مريحة ومتكاملة في مكان واحد
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {siteConfig.amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="glass-card hover-gold rounded-sm p-6 lg:p-8 text-center group cursor-default"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {amenity.icon}
              </div>
              <h3 className="text-cream font-bold text-sm mb-1">{amenity.title}</h3>
              <span className="text-cream/30 text-xs">{amenity.titleEn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
