import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Search, Grid, List, ChevronDown, CheckCircle, X } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { fetchProducts, setFilters, clearFilters } from '../store/slices/productSlice';
import PremiumProductCard from '../components/common/PremiumProductCard';

const ProductListingPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { items: products, loading, filters } = useSelector(state => state.products);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [viewMode, setViewMode] = useState('grid');

    const categoryImages = {
        'Electronics': 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'Textiles & Apparel': 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'Machinery': 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'Automotive': 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'Packaging': 'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'Agriculture': 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    };

    const categories = [
        'All Categories',
        'Textiles & Apparel',
        'Machinery',
        'Electronics',
        'Automotive',
        'Packaging',
        'Agriculture',
        'Chemicals',
        'Construction'
    ];

    useEffect(() => {
        dispatch(fetchProducts(filters));
    }, [dispatch, filters]);

    useEffect(() => {
        const search = searchParams.get('search');
        const category = searchParams.get('category');
        if (search) {
            dispatch(setFilters({ search }));
            setSearchTerm(search);
        }
        if (category) {
            dispatch(setFilters({ category }));
        }
    }, [searchParams, dispatch]);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setFilters({ search: searchTerm }));
    };

    const handleCategoryClick = (category) => {
        if (category === 'All Categories') {
            dispatch(clearFilters());
        } else {
            dispatch(setFilters({ category }));
        }
    };

    const handleClearFilters = () => {
        dispatch(clearFilters());
        setSearchTerm('');
    };

    return (
        <MainLayout>
            <div className="flex min-h-screen bg-black">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-64 bg-zinc-950 border-r border-zinc-800 p-6 sticky top-0 h-screen overflow-y-auto">
                    <h3 className="text-white font-semibold mb-4">Categories</h3>
                    <div className="space-y-1">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleCategoryClick(cat)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${filters.category === cat || (cat === 'All Categories' && !filters.category)
                                    ? 'bg-blue-600 text-white'
                                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h3 className="text-white font-semibold mb-4">Price Range</h3>
                        <div className="space-y-2">
                            {['Under ₹100', '₹100 - ₹500', '₹500 - ₹1000', 'Above ₹1000'].map((range, idx) => (
                                <label key={idx} className="flex items-center gap-2 text-zinc-400 text-sm cursor-pointer hover:text-white">
                                    <input type="checkbox" className="accent-blue-600" />
                                    {range}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-white font-semibold mb-4">Verification</h3>
                        <label className="flex items-center gap-2 text-zinc-400 text-sm cursor-pointer hover:text-white">
                            <input type="checkbox" className="accent-blue-600" />
                            Verified Suppliers Only
                        </label>
                    </div>

                    {(filters.category || filters.search) && (
                        <button
                            onClick={handleClearFilters}
                            className="mt-8 w-full py-2 border border-zinc-700 text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors text-sm"
                        >
                            Clear All Filters
                        </button>
                    )}
                </aside>

                {/* Mobile Filter Drawer */}
                {isFilterOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div className="absolute inset-0 bg-black/70" onClick={() => setIsFilterOpen(false)} />
                        <div className="absolute left-0 top-0 h-full w-72 bg-zinc-950 p-6 overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-white font-semibold">Filters</h3>
                                <button onClick={() => setIsFilterOpen(false)} className="text-zinc-400 hover:text-white">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="space-y-1">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { handleCategoryClick(cat); setIsFilterOpen(false); }}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm ${filters.category === cat ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:bg-zinc-800'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 p-4 lg:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            {filters.category && categoryImages[filters.category] && (
                                <div className="mb-6 relative h-48 rounded-2xl overflow-hidden group">
                                    <img src={categoryImages[filters.category]} alt={filters.category} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                        <div>
                                            <p className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-1">Browse Category</p>
                                            <h1 className="text-4xl font-bold text-white">{filters.category}</h1>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-between items-end">
                                <div>
                                    {!filters.category && <h1 className="text-2xl md:text-3xl font-bold text-white">All Products</h1>}
                                    <p className="text-zinc-500 text-sm mt-1">{products.length} products found</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Search */}
                            <form onSubmit={handleSearch} className="relative flex-1 md:w-80">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 outline-none focus:border-blue-500"
                                />
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            </form>

                            {/* Mobile Filter Button */}
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="lg:hidden p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white"
                            >
                                <Filter className="w-5 h-5" />
                            </button>

                            {/* View Toggle */}
                            <div className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'}`}
                                >
                                    <Grid className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-white'}`}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(filters.category || filters.search) && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {filters.category && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                                    {filters.category}
                                    <button onClick={() => dispatch(setFilters({ category: '' }))}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                            {filters.search && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
                                    "{filters.search}"
                                    <button onClick={() => dispatch(setFilters({ search: '' }))}>
                                        <X className="w-3 h-3" />
                                    </button>
                                </span>
                            )}
                        </div>
                    )}

                    {/* Product Grid */}
                    {loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden animate-pulse">
                                    <div className="aspect-square bg-zinc-800" />
                                    <div className="p-4 space-y-2">
                                        <div className="h-4 bg-zinc-800 rounded w-3/4" />
                                        <div className="h-4 bg-zinc-800 rounded w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : products.length > 0 ? (
                        <div className={viewMode === 'grid'
                            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                            : "flex flex-col gap-4"
                        }>
                            {products.map((product) => (
                                <div key={product._id} className={viewMode === 'list' ? 'h-48' : ''}>
                                    <PremiumProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                                <Filter className="w-10 h-10 text-zinc-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                            <p className="text-zinc-500 max-w-md mb-6">
                                Try adjusting your search or filters to find what you're looking for.
                            </p>
                            <button
                                onClick={handleClearFilters}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default ProductListingPage;
