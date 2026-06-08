import React, { useState } from "react";
import { Plus, Minus, Check, ShoppingBag, Sparkles, Flame, Tag, HelpCircle, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS, BUNDLE_DEAL } from "../data/products";
import { Product, EnquiryItem } from "../types";

interface CatalogProps {
  onAddToBag: (item: EnquiryItem) => void;
  enquiryItems: EnquiryItem[];
}

export default function Catalog({ onAddToBag, enquiryItems }: CatalogProps) {
  // Selected category filter
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Selection configurations corresponding to product IDs
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedAnimations, setAddedAnimations] = useState<Record<string, boolean>>({});

  const categories = ["All", "Jerseys", "Cargos", "Oversized Tees", "Shirts"];
  const standardSizes = ["S", "M", "L", "XL", "XXL"];

  // Filters the product grid based on clicked tab group
  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleColorSelect = (productId: string, color: string) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: color }));
  };

  const changeQuantity = (productId: string, amount: number) => {
    const currentVal = quantities[productId] || 1;
    const finalVal = Math.max(1, currentVal + amount);
    setQuantities((prev) => ({ ...prev, [productId]: finalVal }));
  };

  const executeAddAction = (prod: Product) => {
    const size = selectedSizes[prod.id] || "L";
    const color = selectedColors[prod.id] || prod.colors[0];
    const qty = quantities[prod.id] || 1;

    onAddToBag({
      productId: prod.id,
      productName: prod.name,
      category: prod.category,
      size,
      color,
      price: prod.price,
      quantity: qty
    });

    // Fire success micro-animation
    setAddedAnimations((prev) => ({ ...prev, [prod.id]: true }));
    setTimeout(() => {
      setAddedAnimations((prev) => ({ ...prev, [prod.id]: false }));
    }, 1500);
  };

  // Determine aggregate totals for bundle check
  const totalItemCountInBag = enquiryItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const isBundleUnlocked = totalItemCountInBag >= 3;
  const bundleReminder = 3 - (totalItemCountInBag % 3);

  return (
    <section id="collection" className="bg-[#050505] py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-950">
      <div className="mx-auto max-w-7xl">
        
        {/* Combo deal status box */}
        <div className="mb-14 rounded-lg border border-[#39FF14]/20 bg-[#0d1c07] p-4.5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39FF14] opacity-75"></span>
                <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[#39FF14]"></span>
              </span>
              <div>
                <p className="font-mono text-[9px] font-bold text-[#39FF14] uppercase tracking-wider">[ NAGPUR EXCLUSIVE BLUEPRINT ]</p>
                <h4 className="font-sans text-sm font-black text-white uppercase tracking-tight">
                  {BUNDLE_DEAL.description}
                </h4>
              </div>
            </div>

            {/* Live Progress Bar for maximum conversions */}
            <div className="flex items-center space-x-3.5 font-mono text-[11px] text-zinc-300">
              {isBundleUnlocked ? (
                <div className="rounded bg-[#39FF14] px-3 py-1 font-extrabold text-black flex items-center space-x-1.5 shadow-[0_0_12px_rgba(57,255,20,0.3)]">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                  <span>PROMO DEAL SECURED: ₹999 APPLIED!</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-zinc-500">Selected: <span className="text-white font-bold">{totalItemCountInBag}/3</span></span>
                  <span className="text-[#39FF14] font-bold">({bundleReminder} more to unlock ₹999 deal!)</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] font-bold tracking-widest text-[#39FF14] uppercase">
              <Layers className="h-4 w-4" />
              <span>THE EXCLUSIVE DIGITAL DIRECTORY</span>
            </div>
            
            <h2 className="font-sans text-4xl font-black tracking-tight text-white sm:text-5xl" id="catalog-main-title">
              SHOP ALL CLASSICS <br />
              <span className="text-zinc-500">DEALS ON PREMIUM FABRICS</span>
            </h2>
            
            <p className="font-sans text-xs leading-relaxed text-zinc-500 sm:text-sm">
              We source high-durability textiles that live up to the hustle of college squads. Explore individual pieces, configure yours, and send a consolidated bag check directly to Nagpur City Center.
            </p>
          </div>

          {/* Quick-Filter Selector Links */}
          <div className="mt-8 md:mt-0 overflow-x-auto pb-2 scrollbar-none flex gap-2" id="catalog-category-scroller">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-full px-5 py-2 font-mono text-[11px] font-bold tracking-wider transition-all shadow-md shrink-0 border uppercase ${
                  activeCategory === c
                    ? "bg-[#39FF14] text-black border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                    : "bg-zinc-950 text-zinc-400 border-zinc-900 hover:text-white hover:border-zinc-700"
                }`}
                id={`filter-tab-${c.toLowerCase().replace(" ", "-")}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="products-catalog-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, index) => {
              const currentSize = selectedSizes[prod.id] || "L";
              const currentColor = selectedColors[prod.id] || prod.colors[0];
              const currentQty = quantities[prod.id] || 1;
              const isAdded = addedAnimations[prod.id] || false;

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950 p-3 transition-colors hover:border-[#39FF14]/30"
                  id={`product-card-${prod.id}`}
                >
                  
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-zinc-900">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="h-full w-full object-cover grayscale brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-105"
                      referrerPolicy="no-referrer"
                      id={`catalog-img-${prod.id}`}
                    />
                    
                    {/* Shadow overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    
                    {/* Category Label overlay */}
                    <span className="absolute top-3 left-3 rounded-full bg-black/80 px-2.5 py-1 font-mono text-[9px] font-bold text-zinc-400 border border-zinc-900 uppercase">
                      {prod.category}
                    </span>

                    {/* Best-Seller Label */}
                    {prod.isBestSeller && (
                      <span className="absolute top-3 right-3 rounded bg-[#39FF14] text-black font-mono text-[8px] font-black px-1.5 py-0.5 tracking-wider uppercase">
                        POPULAR CHOICE
                      </span>
                    )}

                    {/* Pricing Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/85 p-2 rounded border border-zinc-900">
                      <div>
                        <p className="font-mono text-[8px] text-zinc-400">STUDENT PRICE</p>
                        <p className="font-sans text-xs font-black text-white">₹{prod.price} <span className="font-mono text-[10px] text-zinc-500 line-through">₹{prod.originalPrice}</span></p>
                      </div>
                      <span className="rounded bg-emerald-950/80 border border-emerald-500/20 px-1.5 py-0.5 font-sans text-[10px] font-extrabold text-emerald-400">
                        {Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)}% DISCOUNT
                      </span>
                    </div>

                  </div>

                  {/* Descriptions with custom GenZ copy */}
                  <div className="pt-4 flex-1 flex flex-col justify-between space-y-4">
                    
                    <div className="space-y-1.5">
                      <h3 className="font-sans text-base font-black text-white uppercase tracking-tight group-hover:text-[#39FF14] transition-colors">
                        {prod.name}
                      </h3>
                      <p className="font-sans text-[10.5px] leading-relaxed text-zinc-500 h-[72px] overflow-y-auto pr-1">
                        {prod.description}
                      </p>
                    </div>

                    {/* Technical detail lists */}
                    <div className="space-y-2 border-t border-zinc-900/60 pt-3">
                      <div className="font-mono text-[8px] font-bold text-[#39FF14] tracking-widest uppercase">SPEC DETAILS:</div>
                      <div className="flex flex-wrap gap-1">
                        {prod.features.slice(0, 2).map((feat, i) => (
                          <span key={i} className="rounded bg-zinc-900/60 border border-zinc-900 px-2 py-0.5 font-sans text-[9px] text-zinc-400 truncate max-w-full">
                            • {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* size selector config */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Select Fit Frame:</label>
                      <div className="flex gap-1" id={`sizes-select-${prod.id}`}>
                        {standardSizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSizeSelect(prod.id, sz)}
                            className={`h-6 w-full max-w-[40px] rounded text-[9.5px] font-mono transition-all font-bold ${
                              currentSize === sz
                                ? "bg-[#39FF14] text-black"
                                : "bg-zinc-900 text-zinc-450 hover:text-white"
                            }`}
                            id={`size-${prod.id}-${sz}`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* color selector config */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Select Tone Shade:</label>
                      <div className="flex flex-wrap gap-1" id={`colors-select-${prod.id}`}>
                        {prod.colors.map((clr) => (
                          <button
                            key={clr}
                            onClick={() => handleColorSelect(prod.id, clr)}
                            className={`rounded px-2.5 py-1 text-[9px] font-mono border transition-all ${
                              currentColor === clr
                                ? "bg-[#10240d] border-[#39FF14]/40 text-[#39ff14] font-bold"
                                : "bg-zinc-900 border-transparent text-zinc-400 hover:text-white"
                            }`}
                            id={`color-${prod.id}-${clr.replace(" ", "-")}`}
                          >
                            {clr}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Adjustment + Adding buttons */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                        <span>Quantity Frame:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => changeQuantity(prod.id, -1)}
                            className="flex h-5.5 w-5.5 items-center justify-center rounded bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center font-mono text-[11px] font-bold text-white">{currentQty}</span>
                          <button
                            onClick={() => changeQuantity(prod.id, 1)}
                            className="flex h-5.5 w-5.5 items-center justify-center rounded bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => executeAddAction(prod)}
                        className={`w-full flex items-center justify-center space-x-2 rounded py-3 font-mono text-xs font-black transition-all ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-neutral-100 hover:text-black hover:border-white"
                        }`}
                        id={`add-cta-${prod.id}`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="h-4 w-4 animate-bounce shrink-0" />
                            <span>ADDED TO BAG!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="h-4 w-4 shrink-0" />
                            <span>ADD TO ENQUIRY BAG</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
