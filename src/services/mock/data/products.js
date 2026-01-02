export const products = [
    // --- REAL DATA START (Fermoscapes) ---
    {
        _id: "p38",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Sabai Palm Leaf Wall Baskets",
            slug: "sabai-palm-leaf-wall-baskets",
            shortDescription: "Handmade Sabai Palm Leaf Baskets for wall decor.",
            fullDescription: "Beautifully handcrafted wall baskets made from Sabai grass and date palm leaves. Adds a natural and bohemian touch to any living space. Perfect for wall decor or serving dry snacks.",
            category: { level1: "Home & Garden", level2: "Decor", level3: "Wall Decor" },
            tags: ["handmade", "wall basket", "sabai", "decor"]
        },
        pricing: { priceModel: "request_quote", basePrice: 450, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/9/341280804/NH/QI/SP/85554914/bw4-500x500.webp", isPrimary: true }] },
        specs: { "Material": "Sabai Grass", "Usage": "Decor", "Type": "Handmade" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 150, inquiries: 12, rating: 5.0 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p39",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "V Shaped Natural Gift Basket",
            slug: "v-shaped-natural-gift-basket",
            shortDescription: "Natural fiber V-shaped gift basket.",
            fullDescription: "Elegant V-shaped basket woven from natural fibers, perfect for gifting hampers or home storage.",
            category: { level1: "Home & Garden", level2: "Storage", level3: "Baskets" },
            tags: ["basket", "gift", "natural", "storage"]
        },
        pricing: { priceModel: "request_quote", basePrice: 240, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387433083/JH/SE/JZ/85554914/v-shaped-natural-gift-basket-500x500.jpg", isPrimary: true }] },
        specs: { "Shape": "V-Shape", "Material": "Natural Fiber", "Usage": "Gifting" },
        inventory: { inStock: true, stockQuantity: 300 },
        metrics: { views: 120, inquiries: 8, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p40",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Date Palm Leaf Storage Basket",
            slug: "date-palm-leaf-storage-basket",
            shortDescription: "Durable date palm leaf storage basket.",
            fullDescription: "Sturdy storage basket crafted from date palm leaves. Ideal for organizing sustainable homes.",
            category: { level1: "Home & Garden", level2: "Storage", level3: "Baskets" },
            tags: ["storage", "date palm", "basket", "sustainable"]
        },
        pricing: { priceModel: "request_quote", basePrice: 280, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/386702356/OI/HJ/VD/85554914/kauna-grass-hamper-basket-with-lid-kauna-grass-organizer-basket-500x500.png", isPrimary: true }] },
        specs: { "Material": "Date Palm", "Type": "Storage", "Feature": "Durable" },
        inventory: { inStock: true, stockQuantity: 250 },
        metrics: { views: 180, inquiries: 15, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p41",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "12 Inch Natural Nomad Basket",
            slug: "natural-nomad-basket-12-inch",
            shortDescription: "12-inch natural fiber nomad basket.",
            fullDescription: "Classic nomad style basket, 12 inches in size. Versatile use for decor or storage.",
            category: { level1: "Home & Garden", level2: "Decor", level3: "Baskets" },
            tags: ["nomad", "basket", "12 inch", "decor"]
        },
        pricing: { priceModel: "request_quote", basePrice: 320, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/386720434/YZ/NW/BJ/85554914/fsog0059-01-1-500x500.png", isPrimary: true }] },
        specs: { "Size": "12 Inch", "Style": "Nomad", "Material": "Natural Fiber" },
        inventory: { inStock: true, stockQuantity: 150 },
        metrics: { views: 100, inquiries: 5, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p42",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Kauna Grass Small Hamper Basket",
            slug: "kauna-grass-small-hamper-basket",
            shortDescription: "Ethically sourced Kauna grass hamper basket.",
            fullDescription: "Small hamper basket suitable for gift packaging, made from Kauna grass.",
            category: { level1: "Home & Garden", level2: "Packaging", level3: "Gift Baskets" },
            tags: ["kauna grass", "hamper", "gift", "small"]
        },
        pricing: { priceModel: "request_quote", basePrice: 210, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387433965/XR/ZN/HZ/85554914/kauna-grass-small-hamper-basket-500x500.jpg", isPrimary: true }] },
        specs: { "Material": "Kauna Grass", "Size": "Small", "Usage": "Hamper" },
        inventory: { inStock: true, stockQuantity: 600 },
        metrics: { views: 220, inquiries: 25, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p43",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Handmade Paper Diaries",
            slug: "handmade-paper-diaries",
            shortDescription: "Eco-friendly handmade paper diaries.",
            fullDescription: "Artisanal diaries made with handmade paper. Perfect for journaling and sketching.",
            category: { level1: "Stationery", level2: "Notebooks", level3: "Diaries" },
            tags: ["diary", "handmade paper", "stationery", "eco-friendly"]
        },
        pricing: { priceModel: "request_quote", basePrice: 250, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2025/4/506591939/QG/YT/EF/85554914/handmade-paper-diaries-500x500.jpg", isPrimary: true }] },
        specs: { "Material": "Handmade Paper", "Type": "Diary", "Binding": "Stitched/Bound" },
        inventory: { inStock: true, stockQuantity: 1000 },
        metrics: { views: 300, inquiries: 40, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p44",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Pink Handmade Block Printed Diary",
            slug: "pink-handmade-block-printed-diary",
            shortDescription: "Pink block printed diary with handmade paper.",
            fullDescription: "Lovely pink diary featuring traditional block printing on the cover.",
            category: { level1: "Stationery", level2: "Notebooks", level3: "Diaries" },
            tags: ["diary", "pink", "block print", "handmade"]
        },
        pricing: { priceModel: "request_quote", basePrice: 250, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/9/341282202/HF/WK/II/85554914/1-693743ff-fb12-4f13-ab45-b34c7b5d447e-500x500.webp", isPrimary: true }] },
        specs: { "Color": "Pink", "Print": "Block Print", "Material": "Paper/Fabric" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 180, inquiries: 20, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p45",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Turquoise Handmade Block Printed Diary",
            slug: "turquoise-handmade-block-printed-diary",
            shortDescription: "Turquoise block printed diary.",
            fullDescription: "Vibrant turquoise diary with unique block print design.",
            category: { level1: "Stationery", level2: "Notebooks", level3: "Diaries" },
            tags: ["diary", "turquoise", "block print", "handmade"]
        },
        pricing: { priceModel: "request_quote", basePrice: 260, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/9/341284564/QZ/UR/BG/85554914/d-500x500.webp", isPrimary: true }] },
        specs: { "Color": "Turquoise", "Print": "Block Print", "Material": "Handmade Paper" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 160, inquiries: 18, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p46",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "White Handmade Block Printed Diary",
            slug: "white-handmade-block-printed-diary",
            shortDescription: "White block printed diary.",
            fullDescription: "Classic white diary with elegant block printed motifs.",
            category: { level1: "Stationery", level2: "Notebooks", level3: "Diaries" },
            tags: ["diary", "white", "block print", "classic"]
        },
        pricing: { priceModel: "request_quote", basePrice: 250, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/9/341283970/JQ/ZM/FQ/85554914/6-61953170-c80f-4dd2-bc9d-34f8911aa7b2-500x500.webp", isPrimary: true }] },
        specs: { "Color": "White", "Print": "Block Print", "Material": "Handmade Paper" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 150, inquiries: 15, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p47",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Handmade Natural Grass Beach Tote Bag",
            slug: "handmade-natural-grass-beach-tote-bag",
            shortDescription: "Natural grass tote bag for beach outings.",
            fullDescription: "Stylish and spacious tote bag woven from natural grass. Perfect for beach days.",
            category: { level1: "Fashion Accessories", level2: "Bags", level3: "Tote Bags" },
            tags: ["tote bag", "beach", "grass", "handmade"]
        },
        pricing: { priceModel: "request_quote", basePrice: 350, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387427596/TC/MV/MU/85554914/handmade-natural-grass-beach-tote-bag-500x500.jpg", isPrimary: true }] },
        specs: { "Material": "Natural Grass", "Style": "Tote", "Occasion": "Beach/Casual" },
        inventory: { inStock: true, stockQuantity: 200 },
        metrics: { views: 250, inquiries: 30, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p48",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Kauna Grass Bohemian Picnic Bag",
            slug: "kauna-grass-bohemian-picnic-bag",
            shortDescription: "Bohemian style Kauna grass picnic bag.",
            fullDescription: "Charming picnic bag made from Kauna grass with a bohemian flair.",
            category: { level1: "Fashion Accessories", level2: "Bags", level3: "Picnic Bags" },
            tags: ["picnic bag", "bohemian", "kauna grass", "basket"]
        },
        pricing: { priceModel: "request_quote", basePrice: 330, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/9/345088891/XV/IE/SV/85554914/kauna-grass-picnic-bag-500x500.png", isPrimary: true }] },
        specs: { "Material": "Kauna Grass", "Style": "Bohemian", "Usage": "Picnic" },
        inventory: { inStock: true, stockQuantity: 150 },
        metrics: { views: 200, inquiries: 22, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p49",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Kauna Grass U Shaped Tote Bag",
            slug: "kauna-grass-u-shaped-tote-bag",
            shortDescription: "U-shaped Kauna grass tote bag.",
            fullDescription: "Unique U-shaped tote bag woven from durable Kauna grass.",
            category: { level1: "Fashion Accessories", level2: "Bags", level3: "Tote Bags" },
            tags: ["tote bag", "u-shaped", "kauna grass", "fashion"]
        },
        pricing: { priceModel: "request_quote", basePrice: 340, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387430810/ZS/SW/YU/85554914/kauna-grass-u-shaped-tote-bag-500x500.jpg", isPrimary: true }] },
        specs: { "Shape": "U-Shape", "Material": "Kauna Grass", "Style": "Modern" },
        inventory: { inStock: true, stockQuantity: 200 },
        metrics: { views: 220, inquiries: 25, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p50",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Date Palm Planter Table Top Plant Pot",
            slug: "date-palm-planter-table-top",
            shortDescription: "Date palm fiber tabletop planter.",
            fullDescription: "Eco-friendly tabletop planter pot made from date palm fibers. Adds greenery availability to your desk.",
            category: { level1: "Home & Garden", level2: "Garden", level3: "Planters" },
            tags: ["planter", "date palm", "table top", "gardening"]
        },
        pricing: { priceModel: "request_quote", basePrice: 220, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387429810/TF/ZU/RG/85554914/date-palm-planter-table-top-planter-small-planter-500x500.jpg", isPrimary: true }] },
        specs: { "Material": "Date Palm Fiber", "Usage": "Table Top", "Type": "Planter" },
        inventory: { inStock: true, stockQuantity: 400 },
        metrics: { views: 180, inquiries: 15, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p51",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Dual Color Sabai Grass Planter",
            slug: "dual-color-sabai-grass-planter",
            shortDescription: "Dual color (Natural & Maroon) Sabai grass planter.",
            fullDescription: "Attractive dual-tone planter woven from Sabai grass in natural and maroon hues.",
            category: { level1: "Home & Garden", level2: "Garden", level3: "Planters" },
            tags: ["planter", "sabai grass", "dual color", "maroon"]
        },
        pricing: { priceModel: "request_quote", basePrice: 290, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387430159/KD/FE/FO/85554914/dual-color-sabai-grass-planter-natural-maroon-500x500.jpg", isPrimary: true }] },
        specs: { "Color": "Natural & Maroon", "Material": "Sabai Grass", "Type": "Planter" },
        inventory: { inStock: true, stockQuantity: 300 },
        metrics: { views: 200, inquiries: 20, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p52",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "9 Inch Sabai Grass Planter Pot",
            slug: "9-inch-sabai-grass-planter-pot",
            shortDescription: "9-inch Royal Blue Sabai grass planter pot.",
            fullDescription: "Vibrant royal blue 9-inch planter pot crafted from Sabai grass.",
            category: { level1: "Home & Garden", level2: "Garden", level3: "Planters" },
            tags: ["planter", "9 inch", "royal blue", "sabai grass"]
        },
        pricing: { priceModel: "request_quote", basePrice: 310, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387428246/EA/CO/ND/85554914/dual-color-sabai-grass-planter-natural-royal-blue-500x500.jpg", isPrimary: true }] },
        specs: { "Size": "9 Inch", "Color": "Royal Blue", "Material": "Sabai Grass" },
        inventory: { inStock: true, stockQuantity: 250 },
        metrics: { views: 210, inquiries: 18, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p53",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "14 Inch Macrame Wall Hanging Mirror",
            slug: "14-inch-macrame-wall-hanging-mirror",
            shortDescription: "14-inch Macrame wall hanging mirror.",
            fullDescription: "Bohemian inspired 14-inch macrame wall hanging mirror with intricate knotting.",
            category: { level1: "Home & Garden", level2: "Decor", level3: "Mirrors" },
            tags: ["mirror", "macrame", "wall hanging", "14 inch"]
        },
        pricing: { priceModel: "request_quote", basePrice: 850, currency: "INR", moq: 20 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/386747120/BE/DZ/JV/85554914/a1-2-500x500.jpeg", isPrimary: true }] },
        specs: { "Diameter": "14 Inch", "Material": "Macrame/Glass", "Style": "Boho" },
        inventory: { inStock: true, stockQuantity: 100 },
        metrics: { views: 300, inquiries: 35, rating: 5.0 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p54",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Macrame Wall Hanging Mirror",
            slug: "macrame-wall-hanging-mirror-artisanal",
            shortDescription: "Artisanal macrame mirror for home decor.",
            fullDescription: "Handcrafted artisanal macrame mirror, perfect for adding texture to walls.",
            category: { level1: "Home & Garden", level2: "Decor", level3: "Mirrors" },
            tags: ["mirror", "macrame", "artisanal", "decor"]
        },
        pricing: { priceModel: "request_quote", basePrice: 270, currency: "INR", moq: 20 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/386745574/XB/HW/TA/85554914/a1-5-500x500.jpeg", isPrimary: true }] },
        specs: { "Type": "Wall Hanging", "Material": "Macrame", "Use": "Decor" },
        inventory: { inStock: true, stockQuantity: 120 },
        metrics: { views: 250, inquiries: 20, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p55",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Festival Corporate Gift Hamper",
            slug: "festival-corporate-gift-hamper",
            shortDescription: "Corporate gift hamper for festivals.",
            fullDescription: "Premium gift hamper curated for corporate festival gifting.",
            category: { level1: "Gifts", level2: "Corporate Gifts", level3: "Hampers" },
            tags: ["gift hamper", "corporate", "festival", "premium"]
        },
        pricing: { priceModel: "request_quote", basePrice: 350, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2025/5/507668110/FT/IN/KX/85554914/festival-corporate-gift-hamper-250x250.jpg", isPrimary: true }] },
        specs: { "Occasion": "Festival", "Type": "Corporate Gift", "Contents": "Assorted" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 400, inquiries: 60, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p56",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Gift Hamper",
            slug: "gift-hamper-assorted",
            shortDescription: "Assorted gift hamper.",
            fullDescription: "Versatile assorted gift hamper suitable for various occasions.",
            category: { level1: "Gifts", level2: "Hampers", level3: "Assorted" },
            tags: ["gift", "hamper", "assorted", "occasion"]
        },
        pricing: { priceModel: "request_quote", basePrice: 300, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2025/5/507674775/BG/RR/MY/85554914/gift-hamper-500x500.png", isPrimary: true }] },
        specs: { "Type": "Hamper", "Usage": "Gifting", "Style": "Assorted" },
        inventory: { inStock: true, stockQuantity: 400 },
        metrics: { views: 350, inquiries: 45, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p57",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Kauna Grass Organizer Handle Tray",
            slug: "kauna-grass-organizer-handle-tray",
            shortDescription: "Kauna grass tray with handles.",
            fullDescription: "Functional and stylish Kauna grass tray with integrated handles.",
            category: { level1: "Home & Garden", level2: "Kitchen", level3: "Trays" },
            tags: ["tray", "kauna grass", "organizer", "handles"]
        },
        pricing: { priceModel: "request_quote", basePrice: 350, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/8/334899795/AN/XG/JQ/85554914/10025-500x500.png", isPrimary: true }] },
        specs: { "Material": "Kauna Grass", "Features": "Handles", "Shape": "Rectangular" },
        inventory: { inStock: true, stockQuantity: 400 },
        metrics: { views: 280, inquiries: 30, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p58",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Tribal Dance Handmade Round Serving Tray",
            slug: "tribal-dance-handmade-tray",
            shortDescription: "Round serving tray with Tribal Dance motif.",
            fullDescription: "Artistic round serving tray featuring a handmade Tribal Dance motif.",
            category: { level1: "Home & Garden", level2: "Kitchen", level3: "Trays" },
            tags: ["tray", "tribal art", "handmade", "serving"]
        },
        pricing: { priceModel: "request_quote", basePrice: 230, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/387424737/BP/TW/ZG/85554914/tribal-dance-handmade-round-serving-tray-500x500.jpg", isPrimary: true }] },
        specs: { "Shape": "Round", "Design": "Tribal Dance", "Material": "Mixed" },
        inventory: { inStock: true, stockQuantity: 200 },
        metrics: { views: 220, inquiries: 25, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p59",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Wedding Gift Hamper Baskets",
            slug: "wedding-gift-hamper-baskets",
            shortDescription: "Elegant wedding gift hamper baskets.",
            fullDescription: "Beautifully designed baskets specifically for wedding gift hampers.",
            category: { level1: "Home & Garden", level2: "Packaging", level3: "Gift Baskets" },
            tags: ["wedding", "hamper", "basket", "elegant"]
        },
        pricing: { priceModel: "request_quote", basePrice: 550, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2025/5/507672531/NA/JW/LV/85554914/wedding-gift-hamper-baskets-250x250.jpg", isPrimary: true }] },
        specs: { "Usage": "Wedding Gifting", "Material": "Wicker", "Style": "Elegant" },
        inventory: { inStock: true, stockQuantity: 300 },
        metrics: { views: 350, inquiries: 50, rating: 5.0 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p60",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Multipurpose Date Palm Storage Box",
            slug: "multipurpose-date-palm-storage-box",
            shortDescription: "Storage box made from date palm leaves.",
            fullDescription: "Eco-friendly storage box crafted from date palm leaves. Versatile and durable.",
            category: { level1: "Home & Garden", level2: "Storage", level3: "Boxes" },
            tags: ["storage", "box", "date palm", "multipurpose"]
        },
        pricing: { priceModel: "request_quote", basePrice: 650, currency: "INR", moq: 20 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/8/335284044/QG/AF/TK/85554914/hnet-com-image-2023-08-16t180032-985-500x500.png", isPrimary: true }] },
        specs: { "Material": "Date Palm", "Type": "Box", "Feature": "Durable" },
        inventory: { inStock: true, stockQuantity: 300 },
        metrics: { views: 280, inquiries: 25, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p61",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Naomi Macrame Hand Woven Lampshade",
            slug: "naomi-macrame-lampshade",
            shortDescription: "Naomi macrame lampshade.",
            fullDescription: "Exquisite Naomi hand woven macrame lampshade for atmospheric lighting.",
            category: { level1: "Home & Garden", level2: "Lighting", level3: "Lampshades" },
            tags: ["lampshade", "macrame", "hand woven", "lighting"]
        },
        pricing: { priceModel: "request_quote", basePrice: 340, currency: "INR", moq: 20 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2024/2/386742038/FX/OB/ZG/85554914/primary-11-500x500.jpeg", isPrimary: true }] },
        specs: { "Material": "Macrame", "Type": "Lampshade", "Name": "Naomi" },
        inventory: { inStock: true, stockQuantity: 100 },
        metrics: { views: 240, inquiries: 22, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p62",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Dual Color Table Tray Organizer",
            slug: "dual-color-table-tray-organizer",
            shortDescription: "Table tray organizer with dual color accents.",
            fullDescription: "Stylish table tray organizer featuring dual color accents for a modern look.",
            category: { level1: "Home & Garden", level2: "Storage", level3: "Desk Organizers" },
            tags: ["organizer", "tray", "dual color", "desk"]
        },
        pricing: { priceModel: "request_quote", basePrice: 280, currency: "INR", moq: 50 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/9/345072178/DR/DZ/QA/85554914/dual-color-table-tray-organizer-500x500.png", isPrimary: true }] },
        specs: { "Type": "Tray Organizer", "Color": "Dual", "Usage": "Desk/Table" },
        inventory: { inStock: true, stockQuantity: 250 },
        metrics: { views: 200, inquiries: 15, rating: 4.7 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p63",
        manufacturerId: "m11",
        manufacturerName: "Fermoscapes Private Limited",
        basicInfo: {
            name: "Handmade Natural Coasters",
            slug: "handmade-natural-coasters",
            shortDescription: "Natural fiber coasters.",
            fullDescription: "Set of handmade natural fiber coasters to protect your surfaces.",
            category: { level1: "Home & Garden", level2: "Kitchen", level3: "Tableware" },
            tags: ["coasters", "natural", "handmade", "tableware"]
        },
        pricing: { priceModel: "request_quote", basePrice: 200, currency: "INR", moq: 100 },
        media: { images: [{ url: "https://5.imimg.com/data5/SELLER/Default/2023/8/334900125/OM/WG/BM/85554914/10022-500x500.png", isPrimary: true }] },
        specs: { "Material": "Natural Fiber", "Type": "Coaster", "Set": "Yes" },
        inventory: { inStock: true, stockQuantity: 500 },
        metrics: { views: 180, inquiries: 10, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    // --- REAL DATA END (Fermoscapes) ---
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
            shortDescription: "Precision plastic thickness gauge using Krypton-85 source for film extrusion.",
            fullDescription: "Jasch BTG 3000 (KR-85) sets a new standard in quality assurance for film extrusion. It provides non-contact measurement with high precision, ensuring consistent thickness and process optimization.",
            category: { level1: "Machinery", level2: "Quality Control", level3: "Thickness Gauges" },
            tags: ["thickness gauge", "plastic", "extrusion", "krypton-85", "industrial"]
        },
        pricing: { basePrice: 500000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/XO/KX/EN/SELLER-6265195/plastic-thickness-gauge-btg-3000-1000x1000.jpg", isPrimary: true },
                { url: "https://5.imimg.com/data5/OM/TB/JO/SELLER-6265195/plastic-thickness-gauge-btg-3000-500x500.jpg" }
            ]
        },
        specs: { "Model": "BTG 3000", "Source": "Kr-85 (Beta)", "Application": "Plastic Film/Sheet", "Accuracy": "+/- 0.25%" },
        inventory: { inStock: true, stockQuantity: 5 },
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
            shortDescription: "X-ray based thickness control for calendered plastic films.",
            fullDescription: "The XRT 3000 uses X-Ray technology for precise thickness and profile control of calendered plastic films. It features 3-zone profile dividing for accurate nip adjustment.",
            category: { level1: "Machinery", level2: "Quality Control", level3: "X-Ray Gauges" },
            tags: ["x-ray", "thickness gauge", "calendered film", "industrial"]
        },
        pricing: { basePrice: 1200000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/XV/QR/OT/SELLER-6265195/jasch-xrt-3000-x-ray-plastic-thickness-gauge-500x500.png", isPrimary: true }
            ]
        },
        specs: { "Technology": "X-Ray", "Application": "Calendered Film", "Feature": "Non-Nuclear", "Response": "Fast" },
        inventory: { inStock: true, stockQuantity: 2 },
        metrics: { views: 320, inquiries: 10, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p23",
        manufacturerId: "m9",
        manufacturerName: "Jasch Industries Ltd.",
        basicInfo: {
            name: "Jasch BTG 3000PP Basis Weight Sensor",
            slug: "jasch-btg-3000pp-sensor",
            shortDescription: "Online basis weight measurement sensor for paper and coating applications.",
            fullDescription: "The BTG 3000PP is designed for online measurement of basis weight (GSM) in paper, board, and coating industries. It ensures consistent product quality and material savings.",
            category: { level1: "Machinery", level2: "Sensors", level3: "Weight Sensors" },
            tags: ["gs sensor", "paper", "coating", "basis weight"]
        },
        pricing: { basePrice: 350000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/CY/UR/HK/SELLER-6265195/jasch-basis-weight-sensor-500x500.png", isPrimary: true }
            ]
        },
        specs: { "Type": "Basis Weight", "Industry": "Paper/Coating", "Output": "Digital/Analog", "Range": "Customizable" },
        inventory: { inStock: true, stockQuantity: 8 },
        metrics: { views: 280, inquiries: 8, rating: 4.6 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p24",
        manufacturerId: "m9",
        manufacturerName: "Jasch Industries Ltd.",
        basicInfo: {
            name: "Jasch ITG-2000/XTG-2000 Thickness System",
            slug: "jasch-itg-xtg-2000",
            shortDescription: "Isotope and X-Ray strip thickness measurement for cold rolling mills.",
            fullDescription: "A robust thickness measurement system for steel and metal strips in cold rolling mills. Available in both Isotope (ITG) and X-Ray (XTG) variants for versatile application.",
            category: { level1: "Machinery", level2: "Metal Working", level3: "Rolling Mills" },
            tags: ["rolling mill", "steel", "thickness measurement", "x-ray", "isotope"]
        },
        pricing: { basePrice: 1500000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/SELLER/Default/2021/3/KM/GQ/GZ/6265195/jasch-itg-2000-xtg-2000-isotope-and-x-ray-strip-thickness-measurement-system-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Application": "Cold Rolling Mills", "Variants": "ITG (Isotope) / XTG (X-Ray)", "Accuracy": "High", "Control": "Automatic" },
        inventory: { inStock: true, stockQuantity: 1 },
        metrics: { views: 500, inquiries: 20, rating: 4.9 },
        manufacturer: { isVerified: true }
    },
    {
        _id: "p25",
        manufacturerId: "m9",
        manufacturerName: "Jasch Industries Ltd.",
        basicInfo: {
            name: "Jasch XRF-3000 Online Coating Measurement",
            slug: "jasch-xrf-3000-coating",
            shortDescription: "Online coating weight measurement system using X-Ray Fluorescence.",
            fullDescription: "The XRF-3000 utilizes X-Ray Fluorescence technology for precise, non-contact measurement of coating weights (e.g., Zinc on Steel) on process lines.",
            category: { level1: "Machinery", level2: "Quality Control", level3: "Coating Measurement" },
            tags: ["coating", "xrf", "galvanizing", "thickness"]
        },
        pricing: { basePrice: 1800000, currency: "INR", moq: 1, priceModel: "request_quote" },
        media: {
            images: [
                { url: "https://5.imimg.com/data5/SELLER/Default/2021/3/XO/YP/DA/6265195/jasxh-xrf-3000-online-coating-measurement-system-500x500.jpg", isPrimary: true }
            ]
        },
        specs: { "Method": "X-Ray Fluorescence", "Application": "Galvanizing/Coating", "Accuracy": "+/- 1%", "Display": "Digital" },
        inventory: { inStock: true, stockQuantity: 1 },
        metrics: { views: 350, inquiries: 12, rating: 4.8 },
        manufacturer: { isVerified: true }
    },
    // --- REAL DATA END (Jasch) ---
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
