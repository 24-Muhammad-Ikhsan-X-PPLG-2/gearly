import SettingRow from '@/features/profile/components/SettingsRow';
import ToggleSwitch from '@/features/profile/components/ToggleSwitch';
import { accountDetails } from '@/features/profile/constant';
import { motion } from 'framer-motion';
import {
    Bell,
    CheckCircle2,
    Edit3,
    Lock,
    ShieldCheck,
    User2,
} from 'lucide-react';
import { useState } from 'react';

const Profile = () => {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    return (
        <motion.main
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-4xl">
                <motion.section
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="rounded-4xl border border-slate-200 bg-white px-6 py-8 shadow-sm shadow-slate-200/40 sm:px-8"
                >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-start gap-5">
                            <div className="flex h-20 w-20 items-center justify-center rounded-4xl bg-blue-50 text-blue-700 shadow-sm shadow-slate-200/40">
                                <User2 size={34} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">
                                    Profile
                                </p>
                                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                    Muhammad Rizki
                                </h1>
                                <p className="mt-2 text-sm text-slate-600">
                                    @rizkidev • rizki@email.com
                                </p>
                                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                                    <CheckCircle2 size={16} />
                                    Verified account
                                </div>
                            </div>
                        </div>

                        <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none">
                            <Edit3 size={16} />
                            Edit profile
                        </button>
                    </div>
                </motion.section>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.12 }}
                        className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-900">
                                    Account information
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Your primary profile details, displayed
                                    across Gearly.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 divide-y divide-slate-200 rounded-4xl border border-slate-200 bg-slate-50">
                            {accountDetails.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className="flex items-center gap-4 px-5 py-4 sm:px-6"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white text-slate-700 shadow-sm shadow-slate-200/30">
                                            <Icon size={18} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs tracking-[0.24em] text-slate-500 uppercase">
                                                {item.label}
                                            </p>
                                            <p className="mt-2 truncate text-base font-medium text-slate-900">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.16 }}
                        className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40"
                    >
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">
                                Account settings
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Manage your security and notification
                                preferences.
                            </p>
                        </div>

                        <div className="mt-6 space-y-4">
                            <SettingRow
                                icon={Lock}
                                title="Change password"
                                description="Update your password regularly to keep your account secure."
                                action={
                                    <button className="rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                                        Update
                                    </button>
                                }
                            />

                            <SettingRow
                                icon={ShieldCheck}
                                title="Two-factor authentication"
                                description="Protect your account with an extra verification step."
                                action={
                                    <ToggleSwitch
                                        checked={twoFactorEnabled}
                                        onChange={() =>
                                            setTwoFactorEnabled(
                                                (value) => !value,
                                            )
                                        }
                                    />
                                }
                            />

                            <SettingRow
                                icon={Bell}
                                title="Notification preferences"
                                description="Receive alerts for account activity and marketplace updates."
                                action={
                                    <ToggleSwitch
                                        checked={notificationsEnabled}
                                        onChange={() =>
                                            setNotificationsEnabled(
                                                (value) => !value,
                                            )
                                        }
                                    />
                                }
                            />

                            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-5">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-base font-semibold text-slate-900">
                                            Logout
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-500">
                                            End your session on this device if
                                            you need to switch accounts.
                                        </p>
                                    </div>
                                    <button className="cursor-pointer rounded-3xl bg-slate-900 px-4 py-2 text-sm font-semibold text-nowrap text-white transition hover:bg-slate-800">
                                        Sign out
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </motion.main>
    );
};

export default Profile;
