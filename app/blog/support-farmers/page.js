'use client'
import React from 'react'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'

const SupportFarmers = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              Organic Farming Support for Farmers: Building a Sustainable Future for Indian Agriculture
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              A comprehensive guide to how organic farming support systems empower farmers, transform agriculture, and create sustainable livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Organic farming is not just a practice; it is a movement. A campaign to protect the land, the ecosystem, and the health of millions. Farmers throughout India are recognizing the significance of transitioning from chemical-intensive agriculture to organic and sustainable farming practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                However, shifting to organic farming is not straightforward. To develop a profitable organic farming business, farmers require training, direction, market access, financial support, and hands-on assistance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This is where organic farming support systems become critical. Today, India is at a crossroads: consumers want chemical-free food, global markets are opening up to organic products, and farmers are looking for better, more profitable ways to cultivate crops.
              </p>
            </div>

            {/* What Is Organic Farming */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                What Is Organic Farming and Why Does It Matter?
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Organic farming is a natural method of agriculture that avoids chemical fertilizers, pesticides, and genetically modified seeds. Instead, it focuses on:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Natural soil enhancers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Biological pest control</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Crop diversity</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Local seeds</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Sustainable farming practices</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Protecting biodiversity</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike chemical-based farming, organic agriculture focuses on balance between soil, water, environment, and human health.
              </p>
            </div>

            {/* Why Organic Farming is Essential */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Why Organic Farming is Becoming Essential in India
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <div className="space-y-4">
                <div className="p-6 border-l-4 border-emerald-950 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    1. Organic approaches improve soil fertility
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Healthy soil is the foundation of sustainable agriculture. Organic methods restore and maintain soil health for long-term productivity.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-emerald-950 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    2. Increased Long-Term Profitability
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Slow initial returns might lead to higher crop value over time. Organic produce commands premium prices in domestic and international markets.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-emerald-950 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    3. Growing Market Demand
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Organic produce is becoming increasingly popular among consumers and marketplaces worldwide. The demand for chemical-free, healthy food is rising rapidly.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-emerald-950 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    4. Reduced Input Costs
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Reduced reliance on chemicals results in lower input costs and shorter debt cycles. Farmers save money on expensive chemical fertilizers and pesticides.
                  </p>
                </div>
                <div className="p-6 border-l-4 border-emerald-950 bg-emerald-50 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    5. Environmentally Friendly
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Organic farming protects water bodies, biodiversity, and air quality. It contributes to a healthier ecosystem for future generations.
                  </p>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                🌍 The Challenges Farmers Face in Organic Farming
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Though organic farming brings numerous benefits, Indian farmers face a few hurdles:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Lack of proper knowledge and training</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">High cost of organic certification</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Unorganized market and price fluctuation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Limited access to quality organic inputs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Absence of farm-to-market linkages</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Lack of government scheme awareness</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Long conversion period for soil to become organic</span>
                </div>
              </div>
              <p className="text-lg text-emerald-950 font-semibold mt-6">
                These challenges highlight the need for structured support systems for farmers.
              </p>
            </div>

            {/* How Support Can Transform */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                🌱 How Organic Farming Support Can Transform the Farming Ecosystem
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              
              <div className="space-y-8">
                {/* Training */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    1️⃣ Training and Skill Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Farmers require hands-on instruction for soil preparation, natural manure production, organic pest control, crop rotation, water management, and market-driven organic cultivation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Workshops, demonstration farms, and agricultural training centers can help farmers feel more confident about adopting organic systems.
                  </p>
                </div>

                {/* Access to Inputs */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    2️⃣ Access to Organic Inputs
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Providing convenient access to high-quality vermicompost, biofertilizers, organic manure, biological insecticides, and traditional seeds can greatly lower the hurdles for new growers.
                  </p>
                </div>

                {/* Certification */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    3️⃣ Certification & Government Schemes
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Organic certification is critical since it builds market trust and raises costs. Farmers should be supported for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>PGS and NPOP certification</li>
                    <li>Government subsidies</li>
                    <li>Organic cluster programs</li>
                    <li>Paramparagat Krishi Vikas Yojana (PKVY)</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Helping farmers comprehend documents and processes helps accelerate certifications.
                  </p>
                </div>

                {/* Market Linkages */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    4️⃣ Market Linkages: The Real Game-Changer
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Many organic farmers grow high-quality products yet struggle to sell them at a reasonable price. Support in:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Farm-to-market supply chain</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Business-to-business partnerships</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Wholesale buyers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Online platforms</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Farmer Producer Organizations (FPOs)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Brand building</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    can ensure that farmers get what they genuinely deserve.
                  </p>
                </div>

                {/* Digital Support */}
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-lg">
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                    5️⃣ Digital Support and Technology
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Technology can simplify organic farming by offering:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Soil health applications</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Organic input calculators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Precision farming tools</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Weather forecasts</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Market pricing updates</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-emerald-950 font-bold">•</span>
                      <span className="text-gray-700">Direct-to-consumer sales platforms</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Digital solutions minimize guesswork and boost efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Future of Organic Farming */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Future of Organic Farming in India
              </h2>
              <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                India is already the world's largest organic producer in terms of farmer numbers. With the correct backing, India can become a global leader in organic supply.
              </p>
              <p className="text-lg text-emerald-950 font-semibold mb-4">
                Why Farmers can quadruple their incomes:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Soil fertility and biodiversity will improve</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">Rural youth will have access to better agri-jobs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-emerald-950 text-xl font-bold">•</span>
                  <span className="text-gray-700">The food chain will be healthier and safer</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Organic farming is not only a method; it represents the future of sustainable agriculture.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
              <h2 className="subheading font-[curvyText] text-white mb-6">
                🌿 Final Thoughts
              </h2>
              <div className="w-24 h-1 bg-[#D4DBB1] mb-6"></div>
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                Organic farming support is not just beneficial — it is essential. When farmers receive the right tools, training, and market access, they can produce healthy food, earn higher income, and contribute to a cleaner environment.
              </p>
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                With collaborative efforts from organizations, governments, and agri-startups like Spectrum Agriculture, we can create a farming ecosystem where:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Farmers grow with dignity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Soil lives longer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">Consumers trust their food</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4DBB1] text-xl">•</span>
                  <span className="text-emerald-100">India becomes a global leader in organic produce</span>
                </div>
              </div>
              <p className="text-xl text-white font-semibold leading-relaxed">
                Organic farming is not just the need of the hour — it is the beginning of a new agricultural revolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SupportFarmers

