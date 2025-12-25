import React from 'react';
import {
    TrendingUp, Users, ShoppingBag, DollarSign,
    ArrowUpRight, ArrowDownRight, Package, Clock
} from 'lucide-react';
import ManufacturerLayout from '../../layouts/ManufacturerLayout';
import { Link } from 'react-router-dom';

const ManufacturerDashboardPage = () => {
    const stats = [
        { label: 'Total Revenue', value: '₹48.5L', change: '+12.5%', isPositive: true, icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/10' },
        { label: 'Product Views', value: '12.8K', change: '+8.2%', isPositive: true, icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Total Orders', value: '384', change: '-2.4%', isPositive: false, icon: ShoppingBag, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { label: 'Avg. Order Value', value: '₹12.6K', change: '+5.1%', isPositive: true, icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    ];

    const recentOrders = [
        { id: '#ORD-7352', product: 'Industrial Hydraulic Pump', customer: 'Apex Heavy Industries', amount: '₹1,25,000', status: 'Processing', date: '2 hours ago' },
        { id: '#ORD-7351', product: 'CNC Machined Parts (Batch)', customer: 'TechCorp Solutions', amount: '₹85,500', status: 'Shipped', date: '5 hours ago' },
        { id: '#ORD-7350', product: 'Safety Valves Set', customer: 'BuildWell Construction', amount: '₹42,000', status: 'Delivered', date: '1 day ago' },
        { id: '#ORD-7349', product: 'Precision Gears', customer: 'AutoMotive Ancillaries', amount: '₹68,200', status: 'Processing', date: '1 day ago' },
    ];

    return (
        <ManufacturerLayout>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">Dashboard Overview</h1>
                    <p className="text-zinc-400">Welcome back! Here's what's happening with your store today.</p>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <div className={`flex items-center gap-1 text-sm font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                    {stat.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                    {stat.change}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                            <p className="text-zinc-500 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-white">Recent Orders</h2>
                            <Link to="/manufacturer/orders" className="text-blue-500 text-sm hover:underline">View All</Link>
                        </div>
                        <div className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-zinc-950 text-zinc-400 font-medium border-b border-zinc-800">
                                        <tr>
                                            <th className="px-6 py-4">Order ID</th>
                                            <th className="px-6 py-4">Product</th>
                                            <th className="px-6 py-4">Customer</th>
                                            <th className="px-6 py-4">Amount</th>
                                            <th className="px-6 py-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800 text-zinc-300">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-zinc-800/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-white">{order.id}</td>
                                                <td className="px-6 py-4">{order.product}</td>
                                                <td className="px-6 py-4 text-zinc-500">{order.customer}</td>
                                                <td className="px-6 py-4 font-medium text-white">{order.amount}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${order.status === 'Delivered' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                                            order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                                                'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions & Notifications */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-xl p-6">
                            <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <Link to="/manufacturer/products/new" className="block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg text-center transition-colors">
                                    Add New Product
                                </Link>
                                <button className="block w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors">
                                    Create New Promotion
                                </button>
                            </div>
                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                            <h2 className="text-lg font-bold text-white mb-4">Pending Tasks</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 pb-4 border-b border-zinc-800">
                                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-300">Respond to RFQ from <span className="text-white font-medium">Global Traders</span></p>
                                        <p className="text-xs text-zinc-500 mt-1">Due in 4 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                        <Package className="w-4 h-4 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-300">Low stock alert for <span className="text-white font-medium">Ball Bearings</span></p>
                                        <p className="text-xs text-zinc-500 mt-1">Stock: 15 units</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ManufacturerLayout>
    );
};

export default ManufacturerDashboardPage;
