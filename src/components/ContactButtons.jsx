import { Phone, MessageCircle } from 'lucide-react';

export default function ContactButtons() {
  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-3 px-4 z-[999]">
      {/* WhatsApp Butonu - Nabız Efektli */}
      <a 
        href="https://wa.me/905358446500" 
        target="_blank"
        className="flex-1 max-w-[180px] bg-[#25D366] text-white flex items-center justify-center gap-2 py-4 rounded-2xl font-black shadow-[0_10px_20px_rgba(37,211,102,0.4)] animate-pulse hover:scale-105 transition-transform border-2 border-white/20 uppercase text-xs sm:text-sm"
      >
        <MessageCircle size={20} /> WHATSAPP
      </a>
      
      {/* Arama Butonu - Sallanma Efektli */}
      <a 
        href="tel:+905358446500" 
        className="flex-1 max-w-[180px] bg-yellow-400 text-black flex items-center justify-center gap-2 py-4 rounded-2xl font-black shadow-[0_10px_20px_rgba(250,204,21,0.4)] animate-bounce hover:scale-105 transition-transform border-2 border-black/10 uppercase text-xs sm:text-sm"
      >
        <Phone size={20} /> Hemen Ara
      </a>
    </div>
  );
}