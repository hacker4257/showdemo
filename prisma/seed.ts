import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('开始填充数据库...')

  // 创建分类
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: '小分子化合物',
        nameEn: 'Small Molecules',
        slug: 'small-molecules',
        description: '用于药物发现的小分子化合物库',
        descriptionEn: 'Comprehensive library of small molecule compounds for drug discovery',
      },
    }),
    prisma.category.create({
      data: {
        name: '生物制品',
        nameEn: 'Biologics',
        slug: 'biologics',
        description: '高质量生物制品和生物类似药',
        descriptionEn: 'High-quality biologics and biosimilars for research applications',
      },
    }),
    prisma.category.create({
      data: {
        name: '肽类',
        nameEn: 'Peptides',
        slug: 'peptides',
        description: '定制肽合成和目录肽',
        descriptionEn: 'Custom peptide synthesis and catalog peptides',
      },
    }),
    prisma.category.create({
      data: {
        name: 'ADCs/XDCs',
        nameEn: 'ADCs/XDCs',
        slug: 'adcs',
        description: '抗体药物偶联物',
        descriptionEn: 'Antibody-drug conjugates',
      },
    }),
  ])

  console.log('✓ 创建了 4 个分类')

  // 创建产品
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: '伊马替尼甲磺酸盐',
        nameEn: 'Imatinib Mesylate',
        casNumber: '220127-57-1',
        molecularFormula: 'C₂₉H₃₁N₇O·CH₄O₃S',
        molecularWeight: 589.7,
        purity: '≥98% (HPLC)',
        description: '伊马替尼甲磺酸盐是一种酪氨酸激酶抑制剂，用于治疗多种癌症，尤其是费城染色体阳性（Ph+）慢性粒细胞白血病（CML）。',
        descriptionEn: 'Imatinib mesylate is a tyrosine kinase inhibitor used in the treatment of multiple cancers, most notably Philadelphia chromosome-positive (Ph+) chronic myelogenous leukemia (CML).',
        specifications: JSON.stringify([
          { label: 'Appearance', value: 'White to off-white powder' },
          { label: 'Solubility', value: 'DMSO, Methanol' },
          { label: 'Storage', value: '-20°C, protect from light' },
        ]),
        applications: '癌症研究、激酶抑制剂研究、药物开发',
        applicationsEn: 'Cancer research, Kinase inhibitor studies, Drug development',
        categoryId: categories[0].id,
        inStock: true,
        featured: true,
      },
    }),
    prisma.product.create({
      data: {
        name: '厄洛替尼盐酸盐',
        nameEn: 'Erlotinib HCl',
        casNumber: '183319-69-9',
        molecularFormula: 'C₂₂H₂₃N₃O₄·HCl',
        molecularWeight: 429.9,
        purity: '≥99% (HPLC)',
        description: 'EGFR酪氨酸激酶抑制剂',
        descriptionEn: 'EGFR tyrosine kinase inhibitor',
        categoryId: categories[0].id,
        inStock: true,
        featured: true,
      },
    }),
    prisma.product.create({
      data: {
        name: '贝伐珠单抗生物类似药',
        nameEn: 'Bevacizumab Biosimilar',
        casNumber: '216974-75-3',
        molecularWeight: 149000,
        purity: '≥95%',
        description: 'VEGF单克隆抗体',
        descriptionEn: 'VEGF monoclonal antibody',
        categoryId: categories[1].id,
        inStock: true,
      },
    }),
    prisma.product.create({
      data: {
        name: '司美格鲁肽',
        nameEn: 'Semaglutide',
        casNumber: '910463-68-2',
        molecularWeight: 4113.6,
        purity: '≥98%',
        description: 'GLP-1受体激动剂肽',
        descriptionEn: 'GLP-1 receptor agonist peptide',
        categoryId: categories[2].id,
        inStock: true,
        featured: true,
      },
    }),
    prisma.product.create({
      data: {
        name: '曲妥珠单抗-美坦新偶联物',
        nameEn: 'Trastuzumab Emtansine',
        casNumber: '139504-50-0',
        purity: '≥97%',
        description: 'HER2靶向抗体药物偶联物',
        descriptionEn: 'HER2-targeted antibody-drug conjugate',
        categoryId: categories[3].id,
        inStock: true,
      },
    }),
    prisma.product.create({
      data: {
        name: '奥希替尼',
        nameEn: 'Osimertinib',
        casNumber: '1421373-65-0',
        molecularFormula: 'C₂₈H₃₃N₇O₂',
        molecularWeight: 499.6,
        purity: '≥99% (HPLC)',
        description: '第三代EGFR-TKI',
        descriptionEn: 'Third-generation EGFR-TKI',
        categoryId: categories[0].id,
        inStock: true,
        featured: true,
      },
    }),
  ])

  console.log(`✓ 创建了 ${products.length} 个产品`)

  // 创建管理员用户
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10)
  const admin = await prisma.user.create({
    data: {
      email: process.env.ADMIN_EMAIL || 'admin@pharmatrade.com',
      name: 'Admin',
      passwordHash: hashedPassword,
      role: 'SUPER_ADMIN',
    },
  })

  console.log(`✓ 创建了管理员用户: ${admin.email}`)

  console.log('\n数据库填充完成！')
}

main()
  .catch((e) => {
    console.error('错误:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
