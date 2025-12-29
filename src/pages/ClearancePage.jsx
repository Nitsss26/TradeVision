import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Clock, Tag, ShoppingBag, Flame, AlertCircle, ChevronRight, Zap, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClearancePage = () => {
    // Mock Data for Clearance Items
    const clearanceItems = [
        {
            id: 1,
            name: "Industrial Heavy Duty Motor - Mega Sale",
            originalPrice: 45000,
            salePrice: 9000,
            image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600",
            discount: 80,
            stockLeft: 2,
            category: "Machinery"
        },
        {
            id: 2,
            name: "Bulk Cotton Fabric Rolls (500m)",
            originalPrice: 25000,
            salePrice: 4500,
            image: "https://images.pexels.com/photos/459486/pexels-photo-459486.jpeg?auto=compress&cs=tinysrgb&w=600",
            discount: 82,
            stockLeft: 5,
            category: "Textiles"
        },
        {
            id: 3,
            name: "Old Season Ceramic Tiles Pallet",
            originalPrice: 120000,
            salePrice: 24000,
            image: "https://images.pexels.com/photos/1652544/pexels-photo-1652544.jpeg?auto=compress&cs=tinysrgb&w=600",
            discount: 80,
            stockLeft: 1,
            category: "Construction"
        },
        {
            id: 4,
            name: "Surplus LED Panel Lights (100 pcs)",
            originalPrice: 30000,
            salePrice: 5500,
            image: "https://images.pexels.com/photos/3356566/pexels-photo-3356566.jpeg?auto=compress&cs=tinysrgb&w=600",
            discount: 81,
            stockLeft: 10,
            category: "Electronics"
        },
        {
            id: 5,
            name: "Warehouse Racking Beams",
            originalPrice: 15000,
            salePrice: 3000,
            image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600",
            discount: 80,
            stockLeft: 15,
            category: "Industrial"
        },
        {
            id: 6,
            name: "Export Surplus Denim Jeans (50pcs)",
            originalPrice: 40000,
            salePrice: 8000,
            image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
            discount: 80,
            stockLeft: 3,
            category: "Apparel"
        }
    ];

    // Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else {
                        minutes = 59;
                        if (hours > 0) hours--;
                    }
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <MainLayout>
            <div className="min-h-screen bg-black font-sans pb-20">
                {/* 1. Hero / Flash Sale Banner */}
                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-black z-10 flex items-center">
                        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 w-full grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6 animate-in slide-in-from-left duration-700">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white font-bold rounded-full text-sm animate-pulse">
                                    <Flame className="w-4 h-4 fill-white" />
                                    MEGA FLASH SALE
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                                    FLAT <span className="text-yellow-400">80% OFF</span><br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">MEGA SALE</span>
                                </h1>
                                <p className="text-lg text-red-200">
                                    Limited-time discounts on premium inventory at unbeatable prices.
                                    Verified functionality. No returns.
                                </p>

                                {/* Countdown */}
                                <div className="flex items-center gap-4 pt-4">
                                    <span className="text-red-300 font-bold uppercase tracking-widest text-sm">Ends In:</span>
                                    <div className="flex gap-2 text-white">
                                        <div className="bg-black/50 backdrop-blur border border-red-500/30 rounded-lg p-3 min-w-[70px] text-center">
                                            <div className="text-3xl font-bold font-mono">{String(timeLeft.hours).padStart(2, '0')}</div>
                                            <div className="text-[10px] text-zinc-400 uppercase">Hours</div>
                                        </div>
                                        <div className="text-2xl font-bold self-start mt-2">:</div>
                                        <div className="bg-black/50 backdrop-blur border border-red-500/30 rounded-lg p-3 min-w-[70px] text-center">
                                            <div className="text-3xl font-bold font-mono">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                            <div className="text-[10px] text-zinc-400 uppercase">Mins</div>
                                        </div>
                                        <div className="text-2xl font-bold self-start mt-2">:</div>
                                        <div className="bg-black/50 backdrop-blur border border-red-500/30 rounded-lg p-3 min-w-[70px] text-center">
                                            <div className="text-3xl font-bold font-mono text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                            <div className="text-[10px] text-zinc-400 uppercase">Secs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Element */}
                            <div className="hidden md:block relative h-[400px]">
                                <div className="absolute inset-0 bg-red-500/20 blur-[100px] rounded-full"></div>
                                <img
                                    src="https://images.pexels.com/photos/6207555/pexels-photo-6207555.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Clearance Sale"
                                    className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-10 right-10 bg-yellow-400 text-black font-black text-xl px-4 py-8 rounded-full rotate-12 flex flex-col items-center justify-center w-24 h-24 shadow-xl z-20">
                                    <span>SAVE</span>
                                    <span className="text-3xl">80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Selling Fast Bar */}
                <div className="bg-yellow-400 text-black overflow-hidden py-2 font-bold uppercase tracking-wider text-sm">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className="mx-8 flex items-center gap-2">
                                <Zap className="w-4 h-4 fill-black" /> SELLING FAST - LIMITED QUANTITIES
                            </span>
                        ))}
                    </div>
                </div>

                {/* 3. Clearance Grid */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                            <Tag className="w-8 h-8 text-red-500" />
                            Live Clearance Deals
                        </h2>
                        <button className="px-6 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full border border-zinc-700 transition-colors flex items-center gap-2 text-sm font-bold">
                            View All Offers <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {clearanceItems.map((item) => (
                            <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-red-500/50 transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] relative">
                                {/* Badges */}
                                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        FLAT {item.discount}% OFF
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3 z-10">
                                    {item.stockLeft < 5 && (
                                        <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded animate-pulse">
                                            ONLY {item.stockLeft} LEFT
                                        </span>
                                    )}
                                </div>

                                {/* Image */}
                                <div className="aspect-[4/3] overflow-hidden relative bg-zinc-800">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="px-6 py-2 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-500 hover:text-white">
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="text-zinc-500 text-xs font-bold uppercase mb-1">{item.category}</div>
                                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 h-14" title={item.name}>
                                        {item.name}
                                    </h3>

                                    <div className="flex items-end gap-3 mb-4">
                                        <div className="text-3xl font-black text-red-500">₹{item.salePrice.toLocaleString()}</div>
                                        <div className="text-zinc-500 line-through font-medium mb-1.5">₹{item.originalPrice.toLocaleString()}</div>
                                    </div>

                                    {/* Stock Meter */}
                                    <div className="w-full h-1.5 bg-zinc-800 rounded-full mb-4 overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                    </div>
                                    <div className="text-[11px] text-zinc-400 flex justify-between mb-4">
                                        <span>85% Sold</span>
                                        <span className="text-red-400 font-bold">Hurry up!</span>
                                    </div>

                                    <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group/btn">
                                        <ShoppingBag className="w-5 h-5 group-hover/btn:animate-bounce" />
                                        Grab Deal
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Why Clearance? Details */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12 border-t border-zinc-900">
                    <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
                        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
                            <div className="p-4">
                                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">Warehouse Clearance</h4>
                                <p className="text-zinc-400 text-sm">Manufacturers offer massive discounts on surplus inventory. Quality guaranteed, incredible savings.</p>
                            </div>
                            <div className="p-4">
                                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-6 h-6 text-green-500" />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">100% Functionality Verified</h4>
                                <p className="text-zinc-400 text-sm">Every item is quality checked for full functionality. Cosmetic imperfections are noted if any.</p>
                            </div>
                            <div className="p-4">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Truck className="w-6 h-6 text-blue-500" />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">Immediate Dispatch</h4>
                                <p className="text-zinc-400 text-sm">Items are ready to ship from the warehouse within 24 hours of order placement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </MainLayout>
    );
};

export default ClearancePage;
