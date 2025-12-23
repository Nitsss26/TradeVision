import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Flame, Crown, Sparkles, ArrowRight, ShieldCheck, Eye, Heart, BadgeCheck } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { productService } from '../services/mock/productService';

const FeaturedSelectionPage = () => {
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState('trending');

    useEffect(() => {
        const loadProducts = async () => {
            const allProducts = await productService.getAllProducts();
            setProducts(allProducts);
        };
        loadProducts();
    }, []);

    const tabs = [
        { id: 'trending', name: 'Trending Now', icon: Flame, color: 'from-blue-500 to-blue-600' },
        { id: 'bestsellers', name: 'Best Sellers', icon: Crown, color: 'from-blue-600 to-indigo-600' },
        { id: 'new', name: 'New Arrivals', icon: Sparkles, color: 'from-indigo-500 to-blue-600' },
        { id: 'deals', name: 'Hot Deals', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    ];

    const collections = [
        {
            title: 'Summer Essentials',
            subtitle: 'Beat the heat with our curated picks',
            image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
            count: 245
        },
        {
            title: 'Tech Gadgets',
            subtitle: 'Latest electronics & accessories',
            image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
            count: 189
        },
        {
            title: 'Home & Living',
            subtitle: 'Transform your space',
            image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
            count: 320
        },
        {
            title: 'Industrial Supplies',
            subtitle: 'Factory-direct materials',
            image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=600',
            count: 156
        },
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-black text-white font-sans">
                {/* Hero Banner */}
                <div className="relative bg-gradient-to-br from-blue-950/60 via-blue-900/30 to-black py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/15 blur-[120px] rounded-full"></div>

                    <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Handpicked for you</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Selection</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            Discover our curated collection of top-rated products from verified manufacturers. Updated daily based on trends and buyer preferences.
                        </p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
                    <div className="flex flex-wrap gap-3 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === tab.id
                                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg shadow-blue-500/30`
                                        : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-blue-500/50'
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Featured Collections */}
                    <div className="mb-12">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Crown className="w-5 h-5 text-blue-500" />
                            Featured Collections
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {collections.map((collection, idx) => (
                                <Link
                                    key={idx}
                                    to="/products"
                                    className="group relative h-48 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all"
                                >
                                    <img
                                        src={collection.image}
                                        alt={collection.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-white font-bold text-lg">{collection.title}</h3>
                                        <p className="text-zinc-400 text-sm">{collection.subtitle}</p>
                                        <span className="text-blue-400 text-xs font-medium mt-2 inline-block">{collection.count} products</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Flame className="w-5 h-5 text-blue-500" />
                                {tabs.find(t => t.id === activeTab)?.name}
                            </h2>
                            <Link to="/products" className="text-blue-400 text-sm font-medium hover:text-blue-300 flex items-center gap-1">
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {products.slice(0, 10).map((product, idx) => (
                                <Link
                                    key={product._id || idx}
                                    to={`/products/${product._id}`}
                                    className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                                >
                                    <div className="relative aspect-square bg-zinc-800 overflow-hidden">
                                        <img
                                            src={product.media?.images?.[0]?.url || 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=300'}
                                            alt={product.basicInfo?.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Verified Badge */}
                                        <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full">
                                            <ShieldCheck className="w-3 h-3 text-white" />
                                            <span className="text-[10px] font-bold text-white">VERIFIED</span>
                                        </div>
                                        {idx < 3 && (
                                            <div className="absolute top-2 right-2 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-[10px] font-bold text-white">
                                                HOT
                                            </div>
                                        )}
                                        <div className="absolute bottom-2 right-2 w-8 h-8 bg-black/50 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Heart className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-white text-sm font-medium line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
                                            {product.basicInfo?.name}
                                        </h3>
                                        <div className="flex items-center gap-1 mb-2">
                                            <Star className="w-3 h-3 text-orange-400 fill-current" />
                                            <span className="text-xs text-zinc-400">{product.metrics?.rating || 4.5}</span>
                                            <BadgeCheck className="w-3 h-3 text-blue-500 ml-1" />
                                            <span className="text-xs text-blue-400">Verified</span>
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-white font-bold">₹{product.pricing?.basePrice?.toLocaleString() || '299'}</span>
                                            <span className="text-zinc-500 text-xs">/ {product.pricing?.minOrderUnit || 'piece'}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default FeaturedSelectionPage;
