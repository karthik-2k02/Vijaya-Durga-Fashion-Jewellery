import Link from "next/link";

export default function AboutPage() {
  // Direct Google Maps link for the Machilipatnam boutique
  const googleMapsUrl = "https://maps.app.goo.gl/Phtd2oJ4uyBAkvvy5";

  return (
    <main className="w-full min-h-screen bg-white overflow-hidden">
      
      {/* SECTION 1: HERO HEADER - Animated */}
      <section className="bg-stone-50 py-16 md:py-24 px-6 border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#d8a84e] font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 animate-fade-in-up">
            Established 2014
          </h2>
          <h1 className="text-3xl md:text-5xl font-semibold text-[#0b422c] leading-tight mb-6 animate-reveal">
            A Legacy of Elegance and <br /> Exquisite Craftsmanship
          </h1>
          <div className="w-20 h-1 bg-[#d8a84e] mx-auto mb-8 animate-soft-pulse rounded-full"></div>
        </div>
      </section>

      {/* SECTION 2: THE STORY & IMAGE - Animated */}
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Content - Fades In Up */}
        <div className="space-y-6 animate-fade-in-up">
          <h3 className="text-2xl font-medium text-gray-800">Our Journey</h3>
          <p className="text-gray-600 leading-relaxed font-light">
            Since <span className="font-semibold text-[#0b422c]">2014</span>, Vijaya Durga Fashion Jewellery has been a sanctuary for those who value the fine art of ornamentation. For over a decade, we have remained committed to providing premium, skin-friendly jewellery that celebrates every occasion.
          </p>
          <p className="text-gray-600 leading-relaxed font-light">
            We believe that jewellery is an extension of one’s soul. From the intricate patterns of our temple sets to our contemporary collections, every piece is handpicked to ensure it meets our rigorous standards of quality and aesthetics.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="group">
              <p className="text-3xl font-semibold text-[#0b422c] transition-transform group-hover:scale-105">12+</p>
              <p className="text-xs text-[#d8a84e] uppercase tracking-wider mt-1">Years of Excellence</p>
            </div>
            <div className="group">
              <p className="text-3xl font-semibold text-[#0b422c] transition-transform group-hover:scale-105">Global</p>
              <p className="text-xs text-[#d8a84e] uppercase tracking-wider mt-1">Shipping Reach</p>
            </div>
          </div>
        </div>

        {/* Right: The Brand Image - Floating Animation */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl animate-float">
          <img 
            src="/ShopImage.jpg" 
            alt="Vijaya Durga Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none animate-soft-pulse"></div>
        </div>

      </section>

      {/* SECTION 3: LOCATION SECTION WITH ANIMATED CIRCULAR RADAR - Animated */}
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden flex flex-col md:flex-row items-center">
          
          {/* Content Side - Fades In */}
          <div className="p-10 md:w-1/2 flex flex-col justify-center animate-fade-in-up">
            <h3 className="text-[#d8a84e] font-medium uppercase text-xs tracking-widest mb-3">Find Your Way</h3>
            <h4 className="text-2xl font-semibold text-[#0b422c] mb-4">Visit Our Store</h4>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-8">
              Panduranga Swamy Temple Rd, <br />
              Chilakalapudi, Machilipatnam, <br />
              Andhra Pradesh 521002
            </p>
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0b422c] font-semibold text-sm hover:text-[#d8a84e] transition group"
            >
              <span>Get Directions</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Animated Circular Image Side - Keep your existing Radar/Float logic */}
          <div className="md:w-1/2 p-10 flex justify-center items-center">
            <div className="relative group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              
              {/* The Pulsing Radar Rings */}
              <div className="absolute inset-0 rounded-full bg-[#d8a84e]/20 animate-ping scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-[#0b422c]/10 animate-pulse scale-150"></div>

              {/* The Main Circular Container - Kept your existing code */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10 transition-transform duration-500 group-hover:scale-105">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('https://i.pinimg.com/1200x/00/3f/b5/003fb56f9f27073d5da39633326e2ee3.jpg')`,
                  }}
                >
                  {/* Branding Overlay */}
                  <div className="absolute inset-0 bg-[#0b422c]/20 mix-blend-multiply"></div>
                </div>

              </div>

              {/* Floating Badge - Kept your existing code */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0b422c] text-[#d8a84e] text-[25px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full z-20 whitespace-nowrap shadow-xl border border-[#d8a84e]/30">
                📍
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: GLOBAL REACH SECTION */}
      <section className="bg-[#0b422c] py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-medium text-[#d8a84e] mb-6 animate-reveal">Trusted Across Borders</h3>
          <p className="text-emerald-100/80 leading-loose font-light italic text-lg">
            "Serving our loyal patrons throughout India and reaching hearts across America and Europe. 
            We take pride in bringing the grace of Indian craftsmanship to a global stage."
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-10 opacity-60">
            <span className="text-xs tracking-[.4em] uppercase border-b border-[#d8a84e] pb-2">India</span>
            <span className="text-xs tracking-[.4em] uppercase border-b border-[#d8a84e] pb-2">America</span>
            <span className="text-xs tracking-[.4em] uppercase border-b border-[#d8a84e] pb-2">Europe</span>
          </div>
        </div>
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl animate-soft-pulse"></div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="py-24 px-6 text-center animate-fade-in-up">
        <div className="max-w-xl mx-auto p-12">
          <h4 className="text-2xl text-gray-800 mb-8 font-medium">Experience the grace today.</h4>
          <Link 
            href="/" 
            className="inline-block bg-[#0b422c] text-[#d8a84e] px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition hover:bg-emerald-900 shadow-xl transform hover:-translate-y-1 active:scale-95"
          >
            Explore Collection
          </Link>
        </div>
      </section>

    </main>
  );
}