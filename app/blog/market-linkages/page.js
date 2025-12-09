'use client'
import React from 'react'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'

const MarketLinkages = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              Designing Transparent Market Linkages for Farmers
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Spectrum's demand-first supply chains connect organic farmers with retailers, F&B
              brands, and export markets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Farmers often grow first and search for buyers later. Spectrum reverses the flow by
                locking demand, quality specs, and logistics before a single seed is sown.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our market linkage program gives farmers visibility on prices, timelines, and
                sustainability requirements months in advance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                How the Marketplace Works
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Demand Capture',
                    copy:
                      'Dedicated sourcing managers co-create annual procurement plans with retail and HoReCa partners.'
                  },
                  {
                    title: 'Quality & Traceability',
                    copy:
                      'Spectrum tags every lot with blockchain-backed traceability, lab reports, and farmer stories.'
                  },
                  {
                    title: 'Cold Chain & Logistics',
                    copy:
                      'Hub-and-spoke collection centers, reefer vans, and partner warehouses extend shelf life.'
                  },
                  {
                    title: 'Fair Contracts',
                    copy:
                      'Farmers sign forward contracts with floor prices and upside sharing to ride market highs.'
                  }
                ].map(item => (
                  <div key={item.title} className="p-6 border border-emerald-100 rounded-lg bg-gradient-to-br from-white to-emerald-50">
                    <h3 className="text-xl font-semibold text-emerald-950 mb-3">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Proof from the Field
              </h2>
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li>Retailers retain 98% of Spectrum supply partners due to consistency.</li>
                <li>Farmers receive payments within 72 hours via digital escrow accounts.</li>
                <li>Export buyers achieve full container loads with single-origin produce.</li>
                <li>Waste is down 22% because volumes match actual demand.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
              <h2 className="subheading font-[curvyText] text-white mb-4">
                Partner with Spectrum
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed">
                We invite conscious brands, institutional buyers, and agri-startups to plug into our
                transparent supply network. Together we can give farmers predictable markets and give
                consumers produce they trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MarketLinkages

