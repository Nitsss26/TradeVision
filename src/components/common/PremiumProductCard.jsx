import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, MessageSquare, Play } from 'lucide-react';

const PremiumProductCard = ({ product }) => {
    // Safely handle missing data
    const images = product.media?.images || [];
    const mainImage = images[0]?.url || 'https://via.placeholder.com/400';
    const isVerified = product.manufacturer?.isVerified;
    const rating = product.metrics?.rating || 4.5;
    const price = product.pricing?.basePrice || 0;
    const moq = product.pricing?.moq || 1;
    const unit = product.pricing?.minOrderUnit || 'piece';

    return (
        <div className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 h-full flex flex-col">
            {/* Image Area */}
            <Link to={`/products/${product._id}`} className="block relative aspect-[4/3] overflow-hidden bg-zinc-800">
                <img
                    src={mainImage}
                    alt={product.basicInfo?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                    {isVerified && (
                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur px-2 py-1 rounded shadow-sm border border-blue-500/30">
                            <ShieldCheck className="w-3 h-3 text-blue-400" />
                            <span className="text-[10px] font-bold text-blue-100 uppercase tracking-wide">Verified Pro</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur px-2 py-1 rounded shadow-sm border border-zinc-700">
                        <span className="text-[10px] font-bold text-zinc-300">13 Yrs</span>
                    </div>
                </div>

                {/* Video Indicator */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-black/50 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-white/10">
                    <Play className="w-3 h-3 text-white fill-current" />
                </div>

                {/* Hover Overlay with Action Buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 z-20 p-4">
                    <button className="bg-white text-black font-bold px-6 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-50 active:scale-95 w-full max-w-[140px]">
                        View Details
                    </button>
                    <button className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:bg-blue-700 active:scale-95 flex items-center justify-center gap-2 w-full max-w-[140px]">
                        <MessageSquare className="w-4 h-4" /> Chat Now
                    </button>
                </div>
            </Link>

            {/* Content Area */}
            <div className="p-4 flex-1 flex flex-col bg-zinc-900 border-t border-zinc-800">
                <Link to={`/products/${product._id}`} className="block">
                    <h3 className="text-white font-medium text-sm leading-snug line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors h-10">
                        {product.basicInfo?.name}
                    </h3>
                </Link>

                <div className="mt-auto">
                    {/* Price & MOQ */}
                    <div className="mb-3">
                        <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-white">₹{price.toLocaleString()}</span>
                            {product.pricing?.priceModel === 'tiered' && (
                                <span className="text-zinc-500 text-xs font-normal">/ {unit}</span>
                            )}
                        </div>
                        <div className="text-xs text-zinc-500 font-medium">
                            {moq} {unit} (Min. Order)
                        </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                        <div className="flex items-center gap-2">
                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 rounded-sm" />
                            <span className="text-xs text-zinc-500 truncate max-w-[80px]">{product.manufacturerName || 'Supplier'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-orange-400 fill-current" />
                            <span className="text-xs font-bold text-zinc-300">{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumProductCard;
