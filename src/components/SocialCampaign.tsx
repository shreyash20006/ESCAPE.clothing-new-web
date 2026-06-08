import React, { useState } from "react";
import { Copy, Check, Instagram, Sparkles, MessageSquare, Volume2 } from "lucide-react";
import { motion } from "motion/react";
import { NEW_LAUNCH_CAPTIONS, INSTAGRAM_FEED_MOCK } from "../data/products";

export default function SocialCampaign() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="social-campaign" className="bg-black py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      <div className="mx-auto max-w-7xl">
        
        {/* Header content */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-1.5 rounded-full border border-[#39FF14]/20 bg-[#39FF14]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#39FF14] uppercase">
            <Volume2 className="h-4.5 w-4.5 text-[#39FF14]" />
            <span>INSTAGRAM SQUAD CREATIVE KIT</span>
          </span>
          
          <h2 className="font-sans text-4xl font-black tracking-tight text-white uppercase sm:text-5xl" id="social-headline">
            LAUNCH THE MOVEMENT <br />
            <span className="text-zinc-500">REPRESENT THE CULTURE</span>
          </h2>
          
          <p className="font-sans text-xs leading-relaxed text-zinc-500 sm:text-sm">
            Ready to represent? Grab our ready-to-use streetwear social captions for your next look check. Tag us on Instagram to get featured in our daily campus drops feed and lock in exclusive squad premium rates!
          </p>
        </div>

        {/* 3 Copyable Launch Captions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" id="campaign-launch-cards-grid">
          {NEW_LAUNCH_CAPTIONS.map((cap, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-xl border border-zinc-900 bg-zinc-950/60 p-5 hover:border-[#39FF14]/30 transition-colors"
              id={`campaign-card-${i}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-[#39FF14]"></span>
                    <span className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">{cap.label}</span>
                  </div>
                  <Instagram className="h-4.5 w-4.5 text-zinc-650 group-hover:text-[#39FF14] transition-colors" />
                </div>
                
                <p className="font-mono text-xs leading-relaxed text-zinc-400 select-all pr-2 italic">
                  "{cap.text}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-900/40">
                <button
                  onClick={() => handleCopyText(cap.text, i)}
                  className="w-full flex items-center justify-center space-x-2 rounded bg-zinc-900 hover:bg-white hover:text-black py-2.5 font-mono text-[10.5px] font-bold transition-all text-zinc-300"
                  id={`copy-caption-${i}`}
                >
                  {copiedIndex === i ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED IN CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>COPY CAPTION TEXT</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Grid Feed Integration Mock */}
        <div className="border-t border-zinc-950 pt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="space-y-3">
              <div className="flex items-center space-x-1.5 font-mono text-[9px] font-bold text-[#39FF14] tracking-widest uppercase">
                <Instagram className="h-4.5 w-4.5" />
                <span>@ESCAPE_CLOTHING17 SQUAD FEED</span>
              </div>
              <h3 className="font-sans text-2xl font-black text-white uppercase tracking-tight">SQUAD LOOKBOOK</h3>
              <p className="font-sans text-xs text-zinc-500">Real people, real fits. Tag us to get put in high-key rotation.</p>
            </div>

            <a
              href="https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 rounded bg-[#0f210d] border border-[#39ff14]/20 px-5 py-2.5 font-mono text-[11px] font-bold text-[#39FF14] transition-colors hover:bg-[#1a3d16]"
              id="visit-insta-feed-btn"
            >
              <span>OPEN INSTAGRAM FEED</span>
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="instagram-community-feed-grid">
            {INSTAGRAM_FEED_MOCK.map((feed) => (
              <div
                key={feed.id}
                className="group relative overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950 p-2.5"
                id={`ig-feed-card-${feed.id}`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-900">
                  <img
                    src={feed.imageUrl}
                    alt="Instagram Post style fit"
                    className="h-full w-full object-cover grayscale brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="font-mono text-[9px] text-[#39FF14] font-black">{feed.tag}</p>
                    <p className="font-sans text-[10.5px] text-zinc-200 mt-1 line-clamp-2">
                      {feed.caption}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-2 pt-3 font-mono text-[10px] text-zinc-500">
                  <div className="flex items-center space-x-3">
                    <span>❤️ {feed.likes}</span>
                    <span>💬 {feed.comments}</span>
                  </div>
                  <span className="text-[#39FF14]/70">@escape_clothing17</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
