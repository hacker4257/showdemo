# PharmaTrade - 医药外贸电商平台

一个专业的医药外贸电商网站，类似 ChemExpress，用于展示和销售医药化合物、生物制品等研究用化学品。

## 🚀 技术栈

- **前端框架**: Next.js 14+ (App Router)
- **UI 框架**: React 18+ with TypeScript
- **样式**: Tailwind CSS
- **数据库**: PostgreSQL
- **ORM**: Prisma
- **表单验证**: Zod + React Hook Form
- **图标**: Lucide React
- **认证**: NextAuth.js (待实现)

## ✨ 主要功能

### 已实现功能

- ✅ 响应式首页（Hero、特性展示、产品分类）
- ✅ 产品目录页面（搜索、筛选、分页）
- ✅ 产品详情页（完整产品信息、化学结构、规格）
- ✅ 询价系统（模态框表单）
- ✅ 联系页面（联系表单）
- ✅ 关于我们页面
- ✅ 专业医药行业设计（蓝白配色）
- ✅ 数据库模型设计（Prisma Schema）
- ✅ API 路由（询价、联系表单）

### 待实现功能

- ⏳ 多语言支持（中英文切换）
- ⏳ 后台管理系统
- ⏳ 用户认证系统
- ⏳ 邮件通知功能
- ⏳ 产品图片上传
- ⏳ 高级搜索功能
- ⏳ 购物车功能（可选）

## 📦 安装和运行

### 前置要求

- Node.js 18+
- PostgreSQL 数据库
- npm 或 yarn

### 1. 克隆项目

```bash
cd pharma-trade
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制 `.env.example` 到 `.env` 并填写配置：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# 数据库连接
DATABASE_URL="postgresql://user:password@localhost:5432/pharma_trade"

# NextAuth 配置
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# 邮件配置（用于询价通知）
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM="noreply@yourcompany.com"

# 管理员账号
ADMIN_EMAIL="admin@yourcompany.com"
ADMIN_PASSWORD="change-this-password"
```

### 4. 初始化数据库

```bash
# 生成 Prisma Client
npx prisma generate

# 运行数据库迁移
npx prisma migrate dev --name init

# （可选）填充示例数据
npx prisma db seed
```

### 5. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 🗄️ 数据库结构

### 主要表

- **Product** - 产品信息（名称、CAS号、分子式、纯度等）
- **Category** - 产品分类（小分子、生物制品、肽类等）
- **Inquiry** - 询价记录
- **Contact** - 联系表单提交
- **User** - 管理员用户

详见 `prisma/schema.prisma`

## 📁 项目结构

```
pharma-trade/
├── app/                      # Next.js App Router
│   ├── api/                 # API 路由
│   │   ├── inquiries/       # 询价 API
│   │   └── contact/         # 联系表单 API
│   ├── products/            # 产品页面
│   │   ├── [id]/           # 产品详情
│   │   └── page.tsx        # 产品列表
│   ├── about/              # 关于我们
│   ├── contact/            # 联系页面
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── components/              # React 组件
│   ├── layout/             # 布局组件（Header, Footer）
│   └── products/           # 产品相关组件
├── lib/                     # 工具函数
│   ├── db/                 # 数据库配置
│   └── utils.ts            # 通用工具
├── prisma/                  # Prisma 配置
│   └── schema.prisma       # 数据库模型
├── types/                   # TypeScript 类型定义
└── public/                  # 静态资源
```

## 🚀 部署

### Vercel 部署（推荐）

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量
4. 部署

### 自托管部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

### Docker 部署（可选）

```dockerfile
# Dockerfile 示例
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 开发指南

### 添加新产品

1. 使用 Prisma Studio: `npx prisma studio`
2. 或通过后台管理系统（待实现）
3. 或直接操作数据库

### 自定义样式

- 主题色在 `tailwind.config.ts` 中配置
- 全局样式在 `app/globals.css`

### API 端点

- `POST /api/inquiries` - 提交询价
- `GET /api/inquiries` - 获取询价列表（需认证）
- `POST /api/contact` - 提交联系表单

## 📝 待办事项

- [ ] 实现多语言支持（next-intl）
- [ ] 实现后台管理系统
- [ ] 添加用户认证（NextAuth.js）
- [ ] 集成邮件服务（Nodemailer）
- [ ] 添加产品图片上传功能
- [ ] 实现高级搜索和筛选
- [ ] 添加单元测试
- [ ] SEO 优化
- [ ] 性能优化

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题，请联系：info@pharmatrade.com
