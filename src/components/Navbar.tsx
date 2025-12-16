"use strict";
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Shisha Lounge", href: "/shisha-lounge" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-4 text-royal-blue"
                    : "bg-transparent py-6 text-white"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative h-16 w-32 md:w-40">
                    <img
                        src="/images/logo.png"
                        alt="Wilton Hotel"
                        className="w-full h-full object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm uppercase tracking-widest hover:text-gold transition-colors font-medium",
                                isScrolled ? "text-gray-800" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/971501234567" // Placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-royal-blue text-white text-sm uppercase tracking-widest font-bold hover:bg-gold transition-colors duration-300"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 bg-white z-40 pt-24 px-8"
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-royal-blue hover:text-gold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/971501234567"
                                className="inline-block mt-4 px-8 py-3 bg-royal-blue text-white uppercase tracking-widest font-bold"
                            >
                                Book Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
