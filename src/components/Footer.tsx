import React from "react";
import { Phone, MessageSquare, MapPin, ExternalLink, Instagram, Send, Map } from "lucide-react";
import { CONTACT_CHANNELS } from "../data/products";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  
  const handleCall = (num: string) => {
    window.location.href = `tel:${num}`;
  };

  const handleWhatsApp = (num: string) => {
    const text = encodeURIComponent("Hi Escape Clothing 17 team! I am browsing your web catalog and would love to check out your latest drops available at Nagpur store.");
    window.open(`https://wa.me/${num}?text=${text}`, "_blank");
  };

  return (
    <footer id="find-us" className="bg-[#050505] border-t border-zinc-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 mb-16">
          
          {/* Brand & Contacts Panel */}
          <div className="lg:col-span-5 space-y-8" id="footer-brand-box">
            
            {/* Brands details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-zinc-850 bg-zinc-950 p-1">
                  <img
                    src="https://res.cloudinary.com/dsqxboxoc/image/upload/q_auto/f_auto/v1780928834/639473422_17856452319665295_1281961209085143497_n_mmtgqs.jpg"
                    alt="Escape Clothing 17"
                    className="h-full w-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    id="footer-logo-img"
                  />
                </div>
                <div>
                  <h3 className="font-mono text-base font-black tracking-widest text-white">ESCAPE CLOTHING 17</h3>
                  <p className="font-sans text-[10px] text-zinc-500 uppercase tracking-widest"> Nagpur Streetwear Sanctuary</p>
                </div>
              </div>

              <p className="max-w-md font-sans text-xs text-zinc-500 leading-relaxed">
                Nagpur's high-energy streetwear drops. Standardizing premium heavy fabric weaves for students without crazy markups. Grab dynamic bundle packages via our fast digital checkout.
              </p>
            </div>

            {/* Requested Contacts Grid */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-5 bg-[#39FF14] rounded"></div>
                <h4 className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">DIRECT NAGPUR CONTACT OPERATORS:</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="footer-contact-operators">
                {CONTACT_CHANNELS.map((chan) => (
                  <div
                    key={chan.number}
                    className="rounded-lg border border-zinc-950 bg-[#080808] p-4 space-y-2.5 transition-colors hover:border-zinc-900"
                    id={`footer-card-${chan.number}`}
                  >
                    <div>
                      <p className="font-mono text-[9px] text-[#39FF14] uppercase tracking-wider">[ {chan.name} ]</p>
                      <p className="font-sans text-xs font-black text-white mt-0.5">{chan.display}</p>
                    </div>

                    <div className="flex items-center space-x-1.5 pt-1">
                      <button
                        onClick={() => handleCall(chan.number)}
                        className="flex-1 flex items-center justify-center space-x-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white py-1.5 text-[9px] font-mono font-bold transition-colors border border-zinc-800"
                        id={`call-btn-${chan.number}`}
                      >
                        <Phone className="h-3 w-3" />
                        <span>CALL</span>
                      </button>
                      <button
                        onClick={() => handleWhatsApp(chan.number)}
                        className="flex-1 flex items-center justify-center space-x-1 rounded bg-[#0d210a] border border-[#39ff14]/20 text-[#39FF14] hover:bg-[#15340f] py-1.5 text-[9px] font-mono font-bold transition-colors"
                        id={`chat-btn-${chan.number}`}
                      >
                        <MessageSquare className="h-3 w-3" />
                        <span>WHATSAPP</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Social Action */}
            <div className="space-y-3 pt-2">
              <h5 className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-wider">FOLLOW THE LAUNCH STATION:</h5>
              <a
                href="https://www.instagram.com/escape_clothing17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 rounded-lg border border-zinc-900 bg-black px-4 py-3.5 text-xs text-zinc-300 hover:text-white hover:border-[#39FF14]/30 transition-all w-full sm:w-auto"
                id="footer-instagram-action"
              >
                <Instagram className="h-5 w-5 text-[#39FF14]" />
                <div className="text-left">
                  <p className="font-sans font-bold leading-none">@escape_clothing17</p>
                  <p className="font-mono text-[9px] text-zinc-505 mt-1">Get instant updates on fresh streetwear bundles</p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-zinc-650 ml-auto" />
              </a>
            </div>

          </div>

          {/* Nagpur City Center Map Integration Column */}
          <div className="lg:col-span-7 space-y-6" id="footer-map-column">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#39FF14]" />
                <h4 className="font-mono text-[10px] font-bold text-white tracking-widest uppercase">CITY CENTER, NAGPUR SHOP</h4>
              </div>
              <a
                href="https://maps.google.com/?q=City+Center+Mall+Nagpur+Maharashtra+India"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[9px] text-[#39FF14] hover:underline flex items-center space-x-1"
                id="maps-native-redirect"
              >
                <span>OPEN NATIVE MAP</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Embedded Zoomable Iframe Google Maps */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950 p-2 shadow-inner" id="maps-iframe-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4699564275154!2d79.09887729999999!3d21.1336829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bd6aa32a24d7%3A0xc3b95a8947bde935!2sCity+Center!5e0!3m2!1sen!2sin!4v1780928834000!5m2!1sen!2sin&q=City+Center+Mall+Nagpur+Maharashtra"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.1) brightness(0.95)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="City Center Mall Nagpur Google Maps Embed"
                id="footer-maps-iframe"
              ></iframe>
            </div>

            <div className="rounded-lg bg-zinc-950/40 border border-zinc-900 p-4 font-mono text-[10.5px] text-zinc-500 leading-normal flex items-start space-x-2.5">
              <span className="text-[#39FF14] font-bold">★</span>
              <p>
                <span className="text-white font-bold">Nagpur Student Tip:</span> Eliminate delivery wait times! Assemble your bag selection online, click to send via WhatsApp, and pick it up the very same day at our physical City Center store. Suresh or Rohit will assist with testing fits!
              </p>
            </div>
          </div>

        </div>

        {/* Footer Base Credits */}
        <div className="border-t border-zinc-950 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-650 font-mono text-[10px] space-y-4 md:space-y-0" id="footer-metadata-base">
          <div>
            &copy; {new Date().getFullYear()} ESCAPE CLOTHING 17. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <button onClick={() => onScrollToSection("collection")} className="hover:text-[#39FF14] transition-colors">[ DIGITAL RACKS ]</button>
            <button onClick={() => onScrollToSection("how-to-order")} className="hover:text-[#39FF14] transition-colors">[ PROCESS ]</button>
            <button onClick={() => onScrollToSection("social-campaign")} className="hover:text-[#39FF14] transition-colors">[ AMBASSADOR ]</button>
            <button onClick={() => onScrollToSection("about")} className="hover:text-[#39FF14] transition-colors">[ BRAND SOURCE ]</button>
          </div>
          <div className="text-zinc-500 text-[9px] uppercase tracking-wider">
            Deals on Fabric at Reasonable Rates
          </div>
        </div>

      </div>
    </footer>
  );
}
