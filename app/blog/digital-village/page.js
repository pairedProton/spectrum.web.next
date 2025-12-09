'use client'
import React from 'react'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'

const DigitalVillage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              The Digital Village Playbook for Empowered Farmers
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              How spectrum deploys advisory apps, IoT, and community data hubs to put intelligence in
              every farmer's pocket.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Technology is only meaningful when it is accessible. Spectrum Agriculture builds
                Digital Village Centers staffed by agri-youth who translate satellite data, weather
                alerts, and crop advisory into hyperlocal decisions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our multilingual mobile app works offline-first, syncing whenever connectivity
                returns so that advice never pauses.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                What the Digital Stack Includes
              </h2>
              <div className="space-y-5">
                {[
                  'Soil health passports linked to QR codes on every plot',
                  'AI-supported pest diagnostics with photo uploads analyzed by agronomists',
                  'Market dashboards broadcasting live prices from nearby mandis and buyers',
                  'Credit scores based on actual farm records, unlocking low-interest working capital'
                ].map(item => (
                  <div key={item} className="flex items-start space-x-3">
                    <span className="text-emerald-950 text-xl font-bold">•</span>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Human + Tech Partnerships
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Each Digital Village Center is co-owned by a farmer producer group. Spectrum trains a
                three-person command team—an agronomist, a data steward, and a logistics coordinator.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This blend ensures that farmers get trusted advice from people they already know,
                backed by strong analytics.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
              <h2 className="subheading font-[curvyText] text-white mb-4">Results to Date</h2>
              <ul className="space-y-3 text-emerald-100 text-lg leading-relaxed">
                <li>12,000 farmers receiving predictive irrigation alerts every week</li>
                <li>24% reduction in crop loss during unpredictable rain spells</li>
                <li>3x faster access to institutional credit through verified farm data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DigitalVillage

