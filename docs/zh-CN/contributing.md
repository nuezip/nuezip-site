# 贡献指南

我们欢迎各种形式的贡献来改进 NueZip！无论你是修复 Bug、添加功能、参与翻译，还是完善文档，我们都非常感谢你的帮助。

## 贡献方式

### Bug 报告
- 请先查看已有的 [issues](https://github.com/nuezip/nuezip/issues)
- 包含 macOS 版本、NueZip 版本，以及复现步骤
- 如有可能，请附上示例归档文件（尽量精简）

### 功能请求
- 描述该功能的用途和使用场景
- 说明它为何对 NueZip 用户有益
- 确认它是否符合离线优先、原生 macOS 的设计理念

### 翻译
- NueZip 支持多种语言。对于 macOS 应用，可查看 `NueZip/Resources/i18n/` 中已有的翻译。
- 对于本文档站点，请翻译 `docs/` 下的 markdown 文件——每种语言位于各自的 locale 文件夹中（例如 `docs/zh-CN/`、`docs/es/`）。
- 品牌名和格式名称（NueZip、macOS、ZIP、RAR、7-Zip、Finder、App Store、AES-256）请保持原样。

### 代码贡献
- 项目使用 **Swift 6 + SwiftUI** 编写
- Fork 仓库并提交 Pull Request
- 遵循代码库中使用的 Clean Architecture 模式

## 开始之前

### 环境要求
- Node.js 18 或更高版本（用于站点）
- pnpm 包管理器（用于站点）
- Xcode 16+（用于应用开发）
- macOS 14 Sonoma 或更高版本

### 开发环境配置

1. 在 GitHub 上 **Fork 仓库**
2. **克隆你的 Fork**：
   ```bash
   git clone https://github.com/nuezip/nuezip.git
   cd nuezip-site
   ```
3. **安装依赖**：
   ```bash
   pnpm install
   ```
4. **启动开发服务器**：
   ```bash
   pnpm docs:dev
   ```
5. 在浏览器中 **打开** `http://localhost:5173`

### 进行修改

1. 为你的修改创建一个新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 对 `docs/` 中的文档文件进行修改
3. 通过构建站点来测试你的修改：
   ```bash
   pnpm docs:build
   ```
4. 提交你的修改：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 提交修改

1. 将分支 **推送到你的 Fork**：
   ```bash
   git push origin feature/your-feature-name
   ```
2. 在 GitHub 上 **创建 Pull Request**
3. **等待审核** 并处理反馈意见

## 规范

### 写作风格
- 使用清晰、简洁的语言
- 尽可能使用主动语态
- 保持包容和友好
- 使用一致的格式
- 在有帮助时添加截图

### 文件结构
- 文档页面放在 `docs/`
- 指南放在 `docs/guide/`
- 文件名使用小写加连字符：`my-new-guide.md`
- Frontmatter 不是必须的，但可用于元数据

### 链接
- 内部文档使用相对链接
- 在有帮助时链接到外部资源
- 确保所有链接都可正常使用

### 图片与资源
- 将图片放在 `docs/public/` 或其子目录中
- 使用具有描述性的文件名
- 为网页优化图片（建议小于 500KB）

## 行为准则

本项目遵循行为准则。参与即表示你同意：
- 保持尊重与包容
- 专注于建设性反馈
- 对自己的错误承担责任

详情请参阅 [CODE_OF_CONDUCT.md](https://github.com/nuezip/nuezip/blob/main/CODE_OF_CONDUCT.md)。

## 有问题？

如果你对贡献有疑问：
- 查看已有的 [issues](https://github.com/nuezip/nuezip/issues) 和 [discussions](https://github.com/nuezip/nuezip/discussions)
- 如有需要，新建一个 issue
- 联系维护者

感谢你帮助改进 NueZip 文档！
