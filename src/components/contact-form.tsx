"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { siteConfig } from "@/../configs/site";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    unitType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", unitType: "", message: "" });
      } else {
        setError("حدث خطأ، يرجى المحاولة مرة أخرى");
      }
    } catch {
      setError("حدث خطأ في الاتصال");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.3em] uppercase">
            // تواصل معنا
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            <span className="gold-gradient">سجل اهتمامك الآن</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="max-w-2xl mx-auto text-cream/50 text-lg">
            اترك بياناتك وسيتواصل معك أحد مستشارينا العقاريين في أقرب وقت
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-sm p-6 lg:p-8">
              {success ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Send className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-2">
                    تم إرسال طلبك بنجاح!
                  </h3>
                  <p className="text-cream/50 mb-6">
                    سيتواصل معك أحد مستشارينا في أقرب وقت
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-accent text-sm underline hover:no-underline"
                  >
                    إرسال استفسار آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-cream/60 text-sm mb-2">
                        الاسم بالكامل *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-cream/20 focus:border-accent py-3 text-cream placeholder-cream/20 outline-none transition-colors duration-300"
                        placeholder="أدخل اسمك"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-cream/60 text-sm mb-2">
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-cream/20 focus:border-accent py-3 text-cream placeholder-cream/20 outline-none transition-colors duration-300 text-left"
                        placeholder="01XXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-cream/60 text-sm mb-2">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        dir="ltr"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-cream/20 focus:border-accent py-3 text-cream placeholder-cream/20 outline-none transition-colors duration-300 text-left"
                        placeholder="email@example.com"
                      />
                    </div>

                    {/* Unit Type */}
                    <div>
                      <label className="block text-cream/60 text-sm mb-2">
                        نوع الوحدة المطلوبة
                      </label>
                      <select
                        value={formData.unitType}
                        onChange={(e) =>
                          setFormData({ ...formData, unitType: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-cream/20 focus:border-accent py-3 text-cream outline-none transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-primary">اختر نوع الوحدة</option>
                        {siteConfig.units.map((u) => (
                          <option key={u.type} value={u.type} className="bg-primary">
                            {u.type} — يبدأ من {u.price} جنيه
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-cream/60 text-sm mb-2">
                      ملاحظات إضافية
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-cream/20 focus:border-accent py-3 text-cream placeholder-cream/20 outline-none transition-colors duration-300 resize-none"
                      placeholder="أي تفاصيل إضافية..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-accent text-primary font-bold text-sm tracking-wider uppercase hover:bg-accent-light transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        إرسال الطلب
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="tel:01116663367"
              className="glass-card hover-gold rounded-sm p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-cream/40 text-xs">اتصل بنا</span>
                <div className="text-cream font-bold" dir="ltr">01116663367</div>
              </div>
            </a>

            <a
              href="tel:16986"
              className="glass-card hover-gold rounded-sm p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-cream/40 text-xs">الخط الساخن - ارتال</span>
                <div className="text-cream font-bold" dir="ltr">16986</div>
              </div>
            </a>

            <a
              href={`https://wa.me/201116663367?text=${encodeURIComponent("مهتم بمشروع PLATÓ - العاصمة الإدارية")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-gold rounded-sm p-5 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 rounded-sm shrink-0">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <span className="text-cream/40 text-xs">واتساب</span>
                <div className="text-green-400 font-bold text-sm">
                  تواصل عبر الواتساب
                </div>
              </div>
            </a>

            <div className="glass-card rounded-sm p-5 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-cream/40 text-xs">البريد الإلكتروني</span>
                <div className="text-cream font-bold text-sm" dir="ltr">
                  info@artalegypt.com
                </div>
              </div>
            </div>

            <div className="glass-card rounded-sm p-5 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-cream/40 text-xs">المقر الرئيسي</span>
                <div className="text-cream font-bold text-sm">
                  شارع التسعين، التجمع الخامس
                </div>
                <div className="text-cream/40 text-xs">
                  فندق توليب بوابة 4، القاهرة الجديدة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
