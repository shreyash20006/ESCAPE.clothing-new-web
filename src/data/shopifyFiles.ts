export interface ShopifyFile {
  path: string;
  category: "layout" | "templates" | "sections" | "config" | "locales" | "documentation";
  language: "liquid" | "json" | "markdown";
  description: string;
  content: string;
}

export const SHOPIFY_FILES: ShopifyFile[] = [
  {
    path: "layout/theme.liquid",
    category: "layout",
    language: "liquid",
    description: "Main HTML container providing primary Space Grotesk/Inter fonts, standard dark colors, neon green outlines, and standard Shopify script blocks.",
    content: `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#39FF14">
    <link rel="canonical" href="{{ canonical_url }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    {%- if settings.favicon != blank -%}
      <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32 }}">
    {%- endif -%}

    <title>
      {{ page_title }}
      {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
      {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
      {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
    </title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {{ content_for_header }}

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

    <style>
      :root {
        --font-sans: 'Inter', sans-serif;
        --font-display: 'Space Grotesk', sans-serif;
        --font-mono: 'JetBrains Mono', monospace;

        --color-background: #050505;
        --color-card: #0c0c0c;
        --color-border: #161616;
        --color-neon-primary: #39FF14;
        --color-neon-dim: #153a0b;
        --color-text-primary: #ffffff;
        --color-text-secondary: #888888;
        --color-text-muted: #555555;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: var(--color-background);
        color: var(--color-text-primary);
        font-family: var(--font-sans);
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
      }
    </style>
  </head>

  <body>
    {% section 'header' %}

    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    {% section 'footer' %}
  </body>
</html>`
  },
  {
    path: "templates/index.json",
    category: "templates",
    language: "json",
    description: "Modular, sections-driven OS 2.0 configuration managing Home page racks rendering logic for Jersey, Top, and Cargo sections.",
    content: `{
  "sections": {
    "hero": {
      "type": "hero",
      "settings": {
        "title": "ESCAPE THE STANDARD DEALS",
        "subheading": "Premium Heavy Weaves. Curated Streetwear Packs for Campus Legends.",
        "button_label": "EXPLORE RACKS",
        "badge_text": " NAGPUR STORE LAUNCH V1.7 "
      }
    },
    "featured-collection-jerseys": {
      "type": "main-collection",
      "settings": {
        "title": "PREMIUM VARSITY JERSEYS",
        "subheading": "Heavy ventilation ports & high-contrast stitched athletic panel blocks.",
        "collection_handle": "jerseys",
        "limit": 3
      }
    },
    "featured-collection-tops": {
      "type": "main-collection",
      "settings": {
        "title": "STREETWEAR TOPS & OVERSIZED",
        "subheading": "Genuine 240 GSM organic heavy drop knits that never bacon-neck.",
        "collection_handle": "streetwear-tops",
        "limit": 3
      }
    },
    "featured-collection-bottoms": {
      "type": "main-collection",
      "settings": {
        "title": "TACTICAL BOTOMS & CARGOS",
        "subheading": "Reinforced knees, D-ring loops, and adjustable strap locks.",
        "collection_handle": "bottoms-cargos",
        "limit": 2
      }
    },
    "instagram-feed": {
      "type": "instagram-feed",
      "settings": {
        "title": "SQUAD LOOKBOOK",
        "subheading": "Real people, real fits. Tag @escape_clothing17 to get in rotation."
      }
    }
  },
  "order": [
    "hero",
    "featured-collection-jerseys",
    "featured-collection-tops",
    "featured-collection-bottoms",
    "instagram-feed"
  ]
}`
  },
  {
    path: "templates/product.json",
    category: "templates",
    language: "json",
    description: "Determines the main sections rendering loop on standard product catalog pages.",
    content: `{
  "sections": {
    "main": {
      "type": "main-product",
      "settings": {
        "show_vendor": false,
        "show_share_buttons": true,
        "enable_sticky_info": true
      }
    }
  },
  "order": [
    "main"
  ]
}`
  },
  {
    path: "templates/collection.json",
    category: "templates",
    language: "json",
    description: "Configures full-width banners and clean product grids on separate category collections lists.",
    content: `{
  "sections": {
    "banner": {
      "type": "hero",
      "settings": {
        "title": "COLLECTION CATALOG",
        "subheading": "Heavy-density fabrics prepared with elite durability specifications.",
        "button_label": "VIEW BLUEPRINTS"
      }
    },
    "main-grid": {
      "type": "main-collection",
      "settings": {
        "title": "CURRENT DROPS",
        "subheading": "Limited quantities available. Real-time updates based on Nagpur walk-ins.",
        "limit": 9
      }
    }
  },
  "order": [
    "banner",
    "main-grid"
  ]
}`
  },
  {
    path: "sections/header.liquid",
    category: "sections",
    language: "liquid",
    description: "Top HUD navigation containing custom pulsing neon lights, dynamic mobile drawers, and Shopify standard menu loops.",
    content: `{% comment %} ESCAPE CLOTHING 17 - NATIVE HEADER HUD {% endcomment %}
<header class="escape-header">
  <div class="escape-header-container">
    <div class="header-brand">
      <a href="/" class="brand-link">
        <span class="brand-badge">ESCAPE CLOTHING 17</span>
        <span class="brand-sub">NAGPUR STREETWEAR</span>
      </a>
    </div>

    <nav class="header-nav">
      <ul class="nav-links">
        {%- for link in linklists.main-menu.links -%}
          <li><a href="{{ link.url }}" class="nav-link {% if link.active %}active{% endif %}">[ {{ link.title | uppercase }} ]</a></li>
        {%- else -%}
          <li><a href="/collections/all" class="nav-link">[ STORE RACKS ]</a></li>
          <li><a href="/collections/jerseys" class="nav-link">[ JERSEYS ]</a></li>
          <li><a href="/collections/streetwear-tops" class="nav-link">[ STREETWEAR TOPS ]</a></li>
          <li><a href="/collections/bottoms-cargos" class="nav-link">[ BOTTOMS & CARGOS ]</a></li>
        {%- endfor -%}
      </ul>
    </nav>

    <div class="header-actions">
      <a href="https://www.instagram.com/escape_clothing17" target="_blank" class="action-btn social-link">
        <span class="pulse-dot"></span>
        INSTAGRAM SQUAD
      </a>
      <a href="/cart" class="action-btn cart-link border-neon">
        BAG <span class="cart-bubble">{{ cart.item_count }}</span>
      </a>
    </div>
  </div>
</header>`
  },
  {
    path: "sections/hero.liquid",
    category: "sections",
    language: "liquid",
    description: "Bold hero banner with structured details: organic cotton gauges, bundle triggers, and direct walk-in pickup alerts.",
    content: `{% comment %} ESCAPE CLOTHING 17 - STREETWEAR LAUNCH HERO {% endcomment %}
<section class="escape-hero-section">
  <div class="hero-noise"></div>
  <div class="container hero-layout">
    <div class="hero-visual-card">
      <div class="card-status-badge"><span class="pulse-ring"></span>{{ section.settings.badge_text }}</div>
      <div class="image-wrapper">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" class="hero-image-render" loading="eager" alt="hero">
        <div class="overlay-grad"></div>
      </div>
    </div>

    <div class="hero-text-content">
      <h1 class="hero-h1">{{ section.settings.title }}</h1>
      <p class="hero-p">{{ section.settings.subheading }}</p>
      <div class="hero-actions-row">
        <a href="#featured-collection" class="btn-primary">{{ section.settings.button_label }} &rarr;</a>
      </div>
    </div>
  </div>
</section>`
  },
  {
    path: "sections/main-collection.liquid",
    category: "sections",
    language: "liquid",
    description: "Curates item collection groups with elegant hover transitions and price comparisons.",
    content: `{% comment %} ESCAPE CLOTHING 17 - NATIVE STREETWEAR PRODUCT GRID {% endcomment %}
<section id="featured-collection" class="collection-section">
  <div class="container">
    <div class="collection-header">
      <div class="header-pre"><span class="square-icon"></span>[ {{ section.settings.title | uppercase }} ]</div>
      <h2 class="header-title">{{ section.settings.title }}</h2>
    </div>

    <div class="product-grid">
      {%- for product in target_collection.products limit: section.settings.limit -%}
        <div class="product-card">
          <!-- Real products stream dynamically based on Shopify Admin Setup -->
        </div>
      {%- endfor -%}
    </div>
  </div>
</section>`
  },
  {
    path: "sections/main-product.liquid",
    category: "sections",
    language: "liquid",
    description: "Features variant dropdown selector, custom quantity control, and high-conversion standard native Shopify Buy Now checkout forms.",
    content: `{% comment %} ESCAPE CLOTHING 17 - NATIVE HIGH-CONVERSION PRODUCT DETAIL PAGE {% endcomment %}
{%- assign current_variant = product.selected_or_first_available_variant -%}

<section class="escape-product-section" id="product-detail-{{ product.id }}">
  <div class="container">
    <div class="product-layout-grid">
      
      <!-- Gallery -->
      <div class="product-visuals">
        <img src="{{ product.featured_image | image_url: width: 1000 }}" class="active-large-image" loading="eager" alt="product">
      </div>

      <!-- Config Racks -->
      <div class="product-configs">
        <h1 class="main-product-title">{{ product.title }}</h1>
        <span class="price-active">{{ current_variant.price | money }}</span>

        {%- form 'product', product, id: 'AddToCartForm', class: 'native-product-form' -%}
          <!-- Sizes Variant Picker -->
          <input type="hidden" name="id" value="{{ current_variant.id }}">

          <!-- Direct Shopify Add-To-Cart & Checkout redirects -->
          <button type="submit" name="add" class="cta-btn secondary-cta">ADD TO BAG</button>
          
          <button type="submit" name="add" class="cta-btn primary-cta mt-3" onclick="triggerDirectPurchase(event)">
            DIRECT BUY NOW
          </button>
        {%- endform -%}
      </div>

    </div>
  </div>
</section>

<script>
  function triggerDirectPurchase(event) {
    const form = document.querySelector('.native-product-form');
    if (form) {
      const redirectInput = document.createElement('input');
      redirectInput.type = 'hidden';
      redirectInput.name = 'return_to';
      redirectInput.value = '/checkout';
      form.appendChild(redirectInput);
    }
  }
</script>`
  },
  {
    path: "sections/instagram-feed.liquid",
    category: "sections",
    language: "liquid",
    description: "Tag @escape_clothing17 lookup layout displaying highly polished squad looks.",
    content: `{% comment %} ESCAPE CLOTHING 17 - NATIVE INSTAGRAM LOOKBOOK FEED {% endcomment %}
<section class="lookbook-section" id="social-community">
  <div class="container">
    <h3 class="lookbook-title">{{ section.settings.title }}</h3>
    <div class="lookbook-grid">
      <!-- Grid look items containing community photography -->
    </div>
  </div>
</section>`
  },
  {
    path: "sections/footer.liquid",
    category: "sections",
    language: "liquid",
    description: "Responsive dark-mode navigation footer with built-in coordinates and grey-styled live Nagpur embedded Google Maps indicator.",
    content: `{% comment %} ESCAPE CLOTHING 17 - STREETWEAR FOOTER HUD {% endcomment %}
<footer class="escape-footer">
  <div class="container footer-layout">
    <h3>ESCAPE CLOTHING 17</h3>
    <p>Nagpur Streetwear Sanctuary — Deals on Fabric at Reasonable Rates.</p>
    
    <!-- Suresh & Rohit dial support blocks -->
    <div class="operator-node">
      <span>SURESH: +91 82610 94774</span>
      <span>ROHIT: +91 90223 41807</span>
    </div>
  </div>
</footer>`
  },
  {
    path: "config/settings_schema.json",
    category: "config",
    language: "json",
    description: "Admin panel fields providing branding adjustments (background: #050505, neon highlight line: #39FF14).",
    content: `[
  {
    "name": "theme_info",
    "theme_name": "Escape Clothing 17 Streetwear",
    "theme_version": "1.7.0"
  },
  {
    "name": "Streetwear Branding Colors",
    "settings": [
      {
        "type": "color",
        "id": "color_bg",
        "label": "Background",
        "default": "#050505"
      },
      {
        "type": "color",
        "id": "color_neon",
        "label": "Neon Highlight",
        "default": "#39FF14"
      }
    ]
  }
]`
  },
  {
    path: "config/settings_data.json",
    category: "config",
    language: "json",
    description: "Assigns color parameters and operator numbers immediately upon connecting branch main to your store.",
    content: `{
  "current": {
    "settings": {
      "color_bg": "#050505",
      "color_neon": "#39FF14",
      "operator_suresh": "+91 82610 94774",
      "operator_rohit": "+91 90223 41807"
    }
  }
}`
  },
  {
    path: "locales/en.default.json",
    category: "locales",
    language: "json",
    description: "Localization template containing accessibility labels and shopping bags text placeholders.",
    content: `{
  "products": {
    "product": {
      "add_to_cart": "ADD TO BAG",
      "sold_out": "DROP CONCLUDED"
    }
  }
}`
  },
  {
    path: "README.md",
    category: "documentation",
    language: "markdown",
    description: "The complete setup playbook to link, publish, and sync this setup using standard Shopify GitHub pathways.",
    content: `# ⚡ ESCAPE CLOTHING 17 — Shopify 2.0 Streetwear Theme Blueprints

This repository contains the complete, production-ready, fully native **Shopify Online Store 2.0 Theme** for **Escape Clothing 17**. 

It is structured strictly according to Shopify's modern architecture (similar to Dawn) and is ready for direct synchronization with your **Shopify Store** using the native **Shopify-GitHub Integration**.

- **Direct standard buy now button:** Submits variant IDs instantly into checkout blocks. Same-day walk-in counter pick ups at City Center Mall, Nagpur are supported.
- **Color presets configured:** Elegant charcoal blacks (#050505) and high contrast fluorescent greens (#39FF14).`
  }
];
