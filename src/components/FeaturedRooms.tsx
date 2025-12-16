"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wifi, Coffee, Maximize } from "lucide-react";

const rooms = [
    {
        id: 1,
        name: "Deluxe King Room",
        price: "AED 450",
        image: "/images/room.png",
        features: ["45m²", "King Bed", "City View"]
    },
    {
        id: 2,
        name: "Executive Suite",
        price: "AED 750",
        image: "/images/room.png",
        features: ["65m²", "Lounge Access", "Sea View"]
    },
    {
        id: 3,
        name: "Royal Suite",
        price: "AED 1200",
        image: "/images/room.png",
        features: ["120m²", "Dining Area", "Panoramic View"]
    }
];

export default function FeaturedRooms() {
    return (
        <section className="py-20 bg-light-gray">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-royal-blue uppercase tracking-widest text-sm font-bold mb-4 block">Accommodation</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">Rooms & Suites</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${room.image}')` }}
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-serif text-2xl font-bold text-royal-blue">{room.name}</h3>
                                </div>
                                <div className="flex space-x-4 mb-6 text-gray-500 text-sm">
                                    {room.features.map((feature, i) => (
                                        <span key={i} className="border-r last:border-0 border-gray-300 pr-4 last:pr-0">{feature}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                                    <span className="text-xl font-bold text-gold">{room.price} <span className="text-xs text-gray-400 font-normal">/ night</span></span>
                                    <a href={`https://wa.me/971501234567?text=I'm interested in the ${room.name}`} target="_blank" className="text-royal-blue font-bold uppercase text-sm tracking-wide hover:text-gold transition-colors">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/rooms" className="inline-flex items-center bg-transparent border border-royal-blue text-royal-blue px-8 py-3 uppercase tracking-widest font-bold hover:bg-royal-blue hover:text-white transition-colors duration-300">
                        View All Rooms
                    </Link>
                </div>
            </div>
        </section>
    );
}
