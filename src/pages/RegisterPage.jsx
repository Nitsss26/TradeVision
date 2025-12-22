import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Mail, Lock, Eye, EyeOff, User, Building2, Phone, ArrowRight } from 'lucide-react';
import { register } from '../store/slices/authSlice';

const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { loading, error } = useSelector(state => state.auth);

    const [accountType, setAccountType] = useState(searchParams.get('type') === 'manufacturer' ? 'manufacturer' : 'buyer');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        companyName: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const result = await dispatch(register({ ...formData, role: accountType }));
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
                        Join India's Largest B2B Manufacturing Platform
                    </h1>
                    <p className="text-blue-200 text-lg leading-relaxed mb-8">
                        {accountType === 'manufacturer'
                            ? "Showcase your factory to thousands of verified buyers. Get more orders, expand globally."
                            : "Source directly from verified manufacturers. No middlemen, transparent pricing, quality assured."
                        }
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <div className="text-3xl font-bold text-white">10K+</div>
                            <div className="text-blue-300 text-sm">Verified Factories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">50K+</div>
                            <div className="text-blue-300 text-sm">Products</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">0%</div>
                            <div className="text-blue-300 text-sm">Commission</div>
                        </div>
                    </div>
                </div>

                <div className="text-blue-300 text-sm">
                    Trusted by 5000+ businesses across India
                </div>
            </div>

            {/* Right Side - Register Form */}
            <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <Link to="/" className="lg:hidden text-2xl font-bold text-white mb-6 block text-center">
                        Trade<span className="text-blue-500">Vision</span>
                    </Link>

                    <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-zinc-500 mb-6">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link>
                    </p>

                    {/* Account Type Toggle */}
                    <div className="flex bg-zinc-900 rounded-xl p-1 mb-6">
                        <button
                            type="button"
                            onClick={() => setAccountType('buyer')}
                            className={`flex-1 py-3 rounded-lg font-medium transition-colors ${accountType === 'buyer'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-zinc-400 hover:text-white'
                                }`}
                        >
                            I'm a Buyer
                        </button>
                        <button
                            type="button"
                            onClick={() => setAccountType('manufacturer')}
                            className={`flex-1 py-3 rounded-lg font-medium transition-colors ${accountType === 'manufacturer'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-zinc-400 hover:text-white'
                                }`}
                        >
                            I'm a Manufacturer
                        </button>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-zinc-400 text-sm mb-2">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-zinc-400 text-sm mb-2">Phone</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {accountType === 'manufacturer' && (
                            <div>
                                <label className="block text-zinc-400 text-sm mb-2">Company Name</label>
                                <div className="relative">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="Your Factory Name"
                                        className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        )}

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
                                    className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-zinc-400 text-sm mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-zinc-400 text-sm mb-2">Confirm</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <label className="flex items-start gap-2 text-zinc-400 text-sm cursor-pointer">
                            <input type="checkbox" className="mt-1 accent-blue-600" required />
                            <span>
                                I agree to the <Link to="/terms" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create Account <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
