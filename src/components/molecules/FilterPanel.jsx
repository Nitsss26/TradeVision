import React from 'react';
import { Sliders, X } from 'lucide-react';
import Button from '../atoms/Button';

const FilterPanel = ({ filters, onFilterChange, onClear, onClose, className = '' }) => {
    const categories = {
        "Textiles": ["Fabrics", "Yarn", "Apparel"],
        "Automotive": ["Components", "Accessories", "Tools"],
        "Packaging": ["Bags", "Boxes", "Materials"],
        "Ceramics": ["Tiles", "Sanitaryware"],
        "Electronics": ["PCB", "Components"]
    };

    const handleCategoryChange = (cat) => {
        onFilterChange({ category: cat });
    };

    return (
        <div className={`bg-[var(--color-bg-secondary)] border-r border-[rgba(255,255,255,0.05)] h-full overflow-y-auto ${className}`}>
            <div className="p-4 border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between">
                <h3 className="font-bold flex items-center">
                    <Sliders className="w-4 h-4 mr-2 text-[var(--color-primary-500)]" /> Filters
                </h3>
                <button onClick={onClose} className="md:hidden p-1 hover:bg-[rgba(255,255,255,0.1)] rounded">
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div className="p-4 space-y-6">
                {/* Category Filter */}
                <div>
                    <h4 className="text-sm font-semibold mb-3 text-white">Categories</h4>
                    <div className="space-y-2">
                        {Object.keys(categories).map(cat => (
                            <div key={cat}>
                                <label className="flex items-center space-x-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.category === cat}
                                        onChange={() => handleCategoryChange(cat)}
                                        className="form-checkbox bg-[var(--color-bg-tertiary)] border-[rgba(255,255,255,0.2)] text-[var(--color-primary-500)] rounded focus:ring-0 focus:ring-offset-0"
                                    />
                                    <span className="text-sm text-[var(--color-text-tertiary)] group-hover:text-white transition-colors">{cat}</span>
                                </label>
                                {/* Subcategories could go here if expanded */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price Range (Mock) */}
                <div>
                    <h4 className="text-sm font-semibold mb-3 text-white">Price Range</h4>
                    <div className="flex items-center space-x-2">
                        <input type="number" placeholder="Min" className="w-full bg-[var(--color-bg-tertiary)] border border-[rgba(255,255,255,0.1)] rounded p-2 text-sm text-white" />
                        <span className="text-[var(--color-text-tertiary)]">-</span>
                        <input type="number" placeholder="Max" className="w-full bg-[var(--color-bg-tertiary)] border border-[rgba(255,255,255,0.1)] rounded p-2 text-sm text-white" />
                    </div>
                </div>

                {/* Verification Status */}
                <div>
                    <h4 className="text-sm font-semibold mb-3 text-white">Supplier Type</h4>
                    <label className="flex items-center space-x-2 cursor-pointer group">
                        <input type="checkbox" className="form-checkbox bg-[var(--color-bg-tertiary)] border-[rgba(255,255,255,0.2)] text-[var(--color-primary-500)] rounded" />
                        <span className="text-sm text-[var(--color-text-tertiary)] group-hover:text-white transition-colors">Verified Manufacturer</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer group mt-2">
                        <input type="checkbox" className="form-checkbox bg-[var(--color-bg-tertiary)] border-[rgba(255,255,255,0.2)] text-[var(--color-primary-500)] rounded" />
                        <span className="text-sm text-[var(--color-text-tertiary)] group-hover:text-white transition-colors">Export Ready</span>
                    </label>
                </div>

                <div className="pt-4 border-t border-[rgba(255,255,255,0.05)]">
                    <Button variant="ghost" size="small" className="w-full justify-center" onClick={onClear}>
                        Clear All Filters
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;
