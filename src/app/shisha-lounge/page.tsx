"use client";

import { motion } from "framer-motion";

const flavors = [
    { name: "Double Apple", desc: "Classic blend of red and green apples." },
    { name: "Grape Mint", desc: "Refreshing sweet grape with cool mint." },
    { name: "Blueberry Mist", desc: "Sweet blueberry with a hint of citrus." },
    { name: "Lemon Mint", desc: "Zesty lemon with icy mint finish." },
    { name: "Watermelon Chill", desc: "Juicy watermelon with a cool breeze." },
    { name: "Wilton Special", desc: "Our house exclusive secret blend." },
];

export default function ShishaLoungePage() {
    return (
        <div className="bg-[#1A1A1A] text-white min-h-screen">
            {/* Header */}
            <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/shisha.png')" }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold tracking-widest uppercase mb-4">Shisha Lounge</h1>
                </div>
            </div>

            <section className="py-20 container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-serif text-white mb-6"
                    >
                        Relax in Luxury Under the Stars
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-300 leading-relaxed text-lg font-light"
                    >
                        Experience the finest shisha in Abu Dhabi at the Wilton Lounge.
                        Whether you prefer our elegant indoor seating or the breezy outdoor terrace,
                        our expert sommeliers will ensure the perfect preparation for your enjoyment.
                        Accompany your session with our selection of floral teas and gourmet bites.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                        <h3 className="text-2xl font-serif text-gold mb-8 text-center border-b border-white/10 pb-4">Premium Flavors</h3>
                        <ul className="space-y-6">
                            {flavors.slice(0, 3).map((flavor, index) => (
                                <li key={index} className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{flavor.name}</h4>
                                        <p className="text-gray-400 text-sm">{flavor.desc}</p>
                                    </div>
                                    <span className="text-gold font-bold">AED 120</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                        <h3 className="text-2xl font-serif text-gold mb-8 text-center border-b border-white/10 pb-4">Exotic Blends</h3>
                        <ul className="space-y-6">
                            {flavors.slice(3, 6).map((flavor, index) => (
                                <li key={index} className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{flavor.name}</h4>
                                        <p className="text-gray-400 text-sm">{flavor.desc}</p>
                                    </div>
                                    <span className="text-gold font-bold">AED 150</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://wa.me/971501234567?text=I'd like to reserve a table at the Shisha Lounge."
                        target="_blank"
                        className="px-10 py-4 bg-gold text-black uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 rounded-sm"
                    >
                        Reserve a Table
                    </a>
                </div>
            </section>
        </div>
    );
}
