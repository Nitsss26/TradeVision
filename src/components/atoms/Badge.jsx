import React from 'react';

const Badge = ({
    children,
    variant = 'info', // verified, pending, rejected, info
    className = '',
}) => {
    const variants = {
        verified: 'bg-[hsl(140,65%,45%,0.2)] text-[var(--color-success)] border border-[hsl(140,65%,45%,0.3)]',
        pending: 'bg-[hsl(40,95%,55%,0.2)] text-[var(--color-warning)] border border-[hsl(40,95%,55%,0.3)]',
        rejected: 'bg-[hsl(0,75%,55%,0.2)] text-[var(--color-error)] border border-[hsl(0,75%,55%,0.3)]',
        info: 'bg-[hsl(200,90%,50%,0.2)] text-[var(--color-info)] border border-[hsl(200,90%,50%,0.3)]',
        neutral: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-bg-tertiary)]',
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
