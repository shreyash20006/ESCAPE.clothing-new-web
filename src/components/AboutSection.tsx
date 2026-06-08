import React from "react";
import { GraduationCap, MapPin, Building, Quote } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_STORY } from "../data/products";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          
          {/* Visual Column / Store Showcase */}
          <div className="lg:col-span-5 relative" id="about-visual-column">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square w-full rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 p-2 shadow-sm"
            >
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=600&auto=format&fit=crop"
                  alt="Streetwear retail counter"
                  className="h-full w-full object-cover transition-all duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                  id="about-storefront-img"
                />
                
                {/* Visual Label overlays */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-left">
                  <div className="inline-flex items-center space-x-1.5 rounded-lg bg-white/95 px-2.5 py-1 font-mono text-[9px] font-bold text-zinc-800 border border-zinc-150">
                    <Building className="h-3 w-3 text-[#15803d]" />
                    <span>NAGPUR HQ • CITY CENTER</span>
                  </div>
                  <div className="mt-2 text-white font-sans text-sm font-black uppercase tracking-tight">
                    HIGH-DENSITY ATHLETIC WEAVING
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6" id="about-text-column">
            
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 font-mono text-[9px] font-bold tracking-widest text-[#15803d] uppercase">
                <Quote className="h-4 w-4" />
                <span>ABOUT ESCAPE CLOTHING 17</span>
              </span>

              <h2 className="font-sans text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl" id="about-headline">
                RE-ENGINEERED FIT, <br />
                <span className="text-zinc-500 font-bold">REASONABLE LOCAL RATES</span>
              </h2>
            </div>

            {/* Core Story Lines */}
            <div className="space-y-4 font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed">
              <p>{BRAND_STORY.about}</p>
              
              <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-4 sm:p-5 space-y-2">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-4.5 w-4.5 text-[#15803d] shrink-0" />
                  <span className="font-mono text-[10px] font-bold text-zinc-800 uppercase tracking-wider">CAMPUS SPECIAL INVENTORY</span>
                </div>
                <p className="text-zinc-500 text-xs sm:text-[13px] leading-normal">
                  {BRAND_STORY.nagpurVibe}
                </p>
              </div>
            </div>

            {/* Markers list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm">
                <div className="flex items-center space-x-1.5 font-mono text-[9.5px] font-bold text-zinc-800 uppercase">
                  <MapPin className="h-4 w-4 text-[#15803d]" />
                  <span>ADDRESS GRID</span>
                </div>
                <p className="mt-1.5 font-sans text-xs text-zinc-500">
                  City Center Mall, Near Medical Square, Nagpur, Maharashtra
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-4 text-left shadow-sm">
                <div className="flex items-center space-x-1.5 font-mono text-[9.5px] font-bold text-zinc-800 uppercase">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Trial Lounge Hours</span>
                </div>
                <p className="mt-1.5 font-sans text-xs text-zinc-500">
                  Daily Counter Open • 11:30 AM - 09:30 PM
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
