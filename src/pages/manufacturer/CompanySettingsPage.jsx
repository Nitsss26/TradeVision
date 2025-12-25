import React, { useState } from 'react';
import {
    Save, Building2, Globe, MapPin, Mail, Phone,
    Upload, Award, Smartphone, ShieldCheck, Factory, Package, Image as ImageIcon, Plus, Trash2, Eye, X
} from 'lucide-react';
import ManufacturerLayout from '../../layouts/ManufacturerLayout';
import ManufacturerProfileUI from '../../components/manufacturer/ManufacturerProfileUI';

const CompanySettingsPage = () => {
    // --- State Management ---
    const [editorTab, setEditorTab] = useState('general');
    const [previewTab, setPreviewTab] = useState('products');

    // Mock initial data (simulating DB fetch)
    const [manufacturerData, setManufacturerData] = useState({
        companyName: "Tech Solutions Ltd.",
        description: "Leading manufacturer of high-precision industrial components with over 15 years of experience serving global clients. We specialize in high-quality products with competitive pricing and reliable delivery.",
        location: { city: "Mumbai", state: "Maharashtra" },
        businessDetails: { yearEstablished: 2008, employeeCount: "100-200" },
        metrics: { rating: 4.8, reviews: 156 },
        isVerified: true,
        capabilities: ['OEM Manufacturing', 'ODM Design', 'Custom Packaging', 'Quality Testing'],
    });

    const [products, setProducts] = useState([
        { _id: '1', basicInfo: { name: 'Industrial Hydraulic Pump' }, pricing: { basePrice: 15999 }, media: { images: [{ url: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?w=400' }] } },
        { _id: '2', basicInfo: { name: 'CNC Precision Gear' }, pricing: { basePrice: 4500 }, media: { images: [{ url: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?w=400' }] } },
        { _id: '3', basicInfo: { name: 'Steel Ball Bearings (Bulk)' }, pricing: { basePrice: 899 }, media: { images: [{ url: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=400' }] } },
    ]);

    const [certifications, setCertifications] = useState([
        { name: 'ISO 9001:2015', type: 'Quality Management', color: 'blue' },
        { name: 'CE Certified', type: 'European Conformity', color: 'indigo' }
    ]);

    const [galleryImages, setGalleryImages] = useState([
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=400',
    ]);

    // Handle inputs
    const handleInputChange = (e, field, nestedField = null) => {
        const value = e.target.value;
        if (nestedField) {
            setManufacturerData(prev => ({
                ...prev,
                [field]: { ...prev[field], [nestedField]: value }
            }));
        } else {
            setManufacturerData(prev => ({ ...prev, [field]: value }));
        }
    };

    const handleAddCapability = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            setManufacturerData(prev => ({
                ...prev,
                capabilities: [...prev.capabilities, e.target.value.trim()]
            }));
            e.target.value = '';
        }
    };

    const handleRemoveCapability = (index) => {
        setManufacturerData(prev => ({
            ...prev,
            capabilities: prev.capabilities.filter((_, i) => i !== index)
        }));
    };

    const handleAddProduct = () => {
        const newProduct = {
            _id: Date.now().toString(),
            basicInfo: { name: 'New Untitled Product' },
            pricing: { basePrice: 0 },
            media: { images: [{ url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=400' }] } // Placeholder
        };
        setProducts([newProduct, ...products]);
        setPreviewTab('products'); // Switch preview to products to show the change
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(p => p._id !== id));
    };

    const handleAddCertification = () => {
        setCertifications([...certifications, { name: 'New Certification', type: 'Standard', color: 'gray' }]);
    };

    const handleAddGalleryImage = () => {
        setGalleryImages([...galleryImages, 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=400']); // Mock image
        setPreviewTab('gallery');
    };

    const handleRemoveGalleryImage = (index) => {
        const newImages = [...galleryImages];
        newImages.splice(index, 1);
        setGalleryImages(newImages);
    };

    return (
        <ManufacturerLayout>
            <div className="h-[calc(100vh-100px)] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 flex-shrink-0">
                    <div>
                        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Factory className="w-6 h-6 text-blue-500" /> Store Editor
                        </h1>
                        <p className="text-zinc-400 text-sm mt-1">Manage your store profile and catalog with live preview.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors border border-zinc-700">
                            <Eye className="w-4 h-4" /> View Live Store
                        </button>
                        <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20">
                            <Save className="w-4 h-4" /> Save Changes
                        </button>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-0">
                    {/* LEFT COLUMN: EDITOR */}
                    <div className="flex flex-col min-h-0 bg-black/40 border border-zinc-800 rounded-2xl overflow-hidden">
                        {/* Editor Tabs */}
                        <div className="flex border-b border-zinc-800 bg-zinc-900/50">
                            {[
                                { id: 'general', icon: Building2, label: 'General Info' },
                                { id: 'products', icon: Package, label: 'Products' },
                                { id: 'certs', icon: ShieldCheck, label: 'Certifications' },
                                { id: 'media', icon: ImageIcon, label: 'Media & Gallery' },
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setEditorTab(tab.id)}
                                    className={`flex-1 py-4 px-4 flex items-center justify-center gap-2 text-sm font-medium transition-colors border-b-2 ${editorTab === tab.id
                                        ? 'border-blue-500 text-blue-400 bg-blue-500/5'
                                        : 'border-transparent text-zinc-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Editor Content Area */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar space-y-6">

                            {/* GENERAL TAB */}
                            {editorTab === 'general' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-zinc-300">Company Name</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                <input
                                                    type="text"
                                                    value={manufacturerData.companyName}
                                                    onChange={(e) => handleInputChange(e, 'companyName')}
                                                    className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-zinc-300">Year Established</label>
                                            <input
                                                type="number"
                                                value={manufacturerData.businessDetails.yearEstablished}
                                                onChange={(e) => handleInputChange(e, 'businessDetails', 'yearEstablished')}
                                                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-zinc-300">Company Description</label>
                                        <textarea
                                            rows="4"
                                            value={manufacturerData.description}
                                            onChange={(e) => handleInputChange(e, 'description')}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                                            placeholder="Tell buyers about your company..."
                                        ></textarea>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-zinc-300">Capabilities (Comma separated)</label>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {manufacturerData.capabilities.map((cap, i) => (
                                                <span key={i} className="px-2 py-1 bg-zinc-800 text-xs rounded border border-zinc-700 text-zinc-300 flex items-center gap-1">
                                                    {cap} <button onClick={() => handleRemoveCapability(i)} className="hover:text-red-400">×</button>
                                                </span>
                                            ))}
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Add capability (Press Enter)..."
                                            onKeyDown={handleAddCapability}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="border-t border-zinc-800 pt-6">
                                        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                                            <Smartphone className="w-4 h-4 text-purple-500" /> Contact Info
                                        </h3>
                                        <div className="grid gap-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                    <input type="email" defaultValue="contact@techsolutions.com" className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none" />
                                                </div>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                    <input type="tel" defaultValue="+91 98765 43210" className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none" />
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                <input type="text" value={`${manufacturerData.location.city}, ${manufacturerData.location.state}`} className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* PRODUCTS TAB */}
                            {editorTab === 'products' && (
                                <div className="space-y-4 animate-fadeIn">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-sm font-bold text-zinc-300">Product Catalog ({products.length})</h3>
                                        <button
                                            onClick={handleAddProduct}
                                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded flex items-center gap-2 transition-colors"
                                        >
                                            <Plus className="w-3 h-3" /> Add Product
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {products.map((product, i) => (
                                            <div key={product._id} className="flex items-center gap-4 p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg group hover:border-blue-500/30 transition-colors">
                                                <img
                                                    src={product.media?.images?.[0]?.url}
                                                    className="w-12 h-12 rounded object-cover bg-zinc-800"
                                                    alt={product.basicInfo.name}
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <input
                                                        type="text"
                                                        value={product.basicInfo.name}
                                                        onChange={(e) => {
                                                            const newProducts = [...products];
                                                            newProducts[i].basicInfo.name = e.target.value;
                                                            setProducts(newProducts);
                                                        }}
                                                        className="bg-transparent border-none p-0 text-white text-sm font-medium focus:ring-0 w-full mb-1"
                                                    />
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs text-zinc-500">Price: ₹</span>
                                                        <input
                                                            type="number"
                                                            value={product.pricing.basePrice}
                                                            onChange={(e) => {
                                                                const newProducts = [...products];
                                                                newProducts[i].pricing.basePrice = parseInt(e.target.value) || 0;
                                                                setProducts(newProducts);
                                                            }}
                                                            className="bg-transparent border-none p-0 text-zinc-400 text-xs w-20 focus:ring-0"
                                                        />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteProduct(product._id)}
                                                    className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-500/10 rounded transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CERTIFICATIONS TAB */}
                            {editorTab === 'certs' && (
                                <div className="space-y-4 animate-fadeIn">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-sm font-bold text-zinc-300">Certifications</h3>
                                        <button
                                            onClick={handleAddCertification}
                                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded flex items-center gap-2 transition-colors"
                                        >
                                            <Plus className="w-3 h-3" /> Add New
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        {certifications.map((cert, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                                                <Award className="w-5 h-5 text-blue-500" />
                                                <div className="flex-1">
                                                    <input
                                                        value={cert.name}
                                                        onChange={(e) => {
                                                            const newCerts = [...certifications];
                                                            newCerts[i].name = e.target.value;
                                                            setCertifications(newCerts);
                                                        }}
                                                        className="bg-transparent text-white text-sm font-medium w-full focus:outline-none"
                                                    />
                                                    <input
                                                        value={cert.type}
                                                        onChange={(e) => {
                                                            const newCerts = [...certifications];
                                                            newCerts[i].type = e.target.value;
                                                            setCertifications(newCerts);
                                                        }}
                                                        className="bg-transparent text-zinc-500 text-xs w-full focus:outline-none"
                                                    />
                                                </div>
                                                <button className="text-zinc-500 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* MEDIA TAB */}
                            {editorTab === 'media' && (
                                <div className="space-y-6 animate-fadeIn">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-zinc-300">Company Logo</label>
                                        <div className="border-2 border-dashed border-zinc-700 hover:border-blue-500 rounded-xl p-6 flex flex-col items-center justify-center bg-zinc-950/50 transition-colors cursor-pointer group h-32">
                                            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-500/20 transition-colors">
                                                <Upload className="w-5 h-5 text-zinc-500 group-hover:text-blue-500" />
                                            </div>
                                            <span className="text-xs text-zinc-400 group-hover:text-blue-400">Click to upload new logo</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-zinc-300">Highlight Gallery</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {galleryImages.map((img, i) => (
                                                <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 group">
                                                    <img src={img} className="w-full h-full object-cover" alt="Gallery" />
                                                    <button
                                                        onClick={() => handleRemoveGalleryImage(i)}
                                                        className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                onClick={handleAddGalleryImage}
                                                className="aspect-video rounded-lg border-2 border-dashed border-zinc-700 flex flex-col items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-500 transition-colors gap-2 hover:bg-zinc-900"
                                            >
                                                <Plus className="w-5 h-5" />
                                                <span className="text-xs font-medium">Add Photo</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* RIGHT COLUMN: PREVIEW */}
                    <div className="hidden xl:flex flex-col flex-1 h-full min-h-0 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden relative shadow-2xl">
                        {/* <div className="absolute top-4 right-4 z-50 flex items-center gap-2 pointer-events-none">
                            <span className="px-2 py-1 bg-red-500/10 border border-red-500/50 text-red-500 text-[10px] font-bold uppercase tracking-wider rounded animate-pulse">
                                ● Live Preview
                            </span>
                        </div> */}

                        {/* Virtual Viewport Container */}
                        <div className="flex-1 overflow-hidden relative">
                            {/* 
                                Scaling Logic: 
                                We want to simulate a desktop view (~1200px+). 
                                The container is likely ~600-800px wide. 
                                We set inner width to 200% and scale 0.5. 
                                This creates a virtual width of 2x the container, providing ample room for the desktop layout.
                             */}
                            <div className="absolute inset-0 w-[200%] h-[200%] origin-top-left transform scale-50 overflow-y-auto custom-scrollbar bg-black">
                                <ManufacturerProfileUI
                                    manufacturer={manufacturerData}
                                    products={products}
                                    activeTab={previewTab}
                                    setActiveTab={setPreviewTab}
                                    galleryImages={galleryImages}
                                    isPreview={true}
                                />
                            </div>
                        </div>

                        {/* Preview Controls Overlay */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur border border-zinc-700 rounded-full px-4 py-2 flex gap-4 text-xs text-zinc-400 shadow-xl z-50">
                            <span className="text-white font-medium">Desktop View</span>
                            <span className="w-px h-4 bg-zinc-700"></span>
                            <span className="hover:text-white cursor-pointer transition-colors">Mobile View</span>
                        </div>
                    </div>
                </div>
            </div>
        </ManufacturerLayout>
    );
};

export default CompanySettingsPage;
