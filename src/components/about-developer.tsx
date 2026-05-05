"use client";

import { Calendar, Globe2, Building2, Users } from "lucide-react";
import { siteConfig } from "@/../configs/site";

const stats = [
  { icon: Calendar, value: "1997", label: "سنة التأسيس" },
  { icon: Globe2, value: "+27", label: "سنة خبرة" },
  { icon: Building2, value: "4+", label: "مشاريع في مصر" },
  { icon: Users, value: "344K+", label: "متابع على فيسبوك" },
];

const projects = [
  { name: "STRIDE", location: "شارع التسعين - القاهرة الجديدة", type: "مشروع متعدد الاستخدامات" },
  { name: "CELLEN", location: "القاهرة الجديدة", type: "مساحات إدارية وأعمال" },
  { name: "WELLEN", location: "القاهرة الجديدة", type: "مشروع طبي متكامل" },
];

export default function AboutDeveloper() {
  return (
    <section id="developer" className="relative py-24 lg:py-32 bg-dark/30">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // عن المطور
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gold-gradient">ارتال للتطوير العقاري</span>
          </h2>
          <div className="section-divider mb-8" />
        </div>

        {/* Developer image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="rounded-sm overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.images.developer}
              alt="ارتال للتطوير العقاري Artal Developments"
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div>
            <p className="text-cream/60 text-lg leading-relaxed mb-6">
              شراكة مصرية سعودية بدأت رحلتها في 1997 بالمملكة العربية السعودية، وتوسعت إلى مصر لتقديم
              مشاريع سكنية ومتعددة الاستخدامات بأعلى معايير الجودة والابتكار. تتميز ارتال بأن جميع
              أراضيها ومشاريعها مسجلة باسم الشركة مباشرة، مع إطار قانوني واضح يحمي حقوق العملاء.
            </p>
            <p className="text-cream/50 text-sm leading-relaxed">
              اسم &quot;ارتال&quot; يعني القطيع — قوة موحدة تتحرك ككتلة واحدة. الحصان يرمز لقيم الشركة
              في الرشاقة والقوة والرؤية. اليوم تواصل ارتال النمو مع التركيز على خلق مساحات تخدم
              الحاضر والمستقبل.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-sm p-6 text-center">
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-3" />
              <div className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-cream/40 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-center text-accent text-sm tracking-[0.3em] uppercase mb-8">
            // مشاريع ارتال السابقة
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.name} className="glass-card hover-gold rounded-sm p-6 border-t-2 border-t-accent/30">
                <h4 className="font-[family-name:var(--font-display)] text-xl font-bold text-cream mb-2">
                  {project.name}
                </h4>
                <p className="text-accent text-xs font-semibold mb-2">{project.type}</p>
                <p className="text-cream/40 text-sm">{project.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="glass-card rounded-sm p-8 lg:p-12">
          <h3 className="text-center text-accent text-sm tracking-[0.3em] uppercase mb-8">
            // قيادة ارتال
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                <span className="font-[family-name:var(--font-display)] text-2xl text-accent font-bold">ع.ط</span>
              </div>
              <h4 className="text-cream font-bold">م. عبد الحميد طه</h4>
              <span className="text-accent text-xs tracking-wider">Chairman</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                <span className="font-[family-name:var(--font-display)] text-2xl text-accent font-bold">م.ط</span>
              </div>
              <h4 className="text-cream font-bold">م. ماهر طه</h4>
              <span className="text-accent text-xs tracking-wider">CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
