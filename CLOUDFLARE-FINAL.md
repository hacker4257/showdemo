# Cloudflare Pages 最终配置指南

## ✅ 当前项目状态

- Next.js 版本：15.5.2 ✓
- Edge Runtime：已配置 ✓
- Cloudflare 适配器：已安装 ✓
- 代码已推送到 GitHub ✓

## 🔧 Cloudflare Pages 正确配置

### 方法 1：使用 @cloudflare/next-on-pages（推荐）

在 Cloudflare Dashboard → Settings → Builds & deployments 中设置：

```
Production branch: main
Framework preset: Next.js
Build command: npx @cloudflare/next-on-pages
Build output directory: .vercel/output/static
Root directory: (留空)
Node version: 18 或 20

环境变量：
(暂时不需要)
```

### 方法 2：使用标准 Next.js 构建

如果方法 1 不行，试试：

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (留空)
Node version: 18
```

## 🚨 常见问题排查

### 问题 1：显示 "Hello World"

**原因**：构建输出目录配置错误

**解决**：
1. 检查 Build output directory 是否正确
2. 查看构建日志，确认生成了哪些文件
3. 尝试不同的输出目录：
   - `.vercel/output/static`
   - `.next`
   - `out`

### 问题 2：部署失败 "Missing entry-point"

**原因**：Wrangler 配置问题

**解决**：
1. 删除项目中的 `wrangler.json` 文件
2. 在 Cloudflare 设置中移除 Deploy command
3. 让 Cloudflare Pages 自动处理部署

### 问题 3：Edge Runtime 错误

**原因**：动态路由未配置 Edge Runtime

**解决**：已修复，所有 API 路由都已添加：
```typescript
export const runtime = 'edge'
```

## 📊 验证部署成功

部署成功后，你应该看到：

1. **构建日志**：
```
✓ Compiled successfully
✓ Generating static pages
Success: Build command completed
```

2. **访问网站**：
- 首页显示 "Global Leader in Pharmaceutical Solutions"
- 可以切换中英文
- 产品页面正常显示

3. **部署状态**：
- 绿色的 "Success" 标记
- 可访问的 URL

## 🔄 如果还是不行

### 选项 1：使用 Netlify

1. 访问 https://netlify.com
2. 使用 GitHub 登录
3. "Add new site" → 选择 showdemo 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
5. 部署

### 选项 2：使用 Vercel（最推荐）

1. 访问 https://vercel.com
2. 使用 GitHub 登录
3. "Add New Project" → 选择 showdemo
4. 直接点击 "Deploy"（零配置）

## 📝 当前文件状态

- ✅ `package.json` - Next.js 15.5.2
- ✅ `app/api/*/route.ts` - Edge Runtime 已配置
- ✅ `app/products/[id]/page.tsx` - Edge Runtime 已配置
- ✅ 所有代码已推送到 GitHub

## 🆘 需要帮助？

如果部署还是失败，请提供：
1. Cloudflare 构建日志（最后 30 行）
2. 当前的构建配置截图
3. 访问网站时看到的内容

我会帮你进一步诊断问题。

---

**最后更新**：2026-02-11
**项目状态**：等待 Cloudflare Pages 部署验证
