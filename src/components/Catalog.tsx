import React, { useState } from "react";
import { Plus, Minus, Tag, Sparkles, Layers, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS, BUNDLE_DEAL } from "../data/products";
import { Product } from "../types";

interface CatalogProps {
  onDirectBuyClick: (item: { name: string; price: number; size: string; color: string; qty: number }) => void;
}

export default function Catalog({ onDirectBuyClick }: CatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Sizing and options states mapped to product IDs
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const categories = ["All", "Jerseys", "Cargos", "Oversized Tees", "Shirts"];
  const standardSizes = ["S", "M", "L", "XL", "XXL"];

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

  const executePurchaseSim = (prod: Product) => {
    const size = selectedSizes[prod.id] || "L";
    const color = selectedColors[prod.id] || prod.colors[0];
    const qty = quantities[prod.id] || 1;

    // Trigger instant Parent Simulation Modal
    onDirectBuyClick({
      name: prod.name,
      price: prod.price,
      size,
      color,
      qty
    });
  };

  return (
    <section id="collection" className="bg-[#fbfcff] py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl">
        
        {/* Soft Dynamic Bundle Notice Box */}
        <div className="mb-14 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              <div>
                <p className="font-mono text-[9px] font-bold text-emerald-800 uppercase tracking-widest">[ REAL SHOPIFY INVENTORY SYNCED ]</p>
                <h4 className="font-sans text-xs sm:text-sm font-bold text-zinc-800">
                  {BUNDLE_DEAL.description}
                </h4>
              </div>
            </div>

            <div className="font-mono text-[10.5px] text-zinc-500">
              Promo code <span className="text-[#15803d] font-bold">NAGPUR999</span> applies dynamically at standard Shopify checkout.
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-14 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] font-bold tracking-widest text-[#15803d] uppercase">
              <Layers className="h-4 w-4" />
              <span>CURRENT PRODUCT BLUEPRINTS</span>
            </div>
            
            <h2 className="font-sans text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl" id="catalog-main-title">
              THE ACTIVE STREET RACKS <br />
              <span className="text-zinc-400">SELECT VARIANT & CHECKOUT</span>
            </h2>
            
            <p className="font-sans text-xs text-zinc-500 sm:text-sm leading-relaxed">
              Below are template visual models. When synchronized with your **Shopify Store Account**, any item you append to your store catalog streams instantly right here! No coding required.
            </p>
          </div>

          {/* Quick-Filter Navigation */}
          <div className="mt-6 md:mt-0 overflow-x-auto pb-1 scrollbar-none flex gap-1.5" id="catalog-category-scroller">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-xl px-4.5 py-2 font-mono text-[10.5px] font-bold tracking-wider transition-all shrink-0 border uppercase cursor-pointer ${
                  activeCategory === c
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                    : "bg-white text-zinc-500 border-zinc-200 hover:text-zinc-900 hover:border-zinc-350"
                }`}
                id={`filter-tab-${c.toLowerCase().replace(" ", "-")}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Responsive Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" id="products-catalog-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod) => {
              const currentSize = selectedSizes[prod.id] || "L";
              const currentColor = selectedColors[prod.id] || prod.colors[0];
              const currentQty = quantities[prod.id] || 1;

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 transition-shadow hover:shadow-md"
                  id={`product-card-${prod.id}`}
                >
                  
                  {/* Photo Section */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-zinc-50">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                      id={`catalog-img-${prod.id}`}
                    />
                    
                    {/* Shadow mesh overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Category Overlay tag */}
                    <span className="absolute top-2.5 left-2.5 rounded-lg bg-white/90 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] font-bold text-zinc-700 border border-zinc-150 uppercase">
                      {prod.category}
                    </span>

                    {/* Best-Seller Overlay Indicator */}
                    {prod.isBestSeller && (
                      <span className="absolute top-2.5 right-2.5 rounded bg-amber-500 text-white font-mono text-[8px] font-extrabold px-2 py-0.5 tracking-wider uppercase">
                        SELLING FAST
                      </span>
                    )}

                    {/* Dynamic Real Prices tags */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between bg-white/95 backdrop-blur-sm p-2 rounded-xl border border-zinc-150">
                      <div>
                        <p className="font-mono text-[8px] text-zinc-450 uppercase leading-none">Catalog Price</p>
                        <p className="font-sans text-xs font-black text-zinc-900 mt-1">₹{prod.price} <span className="font-mono text-[9px] text-zinc-400 line-through">₹{prod.originalPrice}</span></p>
                      </div>
                      <span className="rounded-lg bg-emerald-100 border border-emerald-200 px-1.5 py-0.5 font-sans text-[9px] font-extrabold text-emerald-800">
                        -{Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)}%
                      </span>
                    </div>

                  </div>

                  {/* Core specifications configuration */}
                  <div className="pt-3.5 flex-1 flex flex-col justify-between space-y-3.5">
                    
                    <div className="space-y-1">
                      <h3 className="font-sans text-[15px] font-black text-zinc-900 uppercase tracking-tight group-hover:text-zinc-600 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="font-sans text-[11px] leading-normal text-zinc-500 h-[64px] overflow-y-auto pr-1">
                        {prod.description}
                      </p>
                    </div>

                    {/* Size selector tags frame */}
                    <div className="space-y-1">
                      <label className="block font-mono text-[8.5px] text-zinc-450 uppercase tracking-widest font-bold">Select Sizing Guard:</label>
                      <div className="flex gap-1" id={`sizes-select-${prod.id}`}>
                        {standardSizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSizeSelect(prod.id, sz)}
                            className={`h-6 w-full max-w-[36px] rounded text-[9.5px] font-mono transition-all font-bold cursor-pointer ${
                              currentSize === sz
                                ? "bg-zinc-900 text-white"
                                : "bg-zinc-100 text-zinc-650 hover:bg-zinc-200"
                            }`}
                            id={`size-${prod.id}-${sz}`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color selection dropdown buttons */}
                    <div className="space-y-1">
                      <label className="block font-mono text-[8.5px] text-zinc-450 uppercase tracking-widest font-bold">Select Color Variant:</label>
                      <div className="flex flex-wrap gap-1" id={`colors-select-${prod.id}`}>
                        {prod.colors.map((clr) => (
                          <button
                            key={clr}
                            onClick={() => handleColorSelect(prod.id, clr)}
                            className={`rounded px-2.5 py-0.5 text-[9px] font-mono border transition-all cursor-pointer ${
                              currentColor === clr
                                ? "bg-zinc-900 border-zinc-900 text-white font-bold"
                                : "bg-white border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-350"
                            }`}
                            id={`color-${prod.id}-${clr.replace(" ", "-")}`}
                          >
                            {clr}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity Frame + BUY NOW Action Core */}
                    <div className="space-y-2.5 pt-1.5 border-t border-zinc-100">
                      <div className="flex items-center justify-between font-mono text-[9px] text-zinc-450 uppercase tracking-wider">
                        <span>Checkout Quantity:</span>
                        <div className="flex items-center space-x-1.5">
                          <button
                            onClick={() => changeQuantity(prod.id, -1)}
                            className="flex h-5 w-5 items-center justify-center rounded bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors cursor-pointer"
                          >
                            <Minus className="h-2.5 w-2.5" />
                          </button>
                          <span className="w-5 text-center font-mono text-xs font-bold text-zinc-900">{currentQty}</span>
                          <button
                            onClick={() => changeQuantity(prod.id, 1)}
                            className="flex h-5 w-5 items-center justify-center rounded bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors cursor-pointer"
                          >
                            <Plus className="h-2.5 w-2.5" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => executePurchaseSim(prod)}
                        className="w-full flex items-center justify-center space-x-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white py-3.5 font-mono text-xs font-black transition-all cursor-pointer text-center"
                        id={`add-cta-${prod.id}`}
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                        <span>DIRECT BUY NOW</span>
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
