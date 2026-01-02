import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PremiumProductCard from '../common/PremiumProductCard';
import {
    ShieldCheck, Star, MapPin, Phone, Mail, Globe,
    Users, Award, Factory, Calendar, ArrowLeft,
    MessageSquare, Heart, Share2, CheckCircle2, Truck, TrendingUp, BadgeCheck, Crown, Sparkles, Play, Plus
} from 'lucide-react';

const ManufacturerProfileUI = ({ manufacturer, products, activeTab, setActiveTab, isPreview = false, galleryImages: propsGalleryImages }) => {
    // Force refresh log
    console.log("ManufacturerProfileUI Loaded - Authentic Data Version");

    // Fallback images are used if provided images are empty
    const defaultProductImages = [
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?w=400',
        'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?w=400',
        'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=400',
        'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=400',
        'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=400',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=400',
    ];

    const defaultGalleryImages = [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=400',
    ];

    // Use manufacturer images for gallery if available
    const galleryImages = manufacturer?.images?.length > 0
        ? manufacturer.images
        : (propsGalleryImages && propsGalleryImages.length > 0 ? propsGalleryImages : defaultGalleryImages);
    const productImages = defaultProductImages; // Keep product fallback internal for now

    if (!manufacturer) return null;

    const yearsInBusiness = new Date().getFullYear() - (manufacturer.businessDetails?.yearEstablished || 2010);

    return (
        <div className={`min-h-screen bg-gradient-to-b from-zinc-950 via-black to-black ${isPreview ? 'rounded-xl overflow-hidden border border-zinc-800' : ''}`}>
            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-blue-950 via-blue-900/50 to-zinc-950 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 relative z-10">
                    {!isPreview && (
                        <Link to="/manufacturers" className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back to Suppliers
                        </Link>
                    )}

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Side - Company Info */}
                        <div className="flex-1">
                            <div className="flex items-start gap-6">
                                {/* Company Logo */}
                                <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20 border border-blue-500/20 overflow-hidden flex-shrink-0 p-2">
                                    <img
                                        src={manufacturer.logo || `https://ui-avatars.com/api/?name=${manufacturer.companyName}&background=2563eb&color=fff&size=128&bold=true&format=svg`}
                                        alt={manufacturer.companyName}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                                            {manufacturer.companyName}
                                        </h1>
                                        {/* Verified Badge */}
                                        {manufacturer.isVerified && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/30">
                                                <ShieldCheck className="w-3.5 h-3.5" /> Verified
                                            </span>
                                        )}
                                        {/* Gold Supplier Badge */}
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg shadow-yellow-500/30">
                                            <Crown className="w-3.5 h-3.5" /> Gold Supplier
                                        </span>
                                    </div>

                                    <p className="text-blue-200 flex items-center gap-2 mb-4 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        {manufacturer.location?.city || 'Mumbai'}, {manufacturer.location?.state || 'Maharashtra'}, India
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                        <div className="flex items-center gap-1.5 bg-yellow-500/10 px-3 py-1.5 rounded-full">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="font-bold text-yellow-400">{manufacturer.metrics?.rating || 4.5}</span>
                                            <span className="text-yellow-200/70">({manufacturer.metrics?.reviews || 145} reviews)</span>
                                        </div>
                                        <div className="text-blue-200 flex items-center gap-1.5 bg-blue-500/10 px-3 py-1.5 rounded-full">
                                            <Calendar className="w-4 h-4" />
                                            Est. {manufacturer.businessDetails?.yearEstablished || 2011}
                                        </div>
                                        <div className="text-blue-200 flex items-center gap-1.5 bg-blue-500/10 px-3 py-1.5 rounded-full">
                                            <Users className="w-4 h-4" />
                                            {manufacturer.businessDetails?.employeeCount || '200-300'} employees
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - CTA */}
                        <div className="flex flex-col gap-3 lg:items-end">
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5" />
                                Contact Supplier
                            </button>
                            <div className="flex gap-2">
                                <button className="p-3 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-full transition-colors">
                                    <Heart className="w-5 h-5 text-zinc-400" />
                                </button>
                                <button className="p-3 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-full transition-colors">
                                    <Share2 className="w-5 h-5 text-zinc-400" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-zinc-300">Trade Assurance</span>
                        </div>
                        <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full">
                            <Truck className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-zinc-300">Fast Shipping</span>
                        </div>
                        <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-zinc-300">{yearsInBusiness}+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full">
                            <BadgeCheck className="w-4 h-4 text-purple-500" />
                            <span className="text-sm text-zinc-300">ISO Certified</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Full Width Grid */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Main Content - 3 columns */}
                    <div className="lg:col-span-3">
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 mb-8 w-fit shadow-lg shadow-black/50">
                            {[
                                { id: 'home', label: 'Home' },
                                { id: 'products', label: 'Our Products' },
                                { id: 'about', label: 'About Us' },
                                { id: 'photos', label: 'Photos' },
                                { id: 'contact', label: 'Contact Us' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-2.5 font-semibold rounded-lg text-sm transition-all ${activeTab === tab.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Home Tab */}
                        {activeTab === 'home' && (
                            <div className="space-y-6">
                                {/* Hero Banner Carousel */}
                                <div className="relative rounded-2xl overflow-hidden group">
                                    <div className="aspect-[21/9] md:aspect-[3/1] relative">
                                        <img
                                            src="https://5.imimg.com/data5/SELLER/Default/2023/9/345088891/XV/IE/SV/85554914/kauna-grass-picnic-bag-500x500.png"
                                            alt="Fermoscapes Collection"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/70 to-transparent" />
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="px-8 md:px-12 max-w-2xl">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <img
                                                        src={manufacturer.logo || "https://5.imimg.com/data5/SELLER/Logo/2024/2/386834072/BL/XH/YO/85554914/1db3ba04-ead5-42c4-9e71-ea9131a96f51-120x120.png"}
                                                        alt="Logo"
                                                        className="w-16 h-16 rounded-xl bg-white p-1 object-contain shadow-xl"
                                                    />
                                                    <div>
                                                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Official Store</span>
                                                        <h1 className="text-2xl md:text-4xl font-black text-white">Fermoscapes</h1>
                                                    </div>
                                                </div>
                                                <p className="text-zinc-300 text-sm md:text-base mb-6 line-clamp-2">
                                                    Premium handcrafted baskets, tote bags & eco-friendly home decor. Sustainable creations by skilled artisans.
                                                </p>
                                                <div className="flex gap-3">
                                                    <button onClick={() => setActiveTab('products')} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
                                                        <Sparkles className="w-4 h-4" /> Explore Collection
                                                    </button>
                                                    <button onClick={() => setActiveTab('contact')} className="px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-all border border-white/20">
                                                        Get Quote
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Catalog Grid - Premium Branding */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {/* Large Featured Banner */}
                                    <div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group cursor-pointer" onClick={() => setActiveTab('products')}>
                                        <img
                                            src="https://5.imimg.com/data5/SELLER/Default/2024/2/387433965/XR/ZN/HZ/85554914/kauna-grass-small-hamper-basket-500x500.jpg"
                                            alt="Gift Hampers Collection"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Bestseller</span>
                                            <h3 className="text-white text-xl md:text-2xl font-bold">Kauna Grass Hampers</h3>
                                            <p className="text-zinc-300 text-sm mt-1">Perfect for gifting & storage</p>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                                            <span className="text-white text-xs font-bold">₹210+</span>
                                        </div>
                                    </div>

                                    {/* Small Catalog Cards */}
                                    <div className="rounded-xl overflow-hidden relative group cursor-pointer aspect-square" onClick={() => setActiveTab('products')}>
                                        <img
                                            src="https://5.imimg.com/data5/SELLER/Default/2024/2/387427596/TC/MV/MU/85554914/handmade-natural-grass-beach-tote-bag-500x500.jpg"
                                            alt="Beach Tote Bags"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h4 className="text-white text-sm font-bold">Beach Tote Bags</h4>
                                            <span className="text-blue-400 text-xs font-semibold">₹350+</span>
                                        </div>
                                    </div>

                                    <div className="rounded-xl overflow-hidden relative group cursor-pointer aspect-square" onClick={() => setActiveTab('products')}>
                                        <img
                                            src="https://5.imimg.com/data5/SELLER/Default/2023/9/341280804/NH/QI/SP/85554914/bw4-500x500.webp"
                                            alt="Wall Decor Baskets"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h4 className="text-white text-sm font-bold">Wall Decor</h4>
                                            <span className="text-blue-400 text-xs font-semibold">₹450+</span>
                                        </div>
                                    </div>

                                    <div className="rounded-xl overflow-hidden relative group cursor-pointer aspect-square" onClick={() => setActiveTab('products')}>
                                        <img
                                            src="https://5.imimg.com/data5/SELLER/Default/2023/9/341282202/HF/WK/II/85554914/1-693743ff-fb12-4f13-ab45-b34c7b5d447e-500x500.webp"
                                            alt="Block Printed Diaries"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h4 className="text-white text-sm font-bold">Block Print Diaries</h4>
                                            <span className="text-blue-400 text-xs font-semibold">₹250+</span>
                                        </div>
                                    </div>

                                    <div className="rounded-xl overflow-hidden relative group cursor-pointer aspect-square" onClick={() => setActiveTab('products')}>
                                        <img
                                            src="https://5.imimg.com/data5/SELLER/Default/2024/2/386747120/BE/DZ/JV/85554914/a1-2-500x500.jpeg"
                                            alt="Macrame Mirrors"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h4 className="text-white text-sm font-bold">Macrame Mirrors</h4>
                                            <span className="text-blue-400 text-xs font-semibold">₹850+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Wide Banner - Product Catalog Strip */}
                                <div className="rounded-2xl overflow-hidden relative group cursor-pointer" onClick={() => setActiveTab('products')}>
                                    <div className="aspect-[4/1] md:aspect-[5/1]">
                                        <img
                                            src="https://5.imimg.com/data5/SELLER/Default/2024/2/387430810/ZS/SW/YU/85554914/kauna-grass-u-shaped-tote-bag-500x500.jpg"
                                            alt="Product Catalogue"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/70 to-transparent" />
                                        <div className="absolute inset-0 flex items-center px-8 md:px-12">
                                            <div>
                                                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Product Catalogue</span>
                                                <h3 className="text-white text-2xl md:text-3xl font-black mt-1">Explore 26+ Handcrafted Products</h3>
                                                <p className="text-blue-100/80 text-sm mt-2 max-w-md">From baskets to diaries, discover our complete range of sustainable artisan creations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Featured Products Preview */}
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                            <Star className="w-5 h-5 text-yellow-500" />
                                            Featured Products
                                        </h3>
                                        <button onClick={() => setActiveTab('products')} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                                            View All →
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {products.slice(0, 4).map((product, idx) => (
                                            <PremiumProductCard key={product._id || idx} product={product} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Products Tab */}
                        {activeTab === 'products' && (
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                                {products.map((product, idx) => (
                                    <PremiumProductCard key={product._id || idx} product={product} />
                                ))}
                                {isPreview && (
                                    <div className="bg-zinc-900/50 border-2 border-dashed border-zinc-700 rounded-xl flex flex-col items-center justify-center p-6 hover:border-blue-500 hover:bg-blue-500/10 transition-all cursor-pointer group h-full min-h-[300px]">
                                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            <Plus className="w-6 h-6 text-zinc-500 group-hover:text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-zinc-400 group-hover:text-blue-400">Add New Product</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* About Tab */}
                        {activeTab === 'about' && (
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                        <Factory className="w-5 h-5 text-blue-500" />
                                        About Company
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {manufacturer.description || `${manufacturer.companyName} is a leading manufacturer in India with ${yearsInBusiness}+ years of experience serving global clients. We specialize in high-quality products with competitive pricing and reliable delivery.`}
                                    </p>
                                </div>
                                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                                    <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-purple-500" />
                                        Capabilities
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {(manufacturer.capabilities || ['OEM Manufacturing', 'ODM Design', 'Custom Packaging', 'Quality Testing', 'Export Ready', 'Bulk Orders']).map((cap, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 text-sm">
                                                {cap}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:col-span-2 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20 rounded-2xl p-6">
                                    <h3 className="text-white font-bold text-lg mb-4">Why Choose Us?</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {[
                                            { icon: ShieldCheck, title: 'Quality Assured', desc: '100% quality inspection on all products' },
                                            { icon: Truck, title: 'Fast Delivery', desc: 'Ships within 7-15 business days' },
                                            { icon: TrendingUp, title: 'Competitive Pricing', desc: 'Best factory-direct prices' },
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <item.icon className="w-5 h-5 text-blue-400" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                                                    <p className="text-zinc-500 text-xs">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Photos Tab (Renamed from Gallery) */}
                        {activeTab === 'photos' && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((img, idx) => (
                                    <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors group cursor-pointer bg-zinc-900">
                                        <img
                                            src={img}
                                            alt={`Factory photo ${idx + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-opacity">
                                                <Sparkles className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {products.map((p, i) => (
                                    <div key={`p-${i}`} className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors group cursor-pointer bg-zinc-900">
                                        <img
                                            src={p.media?.images?.[0]?.url || defaultProductImages[i % defaultProductImages.length]}
                                            alt={p.basicInfo?.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            onError={(e) => { e.target.src = defaultProductImages[i % defaultProductImages.length]; }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Contact Tab */}
                        {activeTab === 'contact' && (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                            <Phone className="w-5 h-5 text-blue-500" />
                                            Contact Information
                                        </h3>
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-zinc-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-zinc-500 mb-1">Registered Address</p>
                                                    <p className="text-white font-medium">{manufacturer.businessDetails?.address || `${manufacturer.location?.city}, ${manufacturer.location?.state}, India`}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Phone className="w-5 h-5 text-zinc-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-zinc-500 mb-1">Phone Number</p>
                                                    <p className="text-white font-medium">+91 98765 43210</p>
                                                    <p className="text-zinc-500 text-xs mt-1">Mon - Sat, 9:00 AM - 6:00 PM</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <Mail className="w-5 h-5 text-zinc-400" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-zinc-500 mb-1">Email Address</p>
                                                    <p className="text-white font-medium">sales@{manufacturer.companyName?.toLowerCase().replace(/\s/g, '') || 'company'}.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Inquiry Form */}
                                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                                            <MessageSquare className="w-5 h-5 text-blue-500" />
                                            Send Inquiry
                                        </h3>
                                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                            <div>
                                                <label className="block text-zinc-400 text-sm mb-2">Your Name</label>
                                                <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Enter your name" />
                                            </div>
                                            <div>
                                                <label className="block text-zinc-400 text-sm mb-2">Message</label>
                                                <textarea rows="4" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="I am interested in..." ></textarea>
                                            </div>
                                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
                                                Send Message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>

                    {/* Sidebar - 1 column */}
                    <div className="space-y-4">
                        {/* Factory Stats */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-blue-500" />
                                Factory Stats
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Response Time', value: '< 24 hours', color: 'text-white' },
                                    { label: 'Response Rate', value: '95%', color: 'text-white' },
                                    { label: 'Total Products', value: products.length || 5, color: 'text-white' },
                                    { label: 'On-Time Delivery', value: '98%', color: 'text-green-500' },
                                    { label: 'Repeat Buyers', value: '87%', color: 'text-blue-400' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-zinc-500 text-sm">{stat.label}</span>
                                        <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-blue-500" />
                                Contact
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-zinc-400">
                                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <Phone className="w-4 h-4 text-blue-500" />
                                    </div>
                                    +91 98765 43210
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-400">
                                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-blue-500" />
                                    </div>
                                    contact@{manufacturer.companyName?.toLowerCase().replace(/\s/g, '') || 'company'}.com
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-400">
                                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <Globe className="w-4 h-4 text-blue-500" />
                                    </div>
                                    www.{manufacturer.companyName?.toLowerCase().replace(/\s/g, '') || 'company'}.com
                                </div>
                            </div>
                            <button className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
                                Send Inquiry
                            </button>
                        </div>

                        {/* Trade Assurance Card */}
                        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/20 rounded-2xl p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-5 h-5 text-green-500" />
                                <h3 className="text-white font-bold">Trade Assurance</h3>
                            </div>
                            <p className="text-zinc-400 text-sm mb-3">Your orders are protected by our comprehensive buyer protection program.</p>
                            <Link to="/trade-assurance" className="text-green-400 text-sm font-medium hover:text-green-300">
                                Learn more →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManufacturerProfileUI;
