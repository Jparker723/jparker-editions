/**
 * JParker Editions - Unified Developer Configuration & Gallery Catalog
 * Includes: Fine Art Monochromes, Aegean Series (Open Edition), Greece Collections,
 * Navbar Config, and Oceanside Pier Diptych.
 */

// 1. FINE ART MONOCHROME COLLECTION
export const fineArtCollection = {
  brand: "JParker Editions",
  collectionName: "Fine Art & Architectural Monochromes",
  pricingTiers: {
    collector16x24: { base: 850, framed: 1200, limit: 50 },
    collector20x30: { base: 1150, framed: 1550, limit: 50 },
    gallery24x36: { base: 2200, framed: 2800, limit: 25 },
    grand30x45: { base: 4800, framed: 5650, limit: 10 }
  },
  items: [
    {
      id: "scripps-pier",
      title: "Scripps Pier",
      location: "La Jolla, California",
      filename: "Scripps Pier 1.jpg",
      isAnchor: true,
      category: "Coastal & Waterscapes",
      aspectRatio: "2:3",
      story: "Captured during late morning while the beach was active, using a long exposure to filter out movement and reveal the pier's ethereal presence under direct sun."
    },
    {
      id: "colosseum-monolith",
      title: "Colosseum Monolith",
      location: "Rome, Italy",
      filename: "jparker-colosseum-golden-hour.jpg",
      isAnchor: true,
      category: "Classical Antiquities",
      aspectRatio: "2:3",
      story: "Captured during golden hour when low, direct sunlight rakes across the outer travertine facade, highlighting every repeating arch against a darkened sky."
    },
    {
      id: "oakland-bay-bridge",
      title: "Oakland Bay Bridge Midday",
      location: "San Francisco, California",
      filename: "Oakland Bay Bridge Midday.jpg",
      isAnchor: true,
      category: "Industrial Architecture",
      aspectRatio: "2:3",
      story: "By taking the photo at peak midday, high direct sunlight illuminated the geometric steel cables and supports, creating a clean, minimalist expression of engineering."
    },
    {
      id: "washington-monument",
      title: "Washington Monument",
      location: "Washington, D.C.",
      filename: "_DSC3232.jpg",
      isAnchor: true,
      category: "Industrial & Monumental",
      aspectRatio: "3:4",
      story: "Captured in the path of an incoming storm, a long time-exposure isolated the turbulent movement of storm clouds sweeping past the immovable stone obelisk."
    },
    {
      id: "lake-tahoe-morning",
      title: "Lake Tahoe Morning",
      location: "Lake Tahoe, California",
      filename: "Lake Tahoe Morning.jpg",
      isAnchor: false,
      category: "Coastal & Waterscapes",
      aspectRatio: "2:3",
      story: "Shot at sunrise in the dead of winter. Standing in near-zero temperatures, the long exposure stripped away all distraction into a silent, uncluttered canvas."
    }
  ]
};

// 2. OCEANSIDE PIER DAY & NIGHT DIPTYCH
export const oceansidePierDiptych = {
  id: "oceanside-pier-duo",
  title: "Oceanside Pier: Day & Midnight",
  location: "Oceanside, California",
  isSpotlight: true,
  items: {
    midnightColor: {
      id: "oceanside-pier-11pm",
      title: "Oceanside Pier at 11 PM",
      filename: "Ocean side pier light at midnight.jpg",
      palette: "Ethereal Color / Ambient Night Light",
      aspectRatio: "2:3 Vertical",
      story: "Captured at 11:00 PM under pitch-black conditions with no moonlight. A multi-minute night exposure transforms darkness into ambient daylight with an ethereal glow."
    },
    daytimeMonochrome: {
      id: "oceanside-pier-day",
      title: "Oceanside Pier Meridian",
      filename: "Ocean side pier.jpg",
      palette: "High-Contrast Black & White",
      aspectRatio: "2:3 Vertical",
      story: "Shot in broad daylight beneath the pier, focusing on raw geometry, vanishing lines, and deep shadows formed by the wooden pilings."
    }
  }
};

// 3. CLASSICAL GREECE & AEGEAN SERIES
export const greeceCollections = {
  classicalAntiquities: {
    categoryName: "Classical Antiquities (Fine Art Monochromes)",
    type: "Limited Edition",
    items: [
      { id: "defiance-parthenon", title: "Defiance: The Parthenon", location: "Athens, Greece", filename: "jparker-defiance-the-parthenon.jpg", aspectRatio: "2:3" },
      { id: "maidens-erechtheion", title: "Maidens of Erechtheion", location: "Athens, Greece", filename: "jparker-maidens-of-erechtheion.jpg", aspectRatio: "3:4" },
      { id: "ionic-grace-athena-nike", title: "Ionic Grace: Temple of Athena Nike", location: "Athens, Greece", filename: "jparker-ionic-grace-athena-nike.jpg", aspectRatio: "2:3" },
      { id: "gate-between-worlds", title: "Gate Between Worlds", location: "Athens, Greece", filename: "jparker-gate-between-worlds.jpg", aspectRatio: "2:3" },
      { id: "heaven-and-stone", title: "Heaven and Stone", location: "Athens, Greece", filename: "jparker-heaven-and-stone.jpg", aspectRatio: "2:3" },
      { id: "temple-of-athena", title: "Temple of Athena", location: "Athens, Greece", filename: "Athens 1.jpg", aspectRatio: "2:3" }
    ]
  },
  aegeanSeries: {
    categoryName: "The Aegean Series (Open Edition Color)",
    type: "Open Edition",
    pricing: { paper: 180, canvas: 320, metal: 420 },
    items: [
      { id: "aegean-caldera", title: "Aegean Caldera", location: "Santorini, Greece", filename: "_DSC0759.jpg", aspectRatio: "2:3" },
      { id: "santorini-dome", title: "Santorini Dome", location: "Santorini, Greece", filename: "_DSC0762.jpg", aspectRatio: "2:3" },
      { id: "passage-through-oia", title: "Passage through Oia", location: "Santorini, Greece", filename: "_DSC0803.jpg", aspectRatio: "2:3" },
      { id: "harbor-vessel-koula", title: "Harbor Vessel (Koula)", location: "Aegean Harbor, Greece", filename: "_DSC0865.jpg", aspectRatio: "2:3" },
      { id: "harbor-traditions", title: "Harbor Traditions", location: "Aegean Coast, Greece", filename: "_DSC0859.jpg", aspectRatio: "2:3" }
    ]
  }
};

// 4. NAVIGATION CONFIG
export const navigationConfig = {
  brand: "JParker Editions",
  mainNav: [
    {
      label: "Fine Art Collections",
      href: "#fine-art",
      categories: [
        { title: "Coastal & Waterscapes", featuredItem: "Scripps Pier" },
        { title: "Classical Antiquities", featuredItem: "Colosseum Monolith" },
        { title: "Industrial Architecture", featuredItem: "Oakland Bay Bridge" }
      ]
    },
    { label: "Aegean Series", href: "#aegean" },
    { label: "About the Artist", href: "#about" }
  ],
  actions: [
    { label: "Room Visualizer", action: "OPEN_VISUALIZER" },
    { label: "Inquire / Cart", href: "#inquire" }
  ]
};
