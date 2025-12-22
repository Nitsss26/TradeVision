export const extraProducts = [
    // ========== TOYS & GAMES (5 Items) ==========
    {
        _id: "t1",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Packaging Solutions",
        basicInfo: {
            name: "Eco-Friendly Wooden Building Blocks Set",
            slug: "wooden-building-blocks",
            category: { level1: "Toys & Games", level2: "Educational", level3: "Blocks" },
            tags: ["toys", "wooden", "educational", "kids"]
        },
        pricing: { basePrice: 450, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1587654780291-39c940483731?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Material": "Pine Wood", "Pieces": "50", "Age": "3+" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 450, inquiries: 12, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "t2",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Packaging Solutions",
        basicInfo: {
            name: "Remote Control Stunt Car 4WD",
            slug: "rc-stunt-car",
            category: { level1: "Toys & Games", level2: "Electronic Toys", level3: "RC Vehicles" },
            tags: ["rc", "car", "toy", "electronic"]
        },
        pricing: { basePrice: 1200, currency: "INR", moq: 24 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Battery": "Rechargeable", "Range": "50m", "Speed": "15km/h" },
        inventory: { inStock: true, stockQuantity: 200 },
        metrics: { views: 890, inquiries: 45, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "t3",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Toys",
        basicInfo: {
            name: "Soft Plush Teddy Bear - 2 Feet",
            slug: "soft-plush-teddy",
            category: { level1: "Toys & Games", level2: "Soft Toys", level3: "Teddy Bears" },
            tags: ["plush", "toy", "soft", "gift"]
        },
        pricing: { basePrice: 650, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1559454403-b8fb87521bc7?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Size": "24 inches", "Filling": "PP Cotton", "Washable": "Yes" },
        inventory: { inStock: true, stockQuantity: 1000 },
        metrics: { views: 1200, inquiries: 80, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "t4",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Toys",
        basicInfo: {
            name: "Magnetic Construction Tiles Set",
            slug: "magnetic-tiles",
            category: { level1: "Toys & Games", level2: "Educational", level3: "Construction" },
            tags: ["magnetic", "tiles", "stem", "toy"]
        },
        pricing: { basePrice: 1500, currency: "INR", moq: 20 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Pieces": "100", "Material": "ABS Plastic", "Magnets": "Neodymium" },
        inventory: { inStock: true, stockQuantity: 300 },
        metrics: { views: 600, inquiries: 30, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "t5",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Toys",
        basicInfo: {
            name: "Classic Chess Board Set - Wooden",
            slug: "chess-board-wooden",
            category: { level1: "Toys & Games", level2: "Board Games", level3: "Strategy" },
            tags: ["chess", "game", "wooden", "classic"]
        },
        pricing: { basePrice: 850, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Board Size": "12x12 inch", "Material": "Sheesham Wood", "Foldable": "Yes" },
        inventory: { inStock: true, stockQuantity: 400 },
        metrics: { views: 500, inquiries: 25, rating: 4.5 },
        manufacturer: { isVerified: true }
    },

    // ========== COSMETICS & BEAUTY (5 Items) ==========
    {
        _id: "c1",
        manufacturerId: "m6",
        manufacturerName: "ChemPure Organics Ltd",
        basicInfo: {
            name: "Matte Liquid Lipstick Set (12 Colors)",
            slug: "matte-liquid-lipstick",
            category: { level1: "Cosmetics & Beauty", level2: "Makeup", level3: "Lips" },
            tags: ["lipstick", "makeup", "cosmetics", "beauty"]
        },
        pricing: { basePrice: 850, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Type": "Liquid Matte", "Quantity": "12 pcs", "Vegan": "Yes" },
        inventory: { inStock: true, stockQuantity: 2000 },
        metrics: { views: 2500, inquiries: 150, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "c2",
        manufacturerId: "m6",
        manufacturerName: "ChemPure Organics Ltd",
        basicInfo: {
            name: "Vitamin C Face Serum - Brightening",
            slug: "vitamin-c-serum",
            category: { level1: "Cosmetics & Beauty", level2: "Skincare", level3: "Serums" },
            tags: ["skincare", "serum", "vitamin c", "organic"]
        },
        pricing: { basePrice: 350, currency: "INR", moq: 200 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Volume": "30ml", "Ingredients": "Hyaluronic Acid, Vit C", "Bottle": "Glass Dropper" },
        inventory: { inStock: true, stockQuantity: 5000 },
        metrics: { views: 1800, inquiries: 90, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "c3",
        manufacturerId: "m6",
        manufacturerName: "ChemPure Organics Ltd",
        basicInfo: {
            name: "Professional Makeup Brush Set - 24 Pcs",
            slug: "makeup-brush-set",
            category: { level1: "Cosmetics & Beauty", level2: "Tools", level3: "Brushes" },
            tags: ["makeup", "brushes", "beauty", "tools"]
        },
        pricing: { basePrice: 1200, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Bristles": "Synthetic", "Handle": "Wood", "Case": "Leather Roll" },
        inventory: { inStock: true, stockQuantity: 800 },
        metrics: { views: 950, inquiries: 40, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "c4",
        manufacturerId: "m6",
        manufacturerName: "ChemPure Organics Ltd",
        basicInfo: {
            name: "Organic Aloe Vera Gel - Pure",
            slug: "aloe-vera-gel",
            category: { level1: "Cosmetics & Beauty", level2: "Skincare", level3: "Body Care" },
            tags: ["aloe vera", "organic", "skincare", "gel"]
        },
        pricing: { basePrice: 180, currency: "INR", moq: 500 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1609176166826-5b4d67367e9f?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Purity": "99%", "Volume": "100g", "Container": "Jar" },
        inventory: { inStock: true, stockQuantity: 3000 },
        metrics: { views: 1100, inquiries: 60, rating: 4.5 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "c5",
        manufacturerId: "m6",
        manufacturerName: "ChemPure Organics Ltd",
        basicInfo: {
            name: "Hydrating Facial Sheet Mask (Pack of 10)",
            slug: "facial-sheet-mask",
            category: { level1: "Cosmetics & Beauty", level2: "Skincare", level3: "Masks" },
            tags: ["mask", "skincare", "facial", "hydrating"]
        },
        pricing: { basePrice: 400, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Type": "Cotton Sheet", "Essence": "20ml", "Pack": "10 Pieces" },
        inventory: { inStock: true, stockQuantity: 10000 },
        metrics: { views: 1500, inquiries: 85, rating: 4.9 },
        manufacturer: { isVerified: true }
    },

    // ========== JEWELLERY & GEMS (5 Items) ==========
    {
        _id: "j1",
        manufacturerId: "m5",
        manufacturerName: "Royal Ceramics & Tiles", // Placeholder mfr
        basicInfo: {
            name: "18K Gold Plated Necklace Set",
            slug: "gold-plated-necklace",
            category: { level1: "Jewellery & Gems", level2: "Jewellery", level3: "Necklaces" },
            tags: ["jewellery", "gold", "necklace", "fashion"]
        },
        pricing: { basePrice: 1500, currency: "INR", moq: 20 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Plating": "18K Gold", "Base": "Brass", "Stones": "CZ" },
        inventory: { inStock: true, stockQuantity: 300 },
        metrics: { views: 2100, inquiries: 110, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "j2",
        manufacturerId: "m5",
        manufacturerName: "Royal Exports",
        basicInfo: {
            name: "Sterling Silver Ring 925",
            slug: "silver-ring-925",
            category: { level1: "Jewellery & Gems", level2: "Jewellery", level3: "Rings" },
            tags: ["ring", "silver", "925", "jewellery"]
        },
        pricing: { basePrice: 800, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Material": "925 Sterling Silver", "Weight": "5g", "Size": "Adjustable" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 900, inquiries: 40, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "j3",
        manufacturerId: "m5",
        manufacturerName: "Royal Exports",
        basicInfo: {
            name: "Indian Traditional Kundan Bangles",
            slug: "kundan-bangles",
            category: { level1: "Jewellery & Gems", level2: "Ethnic", level3: "Bangles" },
            tags: ["bangles", "ethnic", "indian", "kundan"]
        },
        pricing: { basePrice: 2200, currency: "INR", moq: 12 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Work": "Kundan Meena", "Set": "2 Pieces", "Size": "2.4/2.6/2.8" },
        inventory: { inStock: true, stockQuantity: 200 },
        metrics: { views: 1600, inquiries: 75, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "j4",
        manufacturerId: "m5",
        manufacturerName: "Royal Exports",
        basicInfo: {
            name: "Designer Crystal Earrings",
            slug: "crystal-earrings",
            category: { level1: "Jewellery & Gems", level2: "Fashion", level3: "Earrings" },
            tags: ["earrings", "crystal", "fashion", "designer"]
        },
        pricing: { basePrice: 350, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Stone": "Crystal", "Metal": "Alloy", "Type": "Drop" },
        inventory: { inStock: true, stockQuantity: 1000 },
        metrics: { views: 800, inquiries: 35, rating: 4.5 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "j5",
        manufacturerId: "m5",
        manufacturerName: "Royal Exports",
        basicInfo: {
            name: "Gemstone Beaded Bracelet",
            slug: "gemstone-bracelet",
            category: { level1: "Jewellery & Gems", level2: "Fashion", level3: "Bracelets" },
            tags: ["bracelet", "gemstone", "healing", "beads"]
        },
        pricing: { basePrice: 250, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Stone": "Amethyst/Rose Quartz", "Size": "Elastic", "Bead Size": "8mm" },
        inventory: { inStock: true, stockQuantity: 800 },
        metrics: { views: 700, inquiries: 30, rating: 4.7 },
        manufacturer: { isVerified: true }
    },

    // ========== HOME DECOR & FURNITURE (5 Items) ==========
    {
        _id: "h1",
        manufacturerId: "m1",
        manufacturerName: "TexFab Home",
        basicInfo: {
            name: "Decorative Ceramic Flower Vase",
            slug: "ceramic-flower-vase",
            category: { level1: "Home Decor & Furniture", level2: "Decor", level3: "Vases" },
            tags: ["vase", "ceramic", "decor", "home"]
        },
        pricing: { basePrice: 450, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1581783342308-f792ca11df53?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Height": "10 Inch", "Material": "Ceramic", "Finish": "Glossy" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 1100, inquiries: 40, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "h2",
        manufacturerId: "m1",
        manufacturerName: "TexFab Home",
        basicInfo: {
            name: "Modern Abstract Wall Art Print",
            slug: "abstract-wall-art",
            category: { level1: "Home Decor & Furniture", level2: "Decor", level3: "Wall Art" },
            tags: ["art", "wall", "print", "modern"]
        },
        pricing: { basePrice: 900, currency: "INR", moq: 20 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1582560377464-a6338b70743b?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Size": "24x36 Inch", "Frame": "Black Wood", "Canvas": "Matte" },
        inventory: { inStock: true, stockQuantity: 200 },
        metrics: { views: 1300, inquiries: 55, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "h3",
        manufacturerId: "m1",
        manufacturerName: "TexFab Home",
        basicInfo: {
            name: "Handwoven Cotton Cushion Covers",
            slug: "cotton-cushion-covers",
            category: { level1: "Home Decor & Furniture", level2: "Home Textiles", level3: "Cushions" },
            tags: ["cushion", "cover", "cotton", "handwoven"]
        },
        pricing: { basePrice: 250, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1579656361226-7097268572e9?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Size": "16x16 Inch", "Material": "Cotton", "Pattern": "Boho" },
        inventory: { inStock: true, stockQuantity: 1000 },
        metrics: { views: 1500, inquiries: 70, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "h4",
        manufacturerId: "m1",
        manufacturerName: "TexFab Home",
        basicInfo: {
            name: "Minimalist Table Lamp",
            slug: "minimalist-table-lamp",
            category: { level1: "Home Decor & Furniture", level2: "Lighting", level3: "Lamps" },
            tags: ["lamp", "lighting", "minimalist", "modern"]
        },
        pricing: { basePrice: 1800, currency: "INR", moq: 25 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1507473888900-52a11b6f8d01?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Height": "15 Inch", "Base": "Metal", "Shade": "Linen" },
        inventory: { inStock: true, stockQuantity: 300 },
        metrics: { views: 980, inquiries: 35, rating: 4.5 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "h5",
        manufacturerId: "m1",
        manufacturerName: "TexFab Home",
        basicInfo: {
            name: "Jute Area Rug - Natural",
            slug: "jute-area-rug",
            category: { level1: "Home Decor & Furniture", level2: "Rugs", level3: "Natural" },
            tags: ["rug", "jute", "natural", "eco"]
        },
        pricing: { basePrice: 1200, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.unsplash.com/photo-1589139580436-b63e9f4a9b4d?auto=format&fit=crop&w=600&q=80", isPrimary: true }] },
        specs: { "Size": "4x6 Feet", "Material": "100% Jute", "Handmade": "Yes" },
        inventory: { inStock: true, stockQuantity: 200 },
        metrics: { views: 1100, inquiries: 45, rating: 4.6 },
        manufacturer: { isVerified: true }
    }
];
