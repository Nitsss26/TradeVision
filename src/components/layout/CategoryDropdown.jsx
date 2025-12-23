import React, { useState } from 'react';
import { ChevronRight, Shirt, Cpu, Car, Laptop, Sparkles, Home, Gamepad2, Wrench, Baby, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [

    {
        id: 'sports',
        name: 'Sports & Entertainment',
        icon: Gamepad2,
        products: [
            { name: 'Dumbbells', image: 'https://images.pexels.com/photos/4162485/pexels-photo-4162485.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Board Games', image: 'https://images.pexels.com/photos/776654/pexels-photo-776654.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Self Defense', image: 'https://images.pexels.com/photos/7045467/pexels-photo-7045467.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Footballs', image: 'https://images.pexels.com/photos/47354/the-ball-stadion-football-the-pitch-47354.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Hunting Gear', image: 'https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Bar Accessories', image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Weight Plates', image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Game Machine', image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Pool Cue', image: 'https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Coin Games', image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Kites', image: 'https://images.pexels.com/photos/1729012/pexels-photo-1729012.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Free Weights', image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },

    {
        id: 'recommended',
        name: 'Categories for you',
        icon: Sparkles,
        products: [
            { name: 'Headphones', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'RAM Modules', image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Keyboards', image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Gaming Laptops', image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Cameras', image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Laptops', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Monitors', image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Speakers', image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Tablets', image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Earbuds', image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Chargers', image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'USB Cables', image: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'home-garden',
        name: 'Home & Garden',
        icon: Home,
        products: [
            { name: 'Furniture', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Lighting', image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Kitchenware', image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Garden Tools', image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Bedding', image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Decor', image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Curtains', image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Rugs', image: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Mirrors', image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Clocks', image: 'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Planters', image: 'https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Vases', image: 'https://images.pexels.com/photos/1116452/pexels-photo-1116452.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'kids-toys',
        name: 'Parents, Kids & Toys',
        icon: Baby,
        products: [
            { name: 'Baby Clothes', image: 'https://images.pexels.com/photos/3661387/pexels-photo-3661387.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Strollers', image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Toys', image: 'https://images.pexels.com/photos/163036/mario-luigi-figures-toys-163036.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Diapers', image: 'https://images.pexels.com/photos/3875089/pexels-photo-3875089.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Baby Bottles', image: 'https://images.pexels.com/photos/3875159/pexels-photo-3875159.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Cribs', image: 'https://images.pexels.com/photos/6393160/pexels-photo-6393160.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Kids Bikes', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Building Blocks', image: 'https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Dolls', image: 'https://images.pexels.com/photos/35176/dolls-toys-colorful-figure.jpg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Puzzles', image: 'https://images.pexels.com/photos/3482442/pexels-photo-3482442.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Baby Monitors', image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'High Chairs', image: 'https://images.pexels.com/photos/6393144/pexels-photo-6393144.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'office',
        name: 'School & Office Supplies',
        icon: BookOpen,
        products: [
            { name: 'Notebooks', image: 'https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Pens', image: 'https://images.pexels.com/photos/159752/pencil-education-pencil-sharpener-art-materials-159752.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Calculators', image: 'https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Desk Organizers', image: 'https://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Staplers', image: 'https://images.pexels.com/photos/6231557/pexels-photo-6231557.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'File Folders', image: 'https://images.pexels.com/photos/4792284/pexels-photo-4792284.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Whiteboards', image: 'https://images.pexels.com/photos/7092355/pexels-photo-7092355.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Markers', image: 'https://images.pexels.com/photos/4226926/pexels-photo-4226926.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Scissors', image: 'https://images.pexels.com/photos/4226919/pexels-photo-4226919.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Tape', image: 'https://images.pexels.com/photos/4226910/pexels-photo-4226910.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Rulers', image: 'https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Binders', image: 'https://images.pexels.com/photos/4792289/pexels-photo-4792289.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'industrial',
        name: 'Industrial Machinery',
        icon: Wrench,
        products: [
            { name: 'CNC Machines', image: 'https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Welding', image: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Power Tools', image: 'https://images.pexels.com/photos/1598493/pexels-photo-1598493.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Generators', image: 'https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Compressors', image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Forklifts', image: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Conveyors', image: 'https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Pumps', image: 'https://images.pexels.com/photos/2569997/pexels-photo-2569997.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Motors', image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Valves', image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Bearings', image: 'https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Chains', image: 'https://images.pexels.com/photos/2569851/pexels-photo-2569851.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'textiles',
        name: 'Apparel & Accessories',
        icon: Shirt,
        products: [
            { name: 'T-Shirts', image: 'https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Dresses', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Jackets', image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Watches', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Handbags', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Sunglasses', image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Scarves', image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Belts', image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Hats', image: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Socks', image: 'https://images.pexels.com/photos/6311623/pexels-photo-6311623.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Gloves', image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Jewelry', image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'consumer-electronics',
        name: 'Consumer Electronics',
        icon: Laptop,
        products: [
            { name: 'Smartphones', image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Tablets', image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Smart Watches', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Earbuds', image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Speakers', image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Monitors', image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Printers', image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Routers', image: 'https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'External HDDs', image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Webcams', image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Microphones', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Gaming Consoles', image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'vehicle-parts',
        name: 'Vehicle Parts & Accessories',
        icon: Car,
        products: [
            { name: 'Car Audio', image: 'https://images.pexels.com/photos/3784567/pexels-photo-3784567.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'GPS Devices', image: 'https://images.pexels.com/photos/1093626/pexels-photo-1093626.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Car Covers', image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Dash Cams', image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Seat Covers', image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Car Chargers', image: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Floor Mats', image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Air Fresheners', image: 'https://images.pexels.com/photos/3802506/pexels-photo-3802506.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Wiper Blades', image: 'https://images.pexels.com/photos/1545755/pexels-photo-1545755.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Headlights', image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Tires', image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Batteries', image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
    {
        id: 'electrical',
        name: 'Electronic Components',
        icon: Cpu,
        products: [
            { name: 'Resistors', image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Capacitors', image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Circuit Boards', image: 'https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'LEDs', image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Sensors', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Connectors', image: 'https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Transistors', image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Diodes', image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Switches', image: 'https://images.pexels.com/photos/3825568/pexels-photo-3825568.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Relays', image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Fuses', image: 'https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg?auto=compress&cs=tinysrgb&w=150' },
            { name: 'Transformers', image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=150' },
        ]
    },
];

const CategoryDropdown = ({ onMouseEnter, onMouseLeave }) => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <div
            className="absolute top-full left-0 w-[900px] bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl shadow-black/50 z-50 flex overflow-hidden"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Left Sidebar - Category List */}
            <div className="w-[220px] bg-zinc-950 border-r border-zinc-800 py-2 max-h-[420px] overflow-y-auto">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        onMouseEnter={() => setActiveCategory(cat)}
                        className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-all ${activeCategory.id === cat.id
                            ? 'bg-zinc-800 border-l-2 border-blue-500 text-white'
                            : 'hover:bg-zinc-900 text-zinc-400 hover:text-white border-l-2 border-transparent'
                            }`}
                    >
                        <cat.icon className={`w-4 h-4 ${activeCategory.id === cat.id ? 'text-blue-400' : ''}`} />
                        <span className="text-[13px] font-medium truncate">{cat.name}</span>
                    </div>
                ))}
            </div>

            {/* Right Side - Product Grid */}
            <div className="flex-1 p-5 bg-zinc-900">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-white font-bold text-base">{activeCategory.name}</h3>
                    <Link
                        to={`/products?category=${activeCategory.name}`}
                        className="text-blue-400 text-xs font-medium hover:text-blue-300 flex items-center gap-1"
                    >
                        Browse featured selections <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>

                {/* First Row - 6 products */}
                <div className="grid grid-cols-6 gap-5 mb-5">
                    {activeCategory.products.slice(0, 6).map((product, idx) => (
                        <Link
                            key={idx}
                            to={`/products?search=${product.name}`}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-zinc-200 group-hover:border-blue-500 overflow-hidden mb-2 transition-all shadow-md group-hover:shadow-blue-500/20">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="text-[11px] text-zinc-400 group-hover:text-blue-400 font-medium transition-colors leading-tight">
                                {product.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Second Row - 6 more products */}
                <div className="grid grid-cols-6 gap-5">
                    {activeCategory.products.slice(6, 12).map((product, idx) => (
                        <Link
                            key={idx}
                            to={`/products?search=${product.name}`}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-zinc-200 group-hover:border-blue-500 overflow-hidden mb-2 transition-all shadow-md group-hover:shadow-blue-500/20">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="text-[11px] text-zinc-400 group-hover:text-blue-400 font-medium transition-colors leading-tight">
                                {product.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryDropdown;
