export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Success stories from businesses we&apos;ve helped grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-l-4 border-primary">
            <div className="text-5xl text-primary opacity-30 mb-4">&ldquo;</div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              Advadev transformed our online presence. Our new website increased
              customer inquiries by 150% in just two months!
            </p>
            <div className="font-bold">Sarah Johnson</div>
            <div className="text-primary dark:text-primary-300 text-sm">
              CEO, TechStart Solutions
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-l-4 border-primary">
            <div className="text-5xl text-primary opacity-30 mb-4">&ldquo;</div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              Professional, fast, and incredibly supportive. The team delivered
              exactly what we needed, on time and on budget.
            </p>
            <div className="font-bold">Mohammed Al-Rashid</div>
            <div className="text-primary dark:text-primary-300 text-sm">
              Owner, Heritage Restaurant
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-l-4 border-primary">
            <div className="text-5xl text-primary opacity-30 mb-4">&ldquo;</div>
            <p className="text-gray-600 dark:text-gray-300 italic mb-6">
              Our medical clinic&apos;s new website makes it so easy for patients to
              book appointments. Highly recommend Advadev!
            </p>
            <div className="font-bold">Dr. Emily Chen</div>
            <div className="text-primary dark:text-primary-300 text-sm">
              Director, Wellness Medical Center
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
