import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, Clock, CheckCircle, AlertCircle, XCircle,
    Plus, Filter, ChevronRight, MessageCircle, Package
} from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const MyRFQsPage = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Mock RFQs
    const rfqs = [
        {
            id: 'RFQ-001',
            product: 'Organic Cotton Poplin Fabric - 500 meters',
            supplier: 'TexFab India Pvt Ltd',
            status: 'pending',
            date: '2024-01-15',
            quantity: '500',
            budget: '₹60,000'
        },
        {
            id: 'RFQ-002',
            product: 'CNC Machined Aluminum Parts - 100 units',
            supplier: 'Precision Auto Components',
            status: 'quoted',
            date: '2024-01-14',
            quantity: '100',
            budget: '₹45,000'
        },
        {
            id: 'RFQ-003',
            product: 'Kraft Paper Bags - 5000 pieces',
            supplier: 'GreenEarth Packaging',
            status: 'accepted',
            date: '2024-01-12',
            quantity: '5000',
            budget: '₹60,000'
        },
        {
            id: 'RFQ-004',
            product: 'LED Driver Module 50W - 200 units',
            supplier: 'VoltMax Electronics',
            status: 'rejected',
            date: '2024-01-10',
            quantity: '200',
            budget: '₹70,000'
        },
    ];

    const getStatusConfig = (status) => {
        switch (status) {
            case 'pending':
                return { icon: Clock, color: 'text-yellow-500', bg: 'bg-yellow-500/10', label: 'Pending' };
            case 'quoted':
                return { icon: MessageCircle, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Quoted' };
            case 'accepted':
                return { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-500/10', label: 'Accepted' };
            case 'rejected':
                return { icon: XCircle, color: 'text-red-500', bg: 'bg-red-500/10', label: 'Rejected' };
            default:
                return { icon: AlertCircle, color: 'text-zinc-500', bg: 'bg-zinc-500/10', label: 'Unknown' };
        }
    };

    const filteredRFQs = activeTab === 'all'
        ? rfqs
        : rfqs.filter(rfq => rfq.status === activeTab);

    return (
        <MainLayout>
            <div className="min-h-screen bg-black">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white">My RFQs</h1>
                            <p className="text-zinc-500 mt-1">Manage your Request for Quotations</p>
                        </div>
                        <Link
                            to="/products"
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors w-fit"
                        >
                            <Plus className="w-4 h-4" /> New RFQ
                        </Link>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                        {['all', 'pending', 'quoted', 'accepted', 'rejected'].map((tab) => (
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

                    {/* RFQ List */}
                    <div className="space-y-4">
                        {filteredRFQs.map((rfq) => {
                            const statusConfig = getStatusConfig(rfq.status);
                            return (
                                <div
                                    key={rfq.id}
                                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center">
                                                <Package className="w-7 h-7 text-zinc-500" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-zinc-500 text-sm">{rfq.id}</span>
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${statusConfig.bg} ${statusConfig.color}`}>
                                                        <statusConfig.icon className="w-3 h-3" />
                                                        {statusConfig.label}
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-medium mb-1">{rfq.product}</h3>
                                                <p className="text-zinc-500 text-sm">{rfq.supplier}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-right">
                                                <div className="text-white font-semibold">{rfq.budget}</div>
                                                <div className="text-zinc-500 text-sm">Qty: {rfq.quantity}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-zinc-500 text-sm">{rfq.date}</div>
                                            </div>
                                            <button className="p-2 text-zinc-500 hover:text-blue-500 transition-colors">
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {filteredRFQs.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FileText className="w-10 h-10 text-zinc-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No RFQs found</h3>
                            <p className="text-zinc-500 mb-6">Start by sending an inquiry to a supplier</p>
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                <Plus className="w-5 h-5" /> Browse Products
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default MyRFQsPage;
