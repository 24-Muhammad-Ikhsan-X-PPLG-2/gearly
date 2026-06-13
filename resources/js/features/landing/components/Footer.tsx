import { motion } from 'framer-motion';
import Instagram from '@/icons/Instagram';
import Facebook from '@/icons/Facebook';
import X from '@/icons/X';
import Linkedin from '@/icons/Linkedin';

const Footer = () => {
    const footerSections = [
        {
            title: 'Marketplace',
            links: ['Browse Products', 'Top Up', 'Sell Items', 'Mobile App'],
        },
        {
            title: 'Company',
            links: ['About Us', 'Careers', 'Blog', 'Press'],
        },
        {
            title: 'Support',
            links: [
                'Help Center',
                'Contact Us',
                'Terms of Service',
                'Privacy Policy',
            ],
        },
        {
            title: 'Sellers',
            links: [
                'Seller Dashboard',
                'Seller Guidelines',
                'Become a Seller',
                'Seller Resources',
            ],
        },
    ];

    const socialLinks = [
        { icon: Facebook, label: 'Facebook' },
        { icon: X, label: 'X' },
        { icon: Instagram, label: 'Instagram' },
        { icon: Linkedin, label: 'LinkedIn' },
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
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="mx-auto max-w-7xl px-6">
                {/* Main Footer Content */}
                <div className="border-b border-slate-800 py-16 md:py-24">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-8 md:grid-cols-5"
                    >
                        {/* Brand */}
                        <motion.div
                            variants={itemVariants}
                            className="md:col-span-1"
                        >
                            <div className="mb-6 flex items-center space-x-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                                    <span className="text-lg font-bold text-white">
                                        G
                                    </span>
                                </div>
                                <span className="text-lg font-bold text-white">
                                    Gearly
                                </span>
                            </div>
                            <p className="mb-6 text-sm text-slate-400">
                                The safest marketplace for buying and selling
                                digital gaming products.
                            </p>
                            {/* Social Links */}
                            <div className="flex items-center space-x-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.button
                                            key={social.label}
                                            whileHover={{ scale: 1.2 }}
                                            className="rounded-lg bg-slate-800 p-2 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white"
                                        >
                                            <Icon size={18} />
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Footer Links */}
                        {footerSections.map((section) => (
                            <motion.div
                                key={section.title}
                                variants={itemVariants}
                            >
                                <h4 className="mb-4 font-semibold text-white">
                                    {section.title}
                                </h4>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-sm text-slate-400 transition-colors hover:text-white"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-between py-8 md:flex-row"
                >
                    <div className="mb-4 text-sm text-slate-500 md:mb-0">
                        © 2026 Gearly. All rights reserved. | Built for gamers,
                        by gamers.
                    </div>
                    <div className="flex items-center space-x-6 text-xs text-slate-500">
                        <a
                            href="#"
                            className="transition-colors hover:text-slate-300"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-slate-300"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-slate-300"
                        >
                            Cookies
                        </a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
