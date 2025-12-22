import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Star, ShieldCheck, MapPin, MessageSquare, ShoppingCart,
    Truck, Clock, ChevronRight, CheckCircle, Package, Heart, Share2,
    Calendar, CreditCard, Award, Factory, Flag, Play, ThumbsUp, User
} from 'lucide-react';
import PremiumProductCard from '../components/common/PremiumProductCard';
import MainLayout from '../layouts/MainLayout';
import { productService } from '../services/mock/productService';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(100);
    const [showVideo, setShowVideo] = useState(false); // Video State


    useEffect(() => {
        const loadProduct = async () => {
            const data = await productService.getProductById(id);
            // Handle case where service returns object with success/data keys or just data
            setProduct(data.data || data);
        };
        loadProduct();
    }, [id]);

    if (!product) return (
        <MainLayout>
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            </div>
        </MainLayout>
    );

    // Mock Images + Video
    const images = product.media?.images || [];
    // Ensure we have enough mock images and a video placeholder if needed
    const displayImages = [...images, { url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80", isVideo: true }];


    const totalPrice = (product.pricing?.basePrice || 0) * quantity;

    return (
        <MainLayout>
            <div className="min-h-screen bg-black text-white font-sans pb-20">
                {/* Breadcrumb */}
                <div className="bg-zinc-950 border-b border-zinc-900 py-3">
                    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 flex items-center gap-2 text-sm text-zinc-500">
                        <Link to="/" className="hover:text-blue-500">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/products" className="hover:text-blue-500">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-zinc-300 truncate max-w-xs">{product.basicInfo?.name}</span>
                    </div>
                </div>

                <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* LEFT: Image Gallery (4 cols) */}
                        <div className="lg:col-span-4 space-y-4">
                            <div className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative group">
                                {displayImages[activeImage]?.isVideo && showVideo ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/Co1-AASp7W0?autoplay=1"
                                        title="Product Video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                ) : (
                                    <>
                                        <img
                                            src={displayImages[activeImage]?.url}
                                            alt="Product"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {displayImages[activeImage]?.isVideo && (
                                            <button
                                                onClick={() => setShowVideo(true)}
                                                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors z-10"
                                            >
                                                <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                    <Play className="w-6 h-6 text-black fill-current ml-1" />
                                                </div>
                                            </button>
                                        )}
                                    </>
                                )}

                                <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                                    <button className="p-2 bg-black/50 backdrop-blur rounded-full hover:bg-blue-600 transition-colors text-white">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 bg-black/50 backdrop-blur rounded-full hover:bg-blue-600 transition-colors text-white">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {displayImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setActiveImage(idx); setShowVideo(false); }}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all relative ${activeImage === idx ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-zinc-800 hover:border-zinc-600'}`}
                                    >
                                        <img src={img.url} alt="" className="w-full h-full object-cover" />
                                        {img.isVideo && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                                <Play className="w-4 h-4 text-white fill-current" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CENTER: Product Info (5 cols) */}
                        <div className="lg:col-span-5">
                            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4 leading-tight">
                                {product.basicInfo?.name}
                            </h1>

                            <div className="flex items-center gap-4 mb-6 text-sm">
                                <span className="text-orange-400 flex items-center gap-1 font-bold">
                                    <Star className="w-4 h-4 fill-current" /> {product.metrics?.rating || 4.5}
                                </span>
                                <span className="text-zinc-500">|</span>
                                <span className="text-zinc-400">{product.metrics?.reviews || 24} Reviews</span>
                                <span className="text-zinc-500">|</span>
                                <span className="text-zinc-400">100+ Orders</span>
                            </div>

                            {/* Price Card */}
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-3xl font-bold text-white">₹{product.pricing?.basePrice?.toLocaleString()}</span>
                                    <span className="text-zinc-400">/ {product.pricing?.minOrderUnit || 'piece'}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-green-400 mb-6">
                                    <CheckCircle className="w-4 h-4" /> In Stock & Ready to Ship
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm text-zinc-400 mb-2 block">Quantity</label>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center bg-zinc-950 border border-zinc-700 rounded-lg">
                                                <button onClick={() => setQuantity(Math.max(1, quantity - 10))} className="px-3 py-2 text-zinc-400 hover:text-white">-</button>
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                                                    className="w-20 bg-transparent text-center text-white outline-none font-medium"
                                                />
                                                <button onClick={() => setQuantity(quantity + 10)} className="px-3 py-2 text-zinc-400 hover:text-white">+</button>
                                            </div>
                                            <span className="text-zinc-500 text-sm">Total: <span className="text-white font-bold">₹{totalPrice.toLocaleString()}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start gap-3 p-3 bg-zinc-900/30 rounded-lg">
                                    <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-200">Trade Assurance</h4>
                                        <p className="text-xs text-zinc-500 mt-0.5">Protects your order from payment to delivery</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-zinc-900/30 rounded-lg">
                                    <Truck className="w-5 h-5 text-blue-500 shrink-0" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-200">Fast Shipping</h4>
                                        <p className="text-xs text-zinc-500 mt-0.5">Dispatched within 48 hours of payment</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-600/20 active:scale-95 transition-all">
                                    Send Inquiry
                                </button>
                                <button className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-bold rounded-full transition-all">
                                    Start Order
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: Supplier Card (3 cols) */}
                        {/* RIGHT: Supplier Card (3 cols) - Sticky */}
                        <div className="lg:col-span-3">
                            <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl sticky top-24 border border-zinc-800 ring-1 ring-white/5 bg-gradient-to-b from-zinc-800/50 to-zinc-900">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-zinc-700 overflow-hidden shadow-lg shadow-black/50">
                                        <img src="https://ui-avatars.com/api/?name=Tex+Fab&background=0D8ABC&color=fff&size=128&bold=true" alt="Company Logo" className="w-full h-full object-cover rounded" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg text-white truncate tracking-tight" title={product.manufacturerName}>
                                            {product.manufacturerName || "TexFab India Pvt Ltd"}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                                            <span className="flex items-center gap-1"><Flag country="IN" className="w-3 h-3 rounded-[2px]" /> India</span>
                                            <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                                            <span>8 Yrs Exp.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-6">
                                    <span className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-blue-800/40 text-blue-300 text-xs font-bold rounded border border-blue-500/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Verified Mfr
                                    </span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 text-yellow-500 text-xs font-bold rounded border border-yellow-500/30 flex items-center gap-1.5 shadow-[0_0_10px_rgba(234,179,8,0.1)]">
                                        <Award className="w-3.5 h-3.5" /> Gold Supplier
                                    </span>
                                </div>

                                <div className="space-y-4 border-t border-dashed border-zinc-700/50 pt-5 mb-6">
                                    <div className="flex justify-between items-center text-sm group">
                                        <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">Response Rate</span>
                                        <span className="font-bold text-emerald-400">98.5%</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm group">
                                        <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">On-time Delivery</span>
                                        <span className="font-bold text-zinc-200">95%</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm group">
                                        <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">Transactions</span>
                                        <span className="font-bold text-zinc-200">5,000+</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-900/20 active:translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                        <MessageSquare className="w-4 h-4" /> Chat Now
                                    </button>
                                    <Link to={`/manufacturers/${product.manufacturerId}`} className="block w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold rounded-lg border border-zinc-600 hover:border-zinc-500 active:translate-y-0.5 transition-all text-center">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stacked Content Sections (Dark Cards, Full Width) */}
                    <div className="mt-12 space-y-8">

                        {/* 1. Product Details & Specs */}
                        <div className="bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-800 ring-1 ring-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-0"></div>

                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
                                <span className="p-2 bg-blue-500/10 rounded-lg"><Package className="w-5 h-5 text-blue-500" /></span>
                                Product Details
                            </h3>
                            <div className="prose prose-invert max-w-none mb-10 relative z-10">
                                <p className="text-zinc-300 leading-relaxed text-[15px]">
                                    {product.basicInfo?.fullDescription || "This premium product is manufactured to the highest standards, ensuring durability and reliability for all industrial applications. High-count organic cotton poplin fabric suitable for shirting, dresses, and home textiles."}
                                </p>
                            </div>

                            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-5 border-l-2 border-blue-500 pl-3">Key Specifications</h4>
                            {/* Changed to grid-cols-4 for single row layout */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                                {Object.entries(product.specs || { "Material": "Premium Grade", "Warranty": "2 Years", "Certifications": "ISO 9001", "Origin": "India" }).map(([key, val], idx) => (
                                    <div key={idx} className="flex flex-col p-4 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl border border-zinc-700/50 hover:border-blue-500/30 transition-colors group/item">
                                        <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider mb-1 group-hover/item:text-blue-400 transition-colors">{key}</span>
                                        <span className="text-white font-bold text-sm truncate" title={val}>{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Company Profile */}
                        <div className="bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-800 ring-1 ring-white/5 bg-gradient-to-b from-zinc-900 to-black/80">
                            <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <span className="p-2 bg-purple-500/10 rounded-lg"><Factory className="w-5 h-5 text-purple-500" /></span>
                                    Company Profile
                                </h3>
                                <Link to={`/manufacturers/${product.manufacturerId}`} className="text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors flex items-center gap-1 group">
                                    Visit Store <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                                <div>
                                    <h4 className="font-bold text-2xl text-white mb-3">{product.manufacturerName || "TexFab India Pvt Ltd"}</h4>
                                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                                        Leading manufacturer of high-quality textiles and garments with over 15 years of experience in export markets.
                                        We specialize in organic cotton and sustainable fabrics.
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-zinc-500">
                                        <span className="px-3 py-1.5 bg-zinc-800/80 rounded-full border border-zinc-700">Established 2010</span>
                                        <span className="px-3 py-1.5 bg-zinc-800/80 rounded-full border border-zinc-700">500+ Employees</span>
                                        <span className="px-3 py-1.5 bg-zinc-800/80 rounded-full border border-zinc-700">ISO 9001:2015</span>
                                    </div>
                                </div>
                                <div className="bg-zinc-800/30 p-6 rounded-2xl border border-dashed border-zinc-700 text-sm space-y-4">
                                    <div className="flex justify-between items-center group">
                                        <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">Main Products</span>
                                        <span className="font-bold text-zinc-200">Cotton, Silk, Denim</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">Total Revenue</span>
                                        <span className="font-bold text-zinc-200">₹ 40 Cr - 80 Cr</span>
                                    </div>
                                    <div className="flex justify-between items-center group">
                                        <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">Top 3 Markets</span>
                                        <span className="font-bold text-zinc-200 text-right">North America, Europe, Asia</span>
                                    </div>
                                </div>
                            </div>

                            <h4 className="font-bold text-zinc-300 mb-6 text-sm uppercase tracking-widest pl-2">More from this Manufacturer</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { id: 1, title: "Linen Blend", price: 350 },
                                    { id: 2, title: "Velvet Touch", price: 890 },
                                    { id: 3, title: "Pure Silk", price: 1200 },
                                    { id: 4, title: "Denim Raw", price: 550 }
                                ].map((item, index) => (
                                    <div key={index} className="group cursor-pointer bg-zinc-800/30 p-2 rounded-xl hover:bg-zinc-800/80 transition-all border border-transparent hover:border-zinc-700">
                                        <div className="aspect-square rounded-lg bg-zinc-800 overflow-hidden mb-3 relative border border-zinc-700">
                                            <img
                                                src={`https://source.unsplash.com/random/300x300?fabric,${item.title.split(' ')[0]}&sig=${index}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                alt={item.title}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://placehold.co/300x300/27272a/FFF?text=Textile";
                                                }}
                                            />
                                        </div>
                                        <p className="text-sm text-white font-semibold truncate group-hover:text-blue-400 transition-colors px-1">{item.title}</p>
                                        <p className="text-xs text-zinc-500 px-1 mt-0.5">₹{item.price} / meter</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Ratings & Reviews */}
                        <div className="bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-800 ring-1 ring-white/5 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800/30">
                            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                                <span className="p-2 bg-orange-500/10 rounded-lg"><MessageSquare className="w-5 h-5 text-orange-500" /></span>
                                Ratings & Reviews
                            </h3>

                            <div className="flex flex-col md:flex-row gap-8 items-center border-b border-zinc-800 pb-8 mb-8">
                                <div className="text-center min-w-[150px]">
                                    <div className="text-5xl font-bold text-white">{product.metrics?.rating || 4.5}</div>
                                    <div className="flex justify-center gap-1 my-2">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-orange-500 fill-current' : 'text-zinc-700 fill-current'}`} />
                                        ))}
                                    </div>
                                    <div className="text-sm text-zinc-500">{product.metrics?.reviews || 24} Verified Reviews</div>
                                </div>

                                <div className="flex-1 w-full space-y-2">
                                    {[5, 4, 3, 2, 1].map((rating, i) => (
                                        <div key={rating} className="flex items-center gap-3 text-xs">
                                            <span className="w-3 font-bold text-zinc-500">{rating}</span>
                                            <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-orange-500 rounded-full" style={{ width: `${[60, 25, 10, 3, 2][i]}%` }}></div>
                                            </div>
                                            <span className="w-8 text-right text-zinc-500">{[60, 25, 10, 3, 2][i]}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { user: "Rahul Sharma", date: "2 days ago", rating: 5, text: "Excellent quality fabric, exactly as described. Shipping was faster than expected.", country: "India" },
                                    { user: "Sarah Jenkins", date: "1 week ago", rating: 4, text: "Good material, slight color difference but acceptable. Will order again.", country: "USA" }
                                ].map((review, i) => (
                                    <div key={i} className="border-b border-zinc-800 pb-6 last:border-0 last:pb-0">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-zinc-800 text-blue-400 flex items-center justify-center font-bold text-xs ring-1 ring-zinc-700">{review.user[0]}</div>
                                                <div>
                                                    <h5 className="font-bold text-sm text-white">{review.user}</h5>
                                                    <div className="flex items-center gap-1">
                                                        <div className="flex gap-0.5">
                                                            {[...Array(review.rating)].map((_, s) => (
                                                                <Star key={s} className="w-3 h-3 text-orange-500 fill-current" />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-zinc-500">• {review.country}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-xs text-zinc-500">{review.date}</span>
                                        </div>
                                        <p className="text-sm text-zinc-400 leading-relaxed">{review.text}</p>
                                        <div className="mt-3 flex gap-4">
                                            <button className="flex items-center gap-1 text-xs text-zinc-500 hover:text-white transition-colors">
                                                <ThumbsUp className="w-3 h-3" /> Helpful
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-6 py-3 border border-zinc-700 text-zinc-400 font-bold rounded-lg hover:bg-zinc-800 hover:text-white transition-colors text-sm">
                                View All Reviews
                            </button>
                        </div>
                    </div>

                    {/* 4. Related Products (Outside Cards, on Dark Background) */}
                    <div className="mt-16 pt-8 border-t border-zinc-800">
                        <h2 className="text-2xl font-bold text-white mb-8">Related Products</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {[...Array(5)].map((_, idx) => (
                                <div key={idx} className="h-full">
                                    <PremiumProductCard product={{ ...product, _id: product._id + '_r' + idx, basicInfo: { ...product.basicInfo, name: `Related Industrial Item ${idx + 1}` } }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ProductDetailPage;
