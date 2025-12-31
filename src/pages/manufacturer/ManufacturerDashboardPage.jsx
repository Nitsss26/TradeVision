import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ManufacturerLayout from '../../layouts/ManufacturerLayout';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, ShoppingCart, TrendingUp, Users, Package, ArrowRight, Activity, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturerDashboardPage = () => {
    const { user } = useSelector(state => state.auth);
    const isLegacy = user?.email === 'analytics@gmail.com';

    // Mock Data for Legacy User
    const dummyRecentOrders = [
        { id: '#ORD-7829', product: 'Cotton Fabric 500m', amount: '₹125,000', status: 'Pending', date: 'Today, 2:30 PM' },
        { id: '#ORD-7828', product: 'Linen Blend 200m', amount: '₹48,000', status: 'Processing', date: 'Today, 11:15 AM' },
        { id: '#ORD-7827', product: 'Rayon Prints 1000m', amount: '₹180,000', status: 'Shipped', date: 'Yesterday' },
        { id: '#ORD-7826', product: 'Silk Mix 50m', amount: '₹22,000', status: 'Delivered', date: '21 Aug' },
    ];

    const dummySalesData = [
        { name: 'Mon', sales: 4000 },
        { name: 'Tue', sales: 3000 },
        { name: 'Wed', sales: 2000 },
        { name: 'Thu', sales: 2780 },
        { name: 'Fri', sales: 1890 },
        { name: 'Sat', sales: 2390 },
        { name: 'Sun', sales: 3490 },
    ];

    // Data Selection
    const recentOrders = isLegacy ? dummyRecentOrders : [];
    const salesData = isLegacy ? dummySalesData : [
        { name: 'Mon', sales: 0 },
        { name: 'Tue', sales: 0 },
        { name: 'Wed', sales: 0 },
        { name: 'Thu', sales: 0 },
        { name: 'Fri', sales: 0 },
        { name: 'Sat', sales: 0 },
        { name: 'Sun', sales: 0 },
    ];

    const stats = [
        { title: 'Total Revenue', value: isLegacy ? '₹15.4M' : '₹0', trend: isLegacy ? '+12.5%' : '0%', icon: DollarSign, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { title: 'Total Orders', value: isLegacy ? '1,240' : '0', trend: isLegacy ? '+8.2%' : '0%', icon: ShoppingCart, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { title: 'Active Products', value: isLegacy ? '45' : '0', trend: isLegacy ? '+2.4%' : '0%', icon: Package, color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { title: 'Total Visitors', value: isLegacy ? '8.2k' : '0', trend: isLegacy ? '+15.3%' : '0%', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    ];

    return (
        <ManufacturerLayout>
            <div className="p-8 space-y-8">
                {/* Welcome Section */}
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Dashboard Overview
                        </h1>
                        <p className="text-zinc-400">
                            Welcome back, <span className="text-white font-semibold">{user?.profile?.company || 'Manufacturer'}</span>
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors">
                            Download Report
                        </button>
                        <Link to="/manufacturer/products/new" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <Package className="w-4 h-4" /> Add Product
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-lg ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${parseInt(stat.trend) > 0 ? 'bg-green-500/10 text-green-500' : 'bg-zinc-800 text-zinc-500'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                            <h3 className="text-zinc-400 text-sm font-medium">{stat.title}</h3>
                            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Charts & Tables Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sales Chart */}
                    <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-blue-500" /> Revenue Analytics
                            </h2>
                            <select className="bg-black border border-zinc-700 text-white text-sm rounded-lg px-3 py-1 outline-none">
                                <option>Last 7 Days</option>
                                <option>Last 30 Days</option>
                            </select>
                        </div>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={salesData}>
                                    <defs>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} prefix="₹" />
                                    <Tooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }} />
                                    <Area type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-white">Recent Orders</h2>
                            <Link to="/orders" className="text-blue-500 text-sm hover:underline">View All</Link>
                        </div>
                        <div className="space-y-4">
                            {recentOrders.length > 0 ? (
                                recentOrders.map((order, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                                        <div>
                                            <p className="text-white font-medium text-sm">{order.id}</p>
                                            <p className="text-zinc-500 text-xs">{order.product}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-bold text-sm">{order.amount}</p>
                                            <p className={`text-xs ${order.status === 'Pending' ? 'text-orange-400' :
                                                order.status === 'Processing' ? 'text-blue-400' :
                                                    order.status === 'Shipped' ? 'text-purple-400' : 'text-green-400'
                                                }`}>{order.status}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-10">
                                    <Package className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
                                    <p className="text-zinc-500">No recent orders found.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ManufacturerLayout>
    );
};

export default ManufacturerDashboardPage;
