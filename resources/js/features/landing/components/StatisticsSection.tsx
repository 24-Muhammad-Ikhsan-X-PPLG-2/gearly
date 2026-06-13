import { motion } from 'framer-motion';

const StatisticsSection = () => {
    const stats = [
        {
            value: '100K+',
            label: 'Transactions',
            color: 'from-blue-600 to-blue-700',
        },
        {
            value: '50K+',
            label: 'Active Users',
            color: 'from-purple-600 to-purple-700',
        },
        {
            value: '5K+',
            label: 'Sellers',
            color: 'from-emerald-600 to-green-700',
        },
        {
            value: '99.9%',
            label: 'Success Rate',
            color: 'from-amber-500 to-amber-600',
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="bg-slate-900 py-16 text-white md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-3 text-3xl font-bold md:text-4xl">
                        Trusted by Thousands Worldwide
                    </h2>
                    <p className="mx-auto max-w-2xl text-slate-400">
                        Gearly continues to grow as the leading digital
                        marketplace for gamers
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-4"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className="group"
                        >
                            <div
                                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-center transition-shadow hover:shadow-2xl`}
                            >
                                <motion.div
                                    className="mb-2 text-5xl font-bold"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="font-medium text-white/80">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatisticsSection;
