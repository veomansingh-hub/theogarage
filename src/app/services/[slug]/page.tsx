import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight } from "lucide-react";

function ServiceFAQ({ faqs }: { faqs: {q: string, a: string}[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <details key={i} className="group border-b border-border [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between py-6 text-foreground font-bold tracking-wide uppercase">
            {faq.q}
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
            </span>
          </summary>
          <p className="text-muted leading-relaxed pb-6 text-sm">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

const servicesData: Record<string, any> = {
  "servicing": {
    title: "Servicing",
    description: "Routine and manufacturer-scheduled servicing designed to keep vehicles performing at their best.",
    heroImg: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1598972583804-98448eb583ff?q=80&w=1200&auto=format&fit=crop", // Detailed engine bay
    info: "Modern engines require precise maintenance schedules to ensure longevity and efficiency. We use only OEM-approved fluids and filters, ensuring your manufacturer warranty remains completely intact while providing a level of care main dealers rarely match.",
    signs: ["Service light or message is displayed", "Milestone mileage reached (e.g. 60,000 miles)", "Annual check required", "Vehicle feels sluggish or fuel economy has dropped"],
    process: [
      { step: "Initial inspection and diagnostic code read", num: "01" },
      { step: "Oil and filter change with premium approved fluids", num: "02" },
      { step: "Comprehensive visual health check of all components", num: "03" },
      { step: "Service light reset and digital service record updated", num: "04" }
    ],
    faqs: [
      { q: "Will this void my manufacturer warranty?", a: "No. Thanks to Block Exemption regulations, independent garages can service your vehicle without invalidating the warranty, provided OEM quality parts are used." },
      { q: "Do you update digital service records?", a: "Yes, we have authorized access to update digital service histories for BMW, Audi, Mercedes, and most major manufacturers." },
      { q: "How long does a full service take?", a: "A standard routine service typically takes half a day. We will give you a specific timeframe when booking." }
    ],
    related: [{ slug: "mot-preparation", name: "MOT Preparation" }, { slug: "diagnostics", name: "Diagnostics" }]
  },
  "mot-preparation": {
    title: "MOT Preparation",
    description: "Pre-MOT checks and repairs to help get vehicles ready for inspection.",
    heroImg: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop",
    info: "A failed MOT is inconvenient and leaves a permanent mark on your vehicle's history. Our comprehensive pre-MOT inspections identify and resolve common failure points—such as lighting, tyres, and suspension issues—before the official test.",
    signs: ["MOT due within the next 30 days", "Known mechanical issues needing repair first", "Wanting to avoid a failure record on the V5C history", "Combining inspection with an annual service"],
    process: [
      { step: "Comprehensive lights, levels, and safety check", num: "01" },
      { step: "Tyre, brake, and suspension inspection on the ramp", num: "02" },
      { step: "Emissions system visual and diagnostic check", num: "03" },
      { step: "Remedial work completed prior to the formal test", num: "04" }
    ],
    faqs: [
      { q: "Can you carry out the actual MOT test?", a: "We prepare the vehicle and handle the testing process through our trusted testing partners, managing any necessary repairs in-house." },
      { q: "What are the most common MOT failures?", a: "Lighting, suspension, and brake wear account for the vast majority of failures. We check all of these thoroughly." },
      { q: "Should I service the car at the same time?", a: "Yes, combining a service with an MOT is highly recommended as it saves time and ensures the vehicle is in peak condition for the emissions test." }
    ],
    related: [{ slug: "servicing", name: "Servicing" }, { slug: "brakes-suspension", name: "Brakes & Suspension" }]
  },
  "diagnostics": {
    title: "Diagnostics",
    description: "Modern electronic diagnostics to identify faults accurately before unnecessary parts are replaced.",
    heroImg: "https://images.unsplash.com/photo-1625047509168-a7006f815424?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop",
    info: "Modern vehicles are highly complex digital networks. We invest heavily in dealer-level diagnostic equipment and continuous technical training to correctly interpret fault codes, view live data streams, and pinpoint the true root cause of an issue.",
    signs: ["Engine warning light illuminated on the dash", "ABS, airbag, or traction control warnings", "Running issues, misfires, or poor starting", "Vehicle has entered 'Limp Home' mode"],
    process: [
      { step: "Code read using dealer-level diagnostic equipment", num: "01" },
      { step: "Live data analysis during a test drive to monitor sensors", num: "02" },
      { step: "Physical inspection of suspect components and wiring", num: "03" },
      { step: "Clear explanation of the fault and repair estimate", num: "04" }
    ],
    faqs: [
      { q: "Why do you charge a diagnostic fee?", a: "Reading a code is just the start. The fee covers our technician's time and expertise in testing components to ensure we replace only what is actually broken." },
      { q: "Can you diagnose complex electrical faults?", a: "Yes, our technicians are trained in advanced electrical fault finding, including CAN-bus network issues." },
      { q: "Will the warning light go out?", a: "Once the underlying issue is properly repaired, we will clear the fault codes and reset the relevant warning lights." }
    ],
    related: [{ slug: "hybrid-ev", name: "Hybrid & EV" }, { slug: "servicing", name: "Servicing" }]
  },
  "brakes-suspension": {
    title: "Brakes & Suspension",
    description: "Inspection, repair and replacement of braking and suspension components.",
    heroImg: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=1200&auto=format&fit=crop",
    info: "Your vehicle's braking and suspension systems are its most critical safety features. We use premium OEM-quality components to ensure your vehicle stops effectively and handles exactly as the manufacturer intended.",
    signs: ["Squealing, grinding, or scraping noises when braking", "Spongy brake pedal or long travel", "Vehicle pulling to one side under braking", "Knocking sounds over bumps or poor handling"],
    process: [
      { step: "Road test to verify the reported symptoms", num: "01" },
      { step: "Ramp inspection of pads, discs, bushes, and dampers", num: "02" },
      { step: "Detailed report on wear levels and safety implications", num: "03" },
      { step: "Replacement using premium OEM quality parts", num: "04" }
    ],
    faqs: [
      { q: "Do I need to replace pads and discs together?", a: "Not always. Pads wear faster than discs. However, if discs are heavily scored or below the minimum thickness, both must be replaced." },
      { q: "Why does my suspension knock over bumps?", a: "This is usually caused by worn drop links, anti-roll bar bushes, or worn shock absorbers. We can quickly identify the exact component." },
      { q: "Do you use cheap aftermarket parts?", a: "No. We only fit OEM or high-quality equivalent components to ensure safety and reliability." }
    ],
    related: [{ slug: "tyres-wheel-care", name: "Tyres & Wheel Care" }, { slug: "mot-preparation", name: "MOT Preparation" }]
  },
  "air-conditioning": {
    title: "Air Conditioning",
    description: "Air-conditioning inspection, servicing and recharge.",
    heroImg: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop",
    info: "Air conditioning systems lose up to 10% of their refrigerant gas annually. A properly maintained AC system doesn't just cool the cabin in summer; it efficiently demists your windows in winter and filters out external pollutants.",
    signs: ["System is blowing warm or ambient air", "Musty, damp smells coming from the vents", "Windows are not demisting quickly in damp weather", "Noisy compressor operation when the AC is engaged"],
    process: [
      { step: "System pressure check and ultraviolet leak test", num: "01" },
      { step: "Safe recovery of old refrigerant gas", num: "02" },
      { step: "Deep vacuum test and antibacterial system clean", num: "03" },
      { step: "Recharge with the exact correct gas and PAG oil", num: "04" }
    ],
    faqs: [
      { q: "Can you handle the newer R1234yf gas?", a: "Yes, our workshop is fully equipped with dedicated machines for both older R134a and modern R1234yf refrigerants." },
      { q: "Why does my AC smell bad?", a: "Bacteria and mould can build up in the evaporator behind the dashboard. Our antibacterial treatment resolves this completely." },
      { q: "How often should AC be serviced?", a: "Manufacturers generally recommend a full AC service and regas every 2 years." }
    ],
    related: [{ slug: "servicing", name: "Servicing" }]
  },
  "tyres-wheel-care": {
    title: "Tyres & Wheel Care",
    description: "Premium tyre fitting, dynamic balancing and vehicle safety checks.",
    heroImg: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1580436541340-e2b851b3f272?q=80&w=1200&auto=format&fit=crop",
    info: "Tyres are the only contact your vehicle has with the road. We supply and fit premium and mid-range tyres, ensuring they are perfectly balanced to eliminate vibration and protect your suspension components.",
    signs: ["Tread depth approaching the legal 1.6mm limit", "Uneven tyre wear indicating alignment issues", "Vibration through the steering wheel at motorway speeds", "TPMS warnings, punctures or slow leaks"],
    process: [
      { step: "Thorough tread depth and condition check", num: "01" },
      { step: "Careful removal and replacement using rim-safe machines", num: "02" },
      { step: "Computerised dynamic wheel balancing", num: "03" },
      { step: "New valve fitted and wheels secured to correct torque", num: "04" }
    ],
    faqs: [
      { q: "Can you repair a puncture?", a: "Yes, provided the puncture is within the central tread area and the tyre hasn't been driven on while flat. We adhere strictly to British Standards for repairs." },
      { q: "Do you reset Tyre Pressure Monitoring Systems (TPMS)?", a: "Yes, we handle TPMS valve servicing and reset the digital monitoring systems on modern vehicles." },
      { q: "What brand of tyres do you fit?", a: "We supply all major premium brands (Michelin, Pirelli, Continental) as well as excellent mid-range alternatives." }
    ],
    related: [{ slug: "brakes-suspension", name: "Brakes & Suspension" }, { slug: "servicing", name: "Servicing" }]
  },
  "hybrid-ev": {
    title: "Hybrid & EV",
    description: "Maintenance and diagnostic support for modern hybrid and electric vehicles.",
    heroImg: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1605810731557-08b5eb54fa1a?q=80&w=1200&auto=format&fit=crop",
    info: "Electric and hybrid vehicles require specialised knowledge and tooling. Our technicians hold high-voltage qualifications, allowing us to safely service, diagnose, and maintain complex modern drivetrains.",
    signs: ["High voltage system warnings on the dashboard", "Reduced battery range or efficiency", "Cooling system warnings", "Routine scheduled maintenance due"],
    process: [
      { step: "Safe isolation of high-voltage systems if required", num: "01" },
      { step: "Battery health and individual cell balance checks", num: "02" },
      { step: "Coolant and inverter system inspection", num: "03" },
      { step: "Update of digital vehicle records and software checks", num: "04" }
    ],
    faqs: [
      { q: "Do EVs actually need servicing?", a: "Yes. While they have fewer moving parts, EVs require brake fluid changes, coolant checks, cabin filter replacements, and vital high-voltage system inspections." },
      { q: "Are your technicians qualified for high-voltage work?", a: "Yes, our team holds IMI Level 3/4 qualifications for safe working on hybrid and electric vehicles." },
      { q: "Can you diagnose hybrid battery faults?", a: "Yes, our diagnostic equipment can interrogate the Battery Management System to identify specific cell degradation or faults." }
    ],
    related: [{ slug: "diagnostics", name: "Diagnostics" }, { slug: "brakes-suspension", name: "Brakes & Suspension" }]
  },
  "fleet": {
    title: "Fleet Maintenance",
    description: "Reliable servicing and maintenance support for business vehicles.",
    heroImg: "https://images.unsplash.com/photo-1563124508-2e06f5287e07?q=80&w=2000&auto=format&fit=crop",
    storyImg: "https://images.unsplash.com/photo-1621213278964-b7784fb7fb5e?q=80&w=1200&auto=format&fit=crop",
    info: "Vehicle downtime costs your business money. We provide priority, scheduled maintenance for local businesses and commercial fleets, ensuring your vehicles remain safe, compliant, and on the road.",
    signs: ["Managing multiple vehicles requiring maintenance", "Need for predictable running costs and invoicing", "Minimising vehicle downtime is critical", "Struggling to track MOT and service schedules"],
    process: [
      { step: "Dedicated account management and communication", num: "01" },
      { step: "Priority booking system for fleet vehicles", num: "02" },
      { step: "Preventative maintenance planning", num: "03" },
      { step: "Clear, itemised monthly invoicing", num: "04" }
    ],
    faqs: [
      { q: "Do you offer priority turnarounds for commercial vehicles?", a: "Yes, we understand that a van off the road costs you money. We prioritize fleet vehicles to minimize downtime." },
      { q: "Can you track our MOT and service dates?", a: "Absolutely. We maintain a database of your fleet and will notify you well in advance of upcoming compliance dates." },
      { q: "Do you work on light commercial vans?", a: "Yes, our ramps and workshop are perfectly equipped to handle light commercial vehicles including long-wheelbase vans." }
    ],
    related: [{ slug: "servicing", name: "Servicing" }, { slug: "mot-preparation", name: "MOT Preparation" }]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Theo Garage`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) notFound();

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* HERO */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-[#111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImg}
            alt={service.title}
            fill
            priority
            className="object-cover object-center opacity-60 mix-blend-luminosity"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        
        <div className="container relative z-20 mx-auto px-6 max-w-7xl pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase leading-none mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed mb-8">
              {service.description}
            </p>
            <Link
              href="/book"
              className="inline-block bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
            >
              Book this Service
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Visual Story & Info */}
            <div className="space-y-12">
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200">
                <Image
                  src={service.storyImg}
                  alt={`${service.title} Detail`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">Why Trust Us With This</h2>
                <p className="text-muted leading-relaxed text-lg">
                  {service.info}
                </p>
              </div>
            </div>

            {/* Right Column: Signs, Process, FAQ */}
            <div className="space-y-16">
              {/* Signs */}
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Signs You May Need This</h2>
                <ul className="space-y-3">
                  {service.signs.map((sign: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4 p-5 bg-white border border-border">
                      <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground font-medium text-sm leading-snug">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Our 4-Step Process</h2>
                <div className="space-y-4">
                  {service.process.map((p: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="text-2xl font-light text-neutral-300 font-mono shrink-0 group-hover:text-accent transition-colors">
                        {p.num}
                      </div>
                      <div className="text-muted leading-relaxed pb-4 border-b border-border w-full text-sm">
                        {p.step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Common Questions</h2>
                <ServiceFAQ faqs={service.faqs} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA & RELATED SERVICES */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-background p-12 border border-border">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight uppercase leading-none mb-4">
                Ready to book your {service.title} service?
              </h2>
              <p className="text-muted">
                Contact our team to schedule an appointment. We're here to help keep your vehicle running perfectly.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-block shrink-0 bg-foreground text-white px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors text-center"
            >
              Request Appointment
            </Link>
          </div>

          {/* Related Services */}
          <div className="mt-24">
            <h3 className="text-sm font-bold tracking-widest uppercase text-muted mb-6 text-center">Explore Related Services</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {service.related.map((rel: any) => (
                <Link 
                  key={rel.slug} 
                  href={`/services/${rel.slug}`}
                  className="flex items-center gap-2 border border-border bg-white px-6 py-4 text-sm font-bold uppercase tracking-wide hover:border-accent hover:text-accent transition-colors"
                >
                  {rel.name} <ChevronRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
