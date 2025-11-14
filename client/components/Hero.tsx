"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "We Build Websites That Convert Visitors Into Customers";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 opacity-30"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary opacity-10 filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-secondary opacity-10 filter blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-primary opacity-10 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary dark:text-primary-300 min-h-20">
            {displayedText}
            {displayedText.length < fullText.length && (
              <span className="inline-block w-1 h-12 md:h-20 bg-primary ml-2 animate-pulse"></span>
            )}
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fast, professional, mobile-responsive websites — delivered in days
            with ongoing post-launch support.
          </motion.p>
          <motion.p
            className="text-lg mb-10 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Led by{" "}
            <strong className="text-primary dark:text-primary-300">
              Wael Al-Hamd
            </strong>{" "}
            — Founder & Lead Developer
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Book Free 15-min Call
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border-2 border-primary text-primary dark:text-primary-300 font-semibold rounded-full hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              View Our Packages
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero mockup */}
        <motion.div
          className="mt-16 md:mt-20 max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-800 dark:bg-gray-700 px-4 py-3 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-300">
                www.yourbusiness.com
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 h-80 md:h-96 flex items-center justify-center">
              <div className="text-center p-6">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-300 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Modern Design
                </motion.h3>
                <motion.p
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Responsive • Fast • SEO-Ready
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Floating elements around the mockup */}
          <motion.div
            className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-primary opacity-20 filter blur-xl animate-float hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          ></motion.div>
          <motion.div
            className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary opacity-20 filter blur-xl animate-float-reverse hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
