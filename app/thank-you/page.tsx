export default function ThankYou() {
  return (
    <main dir="rtl" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", fontFamily: "Cairo, sans-serif" }}>
      <div style={{ textAlign: "center", maxWidth: 400 }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: "0.5rem" }}>تم التسجيل!</h1>
        <p style={{ color: "#666", marginBottom: "2rem" }}>سيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
        <a href="/" style={{ display: "inline-block", background: "#C9A84C", color: "#0D0B09", padding: "0.75rem 2rem", fontWeight: 900, textDecoration: "none" }}>
          العودة للرئيسية
        </a>
      </div>
    </main>
  )
}
