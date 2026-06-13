import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#' },
        { label: 'Categories', href: '#' },
        { label: 'Marketplace', href: '#' },
        { label: 'Top Up', href: '#' },
        { label: 'Sell', href: '#' },
        { label: 'Help Center', href: '#' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
                            <span className="text-lg font-bold text-white">
                                G
                            </span>
                        </div>
                        <span className="text-lg font-bold text-slate-900">
                            Gearly
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-1 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-4 py-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden items-center space-x-3 md:flex">
                        <button className="px-4 py-2 text-sm text-slate-600 transition-colors hover:text-slate-900">
                            Sign In
                        </button>
                        <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                            Register
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 space-y-2 pb-4 md:hidden"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block rounded-lg px-4 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="space-y-2 border-t border-slate-100 pt-2">
                            <button className="w-full rounded-lg px-4 py-2 text-left text-sm text-slate-600 transition-colors hover:bg-slate-100">
                                Sign In
                            </button>
                            <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                                Register
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
