import React from "react";
import { X, Trash2, MessageCircle, Send, Sparkles, ShoppingBag, CheckCircle2, Ticket } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EnquiryItem } from "../types";
import { CONTACT_CHANNELS } from "../data/products";

interface EnquiryBagProps {
  isOpen: boolean;
  onClose: () => void;
  enquiryItems: EnquiryItem[];
  onRemoveItem: (index: number) => void;
  onClearBag: () => void;
}

export default function EnquiryBag({ isOpen, onClose, enquiryItems, onRemoveItem, onClearBag }: EnquiryBagProps) {
  
  const totalItemCount = enquiryItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Compute normal cost
  const normalTotalPrice = enquiryItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  // Compute promo bundle cost of "3 for ₹999"
  // Each set of 3 items gets grouped into ₹999. Remaining items are priced at their normal value.
  const calculateBundlePrice = () => {
    let quantityCounter = totalItemCount;
    let finalBundleCost = 0;

    // Get flat array of single item prices in bag to sort and compute optimally
    const singlePrices: number[] = [];
    enquiryItems.forEach(item => {
      for (let i = 0; i < item.quantity; i++) {
        singlePrices.push(item.price);
      }
    });

    // Sort prices descending so the customer gets the optimal discount on higher priced items! (e.g. Cargos at 499!)
    singlePrices.sort((a, b) => b - a);

    const bundleSetsCount = Math.floor(quantityCounter / 3);
    const remainderCount = quantityCounter % 3;

    // Standard bundle sets cost (groups of 3 cost flat ₹999)
    finalBundleCost += bundleSetsCount * 999;
    
    // Remaining items cost normally (cheapest ones left over)
    const leftoverPrices = singlePrices.slice(bundleSetsCount * 3);
    const leftoverCost = leftoverPrices.reduce((sum, val) => sum + val, 0);
    
    finalBundleCost += leftoverCost;
    return {
      bundleCost: finalBundleCost,
      originalCost: normalTotalPrice,
      savings: Math.max(0, normalTotalPrice - finalBundleCost),
      bundleSetsCount
    };
  };

  const { bundleCost, savings, bundleSetsCount } = calculateBundlePrice();

  // Highlight if promo is triggered
  const isPromoTriggered = totalItemCount >= 3;

  // Compile WhatsApp text template
  const compileWhatsAppMessage = () => {
    let msg = `🔥 *ESCAPE CLOTHING 17 - STREETWEAR BLUEPRINT ENQUIRY* 🔥\n\n`;
    msg += `Hey Escape Team! I just checked out your modern launch page and love your deals on fabric. I would like to lock in the following streetwear pieces:\n\n`;
    
    enquiryItems.forEach((item, index) => {
      msg += `📍 *Fit ${index + 1}: ${item.productName}*\n`;
      msg += `   • Size: ${item.size} | Color: ${item.color}\n`;
      msg += `   • Quantity: ${item.quantity}pc(s) (₹${item.price} each)\n\n`;
    });

    msg += `📊 *SUMMARY QUANTITY CHARGES:*\n`;
    msg += `   • Total Pieces: ${totalItemCount}\n`;
    if (isPromoTriggered) {
      msg += `   • Combo Applied: Nagpur "3 items for ₹999" Promo Unlocked! ✅\n`;
      msg += `   • Est. Bundle Ticket Cost: *₹${bundleCost}* (Saved ₹${savings}!)\n\n`;
    } else {
      msg += `   • Est. Standard Ticket Cost: *₹${bundleCost}*\n`;
      msg += `   • _💡 tip: add ${3 - totalItemCount} more fit items to unlock Nagpur "3 for ₹999" deal!_\n\n`;
    }

    msg += `Could you please confirm if these exact fits are currently on rack at your *City Center, Nagpur* store? I want to confirm address details. Cheers!`;
    return encodeURIComponent(msg);
  };

  const handleSendWhatsApp = (number: string) => {
    const textEncoded = compileWhatsAppMessage();
    const url = `https://wa.me/${number.replace("+", "")}?text=${textEncoded}`;
    window.open(url, "_blank");
  };

  const handleInstagramDM = () => {
    window.open("https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
            id="bag-backdrop"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[480px] flex-col border-l border-zinc-900 bg-[#070707] shadow-2xl"
            id="bag-drawer"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-950 p-6 bg-black">
              <div className="flex items-center space-x-2.5">
                <ShoppingBag className="h-5 w-5 text-[#39FF14]" />
                <h2 className="font-mono text-xs font-black tracking-widest text-white uppercase">[ MY URBAN Blueprints ]</h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
                id="close-bag-drawer-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* List area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {enquiryItems.length === 0 ? (
                <div className="flex h-[55vh] flex-col items-center justify-center space-y-4 text-center">
                  <div className="rounded-full bg-zinc-950 border border-zinc-900 p-5">
                    <ShoppingBag className="h-10 w-10 text-zinc-800" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold text-zinc-300 uppercase">[ COLD STORAGE EMPTY ]</h3>
                    <p className="mx-auto mt-2 max-w-[250px] font-sans text-xs leading-relaxed text-zinc-650">
                      Vibe check says you haven't added any streetwear blueprints yet. Browse the lineup to load up selection drops.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded bg-[#39FF14] text-black hover:bg-white font-mono text-[11px] font-black px-5 py-2.5 transition-colors"
                  >
                    DEPLOY COLLECTION DROPS
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-900/60 pb-3">
                    <span className="font-mono text-[10px] text-zinc-400">BAG DETAILS: {totalItemCount} streetwear drops</span>
                    <button
                      onClick={onClearBag}
                      className="font-mono text-[10px] text-zinc-500 hover:text-red-500 transition-colors"
                      id="clear-bag-btn"
                    >
                      Empty Bag List
                    </button>
                  </div>

                  {/* List Container */}
                  <div className="space-y-3">
                    {enquiryItems.map((item, index) => (
                      <motion.div
                        key={`${item.productId}-${item.size}-${item.color}-${index}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between rounded-lg border border-zinc-900 bg-zinc-950/40 p-4 hover:border-zinc-850"
                        id={`bag-item-${index}`}
                      >
                        <div className="space-y-1.5 max-w-[80%]">
                          <span className="inline-block rounded bg-zinc-900 border border-zinc-850 px-2 py-0.5 font-mono text-[8px] text-[#39FF14] uppercase">
                            {item.category}
                          </span>
                          <h4 className="font-sans text-xs font-black text-white">{item.productName}</h4>
                          <div className="flex items-center space-x-2 font-mono text-[9px] text-zinc-500">
                            <span>SIZE: <span className="text-white font-bold">{item.size}</span></span>
                            <span>•</span>
                            <span>TONE: <span className="text-white font-bold">{item.color}</span></span>
                            <span>•</span>
                            <span>QTY: <span className="text-[#39FF14] font-bold">{item.quantity}x</span></span>
                          </div>
                        </div>

                        <div className="text-right flex flex-col items-end justify-between space-y-2 h-full">
                          <span className="font-sans text-xs font-bold text-white">₹{item.price * item.quantity}</span>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="rounded p-1.5 text-zinc-650 transition-colors hover:bg-red-950/20 hover:text-red-500"
                            id={`remove-bag-item-${index}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bundle check calculation widget */}
                  <div className="rounded-lg border border-zinc-900 bg-zinc-950 p-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                      <div className="flex items-center space-x-1.5">
                        <Ticket className="h-4 w-4 text-[#39FF14]" />
                        <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">Nagpur Bundle Calculation:</span>
                      </div>
                      <span className="rounded bg-black border border-zinc-800 px-2 py-0.5 font-mono text-[9px] text-zinc-400 font-bold">PROMO ACTIVE</span>
                    </div>

                    <div className="space-y-1 text-xs font-sans">
                      <div className="flex justify-between text-zinc-500">
                        <span>Aggregate Base Price:</span>
                        <span>₹{normalTotalPrice}</span>
                      </div>
                      
                      {isPromoTriggered && (
                        <div className="flex justify-between text-[#39FF14] font-bold">
                          <span>3-for-₹999 Promo Discount:</span>
                          <span>-₹{savings}</span>
                        </div>
                      )}

                      <div className="flex justify-between border-t border-zinc-900 pt-2 text-white font-bold text-sm">
                        <span>Estimated Ticket Cost:</span>
                        <span className="text-[#39FF14]">₹{bundleCost}</span>
                      </div>
                    </div>

                    {isPromoTriggered ? (
                      <div className="flex items-center space-x-1.5 rounded-md bg-[#0e210a] border border-[#39ff14]/20 p-2.5 font-sans text-[10px] text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-[#39ff14] shrink-0" />
                        <p>
                          <span className="text-[#39ff14] font-bold">Combo Activated!</span> Sourced utilizing {bundleSetsCount} set(s) of 3-for-999 packages. Excellent choice.
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-start space-x-1.5 rounded-md bg-zinc-900 p-2.5 font-sans text-[10px] text-zinc-400">
                        <span className="text-[#39ff14]">★</span>
                        <p>
                          Add <span className="text-white font-bold">{3 - totalItemCount} more item{3 - totalItemCount > 1 ? 's' : ''}</span> to automatically trigger the Nagpur campus promo rate flat ₹999 combo discount!
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            {/* Sticky Actions Footer */}
            {enquiryItems.length > 0 && (
              <div className="border-t border-zinc-900 bg-black/50 p-6 space-y-4">
                
                <div className="rounded-lg bg-zinc-950 p-4 border border-zinc-900 space-y-3">
                  <div className="flex items-center space-x-2 border-b border-zinc-900 pb-2">
                    <Sparkles className="h-4 w-4 text-[#39FF14] shrink-0" />
                    <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">CHOOSE NAGPUR ASSOCIATE:</span>
                  </div>

                  <p className="font-sans text-[10px] leading-normal text-zinc-500">
                    Instantly compiles and pre-formats your list to WhatsApp. Direct matching fitting assistance.
                  </p>

                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {CONTACT_CHANNELS.map((chan) => (
                      <button
                        key={chan.number}
                        onClick={() => handleSendWhatsApp(chan.number)}
                        className="flex items-center justify-between rounded border border-zinc-900 bg-black hover:border-[#39FF14]/40 hover:bg-[#070c06] p-2.5 text-left font-mono text-[10.5px] transition-colors"
                        id={`wa-chan-${chan.number}`}
                      >
                        <div>
                          <p className="font-bold text-white text-[11px]">{chan.name}</p>
                          <p className="text-[9px] text-zinc-550">{chan.display}</p>
                        </div>
                        <div className="flex items-center space-x-1.5 rounded bg-[#10240d] border border-[#39ff14]/20 px-2 py-1 text-[9px] font-bold text-[#39FF14]">
                          <MessageCircle className="h-3.5 w-3.5 fill-[#39FF14]/10" />
                          <span>SEND FIT</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleInstagramDM}
                  className="w-full flex items-center justify-center space-x-2 rounded bg-zinc-950 hover:bg-zinc-900 text-white py-3.5 font-mono text-[11px] font-bold transition-all border border-zinc-900 hover:border-zinc-800"
                  id="ig-fallback-btn"
                >
                  <Send className="h-4 w-4 text-zinc-500" />
                  <span>PREFER INSTAGRAM DIRECT DM instead</span>
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
