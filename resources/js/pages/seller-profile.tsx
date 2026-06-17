import { motion } from 'framer-motion';
import {
    AtSign,
    Bell,
    CheckCircle2,
    Edit3,
    Lock,
    LogOut,
    ShieldAlert,
    ShoppingBag,
    Store,
    User2,
} from 'lucide-react';
import { useState, type ComponentType, type ReactNode } from 'react';

const storeDetails = [
    { label: 'Store name', value: 'Diamond Store' },
    {
        label: 'Store description',
        value: 'Secure digital currency and top-up store with fast delivery and verified seller protection.',
    },
    { label: 'Join date', value: 'January 2025' },
    { label: 'Store URL', value: 'gearly.com/store/diamondstore' },
    { label: 'Store category', value: 'Game Currency & Top Up' },
];

const accountDetails = [
    { label: 'Full name', value: 'Muhammad Rizki', icon: User2 },
    { label: 'Email address', value: 'rizki@email.com', icon: AtSign },
    { label: 'Phone number', value: '+62 812-3456-7890', icon: Bell },
    { label: 'Member since', value: 'August 2024', icon: CheckCircle2 },
];

const stats = [
    { label: 'Active Products', value: '128' },
    { label: 'Total Sales', value: '15,240' },
    { label: 'Followers', value: '2,345' },
    { label: 'Rating', value: '4.9/5' },
];

const SellerProfile = () => {
    const [vacationMode, setVacationMode] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const verificationStatus: string = 'Not verified';

    return (
        <motion.main
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-4xl space-y-6">
                <motion.section
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 }}
                    className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40"
                >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-20 w-20 items-center justify-center rounded-4xl bg-blue-50 text-blue-700 shadow-sm shadow-slate-200/30">
                                <Store size={34} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">
                                    Seller profile
                                </p>
                                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                                    Diamond Store
                                </h1>
                                <p className="mt-2 text-sm text-slate-600">
                                    @diamondstore
                                </p>
                                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                                    <CheckCircle2 size={16} /> Verified seller
                                </div>
                            </div>
                        </div>

                        <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-blue-600 px-5 py-3 text-sm font-semibold text-nowrap text-white transition hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none">
                            <Edit3 size={16} />
                            Edit store
                        </button>
                    </div>
                </motion.section>

                <div className="grid gap-6 lg:grid-cols-2">
                    <motion.section
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <Card
                            title="Store information"
                            description="Key store details for buyers and search."
                        >
                            <div className="space-y-4">
                                {storeDetails.map((item, index) => (
                                    <div
                                        key={item.label}
                                        className={`rounded-3xl bg-slate-50 p-4 ${index < storeDetails.length - 1 ? 'border-b border-slate-200' : ''}`}
                                    >
                                        <p className="text-xs tracking-[0.24em] text-slate-500 uppercase">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-700">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: 0.12 }}
                                    className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/30"
                                >
                                    <p className="text-sm font-semibold text-slate-500">
                                        {stat.label}
                                    </p>
                                    <p className="mt-4 text-3xl font-semibold text-slate-900">
                                        {stat.value}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    <div className="space-y-6">
                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.14 }}
                            className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        Account information
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Manage the contact details associated
                                        with your seller account.
                                    </p>
                                </div>
                                <button className="cursor-pointer rounded-3xl bg-blue-600 px-4 py-2 text-sm font-semibold text-nowrap text-white transition hover:bg-blue-700">
                                    Edit account
                                </button>
                            </div>

                            <div className="mt-6 space-y-4">
                                {accountDetails.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-start gap-4 rounded-3xl bg-slate-50 p-4"
                                    >
                                        <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-white text-slate-700 shadow-sm shadow-slate-200/30">
                                            <item.icon size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs tracking-[0.24em] text-slate-500 uppercase">
                                                {item.label}
                                            </p>
                                            <p className="mt-2 text-sm font-medium text-slate-900">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.16 }}
                            className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        Verification
                                    </h2>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        Current identity verification status for
                                        your store.
                                    </p>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-nowrap text-slate-700">
                                    <ShieldAlert
                                        size={16}
                                        className={
                                            verificationStatus === 'Verified'
                                                ? 'text-emerald-600'
                                                : 'text-amber-600'
                                        }
                                    />
                                    {verificationStatus}
                                </div>
                            </div>

                            <div className="mt-6 rounded-4xl border border-slate-200 bg-slate-50 p-5">
                                <p className="text-sm font-medium text-slate-900">
                                    Identity verification
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Verified sellers have stronger trust signals
                                    for buyers and faster checkout flow.
                                </p>
                                {verificationStatus !== 'Verified' ? (
                                    <button className="mt-5 w-full cursor-pointer rounded-3xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                                        Verify now
                                    </button>
                                ) : null}
                            </div>
                        </motion.section>
                    </div>
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.18 }}
                    className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40"
                >
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Store settings
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                            Toggle store behavior and account preferences.
                        </p>
                    </div>

                    <div className="mt-6 space-y-4">
                        <SettingRow
                            icon={ShoppingBag}
                            title="Vacation mode"
                            description="Temporarily hide products from buyers while you’re away."
                            action={
                                <ToggleSwitch
                                    checked={vacationMode}
                                    onChange={() =>
                                        setVacationMode((state) => !state)
                                    }
                                />
                            }
                            status={vacationMode ? 'Active' : 'Disabled'}
                        />

                        <SettingRow
                            icon={Bell}
                            title="Notification preferences"
                            description="Receive order and store updates instantly."
                            action={
                                <ToggleSwitch
                                    checked={notificationsEnabled}
                                    onChange={() =>
                                        setNotificationsEnabled(
                                            (state) => !state,
                                        )
                                    }
                                />
                            }
                            status={
                                notificationsEnabled ? 'Enabled' : 'Disabled'
                            }
                        />

                        <SettingRow
                            icon={Lock}
                            title="Change password"
                            description="Update your password regularly to keep your account secure."
                            action={
                                <button className="cursor-pointer rounded-3xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                                    Change
                                </button>
                            }
                        />

                        <div className="rounded-4xl border border-rose-200 bg-rose-50 p-5">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-base font-semibold text-rose-900">
                                        Logout
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-rose-700">
                                        End your seller session on this device.
                                    </p>
                                </div>
                                <button className="rounded-3xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700">
                                    <LogOut size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.main>
    );
};

