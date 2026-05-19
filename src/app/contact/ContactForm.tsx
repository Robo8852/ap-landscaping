"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const submitQuote = useMutation(api.quotes.submitQuote);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof initialForm>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    try {
      await submitQuote({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        city: form.city || undefined,
        service: form.service || undefined,
        message: form.message.trim() || undefined,
        source: "contact-page",
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const submitted = status === "success";

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100">
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-ap-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ChevronRight className="text-ap-green" size={32} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-ap-bark mb-2">Message Sent!</h3>
          <p className="text-ap-stone">
            Thank you for reaching out. We'll be in touch within 24 hours to schedule your free estimate.
          </p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-ap-bark mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-ap-bark mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ap-bark mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-ap-bark mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
                placeholder="(941) 600-9879"
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-ap-bark mb-1">
              Your City
            </label>
            <select
              id="city"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
            >
              <option value="">Select your city...</option>
              <option value="bradenton">Bradenton</option>
              <option value="ellenton">Ellenton</option>
              <option value="palmetto">Palmetto</option>
              <option value="sarasota">Sarasota</option>
              <option value="venice">Venice</option>
              <option value="osprey">Osprey</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-ap-bark mb-1">
              Service Needed
            </label>
            <select
              id="service"
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white"
            >
              <option value="">Select a service...</option>
              <option value="lawn">Lawn Care & Maintenance</option>
              <option value="design">Landscape Design</option>
              <option value="hardscape">Hardscaping</option>
              <option value="tree-care">Tree & Shrub Care</option>
              <option value="tree-removal">Tree Removal</option>
              <option value="cleanup">Seasonal Cleanup</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ap-bark mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-ap-green focus:border-transparent outline-none transition-all bg-stone-50 focus:bg-white resize-none"
              placeholder="Tell us about your property and what you're looking for..."
            ></textarea>
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-ap-forest hover:bg-ap-forest/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors shadow-md"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
