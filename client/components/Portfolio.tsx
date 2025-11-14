import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "The Heritage Restaurant",
    description: "Create an appetizing website with an interactive menu and booking system.",
    challenge: "Challenge: Create an appetizing website with an interactive menu and booking system.",
    solution: "Solution: A fully responsive design with a dynamic menu showcase and a seamless table booking integration.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "The Heritage Restaurant Project",
    tags: ["Restaurant", "Booking System", "Mobile First"],
  },
  {
    title: "Dr. Ahmed Medical Clinic",
    description: "Develop a professional, trustworthy medical website with appointment scheduling.",
    challenge: "Challenge: Develop a professional, trustworthy medical website with appointment scheduling.",
    solution: "Solution: A clean, accessible interface with an integrated booking system and a clear service showcase.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Dr. Ahmed Medical Clinic Project",
    tags: ["Healthcare", "Appointments", "HIPAA Compliant"],
  },
];

export default function Portfolio() {
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
    <section id="portfolio" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
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
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Real projects delivering real results for our clients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden h-72 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <Link
                      href="#contact"
                      className="inline-block px-6 py-2 bg-primary text-white rounded-full font-semibold hover:shadow-lg transition-all w-fit transform hover:-translate-y-1"
                    >
                      View Project
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <div className="space-y-4 flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      <strong className="text-gray-800 dark:text-gray-100">Challenge:</strong>{" "}
                      {project.challenge.replace("Challenge: ", "")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      <strong className="text-gray-800 dark:text-gray-100">Solution:</strong>{" "}
                      {project.solution.replace("Solution: ", "")}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 text-primary dark:text-primary-300 text-sm font-medium rounded-full border border-primary/30 dark:border-primary/50"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all shadow-lg transform hover:-translate-y-1"
          >
            Start Your Project Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
