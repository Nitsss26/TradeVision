import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ShieldCheck, Star, MapPin, Clock, Phone, Mail, Globe,
    CheckCircle, Package, Users, Award, Factory, Calendar, ArrowLeft
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
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mfr = await manufacturerService.getManufacturerById(id);
                setManufacturer(mfr);
                const allProducts = await productService.getAllProducts();
                const mfrProducts = allProducts.filter(p => p.manufacturerId === id);
                setProducts(mfrProducts);
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

    return (
        <MainLayout>
            <div className="min-h-screen bg-black">
                {/* Hero Banner */}
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12 px-4 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <Link to="/manufacturers" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Suppliers
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center text-5xl">
                                🏭
                            </div>
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3 mb-2">
                                    {manufacturer.companyName}
                                    {manufacturer.isVerified && (
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                                            <ShieldCheck className="w-4 h-4" /> Verified
                                        </span>
                                    )}
                                </h1>
                                <p className="text-blue-200 flex items-center gap-2 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    {manufacturer.location?.city}, {manufacturer.location?.state}, India
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <Star className="w-5 h-5 fill-current" />
                                        <span className="font-semibold">{manufacturer.metrics?.rating || 4.5}</span>
                                        <span className="text-blue-300 text-sm">({manufacturer.metrics?.reviews || 50} reviews)</span>
                                    </div>
                                    <div className="text-blue-200 flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        Est. {manufacturer.businessDetails?.yearEstablished || 2010}
                                    </div>
                                    <div className="text-blue-200 flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        {manufacturer.businessDetails?.employeeCount || '100+'} employees
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                                    Contact Supplier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="flex gap-6 border-b border-zinc-800 mb-6">
                                {['products', 'about', 'certifications'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-4 font-medium capitalize transition-colors ${activeTab === tab
                                                ? 'text-blue-500 border-b-2 border-blue-500'
                                                : 'text-zinc-500 hover:text-white'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            {activeTab === 'products' && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {products.length > 0 ? products.map((product, idx) => (
                                        <Link
                                            key={product._id}
                                            to={`/products/${product._id}`}
                                            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-blue-500 transition-all"
                                        >
                                            <div className="aspect-square bg-zinc-800 overflow-hidden">
                                                <img
                                                    src={product.media?.images?.[0]?.url || productImages[idx % productImages.length]}
                                                    alt={product.basicInfo?.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                                    onError={(e) => { e.target.src = productImages[idx % productImages.length]; }}
                                                />
                                            </div>
                                            <div className="p-3">
                                                <h3 className="text-white text-sm font-medium line-clamp-2 mb-1">
                                                    {product.basicInfo?.name}
                                                </h3>
                                                <div className="text-white font-bold">
                                                    ₹{product.pricing?.basePrice?.toLocaleString()}
                                                </div>
                                            </div>
                                        </Link>
                                    )) : (
                                        <div className="col-span-full text-center py-12">
                                            <Package className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                                            <p className="text-zinc-500">No products listed yet</p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'about' && (
                                <div className="space-y-6">
                                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                        <h3 className="text-white font-semibold mb-4">About Company</h3>
                                        <p className="text-zinc-400 leading-relaxed">
                                            {manufacturer.description || 'A leading manufacturer in India with years of experience serving global clients.'}
                                        </p>
                                    </div>
                                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                        <h3 className="text-white font-semibold mb-4">Capabilities</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {(manufacturer.capabilities || ['OEM Manufacturing', 'Custom Design', 'Quality Testing']).map((cap, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-zinc-800 rounded-lg text-zinc-400 text-sm">
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'certifications' && (
                                <div className="grid md:grid-cols-2 gap-4">
                                    {['ISO 9001:2015', 'GOTS Certified', 'BIS Certified', 'Export License'].map((cert, idx) => (
                                        <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                                <Award className="w-6 h-6 text-blue-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium">{cert}</h4>
                                                <p className="text-zinc-500 text-sm">Valid certification</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Quick Stats */}
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                <h3 className="text-white font-semibold mb-4">Factory Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500">Response Time</span>
                                        <span className="text-white font-medium">&lt; 24 hours</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500">Response Rate</span>
                                        <span className="text-white font-medium">95%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500">Total Products</span>
                                        <span className="text-white font-medium">{products.length}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-500">On-Time Delivery</span>
                                        <span className="text-green-500 font-medium">98%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                                <h3 className="text-white font-semibold mb-4">Contact</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <Phone className="w-4 h-4 text-blue-500" />
                                        +91 98765 43210
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <Mail className="w-4 h-4 text-blue-500" />
                                        contact@{manufacturer.companyName?.toLowerCase().replace(/\s/g, '') || 'factory'}.com
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-400">
                                        <Globe className="w-4 h-4 text-blue-500" />
                                        www.{manufacturer.companyName?.toLowerCase().replace(/\s/g, '') || 'factory'}.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ManufacturerProfilePage;
