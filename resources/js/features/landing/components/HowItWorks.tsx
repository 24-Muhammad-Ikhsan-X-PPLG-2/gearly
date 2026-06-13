import { motion } from 'framer-motion';
import { Search, ShoppingBag, Lock, Gift } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Search,
            title: 'Browse Products',
            description: 'Explore thousands of items from verified sellers',
            number: '01',
        },
        {
            icon: ShoppingBag,
            title: 'Place Order',
            description: 'Select and securely complete your purchase',
            number: '02',
        },
        {
            icon: Lock,
            title: 'Secure Payment',
            description: 'Your payment is protected with escrow',
            number: '03',
        },
        {
            icon: Gift,
            title: 'Receive Instantly',
            description: 'Get your items delivered immediately',
            number: '04',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                        How It Works
                    </h2>
                    <p className="mx-auto max-w-2xl text-slate-600">
                        Simple, fast, and secure transaction process
                    </p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-4 md:gap-0"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.number}
                                variants={itemVariants}
                                className="relative"
                            >
                                <div className="flex flex-col items-center md:items-center">
                                    {/* Step Card */}
                                    <div className="relative z-10 mb-6 md:mb-8">
                                        <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all hover:border-blue-200 hover:shadow-lg">
                                            <div className="absolute top-0 right-0 translate-x-3 -translate-y-3">
                                                <span className="flex inline-block h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                                                    {step.number}
                                                </span>
                                            </div>

                                            <div className="mb-4 inline-block rounded-xl bg-blue-50 p-3">
                                                <Icon
                                                    className="text-blue-600"
                                                    size={28}
                                                />
                                            </div>

                                            <h3 className="mb-2 font-semibold text-slate-900">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-600">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connector Line */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-24 left-1/2 hidden h-1 w-full bg-gradient-to-r from-blue-200 to-transparent md:block" />
                                    )}

                                    {/* Vertical Line for Mobile */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-24 left-1/2 h-16 w-0.5 bg-gradient-to-b from-blue-200 to-transparent md:hidden" />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <button className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                        Get Started Now
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
