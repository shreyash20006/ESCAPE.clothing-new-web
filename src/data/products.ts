import { Product } from "../types";

export const PRODUCTS: Product[] = [
  // 1. Korean Jerseys
  {
    id: "kr-jersey-01",
    name: "Seoul Team Varsity Retro Jersey",
    category: "Jerseys",
    description: "Anti-gatekeep streetwear perfection. This mesh is premium-knit with supreme breathability that feels high-key luxurious. Features bold high-contrast throwback varsity patchwork and a dynamic relaxed drape. Literally living rent-free in our heads since Day 1. ⚡🔥",
    price: 399,
    originalPrice: 799,
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    colors: ["Classic Off-White", "Midnight Black", "Cyber Neon Green"],
    features: ["Premium Double-Knit Breathable Mesh", "Heavy-gauge contrast ribbed cuffs", "Oversized retro varsity silhouette", "Pre-washed for instant soft comfort"],
    isBestSeller: true,
    isNewDrop: true
  },
  {
    id: "kr-jersey-02",
    name: "Hypebeast Baseball Striped Jersey",
    category: "Jerseys",
    description: "An absolute game-changer. Re-engineered dual stripes combined with heavy-duty metal poppers. It matches any baggy outfit effortlessly. Designed specifically for Nagpur's hot weather with breathable ventilation ports. High-key fire. ⛩️🧢",
    price: 399,
    originalPrice: 849,
    imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&auto=format&fit=crop",
    colors: ["Carbon Navy", "Sand Dune", "Stealth Onyx"],
    features: ["Ultra-airy premium sport mesh", "Double-stitch varsity piping", "Embroidered drop-shadow typography", "Anti-fuzz knit engineering"],
    isBestSeller: false,
    isNewDrop: true
  },
  {
    id: "kr-jersey-03",
    name: "Cyber Tokyo Track V-Neck Jersey",
    category: "Jerseys",
    description: "Futuristic racing dynamics built into streetwear roots. The fabric feels unreal — thick but lightweight structure. Guaranteed to secure infinite compliments. Ultimate fit check material. 🏁☄️",
    price: 399,
    originalPrice: 749,
    imageUrl: "https://images.unsplash.com/photo-1571945153237-4929e78394a9?q=80&w=600&auto=format&fit=crop",
    colors: ["Sonic Grey", "Voltage Green", "Chamber Red"],
    features: ["Heavy mock V-neck outline", "Retro geometric sports paneling", "Moisture-wicking athletic tech", "Extended drop shoulder sleeve"],
    isBestSeller: true
  },

  // 2. Cargos
  {
    id: "cargo-01",
    name: "Stealth Dual-Strap 6-Pocket Cargo",
    category: "Cargos",
    description: "Engineered with sheer urban utility vibes. This is an ultra-baggy fit designed using high-grade heavy cotton twill that ignores friction. Six colossal modular pockets and nylon utility web straps that dangle with peak streetwear aesthetic. High-key essential. 🎒🪖",
    price: 499,
    originalPrice: 999,
    imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
    colors: ["Stealth Black", "Olive Drab", "Silt Khaki"],
    features: ["Heavyduty organic cotton twill weaving", "Modular double-layered storage compartments", "Adjustable leg hem cords for customization", "Triple-reinforced cross seams"],
    isBestSeller: true,
    isNewDrop: false
  },
  {
    id: "cargo-02",
    name: "Concrete Jungle Baggy Cargo Jogger",
    category: "Cargos",
    description: "Unreal comfort meet heavy weight drape. Fitted with elasticated cuff locks and reinforced knees for skateboarders who vibe with peak urban aesthetics. Sourced responsibly to ensure the thickest fabric on the market without the premium price. 🦾🛹",
    price: 499,
    originalPrice: 1099,
    imageUrl: "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=600&auto=format&fit=crop",
    colors: ["Ash Grey", "Desert Tan", "Obsidian Black"],
    features: ["Super-brushed rugged twill canvas", "Dual bellows utility pockets with metal buttons", "Elastic comfort waist band with heavy pullcord", "D-ring hardware utility hanger"],
    isBestSeller: false,
    isNewDrop: true
  },

  // 3. Oversized Tees
  {
    id: "oversized-tee-01",
    name: "Heavy-Hitter Boxy Blank Tee",
    category: "Oversized Tees",
    description: "The Holy Grail of basics. Crafted with a premium dry-touch 240 GSM organic cotton that creates the perfect structural boxy drape. Thick, snug ribbed mock collar that never stretches or goes bacon-neck. High key an absolute standard for Nagpur streetwear squads. 🏆👕",
    price: 349,
    originalPrice: 699,
    imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
    colors: ["Vintage Chalk", "Onyx Charcoal", "Muted Sage", "Chocolate Earth"],
    features: ["240 GSM Organic Heavy-Knit Cotton", "Snug-fit mock-neck ribbed collar (1.2 inches)", "Aesthetic drop shoulder silhouette", "Shrink-proof pre-shrunk technology"],
    isBestSeller: true,
    isNewDrop: false
  },
  {
    id: "oversized-tee-02",
    name: "Shibuya Acid-Wash Distressed Tee",
    category: "Oversized Tees",
    description: "Heavily washed for a vintage rock vibe. Custom pigment spray gives each garment a completely distinct aged look that pairs flawlessly with distressed jeans. Baggy fit that breathes well while carrying heavy cotton swagger. 🎸🔥",
    price: 349,
    originalPrice: 799,
    imageUrl: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600&auto=format&fit=crop",
    colors: ["Acid Grey", "Vintage Indigo", "Burnt Clay"],
    features: ["220 GSM heavily washed cotton fabric", "Worn distressed detailing around margins", "Oversized sleeves that graze the elbows", "Chemical-washed vintage finish"],
    isBestSeller: false,
    isNewDrop: true
  },

  // 4. Shirts
  {
    id: "shirt-01",
    name: "Retro Waffle Knit Drop-Polo",
    category: "Shirts",
    description: "Collared streetwear elevated to a whole new dimension. Features an textured premium waffle knit that breathes beautifully while maintaining that vintage casual look. Finished with an elegant zipped lock instead of generic buttons. Clean fit high-key. 🧇☕",
    price: 349,
    originalPrice: 749,
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop",
    colors: ["Porcelain Off-White", "Rich Forest", "Camel Tan"],
    features: ["Combed textured organic waffle fabric", "Branded premium YKK collar zip", "Relaxed side slit hem profile", "Drop-shoulder sleek sleeve layout"],
    isBestSeller: true,
    isNewDrop: true
  },
  {
    id: "shirt-02",
    name: "Flannel Plaid Heavyweight Shacket",
    category: "Shirts",
    description: "The ideal layer for breezy Nagpur college evenings. Thick enough to double as a jacket, lightweight enough to wear all-day. Large chest cargo pockets and button cuffs for that rugged utility style. Pure comfort draping. 🪵🧥",
    price: 349,
    originalPrice: 899,
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    colors: ["Sage Checkered", "Obsidian & Crimson", "Monochrome Shadow Grey"],
    features: ["Double-brushed dense cotton flannel", "Dual front utility button pockets", "Clean curved shirt hem line", "Button-down neck profile"],
    isBestSeller: false,
    isNewDrop: false
  }
];

