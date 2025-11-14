"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("Sending your message...");
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormMessage(
          "Thank you! Your message has been sent successfully. We will contact you soon."
        );
        form.reset();
      } else {
        setIsSuccess(false);
        setFormMessage(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setFormMessage(
        "Failed to send message. Please try again later or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl opacity-95 leading-relaxed">
            Book a free 15-minute consultation or send us your project details
            and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants} className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white/80 mb-2 transition-colors"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-white/80 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your phone"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white/80 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-white/80 mb-2"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 backdrop-blur-sm"
                >
                  <option value="" className="text-gray-900">Select a service</option>
                  <option value="landing" className="text-gray-900">Landing Page</option>
                  <option value="website" className="text-gray-900">Business Website</option>
                  <option value="custom" className="text-gray-900">Custom Solution</option>
                  <option value="consultation" className="text-gray-900">Free Consultation</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white/80 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project, goals, and expected budget..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" fill="currentColor"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Request & Book Call"
                )}
              </motion.button>

              {formMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center font-medium ${
                    isSuccess
                      ? "bg-green-500/20 text-green-100 border border-green-500/30"
                      : "bg-red-500/20 text-red-100 border border-red-500/30"
                  }`}
                >
                  {formMessage}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
