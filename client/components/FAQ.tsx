"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard landing page typically takes 3-5 business days, a full business website takes 7-14 days, and custom projects are timeline-dependent based on complexity. We prioritize quality and efficiency.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "We follow a standard 50% upfront deposit to begin the project and 50% upon final approval before launch. We accept bank transfers, PayPal, and all major credit cards.",
  },
  {
    question: "Are revisions included?",
    answer:
      "Absolutely. Revisions are a key part of our process. The Starter package includes 2 rounds, the Business package includes 3, and Enterprise solutions have unlimited revisions during the development phase.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "While we don't provide hosting directly, we offer expert guidance to help you choose the best, most cost-effective hosting solution for your needs. We then handle the complete deployment process for free.",
  },
  {
    question: "What happens after the website is launched?",
    answer:
      "Every project comes with 30 days of complimentary technical support to ensure a smooth start. We also offer optional monthly maintenance plans for ongoing updates, security, and support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:text-primary dark:hover:text-primary-300 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <i
                  className={`fas ${
                    openIndex === index ? "fa-minus" : "fa-plus"
                  } transition-transform`}
                ></i>
              </button>
              <div
                className={`${
                  openIndex === index ? "block" : "hidden"
                } px-6 pb-6`}
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
