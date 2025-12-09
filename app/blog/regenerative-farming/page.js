'use client'
import React from 'react'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'

const RegenerativeFarming = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              Scaling Regenerative Farming Across India's Heartlands
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              How Spectrum Agriculture helps farmers rebuild soil, capture carbon, and earn more
              through regenerative practices.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Regenerative agriculture is more than a buzzword—it is a practical path to healing
                soil, managing water, and building climate resilience. At Spectrum Agriculture we
                pair farmer wisdom with research-backed protocols to make regenerative transitions
                realistic for smallholders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Field teams co-design crop plans, input schedules, and verification protocols so
                that every acre rehabilitated translates into measurable income.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                The Regenerative Blueprint
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Multi-layer Cropping',
                    copy:
                      'Stacking fruit trees, intercrops, and soil-cover species to ensure year-round income and nitrogen fixation.'
                  },
                  {
                    title: 'Living Soil Labs',
                    copy:
                      'Community labs test soil biology quarterly and create low-cost bio inputs to replace chemicals.'
                  },
                  {
                    title: 'Water Positive Villages',
                    copy:
                      'Contour bunds, farm ponds, and IoT moisture tracking reduce water stress and power micro-irrigation.'
                  },
                  {
                    title: 'Carbon & Outcome Tracking',
                    copy:
                      'Digital field diaries capture practice adoption, enabling carbon credit monetisation for farmer collectives.'
                  }
                ].map(block => (
                  <div
                    key={block.title}
                    className="p-6 border border-emerald-100 rounded-lg bg-gradient-to-br from-emerald-50 to-white"
                  >
                    <h3 className="text-xl font-semibold text-emerald-950 mb-3">{block.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{block.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Impact After Two Seasons
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li>
                  <span className="text-emerald-950 font-semibold">+38% net income:</span> Achieved
                  through diversified harvest cycles and premium pricing.
                </li>
                <li>
                  <span className="text-emerald-950 font-semibold">60% lower chemical spend:</span>{' '}
                  Thanks to microbial inputs, bio-fertilizers, and pest scouting.
                </li>
                <li>
                  <span className="text-emerald-950 font-semibold">15% higher soil organic carbon:</span>
                  Verified via blended lab and satellite data.
                </li>
                <li>
                  <span className="text-emerald-950 font-semibold">Women-led field schools:</span>{' '}
                  42 producer groups now run their own regenerative nurseries.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
              <h2 className="subheading font-[curvyText] text-white mb-4">
                Looking Ahead
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed">
                Spectrum's goal is to convert 50,000 acres to regenerative systems by 2027 with
                transparent monitoring and assured market linkages. Every farmer trained becomes a
                local coach, multiplying the movement village by village.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RegenerativeFarming

