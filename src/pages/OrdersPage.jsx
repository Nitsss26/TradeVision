import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart, Clock, CircleCheck, Truck, Package,
    CircleAlert, ChevronRight, MapPin, Calendar
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const OrdersPage = () => {
    const [activeTab, setActiveTab] = useState('all');

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

    const filteredOrders = activeTab === 'all'
        ? orders
        : orders.filter(order => order.status === activeTab);

    return (
        <MainLayout>
            <div className="min-h-screen bg-black">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white">My Orders</h1>
                            <p className="text-zinc-500 mt-1">Track and manage your orders</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                        {['all', 'pending', 'processing', 'shipped', 'delivered'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg font-medium capitalize whitespace-nowrap transition-colors ${activeTab === tab
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
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
                                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center">
                                                <ShoppingCart className="w-7 h-7 text-zinc-500" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-zinc-500 text-sm">{order.id}</span>
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${statusConfig.bg} ${statusConfig.color}`}>
                                                        <statusConfig.icon className="w-3 h-3" />
                                                        {statusConfig.label}
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-medium mb-1">{order.product}</h3>
                                                <p className="text-zinc-500 text-sm">{order.supplier}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-6">
                                            <div>
                                                <div className="text-zinc-500 text-xs mb-1">Quantity</div>
                                                <div className="text-white">{order.quantity}</div>
                                            </div>
                                            <div>
                                                <div className="text-zinc-500 text-xs mb-1">Total</div>
                                                <div className="text-white font-semibold">{order.total}</div>
                                            </div>
                                            <div>
                                                <div className="text-zinc-500 text-xs mb-1">Order Date</div>
                                                <div className="text-white flex items-center gap-1">
                                                    <Calendar className="w-4 h-4 text-zinc-500" />
                                                    {order.date}
                                                </div>
                                            </div>
                                            {order.tracking && (
                                                <div>
                                                    <div className="text-zinc-500 text-xs mb-1">Tracking</div>
                                                    <div className="text-blue-400">{order.tracking}</div>
                                                </div>
                                            )}
                                            <button className="p-2 text-zinc-500 hover:text-blue-500 transition-colors">
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Progress Bar for shipped orders */}
                                    {(order.status === 'shipped' || order.status === 'delivered') && (
                                        <div className="mt-6 pt-6 border-t border-zinc-800">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-zinc-500 text-sm">Order Progress</span>
                                                <span className="text-zinc-500 text-sm">
                                                    {order.status === 'delivered' ? '100%' : '75%'}
                                                </span>
                                            </div>
                                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${order.status === 'delivered' ? 'bg-green-500 w-full' : 'bg-purple-500 w-3/4'
                                                        }`}
                                                />
                                            </div>
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
