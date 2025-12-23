import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ShieldCheck, Star, MapPin, Clock, Phone, Mail, Globe,
    CircleCheck, Package, Users, Award, Factory, Calendar, ArrowLeft,
    MessageSquare, Heart, Share2, CheckCircle2, Truck, TrendingUp, BadgeCheck, Crown, Sparkles, Play
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { manufacturerService } from '../services/mock/manufacturerService';
import { productService } from '../services/mock/productService';

const ManufacturerProfilePage = () => {
    const { id } = useParams();
    const [manufacturer, setManufacturer] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('products');

    // Fallback images
    const productImages = [
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?w=400',
        'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?w=400',
        'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=400',
        'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=400',
        'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=400',
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=400',
    ];

    const galleryImages = [
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=400',
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mfr = await manufacturerService.getManufacturerById(id);
                setManufacturer(mfr);
                const allProducts = await productService.getAllProducts();
                const mfrProducts = allProducts.filter(p => p.manufacturerId === id);
                setProducts(mfrProducts.length > 0 ? mfrProducts : allProducts.slice(0, 6));
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <MainLayout>
                <div className="min-h-screen bg-black flex items-center justify-center">
                    <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full" />
                </div>
            </MainLayout>
        );
    }

    if (!manufacturer) {
        return (
            <MainLayout>
                <div className="min-h-screen bg-black flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Manufacturer not found</h2>
                    <Link to="/manufacturers" className="text-blue-500 hover:underline">
                        ← Back to Manufacturers
                    </Link>
                </div>
            </MainLayout>
        );
    }

    const yearsInBusiness = new Date().getFullYear() - (manufacturer.businessDetails?.yearEstablished || 2010);

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-black">
                {/* Hero Banner */}
                <div className="relative bg-gradient-to-br from-blue-950 via-blue-900/50 to-zinc-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

                    <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 relative z-10">
                        <Link to="/manufacturers" className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Back to Suppliers
                        </Link>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Side - Company Info */}
                            <div className="flex-1">
                                <div className="flex items-start gap-6">
                                    {/* Company Logo */}
                                    <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20 border border-blue-500/20 overflow-hidden flex-shrink-0">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${manufacturer.companyName}&background=2563eb&color=fff&size=128&bold=true&format=svg`}
                                            alt={manufacturer.companyName}
                                            className="w-full h-full object-cover"
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
                            <div className="flex gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 mb-8 w-fit">
                                {['products', 'about', 'certifications', 'gallery'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-2.5 font-semibold capitalize rounded-lg text-sm transition-all ${activeTab === tab
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Products Tab */}
                            {activeTab === 'products' && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {products.map((product, idx) => (
                                        <Link
                                            key={product._id || idx}
                                            to={`/products/${product._id}`}
                                            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
                                        >
                                            <div className="relative aspect-square bg-zinc-800 overflow-hidden">
                                                <img
                                                    src={product.media?.images?.[0]?.url || productImages[idx % productImages.length]}
                                                    alt={product.basicInfo?.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={(e) => { e.target.src = productImages[idx % productImages.length]; }}
                                                />
                                                {/* Verified Badge */}
                                                <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full">
                                                    <ShieldCheck className="w-3 h-3 text-white" />
                                                    <span className="text-[10px] font-bold text-white">VERIFIED</span>
                                                </div>
                                                {/* Play button for video */}
                                                <div className="absolute top-2 right-2 w-7 h-7 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <Play className="w-3 h-3 text-white fill-white" />
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-white text-sm font-medium line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
                                                    {product.basicInfo?.name}
                                                </h3>
                                                <div className="text-white font-bold text-lg">
                                                    ₹{product.pricing?.basePrice?.toLocaleString() || '299'}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
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

                            {/* Certifications Tab */}
                            {activeTab === 'certifications' && (
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { name: 'ISO 9001:2015', type: 'Quality Management', color: 'blue' },
                                        { name: 'GOTS Certified', type: 'Organic Textile', color: 'green' },
                                        { name: 'BIS Certified', type: 'Bureau of Indian Standards', color: 'purple' },
                                        { name: 'Export License', type: 'International Trade', color: 'yellow' },
                                        { name: 'FDA Approved', type: 'Food & Drug Safety', color: 'red' },
                                        { name: 'CE Marking', type: 'European Conformity', color: 'indigo' },
                                    ].map((cert, idx) => (
                                        <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
                                            <div className={`w-14 h-14 bg-${cert.color}-500/10 rounded-xl flex items-center justify-center border border-${cert.color}-500/20`}>
                                                <Award className={`w-7 h-7 text-${cert.color}-500`} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold">{cert.name}</h4>
                                                <p className="text-zinc-500 text-sm">{cert.type}</p>
                                            </div>
                                            <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Gallery Tab */}
                            {activeTab === 'gallery' && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {galleryImages.map((img, idx) => (
                                        <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors group cursor-pointer">
                                            <img
                                                src={img}
                                                alt={`Factory gallery ${idx + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                                <div className="opacity-0 group-hover:opacity-100 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-opacity">
                                                    <Play className="w-6 h-6 text-white fill-white" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
        </MainLayout>
    );
};

export default ManufacturerProfilePage;
