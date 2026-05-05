"use client";

import { siteConfig } from "@/../configs/site";
import { Percent, Tag } from "lucide-react";

export default function PaymentPlans() {
  return (
    <section id="payment" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // أنظمة السداد
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gold-gradient">حلول مرنة تناسب الجميع</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-2xl mx-auto text-cream/50 text-lg">
            أنظمة سداد متنوعة تبدأ من 5% مقدم وتقسيط حتى 12 سنة مع خصم كاش يصل إلى 40%
          </p>
        </div>

        {/* Payment Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {siteConfig.paymentPlans.map((item, i) => {
            const isSpecial = item.discount === "خصم 40%";
            return (
              <div
                key={i}
                className={`glass-card hover-gold rounded-sm p-5 relative overflow-hidden ${
                  isSpecial ? "border-accent/40 ring-1 ring-accent/20" : ""
                }`}
              >
                {isSpecial && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
                )}
                {item.discount && (
                  <div className="inline-flex items-center gap-1.5 bg-accent/15 text-accent px-2.5 py-1 rounded-sm text-xs font-bold mb-3">
                    <Tag className="w-3 h-3" />
                    {item.discount}
                  </div>
                )}
                <h4 className="text-cream font-bold text-sm mb-1.5">{item.plan}</h4>
                <p className="text-cream/50 text-xs">{item.details}</p>
                {isSpecial && (
                  <span className="block text-accent/60 text-[10px] mt-2 font-bold tracking-wider uppercase">
                    لفترة محدودة فقط
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Developer image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-sm overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.images.developerVision}
              alt="رؤية ارتال للتطوير العقاري"
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>

          <div>
            <h3 className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
              // رؤية ارتال
            </h3>
            <h4 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-cream mb-4">
              تحويل بلاتو إلى مجتمع استثماري متكامل
            </h4>
            <div className="space-y-3">
              {[
                "موقع استراتيجي داخل R8",
                "تخطيط عمراني ذكي ومدروس",
                "بيئة سكنية واستثمارية متكاملة",
                "تنوع الوحدات وتكامل الخدمات",
                "خبرة 27 عاماً في التطوير العقاري",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  <span className="text-cream/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 bg-accent text-primary font-bold text-sm tracking-wider uppercase hover:bg-accent-light transition-colors duration-300"
            >
              احجز استشارتك المجانية
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
