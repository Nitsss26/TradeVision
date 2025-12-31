import React, { useState } from 'react';
import {
    BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
    TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Activity,
    MousePointer, Clock, MapPin, Globe, Filter, Download, Share2,
    MoreHorizontal, Calendar, ArrowRight, Layers, Eye, Heart, Star,
    MessageSquare, FileText, ArrowDownRight, Zap
} from 'lucide-react';
import { scaleLinear } from "d3-scale";
import ManufacturerLayout from '../../layouts/ManufacturerLayout';

import { useSelector } from 'react-redux';

const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const AnalyticsPage = () => {
    const { user } = useSelector(state => state.auth);
    const isLegacy = user?.email === 'analytics@gmail.com';

    const [activeCardId, setActiveCardId] = useState(0);
    const [chartType, setChartType] = useState('area');
    const [dateRange, setDateRange] = useState('Jul 01, 2025 - Aug 29, 2025');

    // Configurable chart types for each section
    const [chart1Type, setChart1Type] = useState('area');
    const [chart2Type, setChart2Type] = useState('bar');
    const [chart3Type, setChart3Type] = useState('line');
    const [chart4Type, setChart4Type] = useState('pie');
    const [chart5Type, setChart5Type] = useState('bar');
    const [chart6Type, setChart6Type] = useState('area');
    const [chart7Type, setChart7Type] = useState('line');
    const [chart8Type, setChart8Type] = useState('bar');

    // Mock data generators (Only used for legacy user now)
    const genData = (points = 30, max = 100) => {
        if (!isLegacy) return [...Array(points)].map((_, i) => ({
            name: `${i + 1}/${Math.floor(i / 30) + 7}`,
            value: 0,
            value2: 0
        }));

        return [...Array(points)].map((_, i) => ({
            name: `${i + 1}/${Math.floor(i / 30) + 7}`,
            value: Math.floor(Math.random() * max) + 10,
            value2: Math.floor(Math.random() * (max * 0.8)) + 5
        }));
    };

    const dummyDataHistory = [
        { date: 'Jul 1', revenue: 4000, orders: 24, visits: 2400, clicks: 1200, bounce: 45, mobile: 80, desktop: 120 },
        { date: 'Jul 5', revenue: 3000, orders: 13, visits: 1398, clicks: 900, bounce: 48, mobile: 75, desktop: 110 },
        { date: 'Jul 10', revenue: 2000, orders: 58, visits: 9800, clicks: 3500, bounce: 42, mobile: 150, desktop: 200 },
        { date: 'Jul 15', revenue: 2780, orders: 39, visits: 3908, clicks: 1800, bounce: 46, mobile: 110, desktop: 160 },
        { date: 'Jul 20', revenue: 1890, orders: 48, visits: 4800, clicks: 2100, bounce: 44, mobile: 130, desktop: 180 },
        { date: 'Jul 25', revenue: 2390, orders: 38, visits: 3800, clicks: 1700, bounce: 47, mobile: 90, desktop: 140 },
        { date: 'Jul 30', revenue: 3490, orders: 43, visits: 4300, clicks: 2200, bounce: 43, mobile: 120, desktop: 170 },
        { date: 'Aug 4', revenue: 4200, orders: 55, visits: 5100, clicks: 2600, bounce: 40, mobile: 140, desktop: 190 },
        { date: 'Aug 9', revenue: 3100, orders: 30, visits: 3200, clicks: 1500, bounce: 49, mobile: 85, desktop: 130 },
        { date: 'Aug 14', revenue: 2800, orders: 25, visits: 2900, clicks: 1400, bounce: 51, mobile: 70, desktop: 120 },
        { date: 'Aug 19', revenue: 3900, orders: 45, visits: 4600, clicks: 2300, bounce: 41, mobile: 135, desktop: 175 },
        { date: 'Aug 24', revenue: 4600, orders: 60, visits: 5800, clicks: 2900, bounce: 38, mobile: 160, desktop: 210 },
        { date: 'Aug 29', revenue: 5100, orders: 72, visits: 6600, clicks: 3400, bounce: 36, mobile: 190, desktop: 240 },
    ];

    const dataHistory = isLegacy ? dummyDataHistory : [];

    // Cart Additions Data
    const dummyCartAdditions = [
        { session: "SES-8821", userName: "Rajesh Kumar", userEmail: "rajesh.k@globaltraders.com", item: "Hydraulic Pump X200 - 5HP", qty: 2, time: "25/12/2024 11:42 am" },
        { session: "SES-7654", userName: "Amit Patel", userEmail: "amit@industrialsupply.in", item: "CNC Precision Gears Set", qty: 10, time: "25/12/2024 11:28 am" },
        { session: "SES-9012", userName: "Priya Sharma", userEmail: "priya.s@manufacturing.co", item: "Safety Valve Assembly", qty: 5, time: "25/12/2024 11:15 am" },
        { session: "SES-5432", userName: "Vikram Singh", userEmail: "vikram@techparts.com", item: "Industrial Conveyor Belt 10m", qty: 1, time: "25/12/2024 10:58 am" },
        { session: "SES-3210", userName: "Neha Gupta", userEmail: "neha@equipmentpro.in", item: "Pneumatic Cylinder 50mm", qty: 8, time: "25/12/2024 10:35 am" },
    ];

    const cartAdditions = isLegacy ? dummyCartAdditions : [];

    // Wishlist Additions Data
    const dummyWishlistAdditions = [
        { session: "SES-4521", userName: "Suresh Reddy", userEmail: "suresh@steelworks.in", item: "Heavy Duty Ball Bearing 100mm", time: "25/12/2024 11:50 am" },
        { session: "SES-6789", userName: "Kavita Joshi", userEmail: "kavita@machineryparts.com", item: "Stainless Steel Flanges", time: "25/12/2024 11:38 am" },
        { session: "SES-2341", userName: "Arjun Mehta", userEmail: "arjun.m@industrialhub.co", item: "Electric Motor 3-Phase 10HP", time: "25/12/2024 11:22 am" },
        { session: "SES-8765", userName: "Deepak Verma", userEmail: "deepak@suppliernetwork.in", item: "Pressure Gauge Digital", time: "25/12/2024 11:08 am" },
        { session: "SES-1098", userName: "Ritu Kapoor", userEmail: "ritu@techequip.com", item: "Welding Electrode Pack", time: "25/12/2024 10:45 am" },
    ];

    const wishlistAdditions = isLegacy ? dummyWishlistAdditions : [];

    const dummyKpiCards = [
        { id: 0, title: "Total Revenue", value: "₹15.4M", trend: "+12%", metricKey: 'revenue', color: "#3b82f6", icon: DollarSign, unit: "₹" },
        { id: 1, title: "Total Orders", value: "1,240", trend: "+8%", metricKey: 'orders', color: "#3b82f6", icon: ShoppingCart, unit: "" },
        { id: 2, title: "Visits Today", value: "4,521", trend: "+32%", metricKey: 'visits', color: "#ec4899", icon: Users, unit: "" },
        { id: 3, title: "Total Clicks", value: "5,306", trend: "+100%", metricKey: 'clicks', color: "#eab308", icon: MousePointer, unit: "" },
        { id: 4, title: "Bounce Rate", value: "42%", trend: "-2%", metricKey: 'bounce', color: "#f97316", icon: Activity, unit: "%" },
        { id: 5, title: "Unique Users", value: "527", trend: "+100%", metricKey: 'visits', color: "#3b82f6", icon: Users, unit: "" },
        { id: 6, title: "Total Sessions", value: "889", trend: "+100%", metricKey: 'visits', color: "#10b981", icon: Layers, unit: "" },
        { id: 7, title: "Avg Session", value: "4m 50s", trend: "+12%", metricKey: 'orders', color: "#6366f1", icon: Clock, unit: "" },
        { id: 8, title: "New Registers", value: "45", trend: "+10%", metricKey: 'orders', color: "#14b8a6", icon: Users, unit: "" },
        { id: 9, title: "Add to Cart", value: "2.1K", trend: "+9%", metricKey: 'orders', color: "#d946ef", icon: ShoppingCart, unit: "" },
        { id: 10, title: "Wishlisted", value: "850", trend: "+12%", metricKey: 'orders', color: "#ef4444", icon: Heart, unit: "" },
        { id: 11, title: "Impressions", value: "3,959", trend: "+100%", metricKey: 'visits', color: "#06b6d4", icon: Eye, unit: "" },
        { id: 12, title: "Pos. Reviews", value: "4.8", trend: "+0.1", metricKey: 'bounce', color: "#84cc16", icon: Star, unit: "★" },
        { id: 13, title: "RFQs Sent", value: "348", trend: "+24%", metricKey: 'clicks', color: "#f59e0b", icon: FileText, unit: "" },
        { id: 14, title: "Messages", value: "892", trend: "+15%", metricKey: 'clicks', color: "#a855f7", icon: MessageSquare, unit: "" },
        { id: 15, title: "Return Rate", value: "1.2%", trend: "-0.2%", metricKey: 'bounce', color: "#64748b", icon: ArrowDownRight, unit: "%" },
    ];

    const kpiCards = isLegacy ? dummyKpiCards : dummyKpiCards.map(c => ({ ...c, value: c.unit === "₹" ? "₹0" : "0", trend: "0%" }));

    const activeCard = kpiCards.find(c => c.id === activeCardId) || kpiCards[0];
    const currentChartData = dataHistory.length > 0 ? dataHistory.map(item => ({ name: item.date, value: item[activeCard.metricKey] || 0 })) : genData(15);

    // Chart Type Selector Component
    const ChartTypeSelector = ({ currentType, onChange }) => (
        <div className="flex bg-black/40 rounded-lg p-0.5 border border-zinc-700">
            {['area', 'bar', 'line', 'pie'].map(type => (
                <button
                    key={type}
                    onClick={() => onChange(type)}
                    className={`p-1.5 rounded-md transition-all ${currentType === type ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                    title={`${type.charAt(0).toUpperCase() + type.slice(1)} Chart`}
                >
                    {type === 'area' && <Activity className="w-3.5 h-3.5" />}
                    {type === 'bar' && <BarChart className="w-3.5 h-3.5" />}
                    {type === 'line' && <TrendingUp className="w-3.5 h-3.5" />}
                    {type === 'pie' && <PieChart className="w-3.5 h-3.5" />}
                </button>
            ))}
        </div>
    );

    // Reusable Chart Renderer
    const RenderChart = ({ type, data, color, height = 200 }) => {
        const chartData = data || genData(25);

        return (
            <div className={`h-[${height}px]`} style={{ height: `${height}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                    {type === 'bar' ? (
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '6px' }} />
                            <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    ) : type === 'line' ? (
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '6px' }} />
                            <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} dot={false} activeDot={{ r: 5 }} />
                        </LineChart>
                    ) : type === 'area' ? (
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                            <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                            <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '6px' }} />
                            <Area type="monotone" dataKey="value" stroke={color} fill={`url(#gradient-${color})`} strokeWidth={3} />
                        </AreaChart>
                    ) : (
                        <PieChart>
                            <Pie data={chartData.slice(0, 5)} cx="50%" cy="50%" outerRadius={60} dataKey="value" label>
                                {chartData.slice(0, 5).map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={[color, '#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index]} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '6px' }} />
                        </PieChart>
                    )}
                </ResponsiveContainer>
            </div>
        );
    };

    return (
        <ManufacturerLayout>
            <div className="p-4 md:p-8 space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Analytics & Performance</h1>
                        <p className="text-zinc-400">Track your business growth, sales, and user engagement via TradeVision.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg p-1">
                        <Calendar className="w-4 h-4 text-zinc-400 ml-2" />
                        <select
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                            className="bg-transparent text-sm text-zinc-300 py-1.5 pr-8 pl-2 outline-none cursor-pointer"
                        >
                            <option>Jul 01, 2025 - Aug 29, 2025</option>
                            <option>Last 30 Days</option>
                            <option>Last Quarter</option>
                            <option>Year to Date</option>
                        </select>
                    </div>
                </div>

                {/* MAIN CHART SECTION */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <div className="flex items-center gap-3 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
                            {kpiCards.map(card => (
                                <button
                                    key={card.id}
                                    onClick={() => setActiveCardId(card.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-all ${activeCardId === card.id
                                        ? `bg-${card.color}-500/20 border-${card.color}-500/50 text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]`
                                        : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700'}`}
                                    style={activeCardId === card.id ? { borderColor: card.color } : {}}
                                >
                                    <card.icon className="w-4 h-4" style={{ color: activeCardId === card.id ? card.color : 'currentColor' }} />
                                    {card.title}
                                </button>
                            ))}
                        </div>
                        <ChartTypeSelector currentType={chartType} onChange={setChartType} />
                    </div>

                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            {chartType === 'area' && (
                                <AreaChart data={currentChartData}>
                                    <defs>
                                        <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={activeCard.color} stopOpacity={0.4} />
                                            <stop offset="95%" stopColor={activeCard.color} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                        itemStyle={{ color: activeCard.color }}
                                        labelStyle={{ color: '#a1a1aa' }}
                                    />
                                    <Legend />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        name={activeCard.title}
                                        stroke={activeCard.color}
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorMain)"
                                    />
                                </AreaChart>
                            )}
                            {chartType === 'line' && (
                                <LineChart data={currentChartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }} />
                                    <Legend />
                                    <Line type="monotone" dataKey="value" name={activeCard.title} stroke={activeCard.color} strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                </LineChart>
                            )}
                            {chartType === 'bar' && (
                                <BarChart data={currentChartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }} />
                                    <Legend />
                                    <Bar dataKey="value" name={activeCard.title} fill={activeCard.color} radius={[4, 4, 0, 0]} />
                                </BarChart>
                            )}
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* DETAILED METRICS GRID */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">Platform Health</h2>
                        <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
                            View Full Report <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-zinc-500 mb-6 text-sm">Real-time breakdown of user interactions and system performance.</p>

                    {/* 4 LARGE KPI CARDS */}
                    {isLegacy ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-blue-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Total Users</span>
                                    <Users className="w-5 h-5 text-blue-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">527</div>
                                <div className="text-sm text-emerald-400 font-bold">↑ +100%</div>
                            </div>

                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-green-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Active Sessions</span>
                                    <Activity className="w-5 h-5 text-green-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">889</div>
                                <div className="text-sm text-emerald-400 font-bold">↑ +100%</div>
                            </div>

                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-orange-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Total Engagements</span>
                                    <MousePointer className="w-5 h-5 text-orange-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">9,008</div>
                                <div className="text-sm text-emerald-400 font-bold">↑ +100%</div>
                            </div>

                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-purple-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Avg Session Time</span>
                                    <Clock className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">290m 15s</div>
                                <div className="text-sm text-emerald-400 font-bold">↑ +100%</div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Empty State for New Users */}
                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-blue-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Total Users</span>
                                    <Users className="w-5 h-5 text-blue-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">0</div>
                                <div className="text-sm text-slate-500 font-bold">0%</div>
                            </div>
                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-green-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Active Sessions</span>
                                    <Activity className="w-5 h-5 text-green-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">0</div>
                                <div className="text-sm text-slate-500 font-bold">0%</div>
                            </div>
                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-orange-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Total Engagements</span>
                                    <MousePointer className="w-5 h-5 text-orange-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">0</div>
                                <div className="text-sm text-slate-500 font-bold">0%</div>
                            </div>
                            <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 hover:border-purple-500 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-slate-400 text-sm font-medium">Avg Session Time</span>
                                    <Clock className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">0m 0s</div>
                                <div className="text-sm text-slate-500 font-bold">0%</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* GROWTH & TRENDS GRID (4 CHARTS WITH TOGGLES) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Growth Chart */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <TrendingUp className="w-4 h-4 text-emerald-500" /> Growth
                            </div>
                            <ChartTypeSelector currentType={chart1Type} onChange={setChart1Type} />
                        </div>
                        <RenderChart type={chart1Type} color="#10b981" />
                    </div>

                    {/* Sales Chart */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <DollarSign className="w-4 h-4 text-blue-500" /> Sales
                            </div>
                            <ChartTypeSelector currentType={chart2Type} onChange={setChart2Type} />
                        </div>
                        <RenderChart type={chart2Type} color="#3b82f6" />
                    </div>

                    {/* Traffic Source */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <Globe className="w-4 h-4 text-orange-500" /> Traffic
                            </div>
                            <ChartTypeSelector currentType={chart3Type} onChange={setChart3Type} />
                        </div>
                        <RenderChart type={chart3Type} color="#f97316" />
                    </div>

                    {/* User Retention */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <Users className="w-4 h-4 text-purple-500" /> Retention
                            </div>
                            <ChartTypeSelector currentType={chart4Type} onChange={setChart4Type} />
                        </div>
                        <RenderChart type={chart4Type} color="#8b5cf6" />
                    </div>
                </div>

                {/* LOGS TABLES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Cart Additions */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 h-[400px] overflow-hidden flex flex-col">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5 text-blue-400" /> Top Cart Additions
                        </h3>
                        <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-zinc-900 z-10">
                                    <tr className="text-zinc-500 text-xs uppercase border-b border-zinc-800">
                                        <th className="py-2">User</th>
                                        <th className="py-2">Item</th>
                                        <th className="py-2 text-right">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800/50">
                                    {cartAdditions.length > 0 ? cartAdditions.map((log, i) => (
                                        <tr key={i} className="hover:bg-zinc-800/50 transition-colors">
                                            <td className="py-3 pr-2">
                                                <div className="font-semibold text-white">{log.userName}</div>
                                                <div className="text-xs text-zinc-500">{log.userEmail}</div>
                                            </td>
                                            <td className="py-3 px-2">
                                                <div className="truncate max-w-[120px]" title={log.item}>{log.item}</div>
                                                <div className="text-xs text-zinc-500">Qty: {log.qty}</div>
                                            </td>
                                            <td className="py-3 text-right text-xs text-zinc-500">{log.time.split(' ')[1]}</td>
                                        </tr>
                                    )) : (
                                        <tr><td colSpan="3" className="py-4 text-center text-zinc-500">No data available</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Wishlist Additions */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 h-[400px] overflow-hidden flex flex-col">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-pink-500" /> Wishlist Activity
                        </h3>
                        <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-zinc-900 z-10">
                                    <tr className="text-zinc-500 text-xs uppercase border-b border-zinc-800">
                                        <th className="py-2">User</th>
                                        <th className="py-2">Item</th>
                                        <th className="py-2 text-right">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-zinc-300 divide-y divide-zinc-800/50">
                                    {wishlistAdditions.length > 0 ? wishlistAdditions.map((log, i) => (
                                        <tr key={i} className="hover:bg-zinc-800/50 transition-colors">
                                            <td className="py-3 pr-2">
                                                <div className="font-semibold text-white">{log.userName}</div>
                                                <div className="text-xs text-zinc-500">{log.userEmail}</div>
                                            </td>
                                            <td className="py-3 px-2">
                                                <div className="truncate max-w-[120px]" title={log.item}>{log.item}</div>
                                            </td>
                                            <td className="py-3 text-right text-xs text-zinc-500">{log.time.split(' ')[1]}</td>
                                        </tr>
                                    )) : (
                                        <tr><td colSpan="3" className="py-4 text-center text-zinc-500">No data available</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 4 MORE CHARTS AT BOTTOM */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Engagement */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <MousePointer className="w-4 h-4 text-indigo-500" /> Engagement
                            </div>
                            <ChartTypeSelector currentType={chart5Type} onChange={setChart5Type} />
                        </div>
                        <RenderChart type={chart5Type} color="#6366f1" height={150} />
                    </div>

                    {/* Impressions */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <Eye className="w-4 h-4 text-cyan-500" /> Impressions
                            </div>
                            <ChartTypeSelector currentType={chart6Type} onChange={setChart6Type} />
                        </div>
                        <RenderChart type={chart6Type} color="#06b6d4" height={150} />
                    </div>

                    {/* RFQs */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <FileText className="w-4 h-4 text-yellow-500" /> RFQs
                            </div>
                            <ChartTypeSelector currentType={chart7Type} onChange={setChart7Type} />
                        </div>
                        <RenderChart type={chart7Type} color="#eab308" height={150} />
                    </div>

                    {/* Messages */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2 text-white font-semibold">
                                <MessageSquare className="w-4 h-4 text-pink-500" /> Messages
                            </div>
                            <ChartTypeSelector currentType={chart8Type} onChange={setChart8Type} />
                        </div>
                        <RenderChart type={chart8Type} color="#d946ef" height={150} />
                    </div>
                </div>

            </div>
        </ManufacturerLayout>
    );
};

export default AnalyticsPage;
