import React from "react";
import { ArrowDown, ChevronRight, ShieldCheck, Tag, Sparkles, Store } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-white px-4 pt-16 pb-12 sm:px-6 lg:px-8 border-b border-zinc-200"
    >
      {/* Crisp Light Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f4_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f4_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70"></div>

      {/* Modern Ambient Flare */}
      <div className="absolute top-1/4 left-1/3 -z-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-[120px] animate-pulse"></div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-7 lg:col-span-7 z-10">
            
            {/* Tagline Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center space-x-1.5 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/10 px-3 py-1 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#15803d] uppercase"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>NAGPUR LAUNCH V1.7</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-zinc-900 leading-none"
                id="hero-main-title"
              >
                ESCAPE THE <br />
                <span className="relative inline-block text-zinc-800">
                  STANDARD
                  <span className="absolute -bottom-1 left-0 h-1 w-full bg-zinc-900"></span>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="max-w-xl font-sans text-zinc-500 text-xs sm:text-sm leading-relaxed"
              >
                Zero crazy markups. Real native checkout. Explore varsity striped apparel, double-knit athletic meshes, and heavyweight organic t-shirts crafted meticulously for Nagpur's active campus culture. 
              </motion.p>
            </div>

            {/* Special Clean Promo Box */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => onScrollToSection("collection")}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 sm:p-5 hover:border-zinc-350 transition-all shadow-sm"
              id="promo-capsule"
            >
              <div className="flex items-center space-x-3">
                <Tag className="h-6 w-6 text-[#15803d] shrink-0" />
                <div className="space-y-0.5">
                  <span className="font-mono text-[9px] font-bold text-[#15803d] tracking-widest uppercase block">[ DIRECT DEALS ]</span>
                  <h3 className="font-sans text-base sm:text-lg font-black text-zinc-900 uppercase tracking-tight">
                    ANY <span className="text-[#16a34a] underline decoration-wavy">3 ITEMS FOR ₹999</span> ONLY
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-500">
                    Mix-and-match Korean Jerseys, Cargo packs, & heavyweight custom knits. Simple system-wide cart discounts applied automatically.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Values List */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:items-center sm:divide-x sm:divide-zinc-200"
              id="brand-value-banner"
            >
              <div className="flex items-center space-x-2.5 pr-4">
                <ShieldCheck className="h-4.5 w-4.5 text-[#16a34a] shrink-0" />
                <div>
                  <h3 className="font-mono text-[10px] font-bold text-zinc-800 uppercase">PREMIUM COTTON ONLY</h3>
                  <p className="font-sans text-[10.5px] text-zinc-400">Authentic heavy drops that never bacon-neck.</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 sm:pl-4">
                <span className="font-mono text-sm font-black text-zinc-900 bg-zinc-100 px-1.5 py-0.5 rounded">NAGPUR</span>
                <div>
                  <h3 className="font-mono text-[10px] font-bold text-zinc-800 uppercase">CITY CENTER MALL</h3>
                  <p className="font-sans text-[10.5px] text-zinc-400">Same-day counter pick-up ready in seconds.</p>
                </div>
              </div>
            </motion.div>

            {/* Primary Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
              id="hero-cta-group"
            >
              <button
                onClick={() => onScrollToSection("collection")}
                className="inline-flex items-center justify-center space-x-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-white px-7 py-3.5 font-mono text-xs font-bold transition-all shadow-md active:scale-95 text-center cursor-pointer"
                id="hero-explore-btn"
              >
                <span>EXPLORE STORE COLLECTIONS</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onScrollToSection("find-us")}
                className="inline-flex items-center justify-center space-x-2 rounded-xl border border-zinc-250 bg-white hover:bg-zinc-50 text-zinc-700 px-7 py-3.5 font-mono text-xs font-bold transition-colors active:scale-95 text-center cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <span>LOCATE NAGPUR SANCTUARY</span>
              </button>
            </motion.div>
          </div>

          {/* Graphic Banner Media */}
          <div className="relative flex justify-center lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-2.5 shadow-md xs:max-w-md"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=800&auto=format&fit=crop"
                  alt="Streetwear styling Escape Clothing"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                  id="hero-banner-model-img"
                />
                
                {/* Accent Detail */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="font-mono text-[9px] font-bold text-[#4ade80] tracking-wider uppercase">[ HOT DROPS ]</p>
                      <h4 className="font-sans text-xs sm:text-sm font-black uppercase">Varsity Athletic Block</h4>
                    </div>
                    <div className="rounded border border-zinc-750 bg-black/60 px-2 py-0.5 font-mono text-[10px] text-[#4ade80] font-black">
                      ₹399
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 left-3 rounded bg-white border border-zinc-200 px-2.5 py-0.5 font-mono text-[8.5px] font-bold text-zinc-800">
                  GENUINE WEAVES
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll link */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onScrollToSection("collection")}
            className="flex flex-col items-center space-y-1.5 text-zinc-450 transition-colors hover:text-zinc-600"
            id="scroll-to-collection-btn"
          >
            <span className="font-mono text-[9px] tracking-widest uppercase">VIEW CURRENT BLUEPRINTS</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
}
