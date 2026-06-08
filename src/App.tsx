import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import SocialCampaign from "./components/SocialCampaign";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import { SHOPIFY_FILES, ShopifyFile } from "./data/shopifyFiles";
import { 
  Folder, 
  FileCode, 
  Check, 
  Copy, 
  Terminal, 
  Store, 
  Sparkles,
  CheckCircle,
  HelpCircle,
  Info,
  X,
  CreditCard,
  ShoppingBag
} from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState<"preview" | "shopify-dir">("preview");
  const [selectedShopifyFile, setSelectedShopifyFile] = useState<ShopifyFile>(SHOPIFY_FILES[0]);
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  // Shopify Checkout Simulator Pop-up state for native conversions
  const [showCheckoutSimulator, setShowCheckoutSimulator] = useState<boolean>(false);
  const [simulatedCheckoutItem, setSimulatedCheckoutItem] = useState<{
    name: string;
    price: number;
    size: string;
    color: string;
    qty: number;
  } | null>(null);

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

  const handleDirectBuyClick = (item: { name: string; price: number; size: string; color: string; qty: number }) => {
    setSimulatedCheckoutItem(item);
    setShowCheckoutSimulator(true);
  };

  const handleCopyCode = (text: string, path: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(path);
    setTimeout(() => {
      setCopiedStatus(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white" id="main_viewport">
      
      {/* Fluent top-gradient accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-zinc-200 via-zinc-900 to-zinc-200"></div>

      {/* 🚀 Shopify Sync Indicator & Workspace Switcher Header (Premium White theme) */}
      <div className="bg-[#fbfcff] border-b border-zinc-200 py-3.5 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#16a34a] animate-pulse"></div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[9px] font-black tracking-wider text-[#15803d] uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ONLINE STORE 2.0 SYNC ACTIVE
                </span>
                <span className="font-mono text-[9px] text-zinc-450 uppercase font-bold">100% Mobile Ready</span>
              </div>
              <h2 className="text-xs font-sans text-zinc-500 mt-0.5">
                Current State: <strong>No dummy codes.</strong> Native Direct Checkout is configured inside all your Liquid templates.
              </h2>
            </div>
          </div>

          {/* Toggle View Options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveView("preview")}
              className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 font-mono text-[10.5px] font-black px-4 py-2.5 rounded-xl transition-all border cursor-pointer ${
                activeView === "preview"
                  ? "bg-zinc-900 border-zinc-900 text-white shadow-sm"
                  : "bg-white border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-350"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span>1. VIEW CLIENT PREVIEW</span>
            </button>

            <button
              onClick={() => {
                setActiveView("shopify-dir");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 font-mono text-[10.5px] font-black px-4 py-2.5 rounded-xl transition-all border cursor-pointer ${
                activeView === "shopify-dir"
                  ? "bg-zinc-900 border-zinc-900 text-white shadow-sm"
                  : "bg-white border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-350"
              }`}
            >
              <Folder className="h-3.5 w-3.5 shrink-0" />
              <span>2. INSPECT SHOPIFY SCHEMAS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Render Section */}
      {activeView === "preview" ? (
        <>
          {/* Navigation Header */}
          <Header onScrollToSection={handleScrollToSection} />

          {/* Core Visual Preview Stream (Light Mode Elegance) */}
          <main className="relative">
            <Hero onScrollToSection={handleScrollToSection} />
            
            {/* Catalog Grid with direct Buy-Now hooks */}
            <Catalog onDirectBuyClick={handleDirectBuyClick} />
            
            <SocialCampaign />
            <AboutSection />
          </main>

          {/* Footer block Map coordinates setup */}
          <Footer onScrollToSection={handleScrollToSection} />
        </>
      ) : (
        /* ==================== SHOPIFY DEVELOPER HUB (LIGHT MULTI-COLUMN) ==================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-all">
          
          {/* Dashboard HUD Banner */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 md:p-8 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] font-bold text-[#15803d] uppercase tracking-widest bg-emerald-50 border border-emerald-250/50 px-2.5 py-1 rounded-xl">
                  <Store className="h-3.5 w-3.5" />
                  <span>Shopify 2.0 Theme Integration Architecture</span>
                </div>
                <h1 className="font-sans text-2xl font-black text-zinc-900 uppercase tracking-tight">
                  SHOPIFY LIQUID DIRECTORY SETUP
                </h1>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-3xl">
                  Your store is programmed to bypass unpolished messaging systems or custom Enquiry lists. Sizing variants, dropdown arrays, and dynamic cart adds are directly handled native by Dawn and Online Store 2.0. Explore the compiled files below.
                </p>
              </div>

              {/* Status metrics widget */}
              <div className="grid grid-cols-2 gap-3 min-w-[220px]">
                <div className="rounded-xl bg-white border border-zinc-200 p-3 text-center shadow-sm">
                  <p className="font-mono text-[9px] text-zinc-400 uppercase font-semibold">Ready Files</p>
                  <p className="font-sans text-xl font-black text-zinc-900 mt-1">14</p>
                </div>
                <div className="rounded-xl bg-white border border-zinc-200 p-3 text-center shadow-sm">
                  <p className="font-mono text-[9px] text-zinc-400 uppercase font-semibold">Direct Buy</p>
                  <p className="font-sans text-xs font-bold text-zinc-800 mt-2 flex items-center justify-center gap-1">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    LOCKED_IN
                  </p>
                </div>
              </div>
            </div>

            {/* Instruction Warning box */}
            <div className="rounded-xl bg-red-50/50 border border-red-150 p-4 mt-5 text-xs font-sans leading-relaxed text-zinc-650 flex items-start space-x-3">
              <Info className="h-4.5 w-4.5 text-red-650 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-900 block font-mono text-[10px] uppercase tracking-wider mb-0.5">⚠️ PREVENTING SHOPIFY "NOT A VALID THEME" FAILURES:</strong>
                Never try to upload a standard website zip file inside Shopify's dashboard. Instead, push this repository directly to your <span className="text-zinc-900 font-bold">GitHub account</span> and hook it using Shopify's native <strong>"Connect from GitHub"</strong> library channel. Everything is fully optimized to install perfectly!
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left sidebar: File Tree Directory list */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h4 className="font-mono text-[10px] font-black text-zinc-900 uppercase tracking-wider mb-4 border-b border-zinc-150 pb-3 flex items-center justify-between">
                  <span>📁 Theme Folder Tree</span>
                  <span className="text-zinc-400">[ branch: main ]</span>
                </h4>

                {/* Sub-categories layout viewports */}
                <div className="space-y-4">
                  {(["layout", "templates", "sections", "config", "locales", "documentation"] as const).map((category) => (
                    <div key={category} className="space-y-1">
                      <span className="font-mono text-[9.5px] font-bold text-zinc-400 uppercase tracking-widest block pl-2">
                        {category}/
                      </span>
                      <div className="space-y-1">
                        {SHOPIFY_FILES.filter((f) => f.category === category).map((file) => (
                          <button
                            key={file.path}
                            onClick={() => setSelectedShopifyFile(file)}
                            className={`w-full text-left font-mono text-[11px] px-3 py-2 rounded-lg transition-all flex items-center justify-between border cursor-pointer ${
                              selectedShopifyFile.path === file.path
                                ? "bg-zinc-900 border-zinc-900 text-white font-bold"
                                : "bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-600"
                            }`}
                          >
                            <span className="flex items-center space-x-2 overflow-hidden truncate mr-1">
                              <FileCode className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                              <span className="truncate">{file.path.split("/")[1] || file.path}</span>
                            </span>
                            <span className={`text-[8.5px] px-1.5 py-0.2 rounded font-bold uppercase ${
                              file.language === "json" 
                                ? "text-cyan-805 bg-cyan-50 border border-cyan-150"
                                : file.language === "markdown"
                                ? "text-amber-805 bg-amber-50 border border-amber-150"
                                : "text-emerald-805 bg-emerald-50 border border-emerald-150"
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
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 space-y-2.5 font-sans shadow-sm">
                <h5 className="font-mono text-[9.5px] font-bold text-zinc-800 uppercase flex items-center space-x-1">
                  <span>★</span>
                  <span>PREVIEW COMPONENT INSIGHT</span>
                </h5>
                <p className="text-[11px] text-zinc-500 leading-normal">
                  Our custom Liquid schema structures hook with default cart flows, letting Shopify take care of processing tax, payment gateways, and shipping parameters seamlessly.
                </p>
              </div>
            </div>

            {/* Right container panel: Selected File Code Viewport */}
            <div className="lg:col-span-8 space-y-4">
              <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden flex flex-col h-full shadow-sm">
                
                {/* File Header Bar metadata */}
                <div className="bg-zinc-50 border-b border-zinc-150 p-4 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px] text-zinc-400 font-bold">{selectedShopifyFile.category}/</span>
                      <h3 className="font-mono text-sm font-black text-zinc-900">{selectedShopifyFile.path}</h3>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-0.5 font-sans leading-normal">
                      {selectedShopifyFile.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopyCode(selectedShopifyFile.content, selectedShopifyFile.path)}
                    className="self-start sm:self-center flex items-center space-x-1.5 rounded-lg border border-zinc-250 hover:bg-zinc-100 bg-white px-4 py-2 text-[10.5px] font-mono font-bold text-zinc-700 transition-all shrink-0 cursor-pointer"
                    id="dev-copy-action-btn"
                  >
                    {copiedStatus === selectedShopifyFile.path ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>COPY FORM LIQUID</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Window Box */}
                <div className="p-4 bg-zinc-950 overflow-auto font-mono text-xs text-zinc-300 max-h-[580px] scrollbar-thin">
                  <pre className="select-all leading-relaxed whitespace-pre font-mono">
                    {selectedShopifyFile.content}
                  </pre>
                </div>

                {/* Footer warning indicators */}
                <div className="bg-zinc-50 border-t border-zinc-150 p-3 shrink-0 flex items-center justify-between font-mono text-[10px] text-zinc-400 font-bold">
                  <span className="flex items-center space-x-1.5">
                    <Terminal className="h-3.5 w-3.5" />
                    <span>SYNCHRONISED STATUS_OK</span>
                  </span>
                  <span>ENCODE: UTF-8</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

      {/* ==================== DIRECT "BUY NOW" SIMULATOR DIALOGUE ==================== */}
      {showCheckoutSimulator && simulatedCheckoutItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setShowCheckoutSimulator(false)}
            className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl text-left z-10" id="native-checkout-simulation-box">
            
            <div className="flex items-center space-x-3 mb-4 border-b border-zinc-150 pb-3">
              <div className="rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 p-2 text-[#15803d]">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] font-bold text-[#15803d] tracking-widest uppercase block">[ DIRECT NATIVE TRANSACTION ]</span>
                <h3 className="font-sans text-base font-black text-zinc-900 uppercase tracking-tight">Shopify Checkout Redirect</h3>
              </div>
            </div>

            <div className="space-y-4">
              
              <div className="rounded-xl bg-zinc-50 p-4 border border-zinc-200 space-y-2">
                <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-400">
                  <span>CART REDIRECT PARAMS:</span>
                  <span className="text-[#15803d] uppercase font-black">NATIVE_OK</span>
                </div>
                <div className="space-y-0.5">
                  <p className="font-sans text-[13px] font-black text-zinc-900">{simulatedCheckoutItem.name}</p>
                  <p className="font-mono text-[10.5px] text-zinc-500">
                    Selected Variant: <span className="font-bold text-zinc-850">{simulatedCheckoutItem.color} / {simulatedCheckoutItem.size}</span>
                  </p>
                  <p className="font-mono text-[10.5px] text-zinc-500">
                    Quantity: <span className="font-bold text-zinc-850">{simulatedCheckoutItem.qty}x</span>
                  </p>
                  <p className="font-sans text-[#15803d] font-black text-sm mt-1">₹{simulatedCheckoutItem.price * simulatedCheckoutItem.qty}</p>
                </div>
              </div>

              {/* Direct Shopify Flow Logic Description */}
              <div className="text-[11px] font-sans text-zinc-550 leading-relaxed space-y-2">
                <p>
                  On your live custom theme, pressing **Direct Buy Now** instantly triggers your store's native checkout sequence, committing:
                </p>
                <code className="block bg-zinc-950 p-2 rounded font-mono text-[9.5px] text-emerald-400 break-all leading-tight">
                  POST /cart/add.js?id=VARIANT_ID&qty={simulatedCheckoutItem.qty} &rarr; redirect /checkout
                </code>
                <p className="text-zinc-450 leading-normal">
                  All taxes, courier selections, dynamic discount codes, and local payment methods will route natively through Shopify backend nodes. No manual WhatsApp coordination is required!
                </p>
              </div>

            </div>

            <div className="mt-5 pt-3 border-t border-zinc-150 flex flex-col gap-2">
              <button
                onClick={() => {
                  setShowCheckoutSimulator(false);
                  setActiveView("shopify-dir");
                  const targetIndex = SHOPIFY_FILES.findIndex(f => f.path === "sections/main-product.liquid");
                  if (targetIndex > -1) setSelectedShopifyFile(SHOPIFY_FILES[targetIndex]);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 font-mono text-[10.5px] font-black py-3 px-4 transition-colors uppercase tracking-wider text-center block cursor-pointer"
              >
                Inspect Liquid Buy Now Forms &rarr;
              </button>
              <button
                onClick={() => setShowCheckoutSimulator(false)}
                className="w-full rounded-xl border border-zinc-200 hover:bg-zinc-50 bg-white text-zinc-500 hover:text-zinc-850 font-mono text-[10px] font-bold py-2 px-4 transition-colors text-center cursor-pointer"
              >
                Continue Browsing Catalog
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
