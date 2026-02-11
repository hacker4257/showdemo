# Cloudflare Pages 部署说明

## 🚨 重要：正确的部署配置

### 在 Cloudflare Dashboard 中设置

1. 访问 https://dash.cloudflare.com
2. 进入 Workers & Pages
3. 选择你的 `showdemo` 项目
4. 点击 "Settings" → "Builds & deployments"

### 正确的构建配置

```
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
Root directory: (留空)
Node version: 18 或更高

环境变量: (暂时不需要)
```

### ⚠️ 关键：移除自定义部署命令

如果你在设置中看到 "Deploy command" 或类似选项，请：
1. 删除或留空 "Deploy command"
2. 只保留 "Build command": `npm run build`
3. 保存设置

### 🔄 重新部署

1. 在项目页面点击 "Deployments"
2. 点击最新部署旁边的 "..." 菜单
3. 选择 "Retry deployment"

或者：

1. 进行一次空提交触发重新部署：
```bash
cd pharma-trade
git commit --allow-empty -m "Trigger redeploy"
git push
```

---

## 📝 完整部署步骤（如果需要重新开始）

### 方法 1：删除项目重新创建

1. 在 Cloudflare Dashboard 删除现有的 `showdemo` 项目
2. 重新创建：
   - Workers & Pages → Create → Pages
   - Connect to Git → 选择 `hacker4257/showdemo`
   - 配置：
     - Framework: Next.js
     - Build command: `npm run build`
     - Build output: `.next`
   - **不要**添加自定义部署命令
3. 点击 "Save and Deploy"

### 方法 2：使用 Vercel（更简单）

如果 Cloudflare 继续有问题，可以试试 Vercel：

1. 访问 https://vercel.com
2. 使用 GitHub 登录
3. "Add New..." → "Project"
4. 选择 `showdemo` 仓库
5. 点击 "Deploy"（无需任何配置）

Vercel 对 Next.js 的支持最好，通常零配置就能成功。

---

## 🆘 如果还是失败

请告诉我：
1. 你在 Cloudflare 的构建设置中看到了什么？
2. 是否有 "Deploy command" 字段？
3. 该字段的值是什么？

我会帮你调整配置。
