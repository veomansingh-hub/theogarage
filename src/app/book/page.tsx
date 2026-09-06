"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

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

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
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

  if (isSuccess) {
    return (
      <div className="pt-32 pb-32 min-h-[80vh] flex items-center justify-center bg-background">
        <div className="max-w-md text-center px-6">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-tight mb-4">Request Received</h1>
          <p className="text-muted leading-relaxed mb-8">
            Thank you, {formData.name}. We have received your booking request for your vehicle ({formData.reg.toUpperCase() || "Registration Not Provided"}). A member of our team will contact you shortly to confirm your appointment.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="border border-border bg-white text-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-50 transition-colors"
          >
            Return to Homepage
          </button>
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
          <p className="text-muted">
            Complete the form below to request an appointment. We will contact you to confirm details.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 ${step >= i ? 'bg-accent' : 'bg-neutral-200'} transition-colors duration-300`}
            />
          ))}
        </div>

        <div className="bg-white border border-border p-8 md:p-12 shadow-sm min-h-[400px]">
          <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Vehicle Details</h2>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Registration Number</label>
                    <input 
                      type="text" 
                      value={formData.reg}
                      onChange={(e) => updateForm("reg", e.target.value)}
                      placeholder="e.g. AB12 CDE"
                      className="w-full border border-border p-4 text-lg font-bold uppercase focus:outline-none focus:border-accent bg-neutral-50"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">What do you need?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Service", "MOT preparation", "Diagnostics", "Brakes", "Tyres", "Air conditioning", "Repair", "Other"].map(type => (
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

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Preferred Date</h2>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Select a Date</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => updateForm("date", e.target.value)}
                      className="w-full border border-border p-4 text-lg focus:outline-none focus:border-accent bg-neutral-50"
                      required
                    />
                  </div>
                  <p className="text-sm text-muted">We will try to accommodate your preferred date, but will confirm availability when we contact you.</p>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Your Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wide">Additional Information</h2>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-muted mb-2">Any specific notes or symptoms? (Optional)</label>
                    <textarea 
                      value={formData.notes}
                      onChange={(e) => updateForm("notes", e.target.value)}
                      rows={5}
                      className="w-full border border-border p-4 focus:outline-none focus:border-accent bg-neutral-50 resize-none"
                      placeholder="e.g. Squeaking noise when braking..."
                    />
                  </div>
                  <div className="bg-neutral-50 p-4 border border-border mt-6">
                    <h3 className="font-bold uppercase tracking-wide text-sm mb-2 text-muted">Summary</h3>
                    <ul className="text-sm space-y-1">
                      <li><strong>Vehicle:</strong> {formData.reg.toUpperCase() || "Not provided"}</li>
                      <li><strong>Service:</strong> {formData.serviceType || "Not selected"}</li>
                      <li><strong>Date:</strong> {formData.date || "Not selected"}</li>
                      <li><strong>Name:</strong> {formData.name}</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex justify-between items-center pt-6 border-t border-border">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                >
                  <ChevronLeft size={16} /> Back
                </button>
              ) : <div />}

              {step < 5 ? (
                <button 
                  type="submit"
                  disabled={step === 2 && !formData.serviceType}
                  className="bg-foreground text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-accent transition-colors flex items-center gap-2 disabled:opacity-50 disabled:hover:bg-foreground"
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black border border-transparent hover:border-border transition-colors flex items-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Processing..." : "Request Booking"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
