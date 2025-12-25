import React, { useState } from 'react';
import {
    Users, Activity, ShoppingCart, Heart, MousePointer, Smartphone, Monitor, Globe, Clock,
    ArrowUpRight, ArrowDownRight, TrendingUp, Eye, CheckCircle, Package, Star, MessageSquare,
    DollarSign, FileText, Send, Share2, Filter, Download, Calendar, Map as MapIcon, Zap,
    Layers, BarChart as BarChartIcon, PieChart as PieChartIcon, LineChart as LineChartIcon,
    MoreHorizontal, Search, ChevronDown, Sparkles, TrendingDown
} from 'lucide-react';
import {
    LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart,
    FunnelChart, Funnel, LabelList
} from 'recharts';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import ManufacturerLayout from '../../layouts/ManufacturerLayout';

const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const AnalyticsPage = () => {
    const [activeCardId, setActiveCardId] = useState(0);
    const [chartType, setChartType] = useState('area');
    const [dateRange, setDateRange] = useState('Jul 01, 2025 - Aug 29, 2025');
    const [mapMetric, setMapMetric] = useState('visitors');
    const [hoveredState, setHoveredState] = useState('');

    // Individual chart type states
    const [chart1Type, setChart1Type] = useState('bar');
    const [chart2Type, setChart2Type] = useState('line');
    const [chart3Type, setChart3Type] = useState('bar');
    const [chart4Type, setChart4Type] = useState('area');
    const [chart5Type, setChart5Type] = useState('bar');
    const [chart6Type, setChart6Type] = useState('line');
    const [chart7Type, setChart7Type] = useState('line');
    const [chart8Type, setChart8Type] = useState('bar');

    // Mock data generators
    const genData = (points = 30, max = 100) => [...Array(points)].map((_, i) => ({
        name: `${i + 1}/${Math.floor(i / 30) + 7}`,
        value: Math.floor(Math.random() * max) + 10,
        value2: Math.floor(Math.random() * (max * 0.8)) + 5
    }));

    const dataHistory = [
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

    // Cart Additions Data
    const cartAdditions = [
        { session: "SES-8821", userName: "Rajesh Kumar", userEmail: "rajesh.k@globaltraders.com", item: "Hydraulic Pump X200 - 5HP", qty: 2, time: "25/12/2024 11:42 am" },
        { session: "SES-7654", userName: "Amit Patel", userEmail: "amit@industrialsupply.in", item: "CNC Precision Gears Set", qty: 10, time: "25/12/2024 11:28 am" },
        { session: "SES-9012", userName: "Priya Sharma", userEmail: "priya.s@manufacturing.co", item: "Safety Valve Assembly", qty: 5, time: "25/12/2024 11:15 am" },
        { session: "SES-5432", userName: "Vikram Singh", userEmail: "vikram@techparts.com", item: "Industrial Conveyor Belt 10m", qty: 1, time: "25/12/2024 10:58 am" },
        { session: "SES-3210", userName: "Neha Gupta", userEmail: "neha@equipmentpro.in", item: "Pneumatic Cylinder 50mm", qty: 8, time: "25/12/2024 10:35 am" },
    ];

    // Wishlist Additions Data
    const wishlistAdditions = [
        { session: "SES-4521", userName: "Suresh Reddy", userEmail: "suresh@steelworks.in", item: "Heavy Duty Ball Bearing 100mm", time: "25/12/2024 11:50 am" },
        { session: "SES-6789", userName: "Kavita Joshi", userEmail: "kavita@machineryparts.com", item: "Stainless Steel Flanges", time: "25/12/2024 11:38 am" },
        { session: "SES-2341", userName: "Arjun Mehta", userEmail: "arjun.m@industrialhub.co", item: "Electric Motor 3-Phase 10HP", time: "25/12/2024 11:22 am" },
        { session: "SES-8765", userName: "Deepak Verma", userEmail: "deepak@suppliernetwork.in", item: "Pressure Gauge Digital", time: "25/12/2024 11:08 am" },
        { session: "SES-1098", userName: "Ritu Kapoor", userEmail: "ritu@techequip.com", item: "Welding Electrode Pack", time: "25/12/2024 10:45 am" },
    ];

    const kpiCards = [
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

    const activeCard = kpiCards.find(c => c.id === activeCardId) || kpiCards[0];
    const currentChartData = dataHistory.map(item => ({ name: item.date, value: item[activeCard.metricKey] || 100 }));

    // Chart Type Selector Component
    const ChartTypeSelector = ({ currentType, onChange }) => (
        <div className="relative group">
            <button className="flex items-center gap-1 px-2 py-1 bg-black border border-slate-700 rounded text-xs text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
                {currentType === 'line' && <LineChartIcon className="w-3 h-3" />}
                {currentType === 'bar' && <BarChartIcon className="w-3 h-3" />}
                {currentType === 'area' && <Layers className="w-3 h-3" />}
                {currentType === 'pie' && <PieChartIcon className="w-3 h-3" />}
                <span className="capitalize">{currentType}</span>
                <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 bg-zinc-900 border border-slate-700 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 min-w-[120px]">
                {['line', 'bar', 'area', 'pie'].map(type => (
                    <button
                        key={type}
                        onClick={() => onChange(type)}
                        className="w-full px-3 py-2 text-left text-xs text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2 transition-colors first:rounded-t last:rounded-b"
                    >
                        {type === 'line' && <LineChartIcon className="w-3 h-3" />}
                        {type === 'bar' && <BarChartIcon className="w-3 h-3" />}
                        {type === 'area' && <Layers className="w-3 h-3" />}
                        {type === 'pie' && <PieChartIcon className="w-3 h-3" />}
                        <span className="capitalize">{type} Chart</span>
                    </button>
                ))}
            </div>
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

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-zinc-900 border border-slate-700 p-2 rounded shadow-xl text-white text-xs">
                    <p className="font-bold text-slate-400 mb-1">{label}</p>
                    {payload.map((entry, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="font-bold" style={{ color: entry.color }}>{entry.value.toLocaleString()}</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <ManufacturerLayout>
            <div className="min-h-screen bg-black text-slate-200 p-4 md:p-6 space-y-6 max-w-[1920px] mx-auto">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                            <Activity className="w-8 h-8 text-blue-400" /> Analytics Dashboard
                        </h1>
                        <p className="text-slate-400 mt-1">Comprehensive analysis of your platform's performance.</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="flex items-center gap-2 bg-zinc-900 border border-slate-700 text-slate-300 px-4 py-2 rounded-md hover:border-slate-500 transition-colors shadow-sm">
                            <Calendar className="w-4 h-4" /> {dateRange}
                        </button>
                    </div>
                </div>

                {/* KPI GRID (16 CARDS) */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                    {kpiCards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => setActiveCardId(card.id)}
                            className={`relative p-3 rounded-lg border cursor-pointer transition-all duration-300 overflow-hidden
                                ${activeCardId === card.id ? 'bg-zinc-900 border-blue-500 ring-1 ring-blue-500' : 'bg-zinc-900 border-slate-700 hover:border-slate-500'}`}
                        >
                            <div className="flex justify-between items-center mb-2 relative z-10">
                                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-tight truncate pr-2">{card.title}</span>
                                <card.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: card.color }} />
                            </div>
                            <div className="relative z-10">
                                <div className="text-xl font-bold text-white mb-0.5">{card.value}</div>
                                <div className={`text-[10px] font-bold flex items-center gap-1 ${card.trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {card.trend}
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-[120%] h-12 opacity-10 translate-x-2 translate-y-2 pointer-events-none">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={genData(10)}>
                                        <Area type="monotone" dataKey="value" stroke="none" fill={card.color} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MAIN ANALYSIS CHART */}
                <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Zap className="w-5 h-5" style={{ color: activeCard.color }} />
                            {activeCard.title} Deep Dive
                        </h2>
                        <div className="flex bg-black p-0.5 rounded-lg border border-slate-700">
                            {['area', 'bar', 'line', 'scatter'].map(type => (
                                <button
                                    key={type}
                                    onClick={() => setChartType(type)}
                                    className={`px-3 py-1.5 rounded text-xs font-medium uppercase transition-colors flex items-center gap-2
                                        ${chartType === type ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
                                >
                                    {type === 'area' && <Layers className="w-3 h-3" />}
                                    {type === 'bar' && <BarChartIcon className="w-3 h-3" />}
                                    {type === 'line' && <LineChartIcon className="w-3 h-3" />}
                                    {type === 'scatter' && <MoreHorizontal className="w-3 h-3" />}
                                    <span className="hidden sm:inline">{type}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <RenderChart type={chartType} data={currentChartData} color={activeCard.color} height={300} />
                </div>

                {/* COMPREHENSIVE ANALYTICS SUITE BANNER */}
                <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6 text-purple-400" />
                        <h2 className="text-2xl font-bold text-white">Comprehensive Analytics Suite</h2>
                        <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">NEW</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-6">
                        ⚡ Advanced analytics suite with user growth trends, engagement analysis, conversion funnels, and comprehensive KPI summaries with trend indicators.
                    </p>

                    {/* 4 LARGE KPI CARDS */}
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
                </div>

                {/* GROWTH & TRENDS GRID (4 CHARTS WITH TOGGLES) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><Users className="w-4 h-4 text-emerald-400" /> Registered Users Growth</h3>
                                <p className="text-xs text-slate-400">Daily new user registrations</p>
                            </div>
                            <ChartTypeSelector currentType={chart1Type} onChange={setChart1Type} />
                        </div>
                        <RenderChart type={chart1Type} data={genData(30, 20)} color="#10b981" height={200} />
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><Activity className="w-4 h-4 text-blue-400" /> Sessions Overview</h3>
                                <p className="text-xs text-slate-400">Daily user sessions</p>
                            </div>
                            <ChartTypeSelector currentType={chart2Type} onChange={setChart2Type} />
                        </div>
                        <RenderChart type={chart2Type} data={genData(30, 200)} color="#3b82f6" height={200} />
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><TrendingDown className="w-4 h-4 text-red-400" /> Bounce Rate Analysis</h3>
                                <p className="text-xs text-slate-400">Percentage of single-page sessions</p>
                            </div>
                            <ChartTypeSelector currentType={chart3Type} onChange={setChart3Type} />
                        </div>
                        <RenderChart type={chart3Type} data={genData(30, 100)} color="#ef4444" height={200} />
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><Clock className="w-4 h-4 text-purple-400" /> Average Session Duration</h3>
                                <p className="text-xs text-slate-400">Time spent per session</p>
                            </div>
                            <ChartTypeSelector currentType={chart4Type} onChange={setChart4Type} />
                        </div>
                        <RenderChart type={chart4Type} data={genData(30, 180)} color="#8b5cf6" height={200} />
                    </div>
                </div>

                {/* ADDITIONAL CHARTS GRID (User Growth, Engagement, Sales, Cart vs Purchase) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-400" /> User Growth & Session Trends</h3>
                                <p className="text-xs text-slate-400">Daily new users vs active sessions</p>
                            </div>
                            <ChartTypeSelector currentType={chart5Type} onChange={setChart5Type} />
                        </div>
                        <RenderChart type={chart5Type} data={genData(30, 350)} color="#10b981" height={200} />
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><MousePointer className="w-4 h-4 text-orange-400" /> Engagement Analysis</h3>
                                <p className="text-xs text-slate-400">User interactions and engagement rates</p>
                            </div>
                            <ChartTypeSelector currentType={chart6Type} onChange={setChart6Type} />
                        </div>
                        <RenderChart type={chart6Type} data={genData(30, 1800)} color="#f97316" height={200} />
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><DollarSign className="w-4 h-4 text-blue-400" /> Sales Performance</h3>
                                <p className="text-xs text-slate-400">Daily sales and revenue</p>
                            </div>
                            <ChartTypeSelector currentType={chart7Type} onChange={setChart7Type} />
                        </div>
                        <RenderChart type={chart7Type} data={genData(30, 20000)} color="#3b82f6" height={200} />
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-pink-400" /> Add to Cart vs Purchase</h3>
                                <p className="text-xs text-slate-400">Conversion funnel analysis</p>
                            </div>
                            <ChartTypeSelector currentType={chart8Type} onChange={setChart8Type} />
                        </div>
                        <div className="h-[200px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={genData(30, 50)}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                                    <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #475569', borderRadius: '6px' }} />
                                    <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} name="Add to Cart" />
                                    <Line type="monotone" dataKey="value2" stroke="#10b981" strokeWidth={2} name="Purchase" />
                                    <Legend />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* ENGAGEMENT & IMPRESSIONS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><MousePointer className="w-4 h-4 text-orange-400" /> User Engagements</h3>
                                <p className="text-xs text-slate-400">Daily interactions</p>
                            </div>
                        </div>
                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <ComposedChart data={genData(20)}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="name" hide />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} barSize={10} />
                                    <Line type="monotone" dataKey="value2" stroke="#facc15" strokeWidth={2} dot={false} />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold flex items-center gap-2"><Eye className="w-4 h-4 text-cyan-400" /> Page Impressions</h3>
                                <p className="text-xs text-slate-400">Daily page views</p>
                            </div>
                        </div>
                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={genData(25)}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                                    <XAxis dataKey="name" hide />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* INDIA MAP - SIMPLIFIED VERSION */}
                <div className="bg-black border border-blue-500/20 rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <MapIcon className="w-5 h-5 text-blue-400" /> Regional Manufacturing Analytics
                            </h2>
                            <p className="text-sm text-slate-400">Geographic distribution of supplier inquiries & orders</p>
                        </div>
                        <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-blue-500/30">
                            {['Unique Visitors', 'Sessions', 'Clicks', 'Orders', 'RFQs', 'Sales'].map(m => (
                                <button
                                    key={m}
                                    onClick={() => setMapMetric(m.toLowerCase())}
                                    className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${mapMetric === m.toLowerCase() ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Simplified Map Visualization */}
                        <div className="lg:col-span-3 bg-black/40 rounded-xl border border-blue-500/20 p-8 h-[500px] relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <Globe className="w-24 h-24 text-blue-500/30 mx-auto" />
                                    <div className="space-y-2">
                                        <h3 className="text-white font-bold text-lg">India Manufacturing Heatmap</h3>
                                        <p className="text-slate-400 text-sm">Geographic distribution of {mapMetric}</p>
                                    </div>
                                    {/* State Bubbles */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
                                        {[
                                            { state: 'Maharashtra', value: 2450, color: '#3b82f6' },
                                            { state: 'Gujarat', value: 1820, color: '#2563eb' },
                                            { state: 'Tamil Nadu', value: 1650, color: '#1d4ed8' },
                                            { state: 'Karnataka', value: 1420, color: '#1e40af' },
                                            { state: 'Delhi NCR', value: 1280, color: '#1e3a8a' },
                                            { state: 'Punjab', value: 980, color: '#172554' },
                                        ].map((item, i) => (
                                            <div key={i} className="bg-zinc-900 border border-blue-500/30 rounded-lg p-4 hover:border-blue-500 transition-all cursor-pointer group">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                                    <span className="text-xs text-slate-500 group-hover:text-blue-400 transition-colors">{item.value}</span>
                                                </div>
                                                <div className="text-sm font-bold text-white">{item.state}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-black/40 p-4 rounded-lg border border-blue-500/30">
                                <h4 className="text-blue-400 text-xs font-bold uppercase mb-3 flex items-center gap-2">
                                    <Activity className="w-3 h-3" /> Analytics Summary
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-xs text-slate-400">High Activity</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                                        <span className="text-xs text-slate-400">Low Activity</span>
                                    </div>
                                    <div className="border-t border-blue-500/20 pt-3 mt-3 space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400">Total Inquiries</span>
                                            <span className="text-white font-bold">9,600</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400">Active States</span>
                                            <span className="text-white font-bold">6</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400">Top State</span>
                                            <span className="text-blue-400 font-bold">Maharashtra</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400">Conversion Rate</span>
                                            <span className="text-emerald-400 font-bold">23.5%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-600/10 p-4 rounded-lg border border-blue-500/30">
                                <h4 className="text-blue-400 text-xs font-bold uppercase mb-2">Insight</h4>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    <strong>Western India</strong> (Maharashtra & Gujarat) accounts for 44% of total RFQs. Focus on industrial machinery suppliers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DETAILED EVENT LOGS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg overflow-hidden flex flex-col h-[400px]">
                        <div className="p-4 border-b border-slate-700 bg-black/50 flex justify-between items-center">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2"><FileText className="w-4 h-4 text-pink-400" /> Top Visited Pages</h3>
                            <span className="text-xs text-slate-500">Your most visited pages by unique sessions</span>
                        </div>
                        <div className="flex-1 overflow-y-auto px-4 py-2">
                            {[
                                { path: "/products/hydraulic-pumps", views: 3420, time: "2m 24s" },
                                { path: "/category/industrial-valves", views: 2850, time: "1m 45s" },
                                { path: "/manufacturers/verified", views: 2100, time: "3m 12s" },
                                { path: "/products/cnc-machines", views: 1890, time: "2m 8s" },
                                { path: "/rfq/submit", views: 1650, time: "4m 30s" },
                                { path: "/category/safety-equipment", views: 1420, time: "1m 55s" },
                                { path: "/products/conveyor-belts", views: 1180, time: "1m 38s" },
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-700/50 last:border-0 hover:bg-slate-700/20 px-2 rounded transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="text-blue-400 text-sm font-mono">{item.path}</span>
                                    </div>
                                    <div className="flex gap-4 text-xs">
                                        <span className="text-white font-bold">{item.views}</span>
                                        <span className="text-slate-500">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg overflow-hidden flex flex-col h-[400px]">
                        <div className="p-4 border-b border-slate-700 bg-black/50 flex justify-between items-center">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2"><MousePointer className="w-4 h-4 text-orange-400" /> Recent Click Events</h3>
                            <span className="text-xs text-slate-500">(6456 total clicks)</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-300">
                                <thead className="bg-black text-slate-500 font-bold uppercase sticky top-0">
                                    <tr>
                                        <th className="px-4 py-3">Time</th>
                                        <th className="px-4 py-3">User</th>
                                        <th className="px-4 py-3">Page</th>
                                        <th className="px-4 py-3">Section</th>
                                        <th className="px-4 py-3">Element</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {[
                                        { time: "25/12/2024 11:58 am", user: "Rajesh Kumar", page: "/products/hydraulic-pump-x200", section: "Product Details", element: "Request Quote" },
                                        { time: "25/12/2024 11:45 am", user: "Amit Patel", page: "/category/industrial-gears", section: "Product Grid", element: "View Details" },
                                        { time: "25/12/2024 11:32 am", user: "Priya Sharma", page: "/manufacturers/verified", section: "Supplier Card", element: "Contact Supplier" },
                                        { time: "25/12/2024 11:18 am", user: "Vikram Singh", page: "/products/cnc-machine-pro", section: "Specifications", element: "Download PDF" },
                                        { time: "25/12/2024 11:05 am", user: "Neha Gupta", page: "/rfq/submit", section: "RFQ Form", element: "Submit Inquiry" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-700/30 transition-colors">
                                            <td className="px-4 py-3 font-mono text-slate-500 text-[10px]">{row.time}</td>
                                            <td className="px-4 py-3 text-blue-400 font-medium">{row.user}</td>
                                            <td className="px-4 py-3 text-slate-400">{row.page}</td>
                                            <td className="px-4 py-3 text-purple-400 text-[10px]">{row.section}</td>
                                            <td className="px-4 py-3 text-emerald-400">{row.element}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* HEATMAP */}
                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 flex flex-col h-[300px]">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                <Activity className="w-4 h-4 text-orange-400" /> User Activity Heatmap
                            </h3>
                            <select className="bg-black/40 border border-slate-700 rounded text-[10px] text-slate-300 px-2 py-1 outline-none">
                                <option>Weekly</option>
                            </select>
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-500 mb-1 px-1">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                            {[...Array(6)].map((_, hourRow) => (
                                <div key={hourRow} className="grid grid-cols-7 gap-1 h-6">
                                    {[...Array(7)].map((_, dayCol) => {
                                        const intensity = Math.random();
                                        const opacity = intensity > 0.8 ? 'bg-orange-500' : intensity > 0.6 ? 'bg-orange-500/70' : intensity > 0.4 ? 'bg-orange-500/40' : intensity > 0.2 ? 'bg-orange-500/20' : 'bg-slate-700/20';
                                        return (
                                            <div
                                                key={dayCol}
                                                className={`rounded-sm ${opacity} hover:ring-1 hover:ring-white transition-all cursor-pointer relative group w-full h-full`}
                                                title={`${Math.floor(intensity * 100)} users`}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CONVERSION FUNNEL */}
                    <div className="bg-zinc-900 border border-slate-700 rounded-lg p-5 flex flex-col h-[300px]">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                <Filter className="w-4 h-4 text-purple-400" /> Conversion Funnel
                            </h3>
                        </div>
                        <div className="flex-1 -ml-6">
                            <ResponsiveContainer width="100%" height="100%">
                                <FunnelChart>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#F8FAFC' }}
                                        itemStyle={{ color: '#F8FAFC' }}
                                        formatter={(value) => [`${value} Users`, 'Count']}
                                    />
                                    <Funnel
                                        dataKey="value"
                                        data={[
                                            { "value": 5306, "name": "Impressions", "fill": "#8b5cf6" },
                                            { "value": 3800, "name": "Visits", "fill": "#3b82f6" },
                                            { "value": 2400, "name": "Product Views", "fill": "#0ea5e9" },
                                            { "value": 140, "name": "Orders", "fill": "#14b8a6" }
                                        ]}
                                        isAnimationActive
                                    >
                                        <LabelList position="right" fill="#cbd5e1" stroke="none" dataKey="name" />
                                    </Funnel>
                                </FunnelChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg overflow-hidden flex flex-col h-[300px]">
                        <div className="p-4 border-b border-slate-700 bg-black/50 flex justify-between items-center">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-emerald-400" /> Cart Additions</h3>
                            <span className="text-xs text-slate-500">(60 total entries)</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-300">
                                <thead className="bg-black text-slate-500 font-bold uppercase sticky top-0">
                                    <tr>
                                        <th className="px-4 py-3">Session ID</th>
                                        <th className="px-4 py-3">User Details</th>
                                        <th className="px-4 py-3">Item Details</th>
                                        <th className="px-4 py-3">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {cartAdditions.map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-700/30 transition-colors">
                                            <td className="px-4 py-3 font-mono text-blue-400 text-[10px]">{row.session}</td>
                                            <td className="px-4 py-3">
                                                <div className="text-white font-medium">{row.userName}</div>
                                                <div className="text-[10px] text-slate-500">{row.userEmail}</div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="text-slate-300">{row.item}</div>
                                                <div className="text-[10px] text-emerald-400">Qty: {row.qty}</div>
                                            </td>
                                            <td className="px-4 py-3 font-mono text-slate-500 text-[10px]">{row.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-slate-700 rounded-lg overflow-hidden flex flex-col h-[300px]">
                        <div className="p-4 border-b border-slate-700 bg-black/50 flex justify-between items-center">
                            <h3 className="text-white font-bold text-sm flex items-center gap-2"><Heart className="w-4 h-4 text-pink-400" /> Wishlist Additions</h3>
                            <span className="text-xs text-slate-500">(60 total entries)</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-300">
                                <thead className="bg-black text-slate-500 font-bold uppercase sticky top-0">
                                    <tr>
                                        <th className="px-4 py-3">Session ID</th>
                                        <th className="px-4 py-3">User Details</th>
                                        <th className="px-4 py-3">Item Details</th>
                                        <th className="px-4 py-3">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {wishlistAdditions.map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-700/30 transition-colors">
                                            <td className="px-4 py-3 font-mono text-pink-400 text-[10px]">{row.session}</td>
                                            <td className="px-4 py-3">
                                                <div className="text-white font-medium">{row.userName}</div>
                                                <div className="text-[10px] text-slate-500">{row.userEmail}</div>
                                            </td>
                                            <td className="px-4 py-3 text-slate-300">{row.item}</td>
                                            <td className="px-4 py-3 font-mono text-slate-500 text-[10px]">{row.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </ManufacturerLayout>
    );
};

export default AnalyticsPage;
