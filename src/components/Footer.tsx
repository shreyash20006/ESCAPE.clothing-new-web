import React from "react";
import { MapPin, ExternalLink, Instagram, Clock, Phone } from "lucide-react";
import { CONTACT_CHANNELS } from "../data/products";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleCall = (num: string) => {
    window.location.href = `tel:${num}`;
  };

  return (
    <footer id="find-us" className="bg-[#fafbfd] border-t border-zinc-200 pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 mb-12">
          
          {/* Brand & Contacts Panel */}
          <div className="lg:col-span-5 space-y-6" id="footer-brand-box">
            
            {/* Logo and Name */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="h-9 w-9 overflow-hidden rounded-full border border-zinc-200 bg-white p-0.5">
                  <img
                    src="https://res.cloudinary.com/dsqxboxoc/image/upload/q_auto/f_auto/v1780928834/639473422_17856452319665295_1281961209085143497_n_mmtgqs.jpg"
                    alt="Escape Clothing 17"
                    className="h-full w-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    id="footer-logo-img"
                  />
                </div>
                <div>
                  <h3 className="font-mono text-base font-black tracking-widest text-zinc-900 leading-none">ESCAPE CLOTHING 17</h3>
                  <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest mt-0.5">Nagpur Streetwear Sanctuary</p>
                </div>
              </div>

              <p className="max-w-md font-sans text-xs text-zinc-500 leading-relaxed">
                Standardizing premium heavy-knit fabrics for student squads without high markups. Synchronize directly with your Shopify storefront account and launch in seconds.
              </p>
            </div>

            {/* Simple informational store lines */}
            <div className="space-y-3">
              <h4 className="font-mono text-[9.5px] font-bold text-zinc-800 tracking-wider uppercase flex items-center space-x-1.5">
                <Clock className="h-3.5 w-3.5 text-[#15803d]" />
                <span>STORE SUPPORT CONTACTS:</span>
              </h4>

              <div className="grid grid-cols-2 gap-3" id="footer-contact-operators">
                {CONTACT_CHANNELS.slice(0, 2).map((chan) => (
                  <div
                    key={chan.number}
                    className="rounded-xl border border-zinc-200 bg-white p-3 space-y-1.5 shadow-sm"
                    id={`footer-card-${chan.number}`}
                  >
                    <div>
                      <p className="font-mono text-[8px] text-zinc-400 uppercase font-semibold leading-none">{chan.name}</p>
                      <p className="font-sans text-xs font-bold text-zinc-800 mt-0.5">{chan.display}</p>
                    </div>
                    <button
                      onClick={() => handleCall(chan.number)}
                      className="w-full flex items-center justify-center space-x-1 rounded bg-zinc-950 text-white hover:bg-zinc-800 py-1 font-mono text-[9px] font-bold transition-colors cursor-pointer text-center"
                      id={`call-btn-${chan.number}`}
                    >
                      <Phone className="h-2.5 w-2.5" />
                      <span>DIAL COUNTER</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram links */}
            <div className="space-y-2">
              <h5 className="font-mono text-[9.5px] font-bold text-zinc-450 uppercase tracking-wider">OFFICIAL ANNOUNCEMENTS:</h5>
              <a
                href="https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 p-3.5 text-xs text-zinc-700 transition-all w-full shadow-sm"
                id="footer-instagram-action"
              >
                <Instagram className="h-5 w-5 text-[#15803d]" />
                <div className="text-left leading-none">
                  <p className="font-sans font-bold leading-none text-zinc-900">@escape_clothing17</p>
                  <p className="font-mono text-[9.5px] text-zinc-450 mt-1">Get immediate lookbook updates</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-zinc-405 ml-auto" />
              </a>
            </div>

          </div>

          {/* Nagpur Google Maps Iframe */}
          <div className="lg:col-span-7 space-y-4" id="footer-map-column">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4.5 w-4.5 text-[#15803d]" />
                <h4 className="font-mono text-[10px] font-bold text-zinc-800 tracking-widest uppercase">NAGPUR SHOWROOM COORDINATES</h4>
              </div>
              <a
                href="https://maps.google.com/?q=City+Center+Mall+Nagpur+Maharashtra+India"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] text-[#15803d] hover:underline flex items-center space-x-1 font-bold"
                id="maps-native-redirect"
              >
                <span>OPEN DIRECTIONS MAP</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Standard beautiful color map matching the white elegant theme */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-zinc-250 bg-white p-1.5 shadow-sm" id="maps-iframe-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4699564275154!2d79.09887729999999!3d21.1336829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bd6aa32a24d7%3A0xc3b95a8947bde935!2sCity+Center!5e0!3m2!1sen!2sin!4v1780928834000!5m2!1sen!2sin&q=City+Center+Mall+Nagpur+Maharashtra"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="City Center Mall Nagpur Google Maps Embed"
                id="footer-maps-iframe"
              ></iframe>
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-3.5 font-sans text-xs text-zinc-500 leading-normal flex items-start space-x-2.5 shadow-sm">
              <span className="text-[#15803d] font-bold">★</span>
              <p>
                <span className="text-zinc-800 font-bold">Support local fittings:</span> For immediate campus deliveries, try on fits directly at our City Center Mall counter, Near Medical Square. Nagpur students can check colors on actual fabric models!
              </p>
            </div>
          </div>

        </div>

        {/* Base Credits */}
        <div className="border-t border-zinc-200 pt-6 flex flex-col md:flex-row justify-between items-center text-zinc-450 font-mono text-[10px] space-y-3 md:space-y-0" id="footer-metadata-base">
          <div>
            &copy; {new Date().getFullYear()} ESCAPE CLOTHING 17. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-5 text-zinc-650">
            <button onClick={() => onScrollToSection("collection")} className="hover:text-zinc-900 transition-colors cursor-pointer">[ COLLECTION ]</button>
            <button onClick={() => onScrollToSection("social-campaign")} className="hover:text-zinc-900 transition-colors cursor-pointer">[ LOOKBOOK ]</button>
            <button onClick={() => onScrollToSection("about")} className="hover:text-zinc-900 transition-colors cursor-pointer">[ SPECIFICATIONS ]</button>
          </div>
          <div className="text-zinc-400 text-[9px] uppercase tracking-wider font-bold">
            Deals on Fabric at Reasonable Rates
          </div>
        </div>

      </div>
    </footer>
  );
}
