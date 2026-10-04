# Morty OS

分享技能、AI 用法、项目与实践笔记的个人网站。

网站：https://morty-os-wine.vercel.app
作者：https://github.com/morty980703

## 本地运行

```sh
npm ci
npm run dev
```

打开 http://localhost:3000。

## 检查与构建

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## 内容与来源

文章在 content/notes，项目和工具记录在 lib/content，提示词在 lib/content/prompts.ts。第三方技能、社区提示词保留各自作者、原文与测试条件；本站功能检查不等于独立效果测试。Morty 视觉素材保持原有身份与比例。监控器仍为开发计划，演示外壳没有真实数据。

## 问题与建议

请通过本仓库的 Issues 提交页面问题、失效来源或使用建议，附上页面地址、预期效果和实际表现。

搜索引擎收录和统计采集保持关闭。仓库已连接 Vercel；推送 main 分支会触发正式部署。

站点链接与分享图片使用 Vercel 提供的正式项目域名；其他部署环境可通过 SITE_URL 指定正式网址。本地默认使用 http://localhost:3000。
