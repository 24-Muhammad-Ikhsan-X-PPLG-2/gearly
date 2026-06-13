import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-block"
                        >
                            <div className="flex w-fit items-center space-x-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                                <span className="text-sm font-medium text-blue-700">
                                    Trusted by Thousands of Gamers
                                </span>
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl leading-tight font-bold text-slate-900 md:text-5xl"
                        >
                            Buy & Sell Digital Gaming Products Safely in Seconds
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            variants={itemVariants}
                            className="max-w-lg text-lg leading-relaxed text-slate-600"
                        >
                            Trade game currencies, items, accounts, vouchers,
                            and top-ups with secure escrow protection and
                            instant delivery.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col gap-4 pt-4 sm:flex-row"
                        >
                            <button className="inline-flex cursor-pointer items-center justify-center space-x-2 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                                <span>Start Trading</span>
                                <ArrowRight size={18} />
                            </button>
                            <button className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 px-8 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50">
                                Explore Marketplace
                            </button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-8 border-t border-slate-200 pt-4"
                        >
                            <div>
                                <div className="text-2xl font-bold text-slate-900">
                                    100K+
                                </div>
                                <div className="text-sm text-slate-600">
                                    Transactions
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900">
                                    50K+
                                </div>
                                <div className="text-sm text-slate-600">
                                    Active Users
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900">
                                    99.9%
                                </div>
                                <div className="text-sm text-slate-600">
                                    Success Rate
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative hidden lg:block"
                    >
                        <div className="space-y-4">
                            {/* Featured Card 1 */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <div className="mb-3 flex items-start justify-between">
                                    <div className="flex flex-1 items-center space-x-3">
                                        <div className="h-10 w-10 rounded-lg bg-linear-to-br from-purple-400 to-pink-400" />
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-slate-900">
                                                Mobile Legends Diamonds
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                Seller verified
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-xs text-yellow-500">
                                            ★★★★★
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xl font-bold text-blue-600">
                                            $24.99
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            1,234 sold
                                        </div>
                                    </div>
                                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700">
                                        Buy
                                    </button>
                                </div>
                            </motion.div>

                            {/* Featured Card 2 */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <div className="mb-3 flex items-start justify-between">
                                    <div className="flex flex-1 items-center space-x-3">
                                        <div className="h-10 w-10 rounded-lg bg-linear-to-br from-orange-400 to-red-400" />
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-slate-900">
                                                Free Fire Diamonds
                                            </div>
                                            <div className="text-xs text-slate-500">
                                                Instant delivery
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-xs text-yellow-500">
                                            ★★★★★
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xl font-bold text-blue-600">
                                            $18.99
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            2,156 sold
                                        </div>
                                    </div>
                                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700">
                                        Buy
                                    </button>
                                </div>
                            </motion.div>

                            {/* Stats Card */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="rounded-2xl bg-linear-to-br from-blue-600 to-blue-700 p-4 text-white shadow-lg"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-sm font-medium opacity-90">
                                        Today's Revenue
                                    </span>
                                    <TrendingUp size={18} />
                                </div>
                                <div className="text-2xl font-bold">
                                    $15,234.50
                                </div>
                                <div className="mt-2 text-xs opacity-75">
                                    ↑ 12.5% from yesterday
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
