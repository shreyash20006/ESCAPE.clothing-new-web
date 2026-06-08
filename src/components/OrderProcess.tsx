import React from "react";
import { MessageCircle, Instagram, Search, Compass, Truck } from "lucide-react";
import { motion } from "motion/react";
import { CHOPPING_STEPS } from "../data/products";

export default function OrderProcess() {
  
  const handleInstagramDM = () => {
    window.open("https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  };

  const handleWhatsAppChat = () => {
    const textDesc = encodeURIComponent("Hey Escape Clothing 17 team! I am browsing your web catalog and would love to lock in some streetwear pieces.");
    window.open(`https://wa.me/918261094774?text=${textDesc}`, "_blank");
  };

  const stepIcons = [
    <Search className="h-5 w-5 text-[#39FF14]" />,
    <MessageCircle className="h-5 w-5 text-[#39FF14]" />,
    <Truck className="h-5 w-5 text-[#39FF14]" />
  ];

  return (
    <section id="how-to-order" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-y border-zinc-950">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-45"></div>

      <div className="relative mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center space-y-4">
          <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] font-bold tracking-widest text-[#39FF14] uppercase">
            <span>[ THE ORDER PROCESS ]</span>
          </div>
          
          <h2 className="font-sans text-4xl font-black tracking-tight text-white sm:text-5xl" id="order-process-headline">
            HOW TO SECURE THE DEALS
          </h2>
          
          <p className="mx-auto max-w-2xl font-mono text-xs leading-relaxed text-zinc-500 sm:text-sm">
            We operate fully customized direct sales. No tedious account creation — just save fits to 'My Bag', send the compiled basket straight to WhatsApp, and secure the drippiest garments in minutes.
          </p>
        </div>

        {/* Steps Grid with icons */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" id="order-steps-grid">
          {CHOPPING_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-lg border border-zinc-900 bg-[#060606] p-6 hover:border-[#39FF14]/30 transition-all"
              id={`order-step-${step.number}`}
            >
              
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                <span className="font-mono text-3xl font-black text-zinc-800 leading-none group-hover:text-[#39FF14] transition-colors">
                  {step.number}
                </span>
                
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-zinc-950 border border-zinc-850 p-2">
                    {stepIcons[idx]}
                  </div>
                  <span className="rounded bg-[#0d2209] border border-[#39ff14]/10 px-2 py-0.5 font-mono text-[9px] text-[#39FF14] font-bold uppercase tracking-widest">
                    STAGE {idx + 1}
                  </span>
                </div>
              </div>

              {/* Title & Body */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="font-sans text-[11.5px] leading-relaxed text-zinc-500">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Big Quick Order CTA Board */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl border border-zinc-900 bg-zinc-950/40 p-8 md:p-12 text-center space-y-8 backdrop-blur"
          id="checkout-gateway-ctr"
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="font-sans text-2xl font-extrabold text-white uppercase tracking-tight sm:text-3xl">
              CHOOSE YOUR CHANNEL
            </h3>
            <p className="font-mono text-xs text-zinc-500 leading-relaxed">
              Have questions, customized size requests, or looking for special wholesale items? Connect directly with our operators. We respond in real-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            
            {/* Instagram CTA */}
            <button
              onClick={handleInstagramDM}
              className="flex-1 inline-flex items-center justify-center space-x-2.5 rounded-md bg-zinc-900 border border-zinc-800 hover:border-[#39FF14]/30 hover:bg-zinc-800 p-4 font-mono text-xs font-bold text-white transition-all shadow-md active:scale-95"
              id="steps-instagram-btn"
            >
              <Instagram className="h-4.5 w-4.5 text-zinc-400" />
              <span>DM @escape_clothing17</span>
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppChat}
              className="flex-1 inline-flex items-center justify-center space-x-2.5 rounded-md bg-white hover:bg-[#39FF14] hover:text-black p-4 font-mono text-xs font-bold text-black transition-all shadow-md active:scale-95"
              id="steps-whatsapp-btn"
            >
              <MessageCircle className="h-4.5 w-4.5 fill-current stroke-[2]" />
              <span>LAUNCH WHATSAPP DM</span>
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
