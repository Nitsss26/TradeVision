import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Package, BarChart3, Settings,
    LogOut, ChevronLeft, ChevronRight, Bell, User, MessageSquare
} from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const ManufacturerLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/manufacturer/dashboard' },
        { icon: Package, label: 'Products', path: '/manufacturer/products' },
        { icon: MessageSquare, label: 'Messages', path: '/manufacturer/messages' },
        { icon: BarChart3, label: 'Analytics', path: '/manufacturer/analytics' },
        { icon: Settings, label: 'Settings', path: '/manufacturer/settings' },
    ];

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-black flex">
            {/* Sidebar */}
            <div className={`bg-zinc-900 border-r border-zinc-800 transition-all duration-300 flex flex-col sticky top-0 h-screen ${collapsed ? 'w-20' : 'w-64'}`}>
                {/* Logo Area */}
                <div className="h-16 flex items-center px-4 border-b border-zinc-800">
                    {!collapsed && (
                        <div className="flex items-center gap-2 font-bold text-xl text-white">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white">TV</span>
                            </div>
                            <span>Seller<span className="text-blue-500">Central</span></span>
                        </div>
                    )}
                    {collapsed && (
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
                            <span className="text-white font-bold">TV</span>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 px-3 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path);
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                {!collapsed && <span className="font-medium">{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom Actions */}
                <div className="p-3 border-t border-zinc-800">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                        {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                        {!collapsed && <span>Collapse</span>}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors mt-1"
                    >
                        <LogOut className="w-5 h-5" />
                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-zinc-900/50 backdrop-blur border-b border-zinc-800 flex items-center justify-between px-8 sticky top-0 z-20">
                    <h2 className="text-xl font-semibold text-white">
                        {menuItems.find(i => location.pathname.startsWith(i.path))?.label || 'Dashboard'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-zinc-700">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                TS
                            </div>
                            <div className="hidden md:block">
                                <p className="text-sm font-medium text-white">Tech Solutions Ltd.</p>
                                <p className="text-xs text-zinc-500">Verified Manufacturer</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ManufacturerLayout;
