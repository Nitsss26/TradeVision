import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin, CheckCircle, Star, Users, Package, ChevronRight,
    Search, Filter, ShieldCheck
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { manufacturerService } from '../services/mock/manufacturerService';

const ManufacturersPage = () => {
    const [manufacturers, setManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchManufacturers = async () => {
            try {
                const data = await manufacturerService.getAllManufacturers();
                setManufacturers(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchManufacturers();
    }, []);

    const filteredManufacturers = manufacturers.filter(m =>
        m.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <MainLayout>
            <div className="min-h-screen bg-black">
                {/* Hero */}
                <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 px-4 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Verified Manufacturers
                        </h1>
                        <p className="text-blue-200 max-w-2xl mx-auto mb-8">
                            Every supplier is physically audited. Trade directly with real factories, not resellers.
                        </p>

                        {/* Search */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search manufacturers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-blue-700 rounded-xl text-white placeholder-zinc-400 outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
                            <div className="text-3xl font-bold text-blue-500">10K+</div>
                            <div className="text-zinc-500 text-sm">Verified Factories</div>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
                            <div className="text-3xl font-bold text-green-500">100%</div>
                            <div className="text-zinc-500 text-sm">Audited</div>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
                            <div className="text-3xl font-bold text-purple-500">50+</div>
                            <div className="text-zinc-500 text-sm">Industries</div>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
                            <div className="text-3xl font-bold text-orange-500">24h</div>
                            <div className="text-zinc-500 text-sm">Avg Response</div>
                        </div>
                    </div>

                    {/* Manufacturers Grid */}
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-zinc-900 rounded-xl h-64 animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredManufacturers.map((manufacturer) => (
                                <Link
                                    key={manufacturer._id}
                                    to={`/manufacturers/${manufacturer._id}`}
                                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center text-2xl">
                                            🏭
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-semibold flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                                                {manufacturer.companyName}
                                                {manufacturer.isVerified && (
                                                    <ShieldCheck className="w-4 h-4 text-green-500" />
                                                )}
                                            </h3>
                                            <p className="text-zinc-500 text-sm flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {manufacturer.location?.city}, {manufacturer.location?.state}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                                        {manufacturer.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            <Star className="w-4 h-4 fill-current" />
                                            <span>{manufacturer.metrics?.rating || 4.5}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-zinc-500">
                                            <Package className="w-4 h-4" />
                                            <span>{manufacturer.metrics?.productCount || 50}+ products</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap gap-2">
                                        {manufacturer.capabilities?.slice(0, 3).map((cap, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-zinc-800 rounded text-zinc-400 text-xs">
                                                {cap}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {filteredManufacturers.length === 0 && !loading && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Filter className="w-10 h-10 text-zinc-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No manufacturers found</h3>
                            <p className="text-zinc-500">Try adjusting your search term</p>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default ManufacturersPage;
