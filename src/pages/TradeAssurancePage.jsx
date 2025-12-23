import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Truck, Clock, Award, CheckCircle2, ArrowRight, Star, BadgeCheck } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { productService } from '../services/mock/productService';
import { manufacturerService } from '../services/mock/manufacturerService';

const TradeAssurancePage = () => {
    const [products, setProducts] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const allProducts = await productService.getAllProducts();
            setProducts(allProducts);
            const mfrs = await manufacturerService.getVerifiedManufacturers();
            setManufacturers(mfrs);
        };
        loadData();
    }, []);

    const protections = [
        {
            icon: Lock,
            title: 'Secure Payment',
            desc: 'Funds held in escrow until you verify goods received',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Truck,
            title: 'On-Time Dispatch',
            desc: 'Get refund if shipment is delayed beyond promised date',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: Award,
            title: 'Quality Guarantee',
            desc: 'Report quality issues within 30 days for resolution',
            color: 'from-purple-500 to-indigo-600'
        },
        {
            icon: CreditCard,
            title: 'Easy Refunds',
            desc: 'Get your money back if products don\'t match description',
            color: 'from-orange-500 to-red-600'
        },
    ];

    const stats = [
        { value: '₹500Cr+', label: 'Protected Orders' },
        { value: '50,000+', label: 'Verified Suppliers' },
        { value: '99.2%', label: 'Dispute Resolution' },
        { value: '24/7', label: 'Support Available' },
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-black text-white font-sans">
                {/* Hero Banner */}
                <div className="relative bg-gradient-to-br from-green-900/40 via-emerald-900/20 to-black py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-600/15 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/15 blur-[120px] rounded-full"></div>

                    <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="w-6 h-6 text-green-400" />
                            <span className="text-green-400 text-sm font-bold uppercase tracking-wider">100% Protected</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Assurance</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mb-8">
                            Shop with confidence. Every order is protected with our comprehensive buyer protection program covering payment security, on-time delivery, and product quality.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 mt-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
                                    <div className="text-sm text-zinc-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Protection Features */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <Lock className="w-6 h-6 text-green-500" />
                        How We Protect You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {protections.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/5 transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How It Works */}
                <div className="bg-zinc-900/50 border-y border-zinc-800 py-12">
                    <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">How Trade Assurance Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: 1, title: 'Place Order', desc: 'Order from verified Trade Assurance suppliers' },
                                { step: 2, title: 'Secure Payment', desc: 'Pay securely - funds held until delivery' },
                                { step: 3, title: 'Track Shipment', desc: 'Monitor your order in real-time' },
                                { step: 4, title: 'Receive & Verify', desc: 'Confirm quality before release' },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center relative">
                                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                                    {idx < 3 && (
                                        <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-green-500/50 to-transparent"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Protected Products */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <BadgeCheck className="w-5 h-5 text-green-500" />
                            Trade Assurance Products
                        </h2>
                        <Link to="/products?verified=true" className="text-green-400 text-sm font-medium hover:text-green-300 flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {products.slice(0, 10).map((product, idx) => (
                            <Link
                                key={product._id || idx}
                                to={`/products/${product._id}`}
                                className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/5 transition-all"
                            >
                                <div className="relative aspect-square bg-zinc-800 overflow-hidden">
                                    <img
                                        src={product.media?.images?.[0]?.url || 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=300'}
                                        alt={product.basicInfo?.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-green-500/90 rounded-full">
                                        <ShieldCheck className="w-3 h-3 text-white" />
                                        <span className="text-[10px] font-bold text-white">PROTECTED</span>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="text-white text-sm font-medium line-clamp-2 mb-2 group-hover:text-green-400 transition-colors">
                                        {product.basicInfo?.name}
                                    </h3>
                                    <div className="flex items-center gap-1 mb-2">
                                        <Star className="w-3 h-3 text-orange-400 fill-current" />
                                        <span className="text-xs text-zinc-400">{product.metrics?.rating || 4.5}</span>
                                        <CheckCircle2 className="w-3 h-3 text-green-500 ml-1" />
                                        <span className="text-xs text-green-500">Verified</span>
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

                {/* Verified Manufacturers */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-500" />
                            Trade Assurance Suppliers
                        </h2>
                        <Link to="/manufacturers" className="text-green-400 text-sm font-medium hover:text-green-300 flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {manufacturers.slice(0, 4).map((mfr, idx) => (
                            <Link
                                key={mfr._id || idx}
                                to={`/manufacturers/${mfr._id}`}
                                className="group bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-green-500/50 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-lg bg-white overflow-hidden">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${mfr.companyName}&background=0D8ABC&color=fff&size=128&bold=true`}
                                            alt={mfr.companyName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm group-hover:text-green-400 transition-colors">{mfr.companyName}</h3>
                                        <div className="flex items-center gap-1">
                                            <ShieldCheck className="w-3 h-3 text-green-500" />
                                            <span className="text-xs text-green-500">Trade Assurance</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs text-zinc-500">
                                    <span>{mfr.businessDetails?.yearEstablished ? `${new Date().getFullYear() - mfr.businessDetails.yearEstablished}+ Years` : '10+ Years'}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-orange-400 fill-current" />
                                        <span>{mfr.metrics?.rating || 4.8}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default TradeAssurancePage;
