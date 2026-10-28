# 常见问题

问：什么是 NueZip？

答：NueZip 是一款为 macOS 打造的专业归档管理器，支持 RAR、ZIP、7-Zip、TAR、GZIP 和 BZIP2 等多种归档格式的压缩与解压。

问：支持哪些 macOS 版本？

答：NueZip 需要 macOS 14 Sonoma 或更高版本，并针对 Apple Silicon（M 系列）芯片进行了优化。

问：如何下载并安装 NueZip？

答：从 [Mac App Store](https://apps.apple.com/app/id6785846417)（推荐）下载，或从 [GitHub Releases](https://github.com/nuezip/nuezip/releases) 获取最新版本。

问：NueZip 免费吗？

答：NueZip 提供带有核心功能的免费试用。一次性购买可解锁完整功能集，包括批量操作、归档修复和高级加密。

问：支持哪些格式？

答：**读取**：RAR、ZIP、7-Zip、TAR、GZIP、BZIP2、XZ、Zstandard\
**写入（压缩）**：ZIP、7-Zip、TAR、GZIP、BZIP2、XZ、Zstandard\
完整的格式矩阵请参阅 [简介](/zh-CN/guide/introduction)。

问：NueZip 可以创建 RAR 归档吗？

答：不可以。NueZip 可以 **读取** RAR 归档（包括多卷和已修复的归档），但由于许可限制，不支持 RAR 压缩。

问：NueZip 对机密文件安全吗？

答：是的。NueZip 完全离线运行。所有操作都在你的 Mac 本地运行。支持使用 AES-256 加密来保护带密码的 ZIP 归档。

问：NueZip 会把我的文件上传到云端吗？

答：不会。NueZip 是一款完全离线的应用。你的文件永远不会被上传到任何地方。压缩或解压都不需要互联网连接。

问：如何更新应用？

答：通过 Mac App Store（自动）更新，或从 GitHub Releases 下载最新版本。

问：如何报告 Bug 或请求功能？

答：在 [GitHub 仓库](https://github.com/nuezip/nuezip/issues) 上提交 issue。请包含你的 macOS 版本、NueZip 版本以及复现步骤。

问：日志和数据存储在哪里？

答：对于沙盒（App Store）构建版本：

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Application Support/com.w3cub.nuezip/
```

开发构建版本可能会将日志写入控制台。

如果你需要更多解答，请在仓库中提交 issue 或查阅完整文档。
