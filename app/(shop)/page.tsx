import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      
      {/* HERO SECTION - Responsive Text & Padding */}
      <section className="relative w-full text-center px-4 py-16 md:py-36 flex flex-col items-center overflow-hidden">
        {/* Background Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-banner.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b422c]/85 via-stone-950/40 to-[#0b422c]/90"></div>
        </div>

        {/* Pulsing Badge */}
        <div className="relative z-10 mb-6">
          <div className="absolute inset-0 bg-[#d8a84e]/40 rounded-full animate-ping"></div>
          <div className="relative bg-[#d8a84e] text-[#0b422c] font-bold px-4 py-1.5 rounded-full text-[9px] md:text-xs shadow-lg tracking-[0.2em] uppercase">
            New Arrivals 2026
          </div>
        </div>
        
        {/* Responsive Heading */}
        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-7xl font-semibold text-white leading-tight mb-4 drop-shadow-2xl animate-reveal px-2">
          Wear the Grace of <br />
          <span className="text-[#d8a84e]">Vijaya Durga</span>
        </h2>
        
        <p className="relative z-10 text-emerald-50 mt-2 text-sm md:text-xl max-w-sm md:max-w-xl font-light italic animate-fade-in-up px-4">
          "Handpicked elegance for the modern woman"
        </p>
      </section>

      {/* MARQUEE BANNER - Mobile width fix */}
      <div className="bg-[#d8a84e] text-[#0b422c] font-bold text-[9px] md:text-xs py-3 w-full overflow-hidden whitespace-nowrap border-y border-[#c49642]">
        <div className="flex w-max animate-marquee uppercase tracking-[0.2em] md:tracking-[0.3em]">
          <span className="px-4">ALL SIZES AVAILABLE ✦ EXCLUSIVE DESIGNS ✦ WORLDWIDE SHIPPING ✦ NEW ARRIVALS WEEKLY ✦</span>
          <span className="px-4">ALL SIZES AVAILABLE ✦ EXCLUSIVE DESIGNS ✦ WORLDWIDE SHIPPING ✦ NEW ARRIVALS WEEKLY ✦</span>
        </div>
      </div>
      
      {/* CATEGORY SECTION - 2 columns on mobile, 6 on desktop */}
      <section className="py-12 md:py-28 px-6 w-full max-w-7xl text-center">
        <h3 className="text-2xl md:text-4xl font-light text-gray-400 mb-2">
          Shop by <span className="text-[#0b422c] font-medium">Category</span>
        </h3>
        <div className="w-12 md:w-20 h-1 bg-[#d8a84e] mx-auto mb-10 md:mb-16"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-8">
          {[
            { name: "Earrings", slug: "earrings", icon: "👂", bg: "bg-green-50" },
            { name: "Necklaces", slug: "necklaces", icon: "📿", bg: "bg-orange-50" },
            { name: "Bangles", slug: "bangles", icon: "🫳🏻", bg: "bg-emerald-50" },
            { name: "Anklets", slug: "anklets", icon: "🦶", bg: "bg-green-50" },
            { name: "Full Sets", slug: "sets", icon: "💃", bg: "bg-orange-50" },
            { name: "More", slug: "more", icon: "✨", bg: "bg-yellow-50" },
          ].map((cat) => (
            <Link 
              href={`/shop/category/${cat.slug}`} 
              key={cat.name} 
              className={`${cat.bg} border border-stone-100 rounded-2xl md:rounded-[2.5rem] p-5 md:p-8 flex flex-col items-center justify-center gap-2 md:gap-4 shadow-sm group hover:shadow-xl transition-all duration-500`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#d8a84e]/20 rounded-full animate-pulse group-hover:animate-ping"></div>
                <span className="relative text-3xl md:text-6xl animate-float block group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
              </div>
              <span className="text-[9px] md:text-[11px] font-bold text-[#0b422c] uppercase tracking-widest">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PROMO BANNER - Padding adjustment */}
      <section className="px-4 md:px-6 py-8 w-full max-w-6xl">
        <div className="bg-[#0b422c] rounded-3xl md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center text-white shadow-xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-[#d8a84e]/10 rounded-full blur-[80px] animate-pulse"></div>
          
          <div className="z-10 text-center md:text-left">
            <h4 className="text-2xl md:text-5xl font-semibold text-[#d8a84e] mb-2">Festive Special</h4>
            <p className="text-emerald-100/70 font-light text-sm md:text-lg tracking-wide italic px-4 md:px-0">Up to 30% off on full sets & bridal combos</p>
          </div>
          
          <button className="relative mt-8 md:mt-0 bg-[#d8a84e] text-[#0b422c] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-xl active:scale-95 transition-all">
            Grab Deal
          </button>
        </div>
      </section>

      {/* TESTIMONIALS - Stack on mobile */}
      <section className="py-16 md:py-24 px-6 w-full max-w-5xl text-center">
        <h3 className="text-xl md:text-2xl font-light text-gray-400 mb-10 uppercase tracking-widest">Customer <span className="text-[#0b422c] font-medium">Love</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {[
            { name: "Priya S.", loc: "Chennai", text: "Beautiful quality and super fast delivery!" },
            { name: "Sneha R.", loc: "Hyderabad", text: "Amazing collection at very affordable prices." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-sm border border-stone-100 group">
               <div className="text-[#d8a84e] mb-4 text-sm md:text-lg tracking-widest group-hover:scale-105 transition-transform origin-left">★★★★★</div>
               <p className="text-gray-600 italic font-light text-sm md:text-lg mb-6">"{t.text}"</p>
               <p className="text-[10px] font-bold text-[#0b422c] uppercase tracking-widest">— {t.name}, {t.loc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}