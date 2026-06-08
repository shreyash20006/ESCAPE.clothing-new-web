import React, { useState } from "react";
import { X, Check, Copy, Store, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ShopifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShopifyModal({ isOpen, onClose }: ShopifyModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Get active live URL of this application
  const appOrigin = typeof window !== "undefined" ? window.location.origin : "https://escapeclothing17.com";

  const iframeSnippet = `<!-- 
  ESCAPE CLOTHING 17 - SHOPIFY EMBED BLUEPRINT
  Add this globally responsive custom template anywhere in Dawn Theme or any custom page.
-->
<div class="escape-shopify-container" style="width: 100%; min-height: 90vh; background: #ffffff; overflow: hidden; position: relative;">
  <iframe 
    src="${appOrigin}" 
    style="width: 100%; height: 90vh; border: none; overflow: hidden; display: block;"
    scrolling="yes"
    loading="lazy"
    referrerpolicy="no-referrer"
    title="Escape Clothing 17 Nagpur"
  ></iframe>
</div>

<style>
  @media screen and (max-width: 768px) {
    .escape-shopify-container, .escape-shopify-container iframe {
      height: 94vh !important;
    }
  }
</style>`;

  const liquidSnippet = `{% comment %}
  Escape Clothing 17 - Custom Liquid Section Integration
  Create a new custom-liquid section or add to templates/index.json
{% endcomment %}

<section id="shopify-escape-catalog-{{ section.id }}" class="shopify-escape-section" style="background-color: #ffffff; padding: 0; margin: 0;">
  <div style="width: 100%; min-height: 92vh; position: relative; margin: 0 auto; overflow: hidden;">
    <iframe 
      src="${appOrigin}" 
      style="width: 100%; height: 92vh; border: none; display: block; overflow: hidden;"
      scrolling="yes"
      title="Escape Clothing 17"
    ></iframe>
  </div>
</section>

{% schema %}
{
  "name": "Escape Custom Catalog",
  "settings": [],
  "presets": [
    {
      "name": "Escape Custom Catalog",
      "category": "Custom UI Pieces"
    }
  ]
}
{% endschema %}`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-zinc-900/40 backdrop-blur-sm"
            id="shopify-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 15 }}
            className="fixed inset-x-4 top-[8%] z-50 mx-auto flex max-w-2xl flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl text-left max-h-[82vh] overflow-y-auto"
            id="shopify-instructions-modal"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-150 pb-4">
              <div className="flex items-center space-x-3">
                <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-2 shrink-0">
                  <Store className="h-5 w-5 text-[#15803d]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] font-bold text-[#15803d] uppercase tracking-wider block">[ SHOPIFY AUTOMATIC STREAM ]</span>
                  <h3 className="font-sans text-lg font-black text-zinc-900 uppercase tracking-tight">
                    Synchronise Theme Blueprint
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-800 transition-colors cursor-pointer"
                id="close-shopify-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 space-y-5">

              {/* SAVING THEME ERROR EXPLANATION */}
              <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 text-xs font-sans leading-relaxed text-zinc-700">
                <div className="flex items-start space-x-2.5">
                  <ShieldAlert className="h-4.5 w-4.5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-red-700 font-bold font-mono text-[10px] block uppercase tracking-wider">
                      ★ SHOPIFY "NOT A VALID THEME" NOTICE:
                    </span>
                    <p className="mt-1 font-sans text-xs">
                      If you try to upload this web project's complete ZIP folder under <span className="text-zinc-950 font-bold">"Themes &rarr; Upload ZIP"</span>, Shopify will decline with a <span className="text-red-750 font-mono font-bold">"Not a valid theme"</span> warning.
                    </p>
                    <p className="mt-1.5 text-zinc-650">
                      This happens because your storefront is a responsive <span className="text-zinc-955 font-bold">React & Vite Web App</span>. You do not need to upload a new theme! Retain your existing standard theme (e.g. Dawn) and inject this catalog drops with either easy method:
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl bg-zinc-50 p-3.5 border border-zinc-200 space-y-1">
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="h-4 w-4 text-[#15803d] shrink-0" />
                  <span className="font-mono text-[9.5px] font-bold text-zinc-800 uppercase">Seamless Double Synced Setup</span>
                </div>
                <p className="font-sans text-[11.5px] text-zinc-500 leading-normal">
                  Our Nagpur-optimized digital catalog integrates perfectly within your current templates without slowing down loading speed. Copy either template code block below:
                </p>
              </div>

              {/* Method 1: Custom Custom Liquid Section */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-zinc-800 uppercase tracking-wide">Method 1: Custom Liquid Block (Aesthetic Integration)</span>
                  <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-mono text-[8.5px] text-[#15803d] font-bold">EASY FEED</span>
                </div>

                <div className="font-sans text-[11px] text-zinc-500 space-y-1 pl-1">
                  <p>1. Go to <span className="text-zinc-850 font-bold">Shopify Dashboard</span> &rarr; Sales Channels &rarr; Online Store &rarr; Themes &apos;Customize&apos;.</p>
                  <p>2. Tap <span className="text-zinc-850 font-bold">Add section</span> &rarr; select <span className="text-emerald-700 font-bold">Custom Liquid</span>.</p>
                  <p>3. Paste this snippet in the Custom Liquid section box. Save!</p>
                </div>

                {/* Code display */}
                <div className="relative rounded-xl bg-zinc-900 p-4 mt-1.5 border border-zinc-950">
                  <pre className="text-[10px] text-zinc-300 overflow-x-auto font-mono max-h-[120px] select-all leading-normal">
                    {liquidSnippet}
                  </pre>
                  <button
                    onClick={() => handleCopy(liquidSnippet, "liquid")}
                    className="absolute top-2.5 right-2.5 flex items-center space-x-1 border border-zinc-700 bg-zinc-850 hover:bg-zinc-100 hover:text-black hover:border-white px-2.5 py-1.5 font-mono text-[9px] font-bold transition-all text-zinc-205 cursor-pointer rounded-lg"
                    id="copy-liquid-snippet-btn"
                  >
                    {copiedType === "liquid" ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>COPY SNIPPET</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Method 2: Create a Dedicated Page Embed */}
              <div className="space-y-2.5">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-zinc-805 uppercase tracking-wide">Method 2: Full Width Page Embed</span>
                
                <div className="font-sans text-[11px] text-zinc-500 space-y-1 pl-1">
                  <p>1. Open <span className="text-zinc-850 font-bold">Pages</span> on Shopify &rarr; click <span className="text-zinc-850 font-bold">Add page</span> (e.g. "Escape catalog drops").</p>
                  <p>2. Click the <span className="text-[#15803d] font-bold">HTML Editor (&lt;&gt;)</span> icon inside the rich content panel.</p>
                  <p>3. Paste the dynamic responsive iframe container code. Ready!</p>
                </div>

                {/* Code display */}
                <div className="relative rounded-xl bg-zinc-900 p-4 mt-1.5 border border-zinc-950">
                  <pre className="text-[10px] text-zinc-300 overflow-x-auto font-mono max-h-[120px] select-all leading-normal">
                    {iframeSnippet}
                  </pre>
                  <button
                    onClick={() => handleCopy(iframeSnippet, "iframe")}
                    className="absolute top-2.5 right-2.5 flex items-center space-x-1 border border-zinc-700 bg-zinc-850 hover:bg-zinc-100 hover:text-black hover:border-white px-2.5 py-1.5 font-mono text-[9px] font-bold transition-all text-zinc-205 cursor-pointer rounded-lg"
                    id="copy-iframe-snippet-btn"
                  >
                    {copiedType === "iframe" ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>COPY IFRAME</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="border-t border-zinc-150 pt-4 flex items-center justify-between">
              <div className="flex items-center space-x-1.5 font-mono text-[10px] text-zinc-450 font-bold">
                <HelpCircle className="h-4 w-4" />
                <span>Hosting points directly to active server URL checks.</span>
              </div>
              <button
                onClick={onClose}
                className="rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 font-mono text-[10.5px] font-black px-4.5 py-2.5 transition-colors uppercase cursor-pointer"
              >
                GOT IT, CONTINUE
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
