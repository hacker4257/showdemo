# 🚀 快速部署指南

## 方法 1：Vercel（最简单，推荐）

### 步骤 1：推送到 GitHub

```bash
# 1. 在 GitHub 创建新仓库（不要初始化任何文件）
# 2. 复制仓库 URL，然后执行：

git remote add origin https://github.com/你的用户名/pharma-trade.git
git branch -M main
git push -u origin main
```

### 步骤 2：部署到 Vercel

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "Add New..." → "Project"
4. 选择 `pharma-trade` 仓库
5. 点击 "Deploy"

**完成！** 2-3 分钟后你的网站就上线了。

### 步骤 3：绑定域名

1. 在 Vercel 项目设置中点击 "Domains"
2. 输入你的域名
3. 按照提示配置 DNS

---

## 方法 2：Netlify

### 通过网页部署

1. 访问 https://netlify.com
2. 使用 GitHub 登录
3. "Add new site" → "Import an existing project"
4. 选择你的 GitHub 仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
6. 点击 "Deploy"

---

## 方法 3：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd pharma-trade
vercel

# 部署到生产环境
vercel --prod
```

---

## 🌐 DNS 配置示例

### 如果使用 Vercel

在你的域名注册商添加：

**A 记录**：
```
类型: A
主机: @
值: 76.76.21.21
TTL: 自动
```

**CNAME 记录**：
```
类型: CNAME
主机: www
值: cname.vercel-dns.com
TTL: 自动
```

### 如果使用 Netlify

```
类型: CNAME
主机: @
值: your-site.netlify.app
```

---

## ✅ 部署检查清单

- [ ] 代码已推送到 GitHub
- [ ] 在 Vercel/Netlify 创建项目
- [ ] 部署成功（检查构建日志）
- [ ] 网站可以访问
- [ ] 配置自定义域名
- [ ] DNS 已生效（5-30分钟）
- [ ] HTTPS 自动启用

---

## 🔄 更新网站

每次更新只需：

```bash
git add .
git commit -m "更新说明"
git push
```

Vercel/Netlify 会自动检测并重新部署！

---

## 💡 提示

- **免费额度**：Vercel 和 Netlify 都提供充足的免费额度
- **自动 HTTPS**：部署后自动启用 SSL 证书
- **全球 CDN**：网站在全球都能快速访问
- **预览部署**：每个 PR 都会生成预览链接

---

## 📞 需要帮助？

查看完整文档：`DEPLOYMENT.md`
