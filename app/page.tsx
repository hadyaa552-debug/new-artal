"use client"
import React, { useState, useEffect } from "react"

const PHONE = "+201002717977"
const WA = "https://wa.me/201002717977"
const EMAIL = "apkzoz85@gmail.com"
const CC = "Awad7.mahmoud@gmail.com"
const GOLD = "#C9A84C"
const DARK = "#0D0B09"

const UNITS = [
  { type: "1 غرفة",    price: "2,275,000", icon: "🛏" },
  { type: "2 غرفة",    price: "3,410,000", icon: "🛏🛏" },
  { type: "3 غرف",     price: "5,120,000", icon: "🛏🛏🛏" },
  { type: "4 غرف",     price: "7,200,000", icon: "🏠" },
  { type: "دوبلكس",    price: "7,400,000", icon: "🏡" },
  { type: "تاون هاوس", price: "15,750,000", icon: "🏘" },
]

/* ─── Lead Form ─────────────────────────────────────── */
function LeadForm({ subject, dark = false }: { subject: string; dark?: boolean }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [unit, setUnit] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, phone, unit, _subject: subject, _captcha: "false", _template: "table", _cc: CC }),
      })
      setSent(true)
    } catch {
      setLoading(false)
    }
  }

  if (sent) return (
    <div className="text-center py-8">
      <div className="text-4xl mb-3">✅</div>
      <p className="font-black text-lg" style={{ color: dark ? "white" : DARK }}>تم التسجيل!</p>
      <p className="text-sm mt-1" style={{ color: dark ? "rgba(255,255,255,0.5)" : "#888" }}>سيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
    </div>
  )

  const borderColor = dark ? "rgba(255,255,255,0.2)" : "#ddd"
  const textColor = dark ? "white" : "#111"
  const placeholderStyle = dark ? "rgba(255,255,255,0.35)" : "#aaa"

  return (
    <form onSubmit={submit}>
      <style>{`
        .plato-input::placeholder { color: ${placeholderStyle}; }
        .plato-input:focus { border-bottom-color: ${GOLD} !important; }
        .plato-select option { color: #111; background: white; }
      `}</style>
      <input
        className="plato-input w-full bg-transparent outline-none py-3 text-sm mb-3"
        style={{ borderBottom: `1px solid ${borderColor}`, color: textColor }}
        placeholder="الاسم الكريم *" value={name} onChange={e => setName(e.target.value)} required
      />
      <input
        className="plato-input w-full bg-transparent outline-none py-3 text-sm mb-3"
        style={{ borderBottom: `1px solid ${borderColor}`, color: textColor }}
        placeholder="رقم الهاتف *" type="tel" dir="ltr" value={phone} onChange={e => setPhone(e.target.value)} required
      />
      <select
        className="plato-select plato-input w-full bg-transparent outline-none py-3 text-sm mb-5 cursor-pointer"
        style={{ borderBottom: `1px solid ${borderColor}`, color: unit ? textColor : placeholderStyle }}
        value={unit} onChange={e => setUnit(e.target.value)}
      >
        <option value="">نوع الوحدة</option>
        {UNITS.map(u => <option key={u.type} value={u.type}>{u.type} — من {u.price} ج</option>)}
      </select>
      <button
        type="submit" disabled={loading}
        className="w-full py-4 font-black text-sm tracking-widest transition-opacity hover:opacity-85"
        style={{ background: dark ? "white" : DARK, color: dark ? DARK : "white" }}
      >
        {loading ? "جارٍ الإرسال..." : "سجّل اهتمامك الآن"}
      </button>
    </form>
  )
}

