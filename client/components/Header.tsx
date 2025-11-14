"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerBlur, setHeaderBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHeaderBlur(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className={`fixed w-full py-4 z-50 transition-all duration-300 ${
          headerBlur ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center text-2xl font-bold group">
              <Image
                src="/logo.svg"
                alt="Advadev Logo"
                width={40}
                height={40}
                className="mr-2 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-primary dark:text-primary-300 group-hover:text-primary/80 transition-all">
                Advadev
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium hover:text-primary dark:hover:text-primary-300 transition-colors">
                  <span>Services</span>
                  <i className="fas fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link
                      href="#services"
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Starter — Landing Page
                    </Link>
                    <Link
                      href="#services"
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Business — Full Website
                    </Link>
                    <Link
                      href="#services"
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Enterprise — Custom
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="#portfolio"
                className="font-medium hover:text-primary dark:hover:text-primary-300 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#pricing"
                className="font-medium hover:text-primary dark:hover:text-primary-300 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="font-medium hover:text-primary dark:hover:text-primary-300 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA & Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="#contact"
                className="px-6 py-2 bg-primary text-white font-medium rounded-full hover:shadow-xl hover:shadow-primary/50 transition-all shadow-lg transform hover:-translate-y-1"
              >
                Book a Call
              </Link>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all"
              >
                <i className="fas fa-sun text-yellow-400 dark:hidden"></i>
                <i className="fas fa-moon text-indigo-300 hidden dark:block"></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center"
            >
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5 transition-all"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white mb-1.5 transition-all"></span>
              <span className="block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all"></span>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            mobileMenuOpen ? "" : "hidden"
          } fixed inset-0 bg-black bg-opacity-70 z-40 lg:hidden`}
        >
          <div className="absolute top-0 right-0 w-4/5 h-full bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link
                  href="/"
                  className="text-2xl font-bold text-primary dark:text-primary-300"
                >
                  Advadev
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <nav className="flex-1 flex flex-col space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <button className="flex items-center justify-between w-full font-medium text-gray-800 dark:text-white">
                    <span>Services</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="mt-2 pl-4 space-y-3">
                    <Link
                      href="#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300"
                    >
                      Starter — Landing Page
                    </Link>
                    <Link
                      href="#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300"
                    >
                      Business — Full Website
                    </Link>
                    <Link
                      href="#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300"
                    >
                      Enterprise — Custom
                    </Link>
                  </div>
                </div>
                <Link
                  href="#portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary-300"
                >
                  Portfolio
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary-300"
                >
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary-300"
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <button
                    onClick={toggleTheme}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700"
                  >
                    <i className="fas fa-sun text-yellow-400 dark:hidden"></i>
                    <i className="fas fa-moon text-indigo-300 hidden dark:block"></i>
                  </button>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
