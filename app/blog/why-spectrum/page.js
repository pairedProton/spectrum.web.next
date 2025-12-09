'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'


const WhySpectrum = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              Why Spectrum Agriculture Was Created: Our Mission to Transform Indian Farming
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              A mission-driven platform designed to transform Indian farming through sustainable agriculture, 
              farmer empowerment, zero-waste models, and strong market linkages.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Agriculture is the heart of India—an industry that feeds millions, employs the largest workforce, 
                and shapes the country's economy. Yet despite its importance, Indian farmers still face deep-rooted 
                challenges that limit growth, profitability, and sustainability. Rising input costs, unstable markets, 
                unpredictable weather, and lack of modern support have made farming increasingly difficult.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At the same time, the world is shifting toward organic, clean, traceable, and sustainable food systems. 
                Consumers want healthier produce, businesses need reliable suppliers, and the global market demands 
                transparency. India is ready for change—but farmers need a system that empowers them, supports their 
                growth, and connects them to opportunities.
              </p>
              <p className="text-xl text-emerald-950 font-semibold leading-relaxed">
                This is the reason Spectrum Agriculture was created.
              </p>
            </div>

            {/* What is Spectrum */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Spectrum Agriculture is not just another <Link href={'/'} className='font-semibold underline' >agriculture farming company</Link>. It is a mission-driven platform 
                designed to transform Indian farming through sustainable agriculture, farmer empowerment, zero-waste 
                models, and strong market linkages. Our goal is to renovate agricultural systems, help farmers increase 
                income, and build a future where farming becomes profitable, sustainable, and globally competitive.
              </p>
            </div>

            {/* Why Spectrum Had to Be Created */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Why Spectrum Agriculture Had to Be Created
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before building Spectrum Agriculture, we spent years studying the gaps in agricultural systems. 
                What we found was clear:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-950 pl-6 py-4 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    Farmers Produce Well, but Don't Prosper (The Prosperity Gap)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Despite working hard, a large number of farmers operate below the poverty line. The current system 
                    often benefits middlemen, leaving farmers with minimal profits. This is exacerbated by high input 
                    costs and crop destruction due to pests or disease.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-950 pl-6 py-4 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    The Unsustainable Crisis (The Sustainability Gap)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Over-reliance on chemical fertilizers and pesticides has depleted soil health, increased production 
                    costs, and degraded the overall environment.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-950 pl-6 py-4 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    Wasted Effort, Wasted Resources (The Waste Gap)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The lack of zero-waste systems leads to massive amounts of farm and food waste, wasting effort, 
                    resources, and potential income.
                  </p>
                </div>

                <div className="border-l-4 border-emerald-950 pl-6 py-4 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    The Trust Deficit (The Market Linkage Gap)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Farmers often face dishonest market practices, leading to a lack of transparency and an inability 
                    to build long-term relationships with end consumers and businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Our Approach: Building the Spectrum Model
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Spectrum Agriculture was designed from the ground up to address these four fundamental gaps. 
                We built a holistic platform based on four pillars:
              </p>

              <div className="space-y-8">
                <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    1. Sustainable Agriculture for Long-Term Growth
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our focus is entirely on sustainability. We help farmers transition to organic and chemical-free 
                    farming practices that restore soil health and reduce reliance on expensive, harmful inputs. 
                    We believe a healthy farm is a profitable and resilient farm.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    2. Farmer Empowerment and Training
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Farmers are at the center of our model. We provide comprehensive training, guidance, and continuous 
                    support. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Best Practices:</strong> On-site training for organic cultivation, soil management, and crop rotation.</li>
                    <li><strong>Resource Access:</strong> Providing high-quality, non-chemical inputs.</li>
                    <li><strong>Digital Tools:</strong> Offering a digital platform to track performance, manage resources, and access crucial market information.</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    3. Zero-Waste Systems
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't just stop at the farm gate. We implement a circular economy model where all farm waste is 
                    either composted, processed into biofuel, or converted into other value-added products. This transforms 
                    waste into a new revenue stream, boosting farmer income and ensuring ecological balance.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    4. Direct Market Linkages and Transparency
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We eliminate the need for exploitative middlemen. Spectrum Agriculture acts as a direct bridge, 
                    connecting farmers to businesses, retailers, and high-value markets that demand organic, traceable produce.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Transparency:</strong> Our digital platform ensures every transaction is clear, building trust between farmers and buyers.</li>
                    <li><strong>Fair Pricing:</strong> Farmers are guaranteed fair, stable, and profitable prices for their sustainable produce.</li>
                    <li><strong>Reliability:</strong> We manage the entire supply chain, ensuring product quality, consistent supply, and timely logistics.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Opportunities for Partners */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Opportunities for Partners and Investors
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Spectrum Agriculture is actively seeking partnerships with businesses and investors who share our vision 
                of a sustainable future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We offer unique opportunities:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-6">
                <li>Sustainable sourcing for current operations</li>
                <li>Large farmer networks</li>
                <li>Zero-waste business models</li>
                <li>Access to certified organic produce</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you are a business, retailer, or investor, Spectrum Agriculture provides scalable, future-ready opportunities.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Impact Spectrum Agriculture Aims to Create
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our work is designed to create large-scale change:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">✔</span>
                  <span className="text-gray-700">Improve farmer income by 30–60%</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">✔</span>
                  <span className="text-gray-700">Promote sustainable agriculture across India</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">✔</span>
                  <span className="text-gray-700">Reduce chemical dependency</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">✔</span>
                  <span className="text-gray-700">Reduce farm waste with zero-waste systems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">✔</span>
                  <span className="text-gray-700">Create strong supply chains</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">✔</span>
                  <span className="text-gray-700">Develop a reliable network of organic growers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">✔</span>
                  <span className="text-gray-700">Build trust between farmers and markets</span>
                </div>
              </div>
              <p className="text-lg text-emerald-950 font-semibold mt-6">
                We want to make Indian agriculture globally competitive.
              </p>
            </div>

            {/* The Future */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                The Future We Are Building
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The future of Indian agriculture must be:
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-emerald-950 text-white rounded-full font-semibold">Sustainable</span>
                <span className="px-4 py-2 bg-emerald-950 text-white rounded-full font-semibold">Digitized</span>
                <span className="px-4 py-2 bg-emerald-950 text-white rounded-full font-semibold">Organic</span>
                <span className="px-4 py-2 bg-emerald-950 text-white rounded-full font-semibold">Waste-free</span>
                <span className="px-4 py-2 bg-emerald-950 text-white rounded-full font-semibold">Market-driven</span>
                <span className="px-4 py-2 bg-emerald-950 text-white rounded-full font-semibold">Profitable</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Spectrum Agriculture is dedicated to creating this future by supporting farmers, empowering young 
                agri-entrepreneurs, and connecting agriculture with modern markets.
              </p>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
              <h2 className="subheading font-[curvyText] text-white mb-6">
                Conclusion: Spectrum Agriculture is a Mission, Not Just a Company
              </h2>
              <div className="w-24 h-1 bg-[#D4DBB1] mb-6"></div>
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                Spectrum Agriculture was created to spark a new agricultural revolution in India. A revolution built on:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Sustainable agriculture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Zero-waste systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Organic practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Market linkages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Farmer empowerment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Strong partnerships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Transparent models</span>
                </div>
              </div>
              <p className="text-lg text-emerald-100 leading-relaxed mb-4">
                We are committed to transforming farming into a profitable and sustainable profession.
              </p>
              <p className="text-xl text-white font-semibold leading-relaxed">
                Spectrum Agriculture is here to support farmers, partner with businesses, and build a better future 
                for India's agriculture. This is just the beginning. Together, we will grow a greener, stronger, 
                more empowered India.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WhySpectrum

