"use strict";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/971501234567?text=Hello,%20I%20would%20like%20to%20book%20a%20room%20at%20Wilton%20Hotel."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group flex items-center justify-center"
            aria-label="Book via WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap group-hover:pl-3 font-semibold">
                Book Now
            </span>
        </a>
    );
}
