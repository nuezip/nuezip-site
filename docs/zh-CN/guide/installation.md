# 安装

NueZip 可通过 Mac App Store 在 macOS 上使用。

## 下载方式

### Mac App Store（推荐）

- **下载**：[Mac App Store 上的 NueZip](https://apps.apple.com/app/id6785846417)

Mac App Store 版本提供自动更新，并与 macOS 无缝集成。

### GitHub Releases（备选）

如果你更希望直接下载，可以从 [GitHub Releases](https://github.com/nuezip/nuezip/releases) 获取该应用。请注意，此版本不会获得自动更新。

## 安装步骤

### Mac App Store

1. 点击上方的下载链接，或在 Mac App Store 中搜索 "NueZip"
2. 点击 "Get" 下载该应用
3. 应用将自动下载并安装
4. 从你的应用程序文件夹或 Launchpad 启动 NueZip

### GitHub Releases

1. 从 Releases 页面下载最新的 `.dmg` 文件
2. 双击下载的 `.dmg` 将其打开
3. 将 `NueZip.app` 图标拖入你的 `Applications` 文件夹
4. 退出已挂载的镜像，并从 `Applications` 打开 `NueZip`

如果 macOS 阻止打开应用（Gatekeeper），请打开 **系统设置 → 隐私与安全性**，为 NueZip 点击 **仍要打开**，或右键点击应用并选择 **打开**。

## 首次启动

当你首次启动 NueZip 时，会引导你完成一个新手引导流程：

- **授予文件夹访问权限**：允许 NueZip 访问常用目录（下载、文稿、桌面）
- **启用 Finder 扩展**：激活右键上下文菜单，以便快速进行归档操作

在弹出提示时授予权限。你可以随时在 **系统设置 → 隐私与安全性** 中修改这些设置。

## 更新

- **Mac App Store 版本**：更新由 App Store 自动处理
- **GitHub Releases 版本**：下载较新的版本并替换 `Applications` 中的旧应用

## 卸载

要卸载 NueZip：

1. 退出 NueZip
2. 将 `NueZip.app` 从 `Applications` 拖入废纸篓
3. （可选）移除应用数据与日志：

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
rm -rf ~/Library/Logs/nuezip
```

## 系统要求

- **macOS**：推荐 Sonoma（14）或更高版本
- **CPU**：Apple Silicon（M 系列）或 Intel（64 位）
- **内存**：最低 4GB，推荐 8GB
- **存储空间**：约 50 MB

## 故障排除

如果在安装过程中遇到问题：

- **macOS 阻止打开应用**：打开 **系统设置 → 隐私与安全性**，为 NueZip 点击 **仍要打开**
- **公证警告**：从 Mac App Store 下载经过签名/公证的构建版本

如需更多帮助，请访问 [故障排除指南](./troubleshooting.md)。
