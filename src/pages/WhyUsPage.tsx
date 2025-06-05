const WhyUsPage = () => {
  return (
    <div>
      <div className="bg-orange-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Why Choose SpiceMaster</h1>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Sets Us Apart</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At SpiceMaster, we're passionate about delivering the highest quality spices and masala blends that
              transform ordinary meals into extraordinary culinary experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Quality Ingredients</h3>
              <p className="text-lg text-gray-600 mb-4">
                We source our spices directly from trusted farmers and suppliers around the world who share our
                commitment to quality and sustainability.
              </p>
              <p className="text-lg text-gray-600">
                Each batch of spices undergoes rigorous quality testing to ensure it meets our exacting standards for
                aroma, flavor, color, and purity.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Premium quality spices"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Traditional spice blending"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Traditional Recipes</h3>
              <p className="text-lg text-gray-600 mb-4">
                Our masala blends are crafted using time-honored recipes that have been passed down through generations,
                preserving authentic flavors and culinary traditions.
              </p>
              <p className="text-lg text-gray-600">
                We take no shortcuts in our blending process, carefully balancing each spice to create harmonious flavor
                profiles that enhance your cooking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Additives or Preservatives</h3>
              <p className="text-lg text-gray-600 mb-4">
                We believe in the pure, natural goodness of spices. That's why our products never contain artificial
                colors, flavors, or preservatives.
              </p>
              <p className="text-lg text-gray-600">
                What you get is 100% pure spice, with all its natural oils and flavor compounds intact, just as nature
                intended.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Natural spices without additives"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment to Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Freshness Guaranteed</h3>
              <p className="text-gray-600">
                We grind and blend our spices in small batches to ensure maximum freshness. Our airtight packaging
                preserves the aroma and flavor until they reach your kitchen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">
                We work with farmers who use sustainable growing methods and fair labor practices. Our packaging is
                eco-friendly and recyclable wherever possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rigorous Testing</h3>
              <p className="text-gray-600">
                Every batch of our spices undergoes thorough testing for purity, potency, and consistency. We never
                compromise on quality or food safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "New York, NY",
                quote:
                  "I've tried many different brands of garam masala, but SpiceMaster's blend is by far the most aromatic and flavorful. It's transformed my cooking!",
              },
              {
                name: "James L.",
                location: "Chicago, IL",
                quote:
                  "As a professional chef, I'm very particular about the spices I use. SpiceMaster's products consistently deliver exceptional quality and authentic flavor.",
              },
              {
                name: "Priya K.",
                location: "Austin, TX",
                quote:
                  "Growing up in an Indian household, I know good masala. SpiceMaster's blends remind me of the ones my grandmother used to make from scratch.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have elevated their cooking with SpiceMaster's premium spices and
            masala blends.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/products"
              className="bg-white text-orange-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Our Products
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyUsPage
