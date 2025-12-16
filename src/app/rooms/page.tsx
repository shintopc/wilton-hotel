"use client";

import { motion } from "framer-motion";
import { Wifi, Coffee, Maximize, Check } from "lucide-react";

const rooms = [
    {
        id: 1,
        name: "Deluxe King Room",
        price: "AED 450",
        image: "/images/room.png",
        description: "A spacious retreat featuring a plush king-sized bed, modern amenities, and a stunning view of the city skyline.",
        features: ["45m²", "King Bed", "City View", "Free Wi-Fi", "Smart TV"]
    },
    {
        id: 2,
        name: "Executive Suite",
        price: "AED 750",
        image: "/images/room.png",
        description: "Elevate your stay with our Executive Suite, offering a separate living area, premium lounge access, and sea views.",
        features: ["65m²", "Lounge Access", "Sea View", "Nespresso Machine", "Bathtub"]
    },
    {
        id: 3,
        name: "Royal Suite",
        price: "AED 1200",
        image: "/images/room.png",
        description: "The epitome of luxury. Our Royal Suite boasts a dining area, panoramic floor-to-ceiling windows, and butler service.",
        features: ["120m²", "Dining Area", "Panoramic View", "Butler Service", "Jacuzzi"]
    },
    {
        id: 4,
        name: "Twin Guest Room",
        price: "AED 400",
        image: "/images/room.png",
        description: "Perfect for friends or family, offering two comfortable twin beds and all essential luxury amenities.",
        features: ["40m²", "Twin Beds", "City View", "Work Desk", "Rain Shower"]
    }
];

export default function RoomsPage() {
    return (
        <div className="bg-light-gray min-h-screen">
            {/* Header */}
            <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/room.png')" }}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-widest uppercase">Rooms & Suites</h1>
                </div>
            </div>

            <section className="py-20 container mx-auto px-4 md:px-8">
                <div className="space-y-12">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row"
                        >
                            <div className="md:w-2/5 h-64 md:h-auto relative">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700" style={{ backgroundImage: `url('${room.image}')` }}></div>
                            </div>
                            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-royal-blue">{room.name}</h3>
                                    <span className="text-xl font-bold text-gold">{room.price} <span className="text-sm text-gray-400 font-normal">/ night</span></span>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>

                                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
                                    {room.features.map((feature, i) => (
                                        <div key={i} className="flex items-center text-sm text-gray-500">
                                            <Check size={16} className="text-gold mr-2" /> {feature}
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={`https://wa.me/971501234567?text=I'm interested in booking the ${room.name}`}
                                    target="_blank"
                                    className="self-start px-8 py-3 bg-royal-blue text-white uppercase tracking-widest font-bold hover:bg-gold transition-colors"
                                >
                                    Book This Room
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
