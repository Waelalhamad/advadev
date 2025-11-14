import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote: "Advadev transformed our online presence. Our new website increased customer inquiries by 150% in just two months!",
    author: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    rating: 5,
  },
  {
    quote: "Professional, fast, and incredibly supportive. The team delivered exactly what we needed, on time and on budget.",
    author: "Mohammed Al-Rashid",
    role: "Owner, Heritage Restaurant",
    rating: 5,
  },
  {
    quote: "Our medical clinic's new website makes it so easy for patients to book appointments. Highly recommend Advadev!",
    author: "Dr. Emily Chen",
    role: "Director, Wellness Medical Center",
    rating: 5,
  },
];

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 30 },
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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-primary-300">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Success stories from businesses we&apos;ve helped grow online.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                {/* Background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Star rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-yellow-400 text-lg"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Quote mark */}
                  <div className="text-6xl text-primary/20 mb-2 font-serif leading-none">&ldquo;</div>

                  {/* Quote text */}
                  <p className="text-gray-700 dark:text-gray-200 italic mb-8 leading-relaxed text-lg">
                    {testimonial.quote}
                  </p>

                  {/* Divider */}
                  <div className="h-1 w-12 bg-primary mb-6 group-hover:w-full transition-all duration-300"></div>

                  {/* Author info */}
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-primary dark:text-primary-300 text-sm font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial count */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            <span className="font-bold text-primary text-2xl">50+</span> satisfied clients and growing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
