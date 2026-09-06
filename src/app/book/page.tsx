"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft, Calendar, Car, Wrench, User, FileText, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    reg: "",
    serviceType: "",
    date: "",
    name: "",
    phone: "",
    email: "",
    notes: ""
  });

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 6));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const steps = [
    { num: 1, title: "Vehicle", icon: <Car size={18} /> },
    { num: 2, title: "Service", icon: <Wrench size={18} /> },
    { num: 3, title: "Date", icon: <Calendar size={18} /> },
    { num: 4, title: "Details", icon: <User size={18} /> },
    { num: 5, title: "Info", icon: <FileText size={18} /> },
    { num: 6, title: "Review", icon: <CheckSquare size={18} /> },
  ];

  if (isSuccess) {
    return (
      <div className="pt-32 pb-32 min-h-[80vh] flex items-center justify-center bg-background">
        <div className="max-w-md text-center px-6">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight mb-4">Demo Booking Request Completed</h1>
          <p className="text-muted leading-relaxed mb-8">
            Thank you, {formData.name}. We have received your booking request for your vehicle ({formData.reg.toUpperCase() || "Registration Not Provided"}). This is a demonstration flow — no real appointment has been made.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="border border-border bg-white text-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-50 transition-colors"
            >
              Return Home
            </Link>
            <a
              href="https://www.theomedia.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-black transition-colors"
            >
              Talk to TheoMedia UK
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none mb-4">
            Book a Service
          </h1>
          <p className="text-muted text-lg">
            Complete the form below to request an appointment. We will contact you to confirm details.
          </p>
        </div>

        {/* Progress Bar (Desktop & Mobile) */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-neutral-200 z-0" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-accent z-0 transition-all duration-500 ease-in-out" 
              style={{ width: `${((step - 1) / 5) * 100}%` }}
            />
            {steps.map((s) => (
              <div 
                key={s.num} 
                className={`relative z-10 flex flex-col items-center gap-2 transition-colors duration-300 ${step >= s.num ? 'text-accent' : 'text-neutral-400'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 bg-white transition-colors duration-300 ${step >= s.num ? 'border-accent text-accent' : 'border-neutral-300 text-neutral-400'}`}>
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase hidden sm:block">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-border p-6 sm:p-12 shadow-sm min-h-[450px] relative overflow-hidden">
          <form onSubmit={step === 6 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6 pb-20">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Vehicle Registration</h2>
                  <div>
                    <label htmlFor="reg" className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Registration Number</label>
                    <input 
                      id="reg"
                      type="text" 
                      value={formData.reg}
                      onChange={(e) => updateForm("reg", e.target.value)}
                      placeholder="e.g. AB12 CDE"
                      className="w-full border border-border p-4 text-lg font-bold uppercase focus:outline-none focus:border-accent bg-neutral-50 transition-colors"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6 pb-20">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">What do you need?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Servicing", "MOT Preparation", "Diagnostics", "Brakes & Suspension", "Tyres & Wheel Care", "Air Conditioning", "Hybrid & EV", "Other / Not Sure"].map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => updateForm("serviceType", type)}
                        className={`p-4 border text-left font-semibold uppercase tracking-wide text-sm transition-colors ${formData.serviceType === type ? 'border-accent bg-accent/5 text-accent' : 'border-border hover:border-neutral-400 text-foreground'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6 pb-20">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Preferred Appointment</h2>
                  <div>
                    <label htmlFor="date" className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Select a Date</label>
                    <input 
                      id="date"
                      type="date" 
                      value={formData.date}
                      onChange={(e) => updateForm("date", e.target.value)}
                      className="w-full border border-border p-4 text-lg focus:outline-none focus:border-accent bg-neutral-50 transition-colors"
                      required
                    />
                  </div>
                  <p className="text-sm text-muted">We will try to accommodate your preferred date, but will confirm availability when we contact you.</p>
                </motion.div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6 pb-20">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Customer Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Full Name</label>
                      <input 
                        id="name"
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Phone Number</label>
                      <input 
                        id="phone"
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Email Address</label>
                      <input 
                        id="email"
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6 pb-20">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Additional Information</h2>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Any specific notes or symptoms? (Optional)</label>
                    <textarea 
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => updateForm("notes", e.target.value)}
                      rows={5}
                      className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50 resize-none transition-colors"
                      placeholder="e.g. Squeaking noise when braking..."
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 6 */}
              {step === 6 && (
                <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6 pb-20">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Review Request</h2>
                  <div className="bg-neutral-50 p-6 border border-border space-y-4">
                    <div className="grid grid-cols-3 border-b border-border pb-4">
                      <div className="col-span-1 text-xs font-bold text-muted uppercase tracking-widest">Vehicle</div>
                      <div className="col-span-2 font-medium uppercase">{formData.reg || "Not provided"}</div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-border pb-4">
                      <div className="col-span-1 text-xs font-bold text-muted uppercase tracking-widest">Service</div>
                      <div className="col-span-2 font-medium">{formData.serviceType || "Not selected"}</div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-border pb-4">
                      <div className="col-span-1 text-xs font-bold text-muted uppercase tracking-widest">Date</div>
                      <div className="col-span-2 font-medium">{formData.date || "Not selected"}</div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-border pb-4">
                      <div className="col-span-1 text-xs font-bold text-muted uppercase tracking-widest">Customer</div>
                      <div className="col-span-2 font-medium">{formData.name} <br /> {formData.phone} <br /> {formData.email}</div>
                    </div>
                    {formData.notes && (
                      <div className="grid grid-cols-3">
                        <div className="col-span-1 text-xs font-bold text-muted uppercase tracking-widest">Notes</div>
                        <div className="col-span-2 font-medium text-sm">{formData.notes}</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons fixed to bottom of form card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:px-12 bg-white border-t border-border flex justify-between items-center">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted hover:text-foreground transition-colors py-2 min-h-[44px]"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}

              {step < 6 ? (
                <button 
                  type="submit"
                  disabled={step === 2 && !formData.serviceType}
                  className="bg-foreground text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors flex items-center gap-2 disabled:opacity-50 disabled:hover:bg-foreground min-h-[44px]"
                >
                  Continue <ChevronRight size={16} />
                </button>
              ) : (
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-black transition-colors flex items-center gap-2 disabled:opacity-70 min-h-[44px]"
                >
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
