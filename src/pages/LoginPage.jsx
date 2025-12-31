import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, CircleCheck } from 'lucide-react';
import { login } from '../store/slices/authSlice';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await dispatch(login(formData));
        if (result.meta.requestStatus === 'fulfilled') {
            toast.success('Welcome back! 👋');
            const user = result.payload.user;
            if (user.role === 'manufacturer') {
                navigate('/manufacturer/analytics');
            } else {
                navigate('/dashboard');
            }
        } else {
            toast.error(result.payload || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="min-h-screen bg-black flex font-sans">
            {/* Left Side - Premium Branding */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-zinc-900 border-r border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-zinc-900 to-black opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 bg-repeat"></div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10 w-full p-20 flex flex-col justify-between h-full">
                    <Link to="/" className="text-4xl font-bold text-white tracking-tight">
                        Trade<span className="text-blue-500">Vision</span>
                    </Link>

                    <div>
                        <div className="mb-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4" /> Trusted by 10,000+ Businesses
                        </div>
                        <h1 className="text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Global Trade<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Simplified.</span>
                        </h1>
                        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg">
                            Access a curated network of verified manufacturers. Source intimately, ship globally, and scale efficiently.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl relative">
                            <p className="text-zinc-300 italic mb-4">"TradeVision has revolutionized how we source textiles. The verified supplier network saved us months of vetting."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">R</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Rajesh Kumar</h4>
                                    <p className="text-zinc-500 text-xs">Director, Kumar Textiles</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-8 text-zinc-500 text-sm font-medium">
                            <div className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-green-500" /> Physical Audits</div>
                            <div className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-green-500" /> Payment Protection</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12 relative">
                {/* Mobile BG */}
                <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-0"></div>

                <div className="w-full max-w-[420px] relative z-10">
                    <div className="text-center lg:text-left mb-10">
                        <Link to="/" className="lg:hidden inline-block text-3xl font-bold text-white mb-8">
                            Trade<span className="text-blue-500">Vision</span>
                        </Link>
                        <h2 className="text-3xl font-bold text-white mb-3">Welcome Back</h2>
                        <p className="text-zinc-500">Sign in to manage your orders and RFQs</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-center gap-3 animate-shake">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-sm font-bold text-zinc-300 ml-1">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="name@company.com"
                                    className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-bold text-zinc-300">Password</label>
                                <Link to="/forgot-password" className="text-xs text-blue-500 hover:text-blue-400 font-medium hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full pl-12 pr-12 py-3.5 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign In <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
                        <p className="text-zinc-500 mb-6 text-sm">Or continue with</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors text-white text-sm font-semibold">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-colors text-white text-sm font-semibold">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2" /></svg>
                                Facebook
                            </button>
                        </div>
                    </div> */}

                    <p className="mt-8 text-center text-zinc-500 font-medium">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-400 hover:underline">Create free account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
