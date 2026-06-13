import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SellerCTA = () => {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white md:p-16"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mb-4 text-3xl font-bold md:text-4xl"
                        >
                            Start Selling on Gearly Today
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mb-8 text-lg text-blue-100"
                        >
                            Reach thousands of gamers and grow your digital
                            business. Join our community of successful sellers
                            earning consistent income.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <button className="inline-flex transform items-center justify-center space-x-2 rounded-lg bg-white px-8 py-3 font-medium text-blue-600 transition-colors transition-transform hover:scale-105 hover:bg-blue-50">
                                <span>Become a Seller</span>
                                <ArrowRight size={18} />
                            </button>
                            <button className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white/10">
                                Learn More
                            </button>
                        </motion.div>

                        {/* Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-8 sm:flex-row"
                        >
                            <div>
                                <div className="text-2xl font-bold">0%</div>
                                <div className="text-sm text-blue-100">
                                    Setup Fee
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">
                                    Instant
                                </div>
                                <div className="text-sm text-blue-100">
                                    Payouts
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">24/7</div>
                                <div className="text-sm text-blue-100">
                                    Support
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SellerCTA;
