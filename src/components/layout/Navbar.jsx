import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import {
    Search, Menu, ChevronDown, MapPin, Globe, User,
    ShoppingCart, X, ChevronRight, MessageSquare, Package, Tag, ShieldCheck, LogOut, Settings, Bell
} from 'lucide-react';
import CategoryDropdown from './CategoryDropdown';
import MessagesPopup from '../common/MessagesPopup';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('Products');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [placeholderText, setPlaceholderText] = useState('Search for products...');
    const [messagesOpen, setMessagesOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // Auto-rotating placeholders
    useEffect(() => {
        const placeholders = [
            'Search for "Textiles"...',
            'Search for "Electronics"...',
            'Search for "Packaging Machines"...',
            'Search for "Raw Materials"...'
        ];
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % placeholders.length;
            setPlaceholderText(placeholders[index]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const itemCount = 0;

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/${searchType.toLowerCase()}?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-black border-b border-zinc-800 font-sans">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 lg:px-8 py-4 gap-6">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-1 text-3xl font-bold whitespace-nowrap mr-4 group">
                    <span className="text-white tracking-tight group-hover:text-blue-50 transition-colors">Trade</span>
                    <span className="text-blue-600 tracking-tight">Vision</span>
                </Link>

                {/* Search Bar - Desktop - Premium Pill Design */}
                <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-3xl relative z-10">
                    <div className="flex w-full bg-white rounded-full overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.1)] focus-within:shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all duration-300 ring-2 ring-transparent focus-within:ring-blue-500/20">
                        <div className="relative group">
                            <select
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                                className="h-full pl-4 pr-8 bg-gray-50 text-zinc-700 text-sm font-bold appearance-none outline-none cursor-pointer hover:bg-gray-100 transition-colors border-r border-gray-200"
                            >
                                <option value="Products">Products</option>
                                <option value="Manufacturers">Manufacturers</option>
                            </select>
                            <ChevronDown className="w-3 h-3 text-zinc-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        <input
                            type="text"
                            placeholder={placeholderText}
                            className="flex-1 px-4 py-3 bg-white text-black placeholder-zinc-400 outline-none text-[15px] font-medium min-w-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all duration-300 flex items-center gap-2 m-1 rounded-full text-[14px] shadow-lg shadow-blue-600/20 active:scale-95 whitespace-nowrap"
                        >
                            <Search className="w-4 h-4" />
                            Search
                        </button>
                    </div>
                </form>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Messages - With Popup */}
                    <div className="relative">
                        <button
                            onClick={() => user ? setMessagesOpen(!messagesOpen) : navigate('/login')}
                            className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white group"
                        >
                            <div className="relative">
                                <MessageSquare className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                                {user && <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>}
                            </div>
                            <span className="text-[10px] font-medium">Messages</span>
                        </button>

                        <MessagesPopup isOpen={messagesOpen} onClose={() => setMessagesOpen(false)} />
                    </div>

                    {/* Orders */}
                    <button
                        onClick={() => user ? navigate('/orders') : navigate('/login')}
                        className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white group"
                    >
                        <Package className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                        <span className="text-[10px] font-medium">Orders</span>
                    </button>

                    {/* Cart */}
                    <Link to="/cart" className="flex flex-col items-center gap-1 text-zinc-400 hover:text-white group relative">
                        <ShoppingCart className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                        <span className="text-[10px] font-medium">Cart</span>
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-black">
                                {itemCount}
                            </span>
                        )}
                    </Link>

                    {/* User Profile / Sign In */}
                    <div className="flex items-center gap-3 ml-2 border-l border-zinc-800 pl-4 relative">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm ring-2 ring-blue-500/30">
                                        {user.firstName?.[0] || user.name?.[0] || 'U'}
                                    </div>
                                    <div className="text-left hidden lg:block">
                                        <p className="text-white text-sm font-semibold">{user.firstName || user.name || 'User'}</p>
                                        <p className="text-zinc-500 text-[10px]">{user.role === 'manufacturer' ? 'Seller' : 'Buyer'}</p>
                                    </div>
                                    <ChevronDown className="w-3 h-3 text-zinc-500" />
                                </button>

                                {/* User Dropdown Menu */}
                                {userMenuOpen && (
                                    <div className="absolute top-full right-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden z-50">
                                        <div className="p-4 border-b border-zinc-800">
                                            <p className="text-white font-bold">{user.firstName || user.name}</p>
                                            <p className="text-zinc-500 text-sm">{user.email}</p>
                                        </div>
                                        <div className="p-2">
                                            <Link to={user.role === 'manufacturer' ? '/manufacturer/dashboard' : '/dashboard'} onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:bg-zinc-800 rounded-lg">
                                                <User className="w-4 h-4" /> Dashboard
                                            </Link>
                                            <Link to="/orders" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:bg-zinc-800 rounded-lg">
                                                <Package className="w-4 h-4" /> My Orders
                                            </Link>
                                            <Link to="/settings" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-3 px-3 py-2 text-zinc-300 hover:bg-zinc-800 rounded-lg">
                                                <Settings className="w-4 h-4" /> Settings
                                            </Link>
                                        </div>
                                        <div className="p-2 border-t border-zinc-800">
                                            <button
                                                onClick={() => {
                                                    dispatch(logout());
                                                    navigate('/');
                                                }}
                                                className="flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-zinc-800 rounded-lg w-full"
                                            >
                                                <LogOut className="w-4 h-4" /> Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link to="/login" className="text-sm font-semibold text-zinc-300 hover:text-white whitespace-nowrap">Sign In</Link>
                                <Link to="/register" className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-900/20 whitespace-nowrap">
                                    Join Free
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Search Bar - Sleek Pill Design */}
            <div className="md:hidden px-4 pb-4">
                <form onSubmit={handleSearch} className="flex w-full bg-zinc-900/50 border border-zinc-800 rounded-full overflow-hidden focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all shadow-inner">
                    <div className="relative group border-r border-zinc-800">
                        <select
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                            className="h-full pl-3 pr-7 bg-transparent text-zinc-300 text-xs font-bold appearance-none outline-none cursor-pointer"
                        >
                            <option value="Products">Prod</option>
                            <option value="Manufacturers">Mfrs</option>
                        </select>
                        <ChevronDown className="w-3 h-3 text-zinc-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-3 py-2.5 bg-transparent text-white placeholder-zinc-500 outline-none text-sm font-medium min-w-0"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="px-4 bg-blue-600 text-white flex items-center justify-center"
                    >
                        <Search className="w-4 h-4" />
                    </button>
                </form>
            </div>
            {/* Bottom Nav - Categories & Quick Links */}
            <div className="hidden md:flex items-center gap-8 px-4 lg:px-8 bg-zinc-950 border-t border-zinc-900 h-10 shadow-lg relative z-40">
                {/* Mega Menu Trigger */}
                <div
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                >
                    <button className={`flex items-center gap-3 font-semibold text-sm px-2 transition-colors h-full ${isCategoryOpen ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}>
                        <Menu className="w-4 h-4" />
                        <span className="tracking-wide text-[13px]">All Categories</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Integrated Dropdown */}
                    {isCategoryOpen && (
                        <div className="absolute top-full left-0 z-50 pt-1">
                            <CategoryDropdown
                                onMouseEnter={() => setIsCategoryOpen(true)}
                                onMouseLeave={() => setIsCategoryOpen(false)}
                            />
                        </div>
                    )}
                </div>

                <div className="h-4 w-px bg-zinc-800 mx-2"></div>

                <div className="flex items-center gap-8">
                    {/* 2nd Place: Verified Manufacturers */}
                    <Link to="/manufacturers" className="text-zinc-300 hover:text-white transition-colors text-[13px] font-medium tracking-wide hover:underline decoration-blue-500 decoration-2 underline-offset-4 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                        Verified Manufacturers
                    </Link>

                    {/* 3rd Place: Dead Stock (Clearance) */}
                    <Link to="/dead-stock" className="text-zinc-300 hover:text-white transition-colors text-[13px] font-bold tracking-wide flex items-center gap-1 group">
                        <Tag className="w-3.5 h-3.5 text-red-500 group-hover:rotate-12 transition-transform" />
                        <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent group-hover:from-red-300 group-hover:to-orange-300">
                            Dead Stock
                        </span>
                        <span className="px-1.5 py-0.5 bg-red-500/10 text-red-400 text-[9px] rounded border border-red-500/20 font-bold ml-1 animate-pulse">SALE</span>
                    </Link>

                    {/* 4th Place: Trade Assurance */}
                    <Link to="/trade-assurance" className="text-zinc-300 hover:text-white transition-colors text-[13px] font-medium tracking-wide flex items-center gap-1 hover:underline decoration-blue-500 decoration-2 underline-offset-4">
                        Trade Assurance
                        <span className="px-1.5 py-0.5 bg-yellow-500/10 text-yellow-500 text-[10px] rounded border border-yellow-500/20 font-bold ml-1">PROTECT</span>
                    </Link>

                    <Link to="/help" className="text-zinc-300 hover:text-white transition-colors text-[13px] font-medium tracking-wide hover:underline decoration-blue-500 decoration-2 underline-offset-4">Help Center</Link>

                    <div className="flex-1"></div>

                    <div className="flex items-center gap-4 text-[13px] font-medium text-zinc-400 ml-auto">
                        <Link to="/app" className="hover:text-white cursor-pointer transition-colors -ml-10">Get the app</Link>
                        <span className="w-px h-3 bg-zinc-700"></span>
                        <span className="hover:text-white cursor-pointer transition-colors">English - INR</span>
                        <span className="w-px h-3 bg-zinc-700"></span>
                        <span className="hover:text-white cursor-pointer transition-colors">Ship to: 🇮🇳 India</span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-zinc-900 border-t border-zinc-800 p-4 absolute w-full left-0 top-full shadow-2xl z-40 animate-in slide-in-from-top-2">
                    <form onSubmit={handleSearch} className="mb-4">
                        <div className="flex gap-2 mb-2">
                            <select
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                                className="bg-zinc-800 text-white text-sm rounded-lg px-2 border border-zinc-700 outline-none"
                            >
                                <option value="Products">Products</option>
                                <option value="Manufacturers">Manufacturers</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder={placeholderText}
                            className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                    <div className="flex flex-col gap-1">
                        <Link to="/products" className="text-zinc-300 py-3 border-b border-zinc-800 flex justify-between items-center hover:bg-zinc-800/50 px-2 rounded">
                            Browse Products <ChevronRight className="w-4 h-4 text-zinc-500" />
                        </Link>
                        <Link to="/manufacturers" className="text-zinc-300 py-3 border-b border-zinc-800 flex justify-between items-center hover:bg-zinc-800/50 px-2 rounded">
                            Verified Suppliers <ShieldCheck className="w-4 h-4 text-blue-500" />
                        </Link>
                        <Link to="/dead-stock" className="text-red-400 font-bold py-3 border-b border-zinc-800 flex justify-between items-center hover:bg-zinc-800/50 px-2 rounded">
                            Dead Stock <Tag className="w-4 h-4 text-red-500" />
                        </Link>
                        <Link to="/trade-assurance" className="text-zinc-300 py-3 border-b border-zinc-800 flex justify-between items-center hover:bg-zinc-800/50 px-2 rounded">
                            Trade Assurance <ShieldCheck className="w-4 h-4 text-yellow-500" />
                        </Link>
                        {user ? (
                            <div className="mt-6 p-4 bg-zinc-800/50 rounded-lg">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                                        {user.firstName?.[0] || user.name?.[0] || 'U'}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">{user.firstName || user.name}</p>
                                        <p className="text-zinc-500 text-sm">{user.email}</p>
                                    </div>
                                </div>
                                <Link to={user.role === 'manufacturer' ? '/manufacturer/dashboard' : '/dashboard'} className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-center font-bold mb-2">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => { localStorage.removeItem('user'); window.location.reload(); }}
                                    className="w-full px-4 py-2 border border-zinc-700 text-zinc-300 rounded-lg text-center font-medium"
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-center font-bold mt-6 shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
                                Sign In / Join Free
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
