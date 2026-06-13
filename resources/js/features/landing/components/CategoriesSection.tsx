import { motion } from 'framer-motion';
import {
    Gamepad2,
    Flame,
    Crosshair,
    Zap,
    Sparkles,
    Box,
    Wallet,
    Trophy,
} from 'lucide-react';

const CategoriesSection = () => {
    const categories = [
        { icon: Gamepad2, name: 'Mobile Legends', count: '2,345' },
        { icon: Flame, name: 'Free Fire', count: '1,892' },
        { icon: Crosshair, name: 'PUBG Mobile', count: '1,567' },
        { icon: Zap, name: 'Valorant', count: '1,234' },
        { icon: Sparkles, name: 'Genshin Impact', count: '945' },
        { icon: Box, name: 'Roblox', count: '1,123' },
        { icon: Wallet, name: 'Steam Wallet', count: '856' },
        { icon: Trophy, name: 'PlayStation', count: '678' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
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
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center md:text-left"
                >
                    <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                        Popular Categories
                    </h2>
                    <p className="max-w-2xl text-slate-600">
                        Browse the most popular games and digital products on
                        Gearly
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.name}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                className="group cursor-pointer"
                            >
                                <div className="h-full rounded-xl border border-slate-100 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-lg">
                                    <div className="mb-4 inline-flex rounded-lg bg-blue-50 p-3 transition-colors group-hover:bg-blue-100">
                                        <Icon
                                            className="text-blue-600"
                                            size={24}
                                        />
                                    </div>
                                    <h3 className="mb-1 font-semibold text-slate-900">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        {category.count} products
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default CategoriesSection;
