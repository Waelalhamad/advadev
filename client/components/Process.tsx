export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From concept to launch in four simple, collaborative steps.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 dark:bg-gray-700"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center z-10">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We learn about your business, goals, and target audience to
                create the perfect strategy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center z-10">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating a stunning, user-centric design that reflects your
                brand and engages your customers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center z-10">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a fast, responsive, and secure website that works
                perfectly on all devices.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md text-center z-10">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white text-lg font-bold rounded-full mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Launch & Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Deploying your site with comprehensive training and ongoing
                technical support for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
