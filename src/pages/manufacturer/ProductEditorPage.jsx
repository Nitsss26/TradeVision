import React, { useState } from 'react';
import {
    Save, Eye, Image as ImageIcon, Plus,
    Bold, Italic, List, Link as LinkIcon,
    ShieldCheck, Truck, Star, CircleCheck, MessageSquare,
    ChevronRight, ArrowLeft, Heart, Share2, Play
} from 'lucide-react';
import ManufacturerLayout from '../../layouts/ManufacturerLayout';

const ProductEditorPage = () => {
    const [activeTab, setActiveTab] = useState('details');
    // Enhanced State to match PDP structure
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        stock: '',
        category: '',
        sku: '',
        description: `This premium product is manufactured to the highest standards, ensuring durability and reliability using organic materials.`,
        features: '',
        specs: { // Default specs for preview
            "Material": "Premium Grade",
            "Warranty": "2 Years",
            "Certifications": "ISO 9001",
            "Origin": "India"
        },
        manufacturerName: "Tech Solutions Ltd.", // Auto-filled from profile normally
        minOrder: "10 pieces"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <ManufacturerLayout>
            <div className="max-w-[1920px] mx-auto h-[calc(100vh-8rem)] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 backdrop-blur-sm sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">Product Editor</h1>
                            <p className="text-xs text-zinc-500">Editing: <span className="text-blue-400">{formData.title || 'Untitled Product'}</span></p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span className="flex items-center gap-2 text-xs text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                            <CircleCheck className="w-3 h-3" /> Auto-saved
                        </span>
                        <div className="h-8 w-px bg-zinc-700 mx-2"></div>
                        <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors">
                            Save Draft
                        </button>
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20">
                            <Save className="w-4 h-4" /> Publish
                        </button>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                    {/* --- LEFT COLUMN: EDITOR FORM (Width 40%) --- */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col min-h-0 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                        <div className="flex border-b border-zinc-800 bg-zinc-950">
                            {['details', 'specs', 'media'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 font-medium capitalize text-sm transition-colors relative ${activeTab === tab
                                        ? 'text-blue-500 bg-zinc-900'
                                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-zinc-900">
                            {activeTab === 'details' && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Product Title <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder="e.g., Industrial Hydraulic Pump Series X"
                                            className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Base Price (₹)</label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                placeholder="0.00"
                                                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Units / SKU</label>
                                            <input
                                                type="text"
                                                name="sku"
                                                value={formData.sku}
                                                onChange={handleChange}
                                                placeholder="SKU-12345"
                                                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Stock Qty</label>
                                            <input
                                                type="number"
                                                name="stock"
                                                value={formData.stock}
                                                onChange={handleChange}
                                                placeholder="1000"
                                                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Category</label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors text-sm"
                                            >
                                                <option value="">Select...</option>
                                                <option value="Industrial">Industrial</option>
                                                <option value="Electronics">Electronics</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Description (HTML)</label>
                                            <span className="text-[10px] text-zinc-500 bg-zinc-800 px-2 rounded">Rich Text</span>
                                        </div>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={8}
                                            className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-lg text-white text-sm focus:border-blue-500 focus:outline-none transition-colors font-mono custom-scrollbar"
                                        ></textarea>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'media' && (
                                <div className="space-y-6">
                                    <div className="border-2 border-dashed border-zinc-700 hover:border-blue-500 bg-zinc-950/50 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <ImageIcon className="w-6 h-6 text-zinc-500 group-hover:text-blue-500" />
                                        </div>
                                        <h3 className="text-sm font-bold text-white mb-1">Upload Media</h3>
                                        <p className="text-xs text-zinc-500 max-w-xs">Drag & drop images or videos.</p>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <div key={i} className="aspect-square bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center relative group cursor-pointer hover:border-zinc-600">
                                                <span className="text-xs text-zinc-600">Img {i}</span>
                                                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 p-1 bg-black/50 rounded hover:bg-red-500/80 transition-all">
                                                    <span className="text-[10px] text-white">x</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'specs' && (
                                <div className="space-y-6">
                                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-xs">
                                        These specifications appear in the "Key Features" section of the product page.
                                    </div>
                                    <div className="space-y-3">
                                        {Object.entries(formData.specs).map(([key, val], idx) => (
                                            <div key={idx} className="flex gap-2">
                                                <input type="text" defaultValue={key} className="w-1/3 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded text-sm text-zinc-400" />
                                                <input type="text" defaultValue={val} className="flex-1 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded text-sm text-white" />
                                                <button className="p-2 hover:bg-zinc-800 rounded text-zinc-500 hover:text-red-500">×</button>
                                            </div>
                                        ))}
                                        <button className="w-full py-2 border border-dashed border-zinc-700 text-zinc-400 text-xs hover:text-white hover:border-zinc-500 rounded transition-colors">
                                            + Add Specification
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: LIVE PREVIEW (Width 60%) --- */}
                    {/* This structure mimics ProductDetailPage.jsx exactly within a scaled container */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col min-h-0">
                        <div className="bg-zinc-950 border-t border-x border-zinc-800 rounded-t-xl p-3 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-zinc-400">
                                <Eye className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Live Page Preview</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-zinc-500">
                                <span>Desktop View</span>
                                <div className="flex gap-1">
                                    <div className="w-8 h-4 rounded bg-zinc-800 border border-zinc-700"></div>
                                    <div className="w-3 h-4 rounded bg-zinc-900 border border-zinc-800 opacity-50"></div>
                                </div>
                            </div>
                        </div>

                        {/* PREVIEW CONTAINER - Scaled to fit but scrollable */}
                        <div className="flex-1 overflow-y-auto bg-black border border-zinc-800 rounded-b-xl custom-scrollbar relative">
                            {/* THE ACTUAL PDP CONTENT REPLICA */}
                            <div className="min-h-full font-sans text-white p-6 lg:p-10">

                                {/* Breadcrumb Mock */}
                                <div className="flex items-center gap-2 text-[10px] text-zinc-600 mb-6">
                                    <span>Home</span> <ChevronRight className="w-3 h-3" />
                                    <span>Products</span> <ChevronRight className="w-3 h-3" />
                                    <span className="text-zinc-400">{formData.category || 'Category'}</span>
                                </div>

                                <div className="grid grid-cols-12 gap-8">
                                    {/* Left: Images */}
                                    <div className="col-span-12 lg:col-span-5 space-y-4">
                                        <div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative group">
                                            {/* Placeholder Image */}
                                            <div className="w-full h-full flex items-center justify-center text-zinc-700">
                                                <ImageIcon className="w-16 h-16 opacity-20" />
                                                <span className="absolute bottom-4 left-4 bg-black/60 px-2 py-1 rounded text-xs backdrop-blur font-medium">Cover Image</span>
                                            </div>
                                            <div className="absolute top-3 right-3 flex flex-col gap-2">
                                                <div className="p-2 bg-black/40 rounded-full"><Heart className="w-4 h-4" /></div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 gap-2">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="aspect-square bg-zinc-900 rounded-lg border border-zinc-800"></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Center: Info */}
                                    <div className="col-span-12 lg:col-span-7">
                                        <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
                                            {formData.title || 'Product Title Appears Here'}
                                        </h1>

                                        <div className="flex items-center gap-4 mb-6 text-sm">
                                            <span className="text-orange-400 flex items-center gap-1 font-bold">
                                                <Star className="w-4 h-4 fill-current" /> 4.8
                                            </span>
                                            <span className="text-zinc-600">|</span>
                                            <span className="text-zinc-400">0 Reviews</span>
                                            <span className="text-zinc-600">|</span>
                                            <span className="text-zinc-400">0 Sold</span>
                                        </div>

                                        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-6">
                                            <div className="flex items-baseline gap-2 mb-2">
                                                <span className="text-3xl font-bold text-white">₹{(formData.price || '0').toLocaleString()}</span>
                                                <span className="text-zinc-500 text-sm">/ {formData.minOrder?.split(' ')[1] || 'unit'}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-green-400 mb-4">
                                                <CircleCheck className="w-3 h-3" /> {(formData.stock > 0) ? 'In Stock & Ready to Ship' : 'Out of Stock'}
                                            </div>

                                            <div className="flex gap-3">
                                                <button className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-full text-sm shadow-lg shadow-blue-600/20">
                                                    Send Inquiry
                                                </button>
                                                <button className="flex-1 py-3 bg-zinc-800 border border-zinc-700 text-white font-bold rounded-full text-sm">
                                                    Start Order
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 mb-8">
                                            <div className="flex items-start gap-2 p-3 bg-zinc-900/30 rounded border border-zinc-800/50">
                                                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                                                <div>
                                                    <h4 className="text-xs font-bold text-zinc-300">Trade Assurance</h4>
                                                    <p className="text-[10px] text-zinc-500">Protection from payment to delivery</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2 p-3 bg-zinc-900/30 rounded border border-zinc-800/50">
                                                <Truck className="w-4 h-4 text-blue-500 shrink-0" />
                                                <div>
                                                    <h4 className="text-xs font-bold text-zinc-300">Fast Shipping</h4>
                                                    <p className="text-[10px] text-zinc-500">Dispatched within 48 hours</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Specs Grid */}
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Key Specifications</h4>
                                        <div className="grid grid-cols-2 gap-2 mb-8">
                                            {Object.entries(formData.specs).map(([key, val], idx) => (
                                                <div key={idx} className="flex flex-col p-3 bg-zinc-900/80 border border-zinc-800 rounded-lg">
                                                    <span className="text-[10px] font-bold text-zinc-500 uppercase">{key}</span>
                                                    <span className="text-sm font-semibold text-white truncate">{val}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6 border-t border-zinc-800">
                                            <h3 className="font-bold text-white mb-3">Product Description</h3>
                                            <div className="prose prose-invert prose-sm text-zinc-400 leading-relaxed text-sm">
                                                {formData.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ManufacturerLayout>
    );
};

export default ProductEditorPage;