interface CardProps {
    title: string;
    description: string;
    children: ReactNode;
}

const Card = ({ title, description, children }: CardProps) => (
    <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h2 className="text-lg font-semibold text-slate-900">
                    {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                </p>
            </div>
        </div>
        <div className="mt-6">{children}</div>
    </div>
);

interface SettingRowProps {
    icon: ComponentType<{ size?: number }>;
    title: string;
    description: string;
    action: ReactNode;
    status?: string;
}

const SettingRow = ({
    icon: Icon,
    title,
    description,
    action,
    status,
}: SettingRowProps) => (
    <div className="rounded-4xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-white text-slate-700 shadow-sm shadow-slate-200/30">
                    <Icon size={18} />
                </div>
                <div>
                    <p className="text-base font-semibold text-slate-900">
                        {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {status ? (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-slate-600 uppercase">
                        {status}
                    </span>
                ) : null}
                {action}
            </div>
        </div>
    </div>
);

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
}

const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => (
    <button
        type="button"
        onClick={onChange}
        className={`relative inline-flex h-9 w-16 flex-shrink-0 items-center rounded-full transition-colors duration-200 ${
            checked ? 'bg-blue-600' : 'bg-slate-300'
        } cursor-pointer`}
        aria-pressed={checked}
    >
        <span className="sr-only">Toggle setting</span>
        <span
            className={`inline-block h-7 w-7 transform rounded-full bg-white shadow transition duration-200 ${
                checked ? 'translate-x-7' : 'translate-x-1'
            }`}
        />
    </button>
);

export default SellerProfile;
