import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8 px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold mb-4 block">
                            <span className="text-white">Trade</span>
                            <span className="text-blue-500">Vision</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            India's #1 verified B2B manufacturing platform.
                            Connect directly with audited factories.
                        </p>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Platform</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/products" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Browse Products</Link>
                            <Link to="/manufacturers" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Verified Suppliers</Link>
                            <Link to="/rfq" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Request Quote</Link>
                            <Link to="/trade-assurance" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Trade Assurance</Link>
                        </div>
                    </div>

                    {/* For Manufacturers */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">For Manufacturers</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/register" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Register Factory</Link>
                            <Link to="/verification" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Get Verified</Link>
                            <Link to="/seller" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Seller Center</Link>
                            <Link to="/resources" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Resources</Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/help" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Help Center</Link>
                            <Link to="/contact" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Contact Us</Link>
                            <Link to="/disputes" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Disputes</Link>
                            <Link to="/report" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Report Issue</Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <div className="flex flex-col gap-2">
                            <Link to="/about" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">About Us</Link>
                            <Link to="/careers" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Careers</Link>
                            <Link to="/news" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">News</Link>
                            <Link to="/blog" className="text-zinc-500 hover:text-blue-400 text-sm transition-colors">Blog</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-800 gap-4">
                    <p className="text-zinc-600 text-sm">
                        © 2024 TradeVision. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy" className="text-zinc-600 hover:text-white text-sm transition-colors">Privacy</Link>
                        <Link to="/terms" className="text-zinc-600 hover:text-white text-sm transition-colors">Terms</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-zinc-600 hover:text-blue-400 transition-colors">Facebook</a>
                        <a href="#" className="text-zinc-600 hover:text-blue-400 transition-colors">Twitter</a>
                        <a href="#" className="text-zinc-600 hover:text-blue-400 transition-colors">LinkedIn</a>
                        <a href="#" className="text-zinc-600 hover:text-blue-400 transition-colors">Instagram</a>
                        <a href="#" className="text-zinc-600 hover:text-blue-400 transition-colors">YouTube</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
