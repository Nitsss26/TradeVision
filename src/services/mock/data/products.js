export const products = [
    // --- REAL DATA START (Giriraj Coated Fab) ---
    {
        _id: "p30",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "Anti Wrinkle Synthetic Leather",
            slug: "anti-wrinkle-synthetic-leather",
            shortDescription: "High-quality anti-wrinkle synthetic leather suitable for footwear and upholstery.",
            fullDescription: "Premium quality anti-wrinkle synthetic leather manufactured for durability and aesthetic appeal. Ideal for footwear lining, upholstery, and bag manufacturing.",
            category: { level1: "Textiles", level2: "Synthetic Leather", level3: "Rexine" },
            tags: ["synthetic leather", "rexine", "anti-wrinkle", "footwear", "upholstery"]
        },
        pricing: { basePrice: 150, currency: "INR", moq: 100, priceModel: "per_unit" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/WE/UQ/MY-5635866/anti-wrinkle-synthetic-leather-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Material": "Synthetic / PU", "Pattern": "Anti-wrinkle", "Usage": "Footwear, Bags", "Origin": "India" },
        inventory: { inStock: true, stockQuantity: 5000 },
        metrics: { views: 320, inquiries: 45, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p31",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "Synthetic Shoes Leather",
            slug: "synthetic-shoes-leather",
            shortDescription: "Durable synthetic leather specifically designed for shoe manufacturing.",
            fullDescription: "High-grade synthetic leather with excellent tear resistance and flexibility, specifically engineered for the footwear industry.",
            category: { level1: "Textiles", level2: "Synthetic Leather", level3: "Footwear Material" },
            tags: ["shoes leather", "synthetic", "footwear", "durable"]
        },
        pricing: { basePrice: 150, currency: "INR", moq: 100, priceModel: "per_unit" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/GT/MT/MY-5635866/synthetic-shoes-leather-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Material": "Synthetic", "Application": "Shoe Making", "Thickness": "0.8mm - 1.2mm", "Color": "Various" },
        inventory: { inStock: true, stockQuantity: 4500 },
        metrics: { views: 280, inquiries: 30, rating: 4.5 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p32",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "PVC Synthetic Leather",
            slug: "pvc-synthetic-leather",
            shortDescription: "Versatile PVC synthetic leather available in multiple colors and textures.",
            fullDescription: "Polyvinyl Chloride (PVC) synthetic leather is a cost-effective and durable alternative to real leather, widely used in furniture, automotive interiors, and accessories.",
            category: { level1: "Textiles", level2: "Synthetic Leather", level3: "PVC Leather" },
            tags: ["pvc", "synthetic leather", "upholstery", "automotive"]
        },
        pricing: { basePrice: 150, currency: "INR", moq: 200, priceModel: "per_unit" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/JD/CV/MY-5635866/pvc-synthetic-leather-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Material": "PVC", "Width": "54 inches", "Pattern": "Plain/Textured", "Features": "Waterproof" },
        inventory: { inStock: true, stockQuantity: 10000 },
        metrics: { views: 410, inquiries: 55, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p33",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "Synthetic Footwear Leather",
            slug: "synthetic-footwear-leather",
            shortDescription: "Premium synthetic leather optimized for long-lasting footwear products.",
            fullDescription: "Specially formulated synthetic leather composition that offers superior breathability and comfort for daily wear footwear.",
            category: { level1: "Textiles", level2: "Synthetic Leather", level3: "Footwear Material" },
            tags: ["footwear", "premium", "synthetic", "breathable"]
        },
        pricing: { basePrice: 150, currency: "INR", moq: 150, priceModel: "per_unit" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/PA/PR/MY-5635866/synthetic-footwear-leather-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Material": "Synthetic", "Finish": "Matte/Glossy", "Durability": "High", "GSM": "300-400" },
        inventory: { inStock: true, stockQuantity: 3000 },
        metrics: { views: 250, inquiries: 25, rating: 4.4 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p34",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "Black Synthetic Leather",
            slug: "black-synthetic-leather",
            shortDescription: "High-grade black synthetic leather for industrial and commercial use.",
            fullDescription: "Classic black finish synthetic leather, essential for formal footwear, belts, and professional upholstery.",
            category: { level1: "Textiles", level2: "Synthetic Leather", level3: "General Purpose" },
            tags: ["black", "synthetic leather", "formal", "belts"]
        },
        pricing: { basePrice: 150, currency: "INR", moq: 100, priceModel: "per_unit" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/TX/AA/MY-5635866/synthetic-leather-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Color": "Black", "Material": "Synthetic", "Thickness": "1.0mm", "Texture": "Smooth" },
        inventory: { inStock: true, stockQuantity: 8000 },
        metrics: { views: 380, inquiries: 40, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p35",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "Plain Rexine Leather",
            slug: "plain-rexine-leather",
            shortDescription: "Classic plain rexine leather for furniture and accessory manufacturing.",
            fullDescription: "Versatile plain Rexine fabric suitable for sofa covers, seat upholstery, and general furnishing needs.",
            category: { level1: "Textiles", level2: "Rexine", level3: "Furnishing" },
            tags: ["rexine", "plain", "furniture", "upholstery"]
        },
        pricing: { basePrice: 140, currency: "INR", moq: 250, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/LR/QE/MY-5635866/embossed-leather-rexine-fabric-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Material": "Rexine", "Design": "Plain", "Width": "54 inches", "Roll Size": "30 Meters" },
        inventory: { inStock: true, stockQuantity: 6000 },
        metrics: { views: 300, inquiries: 35, rating: 4.3 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p36",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "Rexine Shoes Leather",
            slug: "rexine-shoes-leather",
            shortDescription: "Specialized rexine leather for cost-effective and durable footwear.",
            fullDescription: "Economical yet durable rexine material specifically treated for shoe upper manufacturing.",
            category: { level1: "Textiles", level2: "Rexine", level3: "Footwear" },
            tags: ["rexine", "shoes", "economical", "footwear"]
        },
        pricing: { basePrice: 130, currency: "INR", moq: 500, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/GD/QL/MY-5635866/rexine-shoes-leather-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Material": "Rexine", "Application": "Shoe Uppers", "Durability": "Medium", "Cost": "Low" },
        inventory: { inStock: true, stockQuantity: 15000 },
        metrics: { views: 220, inquiries: 20, rating: 4.2 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p37",
        manufacturerId: "m10",
        manufacturerName: "Giriraj Coated Fab Pvt. Ltd.",
        basicInfo: {
            name: "PU Synthetic Leather",
            slug: "pu-synthetic-leather",
            shortDescription: "Premium PU leather with a soft feel and excellent durability.",
            fullDescription: "Polyurethane (PU) synthetic leather offering a softer hand feel closer to genuine leather, ideal for high-end bags and apparels.",
            category: { level1: "Textiles", level2: "Synthetic Leather", level3: "High End" },
            tags: ["pu", "polyurethane", "soft feel", "bags", "apparel"]
        },
        pricing: { basePrice: 150, currency: "INR", moq: 100, priceModel: "per_unit" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/ED/RX/MY-5635866/pu-synthetic-leather-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Material": "PU (Polyurethane)", "Feel": "Soft", "Eco-friendly": "Yes", "Thickness": "0.9mm" },
        inventory: { inStock: true, stockQuantity: 4000 },
        metrics: { views: 500, inquiries: 60, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    // --- REAL DATA START (Jasch Industries) ---
    {
        _id: "p21",
        manufacturerId: "m9",
        manufacturerName: "Jasch Industries Ltd.",
        basicInfo: {
            name: "Jasch BTG 3000 KR-85 Plastic Thickness Gauge",
            slug: "jasch-btg-3000-kr-85",
            shortDescription: "Precision plastic thickness gauge for film extrusion, sheet, and co-extrusion.",
            fullDescription: "Jasch has provided leading measurement innovation for over 45 years in the Plastics market. The range of Jasch products sets a new standard in terms of quality assurance and process optimization for film extrusion, sheet, and co-extrusion.",
            category: { level1: "Machinery", level2: "Quality Control", level3: "Thickness Gauges" },
            tags: ["thickness gauge", "plastic", "extrusion", "quality control", "industrial"]
        },
        pricing: { basePrice: 500000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/XO/KX/EN/SELLER-6265195/plastic-thickness-gauge-btg-3000-1000x1000.jpg", isPrimary: true },
                { url: "https://5.imimg.com/data5/XO/KX/EN/SELLER-6265195/plastic-thickness-gauge-btg-3000-500x500.jpg" }
            ]
        },
        specs: {
            "Model Name/Number": "BTG 3000 (KR-85)",
            "Brand": "Jasch",
            "Operating Temperature": "0-50 Degree Celsius",
            "Radioactive Source": "Krypton 85, 200 mCi",
            "Accuracy": "Tolerance 0.25% or 0.25 GSM",
            "Measurement Range": "0-1200 GSM"
        },
        inventory: { inStock: true, stockQuantity: 10 },
        metrics: { views: 450, inquiries: 15, rating: 5.0 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p22",
        manufacturerId: "m9",
        manufacturerName: "Jasch Industries Ltd.",
        basicInfo: {
            name: "Jasch XRT 3000 X-Ray Plastic Thickness Gauge",
            slug: "jasch-xrt-3000-x-ray",
            shortDescription: "X-ray based thickness and profile control for calendered plastic films.",
            fullDescription: "Achieves thickness and profile control of calendered plastic films by dividing the scanned profile into three zones for precise nip adjustment and quality consistency.",
            category: { level1: "Machinery", level2: "Quality Control", level3: "Thickness Gauges" },
            tags: ["x-ray", "thickness gauge", "calendered film", "industrial"]
        },
        pricing: { basePrice: 1200000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/XV/QR/OT/SELLER-6265195/jasch-xrt-3000-x-ray-plastic-thickness-gauge-500x500.png", isPrimary: true }
            ]
        },
        specs: {
            "Model Name/Number": "XRT 3000 X-ray",
            "Brand": "Jasch",
            "Source": "X-Ray (Selectable energy and power)",
            "Accuracy": "Tolerance 1% or 0.1 GSM",
            "Range": "0-10000 GSM"
        },
        inventory: { inStock: true, stockQuantity: 5 },
        metrics: { views: 320, inquiries: 8, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p23",
        manufacturerId: "m9",
        manufacturerName: "Jasch Industries Ltd.",
        basicInfo: {
            name: "Jasch BTG 3000 Online Paint Coating Measurement",
            slug: "jasch-btg-3000-paint",
            shortDescription: "Online measurement system for paint coating thickness on metal strips.",
            fullDescription: "Online measurement system for paint coating thickness on metal strips, providing real-time data for process optimization in galvanizing and painting lines.",
            category: { level1: "Machinery", level2: "Quality Control", level3: "Coating Measurement" },
            tags: ["paint coating", "measurement", "galvanizing", "online system"]
        },
        pricing: { basePrice: 850000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/HA/YG/FE/SELLER-6265195/jasch-btg-3000-online-paint-coating-measurement-system-250x250.png", isPrimary: true }
            ]
        },
        specs: {
            "System Type": "Online Coating Measurement",
            "Model": "BTG-3000 Paint",
            "Brand": "Jasch",
            "Application": "Metal Strip Coating"
        },
        inventory: { inStock: true, stockQuantity: 8 },
        metrics: { views: 280, inquiries: 12, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p24",
        manufacturerId: "m9",
        manufacturerName: "Jasch Industries Ltd.",
        basicInfo: {
            name: "Jasch BTG 3000PP Basis Weight Sensor",
            slug: "jasch-btg-3000pp",
            shortDescription: "High-performance basis weight sensor for Paper, Board, and Tissue.",
            fullDescription: "High-performance basis weight sensor designed for Paper, Board, and Tissue quality control systems to ensure uniformity in web processes.",
            category: { level1: "Machinery", level2: "Quality Control", level3: "Paper Industry" },
            tags: ["basis weight", "sensor", "paper industry", "quality control"]
        },
        pricing: { basePrice: 350000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/CY/UR/HK/SELLER-6265195/jasch-basis-weight-sensor-500x500.png", isPrimary: true }
            ]
        },
        specs: {
            "Brand": "Jasch",
            "Series": "BTG 3000PP",
            "Application": "Paper & Tissue Industry"
        },
        inventory: { inStock: true, stockQuantity: 20 },
        metrics: { views: 210, inquiries: 9, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    // --- REAL DATA END ---

    // ========== TEXTILES & APPAREL ==========
    {
        _id: "p1",
        manufacturerId: "m1",
        manufacturerName: "TexFab India Pvt Ltd",
        basicInfo: {
            name: "Organic Cotton Poplin Fabric - GOTS Certified",
            slug: "organic-cotton-poplin-fabric",
            shortDescription: "Premium quality 100% organic cotton poplin, 120 GSM. GOTS certified.",
            fullDescription: "High-count organic cotton poplin fabric suitable for shirting, dresses, and home textiles.",
            category: { level1: "Textiles & Apparel", level2: "Fabrics", level3: "Cotton" },
            tags: ["organic", "cotton", "poplin", "shirting", "GOTS"]
        },
        pricing: { basePrice: 120, currency: "INR", moq: 500, priceModel: "tiered" },
        media: { images: [{ url: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?w=600", isPrimary: true }] },
        specs: { "Material": "100% Organic Cotton", "Weave": "Poplin", "GSM": "120", "Width": "58 inches" },
        inventory: { inStock: true, stockQuantity: 50000 },
        metrics: { views: 1200, inquiries: 45, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p2",
        manufacturerId: "m1",
        manufacturerName: "TexFab India Pvt Ltd",
        basicInfo: {
            name: "Linen Blend Shirting Fabric - Summer Collection",
            slug: "linen-blend-shirting-fabric",
            shortDescription: "60% Cotton 40% Linen blend for premium summer apparel.",
            fullDescription: "Breathable and elegant linen blend fabric for summer wear.",
            category: { level1: "Textiles & Apparel", level2: "Fabrics", level3: "Linen" },
            tags: ["linen", "blend", "shirting", "premium", "summer"]
        },
        pricing: { basePrice: 240, currency: "INR", moq: 200 },
        media: { images: [{ url: "https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?w=600", isPrimary: true }] },
        specs: { "Composition": "60% Cotton, 40% Linen", "Width": "60 inches", "Weave": "Plain" },
        inventory: { inStock: true, stockQuantity: 15000 },
        metrics: { views: 800, inquiries: 30, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p3",
        manufacturerId: "m1",
        manufacturerName: "TexFab India Pvt Ltd",
        basicInfo: {
            name: "Rayon Viscose Printed Fabric - Digital Print",
            slug: "rayon-viscose-printed-fabric",
            shortDescription: "Soft and flowy rayon fabric with vibrant digital prints.",
            fullDescription: "100% Viscose Rayon fabric with reactive digital printing.",
            category: { level1: "Textiles & Apparel", level2: "Fabrics", level3: "Rayon" },
            tags: ["rayon", "viscose", "printed", "fashion", "digital"]
        },
        pricing: { basePrice: 160, currency: "INR", moq: 300 },
        media: { images: [{ url: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?w=600", isPrimary: true }] },
        specs: { "Material": "100% Viscose", "Width": "44 inches", "GSM": "110", "Print": "Digital" },
        inventory: { inStock: true, stockQuantity: 25000 },
        metrics: { views: 1800, inquiries: 65, rating: 4.5 },
        manufacturer: { isVerified: true }
    },

    // ========== AUTOMOTIVE ==========
    {
        _id: "p4",
        manufacturerId: "m2",
        manufacturerName: "Precision Auto Components",
        basicInfo: {
            name: "CNC Machined Aluminum Gear Shaft - 6061-T6",
            slug: "cnc-machined-aluminum-gear-shaft",
            shortDescription: "High precision 6061-T6 Aluminum gear shaft for automotive.",
            fullDescription: "Custom CNC turned and milled gear shaft. IATF 16949 certified.",
            category: { level1: "Automotive", level2: "Components", level3: "Transmission" },
            tags: ["cnc", "automotive", "shaft", "aluminum", "precision"]
        },
        pricing: { basePrice: 450, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?w=600", isPrimary: true }] },
        specs: { "Material": "Aluminum 6061-T6", "Process": "CNC Turning", "Tolerance": "+/- 0.005mm" },
        inventory: { inStock: true, stockQuantity: 2000 },
        metrics: { views: 850, inquiries: 20, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p5",
        manufacturerId: "m2",
        manufacturerName: "Precision Auto Components",
        basicInfo: {
            name: "Stainless Steel Brake Disc Rotor - 304 SS",
            slug: "stainless-steel-brake-disc",
            shortDescription: "Premium quality SS 304 brake disc rotor for heavy vehicles.",
            fullDescription: "High-performance brake disc rotor with ventilated design.",
            category: { level1: "Automotive", level2: "Brake Systems", level3: "Rotors" },
            tags: ["brakes", "rotor", "stainless", "commercial"]
        },
        pricing: { basePrice: 1800, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600", isPrimary: true }] },
        specs: { "Material": "SS 304", "Diameter": "330mm", "Type": "Ventilated" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 620, inquiries: 18, rating: 4.7 },
        manufacturer: { isVerified: true }
    },

    // ========== PACKAGING ==========
    {
        _id: "p6",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Packaging Solutions",
        basicInfo: {
            name: "Eco-Friendly Kraft Paper Shopping Bag",
            slug: "kraft-paper-shopping-bag",
            shortDescription: "120 GSM recycled Kraft paper bags with twisted handles.",
            fullDescription: "Durable and sustainable packaging solution. 100% recyclable.",
            category: { level1: "Packaging", level2: "Bags", level3: "Paper Bags" },
            tags: ["eco-friendly", "kraft", "retail", "sustainable"]
        },
        pricing: { basePrice: 12, currency: "INR", moq: 1000 },
        media: { images: [{ url: "https://images.pexels.com/photos/7262897/pexels-photo-7262897.jpeg?w=600", isPrimary: true }] },
        specs: { "Material": "Recycled Kraft Paper", "GSM": "120", "Handle": "Twisted Paper" },
        inventory: { inStock: true, stockQuantity: 100000 },
        metrics: { views: 3000, inquiries: 150, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p7",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Packaging Solutions",
        basicInfo: {
            name: "Biodegradable Food Container 500ml - Bagasse",
            slug: "biodegradable-food-containers-500ml",
            shortDescription: "Sugarcane bagasse based disposable food containers.",
            fullDescription: "Eco-friendly takeaway containers made from sugarcane bagasse.",
            category: { level1: "Packaging", level2: "Food Packaging", level3: "Disposables" },
            tags: ["eco-friendly", "food", "biodegradable", "bagasse"]
        },
        pricing: { basePrice: 5, currency: "INR", moq: 2000 },
        media: { images: [{ url: "https://images.pexels.com/photos/4498124/pexels-photo-4498124.jpeg?w=600", isPrimary: true }] },
        specs: { "Capacity": "500ml", "Material": "Sugarcane Bagasse", "Grade": "Food Grade" },
        inventory: { inStock: true, stockQuantity: 200000 },
        metrics: { views: 2200, inquiries: 130, rating: 4.8 },
        manufacturer: { isVerified: true }
    },

    // ========== ELECTRONICS ==========
    {
        _id: "p8",
        manufacturerId: "m4",
        manufacturerName: "VoltMax Electronics",
        basicInfo: {
            name: "Smart IoT Gateway PCB - 4 Layer Assembly",
            slug: "smart-iot-gateway-pcb",
            shortDescription: "Custom designed 4-layer PCB for IoT gateways with ESP32.",
            fullDescription: "Industrial grade IoT gateway PCB with ESP32 module.",
            category: { level1: "Electronics", level2: "PCB Assembly", level3: "IoT" },
            tags: ["pcb", "iot", "electronics", "esp32"]
        },
        pricing: { basePrice: 1500, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=600", isPrimary: true }] },
        specs: { "Layers": "4", "Material": "FR4", "Copper": "1oz", "Finish": "ENIG" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 750, inquiries: 35, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p9",
        manufacturerId: "m4",
        manufacturerName: "VoltMax Electronics",
        basicInfo: {
            name: "LED Driver Module 50W - Constant Current",
            slug: "led-driver-module-50w",
            shortDescription: "50W constant current LED driver for commercial lighting.",
            fullDescription: "High efficiency LED driver with 90%+ efficiency.",
            category: { level1: "Electronics", level2: "LED Components", level3: "Drivers" },
            tags: ["led", "driver", "lighting", "commercial"]
        },
        pricing: { basePrice: 350, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?w=600", isPrimary: true }] },
        specs: { "Power": "50W", "Input": "AC 100-265V", "Efficiency": "90%+" },
        inventory: { inStock: true, stockQuantity: 3000 },
        metrics: { views: 890, inquiries: 42, rating: 4.6 },
        manufacturer: { isVerified: true }
    },

    // ========== CONSTRUCTION ==========
    {
        _id: "p10",
        manufacturerId: "m5",
        manufacturerName: "Royal Ceramics & Tiles",
        basicInfo: {
            name: "600x600mm Vitrified Floor Tiles - Nano Finish",
            slug: "vitrified-floor-tiles-600x600",
            shortDescription: "Double charged polished vitrified tiles with nano finish.",
            fullDescription: "Premium quality vitrified floor tiles for residential and commercial.",
            category: { level1: "Construction", level2: "Tiles", level3: "Floor Tiles" },
            tags: ["tiles", "vitrified", "flooring", "nano"]
        },
        pricing: { basePrice: 450, currency: "INR", moq: 1000 },
        media: { images: [{ url: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?w=600", isPrimary: true }] },
        specs: { "Size": "600x600mm", "Thickness": "9mm", "Finish": "Polished Nano" },
        inventory: { inStock: true, stockQuantity: 200000 },
        metrics: { views: 5000, inquiries: 210, rating: 4.5 },
        manufacturer: { isVerified: true }
    },

    // ========== CHEMICALS ==========
    {
        _id: "p11",
        manufacturerId: "m6",
        manufacturerName: "ChemPure Organics Ltd",
        basicInfo: {
            name: "Industrial Grade Acetone 99.5% - Bulk",
            slug: "acetone-99-industrial",
            shortDescription: "High purity acetone for industrial solvent applications.",
            fullDescription: "Pure Acetone (Propanone) 99.5% min purity.",
            category: { level1: "Chemicals", level2: "Solvents", level3: "Organic Solvents" },
            tags: ["acetone", "solvent", "chemical", "industrial"]
        },
        pricing: { basePrice: 85, currency: "INR", moq: 200 },
        media: { images: [{ url: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?w=600", isPrimary: true }] },
        specs: { "Purity": "99.5% Min", "Appearance": "Clear liquid", "Packaging": "200 Litre Drum" },
        inventory: { inStock: true, stockQuantity: 50000 },
        metrics: { views: 600, inquiries: 40, rating: 4.4 },
        manufacturer: { isVerified: true }
    },

    // ========== AGRICULTURE ==========
    {
        _id: "p12",
        manufacturerId: "m7",
        manufacturerName: "AgroFresh Foods",
        basicInfo: {
            name: "Dehydrated Onion Flakes - Export Quality",
            slug: "dehydrated-onion-flakes",
            shortDescription: "Export quality white onion flakes. Moisture < 6%.",
            fullDescription: "Premium dehydrated white onion flakes processed from fresh onions.",
            category: { level1: "Agriculture", level2: "Spices", level3: "Dehydrated" },
            tags: ["onion", "dehydrated", "food", "export"]
        },
        pricing: { basePrice: 180, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://images.pexels.com/photos/2165669/pexels-photo-2165669.jpeg?w=600", isPrimary: true }] },
        specs: { "Moisture": "< 6%", "Color": "White to Light Cream", "Size": "8-18 mm" },
        inventory: { inStock: true, stockQuantity: 10000 },
        metrics: { views: 900, inquiries: 60, rating: 4.3 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p13",
        manufacturerId: "m7",
        manufacturerName: "AgroFresh Foods",
        basicInfo: {
            name: "Organic Turmeric Powder - Curcumin 5%",
            slug: "organic-turmeric-powder",
            shortDescription: "USDA certified organic turmeric with 5% curcumin content.",
            fullDescription: "Premium quality organic turmeric powder from Maharashtra.",
            category: { level1: "Agriculture", level2: "Spices", level3: "Ground Spices" },
            tags: ["turmeric", "organic", "spice", "curcumin"]
        },
        pricing: { basePrice: 320, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg?w=600", isPrimary: true }] },
        specs: { "Curcumin": "5% Min", "Certification": "USDA Organic", "Origin": "Maharashtra" },
        inventory: { inStock: true, stockQuantity: 5000 },
        metrics: { views: 1100, inquiries: 55, rating: 4.7 },
        manufacturer: { isVerified: true }
    },

    // ========== MACHINERY ==========
    {
        _id: "p14",
        manufacturerId: "m8",
        manufacturerName: "SteelCraft Industries",
        basicInfo: {
            name: "Stainless Steel Storage Tank 5000L - SS 304",
            slug: "ss-storage-tank-5000l",
            shortDescription: "SS 304 vertical storage tank for food and pharma industries.",
            fullDescription: "Custom fabricated 5000 Litre stainless steel tank.",
            category: { level1: "Machinery", level2: "Industrial Tanks", level3: "Storage" },
            tags: ["tank", "stainless-steel", "industrial", "fabrication"]
        },
        pricing: { basePrice: 250000, currency: "INR", moq: 1 },
        media: { images: [{ url: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?w=600", isPrimary: true }] },
        specs: { "Capacity": "5000 Litres", "Material": "SS 304", "Thickness": "4mm Shell" },
        inventory: { inStock: false, stockQuantity: 0 },
        metrics: { views: 1500, inquiries: 15, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p15",
        manufacturerId: "m8",
        manufacturerName: "SteelCraft Industries",
        basicInfo: {
            name: "Industrial Conveyor Belt System - 5 Meter",
            slug: "industrial-conveyor-belt",
            shortDescription: "Heavy duty PVC conveyor belt system for material handling.",
            fullDescription: "Modular conveyor belt system with variable speed motor.",
            category: { level1: "Machinery", level2: "Material Handling", level3: "Conveyors" },
            tags: ["conveyor", "industrial", "automation", "handling"]
        },
        pricing: { basePrice: 85000, currency: "INR", moq: 1 },
        media: { images: [{ url: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?w=600", isPrimary: true }] },
        specs: { "Length": "5 Meters", "Belt Width": "600mm", "Motor": "1.5 HP VFD" },
        inventory: { inStock: true, stockQuantity: 5 },
        metrics: { views: 980, inquiries: 22, rating: 4.5 },
        manufacturer: { isVerified: true }
    },

    // ========== MORE PRODUCTS ==========
    {
        _id: "p16",
        manufacturerId: "m1",
        manufacturerName: "TexFab India Pvt Ltd",
        basicInfo: {
            name: "Terry Cotton Bath Towels - 400 GSM",
            slug: "terry-cotton-bath-towels",
            shortDescription: "Premium quality 100% cotton terry towels for hotels and retail.",
            fullDescription: "Soft and absorbent terry cotton bath towels.",
            category: { level1: "Textiles & Apparel", level2: "Home Textiles", level3: "Towels" },
            tags: ["towels", "cotton", "terry", "hotel"]
        },
        pricing: { basePrice: 180, currency: "INR", moq: 200 },
        media: { images: [{ url: "https://images.pexels.com/photos/5561389/pexels-photo-5561389.jpeg?w=600", isPrimary: true }] },
        specs: { "Material": "100% Cotton", "GSM": "400", "Size": "70x140 cm" },
        inventory: { inStock: true, stockQuantity: 15000 },
        metrics: { views: 1400, inquiries: 70, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p17",
        manufacturerId: "m4",
        manufacturerName: "VoltMax Electronics",
        basicInfo: {
            name: "Solar Charge Controller 30A MPPT",
            slug: "solar-charge-controller-mppt",
            shortDescription: "30A MPPT solar charge controller with LCD display.",
            fullDescription: "High efficiency MPPT charge controller for solar power systems.",
            category: { level1: "Electronics", level2: "Solar Products", level3: "Controllers" },
            tags: ["solar", "mppt", "charge controller", "renewable"]
        },
        pricing: { basePrice: 2200, currency: "INR", moq: 25 },
        media: { images: [{ url: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?w=600", isPrimary: true }] },
        specs: { "Current": "30A", "Type": "MPPT", "Voltage": "12V/24V Auto" },
        inventory: { inStock: true, stockQuantity: 800 },
        metrics: { views: 1250, inquiries: 48, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p18",
        manufacturerId: "m3",
        manufacturerName: "GreenEarth Packaging Solutions",
        basicInfo: {
            name: "Corrugated Shipping Boxes - 3 Ply",
            slug: "corrugated-shipping-boxes",
            shortDescription: "3-ply corrugated boxes for e-commerce and shipping.",
            fullDescription: "Sturdy corrugated boxes made from recycled material.",
            category: { level1: "Packaging", level2: "Boxes", level3: "Corrugated" },
            tags: ["corrugated", "boxes", "shipping", "ecommerce"]
        },
        pricing: { basePrice: 18, currency: "INR", moq: 500 },
        media: { images: [{ url: "https://images.pexels.com/photos/4553177/pexels-photo-4553177.jpeg?w=600", isPrimary: true }] },
        specs: { "Ply": "3", "Material": "Recycled Paper", "Size": "12x10x8 inches" },
        inventory: { inStock: true, stockQuantity: 50000 },
        metrics: { views: 2100, inquiries: 95, rating: 4.5 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p19",
        manufacturerId: "m5",
        manufacturerName: "Royal Ceramics & Tiles",
        basicInfo: {
            name: "Outdoor Paving Tiles 400x400mm - Anti-Slip",
            slug: "outdoor-paving-tiles",
            shortDescription: "Anti-slip outdoor paving tiles for gardens and driveways.",
            fullDescription: "Heavy duty paving tiles with anti-slip surface.",
            category: { level1: "Construction", level2: "Tiles", level3: "Outdoor" },
            tags: ["outdoor", "paving", "anti-slip", "garden"]
        },
        pricing: { basePrice: 85, currency: "INR", moq: 500 },
        media: { images: [{ url: "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?w=600", isPrimary: true }] },
        specs: { "Size": "400x400mm", "Thickness": "20mm", "Surface": "Anti-Slip" },
        inventory: { inStock: true, stockQuantity: 30000 },
        metrics: { views: 920, inquiries: 38, rating: 4.4 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p20",
        manufacturerId: "m2",
        manufacturerName: "Precision Auto Components",
        basicInfo: {
            name: "Engine Mount Bracket - Die Cast Aluminum",
            slug: "engine-mount-bracket",
            shortDescription: "Die cast aluminum engine mount bracket for passenger vehicles.",
            fullDescription: "High strength die cast aluminum bracket for engine mounting.",
            category: { level1: "Automotive", level2: "Components", level3: "Engine Parts" },
            tags: ["engine", "mount", "aluminum", "die-cast"]
        },
        pricing: { basePrice: 650, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?w=600", isPrimary: true }] },
        specs: { "Material": "A380 Aluminum", "Process": "Die Casting", "Finish": "Machined" },
        inventory: { inStock: true, stockQuantity: 1500 },
        metrics: { views: 720, inquiries: 28, rating: 4.8 },
        manufacturer: { isVerified: true }
    },

    // --- REAL DATA MOVED TO TOP ---
];
