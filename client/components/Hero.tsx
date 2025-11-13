import Link from "next/link";

export default function Hero() {
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
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-primary to-purple-500 gradient-text">
            We Build Websites That Convert Visitors Into Customers
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Fast, professional, mobile-responsive websites — delivered in days
            with ongoing post-launch support.
          </p>
          <p className="text-lg mb-10 text-gray-500 dark:text-gray-400">
            Led by{" "}
            <strong className="text-primary dark:text-primary-300">
              Wael Al-Hamd
            </strong>{" "}
            — Founder & Lead Developer
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#contact"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl animate-bounce"
            >
              Book Free 15-min Call
            </Link>
            <Link
              href="#services"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              View Our Packages
            </Link>
          </div>
        </div>

        {/* Hero mockup */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto relative animate-slide-up">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01]">
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
                <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-primary-300 mb-2">
                  Modern Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Responsive • Fast • SEO-Ready
                </p>
              </div>
            </div>
          </div>

          {/* Floating elements around the mockup */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-primary opacity-20 filter blur-xl animate-float hidden lg:block"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary opacity-20 filter blur-xl animate-float-reverse hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
