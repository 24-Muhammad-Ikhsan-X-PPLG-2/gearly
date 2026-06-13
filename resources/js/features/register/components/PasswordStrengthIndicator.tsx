import { calculatePasswordStrength } from '../lib/utils';
import { motion } from 'motion/react';

const PasswordStrengthIndicator = ({ password }: { password: string }) => {
    const { strength, percentage } = calculatePasswordStrength(password);

    const strengthColors = {
        weak: 'bg-red-500',
        medium: 'bg-yellow-500',
        strong: 'bg-emerald-500',
    };

    return (
        <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                        className={`h-full ${strengthColors[strength]}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <span
                    className={`text-xs font-semibold ${
                        strength === 'weak'
                            ? 'text-red-600'
                            : strength === 'medium'
                              ? 'text-yellow-600'
                              : 'text-emerald-600'
                    }`}
                >
                    {strength.charAt(0).toUpperCase() + strength.slice(1)}
                </span>
            </div>
        </div>
    );
};

export default PasswordStrengthIndicator;
