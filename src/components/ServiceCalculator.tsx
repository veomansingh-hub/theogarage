"use client";

import { useState } from "react";
import { Check, Clock, ShieldCheck, ArrowRight, Wrench } from "lucide-react";
import Link from "next/link";

const vehicleTypes = [
  { id: "german", label: "German Executive", desc: "BMW, Audi, Mercedes-Benz, Porsche" },
  { id: "british", label: "British Luxury", desc: "Land Rover, Jaguar, Aston Martin" },
  { id: "japanese", label: "Japanese Precision", desc: "Lexus, Toyota, Honda, Nissan" },
  { id: "hybrid-ev", label: "Hybrid & EV", desc: "Fully Electric & Plug-in Hybrid Powertrains" },
];

const serviceLevels = [
  {
    id: "interim",
    title: "Interim Service",
    duration: "1.5 - 2 Hours",
    interval: "Every 6 Months / 6,000 Miles",
    items: [
      "Engine oil drain & refresh to manufacturer specification",
      "OEM-specification oil filter replacement",
      "35-point safety, fluid, brake & suspension check",
      "Tyre tread depth & pressure check across all wheels",
      "Diagnostic scan for active fault codes",
      "Service indicator reset & record entry"
    ]
  },
  {
    id: "full",
    title: "Full Service",
    duration: "3 - 4 Hours",
    interval: "Every 12 Months / 12,000 Miles",
    items: [
      "Everything in Interim Service plus full vehicle check",
      "Air filter replacement with OEM component",
      "Pollen / cabin air filter replacement",
      "Comprehensive brake disc & pad thickness measurement",
      "Underbody, exhaust & steering joint inspection",
      "Coolant & brake fluid moisture content test",
      "Battery health & charging system diagnostic test"
    ]
  },
  {
    id: "major",
    title: "Major Service",
    duration: "4 - 5 Hours",
    interval: "Every 24 Months / 24,000 Miles",
    items: [
      "Everything in Full Service plus deep component renewal",
      "Spark plug replacement (petrol) / Fuel filter replacement (diesel)",
      "Brake fluid flush & pressure bleed",
      "Transmission & differential fluid check",
      "Auxiliary belt condition inspection",
      "Full 4-wheel geometry alignment check",
      "Detailed written health check report provided"
    ]
  }
];

export default function ServiceCalculator() {
  const [selectedVehicle, setSelectedVehicle] = useState("german");
  const [selectedService, setSelectedService] = useState("full");

  const currentService = serviceLevels.find(s => s.id === selectedService) || serviceLevels[1];

  return (
    <div className="bg-[#111] text-white p-8 md:p-14 border border-neutral-800 shadow-2xl">
      <div className="mb-10 text-center md:text-left">
        <div className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-3">
          Interactive Scope Calculator
        </div>
        <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
          Select Your Vehicle & Service Scope
        </h3>
        <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-2xl">
          Preview the itemised checklist and manufacturer specifications for your vehicle before booking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Selectors */}
        <div className="lg:col-span-5 space-y-8">
          {/* Vehicle Type Selection */}
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">
              1. Select Vehicle Category
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {vehicleTypes.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(v.id)}
                  className={`p-4 border text-left transition-all duration-300 min-h-[44px] ${
                    selectedVehicle === v.id
                      ? "border-accent bg-accent/10 text-white"
                      : "border-neutral-800 bg-neutral-900/50 text-neutral-300 hover:border-neutral-700"
                  }`}
                >
                  <div className="font-bold text-sm uppercase tracking-wide">{v.label}</div>
                  <div className="text-xs text-neutral-400 mt-1">{v.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Level Selection */}
          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-3">
              2. Select Service Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {serviceLevels.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`py-3 px-2 border text-center transition-all duration-300 text-xs font-bold uppercase tracking-wider min-h-[44px] ${
                    selectedService === s.id
                      ? "border-accent bg-accent text-white"
                      : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {s.title.replace(" Service", "")}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Output Scope Checklist */}
        <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 p-6 md:p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4 mb-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-1">
                  Scope Overview
                </span>
                <h4 className="text-xl font-bold uppercase tracking-wide text-white">
                  {currentService.title}
                </h4>
              </div>
              <div className="flex items-center gap-4 text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 border border-neutral-700">
                  <Clock size={14} className="text-accent" /> {currentService.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-neutral-800 px-3 py-1.5 border border-neutral-700">
                  <ShieldCheck size={14} className="text-accent" /> OEM Spec
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 uppercase tracking-wider mb-6 font-semibold">
              Recommended Interval: <span className="text-white">{currentService.interval}</span>
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {currentService.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              Exact fluid specifications & filters confirmed upon vehicle registration lookup.
            </div>
            <Link
              href="/book"
              className="bg-white text-black px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-colors flex items-center gap-2 shrink-0 min-h-[44px]"
            >
              Book This Scope <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
