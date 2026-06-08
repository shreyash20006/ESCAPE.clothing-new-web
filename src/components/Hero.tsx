import React from "react";
import { MessageCircle, ArrowDown, ChevronRight, Flame, ShieldCheck, Tag, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const handleGeneralWhatsApp = () => {
    const text = encodeURIComponent(
      "Hi Escape Clothing 17 Nagpur! I am browsing the streetwear launch page and want to check available designs for the 3 for ₹999 deal."
    );
    window.open(`https://wa.me/918261094774?text=${text}`, "_blank");
  };

  return (
    <section 
      id="hero" 
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-black px-4 pt-12 sm:px-6 lg:px-8 border-b border-zinc-950"
    >
      {/* Grid Overlay for Raw Street Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      {/* Futuristic Background Lights / Ambient Vibe (Neon Green #39FF14) */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-[#39FF14]/10 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-zinc-900/40 blur-[140px]"></div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8 lg:col-span-7">
            
            {/* Tagline Indicator with Neon Green */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center space-x-2 rounded-full border border-[#39FF14]/25 bg-[#39FF14]/10 px-3.5 py-1.5 text-[10px] font-mono font-bold tracking-widest text-[#39FF14] uppercase sm:text-xs"
            >
              <Flame className="h-4 w-4 text-[#39FF14] animate-pulse" />
              <span>NAGPUR'S AUTHENTIC DEALS ON STREETWEAR</span>
            </motion.div>

            {/* main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans text-5xl font-black tracking-tighter text-white sm:text-7xl xl:text-8xl"
                id="hero-main-title"
              >
                ESCAPE THE <br />
                <span className="relative inline-block text-zinc-400">
                  ORDINARY
                  <span className="absolute -bottom-2 left-0 h-1.5 w-1/3 bg-[#39FF14]"></span>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-xl font-mono text-xs leading-relaxed text-zinc-400 sm:text-sm"
              >
                Zero markup. Maximum drip. Streetwear essentials curated meticulously for Nagpur's active college student community. Premium heavy 240+ GSM cotton and double-knitted sports micro-mesh. Let's fix your wardrobe checks.
              </motion.p>
            </div>

            {/* Special High-Converting "3 for 999" Promo Banner Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              onClick={() => onScrollToSection("collection")}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-[#39FF14]/30 bg-[#060e06] p-4.5 transition-all hover:border-[#39FF14] hover:shadow-[0_0_15px_rgba(57,255,20,0.1)]"
              id="promo-capsule"
            >
              <div className="absolute top-0 right-0 h-12 w-12 translate-x-3 translate-y-[-12px] rotate-45 bg-[#39FF14] text-black flex items-end justify-center pb-1">
                <Sparkles className="h-3.5 w-3.5 text-black rotate-[-45deg]" />
              </div>
              
              <div className="flex items-center space-x-3">
                <Tag className="h-7 w-7 text-[#39FF14] shrink-0 animate-bounce" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-black tracking-widest text-[#39FF14] uppercase">[ LIMITED WEB EXCLUSIVE ]</span>
                  </div>
                  <h3 className="font-sans text-xl font-black text-white uppercase tracking-tight mt-0.5">
                    ANY <span className="text-[#39FF14]">3 ITEMS FOR JUST ₹999</span> ONLY
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-400 mt-1">
                    Mix-and-match Korean Jerseys, Heavy Boxy Tees, & Waffle Knits. The Nagpur campus special. Click to assemble yours!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Brand Value Callout panels */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col space-y-4 rounded-lg border border-zinc-900 bg-zinc-950/80 p-5 backdrop-blur-sm sm:flex-row sm:space-y-0 sm:items-center sm:divide-x sm:divide-zinc-900"
              id="brand-value-banner"
            >
              <div className="flex items-center space-x-3 pr-5">
                <ShieldCheck className="h-5 w-5 text-[#39FF14] shrink-0" />
                <div>
                  <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">FABRIC DEALS ONLY</h3>
                  <p className="font-sans text-[11px] text-zinc-500">Premium heavy structures, soft pre-shrunks.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:pl-5">
                <span className="font-mono font-bold text-xl text-[#39FF14] tracking-tighter pr-1">Nagpur</span>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">CITY CENTER</h3>
                  <p className="font-sans text-[11px] text-zinc-500">Direct fitting in the city pulse.</p>
                </div>
              </div>
            </motion.div>

            {/* Calls to Action */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              id="hero-cta-group"
            >
              <button
                onClick={handleGeneralWhatsApp}
                className="inline-flex items-center justify-center space-x-3 rounded-md bg-white hover:bg-[#39FF14] hover:text-black hover:scale-[1.02] px-7 py-4 font-mono text-xs font-bold text-black transition-all active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="h-4.5 w-4.5 fill-current" />
                <span>DIRECT STORE WHATSAPP</span>
              </button>

              <button
                onClick={() => onScrollToSection("collection")}
                className="inline-flex items-center justify-center space-x-2 rounded-md border border-zinc-800 bg-zinc-950 px-7 py-4 font-mono text-xs font-bold text-white transition-colors hover:border-[#39FF14] hover:bg-zinc-900 active:scale-95"
                id="hero-explore-btn"
              >
                <span>OPEN DIGITAL SHOP</span>
                <ChevronRight className="h-4 w-4 text-zinc-500" />
              </button>
            </motion.div>
          </div>

          {/* Graphic Side Card */}
          <div className="relative flex justify-center lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950 p-3 shadow-2xl shadow-[#39FF14]/5 sm:max-w-[400px]"
            >
              {/* Image Container with high contrast model image */}
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=800&auto=format&fit=crop"
                  alt="Streetwear model styling Escape Clothing 17 Nagpur"
                  className="h-full w-full object-cover grayscale brightness-90 transition-all duration-700 hover:scale-105 hover:grayscale-0"
                  referrerPolicy="no-referrer"
                  id="hero-banner-model-img"
                />
                
                {/* Visual Accent Tags */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] font-bold text-[#39FF14] uppercase tracking-widest">[ BESTSELLER ]</p>
                      <h4 className="font-sans text-base font-black text-white uppercase tracking-tight">VARSITY SPORTS MESH</h4>
                    </div>
                    <div className="rounded border border-[#39FF14]/40 bg-black/80 px-2 py-1 font-mono text-[10px] text-[#39FF14] font-bold">
                      ₹399 ONLY
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 rounded-md border border-zinc-800 bg-black/80 px-3 py-1 font-mono text-[9px] text-[#39FF14] backdrop-blur-sm">
                  LAUNCH SPECIAL V1.7
                </div>

                <div className="absolute top-4 right-4 h-11 w-11 rounded-full border border-[#39FF14]/40 bg-zinc-950 p-0.5 shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dsqxboxoc/image/upload/q_auto/f_auto/v1780928834/639473422_17856452319665295_1281961209085143497_n_mmtgqs.jpg"
                    alt="Brand Small Logo"
                    className="h-full w-full rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Prompt */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => onScrollToSection("collection")}
            className="flex flex-col items-center space-y-2 text-zinc-600 transition-colors hover:text-zinc-400"
            id="scroll-to-collection-btn"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">Browse Digital Racks</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
}
