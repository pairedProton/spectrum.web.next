'use client'

import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqData = [
  {
    question: 'What is organic farming?',
    answer: 'Organic farming uses natural inputs, avoids chemicals, and focuses on healthy soil and sustainable agriculture.'
  },
  {
    question: 'How does organic farming support help farmers?',
    answer: 'It provides training, organic inputs, certification assistance, and farm-to-market linkage for better income.'
  },
  {
    question: 'Why is organic farming beneficial for farmers?',
    answer: 'Lower input cost, improved soil health, higher market prices, and long-term profitability.'
  },
  {
    question: 'How can farmers sell organic produce?',
    answer: 'Through FPOs, retailers, online platforms, or direct partnerships via solutions like Spectrum Setu.'
  },
  {
    question: 'How does Spectrum Agriculture support farmers?',
    answer: 'Through Krishi (farm advisory), Shuddh (organic produce), Setu (market linkage), and Vikas (farmer empowerment).'
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-semibold mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="heading text-3xl md:text-4xl font-bold text-emerald-950 mt-3 font-[curvyText]">
            FAQ
          </h2>
          <div className="w-24 h-1 bg-emerald-950 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-emerald-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none  focus:ring-emerald-900 focus:ring-offset-2 rounded-xl"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-emerald-950 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-emerald-900">
                  {openIndex === index ? (
                    <FiChevronUp size={24} />
                  ) : (
                    <FiChevronDown size={24} />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection