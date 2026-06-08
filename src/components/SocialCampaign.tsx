import React, { useState } from "react";
import { Copy, Check, Instagram, Sparkles, Volume2, ArrowUpRight } from "lucide-react";
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
    <section id="social-campaign" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl">
        
        {/* Header content */}
        <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center space-x-1.5 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/5 px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#15803d] uppercase">
            <Volume2 className="h-4 w-4" />
            <span>INSTAGRAM CAMPAIGN SQUAD</span>
          </span>
          
          <h2 className="font-sans text-3xl font-black tracking-tight text-zinc-900 uppercase sm:text-4xl" id="social-headline">
            LAUNCH THE MOVEMENT <br />
            <span className="text-zinc-500 font-bold">REPRESENT THE THREADS</span>
          </h2>
          
          <p className="font-sans text-xs text-zinc-500 sm:text-sm leading-relaxed">
            Ready to show your outfit check? Grab our high-conversion promotional captions for your next post. Tag us on Instagram to get featured in our daily feed rotation for Nagpur's active campus streetwear!
          </p>
        </div>

        {/* 3 Copyable Launch Captions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" id="campaign-launch-cards-grid">
          {NEW_LAUNCH_CAPTIONS.map((cap, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-55 p-5 hover:border-zinc-350 transition-all shadow-sm"
              id={`campaign-card-${i}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-150 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="font-mono text-[10px] font-extrabold text-zinc-700 tracking-wider uppercase">{cap.label}</span>
                  </div>
                  <Instagram className="h-4.5 w-4.5 text-zinc-400 group-hover:text-zinc-700 transition-colors" />
                </div>
                
                <p className="font-sans text-xs leading-relaxed text-zinc-650 select-all pr-1 italic">
                  "{cap.text}"
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-150">
                <button
                  onClick={() => handleCopyText(cap.text, i)}
                  className="w-full flex items-center justify-center space-x-2 rounded-xl bg-zinc-100 hover:bg-zinc-900 hover:text-white py-2.5 font-mono text-[10.5px] font-bold transition-all text-zinc-700 cursor-pointer text-center"
                  id={`copy-caption-${i}`}
                >
                  {copiedIndex === i ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied! Ready to post.</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Caption Block</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Squad Lookbook Frame */}
        <div className="border-t border-zinc-150 pt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div className="space-y-1">
              <div className="flex items-center space-x-1.5 font-mono text-[9px] font-bold text-[#15803d] tracking-widest uppercase">
                <Instagram className="h-4.5 w-4.5" />
                <span>@ESCAPE_CLOTHING17 LOOKBOOK</span>
              </div>
              <h3 className="font-sans text-2xl font-black text-zinc-900 uppercase tracking-tight">SQUAD GRID</h3>
              <p className="font-sans text-xs text-zinc-500">Curated feeds featuring real styling frames, daily campus drips, and fit combos.</p>
            </div>

            <a
              href="https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 rounded-xl border border-zinc-250 bg-white hover:bg-zinc-50 px-5  py-2.5 font-mono text-[11px] font-bold text-zinc-700 transition-colors"
              id="visit-insta-feed-btn"
            >
              <span>VIRTUAL BIO FEED</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="instagram-community-feed-grid">
            {INSTAGRAM_FEED_MOCK.map((feed) => (
              <div
                key={feed.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2.5 shadow-sm"
                id={`ig-feed-card-${feed.id}`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-50">
                  <img
                    src={feed.imageUrl}
                    alt="Instagram styling feeds escape"
                    className="h-full w-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-4">
                    <p className="font-mono text-[10px] text-emerald-400 font-bold">{feed.tag}</p>
                    <p className="font-sans text-[11px] text-zinc-100 mt-1 line-clamp-2">
                      {feed.caption}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1.5 pt-3 font-mono text-[10px] text-zinc-500">
                  <div className="flex items-center space-x-3 text-zinc-400 font-bold">
                    <span>❤️ {feed.likes}</span>
                    <span>💬 {feed.comments}</span>
                  </div>
                  <span className="text-zinc-650">@escape_clothing17</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
