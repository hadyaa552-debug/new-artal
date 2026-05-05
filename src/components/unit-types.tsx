"use client";

import { siteConfig } from "@/../configs/site";
import { BedDouble, Home, Layers } from "lucide-react";

const iconMap: Record<string, typeof BedDouble> = {
  "1 غرفة نوم": BedDouble,
  "2 غرف نوم": BedDouble,
  "3 غرف نوم": BedDouble,
  "4 غرف نوم": BedDouble,
  "دوبلكس": Layers,
  "تاون هاوس": Home,
};

export default function UnitTypes() {
  return (
    <section id="units" className="relative py-24 lg:py-32 bg-dark/30">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // أنواع الوحدات والأسعار
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gold-gradient">تنوع حقيقي يلبي كل الاحتياجات</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-2xl mx-auto text-cream/50 text-lg">
            وحدات سكنية متنوعة تبدأ من 65 متر بأسعار تبدأ من 2,275,000 جنيه مصري
          </p>
        </div>

        {/* Gallery row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { src: siteConfig.images.prices, alt: "أسعار بلاتو العاصمة الإدارية" },
            { src: siteConfig.images.units, alt: "مساحات وحدات بلاتو" },
            { src: siteConfig.images.discount, alt: "خصومات بلاتو العاصمة الإدارية" },
          ].map((img) => (
            <div key={img.alt} className="rounded-sm overflow-hidden group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.units.map((unit, i) => {
            const Icon = iconMap[unit.type] || BedDouble;
            return (
              <div
                key={unit.type}
                className="group glass-card hover-gold rounded-sm overflow-hidden"
              >
                {/* Card Header */}
                <div className="relative p-6 pb-4 border-b border-accent/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-sm">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-cream">
                            {unit.type}
                          </h3>
                          <span className="text-xs text-cream/40 tracking-wider">
                            {unit.typeEn}
                          </span>
                        </div>
                      </div>
                    </div>
                    {i === 0 && (
                      <span className="text-[10px] bg-accent/20 text-accent px-2 py-1 rounded-sm font-bold tracking-wider">
                        الأقل سعراً
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Area */}
                  <div className="mb-3 bg-primary/50 rounded-sm px-3 py-2 inline-block">
                    <span className="text-cream/60 text-xs">المساحة: </span>
                    <span className="text-cream text-xs font-bold">{unit.area}</span>
                  </div>

                  <div className="mb-4">
                    <span className="text-cream/40 text-xs tracking-wider">
                      يبدأ من
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-accent">
                        {unit.price}
                      </span>
                      <span className="text-cream/40 text-sm">جنيه</span>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="flex items-center gap-4 text-xs text-cream/40 mb-5">
                    <span>مقدم 5%</span>
                    <span className="w-1 h-1 bg-accent/30 rounded-full" />
                    <span>تقسيط 12 سنة</span>
                    <span className="w-1 h-1 bg-accent/30 rounded-full" />
                    <span className="text-accent">خصم كاش 40%</span>
                  </div>

                  <a
                    href="#contact"
                    className="block w-full text-center py-2.5 border border-accent/30 text-accent text-sm font-semibold hover:bg-accent hover:text-primary transition-all duration-300"
                  >
                    استفسر الآن
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-cream/30 text-xs mt-8">
          * الأسعار المذكورة هي أسعار ابتدائية وقابلة للتغيير. للحصول على أحدث الأسعار تواصل معنا
        </p>
      </div>
    </section>
  );
}
