import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin, CircleCheck, Star, Users, Package, ChevronRight,
    Search, Filter, ShieldCheck, Factory, Globe, Award, MessageSquare, ArrowRight
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
            <div className="min-h-screen bg-black text-white font-sans pb-20">
                {/* Hero Section */}
                <div className="relative bg-zinc-900 border-b border-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px] rounded-full"></div>

                    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 relative z-10 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                            Verified Source
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Verified Manufacturers</span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            Direct access to 10,000+ audited factories. Source confidentially with Trade Protection.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                            <div className="relative flex items-center bg-zinc-900 border border-zinc-700 rounded-full px-6 py-4 shadow-2xl">
                                <Search className="w-5 h-5 text-zinc-500 mr-4" />
                                <input
                                    type="text"
                                    placeholder="Search by product, category, or company name..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex-1 bg-transparent text-white outline-none placeholder-zinc-500 font-medium"
                                />
                                <button className="ml-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-colors text-sm">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-12">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {[
                            { value: "10K+", label: "Verified Factories", color: "text-blue-500", icon: Factory },
                            { value: "100%", label: "Physically Audited", color: "text-green-500", icon: ShieldCheck },
                            { value: "50+", label: "Industries Covered", color: "text-purple-500", icon: Package },
                            { value: "<24h", label: "Avg Response Time", color: "text-orange-500", icon: MessageSquare }
                        ].map((stat, i) => (
                            <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition-colors">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Manufacturers Grid */}
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="bg-zinc-900 rounded-2xl h-[400px] animate-pulse border border-zinc-800" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredManufacturers.map((mfr) => (
                                <Link
                                    key={mfr._id}
                                    to={`/manufacturers/${mfr._id}`}
                                    className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col"
                                >
                                    {/* Cover Image/Gallery Preview */}
                                    <div className="relative h-40 bg-zinc-800/50 border-b border-zinc-800 p-1 grid grid-cols-3 gap-1">
                                        {(mfr.images && mfr.images.length > 0 ? mfr.images.slice(0, 3) : [
                                            'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=200',
                                            'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=200',
                                            'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=200'
                                        ]).map((imgUrl, i) => (
                                            <div key={i} className="relative h-full overflow-hidden first:rounded-l-xl last:rounded-r-xl">
                                                <img
                                                    src={typeof imgUrl === 'string' ? imgUrl : imgUrl?.url || imgUrl}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                                    alt=""
                                                />
                                            </div>
                                        ))}
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>

                                        {/* Logo Overlay */}
                                        <div className="absolute -bottom-6 left-6 w-16 h-16 rounded-xl border-4 border-zinc-900 bg-white shadow-xl overflow-hidden z-20 p-1">
                                            <img
                                                src={mfr.logo || `https://ui-avatars.com/api/?name=${mfr.companyName}&background=0D8ABC&color=fff&size=128&bold=true`}
                                                className="w-full h-full object-contain"
                                                alt={mfr.companyName}
                                            />
                                        </div>
                                    </div>

                                    <div className="p-6 pt-10 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight mb-1">
                                                    {mfr.companyName}
                                                </h3>
                                                <div className="flex items-center gap-2 text-xs text-zinc-400">
                                                    <MapPin className="w-3 h-3" /> {mfr.location?.city || 'Mumbai'}, India
                                                </div>
                                            </div>
                                            {mfr.metrics?.rating && (
                                                <div className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded text-xs font-bold text-white">
                                                    <Star className="w-3 h-3 text-orange-400 fill-current" />
                                                    {mfr.metrics.rating}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                                                <ShieldCheck className="w-3 h-3" /> Verified Pro
                                            </span>
                                            <span className="text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded">
                                                10+ Yrs Exp
                                            </span>
                                        </div>

                                        <p className="text-zinc-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                                            {mfr.description || "Leading manufacturer of premium quality industrial goods with global export standards."}
                                        </p>

                                        <div className="mt-auto border-t border-zinc-800 pt-4 flex items-center justify-between">
                                            <button className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1">
                                                View Profile <ChevronRight className="w-3 h-3" />
                                            </button>
                                            <span className="text-[10px] font-bold text-green-500 bg-green-500/5 px-2 py-1 rounded">
                                                98% Response
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {filteredManufacturers.length === 0 && !loading && (
                        <div className="text-center py-20 bg-zinc-900 rounded-3xl border border-zinc-800">
                            <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-zinc-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No matching manufacturers</h3>
                            <p className="text-zinc-500">Try adjusting your filters or search term</p>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default ManufacturersPage;
