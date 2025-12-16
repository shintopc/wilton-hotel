"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const images = [
    { src: "/images/hero.png", alt: "Grand Lobby" },
    { src: "/images/room.png", alt: "Executive Suite" },
    { src: "/images/shisha.png", alt: "Rooftop Lounge" },
    { src: "/images/room.png", alt: "Royal Suite Bedroom" },
    { src: "/images/hero.png", alt: "Private Entrance" },
    { src: "/images/shisha.png", alt: "Outdoor Terrace" },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue text-center mb-16 uppercase tracking-widest">Gallery</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(img.src)}
                            className="relative aspect-square cursor-pointer overflow-hidden group"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${img.src}')` }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-serif text-lg tracking-wide">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full h-full max-h-[80vh] flex items-center justify-center">
                        <img src={selectedImage} alt="Gallery view" className="max-h-full max-w-full object-contain" />
                    </div>
                    <button className="absolute top-8 right-8 text-white text-4xl">&times;</button>
                </div>
            )}
        </div>
    );
}
