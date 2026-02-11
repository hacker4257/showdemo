# 使用 Cloudflare Pages 部署

## 🚀 Cloudflare Pages 部署指南

Cloudflare Pages 完全免费，支持 Next.js，并且自带全球 CDN。

### 方法 1：通过 Cloudflare Dashboard（推荐）

#### 步骤 1：推送代码到 GitHub

```bash
# 如果还没有推送
git remote add origin https://github.com/你的用户名/pharma-trade.git
git branch -M main
git push -u origin main
```

#### 步骤 2：连接到 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择你的账户
3. 点击 "Workers & Pages"
4. 点击 "Create application" → "Pages" → "Connect to Git"
5. 授权 GitHub 并选择 `pharma-trade` 仓库

#### 步骤 3：配置构建设置

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: /
Node version: 18
```

#### 步骤 4：环境变量（可选）

如果需要数据库，添加：
- `DATABASE_URL`
- `NEXTAUTH_SECRET`

#### 步骤 5：部署

点击 "Save and Deploy"，等待 2-3 分钟。

---

### 方法 2：使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
cd pharma-trade
npx wrangler pages deploy .next --project-name=pharma-trade
```

---

## 🌐 绑定自定义域名

### 在 Cloudflare Pages 中绑定

1. 进入你的 Pages 项目
2. 点击 "Custom domains"
3. 点击 "Set up a custom domain"
4. 输入你的域名

### 如果域名在 Cloudflare

域名会自动配置，无需手动设置 DNS！

### 如果域名不在 Cloudflare

添加 CNAME 记录：
```
类型: CNAME
名称: @（或 www）
目标: your-project.pages.dev
```

---

## ⚡ Cloudflare Workers（高级）

如果需要服务端功能（API 路由），可以使用 Cloudflare Workers。

### 创建 wrangler.toml

```toml
name = "pharma-trade"
main = "src/index.ts"
compatibility_date = "2024-01-01"

[site]
bucket = ".next"

[[routes]]
pattern = "yourdomain.com/*"
zone_name = "yourdomain.com"
```

### 部署 Worker

```bash
wrangler deploy
```

---

## 🎯 Cloudflare 优势

✅ **完全免费**
- 无限带宽
- 无限请求
- 全球 CDN

✅ **性能优异**
- 全球 300+ 数据中心
- 自动 DDoS 防护
- 自动 HTTPS

✅ **开发友好**
- 自动预览部署
- Git 集成
- 回滚功能

---

## 📊 对比

| 功能 | Cloudflare Pages | Vercel | Netlify |
|------|------------------|--------|---------|
| 免费带宽 | 无限 | 100GB/月 | 100GB/月 |
| 构建时间 | 无限 | 6000分钟/月 | 300分钟/月 |
| CDN | 全球 300+ | 全球 | 全球 |
| 自定义域名 | ✅ | ✅ | ✅ |
| 自动 HTTPS | ✅ | ✅ | ✅ |

---

## 🔄 自动部署

推送到 GitHub 后，Cloudflare Pages 自动：
1. 检测更新
2. 构建项目
3. 部署到全球 CDN
4. 生成预览链接

---

## 💡 最佳实践

1. **使用 Cloudflare DNS**
   - 域名转入 Cloudflare 可以自动配置
   - 享受免费 DDoS 防护

2. **启用缓存**
   - 静态资源自动缓存
   - 加速全球访问

3. **配置 Page Rules**
   - 自定义缓存策略
   - 重定向规则

---

## 🆘 故障排除

### 构建失败

检查：
- Node 版本是否为 18+
- 依赖是否完整安装
- 构建命令是否正确

### 域名不生效

- 等待 DNS 传播（5-30分钟）
- 检查 CNAME 记录是否正确
- 清除浏览器缓存

---

## 📞 获取帮助

- Cloudflare 文档：https://developers.cloudflare.com/pages
- Cloudflare 社区：https://community.cloudflare.com
- 项目文档：查看 `DEPLOYMENT.md`
