"use strict";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-royal-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="relative h-20 w-40 mb-6">
                            <img
                                src="/images/logo.png"
                                alt="Wilton Hotel"
                                className="w-full h-full object-contain object-left"
                            />
                        </div>
                        <p className="text-white/80 leading-relaxed mb-6">
                            Experience the clear difference of luxury and comfort in the heart of Abu Dhabi.
                            Modern elegance meets traditional hospitality.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="font-serif text-lg text-gold mb-6 tracking-widest">EXPLORE</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-white/80 hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/rooms" className="text-white/80 hover:text-gold transition-colors">Rooms & Suites</Link></li>
                            <li><Link href="/shisha-lounge" className="text-white/80 hover:text-gold transition-colors">Shisha Lounge</Link></li>
                            <li><Link href="/gallery" className="text-white/80 hover:text-gold transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-2">
                        <h3 className="font-serif text-lg text-gold mb-6 tracking-widest">CONTACT</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-4">
                                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-white/80">
                                    Wilton Hotel, Navy Gate, Abu Dhabi, UAE
                                </span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="text-gold shrink-0" size={20} />
                                <span className="text-white/80">+971 2 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="text-gold shrink-0" size={20} />
                                <span className="text-white/80">info@wiltonhotel.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} Wilton Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
