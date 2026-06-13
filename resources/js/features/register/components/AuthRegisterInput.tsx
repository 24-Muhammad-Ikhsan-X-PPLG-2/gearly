import { ComponentType, ReactNode } from 'react';
import { RegisterFormData } from '../scheme';

const AuthRegisterInput = ({
    id,
    label,
    icon: Icon,
    type,
    register,
    error,
    children,
}: {
    id: keyof RegisterFormData;
    label: string;
    icon: ComponentType<any>;
    type: string;
    register: any;
    error?: string;
    children?: ReactNode;
}) => {
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="text-sm font-medium text-slate-700">
                {label}
            </label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Icon size={18} />
                </div>
                <input
                    id={id}
                    type={type}
                    {...register(id)}
                    className={`w-full rounded-2xl border px-12 py-3 text-slate-900 transition focus:ring-2 focus:ring-blue-200 focus:outline-none ${
                        error
                            ? 'border-red-300 focus:border-red-400'
                            : 'border-slate-200 focus:border-blue-500'
                    }`}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                />
                {children}
            </div>
            {error && (
                <p id={`${id}-error`} className="text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
};

export default AuthRegisterInput;
