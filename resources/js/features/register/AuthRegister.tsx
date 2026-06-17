import { motion } from 'framer-motion';
import {
    ArrowRight,
    Eye,
    EyeOff,
    Gamepad2,
    Lock,
    Mail,
    User,
    UserCheck,
} from 'lucide-react';
import Google from '@/icons/Google';
import Discord from '@/icons/Discord';
import SocialSignupButton from '@/features/register/components/SocialSignupButton';
import AuthRegisterInput from '@/features/register/components/AuthRegisterInput';
import PasswordStrengthIndicator from '@/features/register/components/PasswordStrengthIndicator';
import SecurityNoticeCard from '@/features/register/components/SecurityNoticeCard';
import BrandPanelRegister from '@/features/register/components/BrandPanelRegister';
import useRegister from './hooks/useRegister';
import { Link } from '@inertiajs/react';

const socialProviders = [
    {
        label: 'Continue with Google',
        icon: Google,
        onClick: () => {
            window.location.href = '/auth/google';
        },
    },
    {
        label: 'Continue with Discord',
        icon: Discord,
        onClick: () => {
            window.location.href = '/auth/discord';
        },
    },
    { label: 'Continue with Steam', icon: Gamepad2, onClick: () => {} },
];

const AuthRegister = () => {
    const {
        form,
        handleSubmit,
        isSubmitting,
        passwordValue,
        setShowConfirm,
        setShowPassword,
        showConfirm,
        showPassword,
    } = useRegister();

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
                <BrandPanelRegister />
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-2xl rounded-4xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-10">
                        <div className="space-y-6">
                            <div className="space-y-2 text-center">
                                <p className="text-sm font-semibold tracking-[0.24em] text-blue-600 uppercase">
                                    Gearly
                                </p>
                                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                                    Create Your Account
                                </h2>
                                <p className="text-sm leading-6 text-slate-600">
                                    Start buying and selling safely on Gearly
                                </p>
                            </div>

                            <div className="grid gap-3">
                                {socialProviders.map((provider) => (
                                    <SocialSignupButton
                                        key={provider.label}
                                        label={provider.label}
                                        icon={provider.icon}
                                        onClick={provider.onClick}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                <span className="h-px flex-1 bg-slate-200" />
                                <span className="font-semibold tracking-[0.22em] uppercase">
                                    Or register with email
                                </span>
                                <span className="h-px flex-1 bg-slate-200" />
                            </div>

                            <form
                                onSubmit={form.handleSubmit(handleSubmit)}
                                className="space-y-5"
                            >
                                <AuthRegisterInput
                                    id="fullName"
                                    label="Full Name"
                                    icon={User}
                                    type="text"
                                    register={form.register}
                                    error={
                                        form.formState.errors.fullName?.message
                                    }
                                />

                                <AuthRegisterInput
                                    id="username"
                                    label="Username"
                                    icon={UserCheck}
                                    type="text"
                                    register={form.register}
                                    error={
                                        form.formState.errors.username?.message
                                    }
                                />

                                <AuthRegisterInput
                                    id="email"
                                    label="Email"
                                    icon={Mail}
                                    type="email"
                                    register={form.register}
                                    error={form.formState.errors.email?.message}
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
                                            {...form.register('password')}
                                            className={`w-full rounded-2xl border px-12 py-3 text-slate-900 transition focus:ring-2 focus:ring-blue-200 focus:outline-none ${
                                                form.formState.errors.password
                                                    ? 'border-red-300 focus:border-red-400'
                                                    : 'border-slate-200 focus:border-blue-500'
                                            }`}
                                            aria-invalid={Boolean(
                                                form.formState.errors.password,
                                            )}
                                            aria-describedby={
                                                form.formState.errors.password
                                                    ? 'password-error'
                                                    : undefined
                                            }
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
                                    {form.formState.errors.password && (
                                        <p
                                            id="password-error"
                                            className="text-xs text-red-600"
                                        >
                                            {
                                                form.formState.errors.password
                                                    .message
                                            }
                                        </p>
                                    )}
                                    {passwordValue && (
                                        <PasswordStrengthIndicator
                                            password={passwordValue}
                                        />
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                            <Lock size={18} />
                                        </div>
                                        <input
                                            id="confirmPassword"
                                            type={
                                                showConfirm
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            {...form.register(
                                                'confirmPassword',
                                            )}
                                            className={`w-full rounded-2xl border px-12 py-3 text-slate-900 transition focus:ring-2 focus:ring-blue-200 focus:outline-none ${
                                                form.formState.errors
                                                    .confirmPassword
                                                    ? 'border-red-300 focus:border-red-400'
                                                    : 'border-slate-200 focus:border-blue-500'
                                            }`}
                                            aria-invalid={Boolean(
                                                form.formState.errors
                                                    .confirmPassword,
                                            )}
                                            aria-describedby={
                                                form.formState.errors
                                                    .confirmPassword
                                                    ? 'confirmPassword-error'
                                                    : undefined
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirm(
                                                    (current) => !current,
                                                )
                                            }
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500 transition hover:text-slate-900"
                                            aria-label={
                                                showConfirm
                                                    ? 'Hide password'
                                                    : 'Show password'
                                            }
                                        >
                                            {showConfirm ? (
                                                <EyeOff size={18} />
                                            ) : (
                                                <Eye size={18} />
                                            )}
                                        </button>
                                    </div>
                                    {form.formState.errors.confirmPassword && (
                                        <p
                                            id="confirmPassword-error"
                                            className="text-xs text-red-600"
                                        >
                                            {
                                                form.formState.errors
                                                    .confirmPassword.message
                                            }
                                        </p>
                                    )}
                                </div>

                                <label className="inline-flex items-start gap-3 text-sm text-slate-700">
                                    <input
                                        type="checkbox"
                                        {...form.register('acceptTerms')}
                                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        aria-invalid={Boolean(
                                            form.formState.errors.acceptTerms,
                                        )}
                                    />
                                    <span>
                                        I agree to the{' '}
                                        <button
                                            type="button"
                                            className="font-semibold text-blue-600 transition hover:text-blue-700"
                                        >
                                            Terms of Service
                                        </button>{' '}
                                        and{' '}
                                        <button
                                            type="button"
                                            className="font-semibold text-blue-600 transition hover:text-blue-700"
                                        >
                                            Privacy Policy
                                        </button>
                                    </span>
                                </label>
                                {form.formState.errors.acceptTerms && (
                                    <p className="text-xs text-red-600">
                                        {
                                            form.formState.errors.acceptTerms
                                                .message
                                        }
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-300"
                                >
                                    {isSubmitting
                                        ? 'Creating Account...'
                                        : 'Create Account'}
                                    <ArrowRight size={18} />
                                </button>
                            </form>

                            <SecurityNoticeCard />

                            <div className="text-center text-sm text-slate-500">
                                Already have an account?{' '}
                                <Link
                                    href={'/auth/signin'}
                                    className="font-semibold text-blue-600 transition hover:text-blue-700"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AuthRegister;
