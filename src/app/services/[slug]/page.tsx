import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight } from "lucide-react";

function ServiceFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group border-b border-border [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer select-none items-center justify-between py-5 text-foreground font-semibold text-sm tracking-wide uppercase gap-4 min-h-[44px]">
            <span>{faq.q}</span>
            <span className="shrink-0 transition-transform duration-300 group-open:rotate-180">
              <svg
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="text-muted leading-relaxed pb-6 text-sm pr-8">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

// ─── SERVICE DATA ─────────────────────────────────────────────────────────────
// Each entry is self-contained. ctaTitle drives the final CTA headline.
// info text avoids fictional credentials — it describes what a real workshop
// page would communicate, staying immersive without inventing certifications.
// ─────────────────────────────────────────────────────────────────────────────

const servicesData: Record<
  string,
  {
    title: string;
    description: string;
    heroImg: string;
    heroPosition?: string;
    storyImg: string;
    storyPosition?: string;
    info: string;
    signs: string[];
    process: { step: string; num: string }[];
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    related: { slug: string; name: string }[];
  }
> = {
  servicing: {
    title: "Servicing",
    description:
      "Routine and manufacturer-scheduled servicing to keep your vehicle performing at its best.",
    heroImg:
      "https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center center",
    storyImg:
      "https://images.unsplash.com/photo-1598972583804-98448eb583ff?q=80&w=1200&auto=format&fit=crop",
    info: "Modern engines require precise maintenance at the right intervals using the right materials. A quality workshop will use manufacturer-specification fluids and filters and provide a clear record of the work completed — giving customers full confidence in the service history their vehicle carries.",
    signs: [
      "Service light or reminder message is displayed",
      "Milestone mileage reached (e.g. 10,000 / 20,000 miles)",
      "Annual check is due regardless of mileage",
      "Fuel economy has noticeably dropped",
    ],
    process: [
      { step: "Diagnostic code read and initial health inspection", num: "01" },
      { step: "Oil and filter change using the correct specification fluid", num: "02" },
      { step: "Full visual inspection of all key systems and components", num: "03" },
      { step: "Service light reset and detailed report issued", num: "04" },
    ],
    faqs: [
      {
        q: "Does independent servicing affect my manufacturer warranty?",
        a: "Under Block Exemption regulations, having your vehicle serviced by a qualified independent garage does not invalidate a manufacturer warranty, provided the correct specification parts and fluids are used and a proper service record is kept.",
      },
      {
        q: "Can my digital service history be updated?",
        a: "Many premium workshops now have access to manufacturer digital service portals, allowing service records to be updated correctly. This is something to confirm with your workshop at the time of booking.",
      },
      {
        q: "How long does a full service take?",
        a: "A routine service typically takes between two and four hours depending on vehicle and service type. Your workshop should confirm the expected duration when you book.",
      },
    ],
    ctaTitle: "Is your next service due?",
    related: [
      { slug: "mot-preparation", name: "MOT Preparation" },
      { slug: "diagnostics", name: "Diagnostics" },
    ],
  },

  "mot-preparation": {
    title: "MOT Preparation",
    description:
      "Pre-MOT inspections and repairs to help your vehicle pass first time.",
    heroImg:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center 40%",
    storyImg:
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=1200&auto=format&fit=crop",
    info: "A failed MOT is inconvenient and leaves a record in your vehicle's history. A thorough pre-MOT inspection identifies common failure points — lighting, tyres, brakes, suspension, emissions — and addresses them before the official test, giving your vehicle the best chance of passing first time.",
    signs: [
      "MOT is due within the next 30 days",
      "Known issues that should be fixed before the test",
      "You want to avoid a failure appearing in the vehicle's history",
      "Combining the MOT with an annual service visit",
    ],
    process: [
      { step: "Comprehensive safety check: lights, fluids, wipers and horn", num: "01" },
      { step: "Ramp inspection of tyres, brakes and suspension components", num: "02" },
      { step: "Emissions system visual and sensor check", num: "03" },
      { step: "Remedial work completed and vehicle presented for test", num: "04" },
    ],
    faqs: [
      {
        q: "What are the most common MOT failure points?",
        a: "Lighting faults, tyre condition and depth, brake wear, and suspension component deterioration account for the majority of failures. A good pre-inspection will identify all of these in advance.",
      },
      {
        q: "Should I service the car at the same time as the MOT?",
        a: "Combining a service with an MOT is highly recommended. Fresh oil and filters help emissions figures, and any worn components found during the service can be dealt with before the test.",
      },
      {
        q: "Can you handle repairs found during the inspection?",
        a: "Yes. Any issues identified during the pre-MOT inspection can be quoted for and repaired in the same visit, avoiding the cost and inconvenience of a second booking.",
      },
    ],
    ctaTitle: "Is your MOT coming up?",
    related: [
      { slug: "servicing", name: "Servicing" },
      { slug: "brakes-suspension", name: "Brakes & Suspension" },
    ],
  },

  diagnostics: {
    title: "Diagnostics",
    description:
      "Modern electronic diagnostics to find the true cause of a fault before any parts are replaced.",
    heroImg:
      "https://images.unsplash.com/photo-1625047509168-a7006f815424?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center 60%",
    storyImg:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1200&auto=format&fit=crop",
    info: "Modern vehicles are highly complex networks of electronic control units. Professional diagnostic work goes far beyond reading a fault code — it involves interpreting live sensor data, understanding how systems interact, and physically testing components to confirm the root cause before anything is replaced.",
    signs: [
      "Engine management or emissions warning light is illuminated",
      "ABS, airbag, or traction control warnings on the dashboard",
      "Vehicle is misfiring, running rough, or failing to start",
      "Vehicle has entered a reduced-performance or limp mode",
    ],
    process: [
      { step: "Full fault code read across all vehicle systems", num: "01" },
      { step: "Live data monitoring during road test to replicate the fault", num: "02" },
      { step: "Physical inspection of suspect wiring, sensors and components", num: "03" },
      { step: "Clear written explanation of the fault and a repair estimate", num: "04" },
    ],
    faqs: [
      {
        q: "Why is there a diagnostic charge?",
        a: "Reading a code takes seconds — understanding what that code actually means, and why, can take an hour or more. The diagnostic fee covers the technician's time and expertise, not just the equipment.",
      },
      {
        q: "Will the warning light disappear after the repair?",
        a: "Once the underlying fault is correctly repaired, the relevant warning light can be cleared and should not return unless the problem recurs.",
      },
      {
        q: "Can complex electrical faults be traced?",
        a: "Professional diagnostic workshops are equipped to trace complex network faults, including issues with CAN-bus communication, signal wiring, and module programming.",
      },
    ],
    ctaTitle: "Ready to find out what's wrong?",
    related: [
      { slug: "servicing", name: "Servicing" },
      { slug: "hybrid-ev", name: "Hybrid & EV" },
    ],
  },

  "brakes-suspension": {
    title: "Brakes & Suspension",
    description:
      "Inspection, repair and replacement of braking and suspension systems — your vehicle's most critical safety components.",
    heroImg:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center 30%",
    storyImg:
      "https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1200&auto=format&fit=crop",
    info: "Your braking and suspension systems are not areas to compromise on. Worn components don't just fail MOT inspections — they affect stopping distances and handling in ways that matter most in an emergency. Quality replacement parts and correct fitment make a tangible difference to how your vehicle drives.",
    signs: [
      "Squealing, grinding or scraping when braking",
      "Brake pedal feels soft, spongy or requires more travel than usual",
      "Vehicle pulling to one side under braking",
      "Knocking or clunking sounds from suspension over bumps",
    ],
    process: [
      { step: "Road test to confirm and assess the reported symptoms", num: "01" },
      { step: "Ramp inspection of pads, discs, callipers, and suspension joints", num: "02" },
      { step: "Written report detailing wear levels and safety status", num: "03" },
      { step: "Replacement using quality components, torqued to specification", num: "04" },
    ],
    faqs: [
      {
        q: "Do I always need to replace pads and discs together?",
        a: "Not always. Pads wear faster than discs. However, if discs are heavily scored, warped or below the manufacturer's minimum thickness, replacing both at the same time is the correct approach.",
      },
      {
        q: "What causes a knocking sound from the suspension?",
        a: "Knocking over bumps is commonly caused by worn drop links, anti-roll bar bushes, or failing shock absorbers. A proper inspection on the ramp will identify the exact component.",
      },
      {
        q: "How do I know if my brakes are safe enough to drive on?",
        a: "If you notice increased stopping distances, vibration through the pedal, or any grinding noise, the vehicle should be inspected promptly. These symptoms indicate components that need attention.",
      },
    ],
    ctaTitle: "Concerned about your brakes or suspension?",
    related: [
      { slug: "tyres-wheel-care", name: "Tyres & Wheel Care" },
      { slug: "mot-preparation", name: "MOT Preparation" },
    ],
  },

  "air-conditioning": {
    title: "Air Conditioning",
    description:
      "Air conditioning inspection, regas and repair — for a system that works properly year-round.",
    heroImg:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center center",
    storyImg:
      "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=1200&auto=format&fit=crop",
    info: "Air conditioning systems lose refrigerant gas naturally over time — typically around 10% per year. A properly maintained system does far more than cool the cabin in summer: it demists windows efficiently in winter and filters external pollutants. Regular servicing keeps the system running correctly and extends component life.",
    signs: [
      "System blowing ambient air instead of cool air",
      "Musty or damp smell coming from the vents when the AC is on",
      "Windows taking longer than usual to demist in wet weather",
      "Noisy or intermittent compressor operation",
    ],
    process: [
      { step: "System pressure check and ultraviolet leak detection", num: "01" },
      { step: "Safe recovery and disposal of existing refrigerant", num: "02" },
      { step: "Deep vacuum test and antibacterial system treatment", num: "03" },
      { step: "Recharge to the correct gas weight and PAG oil specification", num: "04" },
    ],
    faqs: [
      {
        q: "Does it matter which refrigerant gas is used?",
        a: "Yes. Most vehicles built after 2017 use R1234yf rather than the older R134a. Using the correct gas is essential. A quality workshop will have dedicated equipment for both types.",
      },
      {
        q: "Why does my air conditioning smell bad?",
        a: "Bacteria and mould build up in the evaporator behind the dashboard when the system is not used regularly. An antibacterial treatment as part of a regas will resolve this.",
      },
      {
        q: "How often should AC be serviced?",
        a: "Most manufacturers recommend an air conditioning service every two years to maintain efficiency and refrigerant levels.",
      },
    ],
    ctaTitle: "Ready to get your air conditioning working properly?",
    related: [
      { slug: "servicing", name: "Servicing" },
      { slug: "diagnostics", name: "Diagnostics" },
    ],
  },

  "tyres-wheel-care": {
    title: "Tyres & Wheel Care",
    description:
      "Tyre fitting, dynamic balancing and wheel safety checks — your only contact with the road.",
    heroImg:
      "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center center",
    storyImg:
      "https://images.unsplash.com/photo-1580436541340-e2b851b3f272?q=80&w=1200&auto=format&fit=crop",
    info: "Tyres are the only contact point between your vehicle and the road. Tread depth, pressure, condition and balance all directly affect braking, handling and fuel consumption. Tyres that are worn unevenly or incorrectly balanced cause unnecessary wear on suspension and steering components, costing more in the long run.",
    signs: [
      "Tread depth approaching the 1.6mm legal minimum",
      "Uneven wear pattern visible across the tyre face",
      "Vibration through the steering wheel at motorway speeds",
      "TPMS warning light, puncture or unexplained pressure loss",
    ],
    process: [
      { step: "Tread depth, sidewall condition and pressure check across all four", num: "01" },
      { step: "Careful removal using rim-safe machinery", num: "02" },
      { step: "Computerised dynamic balancing to eliminate vibration", num: "03" },
      { step: "New valve fitted and wheels torqued to manufacturer specification", num: "04" },
    ],
    faqs: [
      {
        q: "When can a puncture be repaired rather than replaced?",
        a: "A tyre can be safely repaired if the puncture is within the central three-quarter area of the tread and the tyre has not been run flat. British Standard BSAU 159 defines the safe repair zone.",
      },
      {
        q: "Do you handle Tyre Pressure Monitoring System (TPMS) sensors?",
        a: "Yes. TPMS valve service and sensor reset is part of a proper tyre replacement on vehicles fitted with the system.",
      },
      {
        q: "Which brands of tyre do you recommend?",
        a: "Premium brands such as Michelin, Continental and Pirelli offer the best combination of safety and longevity. Mid-range alternatives from brands like Falken and Hankook also perform well and represent good value.",
      },
    ],
    ctaTitle: "Time to check your tyres?",
    related: [
      { slug: "brakes-suspension", name: "Brakes & Suspension" },
      { slug: "mot-preparation", name: "MOT Preparation" },
    ],
  },

  "hybrid-ev": {
    title: "Hybrid & EV",
    description:
      "Specialist maintenance and diagnostics for hybrid and fully electric vehicles.",
    heroImg:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center center",
    storyImg:
      "https://images.unsplash.com/photo-1605810731557-08b5eb54fa1a?q=80&w=1200&auto=format&fit=crop",
    info: "Hybrid and electric vehicles require technicians with specific high-voltage training and the correct equipment to work safely on their systems. Beyond the powertrain, EVs and hybrids still require regular brake fluid changes, cabin filter replacements, coolant system checks, and tyre care — work that any well-equipped independent workshop should provide.",
    signs: [
      "High-voltage system warning or battery health alert on the dashboard",
      "Reduced electric range or noticeably declining efficiency",
      "Cooling system warnings or temperature irregularities",
      "Routine service interval reached",
    ],
    process: [
      { step: "Safe high-voltage system isolation where required", num: "01" },
      { step: "Battery management system health and cell-balance check", num: "02" },
      { step: "Thermal management and coolant circuit inspection", num: "03" },
      { step: "Full report on battery condition and recommended next steps", num: "04" },
    ],
    faqs: [
      {
        q: "Do EVs actually need regular servicing?",
        a: "Yes. While electric vehicles have fewer moving parts, they still require brake fluid changes, cabin air filter replacements, coolant system maintenance, tyre care, and periodic checks of the high-voltage system.",
      },
      {
        q: "What qualifications do technicians need to work on EVs?",
        a: "Working safely on high-voltage systems requires specific training — typically IMI Level 2 or Level 3 Electric/Hybrid Vehicle qualification. Always confirm your workshop's technician holds the relevant certification.",
      },
      {
        q: "Can hybrid battery faults be diagnosed independently?",
        a: "Professional diagnostic equipment can interrogate the Battery Management System to identify individual cell issues, capacity degradation and fault codes — without requiring a main dealer visit.",
      },
    ],
    ctaTitle: "Ready to book your Hybrid or EV service?",
    related: [
      { slug: "diagnostics", name: "Diagnostics" },
      { slug: "servicing", name: "Servicing" },
    ],
  },

  fleet: {
    title: "Fleet Maintenance",
    description:
      "Scheduled servicing, compliance and maintenance management for business vehicles.",
    heroImg:
      "https://images.unsplash.com/photo-1563124508-2e06f5287e07?q=80&w=2000&auto=format&fit=crop",
    heroPosition: "center center",
    storyImg:
      "https://images.unsplash.com/photo-1621213278964-b7784fb7fb5e?q=80&w=1200&auto=format&fit=crop",
    info: "Vehicle downtime is a direct cost to any business. A well-run fleet maintenance programme keeps vehicles roadworthy, tracks MOT and service dates proactively, and provides clear, consolidated invoicing. A quality independent workshop can offer the responsiveness and personal communication that larger chains rarely match.",
    signs: [
      "Managing multiple vehicles with different service intervals",
      "Needing predictable maintenance costs and clear invoicing",
      "Vehicle downtime is disrupting your operations",
      "MOT and service dates are difficult to track across your fleet",
    ],
    process: [
      { step: "Fleet assessment and maintenance schedule planning", num: "01" },
      { step: "Priority booking system to minimise vehicle downtime", num: "02" },
      { step: "Proactive reminders for MOT and service due dates", num: "03" },
      { step: "Clear monthly invoicing with full work records", num: "04" },
    ],
    faqs: [
      {
        q: "Can you turn around commercial vehicles quickly?",
        a: "Fleet vehicles benefit from priority scheduling. A good workshop understands that a van off the road has a direct cost to your business and will plan accordingly.",
      },
      {
        q: "Do you track MOT and service dates on our behalf?",
        a: "Proactive fleet management includes tracking upcoming compliance dates and notifying the account manager well in advance — reducing the risk of vehicles going out of test.",
      },
      {
        q: "Do you work on light commercial vehicles?",
        a: "Yes. Workshop ramps and equipment should comfortably accommodate light commercial vehicles including standard and long-wheelbase vans.",
      },
    ],
    ctaTitle: "Looking to simplify your fleet maintenance?",
    related: [
      { slug: "servicing", name: "Servicing" },
      { slug: "mot-preparation", name: "MOT Preparation" },
    ],
  },
};

// ─── METADATA ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: "Service Not Found | Theo Garage" };
  return {
    title: `${service.title} | Theo Garage`,
    description: service.description,
  };
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[480px] flex items-center bg-[#111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImg}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-60 mix-blend-luminosity"
            style={{ objectPosition: service.heroPosition ?? "center center" }}
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>

        <div className="container relative z-20 mx-auto px-6 max-w-7xl pt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
              Theo Garage
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase leading-none mb-5">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-neutral-300 max-w-xl leading-relaxed mb-8">
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

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — image + context */}
            <div className="space-y-10">
              <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200 group">
                <Image
                  src={service.storyImg}
                  alt={`${service.title} — detail`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ objectPosition: service.storyPosition ?? "center center" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
                  What a quality workshop provides
                </h2>
                <p className="text-muted leading-relaxed">{service.info}</p>
              </div>
            </div>

            {/* Right — signs, process, FAQs */}
            <div className="space-y-14">

              {/* Signs */}
              <div>
                <h2 className="text-xl font-bold uppercase tracking-wide mb-5">
                  Signs You May Need This
                </h2>
                <ul className="space-y-3">
                  {service.signs.map((sign, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white border border-border"
                    >
                      <CheckCircle2
                        className="text-accent shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-foreground text-sm leading-snug">
                        {sign}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-xl font-bold uppercase tracking-wide mb-5">
                  How It Works
                </h2>
                <div className="space-y-0">
                  {service.process.map((p, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-6 group border-b border-border pb-5 mb-5 last:border-b-0 last:mb-0 last:pb-0"
                    >
                      <div className="text-2xl font-light text-neutral-300 font-mono shrink-0 group-hover:text-accent transition-colors leading-none pt-0.5">
                        {p.num}
                      </div>
                      <div className="text-muted text-sm leading-relaxed pt-0.5">
                        {p.step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-xl font-bold uppercase tracking-wide mb-2">
                  Common Questions
                </h2>
                <ServiceFAQ faqs={service.faqs} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#111] text-white py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase leading-tight mb-4">
                {service.ctaTitle}
              </h2>
              <p className="text-neutral-400">
                Use our simple booking form to request an appointment. We will confirm your
                preferred date and any further details.
              </p>
            </div>
            <Link
              href="/book"
              className="shrink-0 inline-block bg-white text-black px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-colors text-center"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h3 className="text-xs font-bold tracking-widest uppercase text-muted mb-8">
            Explore Related Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {service.related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="flex items-center gap-2 border border-border bg-white px-6 py-4 text-sm font-bold uppercase tracking-wide hover:border-accent hover:text-accent transition-colors min-h-[44px]"
              >
                {rel.name} <ChevronRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
