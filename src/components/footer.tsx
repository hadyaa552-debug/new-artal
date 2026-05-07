export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent">
                PLATÓ
              </span>
              <span className="block text-cream/30 text-xs mt-1">
                by Artal Developments
              </span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              أحدث مشروعات ارتال للتطوير العقاري في الحي السكني الثامن R8
              بالعاصمة الإدارية الجديدة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent text-sm font-bold mb-4 tracking-wider">
              روابط سريعة
            </h4>
            <nav className="space-y-2">
              {[
                { label: "عن المشروع", href: "#about" },
                { label: "الوحدات والأسعار", href: "#units" },
                { label: "أنظمة السداد", href: "#payment" },
                { label: "الموقع", href: "#location" },
                { label: "تواصل معنا", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream/40 text-sm hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-accent text-sm font-bold mb-4 tracking-wider">
              تابع ارتال
            </h4>
            <div className="flex items-center gap-3">
              {[
                { label: "Facebook", href: "https://www.facebook.com/" },
                { label: "Instagram", href: "https://www.instagram.com/" },
                { label: "YouTube", href: "https://www.youtube.com/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-accent/20 text-accent/60 hover:bg-accent/10 hover:text-accent transition-all duration-300 text-xs"
                >
                  {s.label.charAt(0)}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent/60 text-sm hover:text-accent transition-colors"
              >
                artalegypt
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-accent/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/20 text-xs">
            © 2026 Artal Developments. جميع الحقوق محفوظة
          </p>
          <p className="text-cream/20 text-xs">
            تسويق بواسطة{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/40 hover:text-accent transition-colors"
            >
              Grandeur Spaces
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