export const BUNDLE_DEAL = {
  description: "BUY ANY 3 STREETWEAR ITEMS FOR JUST ₹999!",
  detail: "Add any 3 items from our lineup and our smart basket automatically configures the Nagpur student promo price. Fabric deals at their absolute peak."
};

export const INSTAGRAM_FEED_MOCK = [
  {
    id: "ig-pos-1",
    likes: "1,248",
    comments: "42",
    tag: "@escape_clothing17",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop",
    caption: "Aesthetic check. The new double-knit varsity jerseys are flying. Nagpur City Center store has fresh fabric colorways today!"
  },
  {
    id: "ig-pos-2",
    likes: "942",
    comments: "31",
    tag: "@escape_clothing17",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
    caption: "Six pockets. Baggy fit twill. Tactical straps engineered to last across university campuses. Escape the ordinary."
  },
  {
    id: "ig-pos-3",
    likes: "2,019",
    comments: "81",
    tag: "@escape_clothing17",
    imageUrl: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&auto=format&fit=crop",
    caption: "High key, this is the perfect mock collar blank boxy tee. 240 GSM heavy drop that stays in place. No gatekeeping here."
  }
];

export const CHOPPING_STEPS = [
  {
    number: "01",
    title: "BROWSE THE GRID",
    desc: "Explore our latest heavy weight drops on the Shop page with premium filters."
  },
  {
    number: "02",
    title: "CONNECT VIA CHAT",
    desc: "Send a screenshot or click 'My Bag' to send your favors to WhatsApp (+91 8261094774)."
  },
  {
    number: "03",
    title: "RECEIVE DIRECT FIT",
    desc: "Confirm your sizes and address for lightning-fast deliveries or local Nagpur pick-ups!"
  }
];

export const NEW_LAUNCH_CAPTIONS = [
  {
    label: "POST 1: TEASER",
    text: "Something big is dropping. High-key re-engineering the fabric game in Nagpur with premium heavy GSM streetwear. Stay tuned or head to our website link. ⚡🤫"
  },
  {
    label: "POST 2: LAUNCH",
    text: "The wait is over. Escape the ordinary now at escapeclothing17.com! Direct WhatsApp checkout, absolute drip, student-friendly deals live. Link in bio! 🚀🔥"
  },
  {
    label: "POST 3: BUNDLE OFFER",
    text: "Nagpur, we are not gatekeeping! Website exclusive: Buy any 3 of your favorite premium drops for just ₹999. Link in bio to build your bag now! 🏷️🧢"
  }
];

export const BRAND_STORY = {
  about: "At 'Escape Clothing 17', we believe your style is your daily armor. Established for Nagpur's relentless, bold, and modern student community, we live by 'Deals on Fabric at Reasonable Rates'. High manufacturing markup? We escape that setup. Our pieces are sourced, designed, and curated with the heaviest, most durable fabrics to withstand the hustle of college life. Our streetwear blends clean tactical shapes with aesthetic drops, making fire fashion accessible for every campus wardrobe.",
  nagpurVibe: "Located in the heart of Nagpur's commerce at the iconic City Center, Near Medical Square, we are proud to be Nagpur's ultimate streetwear sanctuary. Nagpur students demand clothes that can brave both burning summers and chilly evenings while keeping the vibe immaculate. That's why we're here."
};

export const CONTACT_CHANNELS = [
  { name: "Suresh (Urgent Sales)", number: "+918261094774", display: "+91 82610 94774", active: true },
  { name: "Rohit (Out-of-Town Delivery)", number: "+919022341807", display: "+91 90223 41807", active: true },
  { name: "Store General Line", number: "+919503539216", display: "+91 95035 39216", active: false }
];
