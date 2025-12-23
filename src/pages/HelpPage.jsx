import React, { useState } from 'react';
import { Search, CircleHelp, FileText, MessageSquare, Truck, ShieldCheck, ChevronRight, ChevronDown, User } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const HelpPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "How do I verify a manufacturer?",
            answer: "All manufacturers on TradeVision undergo a 3-step physical verification process including factory visits, legal document checks, and capacity audits."
        },
        {
            question: "Is my payment secure?",
            answer: "Yes, TradeVision Trade Assurance protects your orders from payment to delivery. Your funds are held in escrow until you verify the goods."
        },
        {
            question: "What is the return policy?",
            answer: "Return policies depend on the individual supplier and contract terms. However, Trade Assurance covers quality disputes and shipment delays."
        },
        {
            question: "How do I request a quote (RFQ)?",
            answer: "Simply post a Request for Quote in the RFQ section, and verified suppliers will bid on your requirements within 24 hours."
        }
    ];

    const categories = [
        { icon: User, title: "Account & Profile", desc: "Manage your account settings" },
        { icon: Truck, title: "Orders & Shipping", desc: "Track shipments and returns" },
        { icon: ShieldCheck, title: "Trade Assurance", desc: "Payment protection program" },
        { icon: FileText, title: "Disputes & Claims", desc: "Resolve order issues" },
    ];

    return (
        <MainLayout>
            <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white font-sans pb-20">
                {/* Hero with Blue Gradient */}
                <div className="relative bg-gradient-to-br from-blue-950/80 via-zinc-900 to-zinc-900 border-b border-blue-900/30 py-20 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full"></div>
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full"></div>

                    <div className="relative z-10 max-w-2xl mx-auto px-4">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-lg shadow-blue-500/10">
                            Support Center
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
                            How can we help you?
                        </h1>

                        <div className="relative mt-8">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                            <input
                                type="text"
                                placeholder="Search for help articles..."
                                className="w-full pl-14 pr-6 py-4 bg-zinc-900/80 border border-blue-500/30 rounded-full text-white placeholder-zinc-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 backdrop-blur-md transition-all shadow-xl shadow-blue-500/5"
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-[1200px] mx-auto px-4 lg:px-8 -mt-10 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-gradient-to-br from-zinc-900 to-zinc-900/80 border border-blue-900/40 p-6 rounded-2xl hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all group cursor-pointer backdrop-blur-sm">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                                    <cat.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{cat.title}</h3>
                                <p className="text-zinc-500 text-sm">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-3xl mx-auto px-4 lg:px-8 py-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-gradient-to-br from-zinc-900 to-zinc-900/80 border border-blue-900/30 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-colors">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-900/10 transition-colors"
                                >
                                    <span className="font-bold text-lg">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-blue-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-blue-900/30 pt-4 bg-blue-950/20">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-indigo-900/60 border border-blue-500/30 rounded-2xl p-8 text-center shadow-2xl shadow-blue-500/10">
                        <h3 className="text-2xl font-bold text-white mb-2">Still need help?</h3>
                        <p className="text-blue-200 mb-6">Our support team is available 24/7 to assist you.</p>
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-full transition-all inline-flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40">
                            <MessageSquare className="w-4 h-4" /> Chat with Support
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};



export default HelpPage;
