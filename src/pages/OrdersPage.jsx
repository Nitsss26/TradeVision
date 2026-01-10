import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart, Clock, CircleCheck, Truck, Package,
    CircleAlert, ChevronRight, MapPin, Calendar, Search
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const OrdersPage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Mock orders
    const orders = [
        {
            id: 'ORD-001',
            product: 'Organic Cotton Poplin Fabric',
            supplier: 'TexFab India Pvt Ltd',
            status: 'delivered',
            date: '2024-01-10',
            total: '₹62,400',
            quantity: '500 meters',
            tracking: 'AWB123456789'
        },
        {
            id: 'ORD-002',
            product: 'CNC Machined Aluminum Parts',
            supplier: 'Precision Auto Components',
            status: 'shipped',
            date: '2024-01-12',
            total: '₹47,500',
            quantity: '100 units',
            tracking: 'AWB987654321'
        },
        {
            id: 'ORD-003',
            product: 'Kraft Paper Shopping Bags',
            supplier: 'GreenEarth Packaging',
            status: 'processing',
            date: '2024-01-14',
            total: '₹15,000',
            quantity: '1000 pieces',
            tracking: null
        },
        {
            id: 'ORD-004',
            product: 'LED Driver Module 50W',
            supplier: 'VoltMax Electronics',
            status: 'pending',
            date: '2024-01-15',
            total: '₹35,000',
            quantity: '100 units',
            tracking: null
        },
    ];

    const getStatusConfig = (status) => {
        switch (status) {
            case 'pending':
                return { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Payment Pending' };
            case 'processing':
                return { icon: Package, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Processing' };
            case 'shipped':
                return { icon: Truck, color: 'text-purple-500', bg: 'bg-purple-500/10', label: 'Shipped' };
            case 'delivered':
                return { icon: CircleCheck, color: 'text-green-500', bg: 'bg-green-500/10', label: 'Delivered' };
            default:
                return { icon: CircleAlert, color: 'text-zinc-500', bg: 'bg-zinc-500/10', label: 'Unknown' };
        }
    };

    const filteredOrders = orders.filter(order => {
        const matchesTab = activeTab === 'all' || order.status === activeTab;
        const matchesSearch = searchQuery === '' ||
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.product.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <MainLayout>
            <div className="min-h-screen bg-black">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    {/* Header with Search */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white">My Orders</h1>
                            <p className="text-zinc-500 mt-1">Track and manage your orders</p>
                        </div>
                        <div className="relative max-w-sm w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search by Order ID or Product..."
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                        {['all', 'pending', 'processing', 'shipped', 'delivered'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full font-medium capitalize whitespace-nowrap transition-colors text-sm ${activeTab === tab
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Orders List */}
                    <div className="space-y-4">
                        {filteredOrders.map((order) => {
                            const statusConfig = getStatusConfig(order.status);
                            return (
                                <div
                                    key={order.id}
                                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0 border border-zinc-700">
                                                <ShoppingCart className="w-8 h-8 text-zinc-500" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-zinc-400 font-mono text-xs tracking-wider bg-zinc-800 px-2 py-0.5 rounded">{order.id}</span>
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${statusConfig.bg} ${statusConfig.color} border-${statusConfig.color.split('-')[1]}-500/20`}>
                                                        <statusConfig.icon className="w-3 h-3" />
                                                        {statusConfig.label}
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{order.product}</h3>
                                                <p className="text-zinc-500 text-sm flex items-center gap-1">
                                                    <span className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">M</span>
                                                    {order.supplier}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-8 lg:gap-12 pl-20 lg:pl-0">
                                            <div>
                                                <div className="text-zinc-500 text-xs font-medium uppercase mb-1">Quantity</div>
                                                <div className="text-white font-medium">{order.quantity}</div>
                                            </div>
                                            <div>
                                                <div className="text-zinc-500 text-xs font-medium uppercase mb-1">Total Amount</div>
                                                <div className="text-white font-bold text-lg">{order.total}</div>
                                            </div>
                                            <div>
                                                <div className="text-zinc-500 text-xs font-medium uppercase mb-1">Order Date</div>
                                                <div className="text-white flex items-center gap-1.5 text-sm">
                                                    <Calendar className="w-4 h-4 text-zinc-500" />
                                                    {order.date}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex items-center gap-2">
                                                {order.tracking && (
                                                    <button className="px-4 py-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-sm font-bold rounded-lg border border-blue-600/20 transition-all flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" /> Track
                                                    </button>
                                                )}
                                                <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-bold rounded-lg border border-zinc-700 transition-all flex items-center gap-2">
                                                    Invoice <ChevronRight className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar for shipped orders */}
                                    {(order.status === 'shipped' || order.status === 'delivered') && (
                                        <div className="mt-6 pt-6 border-t border-zinc-800/50 pl-2 lg:pl-20">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-zinc-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                                    <Truck className="w-4 h-4 text-blue-500" /> Shipment Progress
                                                </span>
                                                <span className="text-blue-400 text-sm font-bold">
                                                    {order.status === 'delivered' ? 'Delivered' : 'In Transit'}
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${order.status === 'delivered' ? 'bg-gradient-to-r from-green-500 to-emerald-400 w-full' : 'bg-gradient-to-r from-blue-600 to-purple-500 w-3/4'}`}
                                                >
                                                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/20 to-transparent"></div>
                                                </div>
                                            </div>
                                            {order.status === 'shipped' && (
                                                <p className="text-zinc-500 text-xs mt-2 font-medium">Expected delivery by Jan 25, 2024</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {filteredOrders.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShoppingCart className="w-10 h-10 text-zinc-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No orders found</h3>
                            <p className="text-zinc-500 mb-6">Start by browsing products and placing an order</p>
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                Browse Products
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default OrdersPage;
