"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do I need to know exactly what's wrong?",
    answer: "Not at all. If you are experiencing a warning light, unusual noise, or a change in how the vehicle drives, simply describe the symptoms. Our technicians will diagnose the underlying issue and explain the recommended repair."
  },
  {
    question: "Can you service newer vehicles?",
    answer: "Yes. We have access to manufacturer service schedules, digital service records, and modern diagnostic equipment. Servicing your new vehicle with us will not invalidate your manufacturer warranty."
  },
  {
    question: "Do you work on hybrid and electric cars?",
    answer: "Yes, our workshop is equipped to handle modern hybrid and electric vehicles, with technicians trained in high-voltage systems maintenance and diagnostics."
  },
  {
    question: "Can I request an estimate first?",
    answer: "Absolutely. We provide clear, itemised estimates before proceeding with any work. You are always in control of what happens to your vehicle."
  },
  {
    question: "How long does servicing normally take?",
    answer: "A standard routine service typically takes half a day. However, we will give you a specific timeframe when you book, depending on your vehicle and the type of service required."
  },
  {
    question: "Can businesses enquire about fleet maintenance?",
    answer: "Yes. We provide priority booking, clear invoicing, and scheduled maintenance for local business fleets. Please contact us directly to discuss your requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-border">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
          >
            <span className="text-lg font-bold tracking-wide uppercase text-foreground">
              {faq.question}
            </span>
            <span className="ml-6 flex-shrink-0 text-accent">
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
