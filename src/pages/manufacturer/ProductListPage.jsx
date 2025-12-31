import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Plus, Search, Filter, MoreVertical, Edit, Trash2, Eye,
    CheckCircle2, AlertCircle, TrendingUp, Upload, FileSpreadsheet, X
} from 'lucide-react';
import ManufacturerLayout from '../../layouts/ManufacturerLayout';
import toast from 'react-hot-toast';

const ProductListPage = () => {
    // Mock Data
    const [products, setProducts] = useState([
        { id: 1, name: 'Industrial Hydraulic Pump Series X', category: 'Industrial Machinery', price: '₹45,000', stock: 124, status: 'Active', views: '1.2k', rating: 4.8, image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?w=100' },
        { id: 2, name: 'CNC Machined Aluminum Parts', category: 'Mechanical Parts', price: '₹850', stock: 5000, status: 'Active', views: '8.5k', rating: 4.6, image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?w=100' },
        { id: 3, name: 'Safety Valves Set (High Pressure)', category: 'Industrial Safety', price: '₹2,400', stock: 45, status: 'Low Stock', views: '950', rating: 4.9, image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?w=100' },
        { id: 4, name: 'Precision Gears - Custom', category: 'Mechanical Parts', price: '₹1,200', stock: 0, status: 'Out of Stock', views: '2.1k', rating: 4.5, image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=100' },
        { id: 5, name: 'Heavy Duty Conveyor Belt', category: 'Material Handling', price: '₹12,500', stock: 20, status: 'Draft', views: '-', rating: '-', image: 'https://images.pexels.com/photos/2599869/pexels-photo-2599869.jpeg?w=100' },
    ]);

    const [deleteId, setDeleteId] = useState(null);
    const [showBulkImport, setShowBulkImport] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'bg-green-500/10 text-green-500 border-green-500/20';
            case 'Low Stock': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
            case 'Out of Stock': return 'bg-red-500/10 text-red-500 border-red-500/20';
            default: return 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20';
        }
    };

    const handleDelete = (id) => {
        setProducts(products.filter(p => p.id !== id));
        setDeleteId(null);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
            if (!validTypes.includes(file.type) && !file.name.endsWith('.csv') && !file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
                toast.error('Please upload a CSV or Excel file');
                return;
            }
            setSelectedFile(file);
        }
    };

    const handleBulkImport = async () => {
        if (!selectedFile) {
            toast.error('Please select a file first');
            return;
        }
        setIsUploading(true);
        // Simulate upload
        await new Promise(resolve => setTimeout(resolve, 2000));
        toast.success(`Successfully imported products from ${selectedFile.name}!`);
        setIsUploading(false);
        setShowBulkImport(false);
        setSelectedFile(null);
    };

    return (
        <ManufacturerLayout>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Products</h1>
                        <p className="text-zinc-400 mt-1">Manage your product catalog and listings.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowBulkImport(true)}
                            className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
                        >
                            <Upload className="w-5 h-5" /> Bulk Import
                        </button>
                        <Link
                            to="/manufacturer/products/new"
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            <Plus className="w-5 h-5" /> Add New Product
                        </Link>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search products by name, ID or category..."
                            className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 flex items-center gap-2 transition-colors">
                            <Filter className="w-4 h-4" /> Filters
                        </button>
                        <select className="px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-700 outline-none cursor-pointer">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Draft</option>
                            <option>Out of Stock</option>
                        </select>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-zinc-950 border-b border-zinc-800 text-zinc-400 text-sm font-medium">
                                    <th className="px-6 py-4 w-12 text-center">
                                        <input type="checkbox" className="rounded border-zinc-700 bg-zinc-900 text-blue-600 focus:ring-offset-zinc-950" />
                                    </th>
                                    <th className="px-6 py-4">Product Name</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Stock</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">Views</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-zinc-800/50 transition-colors group">
                                        <td className="px-6 py-4 text-center">
                                            <input type="checkbox" className="rounded border-zinc-700 bg-zinc-900 text-blue-600 focus:ring-offset-zinc-950" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-zinc-800 rounded-lg flex-shrink-0 overflow-hidden border border-zinc-700">
                                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white group-hover:text-blue-400 transition-colors">{product.name}</p>
                                                    <p className="text-xs text-zinc-500">{product.category}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(product.status)}`}>
                                                {product.status === 'Active' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                                                {product.status === 'Low Stock' && <AlertCircle className="w-3 h-3 mr-1" />}
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-sm ${product.stock < 10 ? 'text-red-400 font-medium' : 'text-zinc-300'}`}>
                                                {product.stock} units
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-white font-medium">{product.price}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1 text-zinc-300">
                                                <Eye className="w-3 h-3 text-zinc-500" /> {product.views}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            {/* Actions visible by default (removed opacity-0) */}
                                            <div className="flex items-center justify-end gap-2 text-zinc-400">
                                                <Link
                                                    to="/manufacturer/products/new" // Simulating Edit by going to Editor
                                                    className="p-2 hover:bg-blue-500/10 hover:text-blue-500 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </Link>
                                                <Link
                                                    to={`/products/${product.id}`}
                                                    className="p-2 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => setDeleteId(product.id)}
                                                    className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between text-zinc-400 text-sm">
                        <p>Showing {products.length} products</p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded hover:bg-zinc-800 hover:text-white">Previous</button>
                            <button className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded hover:bg-zinc-800 hover:text-white">Next</button>
                        </div>
                    </div>
                </div>

                {/* Delete Confirmation Modal */}
                {deleteId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-sm w-full shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <AlertCircle className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white text-center mb-2">Delete Product?</h3>
                            <p className="text-zinc-400 text-center text-sm mb-6">
                                Are you sure you want to delete this product? This action cannot be undone and will remove the product from your catalog.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setDeleteId(null)}
                                    className="flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => handleDelete(deleteId)}
                                    className="flex-1 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-600/20"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Bulk Import Modal */}
                {showBulkImport && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <FileSpreadsheet className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Bulk Import Products</h3>
                                        <p className="text-xs text-zinc-500">Upload CSV or Excel file</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setShowBulkImport(false); setSelectedFile(null); }}
                                    className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Upload Area */}
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="border-2 border-dashed border-zinc-700 hover:border-blue-500 rounded-xl p-8 text-center cursor-pointer transition-colors mb-4 group"
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    accept=".csv,.xlsx,.xls"
                                    className="hidden"
                                />
                                <div className="w-12 h-12 bg-zinc-800 group-hover:bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                                    <Upload className="w-6 h-6 text-zinc-400 group-hover:text-blue-500" />
                                </div>
                                {selectedFile ? (
                                    <div>
                                        <p className="text-white font-medium">{selectedFile.name}</p>
                                        <p className="text-zinc-500 text-sm mt-1">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-white font-medium">Click to upload or drag and drop</p>
                                        <p className="text-zinc-500 text-sm mt-1">CSV or Excel (.xlsx, .xls)</p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-zinc-800/50 rounded-lg p-3 mb-6">
                                <p className="text-xs text-zinc-400">
                                    <span className="text-blue-400 font-medium">Tip:</span> Your file should include columns like: Product Name, Category, Price, Stock, Description, SKU
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => { setShowBulkImport(false); setSelectedFile(null); }}
                                    className="flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleBulkImport}
                                    disabled={!selectedFile || isUploading}
                                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                                >
                                    {isUploading ? 'Importing...' : 'Import Products'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </ManufacturerLayout>
    );
};

export default ProductListPage;
