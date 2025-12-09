'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import blogs from '../../_data/blogs'

const BlogSection = () => {
  const featuredBlogs = useMemo(() => {
    const shuffled = [...blogs]
    shuffled.sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 6)
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? featuredBlogs.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev === featuredBlogs.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-semibold">
              Spectrum Blogs
            </p>
            <h2 className="heading text-3xl md:text-4xl font-bold text-emerald-950 mt-3">
              Stories from the Field
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Explore six hand-picked stories covering sustainability, technology, circular
              economies, and market linkages—each with a deep dive for curious readers.
            </p>
          </div>
          <Link
            href="/blog"
            className="self-start md:self-end px-6 py-3 rounded-full bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors"
          >
            View All Blogs
          </Link>
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-emerald-100">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredBlogs.map(blog => (
                <article key={blog.id} className="min-w-full p-6 md:p-10">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="overflow-hidden rounded-2xl shadow-lg h-64 lg:h-80 relative">
                      <Image
                        src={blog.cover}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">
                        {blog.category} • {blog.date}
                      </p>
                      <h3 className="text-3xl font-semibold text-emerald-950 mb-4">{blog.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">{blog.summary}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{blog.readTime} read</span>
                        <Link
                          href={blog.path}
                          className="px-6 py-2 rounded-full bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 bg-white text-emerald-950 w-12 h-12 rounded-full shadow-lg border border-emerald-100 flex items-center justify-center hover:bg-emerald-950 hover:text-white transition-all"
            aria-label="Previous blog"
          >
            <FiArrowLeft size={22} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 bg-white text-emerald-950 w-12 h-12 rounded-full shadow-lg border border-emerald-100 flex items-center justify-center hover:bg-emerald-950 hover:text-white transition-all"
            aria-label="Next blog"
          >
            <FiArrowRight size={22} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {featuredBlogs.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? 'bg-emerald-900 scale-110' : 'bg-emerald-200'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection