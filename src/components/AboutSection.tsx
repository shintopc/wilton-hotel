"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <span className="text-royal-blue uppercase tracking-widest text-sm font-bold mb-4 block">Our Story</span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            A Sanctuary of <br /> Luxury & Calm
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                            Nestled in the vibrant heart of Abu Dhabi, Wilton Hotel offers a
                            refined escape where modern elegance meets timeless hospitality.
                            Every detail is curated to ensure your stay is nothing short of exceptional.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                            Whether you are here for business or leisure, our premium rooms
                            and dedicated service provide the perfect backdrop for your journey.
                        </p>
                        <Link href="/about" className="inline-flex items-center text-royal-blue font-bold uppercase tracking-widest hover:text-gold transition-colors group">
                            Read Our Story <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative h-[400px] w-full"
                    >
                        {/* Decorative Image/Block */}
                        <div className="absolute inset-0 bg-royal-blue/10 transform translate-x-4 translate-y-4"></div>
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.png')" }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
