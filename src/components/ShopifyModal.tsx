import React, { useState } from "react";
import { X, Check, Copy, Store, ArrowRight, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ShopifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ShopifyModal({ isOpen, onClose }: ShopifyModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Get active live URL of this application
  const appOrigin = typeof window !== "undefined" ? window.location.origin : "https://escapeclothing17.com";

  // Code snippets
  const iframeSnippet = `<!-- 
  ESCAPE CLOTHING 17 - SHOPIFY EMBED BLUEPRINT
  Add this globally responsive custom template anywhere in Dawn Theme or any custom page.
-->
<div class="escape-shopify-container" style="width: 100%; min-height: 90vh; background: #000; overflow: hidden; position: relative;">
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
  /* Ensure it looks fully seamless on mobile and tablet screens */
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

<section id="shopify-escape-catalog-{{ section.id }}" class="shopify-escape-section" style="background-color: #000000; padding: 0; margin: 0;">
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
            id="shopify-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[8%] z-50 mx-auto flex max-w-2xl flex-col rounded-xl border border-[#39FF14]/25 bg-[#060606] p-6 shadow-2xl md:p-8 text-left max-h-[84vh] overflow-y-auto scrollbar-none"
            id="shopify-instructions-modal"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-5">
              <div className="flex items-center space-x-3">
                <div className="rounded-md bg-[#0f210d] border border-[#39ff14]/35 p-2 shrink-0">
                  <Store className="h-5 w-5 text-[#39FF14]" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-mono text-[9px] font-bold text-[#39FF14] uppercase tracking-wider">[ MERCANTILE WIDGET ]</span>
                  </div>
                  <h3 className="font-sans text-xl font-black text-white uppercase tracking-tight">
                    Add Custom Catalog to Shopify Theme
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1.5 text-zinc-500 hover:bg-zinc-900 hover:text-white transition-colors"
                id="close-shopify-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body Info */}
            <div className="py-5 space-y-6">

              {/* CRITICAL: Invalid Theme Error Explanation Banner */}
              <div className="rounded-lg border border-red-500/30 bg-[#1f0d0d] p-4 text-xs font-sans leading-relaxed text-zinc-300">
                <div className="flex items-start space-x-3">
                  <ShieldAlert className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-red-500 font-bold font-mono text-[11px] block uppercase tracking-wider">
                      ⚠️ SAVING YOU FROM SHOPIFY "NOT A VALID THEME" ERROR:
                    </span>
                    <p className="mt-1 font-sans text-xs">
                      If you try to upload this web project's ZIP file under <span className="text-white font-bold">"Themes &rarr; Upload ZIP"</span>, Shopify will decline it with <span className="text-red-400 font-mono font-bold">"Not a valid theme"</span>. 
                    </p>
                    <p className="mt-1.5 text-zinc-400">
                      This happens because this Nagpur store is a state-of-the-art <span className="text-white font-bold">React & Vite Web App</span> rather than a basic static liquid theme. 
                      <span className="text-[#39FF14] font-bold"> You do not need to replace or upload a new theme!</span> Keep your current theme (like Dawn) and simply add this catalog to your store using either easy method below:
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-zinc-950 p-4 border border-zinc-900 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-[#39FF14] shrink-0" />
                  <span className="font-mono text-[10px] font-bold text-white uppercase">How Shopify Integration Works</span>
                </div>
                <p className="font-sans text-xs text-zinc-400 leading-normal">
                  Our Nagpur-optimized digital catalog integrates perfectly inside your existing Shopify theme without altering any of your layout files or slowing down your page. Simply copy either integration template below:
                </p>
              </div>

              {/* Method 1: Custom Custom Liquid Section (Highly Recommended for Dawn theme!) */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-white uppercase tracking-wider">Method 1: Custom Liquid Section (Best for Dawn, Origin & Craft Themes)</span>
                  <span className="rounded bg-[#0d210a] border border-[#39ff14]/20 px-2 py-0.5 font-mono text-[9px] text-[#39FF14] font-bold">RECOMMENDED</span>
                </div>

                <div className="font-sans text-[11px] text-zinc-550 space-y-1 leading-normal list-decimal pl-1">
                  <p>1. Go to your <span className="text-white font-bold">Shopify Admin Dashboard</span> &rarr; Online Store &rarr; Themes &apos;Customize&apos;.</p>
                  <p>2. In the sidebar, click <span className="text-white font-bold">Add section</span> &rarr; <span className="text-[#39FF14] font-bold">Custom Liquid</span> (or Custom HTML).</p>
                  <p>3. Copy the snippet below and paste it directly in the Custom Liquid box. Press Save!</p>
                </div>

                {/* Code viewport block */}
                <div className="relative rounded-lg bg-black border border-zinc-900 p-4.5 mt-2">
                  <pre className="text-[10px] text-zinc-450 overflow-x-auto font-mono max-h-[140px] select-all leading-normal">
                    {liquidSnippet}
                  </pre>
                  <button
                    onClick={() => handleCopy(liquidSnippet, "liquid")}
                    className="absolute top-3 right-3 flex items-center space-x-1.5 rounded bg-zinc-950 hover:bg-white hover:text-black border border-zinc-900 px-3 py-1.5 font-mono text-[9px] font-bold transition-all text-zinc-300"
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
                        <span>COPY SEC. LIQUID</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Method 2: Global Custom Page Embed / Iframe */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs font-black text-white uppercase tracking-wider">Method 2: Create a Dedicated Page Embed (Dawn or legacy theme blocks)</span>
                
                <div className="font-sans text-[11px] text-zinc-550 space-y-1 leading-normal pl-1">
                  <p>1. Go to <span className="text-white font-bold">Pages</span> on your Shopify sidebar &rarr; click <span className="text-white font-bold">Add page</span> (e.g., name it &quot;Catalog drops&quot;).</p>
                  <p>2. Tap the <span className="text-[#39FF14] font-bold">Show HTML (&lt;&gt;)</span> icon in the rich text editor option bar.</p>
                  <p>3. Copy-paste the raw iframe block below. Simple. It will match full screen widths flawlessly!</p>
                </div>

                {/* Code viewport block */}
                <div className="relative rounded-lg bg-black border border-zinc-900 p-4.5 mt-2">
                  <pre className="text-[10px] text-zinc-450 overflow-x-auto font-mono max-h-[145px] select-all leading-normal">
                    {iframeSnippet}
                  </pre>
                  <button
                    onClick={() => handleCopy(iframeSnippet, "iframe")}
                    className="absolute top-3 right-3 flex items-center space-x-1.5 rounded bg-zinc-950 hover:bg-white hover:text-black border border-zinc-900 px-3 py-1.5 font-mono text-[9px] font-bold transition-all text-zinc-300"
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
                        <span>COPY HTML IFRAME</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Live Preview Sync Callout */}
              <div className="rounded-lg bg-[#14120a] border border-amber-500/20 p-4 text-xs font-sans leading-relaxed text-zinc-400 flex items-start space-x-3.5">
                <ShieldAlert className="h-5 w-5 text-amber-500 shrink-0" />
                <div>
                  <span className="text-amber-500 font-bold font-mono text-[10px] block uppercase tracking-wider">HOSTING SYNCHRONISATION NOTICE:</span>
                  The Shopify integration points directly to your deployment address: <span className="font-mono text-white underline break-all">{appOrigin}</span>. Whenever you update designs, products, colors, or phone numbers here in the AI Studio editor, it will instantly synchronize live inside your Shopify store! Zero manual redownloads required.
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="border-t border-zinc-900 pt-5 flex items-center justify-between">
              <div className="flex items-center space-x-1.5 font-mono text-[10.5px] text-zinc-550">
                <HelpCircle className="h-4 w-4" />
                <span>Need support? सुरेश or रोहित can set this up for you!</span>
              </div>
              <button
                onClick={onClose}
                className="rounded bg-[#39FF14] text-black hover:bg-white font-mono text-[11px] font-black px-5 py-2.5 transition-colors uppercase"
              >
                Got It, Done!
              </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
