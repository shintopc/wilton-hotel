"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-royal-blue mb-4 uppercase tracking-widest">Contact Us</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We are at your service. For bookings, inquiries, or special requests, please do not hesitate to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-light-gray p-8 md:p-12 rounded-lg shadow-sm">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif text-royal-blue mb-6">Get in Touch</h3>

                        <div className="flex items-start space-x-4">
                            <MapPin className="text-gold mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-1">Address</h4>
                                <p className="text-gray-600">Wilton Hotel, Navy Gate<br />Abu Dhabi, United Arab Emirates</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Phone className="text-gold mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-1">Phone</h4>
                                <p className="text-gray-600">+971 2 123 4567</p>
                                <p className="text-gray-500 text-sm">Everyday: 24 Hours</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <Mail className="text-gold mt-1 shrink-0" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-1">Email</h4>
                                <p className="text-gray-600">reservations@wiltonhotel.com</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <a
                                href="https://wa.me/971501234567"
                                target="_blank"
                                className="inline-block w-full text-center px-8 py-4 bg-royal-blue text-white uppercase tracking-widest font-bold hover:bg-gold transition-colors"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px] w-full rounded-lg overflow-hidden relative shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58066.820542385415!2d54.3662973!3d24.4752538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e65f37d5707bb%3A0xe54955b234160a28!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
