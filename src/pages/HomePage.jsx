import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ShieldCheck, TrendingUp, Package, Users, ArrowRight,
    Star, Play, ChevronRight, Truck, Globe, Award, DollarSign,
    Zap, Gem, Activity, MessageSquare
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { productService } from '../services/mock/productService';
import PremiumCategoryGrid from '../components/home/PremiumCategoryGrid';
import PremiumProductCard from '../components/common/PremiumProductCard';
import { manufacturerService } from '../services/mock/manufacturerService';
import InquiryModal from '../components/common/InquiryModal';

const HeroSection = ({ onOpenInquiry }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slide Data
    const slides = [
        {
            type: 'video',
            src: 'https://videos.pexels.com/video-files/6153676/6153676-hd_1920_1080_25fps.mp4', // Factory/Industrial Video
            title: "Source Premium Product Inventory",
            subtitle: "Connect with top-rated verified manufacturers. Secure payments, quality inspections, and on-time delivery guaranteed.",
            cta: "Start Sourcing",
            ctaLink: "/products"
        },
        {
            type: 'video',
            src: 'https://cdn.coverr.co/videos/coverr-drone-shot-of-container-ship-5386/1080p.mp4',
            title: "Source Premium Product Inventory",
            subtitle: "Access thousands of verified manufacturers and factory-direct prices instantly.",
            cta: "Start Sourcing",
            ctaLink: "/products"
        },
        {
            type: 'image',
            src: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: "Global Supply Chain Solutions",
            subtitle: "Streamline your logistics with our end-to-end shipping and fulfillment services.",
            cta: "Explore Logistics",
            ctaLink: "/trade-assurance"
        },
        {
            type: 'image',
            src: 'https://images.pexels.com/photos/8961023/pexels-photo-8961023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: "New Season Textiles",
            subtitle: "Discover the latest fabrics and garment trends from India's top textile mills.",
            cta: "View Collection",
            ctaLink: "/products?category=apparel"
        }
    ];

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black py-6">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-12 gap-6 h-[500px] md:h-[420px]">
                    {/* LEFT: Categories Sidebar (Hidden on mobile/tablet) */}
                    <div className="hidden xl:block col-span-2 bg-zinc-900 rounded-2xl p-4 border border-zinc-800 shadow-xl overflow-y-auto custom-scrollbar">
                        <h3 className="text-white text-sm font-extrabold mb-4 px-2 flex items-center gap-2">
                            Trending Categories
                        </h3>
                        <div className="space-y-1">
                            {['Consumer Electronics', 'Apparel & Accessories', 'Sports & Entertainment', 'Home & Garden', 'Machinery', 'Beauty & Personal Care'].map((cat, i) => (
                                <Link key={i} to={`/products?category=${cat}`} className="flex items-center justify-between px-3 py-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all group group-hover:pl-4">
                                    <span className="text-sm font-medium">{cat}</span>
                                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* MIDDLE: Dynamic Slider */}
                    <div className="col-span-12 lg:col-span-9 xl:col-span-7 bg-zinc-900 rounded-2xl overflow-hidden relative group border border-zinc-800 shadow-2xl">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                {/* Media Background */}
                                <div className="absolute inset-0">
                                    {slide.type === 'video' ? (
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover opacity-60 scale-105"
                                        >
                                            <source src={slide.src} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img
                                            src={slide.src}
                                            alt={slide.title}
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-center px-8 md:px-12 z-20 max-w-2xl">
                                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold border border-blue-500/30 mb-4 w-fit animate-fade-in">
                                        FACTORY DIRECT
                                    </span>
                                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-zinc-200 text-base md:text-lg mb-8 max-w-lg leading-relaxed drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex gap-4">
                                        <Link to={slide.ctaLink} className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                                            {slide.cta} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Slide Indicators */}
                        <div className="absolute bottom-6 left-12 z-30 flex gap-2">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'w-8 bg-blue-500' : 'bg-white/50 hover:bg-white'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: User Widgets (Hidden on Mobile) */}
                    <div className="hidden lg:block col-span-3 xl:col-span-3 flex flex-col gap-6 h-full">
                        {/* User Card */}
                        <div className="flex-1 bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-700">
                                        <Users className="w-6 h-6 text-zinc-400" />
                                    </div>
                                    <div>
                                        <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Welcome</p>
                                        <h6 className="text-white font-bold text-lg">Join Trade Vision</h6>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Link to="/login" className="block w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold rounded-lg transition-colors shadow-md">
                                        Sign In
                                    </Link>
                                    <Link to="/register" className="block w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-center font-bold rounded-lg transition-colors border border-zinc-700">
                                        Join for Free
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Request for Quotation */}
                        <div
                            onClick={onOpenInquiry}
                            className="flex-1 bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-6 border border-blue-800/50 shadow-xl relative overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            <div className="relative z-10">
                                <h4 className="text-white font-bold text-lg mb-2">One Request, <br />Multiple Quotes</h4>
                                <p className="text-blue-200 text-sm mb-4">Get quotes from verified suppliers within 24 hours.</p>
                                <div className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:translate-x-1 transition-transform">
                                    Request Now <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                            <Package className="absolute bottom-4 right-4 w-16 h-16 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- NEW SECTIONS ---

const SponsoredBrands = () => (
    <div className="bg-black py-8 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 mb-4">
            <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest text-center">Trusted by Leading Global Brands</h4>
        </div>
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-4">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
                        <div className="w-8 h-8 rounded bg-zinc-800"></div>
                        <span className="text-xl font-black text-white">BRAND{i + 1}</span>
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[...Array(10)].map((_, i) => (
                    <div key={`dup-${i}`} className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
                        <div className="w-8 h-8 rounded bg-zinc-800"></div>
                        <span className="text-xl font-black text-white">BRAND{i + 1}</span>
                    </div>
                ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
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
    </div>
);

const BannerGrid = () => (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <SectionHeader title="Exclusive Offers" linkText="View All Deals" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 relative overflow-hidden group cursor-pointer border border-white/5 min-h-[200px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">NEW ARRIVALS</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Smart Electronics</h3>
                    <p className="text-purple-200 text-sm mb-4 max-w-[200px]">Latest gadgets from top Shenzhen manufacturers.</p>
                    <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-purple-100 transition-colors">Shop Now</button>
                </div>
                <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=300" className="absolute -right-4 -bottom-4 w-32 h-32 object-contain group-hover:scale-110 transition-transform rotate-12" alt="Electronics" />
            </div>

            <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-8 relative overflow-hidden group cursor-pointer border border-white/5 min-h-[200px] flex flex-col justify-center">
                <div className="relative z-10">
                    <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">HOT SELLER</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Industrial Tools</h3>
                    <p className="text-orange-200 text-sm mb-4 max-w-[200px]">Heavy duty machinery at factory prices.</p>
                    <button className="bg-white text-orange-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-100 transition-colors">View Catalog</button>
                </div>
                <Zap className="absolute -right-4 -bottom-4 w-40 h-40 text-white/5 group-hover:scale-110 transition-transform rotate-12" />
            </div>

            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-green-900 to-emerald-900 rounded-2xl p-8 relative overflow-hidden group cursor-pointer border border-white/5 min-h-[200px] flex flex-col justify-center">
                <div className="relative z-10">
                    <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block">SUSTAINABLE</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Eco Packaging</h3>
                    <p className="text-green-200 text-sm mb-4 max-w-[200px]">Biodegradable solutions for your brand.</p>
                    <button className="bg-white text-green-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-green-100 transition-colors">Go Green</button>
                </div>
                <Gem className="absolute -right-4 -bottom-4 w-40 h-40 text-white/5 group-hover:scale-110 transition-transform rotate-12" />
            </div>
        </div>
    </div>
);

// Featured Videos Section (TikTok-style) - Based on reference image 3
const FeaturedVideos = () => (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <SectionHeader title="Featured in Videos" linkText="See what creators are sharing" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { img: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=400", creator: "@industryhub" },
                { img: "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400", creator: "@textileguru" },
                { img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400", creator: "@machinemaster" },
                { img: "https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=400", creator: "@factorydirect" }
            ].map((video, i) => (
                <div key={i} className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer">
                    <img src={video.img} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                                <Play className="w-4 h-4 text-white fill-white" />
                            </div>
                        </div>
                        <span className="text-white text-sm font-medium">{video.creator}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// Category Showcase with Products (Based on reference image 2)
const CategoryShowcase = () => (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Large Banner */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                <span className="text-orange-800 font-bold text-xs uppercase mb-2">Trending in garden & patio</span>
                <h2 className="text-4xl font-black text-zinc-900 mb-4">Industrial<br />Tools for<br />everyone</h2>
                <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold w-fit hover:bg-zinc-800 transition-colors">Shop all</button>
                <div className="absolute bottom-0 right-0 text-zinc-900">
                    <span className="text-xs font-medium">From</span>
                    <div className="text-5xl font-black">₹13<span className="text-xl align-top">K</span></div>
                </div>
                <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Tools" className="absolute right-4 bottom-4 w-48 h-48 object-cover rounded-lg opacity-80" />
            </div>

            {/* Right: Product Grid */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">Slip in & stay productive</h3>
                        <p className="text-zinc-400 text-sm">Top tools for your business needs.</p>
                    </div>
                    <Link to="/products" className="text-blue-400 text-sm font-medium hover:underline">View all</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Power Drill Set", price: "₹8,999", oldPrice: "₹12,999", img: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=300" },
                        { name: "LED Work Light", price: "₹2,499", oldPrice: "₹4,500", img: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=300" },
                        { name: "Safety Gloves Pack", price: "₹599", oldPrice: "₹999", img: "https://images.pexels.com/photos/5974386/pexels-photo-5974386.jpeg?auto=compress&cs=tinysrgb&w=300" },
                        { name: "Tool Organizer Box", price: "₹1,799", oldPrice: "₹2,999", img: "https://images.pexels.com/photos/162553/tools-hammer-spanner-equipment-162553.jpeg?auto=compress&cs=tinysrgb&w=300" }
                    ].map((product, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors group cursor-pointer">
                            <div className="aspect-square bg-zinc-800 relative overflow-hidden">
                                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500 text-white">reduced price</span>
                            </div>
                            <div className="p-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-blue-400 font-bold">{product.price}</span>
                                    <span className="text-zinc-500 text-xs line-through">{product.oldPrice}</span>
                                </div>
                                <p className="text-zinc-400 text-xs line-clamp-2">{product.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// Goals/Wellness Section (Based on reference image 5)
const GoalsSection = () => (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Left Banner */}
            <div className="md:col-span-1 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 relative overflow-hidden min-h-[350px]">
                <span className="text-blue-600 font-bold text-xs uppercase mb-2 block">You're in your goals era</span>
                <h3 className="text-3xl font-black text-zinc-900 mb-3">All you need<br />to crush<br />2025</h3>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-800 transition-colors">Shop now</button>
                <img src="https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Goals" className="absolute right-0 bottom-0 w-40 h-40 object-cover rounded-tl-2xl opacity-90" />
            </div>

            {/* Middle Grid */}
            <div className="md:col-span-1 grid grid-rows-2 gap-4">
                <div className="bg-gradient-to-r from-lime-100 to-green-100 rounded-2xl p-6 relative overflow-hidden">
                    <h4 className="text-lg font-bold text-zinc-900 mb-1">Write, plan, journal</h4>
                    <Link to="/products" className="text-green-700 text-sm font-medium underline">Shop now</Link>
                    <img src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Journal" className="absolute right-2 bottom-2 w-24 h-24 object-contain" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-4 relative overflow-hidden">
                        <h5 className="text-sm font-bold text-zinc-900 mb-1">Refresh your<br />skincare</h5>
                        <Link to="/products" className="text-rose-700 text-xs font-medium underline">Shop now</Link>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-4 relative overflow-hidden">
                        <h5 className="text-sm font-bold text-zinc-900 mb-1">Digital detox,<br />activated</h5>
                        <Link to="/products" className="text-indigo-700 text-xs font-medium underline">Shop now</Link>
                    </div>
                </div>
            </div>

            {/* Right Banner */}
            <div className="md:col-span-1 bg-gradient-to-br from-slate-100 to-zinc-200 rounded-2xl p-8 relative overflow-hidden min-h-[350px]">
                <span className="text-zinc-500 font-bold text-xs uppercase mb-2 block">Fitness faves</span>
                <h3 className="text-2xl font-black text-zinc-900 mb-2">Health tech</h3>
                <Link to="/products" className="text-blue-600 text-sm font-medium underline">Shop now</Link>
                <img src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Health" className="absolute right-0 bottom-0 w-48 h-48 object-cover rounded-tl-2xl opacity-90" />
            </div>
        </div>
    </div>
);

const SectionHeader = ({ title, linkText = "View All", linkTo = "/products" }) => (
    <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-1.5 h-8 bg-blue-600 rounded-full block"></span>
            {title}
        </h2>
        {linkText && (
            <Link to={linkTo} className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors group">
                <span className="text-sm font-semibold">{linkText}</span>
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ChevronRight className="w-3 h-3 text-white" />
                </div>
            </Link>
        )}
    </div>
);

const ProductCard = ({ product }) => (
    <Link to={`/products/${product._id}`} className="block bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
            <img
                src={product.media?.images?.[0]?.url || 'https://via.placeholder.com/400'}
                alt={product.basicInfo?.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.manufacturer?.isVerified && (
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-blue-800 text-[10px] font-bold uppercase rounded flex items-center gap-1 shadow-sm">
                        <ShieldCheck className="w-3 h-3" /> Verified Pro
                    </span>
                )}
            </div>
            {/* Quick Actions overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                </span>
            </div>
        </div>

        <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-white font-medium mb-2 line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">
                {product.basicInfo?.name}
            </h3>

            <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-lg font-bold text-white">₹{product.pricing?.basePrice?.toLocaleString()}</span>
                    <span className="text-zinc-500 text-xs">/ {product.pricing?.minOrderUnit || 'unit'}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <div className="flex items-center gap-1 text-zinc-500 text-xs">
                        <span className="text-orange-400 font-bold">{product.metrics?.rating || 4.5}</span>
                        <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                    </div>
                    <span className="text-zinc-600 text-xs">{product.pricing?.moq || 100} min order</span>
                </div>
            </div>
        </div>
    </Link>
);

const MfrCard = ({ mfr }) => (
    <Link to={`/manufacturers/${mfr._id}`} className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 block overflow-hidden">
        {/* Hover Overlay with Smaller Actions */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center gap-3">
            <button className="px-5 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                View Details <ArrowRight className="w-3 h-3" />
            </button>
            <button className="px-5 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                <MessageSquare className="w-3 h-3" /> Chat Now
            </button>
        </div>

        <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 rounded-lg bg-white p-1 shrink-0 overflow-hidden border border-zinc-700">
                <img
                    src={`https://ui-avatars.com/api/?name=${mfr.companyName}&background=0D8ABC&color=fff&size=128&bold=true`}
                    alt={mfr.companyName}
                    className="w-full h-full object-cover rounded"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-base truncate pr-2" title={mfr.companyName}>{mfr.companyName}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-[10px] font-bold bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Verified Pro
                    </span>
                    <span className="text-[10px] font-bold bg-gradient-to-r from-orange-500/10 to-yellow-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded">
                        {mfr.businessDetails?.yearEstablished ? `${new Date().getFullYear() - mfr.businessDetails.yearEstablished} Yrs` : '10 Yrs'}
                    </span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
            {(mfr.images && mfr.images.length > 0 ? mfr.images : [
                'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=200',
                'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200',
                'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=200'
            ]).slice(0, 3).map((imgUrl, i) => (
                <div key={i} className="aspect-square bg-zinc-800 rounded-md overflow-hidden relative border border-zinc-700/50 group-hover:border-zinc-600 transition-colors">
                    <img
                        src={imgUrl}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        alt="Product"
                    />
                </div>
            ))}
        </div>

        <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-3 border-t border-zinc-800">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-400/5 px-2 py-0.5 rounded">
                <Activity className="w-3 h-3" /> 98% Response
            </span>
            <span className="flex items-center gap-1 font-semibold text-zinc-400">
                <Star className="w-3 h-3 text-orange-500 fill-current" /> {mfr.metrics?.rating || 4.8}
            </span>
        </div>
    </Link>
);

// Features/Trust Section
const TrustSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
        {[
            { icon: ShieldCheck, title: "Trade Assurance", desc: "Order protection from payment to delivery" },
            { icon: Globe, title: "Shipping Logistics", desc: "Reasonable shipping rates worldwide" },
            { icon: DollarSign, title: "Secure Payments", desc: "Secure payment methods supported" },
            { icon: Award, title: "Quality Control", desc: "Product quality inspections available" }
        ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start p-2">
                <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
            </div>
        ))}
    </div>
);

// Category Grid (Premium Icons)
const CategoryGrid = () => (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">
        {[
            { name: "Electronics", icon: Zap, color: "text-blue-400" },
            { name: "Apparel", icon: Gem, color: "text-pink-400" },
            { name: "Vehicles", icon: Truck, color: "text-orange-400" },
            { name: "Sports", icon: Activity, color: "text-green-400" },
            { name: "Machinery", icon: Award, color: "text-yellow-400" },
            { name: "Home", icon: Package, color: "text-purple-400" },
            { name: "Beauty", icon: Star, color: "text-red-400" },
            { name: "More", icon: MenuIcon, color: "text-zinc-400" }
        ].map((cat, i) => (
            <Link to="/products" key={i} className="flex flex-col items-center gap-3 p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group cursor-pointer hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-inner`}>
                    <cat.icon className={`w-7 h-7 ${cat.color}`} />
                </div>
                <span className="text-zinc-400 text-sm font-medium group-hover:text-white transition-colors">{cat.name}</span>
            </Link>
        ))}
    </div>
);

const MenuIcon = ({ className }) => (
    <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);
const Flag = ({ className }) => (
    <svg className={className} viewBox="0 0 640 480"><path fill="#f93" d="M0 0h640v160H0z" /><path fill="#fff" d="M0 160h640v160H0z" /><path fill="#128807" d="M0 320h640v160H0z" /><circle cx="320" cy="240" r="60" fill="#008" /></svg>
);

const HomePage = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [isInquiryOpen, setIsInquiryOpen] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const products = await productService.getAllProducts();
                setTrendingProducts(products.slice(0, 8));
                const mfrs = await manufacturerService.getVerifiedManufacturers();
                setManufacturers(mfrs.slice(0, 6));
            } catch (error) {
                console.error("Failed to load home data", error);
            }
        };
        loadData();
    }, []);

    return (
        <MainLayout>
            <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
            <div className="min-h-screen bg-black text-white font-sans pb-20">
                {/* Hero Section */}
                <HeroSection onOpenInquiry={() => setIsInquiryOpen(true)} />

                {/* Best Selling & Hot Deals - New Section */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-8 space-y-8">
                    {/* Hot Offers Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-pink-900 to-rose-900 rounded-2xl p-6 md:p-8 flex items-center relative overflow-hidden group min-h-[180px]">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <div className="relative z-10">
                                <span className="text-rose-300 font-bold text-xs uppercase tracking-wider mb-2 block">Limited Time</span>
                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Electronic Components</h3>
                                <p className="text-rose-100/80 text-sm mb-4 hidden sm:block">Up to 40% off on bulk orders.</p>
                                <Link to="/products?cat=electronics" className="bg-white text-rose-900 px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-rose-50 transition-colors">Shop Now</Link>
                            </div>
                            <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Electronics" className="absolute right-0 top-0 h-full w-1/3 md:w-1/2 object-cover opacity-60 md:opacity-80 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-2xl p-6 md:p-8 flex items-center relative overflow-hidden group min-h-[180px]">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                            <div className="relative z-10">
                                <span className="text-emerald-300 font-bold text-xs uppercase tracking-wider mb-2 block">New Arrivals</span>
                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Eco-Friendly Packaging</h3>
                                <p className="text-emerald-100/80 text-sm mb-4 hidden sm:block">Sustainable solutions for your brand.</p>
                                <Link to="/products?cat=packaging" className="bg-white text-emerald-900 px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm hover:bg-emerald-50 transition-colors">Explore</Link>
                            </div>
                            <img src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Packaging" className="absolute right-0 top-0 h-full w-1/3 md:w-1/2 object-cover opacity-60 md:opacity-80 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    <SectionHeader title="Best Selling Products" linkTo="/products?sort=best_selling" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors group cursor-pointer">
                                <div className="h-32 md:h-40 bg-zinc-800 relative overflow-hidden">
                                    <img src={`https://picsum.photos/400/400?random=${i}`} alt="Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <span className="absolute top-2 left-2 bg-yellow-500 text-black text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded">BEST SELLER</span>
                                </div>
                                <div className="p-2 md:p-3">
                                    <h4 className="text-white font-medium text-xs md:text-sm truncate">Industrial Grade Motor Unit</h4>
                                    <p className="text-zinc-500 text-[10px] md:text-xs mb-1 md:mb-2">By TechMech Ind.</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-400 font-bold text-sm md:text-base">₹12,499</span>
                                        <span className="text-[9px] md:text-[10px] text-zinc-500 hidden sm:inline">Min: 100 pcs</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <BannerGrid />
                <FeaturedVideos />
                <CategoryShowcase />
                <GoalsSection />

                <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-6 pb-20">
                    <TrustSection />
                    <CategoryGrid />

                    {/* Trending Products */}
                    <SectionHeader title="Trending Products" linkTo="/products" />
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                        {trendingProducts.slice(0, 4).map((product) => (
                            <div key={product._id} className="h-auto md:h-[400px]">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    {/* <div className="mb-16">
                        <div className="w-full h-32 md:h-40 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                            <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
                                <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">TradeVision Premium</h3>
                                <p className="text-blue-200 text-sm md:text-base max-w-md">Unlock exclusive sourcing tools and verified supplier reports.</p>
                            </div>
                            <button className="relative z-10 bg-white text-blue-900 px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
                                Upgrade Now
                            </button>
                        </div>
                    </div> */}

                    <SectionHeader title="Verified Manufacturers" linkTo="/manufacturers" />
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                        {manufacturers.slice(0, 6).map((mfr) => (
                            <MfrCard key={mfr._id} mfr={mfr} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
