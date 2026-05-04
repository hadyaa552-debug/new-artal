"use client";

import { CheckCircle2 } from "lucide-react";

export default function PaymentPlans() {
  return (
    <section id="payment" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // أنظمة السداد
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gold-gradient">خطط سداد مرنة</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main payment card */}
          <div className="glass-card rounded-sm overflow-hidden">
            {/* Header */}
            <div className="bg-accent/10 border-b border-accent/20 p-8 text-center">
              <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-cream mb-2">
                مقدم يبدأ من{" "}
                <span className="text-accent">5%</span>
              </h3>
              <p className="text-cream/50">
                وتقسيط مريح حتى{" "}
                <span className="text-accent font-bold">12 سنة</span>
              </p>
            </div>

            {/* Features */}
            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "أقل مقدم 5% فقط",
                  "تقسيط حتى 12 سنة بدون فوائد",
                  "أقساط متساوية ومريحة",
                  "خطط سداد مرنة متعددة",
                  "تسهيلات خاصة للدفع المبكر",
                  "أسعار تنافسية للحجز المبكر",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-cream/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Example calculation */}
              <div className="bg-primary/50 rounded-sm p-6 border border-accent/10">
                <h4 className="text-accent text-sm font-bold mb-4 tracking-wider">
                  // مثال على نظام السداد
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-cream">
                      2.27M
                    </div>
                    <div className="text-cream/40 text-xs mt-1">إجمالي السعر</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-accent">
                      113,750
                    </div>
                    <div className="text-cream/40 text-xs mt-1">مقدم 5%</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-cream">
                      ~15,000
                    </div>
                    <div className="text-cream/40 text-xs mt-1">قسط شهري تقريبي</div>
                  </div>
                </div>
                <p className="text-cream/30 text-[11px] text-center mt-4">
                  * المثال لوحدة 1 غرفة نوم بنظام 5% مقدم و12 سنة تقسيط. المبالغ تقريبية
                </p>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <a
                  href="#contact"
                  className="inline-block px-10 py-3.5 bg-accent text-primary font-bold text-sm tracking-wider uppercase hover:bg-accent-light transition-colors duration-300"
                >
                  احسب قسطك الشهري
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
