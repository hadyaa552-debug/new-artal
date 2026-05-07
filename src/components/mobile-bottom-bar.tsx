"use client";

import { Phone, MessageCircle, Send } from "lucide-react";

export default function MobileBottomBar() {
  const whatsappMsg = encodeURIComponent("مهتم بمشروع PLATÓ - ارتال - العاصمة الإدارية R8");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <div className="bg-primary/95 backdrop-blur-xl border-t border-accent/20 px-2 py-2 flex items-center gap-2">
        <a
          href="tel:01002717977"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent text-primary font-bold text-xs rounded-sm"
        >
          <Phone className="w-4 h-4" />
          اتصل الآن
        </a>
        <a
          href={`https://wa.me/201002717977?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-600 text-white font-bold text-xs rounded-sm"
        >
          <MessageCircle className="w-4 h-4" />
          واتساب
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-accent/40 text-accent font-bold text-xs rounded-sm"
        >
          <Send className="w-4 h-4" />
          سجل الآن
        </a>
      </div>
    </div>
  );
}
