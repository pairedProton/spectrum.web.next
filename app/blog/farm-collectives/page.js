'use client'
import React from 'react'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'

const FarmerCollectives = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              Farmer Collectives: The Engine Behind Spectrum's Scale
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Why we bet on farmer producer companies (FPCs) and women self-help groups to lead the
              next agri revolution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Collective action rewires bargaining power. Spectrum invests in leadership coaching,
                governance systems, and compliance so that farmer institutions can negotiate as one.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each collective manages procurement, grading, and last-mile logistics with Spectrum's
                tech and capital support.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                What Strong Collectives Need
              </h2>
              <div className="space-y-5">
                {[
                  'Transparent governance playbooks and quarterly audits',
                  'Entrepreneurship bootcamps for board members and youth',
                  'Shared infrastructure—from packhouses to testing labs',
                  'Patient working capital that matches harvest cycles'
                ].map(line => (
                  <div key={line} className="flex items-start space-x-3">
                    <span className="text-emerald-950 text-xl font-bold">✔</span>
                    <p className="text-gray-700 leading-relaxed">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                Stories of Change
              </h2>
              <div className="space-y-4">
                <div className="border border-emerald-100 rounded-lg p-5 bg-gradient-to-br from-white to-emerald-50">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">Sundarban FPC</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Transitioned 800 acres to organic vegetables, secured a retail contract, and
                    doubled member dividends in one year.
                  </p>
                </div>
                <div className="border border-emerald-100 rounded-lg p-5 bg-gradient-to-br from-white to-emerald-50">
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">Mahila Shakti SHG</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Women entrepreneurs now run spice processing units, selling traceable masalas to
                    metro stores with Spectrum branding.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
              <h2 className="subheading font-[curvyText] text-white mb-4">
                The Future of Collective Power
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed">
                By 2026 Spectrum will incubate 120 thriving collectives with their own brands, export
                readiness, and youth leaders. We believe every successful agri-enterprise in India
                will be co-owned by the farmers who power it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FarmerCollectives

