# 部署指南 - 使用 Vercel（免费）

## 🚀 快速部署到 Vercel

Vercel 是 Next.js 官方推荐的部署平台，完全免费，零配置。

### 步骤 1：准备 Git 仓库

1. **初始化 Git**（如果还没有）
```bash
cd pharma-trade
git init
git add .
git commit -m "Initial commit: PharmaTrade platform"
```

2. **推送到 GitHub**
```bash
# 在 GitHub 创建新仓库（不要初始化 README）
# 然后执行：
git remote add origin https://github.com/你的用户名/pharma-trade.git
git branch -M main
git push -u origin main
```

### 步骤 2：部署到 Vercel

#### 方法 1：通过网页（推荐，最简单）

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign Up" 使用 GitHub 账号登录
3. 点击 "Add New..." → "Project"
4. 选择你的 `pharma-trade` 仓库
5. 点击 "Deploy"

**就这么简单！** 2-3 分钟后你的网站就上线了。

#### 方法 2：通过命令行

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd pharma-trade
vercel
```

### 步骤 3：绑定自定义域名

1. 在 Vercel 项目页面，点击 "Settings" → "Domains"
2. 输入你的域名（例如：`pharmatrade.com`）
3. Vercel 会提供 DNS 配置说明

#### DNS 配置示例

在你的域名注册商（如阿里云、腾讯云、GoDaddy）添加以下记录：

**A 记录**：
```
类型: A
主机记录: @
记录值: 76.76.21.21
```

**CNAME 记录**（www 子域名）：
```
类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
```

### 步骤 4：环境变量配置（可选）

如果将来需要数据库，在 Vercel 项目设置中添加：

1. 进入项目 → Settings → Environment Variables
2. 添加：
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - 等等

### 🎉 完成！

你的网站现在可以通过以下地址访问：
- Vercel 提供的域名：`https://pharma-trade.vercel.app`
- 你的自定义域名：`https://你的域名.com`

---

## 📝 当前配置（仅展示模式）

由于选择了"仅展示"模式，我已经配置为使用模拟数据：

- ✅ 无需数据库
- ✅ 产品数据使用静态 mock 数据
- ✅ 表单提交仅前端验证（不保存）
- ✅ 完全静态，加载超快

---

## 🔄 自动部署

每次你推送代码到 GitHub，Vercel 会自动：
1. 检测到更新
2. 自动构建
3. 自动部署
4. 更新线上网站

---

## 💰 费用

**完全免费！** Vercel 免费计划包括：
- ✅ 无限项目
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署
- ✅ 自定义域名
- ✅ 100GB 带宽/月

---

## 🆘 常见问题

### Q: 部署失败怎么办？
A: 检查 Vercel 部署日志，通常是环境变量或依赖问题。

### Q: 如何更新网站？
A: 只需推送代码到 GitHub，Vercel 自动部署。

### Q: 可以回滚到之前的版本吗？
A: 可以！Vercel 保存所有部署历史，一键回滚。

### Q: 域名需要多久生效？
A: DNS 配置后通常 5-30 分钟生效，最多 24 小时。

---

## 📞 需要帮助？

如果遇到问题，可以：
1. 查看 Vercel 文档：https://vercel.com/docs
2. 查看项目 README.md
3. 检查 Vercel 部署日志
