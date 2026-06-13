import { motion } from 'framer-motion';
import { Lock, Zap, CheckCircle } from 'lucide-react';

const WhyChooseGearly = () => {
    const features = [
        {
            icon: Lock,
            title: 'Secure Escrow',
            description:
                'Funds protected until transaction completion. Your payment is safe with our industry-leading escrow system.',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: Zap,
            title: 'Instant Delivery',
            description:
                'Automated delivery system ensures you receive your items within minutes. No waiting, no delays.',
            color: 'from-yellow-400 to-amber-500',
        },
        {
            icon: CheckCircle,
            title: 'Verified Sellers',
            description:
                'Trusted seller verification process. Buy with confidence from verified and reviewed merchants.',
            color: 'from-emerald-500 to-green-600',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                        Why Choose Gearly?
                    </h2>
                    <p className="mx-auto max-w-2xl text-slate-600">
                        Everything you need for safe and secure digital
                        marketplace transactions
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-3"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className="group"
                            >
                                <div className="relative">
                                    {/* Icon Container */}
                                    <div
                                        className={`inline-flex bg-gradient-to-br p-4 ${feature.color} mb-6 rounded-2xl transition-transform group-hover:scale-110`}
                                    >
                                        <Icon
                                            className="text-white"
                                            size={32}
                                        />
                                    </div>

                                    {/* Card */}
                                    <div className="rounded-xl border border-slate-100 bg-white p-6 transition-all hover:border-slate-200 hover:shadow-lg">
                                        <h3 className="mb-2 text-lg font-semibold text-slate-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-slate-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseGearly;
