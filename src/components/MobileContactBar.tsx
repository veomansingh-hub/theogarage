"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileContactBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Only show after slight scroll to not clutter the initial hero loading state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-[60]"
        >
          <div className="bg-[#111] border border-neutral-800 shadow-2xl rounded-lg overflow-hidden pb-[env(safe-area-inset-bottom)]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-5 py-4 bg-[#1a1a1a] text-white"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-300">
                Talk to TheoMedia UK
              </span>
              {isOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex justify-between items-center px-2 py-3 bg-[#111]">
                    <a 
                      href="tel:+353852258004" 
                      className="flex-1 flex flex-col items-center justify-center py-3 gap-2 text-white hover:text-accent transition-colors active:bg-neutral-800 rounded-md"
                    >
                      <Phone size={20} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Call</span>
                    </a>
                    <a 
                      href="https://wa.me/353852258004" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex flex-col items-center justify-center py-3 gap-2 text-white hover:text-accent transition-colors active:bg-neutral-800 rounded-md"
                    >
                      <MessageCircle size={20} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">WhatsApp</span>
                    </a>
                    <a 
                      href="mailto:hello@theomedia.co.uk" 
                      className="flex-1 flex flex-col items-center justify-center py-3 gap-2 text-white hover:text-accent transition-colors active:bg-neutral-800 rounded-md"
                    >
                      <Mail size={20} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Email</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
