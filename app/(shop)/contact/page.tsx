import Link from "next/link";

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-stone-50 py-16 md:py-24 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Header Section - Reveal & Fade Up */}
      <div className="max-w-3xl text-center mb-20">
        <h2 className="text-[#d8a84e] font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 animate-fade-in-up">
          Connect With Us
        </h2>
        <h1 className="text-4xl md:text-6xl font-semibold text-[#0b422c] leading-tight mb-8 animate-reveal">
          Get in Touch
        </h1>
        <div className="w-24 h-1 bg-[#d8a84e] mx-auto animate-shimmer rounded-full"></div>
        <p className="mt-8 text-lg text-gray-600 font-light max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          We would love to hear from you! Reach out to us for orders, custom designs, or any questions about our collection.
        </p>
      </div>

      {/* Contact Cards Grid - Staggered Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl w-full">
        
        {/* WhatsApp Card */}
        <a 
          href="https://wa.me/919392792193?text=Hello!%20I%20am%20interested%20in%20your%20jewellery." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white border border-stone-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 cursor-pointer text-center group animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#25D366]/20 rounded-full animate-ping scale-125"></div>
            <div className="relative bg-[#25D366] text-white h-24 w-24 rounded-full flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-500">
              📱
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0b422c] mb-3">WhatsApp</h3>
          <p className="text-sm text-gray-500 mb-8 font-light">Fastest way to place an order or ask a quick question.</p>
          <span className="text-[#25D366] font-bold text-xs uppercase tracking-[0.2em] border-b border-[#25D366]/20 pb-1 group-hover:border-[#25D366] transition-colors">
            Message Us →
          </span>
        </a>

        {/* Instagram Card */}
        <a 
          href="https://www.instagram.com/vijayadurga_fashion_jewellery" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white border border-stone-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 cursor-pointer text-center group animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-pink-500/10 rounded-full animate-pulse scale-150"></div>
            <div className="relative bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white h-24 w-24 rounded-full flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-500">
              📸
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0b422c] mb-3">Instagram</h3>
          <p className="text-sm text-gray-500 mb-8 font-light">Follow us for latest drops and customer styling reviews.</p>
          <span className="text-[#ee2a7b] font-bold text-xs uppercase tracking-[0.2em] border-b border-[#ee2a7b]/20 pb-1 group-hover:border-[#ee2a7b] transition-colors">
            Follow Us →
          </span>
        </a>

        {/* Email Card */}
        <a 
          href="mailto:srivijayadurgafashionjewellery@gmail.com" 
          className="bg-white border border-stone-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 cursor-pointer text-center group animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-[#0b422c]/5 rounded-full animate-float scale-110"></div>
            <div className="relative bg-[#0b422c] text-[#d8a84e] h-24 w-24 rounded-full flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-500">
              ✉️
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#0b422c] mb-3">Email</h3>
          <p className="text-sm text-gray-500 mb-8 font-light">Best for business inquiries or bulk order details.</p>
          <span className="text-[#0b422c] font-bold text-xs uppercase tracking-[0.2em] border-b border-[#0b422c]/20 pb-1 group-hover:border-[#0b422c] transition-colors">
            Send Email →
          </span>
        </a>

      </div>

      {/* Boutique Visit Info - Reveal at bottom */}
      <div className="mt-24 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <p className="text-[#d8a84e] font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Visit Our store</p>
        <div className="w-12 h-[1px] bg-stone-200 mx-auto mb-6"></div>
        <p className="text-[#0b422c] text-sm md:text-base font-light leading-relaxed">
          Panduranga Swamy Temple Rd, Chilakalapudi,<br />
          Machilipatnam, Andhra Pradesh 521002
        </p>
      </div>
    </main>
  );
}