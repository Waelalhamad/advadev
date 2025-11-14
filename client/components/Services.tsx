"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const packages = [
  {
    name: "Starter",
    subtitle: "Landing Page",
    icon: "fa-pen",
    price: "$150",
    features: [
      "Single responsive page",
      "Free deployment",
      "2 revisions included",
      "Basic SEO optimization",
      "Contact form",
    ],
    popular: false,
  },
  {
    name: "Business",
    subtitle: "Full Website",
    icon: "fa-laptop-code",
    price: "$350",
    features: [
      "4-6 professional pages",
      "Advanced contact forms",
      "Comprehensive SEO",
      "Priority Support",
      "Social media integration",
      "Google Analytics setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "Custom Solution",
    icon: "fa-cogs",
    price: "Custom",
    features: [
      "Custom functionality",
      "Advanced integrations",
      "Monthly maintenance",
      "Priority support",
      "Performance optimization",
    ],
    popular: false,
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-primary font-bold text-lg tracking-wide">
              Our Packages
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Each package is designed to scale with your business and deliver measurable results.
          </p>
          
          {/* Quick comparison */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <i className="fas fa-check text-primary text-lg"></i>
              <span>Fast Turnaround</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <i className="fas fa-check text-primary text-lg"></i>
              <span>Free Revisions</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <i className="fas fa-check text-primary text-lg"></i>
              <span>Post-Launch Support</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`relative group ${
                pkg.popular ? "lg:scale-105" : ""
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 z-20"
                >
                  <div className="bg-primary text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg">
                    <i className="fas fa-star mr-2"></i>
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  pkg.popular
                    ? "bg-white dark:bg-gray-800 shadow-2xl border-2 border-primary"
                    : "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 md:p-10">
                  {/* Package name */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-primary font-medium mb-8 text-sm">
                    {pkg.subtitle}
                  </p>

                  {/* Price - before features */}
                  <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-baseline gap-2">
                      {pkg.price !== "Custom" && (
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          Starting at
                        </span>
                      )}
                      <span className="text-4xl md:text-5xl font-bold text-primary">
                        {pkg.price}
                      </span>
                    </div>
                    {pkg.price === "Custom" && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                        Tailored to your specific needs
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start group/item"
                      >
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 mt-1 mr-3 group-hover/item:scale-110 transition-transform">
                          <i className="fas fa-check text-primary text-xs"></i>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="#contact" className="block">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 px-6 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
                        pkg.popular
                          ? "bg-primary text-white hover:shadow-2xl hover:shadow-primary/50"
                          : "bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary-300 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {pkg.price === "Custom" ? "Free Consultation" : "Get Started"}
                      <i className="fas fa-arrow-right ml-2"></i>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Can't decide? <span className="text-primary font-semibold">Let's talk about your project</span>
          </p>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all shadow-lg"
            >
              <i className="fas fa-calendar mr-2"></i>
              Schedule a Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
