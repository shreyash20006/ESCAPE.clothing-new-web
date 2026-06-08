import React, { useState } from "react";
import { ShoppingBag, Flame, MapPin, Sparkles, MessageCircle, Store } from "lucide-react";
import { motion } from "motion/react";
import { EnquiryItem } from "../types";
import ShopifyModal from "./ShopifyModal";

interface HeaderProps {
  enquiryItems: EnquiryItem[];
  onOpenBag: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ enquiryItems, onOpenBag, onScrollToSection }: HeaderProps) {
  const [isShopifyOpen, setIsShopifyOpen] = useState(false);
  const totalItemCount = enquiryItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <div 
          className="flex cursor-pointer items-center space-x-3" 
          onClick={() => onScrollToSection("hero")}
          id="nav_brand"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950">
            <img
              src="https://res.cloudinary.com/dsqxboxoc/image/upload/q_auto/f_auto/v1780928834/639473422_17856452319665295_1281961209085143497_n_mmtgqs.jpg"
              alt="Escape Clothing 17 Logo"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
              id="brand-logo-img"
            />
          </div>
          <div>
            <div className="font-mono text-base font-black tracking-widest text-white sm:text-lg">
              ESCAPE
            </div>
            <div className="font-sans text-[9px] font-semibold tracking-widest text-[#39FF14] uppercase">
              Clothing 17 Nagpur
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider">
          <button
            onClick={() => onScrollToSection("collection")}
            className="text-zinc-400 transition-colors hover:text-[#39FF14]"
            id="nav-collection-btn"
          >
            [ COLLECTION ]
          </button>
          <button
            onClick={() => onScrollToSection("how-to-order")}
            className="text-zinc-400 transition-colors hover:text-[#39FF14]"
            id="nav-order-btn"
          >
            [ HOW TO ORDER ]
          </button>
          <button
            onClick={() => onScrollToSection("social-campaign")}
            className="text-zinc-400 transition-colors hover:text-[#39FF14]"
            id="nav-social-btn"
          >
            [ INSTAGRAM SQUAD ]
          </button>
          <button
            onClick={() => onScrollToSection("about")}
            className="text-zinc-400 transition-colors hover:text-[#39FF14]"
            id="nav-about-btn"
          >
            [ OUR SOURCE ]
          </button>
          <button
            onClick={() => onScrollToSection("find-us")}
            className="text-zinc-400 transition-colors hover:text-[#39FF14]"
            id="nav-find-btn"
          >
            [ NAGPUR SHOP ]
          </button>
          <button
            onClick={() => setIsShopifyOpen(true)}
            className="text-[#39FF14] transition-colors hover:text-white font-bold"
            id="nav-shopify-guide-btn"
          >
            [ SHOPIFY SETUP ]
          </button>
        </nav>

        {/* Navigation Actions (Enquiry bag, Instagram Quicklink) */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-1.5 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[11px] font-mono tracking-wide text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
            id="instagram-nav-link"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39FF14] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#39FF14]"></span>
            </span>
            <span>@escape_clothing17</span>
          </a>

          {/* Shopify Setup Button */}
          <button
            onClick={() => setIsShopifyOpen(true)}
            className="flex items-center space-x-1.5 border border-[#39FF14]/30 bg-[#39FF14]/5 px-3 py-1.5 font-mono text-[10.5px] font-black text-[#39FF14] rounded-full transition-all hover:bg-[#39FF14] hover:text-black"
            id="nav-shopify-active-btn"
          >
            <Store className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">ADD TO SHOPIFY</span>
            <span className="lg:hidden">SHOPIFY</span>
          </button>

          {/* Inquiry / Shopping Bag Trigger */}
          <button
            onClick={onOpenBag}
            className="relative flex items-center space-x-2 rounded-full border border-zinc-900 bg-zinc-950 px-3 py-1.5 font-mono text-[11px] font-bold text-white transition-all hover:bg-white hover:text-black active:scale-95 sm:px-4"
            id="open-bag-btn"
          >
            <ShoppingBag className="h-4 w-4 stroke-[2.5]" />
            <span className="hidden sm:inline">MY BAG</span>
            
            {/* Bag badge */}
            <motion.div
              key={totalItemCount}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#39FF14] text-[10px] font-black text-black"
            >
              {totalItemCount}
            </motion.div>
          </button>
        </div>

      </div>

      {/* Shopify Integration Modal */}
      <ShopifyModal isOpen={isShopifyOpen} onClose={() => setIsShopifyOpen(false)} />
    </header>
  );
}
