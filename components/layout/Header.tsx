'use client'

import Link from 'next/link'
import { Search, Globe, Menu } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'

export default function Header() {
  const { locale, setLocale, t } = useI18n()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📧 info@pharmatrade.com</span>
            <span>📞 +1-800-PHARMA</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as 'en' | 'zh')}
              className="bg-transparent border-none text-white cursor-pointer focus:outline-none"
            >
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              PT
            </div>
            <div>
              <div className="font-bold text-xl text-blue-900">PharmaTrade</div>
              <div className="text-xs text-gray-600">Global Pharmaceutical Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              {t.nav.home}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              {t.nav.products}
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium">
                {t.nav.categories}
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                <Link href="/products?category=small-molecules" className="block px-4 py-2 hover:bg-blue-50">
                  {t.home.categories.smallMolecules.title}
                </Link>
                <Link href="/products?category=biologics" className="block px-4 py-2 hover:bg-blue-50">
                  {t.home.categories.biologics.title}
                </Link>
                <Link href="/products?category=peptides" className="block px-4 py-2 hover:bg-blue-50">
                  {t.home.categories.peptides.title}
                </Link>
                <Link href="/products?category=adcs" className="block px-4 py-2 hover:bg-blue-50">
                  ADCs/XDCs
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              {t.nav.contact}
            </Link>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
