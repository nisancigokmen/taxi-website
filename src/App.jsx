import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Clock, Car, Star, Navigation2, MessageCircle, X, ChevronRight } from 'lucide-react';
import ContactButtons from './components/ContactButtons';
import taxiPhoto from './assets/taksi.png'; 
import taksi1 from './assets/taksi1.jpg';
import taksi2 from './assets/taksi2.jpg';
import taksi3 from './assets/taksi3.jpg';
import taksi4 from './assets/taksi4.jpg';
import taksi5 from './assets/taksi5.jpg';
import taksi6 from './assets/taksi6.jpg';

const TaxiDivider = () => (
  <div className="w-full h-6 bg-black flex items-center overflow-hidden my-2 shadow-inner">
    {[...Array(60)].map((_, i) => (
      <div key={i} className={`min-w-[30px] h-full ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`} />
    ))}
  </div>
);

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

const taxiImages = [taksi1, taksi2, taksi3, taksi4,taksi5,taksi6];

  return (
    <div className="min-h-screen bg-white pb-24 overflow-x-hidden font-sans text-gray-900 selection:bg-yellow-400">
      
      {/* Navbar - Ultra Modern & Sade */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-[100] border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-xl shadow-lg animate-bounce">
              <Car size={28} className="text-black" />
            </div>
            <h1 className="text-xl font-black tracking-tighter leading-none uppercase">
              KIRKLARELİ <br/><span className="text-yellow-500 text-xs italic uppercase">Emniyet & Adliye Taksi</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-ping"></span>
            <span className="text-[10px] font-extrabold text-green-700 uppercase tracking-widest">7/24 Hizmet</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Arka Plan Zenginleştirilmiş */}
      <header className="relative pt-4 pb-24 px-6 text-center bg-white overflow-hidden">
        {/* Arka Plan Dekoratif Öğeleri (Boşluğu dolduran kısımlar) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute top-40 left-1/4 w-32 h-32 border-4 border-yellow-400/20 rounded-full animate-pulse z-0 hidden md:block"></div>
        <div className="absolute top-60 right-1/4 w-24 h-24 border-2 border-gray-200 rounded-lg rotate-12 animate-bounce z-0 hidden md:block"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Hareket Eden Gerçek Taksi Fotoğrafı (Arka Plansız) */}
          <div className="flex justify-center mb-12 relative">
            {/* Taksinin Altındaki Gölge Efekti */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-2xl rounded-full"></div>
            
            <div className="animate-[taxiIn_2s_ease-out_forwards] relative group">
              <img 
                src={taxiPhoto} 
                alt="Kırklareli Taksi"
                className="w-full max-w-[500px] drop-shadow-[0_35px_35px_rgba(250,204,21,0.4)] group-hover:scale-105 transition-transform duration-500 relative z-10"
              />
              {/* Hız Çizgileri Animasyonu */}
              <div className="absolute -left-10 top-1/2 flex flex-col gap-2">
                <div className="w-20 h-1 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
                <div className="w-16 h-1 bg-gray-200 rounded-full animate-pulse delay-75 opacity-50"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight mb-6 uppercase italic tracking-tighter">
            HIZLI, GÜVENLİ VE <br/> <span className="bg-yellow-400 px-4 py-1 text-black inline-block shadow-xl rotate-1 transition-transform hover:rotate-0">KONFORLU</span>
          </h2>
          
          <p className="text-gray-500 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-bold italic leading-relaxed">
            Kırklareli Merkez'de lüks araç filomuzla <br/> tam zamanında kapınızdayız.
          </p>
          
          {/* İkonlu ve Yan Yana Özellikler */}
          <div className="flex flex-row justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
               <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                  <CreditCard size={32} className="text-yellow-600 group-hover:text-black transition-colors" />
               </div>
               <span className="text-xs font-black uppercase tracking-widest italic text-gray-400 group-hover:text-black">Kart Geçerli</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
               <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100 shadow-sm group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                  <Clock size={32} className="text-yellow-600 group-hover:text-black transition-colors" />
               </div>
               <span className="text-xs font-black uppercase tracking-widest italic text-gray-400 group-hover:text-black">7/24 Aktif</span>
            </div>
          </div>
        </div>
      </header>

      <TaxiDivider />

      {/* Neden Biz? */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">
                NEDEN <span className="text-yellow-500">BİZ?</span>
            </h3>
            <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <ShieldCheck size={40} />, title: "VIP Konfor", desc: "Her zaman temiz, bakımlı ve geniş araç filosu." },
            { icon: <CreditCard size={40} />, title: "POS CİHAZI", desc: "Tüm kredi kartları ile araçta güvenle ödeme." },
            { icon: <Clock size={40} />, title: "TAM ZAMANINDA", desc: "Gecikme yok! Konumunuza en yakın araç anında yönlendirilir." }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-slate-50/50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-yellow-400 transition-all duration-500 text-center">
              <div className="text-yellow-500 mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform">{item.icon}</div>
              <h4 className="font-black text-2xl mb-4 uppercase italic tracking-tight">{item.title}</h4>
              <p className="text-gray-500 font-bold leading-relaxed italic text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <TaxiDivider />

      {/* Galeri */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-12 flex items-end justify-between">
            <h3 className="text-4xl font-black text-gray-900 uppercase italic tracking-widest">GALERİ</h3>
            <Navigation2 className="text-yellow-500 animate-spin-slow" size={40} />
        </div>
        <div className="flex overflow-x-auto gap-6 px-6 pb-12 no-scrollbar snap-x">
          {taxiImages.map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImg(img)}
              className="min-w-[280px] md:min-w-[400px] h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-slate-50 snap-center relative group shrink-0 cursor-zoom-in"
            >
              <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Galeri" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-yellow-400 p-3 rounded-full shadow-lg"><ChevronRight className="text-black" /></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-500 animate-in fade-in">
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-10 right-10 bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-all z-[2100] shadow-2xl hover:rotate-90"
          >
            <X size={36} strokeWidth={4} />
          </button>
          <img src={selectedImg} className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl border-4 border-yellow-400 object-contain animate-in zoom-in duration-300" alt="Büyütülmüş" />
          <div className="absolute inset-0 z-[-1]" onClick={() => setSelectedImg(null)}></div>
        </div>
      )}

      <TaxiDivider />

      {/* Modern İletişim Alanı */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center gap-1 mb-10">
          {[1,2,3,4,5].map(s => <Star key={s} size={32} className="fill-yellow-400 text-yellow-400" />)}
        </div>
        <h2 className="text-3xl md:text-5xl font-black italic text-gray-900 mb-12 leading-tight uppercase tracking-tighter">
          "Konumunuzu Paylaşın, <br/> <span className="text-yellow-500 underline decoration-black underline-offset-8">Anında</span> Kapınızda Olalım!"
        </h2>
        <a href="https://wa.me/905358446500" className="bg-[#25D366] text-white px-12 py-7 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] hover:scale-105 transition-all animate-pulse active:scale-95 uppercase tracking-widest">
          <MessageCircle size={36} /> WHATSAPP KONUM AT
        </a>
      </section>

      <TaxiDivider />

      <footer className="py-16 text-center bg-white text-gray-900 px-6 border-t border-gray-100">
        <h5 className="font-black text-2xl mb-2 italic tracking-tighter uppercase"> © KIRKLARELİ EMNİYET & ADLİYE TAKSİ</h5>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Profesyonel Yolculuk Deneyimi</p>
        <div className="mt-8 flex justify-center gap-1 opacity-20">
            {[...Array(10)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-black' : 'bg-yellow-400'}`}></div>
            ))}
        </div>
      </footer>

      <ContactButtons />

      <style>{`
        @keyframes taxiIn { 
          0% { transform: translateX(-150%) scale(0.8) rotate(-5deg); opacity: 0; } 
          100% { transform: translateX(0) scale(1) rotate(0deg); opacity: 1; } 
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes spin-slow { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </div>
  );
}

export default App;