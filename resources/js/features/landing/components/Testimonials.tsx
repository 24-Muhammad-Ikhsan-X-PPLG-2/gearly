import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Alex Chen',
            username: '@alexgaming',
            avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
            rating: 5,
            review: "Gearly made it so easy to sell my extra game accounts. The escrow system gives me confidence that I'll get paid, and the process is lightning fast.",
            verified: true,
        },
        {
            id: 2,
            name: 'Maria Rodriguez',
            username: '@mariaz',
            avatar: 'bg-gradient-to-br from-pink-400 to-rose-500',
            rating: 5,
            review: "Best marketplace for gaming items I've found. Instant delivery, verified sellers, and amazing customer support. Highly recommended!",
            verified: true,
        },
        {
            id: 3,
            name: 'James Park',
            username: '@jamespark_',
            avatar: 'bg-gradient-to-br from-amber-400 to-orange-500',
            rating: 5,
            review: 'As a seller, Gearly provides the best platform. Safe transactions, fair fees, and a growing user base. Already made good income here.',
            verified: true,
        },
    ];

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
                    className="mb-16 text-center"
                >
                    <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                        What Our Users Say
                    </h2>
                    <p className="mx-auto max-w-2xl text-slate-600">
                        Real stories from real gamers who trust Gearly
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            className="group"
                        >
                            <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:border-slate-200 hover:shadow-lg">
                                {/* Rating */}
                                <div className="mb-4 flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className="fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Review */}
                                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 italic">
                                    "{testimonial.review}"
                                </p>

                                {/* User Info */}
                                <div className="flex items-center space-x-3 border-t border-slate-100 pt-4">
                                    <div
                                        className={`h-10 w-10 ${testimonial.avatar} rounded-full`}
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-1">
                                            <span className="text-sm font-semibold text-slate-900">
                                                {testimonial.name}
                                            </span>
                                            {testimonial.verified && (
                                                <span className="text-blue-600">
                                                    ✓
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-slate-500">
                                            {testimonial.username}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
