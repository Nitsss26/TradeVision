import React from 'react';

const Input = ({
    label,
    type = 'text',
    placeholder,
    error,
    helperText,
    icon: Icon,
    className = '',
    ...props
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--color-text-tertiary)]">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <input
                    type={type}
                    className={`
            w-full bg-[var(--color-bg-secondary)] border rounded-md px-4 py-2.5 
            text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)]
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent
            ${Icon ? 'pl-10' : ''}
            ${error
                            ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]'
                            : 'border-[var(--color-bg-tertiary)] hover:border-[var(--color-text-tertiary)]'}
          `}
                    placeholder={placeholder}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1 text-sm text-[var(--color-error)]">{error}</p>
            )}
            {helperText && !error && (
                <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">{helperText}</p>
            )}
        </div>
    );
};

export default Input;
