import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Mail, Lock, Eye, EyeOff, User, Building2, Phone, ArrowRight, ShieldCheck, CircleCheck } from 'lucide-react';
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
        <div className="min-h-screen bg-black flex font-sans">
            {/* Left Side - Premium Branding */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-zinc-900 border-r border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-zinc-900 to-black opacity-90"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 bg-repeat"></div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10 w-full p-20 flex flex-col justify-between h-full">
                    <Link to="/" className="text-4xl font-bold text-white tracking-tight">
                        Trade<span className="text-blue-500">Vision</span>
                    </Link>

                    <div>
                        <div className="mb-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-4 h-4" /> Join 10,000+ Verified Companies
                        </div>
                        <h1 className="text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                            Start Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Trade Journey.</span>
                        </h1>
                        <p className="text-zinc-400 text-xl leading-relaxed max-w-lg mb-8">
                            {accountType === 'manufacturer'
                                ? "Expand your reach globally. Get matched with serious buyers and manage orders efficiently."
                                : "Source faster and smarter. Connect directly with manufacturers and negotiate better deals."
                            }
                        </p>

                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <div className="text-3xl font-extrabold text-white mb-1">10K+</div>
                                <div className="text-zinc-500 text-xs font-medium uppercase tracking-wide">Factories</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-white mb-1">50K+</div>
                                <div className="text-zinc-500 text-xs font-medium uppercase tracking-wide">Products</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-white mb-1">0%</div>
                                <div className="text-zinc-500 text-xs font-medium uppercase tracking-wide">Fees</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-8 text-zinc-500 text-sm font-medium">
                        <div className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-green-500" /> Verified Network</div>
                        <div className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-green-500" /> Secure Payments</div>
                    </div>
                </div>
            </div>

            {/* Right Side - Register Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12 relative overflow-y-auto">
                {/* Mobile BG */}
                <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-zinc-900 to-black z-0"></div>

                <div className="w-full max-w-[480px] relative z-10 py-10">
                    <div className="text-center lg:text-left mb-8">
                        <Link to="/" className="lg:hidden inline-block text-3xl font-bold text-white mb-8">
                            Trade<span className="text-blue-500">Vision</span>
                        </Link>
                        <h2 className="text-3xl font-bold text-white mb-3">Create Account</h2>
                        <p className="text-zinc-500">
                            Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-400 hover:underline">Sign in</Link>
                        </p>
                    </div>

                    {/* Account Type Toggle */}
                    <div className="flex bg-zinc-900 border border-zinc-800 rounded-xl p-1 mb-8">
                        <button
                            type="button"
                            onClick={() => setAccountType('buyer')}
                            className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all shadow-sm ${accountType === 'buyer'
                                ? 'bg-zinc-800 text-white shadow-lg border border-zinc-700'
                                : 'text-zinc-500 hover:text-zinc-300'
                                }`}
                        >
                            I'm a Buyer
                        </button>
                        <button
                            type="button"
                            onClick={() => setAccountType('manufacturer')}
                            className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all shadow-sm ${accountType === 'manufacturer'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                                : 'text-zinc-500 hover:text-zinc-300'
                                }`}
                        >
                            I'm a Manufacturer
                        </button>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-zinc-300 ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Deepak Kumar"
                                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-zinc-300 ml-1">Phone</label>
                                <div className="relative group">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98..."
                                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {accountType === 'manufacturer' && (
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-zinc-300 ml-1">Company Name</label>
                                <div className="relative group">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="Your Factory Name"
                                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all text-sm"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-zinc-300 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-zinc-300 ml-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-zinc-300 ml-1">Confirm</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 outline-none focus:border-blue-500 focus:bg-zinc-900 transition-all text-sm"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <label className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-900/30 cursor-pointer transition-colors border border-transparent hover:border-zinc-800">
                            <input type="checkbox" className="mt-1 accent-blue-600 w-4 h-4" required />
                            <span className="text-xs text-zinc-400">
                                I agree to the <Link to="/terms" className="text-blue-400 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>, and consent to receiving marketing communications.
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
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
