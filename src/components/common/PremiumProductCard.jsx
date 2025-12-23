import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, MessageSquare, Play, ArrowRight } from 'lucide-react';

const PremiumProductCard = ({ product }) => {
    // Safely handle missing data
    const images = product.media?.images || [];
    const mainImage = images[0]?.url || 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=400';
    const isVerified = product.manufacturer?.isVerified;
    const rating = product.metrics?.rating || 4.5;
    const price = product.pricing?.basePrice || 0;
    const moq = product.pricing?.moq || 1;
    const unit = product.pricing?.minOrderUnit || 'piece';
    const yearsInBusiness = product.manufacturer?.yearsInBusiness || 10;

    return (
        <div className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col">
            {/* Image Area */}
            <Link to={`/products/${product._id}`} className="block relative aspect-[4/3] overflow-hidden bg-zinc-800">
                <img
                    src={mainImage}
                    alt={product.basicInfo?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Premium Badges - Compact and Stylish */}
                <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
                    {isVerified && (
                        <div className="flex items-center gap-1 bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-lg">
                            <ShieldCheck className="w-2.5 h-2.5 text-white" />
                            <span className="text-[9px] font-bold text-white uppercase tracking-wider">Verified</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500/90 to-amber-500/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-lg">
                        <span className="text-[9px] font-bold text-white">{yearsInBusiness}+ Yrs</span>
                    </div>
                </div>

                {/* Video Indicator */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Play className="w-2.5 h-2.5 text-white fill-current" />
                </div>

                {/* Hover Overlay with Compact Action Buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 z-20 p-3">
                    <button className="bg-white text-zinc-900 font-semibold text-xs px-4 py-1.5 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-50 active:scale-95 flex items-center gap-1.5">
                        View Details <ArrowRight className="w-3 h-3" />
                    </button>
                    <button className="bg-blue-600 text-white font-semibold text-xs px-4 py-1.5 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-blue-700 active:scale-95 flex items-center gap-1.5">
                        <MessageSquare className="w-3 h-3" /> Chat Now
                    </button>
                </div>
            </Link>

            {/* Content Area */}
            <div className="p-3 flex-1 flex flex-col bg-zinc-900">
                <Link to={`/products/${product._id}`} className="block">
                    <h3 className="text-white font-medium text-sm leading-tight line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors min-h-[36px]">
                        {product.basicInfo?.name}
                    </h3>
                </Link>

                <div className="mt-auto">
                    {/* Price & MOQ */}
                    <div className="mb-2">
                        <div className="flex items-baseline gap-1">
                            <span className="text-base font-bold text-white">₹{price.toLocaleString()}</span>
                            {product.pricing?.priceModel === 'tiered' && (
                                <span className="text-zinc-500 text-[10px] font-normal">/ {unit}</span>
                            )}
                        </div>
                        <div className="text-[10px] text-zinc-500 font-medium">
                            {moq} {unit} (Min. Order)
                        </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
                        <div className="flex items-center gap-1.5 min-w-0 flex-1">
                            <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-3.5 h-auto rounded-sm shrink-0" />
                            <span className="text-[10px] text-zinc-400 truncate" title={product.manufacturerName || 'Supplier'}>
                                {product.manufacturerName || 'Supplier'}
                            </span>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                            <Star className="w-3 h-3 text-orange-400 fill-current" />
                            <span className="text-[10px] font-bold text-zinc-300">{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumProductCard;

