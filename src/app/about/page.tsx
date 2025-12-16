"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-widest uppercase">About Us</h1>
                </div>
            </div>

            {/* Content */}
            <section className="py-20 container mx-auto px-4 md:px-8 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-serif text-royal-blue mb-8">Our Heritage of Hospitality</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Since opening our doors, Wilton Hotel has redefined luxury living in Abu Dhabi.
                        Our philosophy is simple: to provide a sanctuary where every guest feels like royalty.
                        From our bespoke interiors designed by world-renowned architects to our culinary
                        masterpieces, every aspect of Wilton is crafted for perfection.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Located in the prestigious Navy Gate district, we offer unparalleled access to
                        the city's business hubs and leisure attractions, while maintaining an atmosphere
                        of complete serenity.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-serif text-gold mb-2">5-Star Luxury</h3>
                            <p className="text-gray-500">Certified premium hospitality standards.</p>
                        </div>
                        <div className="p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-serif text-gold mb-2">Prime Location</h3>
                            <p className="text-gray-500">Minutes from downtown and attractions.</p>
                        </div>
                        <div className="p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-serif text-gold mb-2">24/7 Service</h3>
                            <p className="text-gray-500">Round-the-clock concierge and dining.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
