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
    gradient: "from-purple-500 to-primary-600",
    iconBg: "bg-gradient-to-br from-purple-100 to-primary-100 dark:from-purple-900/30 dark:to-primary-900/30",
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
    gradient: "from-primary-500 to-secondary-500",
    iconBg: "bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30",
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
    gradient: "from-secondary-500 to-accent-pink",
    iconBg: "bg-gradient-to-br from-secondary-100 to-pink-100 dark:from-secondary-900/30 dark:to-pink-900/30",
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              Our Packages
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-white dark:via-primary-400 dark:to-white gradient-text">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Designed for performance, growth, and results. Each package includes premium features tailored to your business needs.
          </p>
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
                pkg.popular ? "lg:scale-110" : ""
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 -right-4 z-20"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-glow">
                    <i className="fas fa-star mr-1"></i>
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  pkg.popular
                    ? "bg-white dark:bg-gray-800 shadow-premium-lg border-2 border-primary-300 dark:border-primary-700"
                    : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-card hover:shadow-card-hover"
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative p-8 md:p-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-18 h-18 flex items-center justify-center ${pkg.iconBg} rounded-2xl mb-6 shadow-lg`}
                  >
                    <i className={`fas ${pkg.icon} text-3xl bg-gradient-to-br ${pkg.gradient} gradient-text`}></i>
                  </motion.div>

                  {/* Package name */}
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-6">
                    {pkg.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent-green/10 mt-0.5 mr-3 group-hover/item:scale-110 transition-transform">
                          <i className="fas fa-check text-accent-green text-sm"></i>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-baseline gap-2">
                      {pkg.price !== "Custom" && (
                        <span className="text-gray-500 dark:text-gray-400 text-lg">
                          Starting at
                        </span>
                      )}
                      <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${pkg.gradient} gradient-text`}>
                        {pkg.price}
                      </span>
                    </div>
                    {pkg.price === "Custom" && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                        Tailored to your needs
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link href="#contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 px-6 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 ${
                        pkg.popular
                          ? `bg-gradient-to-r ${pkg.gradient} hover:shadow-glow-lg`
                          : "bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600"
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
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Not sure which package is right for you?
          </p>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
            >
              Schedule a Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
