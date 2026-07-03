"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    contact_number: "",
    email: "",
    date: "",
    event_timing: "",
    number_of_pax: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const { error: supaError } = await supabase
        .from("reservations")
        .insert([
          {
            name: form.name,
            contact_number: form.contact_number,
            email: form.email,
            date: form.date || null,
            event_timing: form.event_timing || null,
            number_of_pax: form.number_of_pax
              ? parseInt(form.number_of_pax)
              : null,
            subject: form.subject || null,
            message: form.message || null,
          },
        ]);

      if (supaError) throw supaError;
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full bg-cream border-b-2 border-red-brand/40 focus:border-red-brand outline-none py-3 px-2 font-playfair text-navy placeholder:text-navy/40 transition";

  return (
    <>
      {/* Banner */}
      <section className="relative w-full h-[200px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
        <img
          src="/images/menu-hero-banner.png"
          alt="Reservation banner"
          className="w-full h-full"
        />
        {/* <div className="absolute inset-0 bg-black/30" /> */}
      </section>

      {/* Reservation Form */}
      <section className="bg-[#FFFADC] py-16 px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="inline-block">
              <span className="font-dincondensed font-bold text-[#FFFADC] text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-none mb-3 text-center mr-2">
                RESERVATIONS
              </span>
              <span className="text-navy font-aaHongYunShouShu font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[90px] leading-none mb-3 text-center">预 定</span>
            </h1>
            <div className="w-48 h-1 bg-red-brand mx-auto mt-3" />
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <h2 className="font-playfair font-bold text-navy text-2xl mb-4">
                Thank you!
              </h2>
              <p className="font-playfair text-navy/80">
                Your reservation has been submitted. We&apos;ll be in touch
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="text"
                name="contact_number"
                placeholder="Your Contact Number"
                required
                value={form.contact_number}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="date"
                name="date"
                placeholder="dd/mm/yyyy"
                value={form.date}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="text"
                name="event_timing"
                placeholder="Event Timing"
                value={form.event_timing}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="number"
                name="number_of_pax"
                placeholder="Number of Pax"
                value={form.number_of_pax}
                onChange={handleChange}
                className={inputClasses}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClasses}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />

              {error && (
                <p className="text-red-brand font-playfair text-sm">{error}</p>
              )}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto text-center font-dincondensed font-bold bg-[#053176] text-[#FFFADC] px-8 py-3 text-base sm:text-lg tracking-[2px] transition hover:opacity-90"
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT NOW"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
