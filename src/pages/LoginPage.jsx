import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Mail, Lock, Eye, EyeOff, ArrowRight, LogIn } from 'lucide-react';
import { login } from '../store/slices/authSlice';

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
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-black flex">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 p-12 flex-col justify-between">
                <Link to="/" className="text-3xl font-bold text-white">
                    Trade<span className="text-blue-300">Vision</span>
                </Link>

                <div>
                    <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                        Welcome back to India's #1 B2B Platform
                    </h1>
                    <p className="text-blue-200 text-lg leading-relaxed">
                        Connect with verified manufacturers, get instant quotes, and grow your business with TradeVision.
                    </p>
                </div>

                <div className="flex gap-6 text-blue-300 text-sm">
                    <span>10,000+ Verified Suppliers</span>
                    <span>•</span>
                    <span>50,000+ Products</span>
                    <span>•</span>
                    <span>Zero Commission</span>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <Link to="/" className="lg:hidden text-2xl font-bold text-white mb-8 block text-center">
                        Trade<span className="text-blue-500">Vision</span>
                    </Link>

                    <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
                    <p className="text-zinc-500 mb-8">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link>
                    </p>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-zinc-400 text-sm mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-zinc-400 text-sm mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full pl-12 pr-12 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 transition-colors"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer">
                                <input type="checkbox" className="accent-blue-600" />
                                Remember me
                            </label>
                            <Link to="/forgot-password" className="text-blue-500 hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
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

                    <div className="mt-8 text-center text-zinc-600 text-sm">
                        By signing in, you agree to our{' '}
                        <Link to="/terms" className="text-blue-500 hover:underline">Terms</Link>
                        {' '}and{' '}
                        <Link to="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
