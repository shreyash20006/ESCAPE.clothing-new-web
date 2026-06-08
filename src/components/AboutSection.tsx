import React from "react";
import { GraduationCap, MapPin, Sparkles, Building, Quote } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_STORY } from "../data/products";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#030303] py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          
          {/* Visual Column / Store Image Side */}
          <div className="lg:col-span-5 relative" id="about-visual-column">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square w-full rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950 p-2.5"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=600&auto=format&fit=crop"
                  alt="Streetwear fashion rack"
                  className="h-full w-full object-cover grayscale opacity-80 brightness-90 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  id="about-storefront-img"
                />
                
                {/* Floating Hub overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-left">
                  <div className="inline-flex items-center space-x-1.5 rounded-full bg-zinc-950/80 px-2.5 py-1 font-mono text-[9px] text-zinc-400 border border-zinc-800">
                    <Building className="h-3 w-3 text-[#39FF14]" />
                    <span>NAGPUR HQ • CITY CENTER</span>
                  </div>
                  <div className="mt-2 text-white font-sans text-lg font-black uppercase tracking-tight">
                    DEEP-ROOTED IN STREET CULTURE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8" id="about-text-column">
            
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-1.5 font-mono text-[10px] font-bold tracking-widest text-[#39FF14] uppercase">
                <Quote className="h-4 w-4" />
                <span>MEET THE CREATORS</span>
              </span>

              <h2 className="font-sans text-4xl font-black tracking-tight text-white sm:text-5xl" id="about-headline">
                ESCAPE THE ORDINARY, <br />
                <span className="text-zinc-500">RESPECT THE HUSTLE</span>
              </h2>
            </div>

            {/* Core Story Lines */}
            <div className="space-y-6 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
              <p>{BRAND_STORY.about}</p>
              
              <div className="rounded-lg border border-zinc-950 bg-zinc-950/40 p-5 space-y-3">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5 text-[#39FF14] shrink-0" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">THE STUDENT SANCTUARY</span>
                </div>
                <p className="text-zinc-500 text-xs leading-normal">
                  {BRAND_STORY.nagpurVibe}
                </p>
              </div>
            </div>

            {/* Local Markers Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="rounded border border-zinc-900 bg-[#070707] p-4 text-left">
                <div className="flex items-center space-x-1.5 font-mono text-[10px] font-bold text-white uppercase">
                  <MapPin className="h-4 w-4 text-[#39FF14]" />
                  <span>ADDRESS MAP</span>
                </div>
                <p className="mt-1.5 font-sans text-xs text-zinc-500">
                  City Center Mall, Near Medical Square, Nagpur, Maharashtra
                </p>
              </div>

              <div className="rounded border border-zinc-900 bg-[#070707] p-4 text-left">
                <div className="flex items-center space-x-1.5 font-mono text-[10px] font-bold text-white uppercase">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>STUDENT HANGOUT HOURS</span>
                </div>
                <p className="mt-1.5 font-sans text-xs text-zinc-500">
                  Daily Open • 11:00 AM - 09:30 PM (Perfect for after-class trials)
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
