import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: "fa-bolt",
    title: "Lightning Fast",
    description: "Optimized websites that load instantly, reducing bounce rates and increasing conversions.",
  },
  {
    icon: "fa-chart-line",
    title: "Conversion-Focused",
    description: "Strategic design that guides visitors towards taking action and becoming loyal customers.",
  },
  {
    icon: "fa-headset",
    title: "Full Support",
    description: "Comprehensive support from concept to launch and beyond with ongoing maintenance plans.",
  },
  {
    icon: "fa-hand-holding-usd",
    title: "Transparent Pricing",
    description: "Clear quotes and fixed prices with no hidden fees or surprise charges. Ever.",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
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
            Why Choose Advadev?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We don&apos;t just build websites; we build digital assets that deliver
            tangible results for your business.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100/50 dark:border-gray-700/50 relative overflow-hidden">
                {/* Background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-2xl mb-6 text-primary dark:text-primary-300 border border-primary/20 dark:border-primary/40"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`fas ${feature.icon} text-2xl`}></i>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-300 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated line */}
                  <motion.div
                    className="h-1 bg-primary mt-6 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