/* ─── Page ──────────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeUnit, setActiveUnit] = useState(0)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap');
        * { font-family: 'Cairo', sans-serif; box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: white; color: #111; direction: rtl; }
        .wa-btn { background: #25D366; }
        .wa-btn:hover { opacity: 0.85; }
        @keyframes pulse-dot { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        .pulse { animation: pulse-dot 1.5s infinite; }
      `}</style>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-center gap-3 px-4 py-2.5 text-xs font-bold text-white"
        style={{ background: DARK }}>
        <span className="pulse" style={{ color: GOLD }}>●</span>
        <span>باب الحجز EOI مفتوح الآن — PLATÓ العاصمة الإدارية R8</span>
        <span className="pulse" style={{ color: GOLD }}>●</span>
        <button onClick={() => scroll("contact")}
          className="px-3 py-0.5 text-xs font-black transition-opacity hover:opacity-90 mr-2"
          style={{ background: GOLD, color: DARK }}>
          احجز الآن
        </button>
      </div>

      {/* ── NAV ── */}
      <nav className="fixed z-40 inset-x-0 flex items-center justify-between px-6 lg:px-12 h-16 transition-all duration-300"
        style={{ top: 32, background: scrolled ? "rgba(255,255,255,0.97)" : "transparent", borderBottom: scrolled ? "1px solid #eee" : "none", boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none" }}>
        <img src="https://www.artalegypt.com/wp-content/uploads/2024/12/ARTAL-logo-08.png" alt="Artal"
          className="h-8 object-contain transition-all"
          style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }} />
        <div className="hidden lg:flex gap-8">
          {[["المشروع", "about"], ["الوحدات", "units"], ["تواصل", "contact"]].map(([l, id]) => (
            <button key={id} onClick={() => scroll(id)}
              className="text-xs font-bold tracking-wide transition-colors"
              style={{ color: scrolled ? "#666" : "rgba(255,255,255,0.6)" }}>
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="hidden sm:block text-sm font-black transition-colors"
            style={{ color: scrolled ? "#111" : "white" }} dir="ltr">01002717977</a>
          <button onClick={() => scroll("contact")}
            className="px-5 py-2.5 text-xs font-black tracking-widest text-white transition-opacity hover:opacity-85"
            style={{ background: DARK }}>
            سجّل EOI
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: "100vh", paddingTop: 32 }}>
        <div className="absolute inset-0">
          <img src="/images/plato-hero.jpg" alt="PLATÓ" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,11,9,0.97) 0%, rgba(13,11,9,0.6) 50%, rgba(13,11,9,0.2) 100%)" }} />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span className="font-black select-none" style={{ fontSize: "min(14rem, 25vw)", letterSpacing: "0.3em", color: "rgba(255,255,255,0.04)", whiteSpace: "nowrap" }}>PLATÓ</span>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-28" style={{ zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6" style={{ flexDirection: "row-reverse", justifyContent: "flex-end" }}>
                <div className="w-8 h-px" style={{ background: GOLD }} />
                <span className="text-xs font-bold tracking-widest" style={{ color: GOLD }}>Artal Developments • منذ ١٩٩٧</span>
              </div>
              {/* EOI Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-black px-4 py-2 mb-6 tracking-widest"
                style={{ border: `1px solid ${GOLD}`, color: GOLD }}>
                <span className="pulse">●</span> EOI مفتوح الآن — ٤ مايو ٢٠٢٦
              </div>
              {/* Title */}
              <h1 className="font-black text-white leading-none mb-3"
                style={{ fontSize: "clamp(4rem,10vw,8rem)", letterSpacing: "-0.02em" }}>
                PLATÓ
              </h1>
              <p className="text-sm tracking-widest mb-6 uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                العاصمة الإدارية الجديدة — R8
              </p>
              <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.55)" }}>
                مشروع سكني استثنائي من Artal Developments في قلب منطقة R8 بالعاصمة الإدارية. وحدات متنوعة بتشطيبات راقية، ٥٪ مقدم وتقسيط حتى ١٢ سنة.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-0 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
                {[{ v: "R8", l: "المنطقة" }, { v: "5%", l: "أدنى مقدم" }, { v: "12 سنة", l: "أقصى تقسيط" }].map((s, i) => (
                  <div key={i} className={i < 2 ? "border-l pl-6 ml-6" : ""} style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <div className="text-2xl font-black" style={{ color: GOLD }}>{s.v}</div>
                    <div className="text-xs mt-1 tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Form */}
            <div className="p-8" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <h2 className="text-white text-lg font-black mb-1">سجّل اهتمامك — EOI</h2>
              <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>سيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
              <LeadForm subject="EOI Lead – PLATÓ Artal" dark />
              <div className="flex gap-3 mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بتسجيل EOI لمشروع PLATÓ في العاصمة الإدارية R8")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-3 text-xs font-black text-center text-white transition-opacity hover:opacity-85 wa-btn">
                  💬 واتساب
                </a>
                <a href={`tel:${PHONE}`}
                  className="flex-1 py-3 text-xs font-black text-center text-white transition-opacity hover:opacity-85"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                  📞 اتصل
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 lg:py-28" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: GOLD }}>عن المشروع</p>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
              PLATÓ<br /><span className="font-light" style={{ color: "#888" }}>العاصمة الإدارية</span>
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>
              PLATÓ هو أحدث مشاريع Artal Developments في العاصمة الإدارية الجديدة، منطقة R8. يجمع المشروع بين الموقع الاستراتيجي المتميز والتصميم المعماري العصري والوحدات متنوعة الأحجام. باب الحجز EOI فُتح رسمياً يوم ٤ مايو ٢٠٢٦.
            </p>
            <div className="grid grid-cols-2 gap-px" style={{ background: "#eee" }}>
              {[{ v: "R8", l: "المنطقة السكنية" }, { v: "١٩٩٧", l: "تأسيس Artal" }, { v: "٥٪", l: "أدنى مقدم" }, { v: "١٢ سنة", l: "أقصى تقسيط" }].map((s, i) => (
                <div key={i} className="p-6" style={{ background: "white" }}>
                  <div className="text-2xl font-black" style={{ color: GOLD }}>{s.v}</div>
                  <div className="text-xs mt-1" style={{ color: "#888" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src="/images/plato-1.jpg" alt="PLATÓ" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img src="/images/plato-2.jpg" alt="PLATÓ" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <img src="/images/plato-3.jpg" alt="PLATÓ" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT STRIP ── */}
      <section className="py-12" style={{ background: GOLD }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-0 text-center">
          {[{ v: "٥٪", l: "أدنى مقدم" }, { v: "١٢ سنة", l: "أقصى تقسيط" }, { v: "EOI مفتوح", l: "٤ مايو ٢٠٢٦" }, { v: "R8", l: "العاصمة الإدارية" }].map((s, i) => (
            <div key={i} className="py-2 px-4" style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
              <div className="text-2xl font-black text-white">{s.v}</div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── UNITS ── */}
      <section id="units" className="py-20 lg:py-28" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>الوحدات السكنية</p>
          <h2 className="text-4xl font-black text-white mb-3">اختر وحدتك</h2>
          <p className="text-sm mb-12" style={{ color: "rgba(255,255,255,0.35)" }}>جميع الوحدات بتشطيبات راقية • ٥٪ مقدم • تقسيط حتى ١٢ سنة</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {UNITS.map((u, i) => (
              <div key={i} onClick={() => setActiveUnit(i)} className="p-8 cursor-pointer transition-all"
                style={{
                  background: activeUnit === i ? "rgba(201,168,76,0.12)" : DARK,
                  borderRight: activeUnit === i ? `2px solid ${GOLD}` : "2px solid transparent",
                  borderBottom: "1px solid rgba(255,255,255,0.05)"
                }}>
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="text-xl font-black text-white mb-2">{u.type}</h3>
                <p className="text-xs tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>PLATÓ — العاصمة الإدارية R8</p>
                <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>يبدأ السعر من</p>
                  <p className="text-2xl font-black" style={{ color: GOLD }}>{u.price}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>جنيه مصري</p>
                </div>
                {activeUnit === i && (
                  <a href={`${WA}?text=${encodeURIComponent(`مرحباً، أنا مهتم بوحدة ${u.type} في PLATÓ العاصمة الإدارية R8`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center py-2.5 text-xs font-black text-white hover:opacity-85 transition-opacity"
                    style={{ background: GOLD, color: DARK }}>
                    استفسر عن هذه الوحدة
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>خطة السداد</p>
              <h3 className="text-2xl font-black text-white mb-6">مرونة تناسب الجميع</h3>
              {[{ k: "أدنى مقدم", v: "٥٪ فقط" }, { k: "أقصى تقسيط", v: "١٢ سنة" }, { k: "حالة EOI", v: "مفتوح الآن" }, { k: "الموقع", v: "العاصمة الإدارية R8" }].map((d, i) => (
                <div key={i} className="flex justify-between py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-sm font-bold text-white">{d.v}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{d.k}</span>
                </div>
              ))}
            </div>
            <LeadForm subject="Units – PLATÓ Artal" dark />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="grid lg:grid-cols-2" style={{ minHeight: "65vh" }}>
        <div className="py-20 px-8 lg:px-14 flex flex-col justify-center" style={{ background: DARK }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: GOLD }}>سجّل EOI الآن</p>
          <h2 className="text-4xl font-black text-white leading-tight mb-4">
            باب الحجز<br /><span style={{ color: GOLD }}>مفتوح الآن</span>
          </h2>
          <a href={`tel:${PHONE}`} className="text-2xl font-black text-white block mb-8 transition-opacity hover:opacity-80" dir="ltr">
            01002717977
          </a>
          <div>
            {UNITS.map((u, i) => (
              <div key={i} className="flex justify-between py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="font-black text-sm text-white">{u.type}</span>
                <span className="text-xs" style={{ color: GOLD }}>من {u.price} ج</span>
              </div>
            ))}
          </div>
        </div>
        <div className="py-20 px-8 lg:px-14 flex flex-col justify-center" style={{ background: "white" }}>
          <h3 className="text-2xl font-black mb-2">سجّل اهتمامك</h3>
          <p className="text-sm mb-8" style={{ color: "#888" }}>سيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
          <LeadForm subject="Contact – PLATÓ Artal" />
          <div className="flex gap-3 mt-5">
            <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع PLATÓ في العاصمة الإدارية R8")}`}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 py-3 text-xs font-black text-center text-white transition-opacity hover:opacity-85 wa-btn">
              💬 واتساب
            </a>
            <a href={`tel:${PHONE}`}
              className="flex-1 py-3 text-xs font-black text-center transition-colors hover:text-white"
              style={{ border: `1px solid ${DARK}`, color: DARK }}>
              📞 اتصل الآن
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-6 pb-20 lg:pb-6 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-3"
        style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <img src="https://www.artalegypt.com/wp-content/uploads/2024/12/ARTAL-logo-08.png" alt="Artal"
          className="h-7 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          © ٢٠٢٦ Artal Developments | Grandeur Spaces – وكيل معتمد
        </span>
      </footer>

      {/* ── FLOAT BUTTONS (desktop) ── */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:flex flex-col gap-3">
        <a href={`tel:${PHONE}`}
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110"
          style={{ background: GOLD }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع PLATÓ")}`}
          target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 wa-btn">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* ── MOBILE BAR ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 lg:hidden shadow-lg">
        <a href={`tel:${PHONE}`}
          className="flex items-center justify-center py-4 text-xs font-black text-white"
          style={{ background: GOLD }}>
          📞 اتصل الآن
        </a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروع PLATÓ")}`}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center py-4 text-xs font-black text-white wa-btn">
          💬 واتساب
        </a>
      </div>
    </>
  )
}
