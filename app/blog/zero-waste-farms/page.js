'use client'
import React from 'react'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'

const ZeroWasteFarms = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              Building Zero-Waste Farm Ecosystems
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Turning crop residue, surplus produce, and organic matter into profitable circular
              businesses for farmer collectives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Indian agriculture wastes nearly 30% of what it grows. Spectrum Agriculture pilots
                zero-waste modules that treat every residue stream as a resource—from biochar to cold
                chain partnerships.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Farmer cooperatives operate the units and capture new revenue while keeping villages
                cleaner.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                The Three-Loop System
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Bio-input Loop',
                    detail:
                      'Vermicompost pits, fermented cow-dung inoculants, and nano-nutrient sprays replace synthetic fertilizers.'
                  },
                  {
                    title: 'Energy Loop',
                    detail:
                      'Mini biogas digesters fuel community kitchens and dryers while supplying slurry for fields.'
                  },
                  {
                    title: 'Market Loop',
                    detail:
                      'Grading and dehydration hubs convert surplus fruits and vegetables into shelf-stable powders and snacks.'
                  }
                ].map(section => (
                  <div key={section.title} className="border-l-4 border-emerald-950 pl-6 bg-emerald-50 rounded-r-lg py-4">
                    <h3 className="text-xl font-semibold text-emerald-950 mb-2">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Economics that Work
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                <li>Average collective earns ₹3.2 lakh annually from residue valorisation.</li>
                <li>Drying units extend shelf life from 3 days to 8 months for delicate produce.</li>
                <li>Biochar blended with compost sells to urban gardeners via e-commerce partners.</li>
                <li>Village youth manage operations, creating dignified green jobs.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
              <h2 className="subheading font-[curvyText] text-white mb-4">
                Roadmap for Expansion
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed">
                Spectrum will replicate zero-waste hubs along major procurement clusters, linking
                them directly to conscious brands needing traceable ingredients. The outcome:
                cleaner villages, more revenue per acre, and responsible supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ZeroWasteFarms

