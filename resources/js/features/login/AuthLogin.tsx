import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, Gamepad2, Lock, Mail } from 'lucide-react';
import Discord from '@/icons/Discord';
import Google from '@/icons/Google';
import SocialLoginButton from '@/features/login/components/SocialLoginButtons';
import AuthInput from '@/features/login/components/AuthInput';
import SecurityNoticeCard from '@/features/login/components/SecurityNoticeCard';
import BrandPanel from '@/features/login/components/BrandPanel';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginScheme, LoginSchemeType } from '@/features/login/scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';

const socialProviders = [
    { label: 'Continue with Google', icon: Google },
    { label: 'Continue with Discord', icon: Discord },
    { label: 'Continue with Steam', icon: Gamepad2 },
];

const AuthLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginSchemeType>({
        resolver: zodResolver(LoginScheme),
        defaultValues: {
            email: '',
            password: '',
            remember: false,
        },
        mode: 'onChange',
    });
    const handleLogin: SubmitHandler<LoginSchemeType> = async (data) => {
        router.post('/auth/signin', data);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative min-h-screen overflow-hidden bg-slate-50 px-4 py-10 sm:px-6"
        >
            <div
                className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-blue-100 to-transparent"
                aria-hidden="true"
            />
            <div className="relative mx-auto grid max-w-7xl gap-10 xl:grid-cols-[0.95fr_1fr] xl:gap-16">
                <BrandPanel />
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-xl rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10">
                        <div className="space-y-6">
                            <div className="space-y-2 text-center">
                                <p className="text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
                                    Gearly
                                </p>
                                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                                    Welcome Back
                                </h2>
                                <p className="text-sm leading-6 text-slate-600">
                                    Sign in to continue trading on Gearly
                                </p>
                            </div>

                            <div className="grid gap-3">
                                {socialProviders.map((provider) => (
                                    <SocialLoginButton
                                        key={provider.label}
                                        label={provider.label}
                                        icon={provider.icon}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                <span className="h-px flex-1 bg-slate-200" />
                                <span className="font-semibold tracking-[0.22em] uppercase">
                                    Or continue with email
                                </span>
                                <span className="h-px flex-1 bg-slate-200" />
                            </div>

                            <form
                                onSubmit={handleSubmit(handleLogin)}
                                className="space-y-5"
                            >
                                <AuthInput
                                    id="email"
                                    label="Email"
                                    icon={Mail}
                                    type="email"
                                    error={errors.email?.message}
                                    {...register('email')}
                                />
                                <div className="space-y-2">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            id="password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            className={`w-full rounded-2xl border px-12 py-3 text-slate-900 transition focus:ring-2 focus:ring-blue-200 focus:outline-none ${
                                                errors.password
                                                    ? 'border-red-300 focus:border-red-400'
                                                    : 'border-slate-200 focus:border-blue-500'
                                            }`}
                                            aria-invalid={Boolean(
                                                errors.password,
                                            )}
                                            aria-describedby={
                                                errors.password
                                                    ? 'password-error'
                                                    : undefined
                                            }
                                            {...register('password')}
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    (current) => !current,
                                                )
                                            }
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 transition hover:text-slate-900"
                                            aria-label={
                                                showPassword
                                                    ? 'Hide password'
                                                    : 'Show password'
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p
                                            id="password-error"
                                            className="text-xs text-red-600"
                                        >
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                            {...register('remember')}
                                        />
                                        Remember me
                                    </label>
                                    <button
                                        type="button"
                                        className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-300"
                                >
                                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                                    <ArrowRight size={18} />
                                </button>
                            </form>

                            <SecurityNoticeCard />

                            <div className="text-center text-sm text-slate-500">
                                Don&apos;t have an account?{' '}
                                <button
                                    type="button"
                                    className="font-semibold text-blue-600 transition hover:text-blue-700"
                                >
                                    Create account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AuthLogin;
