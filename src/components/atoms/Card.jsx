import React from 'react';

const Card = ({
    children,
    className = '',
    hover = false,
    padding = 'p-6',
    ...props
}) => {
    return (
        <div
            className={`
        bg-[var(--color-bg-secondary)] 
        border border-[rgba(255,255,255,0.08)] 
        rounded-lg 
        ${padding}
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[rgba(0,0,0,0.4)] hover:border-[var(--color-primary-500)]/30' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
