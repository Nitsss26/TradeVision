import React, { useState } from 'react';
import { X, Upload, Send, Package, AlertCircle } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [completed, setCompleted] = useState(false);

    const [formData, setFormData] = useState({
        productName: '',
        quantity: '',
        targetPrice: '',
        details: '',
        image: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setCompleted(true);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* SUCCESS STATE */}
                {completed ? (
                    <div className="p-12 text-center animate-in zoom-in-95 duration-300">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send className="w-10 h-10 text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Request Sent!</h2>
                        <p className="text-zinc-400 mb-8">
                            Your request has been broadcasted to <span className="text-white font-bold">142 verified suppliers</span>.
                            Expect quotes in your Messages inbox within 24 hours.
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
                        >
                            Back to Sourcing
                        </button>
                    </div>
                ) : (
                    /* FORM STATE */
                    <div className="flex flex-col h-full">
                        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 border-b border-blue-800/30">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <Package className="w-6 h-6" /> One Request, Multiple Quotes
                            </h2>
                            <p className="text-blue-200 text-sm mt-1">Get the best price from verified manufacturers.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">What are you looking for?</label>
                                <input
                                    type="text"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleChange}
                                    placeholder="e.g. Cotton T-Shirts, Industrial Motor..."
                                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 outline-none"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Quantity</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder="e.g. 1000"
                                        className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Target Price (₹)</label>
                                    <input
                                        type="number"
                                        name="targetPrice"
                                        value={formData.targetPrice}
                                        onChange={handleChange}
                                        placeholder="Optional"
                                        className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Requirement Details</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Describe specifications, material, quality standards, etc."
                                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:border-blue-500 outline-none h-24 resize-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Reference Image (Optional)</label>
                                <div className="border-2 border-dashed border-zinc-800 rounded-lg p-6 flex flex-col items-center justify-center text-zinc-500 hover:border-zinc-600 hover:bg-zinc-900/50 transition-all cursor-pointer">
                                    <Upload className="w-8 h-8 mb-2" />
                                    <span className="text-xs">Click to upload sample image</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>Submit Request <Send className="w-4 h-4" /></>
                                    )}
                                </button>
                                <p className="text-center text-[10px] text-zinc-500 mt-3">
                                    By submitting, you agree to share this request with verified suppliers on TradeVision.
                                </p>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InquiryModal;
