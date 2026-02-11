# 快速开始指南

## 第一次运行

### 1. 安装依赖
```bash
npm install
```

### 2. 配置数据库

创建 `.env` 文件：
```bash
cp .env.example .env
```

编辑 `.env`，配置 PostgreSQL 数据库连接：
```env
DATABASE_URL="postgresql://user:password@localhost:5432/pharma_trade"
```

### 3. 初始化数据库

```bash
# 生成 Prisma Client
npm run db:generate

# 创建数据库表
npm run db:migrate

# 填充示例数据
npm run db:seed
```

### 4. 启动开发服务器

```bash
npm run dev
```

或者在 Windows 上双击 `start.bat`

访问 http://localhost:3000

## 示例数据

种子脚本会创建：
- 4 个产品分类
- 6 个示例产品
- 1 个管理员账号（admin@pharmatrade.com / admin123）

## 常用命令

```bash
# 开发
npm run dev              # 启动开发服务器

# 数据库
npm run db:generate      # 生成 Prisma Client
npm run db:migrate       # 运行数据库迁移
npm run db:seed          # 填充示例数据
npm run db:studio        # 打开 Prisma Studio（数据库管理界面）

# 生产
npm run build            # 构建生产版本
npm start                # 启动生产服务器
```

## 页面导航

- 首页: http://localhost:3000
- 产品列表: http://localhost:3000/products
- 产品详情: http://localhost:3000/products/[id]
- 关于我们: http://localhost:3000/about
- 联系我们: http://localhost:3000/contact

## 数据库管理

使用 Prisma Studio 可视化管理数据库：
```bash
npm run db:studio
```

访问 http://localhost:5555

## 故障排除

### 数据库连接失败
- 确保 PostgreSQL 正在运行
- 检查 `.env` 中的 `DATABASE_URL` 是否正确
- 确保数据库已创建

### 端口被占用
如果 3000 端口被占用，Next.js 会自动使用下一个可用端口

### 依赖安装失败
尝试清除缓存：
```bash
rm -rf node_modules package-lock.json
npm install
```

## 下一步

- 配置邮件服务（SMTP）用于询价通知
- 实现多语言支持
- 开发后台管理系统
- 添加更多产品数据
- 部署到生产环境

详见 README.md
