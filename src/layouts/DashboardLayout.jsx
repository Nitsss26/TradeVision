import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, ShoppingCart, Settings, LogOut, Menu, X, Bell } from 'lucide-react';
import { logout } from '../store/slices/authSlice';
import Button from '../components/atoms/Button';

const DashboardLayout = ({ children }) => {
    const { user, isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) return null; // Prevent flash

    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
        { icon: FileText, label: 'My RFQs', path: '/dashboard/rfqs' },
        { icon: ShoppingCart, label: 'Orders', path: '/dashboard/orders' },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    return (
        <div className="min-h-screen bg-[var(--color-bg-primary)] flex">
            {/* Sidebar */}
            <aside className={`
        fixed inset - y - 0 left - 0 z - 40 w - 64 bg - [var(--color - bg - secondary)]border - r border - [rgba(255, 255, 255, 0.05)] transform transition - transform duration - 300 ease -in -out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md: translate - x - 0
    `}>
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="h-16 flex items-center px-6 border-b border-[rgba(255,255,255,0.05)]">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-[var(--color-primary-500)] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">V</span>
                            </div>
                            <span className="text-xl font-heading font-bold">Verified<span className="text-[var(--color-primary-500)]">M</span></span>
                        </Link>
                    </div>

                    {/* User Info */}
                    <div className="p-6 border-b border-[rgba(255,255,255,0.05)]">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center border border-[var(--color-primary-500)]/30">
                                <span className="font-medium text-[var(--color-primary-500)]">{user?.name?.charAt(0)}</span>
                            </div>
                            <div className="overflow-hidden">
                                <h4 className="text-sm font-bold text-white truncate">{user?.name}</h4>
                                <p className="text-xs text-[var(--color-text-tertiary)] capitalize truncate">{user?.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items - center px - 4 py - 3 text - sm font - medium rounded - lg transition - colors ${isActive ? 'bg-[var(--color-primary-500)]/10 text-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'} `}
                                >
                                    <item.icon className={`w - 5 h - 5 mr - 3 ${isActive ? 'text-[var(--color-primary-500)]' : 'text-[var(--color-text-tertiary)]'} `} />
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t border-[rgba(255,255,255,0.05)]">
                        <button
                            onClick={() => dispatch(logout())}
                            className="flex items-center w-full px-4 py-3 text-sm font-medium text-[var(--color-error)] rounded-lg hover:bg-[var(--color-error)]/10 transition-colors"
                        >
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                {/* Top Header */}
                <header className="h-16 bg-[var(--color-bg-secondary)] border-b border-[rgba(255,255,255,0.05)] flex items-center justify-between px-4 sticky top-0 z-30">
                    <button
                        className="md:hidden p-2 text-[var(--color-text-secondary)]"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="ml-auto flex items-center space-x-4">
                        <Button variant="ghost" size="small">Need Help?</Button>
                        <button className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary-500)] transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-error)] rounded-full"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default DashboardLayout;
