"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShishaDiningPreview() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                {/* Shisha Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 h-[500px] w-full relative overflow-hidden rounded-lg shadow-xl"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-1000"
                            style={{ backgroundImage: "url('/images/shisha.png')" }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <span className="text-royal-blue uppercase tracking-widest text-sm font-bold mb-4 block">Rooftop Lounge</span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Premium Shisha <br /> Under the Stars
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                            Unwind in our exclusive rooftop lounge, featuring the finest selection of premium shisha flavors.
                            Enjoy the breathtaking skyline views of Abu Dhabi in an atmosphere of pure elegance and relaxation.
                        </p>
                        <Link href="/shisha-lounge" className="inline-flex items-center text-royal-blue font-bold uppercase tracking-widest hover:text-gold transition-colors group">
                            Explore Our Lounge <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </motion.div>
                </div>

                {/* Dining Section */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 h-[500px] w-full relative overflow-hidden rounded-lg shadow-xl"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-1000"
                            style={{ backgroundImage: "url('/images/food.png')" }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <span className="text-royal-blue uppercase tracking-widest text-sm font-bold mb-4 block">Gourmet Dining</span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            A Culinary <br /> Journey
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                            Indulge your senses with our variety of international and local cuisines.
                            From exquisite grilled platters to delicate mezze, our chefs craft every dish
                            to perfection using the finest ingredients.
                        </p>
                        <a
                            href="https://wa.me/971501234567?text=I'd like to see the dining menu."
                            target="_blank"
                            className="inline-flex items-center text-royal-blue font-bold uppercase tracking-widest hover:text-gold transition-colors group"
                        >
                            View Menu on WhatsApp <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
