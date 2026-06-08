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

export default function App() {
  const [enquiryBag, setEnquiryBag] = useState<EnquiryItem[]>([]);
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Add Item to Enquiry bag
  const handleAddToBag = (newItem: EnquiryItem) => {
    setEnquiryBag((prevBag) => {
      // Check if item has same Product ID, Size, and Color
      const matchIndex = prevBag.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      if (matchIndex > -1) {
        // If matched, increment quantity
        const updated = [...prevBag];
        updated[matchIndex] = {
          ...updated[matchIndex],
          quantity: updated[matchIndex].quantity + newItem.quantity,
        };
        return updated;
      } else {
        // Else add new line item
        return [...prevBag, newItem];
      }
    });

    // Auto-open bag for delightful feedback!
    setTimeout(() => {
      setIsBagOpen(true);
    }, 200);
  };

  // Remove Item from Enquiry Bag
  const handleRemoveItem = (index: number) => {
    setEnquiryBag((prevBag) => prevBag.filter((_, idx) => idx !== index));
  };

  // Clear Bag selections
  const handleClearBag = () => {
    setEnquiryBag([]);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiasedSelection selection:bg-[#39FF14] selection:text-black" id="main_viewport">
      {/* Visual background gradient strip accent (Neon Green #39FF14) */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#113109] via-[#39FF14] to-[#113109]"></div>

      {/* Navigation Header */}
      <Header
        enquiryItems={enquiryBag}
        onOpenBag={() => setIsBagOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Core Content Pages */}
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

      {/* Bottom Footer block containing Map / Contact Channels */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Sliding Bag Assistant Panel Drawer */}
      <EnquiryBag
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        enquiryItems={enquiryBag}
        onRemoveItem={handleRemoveItem}
        onClearBag={handleClearBag}
      />
    </div>
  );
}
