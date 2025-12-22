import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    Package, FileText, ShoppingCart, TrendingUp, Bell, Settings,
    Plus, Eye, Clock, CheckCircle, AlertCircle, ChevronRight, LogOut
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';
import { logout } from '../store/slices/authSlice';

const DashboardPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector(state => state.auth);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    // Mock data
    const stats = [
        { label: 'Total Inquiries', value: '24', change: '+12%', icon: FileText, color: 'blue' },
        { label: 'Active Orders', value: '8', change: '+5%', icon: ShoppingCart, color: 'green' },
        { label: 'Products Viewed', value: '156', change: '+23%', icon: Eye, color: 'purple' },
        { label: 'Response Rate', value: '95%', change: '+2%', icon: TrendingUp, color: 'orange' }
    ];

    const recentInquiries = [
        { id: 1, product: 'Organic Cotton Fabric', supplier: 'TexFab India', status: 'pending', date: '2 hours ago' },
        { id: 2, product: 'CNC Aluminum Parts', supplier: 'Precision Auto', status: 'replied', date: '5 hours ago' },
        { id: 3, product: 'Kraft Paper Bags', supplier: 'GreenEarth Pack', status: 'completed', date: '1 day ago' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'text-yellow-500 bg-yellow-500/10';
            case 'replied': return 'text-blue-500 bg-blue-500/10';
            case 'completed': return 'text-green-500 bg-green-500/10';
            default: return 'text-zinc-500 bg-zinc-500/10';
        }
    };

    return (
        <MainLayout>
            <div className="min-h-screen bg-black">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white">
                                Welcome back, {user?.name || 'User'} 👋
                            </h1>
                            <p className="text-zinc-500 mt-1">Here's what's happening with your account today.</p>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                to="/products"
                                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
                            >
                                <Plus className="w-4 h-4" /> New Inquiry
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="px-5 py-2.5 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 font-medium rounded-lg flex items-center gap-2 transition-colors"
                            >
                                <LogOut className="w-4 h-4" /> Logout
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color === 'blue' ? 'bg-blue-500/10 text-blue-500' :
                                            stat.color === 'green' ? 'bg-green-500/10 text-green-500' :
                                                stat.color === 'purple' ? 'bg-purple-500/10 text-purple-500' :
                                                    'bg-orange-500/10 text-orange-500'
                                        }`}>
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-green-500 text-sm">{stat.change}</span>
                                </div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-zinc-500 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-zinc-800 mb-6">
                        {['overview', 'inquiries', 'orders', 'saved'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 font-medium capitalize transition-colors ${activeTab === tab
                                        ? 'text-blue-500 border-b-2 border-blue-500'
                                        : 'text-zinc-500 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Recent Inquiries */}
                        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-white">Recent Inquiries</h2>
                                <Link to="/my-rfqs" className="text-blue-500 text-sm flex items-center gap-1 hover:underline">
                                    View All <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {recentInquiries.map((inquiry) => (
                                    <div key={inquiry.id} className="flex items-center justify-between p-4 bg-zinc-950 rounded-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center">
                                                <Package className="w-6 h-6 text-zinc-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-medium">{inquiry.product}</h3>
                                                <p className="text-zinc-500 text-sm">{inquiry.supplier}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium capitalize ${getStatusColor(inquiry.status)}`}>
                                                {inquiry.status}
                                            </span>
                                            <p className="text-zinc-600 text-xs mt-1">{inquiry.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                            <h2 className="text-lg font-semibold text-white mb-6">Quick Actions</h2>
                            <div className="space-y-3">
                                <Link
                                    to="/products"
                                    className="w-full p-4 bg-zinc-950 hover:bg-zinc-800 rounded-lg flex items-center gap-4 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <Package className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <span className="text-white">Browse Products</span>
                                </Link>
                                <Link
                                    to="/manufacturers"
                                    className="w-full p-4 bg-zinc-950 hover:bg-zinc-800 rounded-lg flex items-center gap-4 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-green-500" />
                                    </div>
                                    <span className="text-white">Find Suppliers</span>
                                </Link>
                                <Link
                                    to="/my-rfqs"
                                    className="w-full p-4 bg-zinc-950 hover:bg-zinc-800 rounded-lg flex items-center gap-4 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <span className="text-white">My RFQs</span>
                                </Link>
                                <Link
                                    to="/orders"
                                    className="w-full p-4 bg-zinc-950 hover:bg-zinc-800 rounded-lg flex items-center gap-4 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                                        <ShoppingCart className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <span className="text-white">My Orders</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default DashboardPage;
