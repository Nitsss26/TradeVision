import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled = false,
    className = '',
    icon: Icon,
    type = 'button',
    onClick,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)] disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-400)] shadow-lg shadow-[rgba(14,165,233,0.2)]',
        secondary: 'bg-transparent border border-[var(--color-primary-500)] text-[var(--color-primary-500)] hover:bg-[rgba(14,165,233,0.1)]',
        ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-primary-500)] hover:bg-[rgba(255,255,255,0.05)]',
        destructive: 'bg-[var(--color-error)] text-white hover:opacity-90',
    };

    const sizes = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2.5 text-base',
        large: 'px-6 py-3 text-lg',
        icon: 'p-2',
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {!loading && Icon && <Icon className="w-4 h-4 mr-2" />}
            {children}
        </button>
    );
};

export default Button;
