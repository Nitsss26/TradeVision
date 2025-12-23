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

const HeroSection = () => {
    return (
        <div className="bg-black py-6">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-12 gap-6 h-[420px]">
                    {/* LEFT: Categories Sidebar (Hidden on mobile/tablet for space, or simplified) */}
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

                    {/* MIDDLE: Main Slider */}
                    <div className="col-span-12 lg:col-span-9 xl:col-span-7 bg-zinc-900 rounded-2xl overflow-hidden relative group border border-zinc-800 shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Hero"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-center px-12 z-10 max-w-2xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold border border-blue-500/30 mb-4 w-fit animate-fade-in">
                                FACTORY DIRECT
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                                Source Premium <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                                    Product Inventory
                                </span>
                            </h1>
                            <p className="text-zinc-300 text-lg mb-8 max-w-lg leading-relaxed">
                                Connect with top-rated verified manufacturers.
                                Secure payments, quality inspections, and on-time delivery guaranteed.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/products" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2">
                                    Start Sourcing <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2">
                                    <Play className="w-4 h-4 fill-current" /> Watch Video
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: User Widgets */}
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
                                        <h6 className="text-white font-bold text-lg">Become a verified manufacturer</h6>
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

                        {/* Verified Manufacturers Grid */}
                        {/* Request for Quotation */}
                        <div className="flex-1 bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-6 border border-blue-800/50 shadow-xl relative overflow-hidden group cursor-pointer">
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
            {[
                'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=200',
                'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200',
                'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=200'
            ].map((imgUrl, i) => (
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

    useEffect(() => {
        const loadData = async () => {
            const prods = await productService.getAllProducts();
            setTrendingProducts(prods.slice(0, 8)); // Get 8 for a full grid
            const mfrs = await manufacturerService.getVerifiedManufacturers();
            setManufacturers(mfrs.slice(0, 4));
        };
        loadData();
    }, []);

    return (
        <MainLayout>
            <div className="min-h-screen bg-black text-white font-sans pb-20">
                {/* Hero Section */}
                <HeroSection />

                <div className="max-w-[1400px] mx-auto px-4 lg:px-6 pt-12">
                    {/* Trust Badges */}
                    <TrustSection />

                    {/* Explore Categories */}
                    <SectionHeader title="Explore Categories" linkText="" />
                    <PremiumCategoryGrid />

                    {/* Trending Products */}
                    <SectionHeader title="Trending Products" linkTo="/products" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-20 animate-fade-in-up">
                        {trendingProducts.map(p => (
                            <PremiumProductCard key={p._id} product={p} />
                        ))}
                    </div>

                    {/* Verified Manufacturers */}
                    <SectionHeader title="Verified Manufacturers" linkTo="/manufacturers" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {manufacturers.map(m => (
                            <MfrCard key={m._id} mfr={m} />
                        ))}
                    </div>

                    {/* Big CTA */}
                    <div className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden border border-blue-800">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to scale your business?</h2>
                            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                                Join over 10,000+ businesses sourcing directly from verified Indian manufacturers.
                            </p>
                            <Link to="/register" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-900 font-bold text-lg rounded-full shadow-2xl hover:scale-105 transition-transform">
                                Get Started for Free <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
