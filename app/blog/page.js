'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../_components/navbar'
import Footer from '../_components/footer'
import blogs from '../_data/blogs'

const Blog = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-emerald-950 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading font-[curvyText] text-white mb-6">
              Spectrum Agriculture Blog
            </h1>
            <div className="w-24 h-1 bg-[#D4DBB1] mx-auto mb-6"></div>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Stories, playbooks, and field notes on building sustainable, profitable farming
              ecosystems across India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map(blog => (
              <article
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-emerald-50 flex flex-col"
              >
                <figure className="h-56 w-full overflow-hidden relative">
                  <Image
                    src={blog.cover}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </figure>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold mb-2">
                    {blog.category} • {blog.date}
                  </p>
                  <h3 className="text-2xl font-semibold text-emerald-950 mb-3">{blog.title}</h3>
                  <p className="text-gray-700 leading-relaxed flex-1 mb-4">{blog.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.readTime} read</span>
                    <Link
                      href={blog.path}
                      className="px-5 py-2 rounded-full bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blog