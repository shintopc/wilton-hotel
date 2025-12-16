"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero_lounge.png')" }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide drop-shadow-lg"
                >
                    WILTON LOUNGE & RESTAURANT
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl font-light mb-10 max-w-2xl text-white/90"
                >
                    Experience premium shisha, gourmet dining, and an atmosphere of pure elegance in Abu Dhabi
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <a
                        href="https://wa.me/971501234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-royal-blue text-white uppercase tracking-widest font-bold hover:bg-gold transition-colors duration-300 border border-royal-blue"
                    >
                        Reserve Table via WhatsApp
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
            >
                <span className="text-sm uppercase tracking-widest mb-2 block text-center">Scroll</span>
                <div className="w-[1px] h-8 bg-white mx-auto"></div>
            </motion.div>
        </section>
    );
}
