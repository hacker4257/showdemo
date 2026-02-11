'use client'

import Link from 'next/link'
import { ArrowRight, Beaker, Shield, Globe2, TrendingUp } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export default function Home() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                {t.home.hero.browseProducts} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                {t.home.hero.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.home.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.home.features.purity.title}</h3>
              <p className="text-gray-600 text-sm">{t.home.features.purity.desc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.home.features.quality.title}</h3>
              <p className="text-gray-600 text-sm">{t.home.features.quality.desc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.home.features.shipping.title}</h3>
              <p className="text-gray-600 text-sm">{t.home.features.shipping.desc}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.home.features.pricing.title}</h3>
              <p className="text-gray-600 text-sm">{t.home.features.pricing.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.home.categories.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/products?category=small-molecules" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">{t.home.categories.smallMolecules.title}</h3>
                <p className="text-gray-600 mb-4">{t.home.categories.smallMolecules.desc}</p>
                <span className="text-blue-600 font-medium flex items-center gap-2">
                  {t.home.categories.explore} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link href="/products?category=biologics" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">{t.home.categories.biologics.title}</h3>
                <p className="text-gray-600 mb-4">{t.home.categories.biologics.desc}</p>
                <span className="text-blue-600 font-medium flex items-center gap-2">
                  {t.home.categories.explore} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link href="/products?category=peptides" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">{t.home.categories.peptides.title}</h3>
                <p className="text-gray-600 mb-4">{t.home.categories.peptides.desc}</p>
                <span className="text-blue-600 font-medium flex items-center gap-2">
                  {t.home.categories.explore} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.home.cta.title}</h2>
          <p className="text-xl mb-8 text-blue-100">{t.home.cta.subtitle}</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            {t.home.cta.button}
          </Link>
        </div>
      </section>
    </div>
  )
}
