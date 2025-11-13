import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Service Packages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect package for your business needs. Each one is
            designed for performance, growth, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="px-8 pt-8 pb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-xl mb-6">
                <i className="fas fa-pen text-2xl text-primary dark:text-primary-300"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Starter — Landing Page</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Single responsive page</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Free deployment</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>2 revisions included</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Basic SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Contact form</span>
                </li>
              </ul>
              <div className="text-3xl font-bold mb-6">
                Starting at{" "}
                <span className="text-primary dark:text-primary-300">$150</span>
              </div>
              <Link
                href="#contact"
                className="block w-full py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Business Package (Popular) */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform scale-105 z-10 border-2 border-primary">
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="px-8 pt-8 pb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-xl mb-6">
                <i className="fas fa-laptop-code text-2xl text-primary dark:text-primary-300"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Business — Full Website</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>4-6 professional pages</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Advanced contact forms</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Comprehensive SEO</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Priority Support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Social media integration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Google Analytics setup</span>
                </li>
              </ul>
              <div className="text-3xl font-bold mb-6">
                Starting at{" "}
                <span className="text-primary dark:text-primary-300">$350</span>
              </div>
              <Link
                href="#contact"
                className="block w-full py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="px-8 pt-8 pb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-xl mb-6">
                <i className="fas fa-cogs text-2xl text-primary dark:text-primary-300"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Enterprise — Custom Solution
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Custom functionality</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Advanced integrations</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Monthly maintenance</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>Performance optimization</span>
                </li>
              </ul>
              <div className="text-2xl font-bold mb-6">Custom pricing</div>
              <Link
                href="#contact"
                className="block w-full py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
