'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from '../../_components/navbar'
import Footer from '../../_components/footer'

const TransformingAgriculture = () => {
    return (
        <div className="w-full min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading font-[curvyText] text-white mb-6">
                            Transforming Indian Sustainable Agriculture with Innovation and Purpose
                        </h1>
                        <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
                        <p className="text-lg text-emerald-100 leading-relaxed">
                            Agriculture in India is changing rapidly, and farmers today need more than traditional practices to succeed.
                            They need sustainable agriculture, reliable markets, modern support systems, and trustworthy partners who guide
                            them toward long-term growth.
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
                                Spectrum Marketing and Service Private Limited was created to fulfill this exact need.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Spectrum is an emerging agri business in India, dedicated to empowering farmers, supporting rural communities,
                                and building a future-ready farming ecosystem. Through our four specialized models—<strong>Spectrum Setu</strong>,
                                <strong> Spectrum Krishi</strong>, <strong>Spectrum Suddh</strong>, and <strong>Spectrum Vikash</strong>—we are
                                working to make farming more profitable, transparent, and sustainable.
                            </p>
                            <p className="text-xl text-emerald-950 font-semibold leading-relaxed">
                                Our commitment is simple: bring innovation, opportunity, and empowerment to Indian agriculture.
                            </p>
                        </div>

                        {/* Company Introduction */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                                1. Company Introduction
                            </h2>
                            <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Spectrum Marketing and Service Private Limited is a forward-focused agriculture enterprise in India offering
                                integrated farm-to-market solutions. Built on the foundation of trust, innovation, and farmer-first values,
                                Spectrum connects the farming community with modern market needs.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We work with farmers, businesses, retailers, and investors to create a seamless agricultural ecosystem that
                                supports <Link href="/blog/zero-waste-farms/" className="text-emerald-950 font-semibold underline hover:text-emerald-700">zero-waste farming</Link>,
                                organic cultivation, fair prices, and long-term growth.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our core objective is to build a platform where farmers prosper, businesses gain reliable supply chains, and
                                India moves toward a future of sustainable agriculture and food security.
                            </p>
                        </div>

                        {/* What We Do */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                                2. What We Do
                            </h2>
                            <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Spectrum provides end-to-end agricultural services designed to increase efficiency, enhance productivity, and
                                improve the income of farmers.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We offer solutions for farmers who want to grow better, businesses who want reliable sourcing, and organizations
                                who wish to invest or partner in agriculture projects.
                            </p>
                            <div className="bg-emerald-50 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-emerald-950 mb-4">Our work includes:</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Farm development and management',
                                        'Market connection and buyer sourcing',
                                        'Organic and clean food support',
                                        'Farmer empowerment programs',
                                        'Sustainability and zero-waste farming initiatives',
                                        'End-to-end farm-to-market solutions'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <span className="text-emerald-950 text-xl font-bold">•</span>
                                            <span className="text-gray-700 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Four Core Service Models */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                                3. Our Four Core Service Models
                            </h2>
                            <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Spectrum operates through four powerful service models that define our work and values.
                            </p>

                            {/* Spectrum Setu */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border-l-4 border-emerald-950">
                                <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                                    1. Spectrum Setu – The Bridge Connecting Farmers and Markets
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Spectrum Setu acts as a bridge between farmers and large buyers. The goal is to make the supply chain
                                    transparent, efficient, and fair for both sides.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Through Setu, we enable transparent and efficient <Link href="/blog/support-farmers/" className="text-emerald-950 font-semibold underline hover:text-emerald-700">B2B farm-to-market solutions</Link>.
                                </p>
                                <div className="bg-white rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-emerald-950 mb-3">This model ensures:</h4>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        {[
                                            'Fair pricing',
                                            'Reliable demand',
                                            'Stronger buyer-seller relationships',
                                            'Reduced middlemen',
                                            'Better income stability for farmers',
                                            'Agricultural solutions',
                                            'Market information'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center space-x-2">
                                                <span className="text-emerald-950">✔</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Spectrum Krishi */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border-l-4 border-emerald-950">
                                <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                                    2. Spectrum Krishi – Integrated Farming Support for a Better Future
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Spectrum Krishi focuses on farming support, helping reduce the gap between farmers and markets.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Our aim is to create profitable and sustainable farming models, including:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        'Layered and integrated farming',
                                        'Mega farm development',
                                        'Climate-resilient agricultural practices',
                                        'Farmer guidance and mentoring',
                                        'Sustainable agriculture planning'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <span className="text-emerald-950 text-xl font-bold">•</span>
                                            <span className="text-gray-700 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                    Spectrum Krishi is built to transform agriculture into a stable livelihood option while ensuring fair prices
                                    and increased revenue for farmers.
                                </p>
                            </div>

                            {/* Spectrum Suddh */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border-l-4 border-emerald-950">
                                <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                                    3. Spectrum Suddh – Quality, Purity & Organic Produce Support
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Spectrum Suddh focuses on promoting organic, clean, and chemical-free farming. Suddh supports farmers and
                                    retailers by ensuring clean, safe, and high-quality agricultural produce.
                                </p>
                                <div className="bg-white rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-emerald-950 mb-3">Its services include:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            'Quality checking',
                                            'Organic farming support',
                                            'Clean produce promotion',
                                            'Training for safe and pure cultivation',
                                            'Ensuring better crop quality for farmers and retailers'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <span className="text-emerald-950 text-xl font-bold">•</span>
                                                <span className="text-gray-700 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                    With Spectrum Suddh, we aim to build India's most reliable organic farming company model by helping farmers
                                    adopt natural practices and supplying high-quality produce to the market.
                                </p>
                            </div>

                            {/* Spectrum Vikash */}
                            <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border-l-4 border-emerald-950">
                                <h3 className="text-2xl font-semibold text-emerald-950 mb-4">
                                    4. Spectrum Vikash – Development, Growth & Farmer Empowerment
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Spectrum Vikash drives long-term agricultural growth and community development. It focuses on improving every
                                    aspect of farming operations and rural livelihood.
                                </p>
                                <div className="bg-white rounded-lg p-4 mt-4">
                                    <h4 className="font-semibold text-emerald-950 mb-3">This model includes:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            'Full farming operations (from seeding to market access)',
                                            'Farmer empowerment and training',
                                            'Market linkage and business expansion',
                                            'Warehouse and cold storage setups',
                                            'Research & development',
                                            'Processing units',
                                            'Rural employment generation',
                                            'Stakeholder growth programs'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <span className="text-emerald-950 text-xl font-bold">•</span>
                                                <span className="text-gray-700 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                                    Spectrum Vikash aims to uplift farmers and communities by creating sustainable income, improving infrastructure,
                                    and building a resilient rural economy.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                                4. Our Vision
                            </h2>
                            <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our vision is to lead a transformative shift in agriculture by integrating innovation, sustainability, and
                                inclusivity—empowering farmers, strengthening rural economies, and building a resilient, food-secure future
                                for generations to come.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This vision guides every decision at Spectrum. We want to build a future where <Link href="/blog/why-spectrum/" className="text-emerald-950 font-semibold underline hover:text-emerald-700">sustainable agriculture</Link>,
                                organic farming, and zero-waste farming become the new standards across India.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                                5. Our Mission
                            </h2>
                            <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our mission is to build a sustainable and inclusive future for India's farmers by creating a comprehensive
                                farming ecosystem that empowers them with knowledge, technology, and access to market opportunities.
                            </p>
                        </div>

                        {/* Future Goals */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                                6. Future Goals of Spectrum
                            </h2>
                            <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Spectrum is growing, and our future goals reflect our aim to create national-level agricultural impact.
                            </p>
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Becoming a leading Spectrum Agriculture ecosystem in India',
                                        desc: 'With a strong presence across multiple states.'
                                    },
                                    {
                                        title: 'Establishing large-scale organic and zero-waste farming clusters',
                                        desc: 'To support natural, sustainable cultivation.'
                                    },
                                    {
                                        title: 'Creating India\'s strongest farm-to-market network',
                                        desc: 'Where buyers, investors, and farmers can collaborate seamlessly.'
                                    },
                                    {
                                        title: 'Building processing, warehousing & cold storage units',
                                        desc: 'To reduce food loss, improve quality, and increase farmer income.'
                                    },
                                    {
                                        title: 'Expanding into agritech innovations',
                                        desc: 'Including data-driven farming, market intelligence, and traceability.'
                                    },
                                    {
                                        title: 'Partnering with businesses & investors',
                                        desc: 'Who want to support sustainable agriculture India and contribute to rural development.'
                                    },
                                    {
                                        title: 'Empowering farmers through continuous training',
                                        desc: 'Enhancing knowledge of soil health, organic cultivation, and modern technologies.'
                                    }
                                ].map((goal, idx) => (
                                    <div key={idx} className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                                        <span className="text-emerald-950 text-xl font-bold">✔</span>
                                        <div>
                                            <h4 className="font-semibold text-emerald-950 mb-1">{goal.title}</h4>
                                            <p className="text-gray-700">{goal.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Spectrum Matters */}
                        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                            <h2 className="subheading font-[curvyText] text-emerald-950 mb-6">
                                Why Spectrum Matters
                            </h2>
                            <div className="w-24 h-1 bg-emerald-950 mb-6"></div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Spectrum is more than a company—it is a movement for <Link href="/blog/market-linkages/" className="text-emerald-950 font-semibold underline hover:text-emerald-700">farmer empowerment</Link>,
                                agricultural transformation, and sustainable growth.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    'Fair opportunities',
                                    'Clean and organic farming',
                                    'Community development',
                                    'Value-driven partnerships',
                                    'Reliable agriculture solutions'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                                        <span className="text-emerald-950 text-xl font-bold">•</span>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mt-6">
                                With every model—Setu, Krishi, Suddh, and Vikash—we are working to create a better tomorrow for Indian agriculture.
                            </p>
                        </div>

                        {/* Conclusion */}
                        <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-lg shadow-lg p-8 text-white">
                            <h2 className="subheading font-[curvyText] text-white mb-6">
                                Conclusion
                            </h2>
                            <div className="w-24 h-1 bg-[#D4DBB1] mb-6"></div>
                            <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                                Spectrum Marketing and Service Private Limited is committed to shaping the next era of Indian agriculture.
                                Through our innovative service models, strong values, and farmer-first approach, we aim to become India's most
                                trusted partner in sustainable agriculture, organic farming, and farm-to-market solutions.
                            </p>
                            <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                                Our work is guided by simplicity, transparency, and the belief that when farmers grow, the entire nation grows.
                            </p>
                            <p className="text-xl text-white font-semibold leading-relaxed">
                                We believe the future of agriculture lies in innovation, collaboration, and empowerment—and Spectrum is
                                committed to being a key contributor to that future.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default TransformingAgriculture
