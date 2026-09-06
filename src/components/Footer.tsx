import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <span className="font-bold text-2xl tracking-widest uppercase block mb-6">
              Theo <span className="text-accent">Garage</span>
            </span>
            <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed">
              Independent Automotive Care, Done Properly. Servicing, diagnostics and repairs from an independent workshop built around straightforward advice, skilled technicians and careful workmanship.
            </p>
            <Link
              href="/book"
              className="inline-block border border-neutral-600 px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Enquire Now
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
              Company
            </h3>
            <ul className="space-y-4 text-neutral-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <a href="mailto:hello@theogarage.demo" className="text-neutral-400 hover:text-white transition-colors text-lg">
                hello@theogarage.demo
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 text-sm text-neutral-500">
          <p>Demonstration business — not a real automotive workshop.</p>
          <p className="mt-4 md:mt-0">
            Concept website created by <a href="https://www.theomedia.co.uk/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white transition-colors font-medium">TheoMedia</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
