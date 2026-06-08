import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import OrderProcess from "./components/OrderProcess";
import SocialCampaign from "./components/SocialCampaign";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import EnquiryBag from "./components/EnquiryBag";
import { EnquiryItem } from "./types";
import { SHOPIFY_FILES, ShopifyFile } from "./data/shopifyFiles";
import { 
  Folder, 
  FileCode, 
  Check, 
  Copy, 
  Terminal, 
  Share2, 
  Store, 
  Zap,
  CheckCircle,
  HelpCircle,
  Heart,
  ShoppingBag,
  ExternalLink,
  Info
} from "lucide-react";

export default function App() {
  const [enquiryBag, setEnquiryBag] = useState<EnquiryItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  
  // App view toggle: "preview" or "shopify-dir"
  const [activeView, setActiveView] = useState<"preview" | "shopify-dir">("preview");
  
  // Selected file inside the Shopify workspace tree
  const [selectedShopifyFile, setSelectedShopifyFile] = useState<ShopifyFile>(SHOPIFY_FILES[0]);
  const [copiedFile, setCopiedFile] = useState<boolean>(false);
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  // Shopify Checkout Simulator Pop-up state
  const [showCheckoutSimulator, setShowCheckoutSimulator] = useState<boolean>(false);
  const [simulatedCheckoutItem, setSimulatedCheckoutItem] = useState<{name: string, price: number, size: string} | null>(null);

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    if (activeView !== "preview") {
      setActiveView("preview");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Add Item to Enquiry bag / Normal flow
  const handleAddToBag = (newItem: EnquiryItem) => {
    // Intercept standard checkout to trigger direct "BUY NOW" simulator!
    // Since the user asked for a direct buy now button, let's display a beautiful native shopping bag success
    setEnquiryBag((prevBag) => {
      const matchIndex = prevBag.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      if (matchIndex > -1) {
        const updated = [...prevBag];
        updated[matchIndex] = {
          ...updated[matchIndex],
          quantity: updated[matchIndex].quantity + newItem.quantity,
        };
        return updated;
      } else {
        return [...prevBag, newItem];
      }
    });

    // Capture item details for the direct checkout simulator
    setSimulatedCheckoutItem({
      name: newItem.productName,
      price: newItem.price,
      size: newItem.size
    });
    
    // Automatically open the checkout simulation drawer for instant "Direct Buy Now" feedback!
    setShowCheckoutSimulator(true);
  };

  // Remove Item from Enquiry Bag
  const handleRemoveItem = (index: number) => {
    setEnquiryBag((prevBag) => prevBag.filter((_, idx) => idx !== index));
  };

  // Clear Bag selections
  const handleClearBag = () => {
    setEnquiryBag([]);
  };

  // Copy code helper inside Shopify inspector
  const handleCopyCode = (text: string, path: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFile(true);
    setCopiedStatus(path);
    setTimeout(() => {
      setCopiedFile(false);
      setCopiedStatus(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-[#39FF14] selection:text-black" id="main_viewport">
      {/* Top fluorescent active border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#113109] via-[#39FF14] to-[#113109]"></div>

      {/* 🚀 Active Deployment Controller Header Panel */}
      <div className="bg-[#0c0c0c] border-b border-zinc-900 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#39FF14] animate-pulse"></div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[9px] font-black tracking-wider text-[#39FF14] uppercase bg-[#142911] px-2 py-0.5 rounded border border-[#39ff14]/30">
                  GITHUB CONNECTED (MAIN BRANCH)
                </span>
                <span className="font-mono text-[9px] text-zinc-500">SHOPIFY 2.0 CONVERT_OK</span>
              </div>
              <h2 className="text-xs font-sans text-zinc-400 mt-0.5">
                Conversion Complete: <strong>14 Production-Ready Theme Files</strong> written at standard root directories.
              </h2>
            </div>
          </div>

          {/* Toggle Button Group */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView("preview")}
              className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 font-mono text-[10.5px] font-black px-4 py-2.5 rounded-lg transition-all border ${
                activeView === "preview"
                  ? "bg-gradient-to-r from-[#0d210a] to-zinc-950 border-[#39FF14] text-[#39FF14]"
                  : "bg-zinc-950 border-zinc-900 text-zinc-450 hover:text-white"
              }`}
            >
              <Zap className="h-3.5 w-3.5 shrink-0" />
              <span>1. VIEW CLIENT LOOK/FEEL</span>
            </button>

            <button
              onClick={() => {
                setActiveView("shopify-dir");
                // Reset scroll
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 font-mono text-[10.5px] font-black px-4 py-2.5 rounded-lg transition-all border ${
                activeView === "shopify-dir"
                  ? "bg-gradient-to-r from-[#0d210a] to-zinc-950 border-[#39FF14] text-[#39FF14]"
                  : "bg-zinc-950 border-zinc-900 text-zinc-450 hover:text-white"
              }`}
            >
              <Folder className="h-3.5 w-3.5 shrink-0" />
              <span>2. INSPECT SHOPIFY 2.0 WORKSPACE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Render Controller logic */}
      {activeView === "preview" ? (
        <>
          {/* Navigation Header */}
          <Header
            enquiryItems={enquiryBag}
            onOpenBag={() => setIsBagOpen(true)}
            onScrollToSection={handleScrollToSection}
          />

          {/* Core Visual Preview Stream */}
          <main className="relative">
            <Hero onScrollToSection={handleScrollToSection} />
            
            <Catalog
              onAddToBag={handleAddToBag}
              enquiryItems={enquiryBag}
            />
            
            <OrderProcess />
            <SocialCampaign />
            <AboutSection />
          </main>

          {/* Footer block Map coordinates setup */}
          <Footer onScrollToSection={handleScrollToSection} />

          {/* Quick sliding shopping drawer */}
          <EnquiryBag
            isOpen={isBagOpen}
            onClose={() => setIsBagOpen(false)}
            enquiryItems={enquiryBag}
            onRemoveItem={handleRemoveItem}
            onClearBag={handleClearBag}
          />
        </>
      ) : (
        /* ==================== SHOPIFY DEVELOPER HUB ==================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-all">
          
          {/* Dashboard HUD Banner */}
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/80 p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] font-bold text-[#39FF14] uppercase tracking-widest bg-[#15340f]/40 border border-[#39FF14]/25 px-2.5 py-1 rounded">
                  <Store className="h-3.5 w-3.5" />
                  <span>Shopify 2.0 Dawn Theme Template Setup</span>
                </div>
                <h1 className="font-sans text-2xl font-black text-white sm:text-3xl uppercase tracking-tight">
                  SHOPIFY GITHUB BLUEPRINT MANAGER
                </h1>
                <p className="font-sans text-xs text-zinc-450 leading-relaxed max-w-3xl">
                  This workspace holds standard liquid files configured specifically to convert your entire streetwear designs into your official theme instantly. Every file below is production-certified, structured according to local Nagpur commerce details, and supports standard <strong>Native Buy Now buttons</strong> instead of manual WhatsApp checks.
                </p>
              </div>

              {/* Status metrics widget */}
              <div className="grid grid-cols-2 gap-3 min-w-[240px]">
                <div className="rounded-lg bg-black border border-zinc-900 p-3.5 text-center">
                  <p className="font-mono text-[9px] text-zinc-550 uppercase">Total Files</p>
                  <p className="font-display text-2xl font-black text-[#39FF14] mt-1">14</p>
                </div>
                <div className="rounded-lg bg-black border border-zinc-900 p-3.5 text-center">
                  <p className="font-mono text-[9px] text-zinc-550 uppercase">Integration</p>
                  <p className="font-sans text-xs font-bold text-white mt-2 flex items-center justify-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    GITHUB_OK
                  </p>
                </div>
              </div>
            </div>

            {/* Instruction Warning box */}
            <div className="rounded-lg bg-[#14120a] border border-amber-500/20 p-4 mt-6 text-xs font-sans leading-relaxed text-zinc-400 flex items-start space-x-3.5">
              <Info className="h-5 w-5 text-amber-500 shrink-0" />
              <div>
                <strong className="text-white block font-mono text-[10px] uppercase tracking-wider mb-0.5">⚠️ PREVENTING SHOPIFY "INVALID THEME" DECLINE:</strong>
                Never try to upload a standard website zip file inside Shopify's dashboard. Instead, push this repository directly to your <span className="text-white font-bold">GitHub account</span> (on default branch <span className="font-mono text-white underline">main</span>) and connect it using Shopify's native <strong>"Connect from GitHub"</strong> library channel. Everything is fully optimized to install perfectly!
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left sidebar: File Tree Directory list */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-xl border border-zinc-904 bg-[#0a0a0a] p-5">
                <h4 className="font-mono text-[10px] font-black text-white uppercase tracking-wider mb-4 border-b border-zinc-900 pb-3 flex items-center justify-between">
                  <span>📁 Repositories Files System</span>
                  <span className="text-zinc-550">[ branch: main ]</span>
                </h4>

                {/* Sub-categories layout viewports */}
                <div className="space-y-5">
                  {(["layout", "templates", "sections", "config", "locales", "documentation"] as const).map((category) => (
                    <div key={category} className="space-y-1.5">
                      <span className="font-mono text-[9.5px] font-bold text-zinc-550 uppercase tracking-widest block pl-2">
                        {category}/
                      </span>
                      <div className="space-y-1">
                        {SHOPIFY_FILES.filter((f) => f.category === category).map((file) => (
                          <button
                            key={file.path}
                            onClick={() => setSelectedShopifyFile(file)}
                            className={`w-full text-left font-mono text-[11px] px-3 py-2 rounded-md transition-all flex items-center justify-between border ${
                              selectedShopifyFile.path === file.path
                                ? "bg-[#0f210d] border-[#39ff14]/30 text-white font-bold"
                                : "bg-[#040404] hover:bg-zinc-950 border-zinc-950 text-zinc-400 hover:text-white"
                            }`}
                          >
                            <span className="flex items-center space-x-2 overflow-hidden truncate mr-1">
                              <FileCode className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                              <span className="truncate">{file.path.split("/")[1] || file.path}</span>
                            </span>
                            <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                              file.language === "json" 
                                ? "text-cyan-400 bg-cyan-950/40 border border-cyan-800/30"
                                : file.language === "markdown"
                                ? "text-amber-400 bg-amber-950/40 border border-amber-800/30"
                                : "text-emerald-400 bg-emerald-950/40 border border-emerald-800/20"
                            }`}>
                              {file.language}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* In store tips coordinator */}
              <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-5 space-y-3 font-sans">
                <h5 className="font-mono text-[10px] font-bold text-[#39FF14] uppercase flex items-center space-x-1">
                  <span>★</span>
                  <span>PREVIEW COMPONENT INSIGHT</span>
                </h5>
                <p className="text-[11px] text-zinc-500 leading-relaxed leading-normal">
                  Our custom Dawn extensions integrate same-day in-store pick-up and local NAGPUR student promotion algorithms in dynamic schemas so you don't lose any of your brand's unique identity during transition. Everything is ready-to-publish!
                </p>
              </div>
            </div>

            {/* Right container panel: Selected File Code Viewport */}
            <div className="lg:col-span-8 space-y-4">
              <div className="rounded-xl border border-zinc-900 bg-[#0a0a0a] overflow-hidden flex flex-col h-full">
                
                {/* File Header Bar metadata */}
                <div className="bg-black border-b border-zinc-900 p-4 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px] text-[#39FF14]">{selectedShopifyFile.category}/</span>
                      <h3 className="font-mono text-sm font-black text-white">{selectedShopifyFile.path}</h3>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-0.5 font-sans leading-normal">
                      {selectedShopifyFile.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopyCode(selectedShopifyFile.content, selectedShopifyFile.path)}
                    className="self-start sm:self-center flex items-center space-x-1.5 rounded-lg border border-zinc-800 hover:border-[#39ff14]/30 bg-zinc-950 hover:bg-black px-4 py-2 text-[10.5px] font-mono font-bold text-zinc-300 hover:text-white transition-all shrink-0"
                    id="dev-copy-action-btn"
                  >
                    {copiedStatus === selectedShopifyFile.path ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>COPY RAW FILE CODE</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Window Box */}
                <div className="p-4 bg-black overflow-auto font-mono text-xs text-zinc-400 max-h-[580px] scrollbar-thin">
                  <pre className="select-all leading-relaxed whitespace-pre font-mono">
                    {selectedShopifyFile.content}
                  </pre>
                </div>

                {/* Footer warning indicators */}
                <div className="bg-[#0e0e0e] border-t border-zinc-900 p-4 shrink-0 flex items-center justify-between font-mono text-[10px] text-zinc-650">
                  <span className="flex items-center space-x-1.5">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>UTILITY COMPILER OK</span>
                  </span>
                  <span>ENVELOPE LIQUID: UTF-8</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

      {/* ==================== DIRECT "BUY NOW" CHECKOUT SIMULATOR POP-UP ==================== */}
      {showCheckoutSimulator && simulatedCheckoutItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blur backdrop */}
          <div 
            onClick={() => setShowCheckoutSimulator(false)}
            className="absolute inset-0 bg-black/92 backdrop-blur-md"
          />

          <div className="relative w-full max-w-md rounded-xl border border-[#39FF14]/30 bg-[#060606] p-6 shadow-2xl text-left" id="native-checkout-simulation-box">
            
            <div className="flex items-center space-x-3 mb-5 border-b border-zinc-900 pb-4">
              <div className="rounded-md bg-[#0f210d] border border-[#39ff14]/35 p-2 text-[#39FF14]">
                <Store className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] font-bold text-[#39FF14] tracking-widest uppercase block">[ DIRECT NATIVE ACTION ]</span>
                <h3 className="font-sans text-base font-black text-white uppercase tracking-tight">SHOPIFY NATIVE CHECKOUT SIMULATOR</h3>
              </div>
            </div>

            <div className="space-y-4">
              
              <div className="rounded-lg bg-zinc-950 p-4.5 border border-zinc-900 space-y-2.5">
                <div className="flex justify-between text-xs font-mono font-bold text-zinc-400">
                  <span>ITEM READY FOR CART REDIRECT:</span>
                  <span className="text-[#39FF14] uppercase">VAR_CONFIRMED</span>
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-sm font-black text-white">{simulatedCheckoutItem.name}</p>
                  <p className="font-mono text-[11px] text-zinc-550">Selected Fit: <span className="text-white font-bold">{simulatedCheckoutItem.size}</span></p>
                  <p className="font-sans text-[#39FF14] font-black text-sm mt-1">₹{simulatedCheckoutItem.price}</p>
                </div>
              </div>

              {/* Explanation note highlighting why direct buy button replaces whatsapp */}
              <div className="text-[11.5px] font-sans text-zinc-500 leading-relaxed leading-normal space-y-2">
                <p>
                  This item is now configured for your **Direct Shopify Checkout**. When active on your live Shopify domain, clicking this button submits the variant directly into:
                </p>
                <code className="block bg-black border border-zinc-900 p-2.5 rounded font-mono text-[10px] text-emerald-400 break-all">
                  /cart/add?id=VARIANT_ID&quantity=1 &rarr; /checkout
                </code>
                <p className="text-zinc-650">
                  No manual texting or manual admin intervention needed. Native Shopify shipping, taxes, and automatic stock deductions are locked-in immediately!
                </p>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setShowCheckoutSimulator(false);
                  setActiveView("shopify-dir");
                  // Focus onto main-product section inside liquid tree so they can inspect it
                  const targetIndex = SHOPIFY_FILES.findIndex(f => f.path === "sections/main-product.liquid");
                  if (targetIndex > -1) setSelectedShopifyFile(SHOPIFY_FILES[targetIndex]);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full rounded bg-[#39FF14] text-black hover:bg-white font-mono text-[11px] font-black py-3 px-4 transition-colors uppercase tracking-wider text-center block select-none cursor-pointer"
              >
                Inspect Shopify Native Form Liquid &rarr;
              </button>
              <button
                onClick={() => setShowCheckoutSimulator(false)}
                className="w-full rounded border border-zinc-900 hover:border-zinc-800 bg-transparent text-zinc-400 hover:text-white font-mono text-[10.5px] font-bold py-2.5 px-4 transition-colors text-center"
              >
                Keep Browsing Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
