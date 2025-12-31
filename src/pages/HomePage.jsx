import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

const HeroSection = ({ onOpenInquiry, user }) => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slide Data - All using images for reliable backgrounds
    const slides = [
        {
            type: 'image',
            src: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: "Source Premium Product",
            subtitle: "Connect with top-rated verified manufacturers. Secure payments, quality inspections, and on-time delivery guaranteed.",
            cta: "Start Sourcing",
            ctaLink: "/products"
        },
        {
            type: 'image',
            src: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: "Global Shipping Solutions",
            subtitle: "Access thousands of verified manufacturers and factory-direct prices instantly.",
            cta: "Start Sourcing",
            ctaLink: "/products"
        },
        {
            type: 'image',
            src: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: "Global Supply Chain Solutions",
            subtitle: "Streamline your logistics with our end-to-end shipping and fulfillment services.",
            cta: "Explore Logistics",
            ctaLink: "/trade-assurance"
        },
        {
            type: 'image',
            src: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: "Industrial Manufacturing",
            subtitle: "Discover the latest equipment and machinery from India's top manufacturers.",
            cta: "View Products",
            ctaLink: "/products?category=industrial"
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
                                            className="w-full h-full object-cover opacity-80 scale-105"
                                        >
                                            <source src={slide.src} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img
                                            src={slide.src}
                                            alt={slide.title}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30"></div>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-center px-8 md:px-12 z-20">
                                    <div className="max-w-2xl">
                                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-blue-400 text-xs font-bold border border-blue-500/30 mb-4 w-fit">
                                            <ShieldCheck className="w-3 h-3" /> VERIFIED SUPPLIERS
                                        </span>
                                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                                            {slide.title}
                                        </h1>
                                        <p className="text-zinc-300 text-base md:text-lg mb-6 leading-relaxed drop-shadow-md max-w-lg">
                                            {slide.subtitle}
                                        </p>
                                        {/* Trust Badges */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="flex items-center gap-2 text-xs text-zinc-400">
                                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                    <ShieldCheck className="w-3 h-3 text-blue-400" />
                                                </div>
                                                Trade Assurance
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-zinc-400">
                                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                    <Globe className="w-3 h-3 text-blue-400" />
                                                </div>
                                                Global Shipping
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Link to={slide.ctaLink} className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                                                {slide.cta} <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Slide Indicators - moved to right side */}
                        <div className="absolute bottom-6 right-12 z-30 flex gap-2">
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
                        {/* User Card - Auth Aware */}
                        <div className="flex-1 bg-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                {user ? (
                                    <>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                                                <span className="text-white text-xl font-bold">{user.firstName?.[0] || user.name?.[0] || 'U'}</span>
                                            </div>
                                            <div>
                                                <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Welcome back</p>
                                                <h6 className="text-white font-bold text-lg">{user.firstName || user.name || 'User'}</h6>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <Link to={user.role === 'manufacturer' ? '/manufacturer/dashboard' : '/dashboard'} className="block w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-center font-bold rounded-lg transition-colors shadow-md">
                                                Go to Dashboard
                                            </Link>
                                            <Link to="/orders" className="block w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-center font-bold rounded-lg transition-colors border border-zinc-700">
                                                View Orders
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <>
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
                                    </>
                                )}
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
            <div className="bg-gradient-to-br from-blue-950 via-indigo-950 to-zinc-900 rounded-2xl p-8 relative overflow-hidden group cursor-pointer border border-blue-900/50 min-h-[200px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded mb-3 inline-block border border-blue-500/30">NEW ARRIVALS</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Smart Electronics</h3>
                    <p className="text-blue-200/80 text-sm mb-4 max-w-[200px]">Latest gadgets from top Shenzhen manufacturers.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/20">Shop Now</button>
                </div>
                <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=300" className="absolute -right-4 -bottom-4 w-32 h-32 object-cover rounded-xl group-hover:scale-110 transition-transform rotate-6 opacity-70 border border-blue-500/30" alt="Electronics" />
            </div>

            <div className="bg-gradient-to-br from-blue-950 via-indigo-950 to-zinc-900 rounded-2xl p-8 relative overflow-hidden group cursor-pointer border border-blue-900/50 min-h-[200px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded mb-3 inline-block border border-blue-500/30">HOT SELLER</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Industrial Tools</h3>
                    <p className="text-blue-200/80 text-sm mb-4 max-w-[200px]">Heavy duty machinery at factory prices.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/20">View Catalog</button>
                </div>
                <img src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=300" className="absolute -right-4 -bottom-4 w-32 h-32 object-cover rounded-xl group-hover:scale-110 transition-transform rotate-6 opacity-70 border border-blue-500/30" alt="Tools" />
            </div>

            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-950 via-indigo-950 to-zinc-900 rounded-2xl p-8 relative overflow-hidden group cursor-pointer border border-blue-900/50 min-h-[200px] flex flex-col justify-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded mb-3 inline-block border border-blue-500/30">PREMIUM</span>
                    <h3 className="text-2xl font-bold text-white mb-2">Eco Packaging</h3>
                    <p className="text-blue-200/80 text-sm mb-4 max-w-[200px]">Biodegradable solutions for your brand.</p>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/20">Explore</button>
                </div>
                <img src="https://images.pexels.com/photos/4498553/pexels-photo-4498553.jpeg?auto=compress&cs=tinysrgb&w=300" className="absolute -right-4 -bottom-4 w-32 h-32 object-cover rounded-xl group-hover:scale-110 transition-transform rotate-6 opacity-70 border border-blue-500/30" alt="Packaging" />
            </div>
        </div>
    </div>
);

