import React from 'react';
import { Play, Star, ShieldCheck, Zap, Bell } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const AppDownloadPage = () => {
    return (
        <MainLayout>
            <div className="min-h-screen bg-black text-white font-sans overflow-hidden -mt-20">
                {/* Hero Section */}
                <div className="relative pt-20 pb-0 lg:pt-32 mb-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black"></div>
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full"></div>

                    <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
                                #1 B2B App in India
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                                Trade on the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Go, Anywhere.</span>
                            </h1>
                            <p className="text-zinc-400 text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Access 10,000+ factories, chat in real-time, and manage orders from your pocket. The power of TradeVision, now mobile.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                                <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition-transform font-bold">
                                    <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[10px] font-medium uppercase tracking-wider">Download on the</div>
                                        <div className="text-lg leading-none">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 bg-zinc-900 border border-zinc-700 text-white px-6 py-3 rounded-xl hover:bg-zinc-800 hover:scale-105 transition-all font-bold">
                                    <Play className="w-8 h-8 fill-current" />
                                    <div className="text-left">
                                        <div className="text-[10px] font-medium uppercase tracking-wider">Get it on</div>
                                        <div className="text-lg leading-none">Google Play</div>
                                    </div>
                                </button>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-8">
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[10px]">U{i}</div>
                                        ))}
                                    </div>
                                    <div className="text-sm font-semibold text-zinc-400">
                                        <span className="text-white font-bold">50k+</span> Downloads
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-zinc-800"></div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-orange-500 fill-current" />
                                    <span className="text-xl font-bold text-white">4.8</span>
                                    <span className="text-sm text-zinc-500">/ 5.0</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Phone Mockup */}
                        <div className="flex-1 relative">
                            {/* Abstract Phone Shape */}
                            <div className="relative mx-auto border-zinc-800 bg-zinc-950 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
                                <div className="h-[32px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                                <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                                <div className="h-[64px] w-[3px] bg-zinc-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gradient-to-b from-zinc-900 via-zinc-900 to-black relative flex flex-col">
                                    {/* App Header */}
                                    <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-blue-900/30 to-transparent z-10"></div>
                                    <div className="p-5 pt-10 flex items-center justify-between text-white relative z-20">
                                        <span className="font-bold text-lg">TradeVision</span>
                                        <Bell className="w-5 h-5 text-zinc-400" />
                                    </div>

                                    {/* Coming Soon Content */}
                                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/30">
                                            <Zap className="w-12 h-12 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Coming Soon</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                            Our mobile app is under development. Get notified when it launches!
                                        </p>
                                        <div className="w-full bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                                <span className="text-xs text-zinc-400">Development in progress</span>
                                            </div>
                                            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <div className="w-3/4 h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"></div>
                                            </div>
                                            <span className="text-[10px] text-zinc-500 mt-2 block">75% Complete</span>
                                        </div>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="w-full h-16 bg-zinc-950 border-t border-zinc-800 flex justify-around items-center text-zinc-500 px-4">
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-zinc-800/50 rounded-lg"></div>
                                        <div className="w-8 h-8 bg-zinc-800/50 rounded-lg"></div>
                                        <div className="w-8 h-8 bg-zinc-800/50 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="bg-zinc-900/50 py-20 border-t border-zinc-900">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Why use the app?</h2>
                            <p className="text-zinc-500">Experience features built for speed and convenience</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Zap, title: "Instant Messenger", desc: "Chat directly with suppliers in real-time. Negotiate deals 3x faster.", color: "text-yellow-400" },
                                { icon: Bell, title: "Real-time Alerts", desc: "Get notified about order updates, shipment tracking, and new RFQ bids.", color: "text-red-400" },
                                { icon: ShieldCheck, title: "Mobile Escrow", desc: "Approve payments and release funds securely from your device.", color: "text-green-400" }
                            ].map((feature, i) => (
                                <div key={i} className="bg-black border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-all text-center group">
                                    <div className={`w-14 h-14 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800 group-hover:scale-110 transition-transform ${feature.color}`}>
                                        <feature.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AppDownloadPage;
