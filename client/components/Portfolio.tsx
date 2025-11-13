import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real projects delivering real results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden h-64">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="The Heritage Restaurant Project"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-bold text-white mb-2">
                  The Heritage Restaurant
                </h3>
                <Link
                  href="#"
                  className="inline-block px-4 py-2 bg-white text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors w-fit"
                >
                  View Live Site
                </Link>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">The Heritage Restaurant</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong className="text-gray-800 dark:text-white">
                  Challenge:
                </strong>{" "}
                Create an appetizing website with an interactive menu and
                booking system.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong className="text-gray-800 dark:text-white">Solution:</strong>{" "}
                A fully responsive design with a dynamic menu showcase and a
                seamless table booking integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-primary dark:text-primary-300 text-sm rounded-full">
                  Restaurant
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-primary dark:text-primary-300 text-sm rounded-full">
                  Booking System
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-primary dark:text-primary-300 text-sm rounded-full">
                  Mobile First
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative overflow-hidden h-64">
              <Image
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Dr. Ahmed Medical Clinic Project"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Dr. Ahmed Medical Clinic
                </h3>
                <Link
                  href="#"
                  className="inline-block px-4 py-2 bg-white text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors w-fit"
                >
                  View Live Site
                </Link>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Dr. Ahmed Medical Clinic</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong className="text-gray-800 dark:text-white">
                  Challenge:
                </strong>{" "}
                Develop a professional, trustworthy medical website with
                appointment scheduling.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong className="text-gray-800 dark:text-white">Solution:</strong>{" "}
                A clean, accessible interface with an integrated booking system
                and a clear service showcase.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-primary dark:text-primary-300 text-sm rounded-full">
                  Healthcare
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-primary dark:text-primary-300 text-sm rounded-full">
                  Appointments
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-primary dark:text-primary-300 text-sm rounded-full">
                  HIPAA Compliant
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