// Featured Videos Section - Product Videos in 3:4 Vertical Format
const FeaturedVideos = () => (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <SectionHeader title="Featured Videos" linkText="Watch More" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { title: "Industrial Motor Unit Demo", views: "15K", thumbnail: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=600", supplier: "TechMech Ind." },
                { title: "Hydraulic Pump Testing", views: "28K", thumbnail: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600", supplier: "HydraFlow" },
                { title: "CNC Machine Precision Cut", views: "42K", thumbnail: "https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=600", supplier: "LaserCut Pro" },
                { title: "Quality Inspection Process", views: "9K", thumbnail: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=600", supplier: "QC Masters" }
            ].map((video, i) => (
                <div key={i} className="group cursor-pointer">
                    {/* 3:4 Vertical Video Thumbnail */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/50 transition-all">
                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Play Button - Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-blue-600/80 transition-all">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                            </div>
                        </div>

                        {/* Views Badge - Top Right */}
                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur rounded-full text-white text-xs font-bold flex items-center gap-1">
                            <Play className="w-3 h-3 fill-white" /> {video.views}
                        </div>

                        {/* Live Badge (first one) */}
                        {i === 0 && (
                            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-red-600/90 backdrop-blur rounded-full">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-bold text-white uppercase">Live</span>
                            </div>
                        )}

                        {/* Bottom Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h4 className="text-white font-bold text-sm line-clamp-2 mb-2">{video.title}</h4>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                                    <span className="text-[8px] font-bold text-white">{video.supplier.charAt(0)}</span>
                                </div>
                                <span className="text-zinc-400 text-xs">{video.supplier}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// Category Showcase with Products (Premium Dark Theme)
const CategoryShowcase = () => (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Large Banner - Premium Dark */}
            {/* Left: Large Banner - Premium Dark */}
            <div className="relative rounded-2xl p-8 overflow-hidden min-h-[300px] flex flex-col justify-end group border border-blue-900/30">
                {/* Background Image with Overlay */}
                <img src="https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg?auto=compress&cs=tinysrgb&w=800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Industrial Background" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/70 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

                {/* Content */}
                <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-300 font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span> Trending
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                        Premium Tools<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">For Professionals</span>
                    </h2>
                    <p className="text-zinc-300 mb-6 max-w-sm font-medium drop-shadow-md">
                        Equip your business with industry-standard machinery and tools verified for quality.
                    </p>
                    <button className="bg-white text-blue-950 px-8 py-3 rounded-full text-sm font-bold w-fit hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2">
                        Shop Collection <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Right: Product Grid */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">Top Business Tools</h3>
                        <p className="text-zinc-400 text-sm">Premium picks for your business needs.</p>
                    </div>
                    <Link to="/products" className="text-blue-400 text-sm font-medium hover:underline flex items-center gap-1">View all <ChevronRight className="w-4 h-4" /></Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Power Drill Set", price: "₹8,999", oldPrice: "₹12,999", img: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=300" },
                        { name: "LED Work Light", price: "₹2,499", oldPrice: "₹4,500", img: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=300" },
                        { name: "Safety Gloves Pack", price: "₹599", oldPrice: "₹999", img: "https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&w=300" },
                        { name: "Tool Organizer Box", price: "₹1,799", oldPrice: "₹2,999", img: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=300" }
                    ].map((product, i) => (
                        <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors group cursor-pointer mt-5">
                            <div className="aspect-square bg-zinc-800 relative overflow-hidden">
                                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">DEAL</span>
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

// Premium Categories Section (Dark Blue Theme)
const GoalsSection = () => (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large Left Banner - Full Image Background */}
            <div className="md:col-span-1 relative rounded-2xl overflow-hidden min-h-[350px] group border border-blue-900/30">
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Business Meeting" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/60 to-blue-950/90"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <span className="inline-flex items-center gap-2 text-blue-300 font-bold text-xs uppercase mb-2">
                        <Gem className="w-3 h-3" /> Premium Collection
                    </span>
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">Elevate Your<br />Business</h3>
                    <button className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-blue-950 transition-all flex items-center gap-2">
                        Explore <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* Middle Grid - High Density Layout */}
            <div className="md:col-span-1 grid grid-rows-2 gap-4">
                {/* Office Essentials - Densified */}
                <div className="relative rounded-2xl p-6 overflow-hidden border border-indigo-900/30 group">
                    <img src="https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=400" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" alt="Office" />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-950/80 to-transparent"></div>

                    <div className="relative z-10 h-full flex flex-col justify-center">
                        <h4 className="text-xl font-black text-white mb-1">Office Essentials</h4>
                        <p className="text-indigo-200 text-xs mb-3 font-medium">Desks • Chairs • Organizers</p>
                        <Link to="/products" className="text-white text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">Shop Now <ChevronRight className="w-3 h-3" /></Link>
                    </div>
                </div>

                {/* Small Cards - Full Image */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative rounded-2xl overflow-hidden border border-blue-900/30 group min-h-[100px]">
                        <img src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=300" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Safety" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 z-10">
                            <h5 className="text-sm font-bold text-white leading-tight">Safety<br />Gear</h5>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-indigo-900/30 group min-h-[100px]">
                        <img src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=300" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Tech" />
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/40 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 z-10">
                            <h5 className="text-sm font-bold text-white leading-tight">Smart<br />Tech</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Banner - Full Image Background */}
            <div className="md:col-span-1 relative rounded-2xl overflow-hidden min-h-[350px] group border border-indigo-900/30">
                <img src="https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=600" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Industrial Automation" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/60 to-indigo-950/90"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <span className="inline-flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase mb-2">
                        <Award className="w-3 h-3" /> Top Rated
                    </span>
                    <h3 className="text-2xl font-black text-white mb-4 leading-tight">Industrial<br />Automation</h3>
                    <Link to="/products" className="text-white text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        View Catalog <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
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

// Premium Product Card Matching User Request
const ProductCard = ({ product }) => (
    <Link to={`/products/${product._id}`} className="block bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group h-full flex flex-col relative w-full">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
            <img
                src={product.media?.images?.[0]?.url || 'https://via.placeholder.com/400'}
                alt={product.basicInfo?.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Top Badges overlay */}
            <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                {product.manufacturer?.isVerified && (
                    <span className="h-6 px-2 flex items-center gap-1 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase rounded-md shadow-lg border border-blue-400/20">
                        <ShieldCheck className="w-3 h-3 text-white" /> VERIFIED
                    </span>
                )}
                <span className="h-6 px-2 flex items-center bg-orange-500/90 backdrop-blur-md text-white text-[10px] font-bold rounded-md shadow-lg border border-orange-400/20">
                    {product.manufacturer?.years || "10+ Yrs"}
                </span>
            </div>

            {/* Play Button Overlay */}
            {product.media?.hasVideo && (
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/10 z-10 group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
            )}

            {/* Quick Actions overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                <button className="px-5 py-2 bg-blue-600 text-white font-bold text-sm rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg shadow-blue-600/30">
                    Inquire Now
                </button>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1 flex flex-col bg-zinc-950">
            <h3 className="text-white font-bold text-base mb-3 leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors">
                {product.basicInfo?.name}
            </h3>

            <div className="mt-auto space-y-3">
                {/* Price Section */}
                <div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-white">₹{product.pricing?.basePrice?.toLocaleString()}</span>
                        {product.pricing?.originalPrice && (
                            <span className="text-zinc-500 text-xs line-through ml-1">₹{product.pricing.originalPrice.toLocaleString()}</span>
                        )}
                    </div>
                    <p className="text-zinc-500 text-xs mt-0.5 font-medium">{product.pricing?.moq || 50} piece (Min. Order)</p>
                </div>

                {/* Supplier Divider */}
                <div className="h-px bg-zinc-800/50 w-full"></div>

                {/* Supplier Info */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 max-w-[70%]">
                        {/* Simulated Country Flag */}
                        <div className="w-4 h-3 bg-gradient-to-b from-orange-500 via-white to-green-500 rounded-[1px] shadow-sm shrink-0"></div>
                        <span className="text-zinc-400 text-xs truncate hover:text-white transition-colors">{product.manufacturer?.name || "Global Supplier"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                        <span className="text-zinc-300 text-xs font-bold">{product.metrics?.rating || 4.8}</span>
                    </div>
                </div>
            </div>
        </div>
    </Link>
);

const MfrCard = ({ mfr, index = 0 }) => {
    // Unique fallback image sets for each manufacturer
    const fallbackImageSets = [
        [
            'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=300'
        ],
        [
            'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=300'
        ],
        [
            'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300'
        ],
        [
            'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=300'
        ],
        [
            'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=300'
        ],
        [
            'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=300',
            'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=300'
        ]
    ];

    const images = mfr.images && mfr.images.length > 0 ? mfr.images : fallbackImageSets[index % fallbackImageSets.length];

    return (
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
                {images.slice(0, 3).map((imgUrl, i) => (
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
};

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
                        <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-zinc-900 rounded-2xl p-6 md:p-8 flex items-center relative overflow-hidden group min-h-[180px] border border-blue-900/50">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <span className="text-blue-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2"><Zap className="w-3 h-3" /> Limited Time</span>
                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Electronic Components</h3>
                                <p className="text-blue-200/80 text-sm mb-4 hidden sm:block">Up to 40% off on bulk orders.</p>
                                <Link to="/products?cat=electronics" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-600/20">Shop Now</Link>
                            </div>
                            <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Electronics" className="absolute right-0 top-0 h-full w-1/3 md:w-1/2 object-cover opacity-40 md:opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="bg-gradient-to-r from-indigo-950 via-blue-950 to-zinc-900 rounded-2xl p-6 md:p-8 flex items-center relative overflow-hidden group min-h-[180px] border border-indigo-900/50">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <span className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-2"><Star className="w-3 h-3" /> New Arrivals</span>
                                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Eco-Friendly Packaging</h3>
                                <p className="text-indigo-200/80 text-sm mb-4 hidden sm:block">Sustainable solutions for your brand.</p>
                                <Link to="/products?cat=packaging" className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm hover:from-indigo-500 hover:to-blue-500 transition-all shadow-lg shadow-indigo-600/20">Explore</Link>
                            </div>
                            <img src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Packaging" className="absolute right-0 top-0 h-full w-1/3 md:w-1/2 object-cover opacity-40 md:opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    <SectionHeader title="Best Selling Products" linkTo="/products?sort=best_selling" />
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                _id: 'bs1',
                                basicInfo: { name: "Industrial Grade Motor Unit" },
                                pricing: { basePrice: 12499, minOrderUnit: 'unit', moq: 100, originalPrice: 15999 },
                                manufacturer: { name: "TechMech Ind.", isVerified: true, years: "15 Yrs" },
                                media: { images: [{ url: "https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=600" }] },
                                metrics: { rating: 4.9 }
                            },
                            {
                                _id: 'bs2',
                                basicInfo: { name: "Heavy Duty Hydraulic Pump" },
                                pricing: { basePrice: 28500, minOrderUnit: 'set', moq: 10, originalPrice: 32000 },
                                manufacturer: { name: "HydraFlow Systems", isVerified: true, years: "8 Yrs" },
                                media: { images: [{ url: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600" }] },
                                metrics: { rating: 4.7 }
                            },
                            {
                                _id: 'bs3',
                                basicInfo: { name: "Precision CNC Control Panel" },
                                pricing: { basePrice: 45000, minOrderUnit: 'unit', moq: 5, originalPrice: 52000 },
                                manufacturer: { name: "ControlTech Solutions", isVerified: true, years: "12 Yrs" },
                                media: { hasVideo: true, images: [{ url: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600" }] },
                                metrics: { rating: 4.8 }
                            },
                            {
                                _id: 'bs4',
                                basicInfo: { name: "Industrial Copper Wire Roll" },
                                pricing: { basePrice: 850, minOrderUnit: 'kg', moq: 500, originalPrice: 1200 },
                                manufacturer: { name: "Metallo Corp", isVerified: true, years: "20 Yrs" },
                                media: { images: [{ url: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=600" }] },
                                metrics: { rating: 4.6 }
                            }
                        ].map((product) => (
                            <div key={product._id} className="h-full">
                                <ProductCard product={product} />
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
                        {manufacturers.slice(0, 6).map((mfr, index) => (
                            <MfrCard key={mfr._id} mfr={mfr} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
