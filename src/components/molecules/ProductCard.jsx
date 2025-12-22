import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, ArrowRight } from 'lucide-react';
import Card from '../atoms/Card';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';

const ProductCard = ({ product }) => {
    const {
        _id,
        basicInfo,
        pricing,
        media,
        manufacturerName,
        metrics,
        manufacturer
    } = product;

    return (
        <Card className="h-full flex flex-col group overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-primary-500)]/30 transition-all duration-300">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-tertiary)]">
                <img
                    src={media.images[0]?.url}
                    alt={basicInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <Button variant="ghost" size="small" className="text-white border-white hover:bg-white hover:text-black">
                        View Details
                    </Button>
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {manufacturer?.verification?.status === 'approved' && (
                        <Badge variant="verified" className="shadow-lg backdrop-blur-sm">
                            Verified Factory
                        </Badge>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-grow flex flex-col">
                {/* Category & Rating */}
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium">
                        {basicInfo.category.level2}
                    </span>
                    <div className="flex items-center text-[var(--color-warning)] text-xs font-bold">
                        <Star className="w-3 h-3 fill-current mr-1" />
                        {metrics.rating}
                    </div>
                </div>

                {/* Title */}
                <Link to={`/products/${_id}`} className="block mb-2 group-hover:text-[var(--color-primary-400)] transition-colors">
                    <h3 className="text-base font-semibold line-clamp-2 leading-tight min-h-[2.5rem]">
                        {basicInfo.name}
                    </h3>
                </Link>

                {/* Manufacturer */}
                <div className="flex items-center text-xs text-[var(--color-text-secondary)] mb-3">
                    <ShieldCheck className="w-3 h-3 mr-1 text-[var(--color-success)]" />
                    <span className="truncate">{manufacturerName}</span>
                </div>

                {/* Price & MOQ */}
                <div className="mt-auto pt-3 border-t border-[rgba(255,255,255,0.05)]">
                    <div className="flex justify-between items-baseline mb-1">
                        <span className="text-lg font-bold text-white">
                            ₹{pricing.basePrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-[var(--color-text-tertiary)]">
                            / unit
                        </span>
                    </div>
                    <div className="text-xs text-[var(--color-text-tertiary)] flex justify-between">
                        <span>MOQ: <span className="text-[var(--color-text-secondary)]">{pricing.moq} units</span></span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProductCard;
