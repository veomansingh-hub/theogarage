import Link from "next/link";
import { Phone, MessageCircle, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="font-bold text-2xl tracking-widest uppercase block leading-none">
                Hartwell <span className="text-accent">Motorworks</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase mt-1.5 block">
                Independent Automotive
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed">
              Contemporary independent automotive care. Servicing, diagnostics and repairs built around straightforward advice, skilled technicians and careful workmanship.
            </p>
            <Link
              href="/book"
              className="inline-block border border-neutral-600 px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Book a Service
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold tracking-widest uppercase mb-6 text-neutral-300">
              Services
            </h3>
            <ul className="space-y-4 text-neutral-400">
              <li><Link href="/services/servicing" className="hover:text-white transition-colors">Servicing</Link></li>
              <li><Link href="/services/diagnostics" className="hover:text-white transition-colors">Diagnostics</Link></li>
              <li><Link href="/services/brakes-suspension" className="hover:text-white transition-colors">Brakes & Suspension</Link></li>
              <li><Link href="/services/air-conditioning" className="hover:text-white transition-colors">Air Conditioning</Link></li>
              <li><Link href="/services/hybrid-ev" className="hover:text-white transition-colors">Hybrid & EV</Link></li>
              <li><Link href="/services/fleet" className="hover:text-white transition-colors">Fleet Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-widest uppercase mb-6 text-neutral-300">
              Talk to TheoMedia UK
            </h3>
            <ul className="space-y-4 text-neutral-400 mb-8">
              <li>
                <a href="tel:+353852258004" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} /> +353 85 225 8004
                </a>
              </li>
              <li>
                <a href="https://wa.me/353852258004" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@theomedia.co.uk" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={18} /> Email Us
                </a>
              </li>
              <li>
                <a href="https://www.theomedia.co.uk/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Globe size={18} /> Visit TheoMedia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Hartwell Motorworks. All rights reserved.</p>
          <p>
            <a href="https://www.theomedia.co.uk/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white font-bold tracking-widest uppercase transition-colors">
              BUILT BY THEOMEDIA UK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
