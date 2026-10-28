---
layout: home

hero:
  name: "NueZip"
  text: "专业的 macOS 归档管理器"
  tagline: "压缩、解压并管理所有主流归档格式。原生、快速、安全 —— 专为 macOS 打造。"
  image:
    src: /hero-illustration.png
    alt: NueZip 截图
  actions:
    - theme: brand
      text: 开始使用
      link: /zh-CN/guide/introduction
    - theme: alt
      text: 下载
      link: /zh-CN/guide/installation

features:
  - icon:
      light: /icons/layers.svg
      dark: /icons/layers-dark.svg
      alt: 图层
      width: "24"
      height: "24"
    title: 多格式支持
    details: 支持 RAR、ZIP、7-Zip、TAR、GZIP、BZIP2 等。可打开并创建任意主流格式的归档。
    link: /zh-CN/guide/formats
    linkText: 查看格式
  - icon:
      light: /icons/zap.svg
      dark: /icons/zap-dark.svg
      alt: 闪电
      width: "24"
      height: "24"
    title: 双引擎快速解压
    details: 智能选择最优引擎，实现极速解压。按格式优化的后端让解压更快。
    link: /zh-CN/guide/usage
    linkText: 了解更多
  - icon:
      light: /icons/frame.svg
      dark: /icons/frame-dark.svg
      alt: 框架
      width: "24"
      height: "24"
    title: 原生 macOS 体验
    details: 基于 Swift 6 + SwiftUI 构建。全面支持 Apple Silicon，资源占用极低，与系统无缝集成。
    link: /zh-CN/guide/introduction
    linkText: 关于 NueZip
  - icon:
      light: /icons/sparkles.svg
      dark: /icons/sparkles-dark.svg
      alt: 火花
      width: "24"
      height: "24"
    title: 批量操作
    details: 一次性批量压缩、解压、转换并加密多个文件，省去重复劳动的烦恼。
    link: /zh-CN/guide/usage
    linkText: 了解更多
  - icon:
      light: /icons/eye.svg
      dark: /icons/eye-dark.svg
      alt: 眼睛
      width: "24"
      height: "24"
    title: 密码与加密
    details: 创建带密码保护的归档，采用 AES 加密。内置密码管理器，方便取用。
    link: /zh-CN/guide/usage
    linkText: 了解更多
  - icon:
      light: /icons/camera.svg
      dark: /icons/camera-dark.svg
      alt: 相机
      width: "24"
      height: "24"
    title: 高级工具
    details: 归档修复、格式转换、性能基准测试、归档搜索以及文件信息查看器。
    link: /zh-CN/guide/usage
    linkText: 探索工具

home:
  floatingCards:
    - 多格式
    - 快速解压
    - 密码安全
  sections:
    featuresTitle: 核心功能
    featuresSubtitle: 在 macOS 上高效管理归档所需的一切
    formatsTitle: 支持的归档格式
    formatsSubtitle: 压缩并解压所有主流归档格式
    howTitle: 工作原理
    howSubtitle: 简单直观，一如 macOS 应有的样子
    faqTitle: 常见问题
    faqSubtitle: 面向 macOS 用户的快速解答
  formatsCtaText: 查看完整格式详情
  formatsCtaLink: /zh-CN/guide/formats
  steps:
    - num: "01"
      title: 安装 NueZip
      desc: 从 Mac App Store 或 GitHub 下载。启动并授予必要权限。
    - num: "02"
      title: 打开任意归档
      desc: 双击任意归档文件，或使用 Finder 右键菜单直接解压。
    - num: "03"
      title: 压缩与管理
      desc: 创建新归档、批量处理文件、设置密码加密，等等。
  faqs:
    - question: NueZip 免费吗？
      answer: NueZip 是 Mac App Store 上的付费应用，可能提供试用版本供体验。
    - question: NueZip 支持哪些格式？
      answer: NueZip 支持 RAR、ZIP、7-Zip、TAR、GZIP 和 BZIP2 的压缩与解压。
    - question: 支持哪些 macOS 版本？
      answer: NueZip 支持 macOS 14 Sonoma 及更高版本，并针对 Apple Silicon（M 系列）优化。
    - question: NueZip 能离线使用吗？
      answer: 可以。所有归档操作均可完全离线进行，压缩或解压均无需联网。
    - question: 我的数据安全吗？
      answer: 安全。NueZip 完全在你的 Mac 本地运行，不会上传任何数据。受密码保护的归档采用行业标准的加密。
  cta:
    title: 准备好简化归档管理了吗？
    description: 下载 NueZip，在 macOS 上体验快速、原生的归档管理。
    primary: 开始使用
    primaryLink: /zh-CN/guide/installation
    secondary: 如何使用
    secondaryLink: /zh-CN/guide/usage
  footer:
    tagline: 简单、快速、可靠的归档管理。
    columns:
      - heading: 产品
        links:
          - text: 下载
            link: /zh-CN/guide/installation
          - text: 功能
            link: /zh-CN/guide/usage
          - text: 格式
            link: /zh-CN/guide/formats
      - heading: 支持
        links:
          - text: 指南
            link: /zh-CN/guide/introduction
          - text: 常见问题
            link: /zh-CN/guide/faq
          - text: 故障排除
            link: /zh-CN/guide/troubleshooting
      - heading: 社区
        links:
          - text: GitHub
            link: https://github.com/nuezip/nuezip
          - text: 发布版本
            link: https://github.com/nuezip/nuezip/releases
          - text: Product Hunt
            link: https://www.producthunt.com/products/nuezip-the-modern-mac-archive-utility?utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-nuezip-the-modern-mac-archive-utility
    copyright: © 2026 NueZip 项目。专为 macOS 打造。
---
