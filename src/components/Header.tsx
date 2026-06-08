import React, { useState } from "react";
import { MessageSquare, MapPin, Store, ExternalLink } from "lucide-react";
import ShopifyModal from "./ShopifyModal";

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export default function Header({ onScrollToSection }: HeaderProps) {
  const [isShopifyOpen, setIsShopifyOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Name */}
        <div 
          className="flex cursor-pointer items-center space-x-2.5" 
          onClick={() => onScrollToSection("hero")}
          id="nav_brand"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-zinc-200 bg-zinc-50">
            <img
              src="https://res.cloudinary.com/dsqxboxoc/image/upload/q_auto/f_auto/v1780928834/639473422_17856452319665295_1281961209085143497_n_mmtgqs.jpg"
              alt="Escape Clothing 17 Logo"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
              id="brand-logo-img"
            />
          </div>
          <div>
            <div className="font-mono text-base font-black tracking-widest text-zinc-900 leading-none">
              ESCAPE
            </div>
            <div className="font-sans text-[8.5px] font-black tracking-widest text-[#15803d] uppercase mt-0.5">
              Clothing 17
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono tracking-wider">
          <button
            onClick={() => onScrollToSection("collection")}
            className="text-zinc-650 hover:text-black font-semibold uppercase"
            id="nav-collection-btn"
          >
            [ Collections ]
          </button>
          <button
            onClick={() => onScrollToSection("social-campaign")}
            className="text-zinc-650 hover:text-black font-semibold uppercase"
            id="nav-social-btn"
          >
            [ Lookbook ]
          </button>
          <button
            onClick={() => onScrollToSection("about")}
            className="text-zinc-650 hover:text-black font-semibold uppercase"
            id="nav-about-btn"
          >
            [ Specifications ]
          </button>
          <button
            onClick={() => onScrollToSection("find-us")}
            className="text-zinc-650 hover:text-black font-semibold uppercase"
            id="nav-find-btn"
          >
            [ In-Store Counter ]
          </button>
        </nav>

        {/* Action Button Group */}
        <div className="flex items-center space-x-2.5">
          {/* Instagram Social Trigger */}
          <a
            href="https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 rounded-lg border border-zinc-250 bg-zinc-50 px-3 py-1.5 text-[11px] font-mono font-bold tracking-wide text-zinc-805 hover:bg-zinc-100 transition-colors"
            id="instagram-nav-link"
          >
            <span>Instagram Feed</span>
            <ExternalLink className="h-3 w-3 text-zinc-400" />
          </a>

          {/* Shopify Blueprints Button */}
          <button
            onClick={() => setIsShopifyOpen(true)}
            className="flex items-center space-x-1.5 rounded-lg border border-transparent bg-zinc-900 px-3.5 py-1.5 font-mono text-[10.5px] font-black text-white hover:bg-zinc-800 transition-all shadow-md cursor-pointer"
            id="nav-shopify-active-btn"
          >
            <Store className="h-3.5 w-3.5" />
            <span>Connect Theme</span>
          </button>
        </div>

      </div>

      {/* Shopify Setup Overlay Modal */}
      <ShopifyModal isOpen={isShopifyOpen} onClose={() => setIsShopifyOpen(false)} />
    </header>
  );
}
