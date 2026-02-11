'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Locale = 'en' | 'zh'

interface Messages {
  nav: {
    home: string
    products: string
    categories: string
    about: string
    contact: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      browseProducts: string
      requestQuote: string
    }
    features: {
      title: string
      purity: { title: string; desc: string }
      quality: { title: string; desc: string }
      shipping: { title: string; desc: string }
      pricing: { title: string; desc: string }
    }
    categories: {
      title: string
      smallMolecules: { title: string; desc: string }
      biologics: { title: string; desc: string }
      peptides: { title: string; desc: string }
      explore: string
    }
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const enMessages: Messages = {
  nav: {
    home: "Home",
    products: "Products",
    categories: "Categories",
    about: "About Us",
    contact: "Contact"
  },
  home: {
    hero: {
      title: "Global Leader in Pharmaceutical Solutions",
      subtitle: "High-quality compounds for drug discovery and development",
      browseProducts: "Browse Products",
      requestQuote: "Request Quote"
    },
    features: {
      title: "Why Choose PharmaTrade",
      purity: {
        title: "High Purity",
        desc: "≥98% purity guaranteed on all compounds"
      },
      quality: {
        title: "Quality Assured",
        desc: "ISO certified manufacturing facilities"
      },
      shipping: {
        title: "Global Shipping",
        desc: "Fast delivery to 100+ countries"
      },
      pricing: {
        title: "Competitive Pricing",
        desc: "Best value for research-grade compounds"
      }
    },
    categories: {
      title: "Product Categories",
      smallMolecules: {
        title: "Small Molecules",
        desc: "Comprehensive library of small molecule compounds for drug discovery"
      },
      biologics: {
        title: "Biologics",
        desc: "High-quality biologics and biosimilars for research applications"
      },
      peptides: {
        title: "Peptides",
        desc: "Custom peptide synthesis and catalog peptides"
      },
      explore: "Explore"
    },
    cta: {
      title: "Ready to Start Your Research?",
      subtitle: "Contact our team for custom synthesis and bulk orders",
      button: "Get in Touch"
    }
  }
}

const zhMessages: Messages = {
  nav: {
    home: "首页",
    products: "产品",
    categories: "分类",
    about: "关于我们",
    contact: "联系我们"
  },
  home: {
    hero: {
      title: "全球领先的医药解决方案供应商",
      subtitle: "为药物发现和开发提供高质量化合物",
      browseProducts: "浏览产品",
      requestQuote: "申请报价"
    },
    features: {
      title: "为什么选择 PharmaTrade",
      purity: {
        title: "高纯度",
        desc: "所有化合物保证纯度≥98%"
      },
      quality: {
        title: "质量保证",
        desc: "ISO认证的生产设施"
      },
      shipping: {
        title: "全球配送",
        desc: "快速配送至100多个国家"
      },
      pricing: {
        title: "竞争力价格",
        desc: "研究级化合物的最佳性价比"
      }
    },
    categories: {
      title: "产品分类",
      smallMolecules: {
        title: "小分子化合物",
        desc: "用于药物发现的全面小分子化合物库"
      },
      biologics: {
        title: "生物制品",
        desc: "用于研究应用的高质量生物制品和生物类似药"
      },
      peptides: {
        title: "肽类",
        desc: "定制肽合成和目录肽"
      },
      explore: "探索"
    },
    cta: {
      title: "准备开始您的研究了吗？",
      subtitle: "联系我们的团队进行定制合成和批量订购",
      button: "联系我们"
    }
  }
}

const messages = { en: enMessages, zh: zhMessages }

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('locale') as Locale
    if (saved && (saved === 'en' || saved === 'zh')) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (mounted) {
      localStorage.setItem('locale', newLocale)
    }
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
