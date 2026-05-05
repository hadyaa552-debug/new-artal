"use client";

import { Building2, Shield, Award, TrendingUp } from "lucide-react";
import { siteConfig } from "@/../configs/site";

const features = [
  {
    icon: Building2,
    title: "تصميم عصري",
    desc: "تصميمات معمارية مبتكرة تجمع بين الأناقة والوظيفية على مساحة 28 فدان بقطعة M2 داخل منطقة R8",
  },
  {
    icon: Shield,
    title: "ملكية مباشرة",
    desc: "جميع الأراضي مسجلة باسم ارتال مباشرة مع إطار قانوني واضح يحمي حقوق العملاء بشفافية كاملة",
  },
  {
    icon: Award,
    title: "+27 سنة خبرة",
    desc: "شراكة مصرية سعودية منذ 1997 مع سجل حافل بالمشاريع الناجحة في المملكة العربية السعودية ومصر",
  },
  {
    icon: TrendingUp,
    title: "فرصة استثمارية",
    desc: "خصم كاش يصل إلى 40% وأنظمة سداد مرنة تبدأ من 5% مقدم مع تقسيط حتى 12 سنة",
  },
];

export default function AboutProject() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // عن المشروع
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-cream">PLATÓ — </span>
            <span className="gold-gradient">أكثر من مجرد سكن</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-3xl mx-auto text-cream/60 text-lg leading-relaxed">
            كمبوند بلاتو العاصمة الإدارية هو أحدث مشروعات ارتال للتطوير العقاري داخل منطقة R8
            على مساحة 28 فدان بقطعة M2، مجتمع سكني متكامل يجمع بين الموقع الاستراتيجي والتخطيط الذكي
            وقيمة استثمارية حقيقية، مع وحدات متنوعة تبدأ من 65 متر وأسعار تبدأ من 2,275,000 جنيه.
          </p>
        </div>

        {/* Image + Features layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Project Image */}
          <div className="relative rounded-sm overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.images.hero}
              alt="كمبوند بلاتو العاصمة الإدارية الجديدة"
              className="w-full h-auto object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            {/* Overlay stats */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-around">
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-xl font-bold text-accent">28</div>
                <div className="text-cream/60 text-[10px]">فدان</div>
              </div>
              <div className="w-[1px] h-8 bg-accent/20" />
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-xl font-bold text-accent">5%</div>
                <div className="text-cream/60 text-[10px]">مقدم</div>
              </div>
              <div className="w-[1px] h-8 bg-accent/20" />
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-xl font-bold text-accent">12</div>
                <div className="text-cream/60 text-[10px]">سنة تقسيط</div>
              </div>
              <div className="w-[1px] h-8 bg-accent/20" />
              <div className="text-center">
                <div className="font-[family-name:var(--font-display)] text-xl font-bold text-accent">40%</div>
                <div className="text-cream/60 text-[10px]">خصم كاش</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card hover-gold rounded-sm p-5 group"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-11 h-11 mb-4 flex items-center justify-center border border-accent/20 rounded-sm bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-bold text-cream mb-2">{feature.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EOI Banner */}
        <div className="glass-card rounded-sm p-8 lg:p-12 text-center border-accent/20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-sm text-sm font-bold mb-4 animate-pulse">
            <span className="w-2 h-2 bg-accent rounded-full" />
            الحجز مفتوح الآن
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-cream mb-3">
            EOIs Officially Open
          </h3>
          <p className="text-cream/50 max-w-xl mx-auto">
            سجل اهتمامك الآن واحصل على أفضل الوحدات والأسعار في أحدث مشروعات ارتال
            بالعاصمة الإدارية الجديدة — خصم كاش يصل إلى 40%
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-accent text-primary font-bold text-sm tracking-wider uppercase hover:bg-accent-light transition-colors duration-300"
          >
            سجل الآن
          </a>
        </div>
      </div>
    </section>
  );
}
