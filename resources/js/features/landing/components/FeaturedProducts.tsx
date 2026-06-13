import { motion } from 'framer-motion';
import { ShoppingCart, Star, TrendingUp } from 'lucide-react';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: 'Mobile Legends Diamond 1000',
            seller: 'ProGamer Store',
            verified: true,
            rating: 4.9,
            sold: 2345,
            price: 24.99,
            image: 'bg-gradient-to-br from-purple-400 to-pink-400',
            badge: 'Top Seller',
        },
        {
            id: 2,
            title: 'Free Fire Diamonds 500',
            seller: 'Swift Deals',
            verified: true,
            rating: 4.8,
            sold: 1892,
            price: 18.99,
            image: 'bg-gradient-to-br from-orange-400 to-red-400',
            badge: 'Best Deal',
        },
        {
            id: 3,
            title: 'PUBG UC 2400',
            seller: 'Gaming Hub',
            verified: true,
            rating: 4.9,
            sold: 1567,
            price: 32.99,
            image: 'bg-gradient-to-br from-blue-400 to-cyan-400',
            badge: 'Trending',
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
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="mb-2 flex items-center space-x-2">
                        <TrendingUp size={20} className="text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">
                            FEATURED
                        </span>
                    </div>
                    <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
                        Trending Products
                    </h2>
                    <p className="text-slate-600">
                        Best-selling items from verified sellers
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:border-slate-200 hover:shadow-lg">
                                {/* Product Image */}
                                <div className="relative h-40 overflow-hidden bg-slate-100">
                                    <div
                                        className={`h-full w-full ${product.image} relative`}
                                    >
                                        {/* Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 shadow-md">
                                                {product.badge}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-4">
                                    <h3 className="mb-2 line-clamp-2 font-semibold text-slate-900">
                                        {product.title}
                                    </h3>

                                    {/* Seller Info */}
                                    <div className="mb-3 flex items-center space-x-2">
                                        <div className="h-5 w-5 rounded-full bg-blue-100" />
                                        <span className="text-xs text-slate-600">
                                            {product.seller}
                                        </span>
                                        {product.verified && (
                                            <span className="font-bold text-blue-600">
                                                ✓
                                            </span>
                                        )}
                                    </div>

                                    {/* Rating & Sold */}
                                    <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                                        <div className="flex items-center space-x-1">
                                            <div className="flex items-center space-x-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        className={
                                                            i < 5
                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                : 'text-slate-300'
                                                        }
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs text-slate-600">
                                                {product.rating}
                                            </span>
                                        </div>
                                        <span className="text-xs text-slate-500">
                                            {product.sold.toLocaleString()} sold
                                        </span>
                                    </div>

                                    {/* Price & Button */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">
                                                ${product.price}
                                            </div>
                                        </div>
                                        <button className="transform rounded-lg bg-blue-600 p-2.5 text-white transition-colors transition-transform group-hover:scale-110 hover:bg-blue-700">
                                            <ShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <button className="rounded-lg border border-blue-600 px-8 py-3 font-medium text-blue-600 transition-colors hover:bg-blue-50">
                        Browse All Products
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
