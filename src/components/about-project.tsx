"use client";

import { Building2, Shield, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "تصميم عصري",
    desc: "تصميمات معمارية مبتكرة تجمع بين الأناقة والوظيفية، مستوحاة من أحدث الاتجاهات العالمية في التخطيط العمراني",
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
    desc: "موقع R8 يشهد إقبال استثماري متزايد مع ارتفاع متوقع في الأسعار بفضل القرب من أهم معالم العاصمة",
  },
];

export default function AboutProject() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // عن المشروع
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="text-cream">PLATÓ — </span>
            <span className="gold-gradient">مستوى جديد من الحياة</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-3xl mx-auto text-cream/60 text-lg leading-relaxed">
            يقدم مشروع PLATÓ من ارتال للتطوير العقاري تجربة سكنية فريدة في قلب الحي السكني الثامن R8
            بالعاصمة الإدارية الجديدة. مشروع يجمع بين الفخامة والراحة في واحدة من أكثر المناطق
            الواعدة استثمارياً، بتصميمات عصرية ومرافق متكاملة تلبي تطلعات الأسرة المصرية العصرية.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="glass-card hover-gold rounded-sm p-6 lg:p-8 text-center group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-accent/20 rounded-sm bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-cream mb-3">{feature.title}</h3>
              <p className="text-cream/50 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* EOI Banner */}
        <div className="mt-16 glass-card rounded-sm p-8 lg:p-12 text-center border-accent/20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-sm text-sm font-bold mb-4 animate-pulse">
            <span className="w-2 h-2 bg-accent rounded-full" />
            الحجز مفتوح الآن
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-cream mb-3">
            EOIs Officially Open
          </h3>
          <p className="text-cream/50 max-w-xl mx-auto">
            سجل اهتمامك الآن واحصل على أفضل الوحدات والأسعار في أحدث مشروعات ارتال
            بالعاصمة الإدارية الجديدة
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
