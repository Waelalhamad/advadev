export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Advadev?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We don&apos;t just build websites; we build digital assets that deliver
            tangible results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-xl mb-6 text-primary dark:text-primary-300">
              <i className="fas fa-bolt text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized websites that load instantly, reducing bounce rates and
              increasing conversions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-xl mb-6 text-primary dark:text-primary-300">
              <i className="fas fa-chart-line text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Conversion-Focused</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Strategic design that guides visitors towards taking action and
              becoming loyal customers.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-xl mb-6 text-primary dark:text-primary-300">
              <i className="fas fa-headset text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Full Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive support from concept to launch and beyond with
              ongoing maintenance plans.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-xl mb-6 text-primary dark:text-primary-300">
              <i className="fas fa-hand-holding-usd text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Clear quotes and fixed prices with no hidden fees or surprise
              charges. Ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
