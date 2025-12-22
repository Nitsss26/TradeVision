import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, Send, AlertCircle } from 'lucide-react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { createRFQ, resetRFQStatus } from '../../store/slices/rfqSlice';

const RFQModal = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector(state => state.rfqs);
    const { user } = useSelector(state => state.auth);

    const [quantity, setQuantity] = useState(product.pricing.moq);
    const [requirements, setRequirements] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) return; // Should be handled by parent checking auth

        dispatch(createRFQ({
            productId: product._id,
            productName: product.basicInfo.name,
            manufacturerId: product.manufacturerId,
            buyerId: user.id,
            buyerName: user.name,
            quantity: Number(quantity),
            requirements,
            status: 'sent'
        }));
    };

    if (success) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
                <div className="relative bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 max-w-sm w-full text-center animate-in zoom-in-95">
                    <div className="w-16 h-16 bg-[var(--color-success)]/20 text-[var(--color-success)] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quote Request Sent!</h3>
                    <p className="text-[var(--color-text-tertiary)] mb-6">
                        Your RFQ has been sent to {product.manufacturerName}. Expect a response within 24 hours.
                    </p>
                    <Button variant="primary" className="w-full justify-center" onClick={() => {
                        dispatch(resetRFQStatus());
                        onClose();
                    }}>
                        Close
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-[var(--color-bg-secondary)] border border-[rgba(255,255,255,0.1)] rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">

                {/* Header */}
                <div className="p-6 border-b border-[rgba(255,255,255,0.05)] flex justify-between items-center bg-[var(--color-bg-tertiary)]">
                    <div>
                        <h3 className="text-lg font-bold">Request a Quote</h3>
                        <p className="text-xs text-[var(--color-text-tertiary)]">for {product.basicInfo.name}</p>
                    </div>
                    <button onClick={onClose} className="p-1 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors text-[var(--color-text-tertiary)] hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {error && (
                        <div className="mb-4 p-3 bg-[var(--color-error)]/10 border border-[var(--color-error)]/20 rounded flex items-start text-[var(--color-error)] text-sm">
                            <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Quantity Required</label>
                            <input
                                type="number"
                                min={product.pricing.moq}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className="w-full bg-[var(--color-bg-primary)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 text-white focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-[var(--color-primary-500)] outline-none transition-all"
                            />
                            <p className="text-xs text-[var(--color-text-tertiary)] mt-1">Minimum Order Quantity: {product.pricing.moq} units</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Customization Requirements</label>
                            <textarea
                                rows="4"
                                value={requirements}
                                onChange={(e) => setRequirements(e.target.value)}
                                placeholder="Describe your requirements (e.g., specific colors, packaging, logo printing)..."
                                className="w-full bg-[var(--color-bg-primary)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 text-white focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-[var(--color-primary-500)] outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <div className="bg-[var(--color-bg-primary)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-[var(--color-text-tertiary)]">Estimated Price (Excl. Shipping)</span>
                                <span className="font-bold">₹{(product.pricing.basePrice * quantity).toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <Button variant="ghost" onClick={onClose} type="button">Cancel</Button>
                            <Button variant="primary" type="submit" isLoading={loading} icon={Send}>Send Request</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RFQModal;
