# 故障排除

本页面汇总了 NueZip 在 macOS 上的常见问题及其解决方法。

## 应用无法启动或启动时崩溃

症状：NueZip 无法打开、立即崩溃，或显示意外错误。

可尝试的步骤：

1. 确保你的 macOS 版本满足最低要求（macOS 14 Sonoma 或更高）。
2. 退出并重新启动应用。
3. 重启你的 Mac。
4. 如果应用是从 GitHub Releases 下载的，请尝试下载最新的构建版本或经过公证的版本。
5. 如果问题仍然存在，请收集日志（见下文）并提交 issue。

## 无法打开 RAR 归档

症状：NueZip 无法打开 `.rar` 文件，或显示错误。

检查清单：

1. 确保 RAR 文件未损坏。尝试使用其他工具（如 The Unarchiver）打开它。
2. 多卷 RAR 归档必须包含所有分卷（`.part1.rar`、`.part2.rar` 等）。
3. 带密码保护的 RAR 归档需要正确的密码。
4. 支持 RAR5 格式。如果你使用的是较旧的 RAR 格式，请反馈给我们。

## 解压因密码错误而失败

症状：解压失败，显示 "密码错误" 或解密错误。

检查清单：

1. 确认密码正确 — 密码区分大小写。
2. 确保支持正确的加密类型（ZIP 为 AES-256）。
3. 尝试从密码管理器重新输入密码。

## Finder 扩展不显示

症状：在 Finder 中右键点击归档时，没有显示 NueZip 的选项。

检查清单：

1. 启用扩展：系统设置 → 隐私与安全性 → 扩展 → Finder 扩展 → 启用 **NueZip**。
2. 重启 Finder：在活动监视器中右键点击 Finder → 重新启动，或在终端中运行 `killall Finder`。
3. 如果扩展仍然不出现，请重新安装应用。

## 许可证 / 购买未显示

症状：你已购买 NueZip，但它仍显示为试用版。

检查清单：

1. 确保你登录的是用于购买时相同的 Apple ID。
2. 恢复购买：NueZip → 设置 → 许可证 → 恢复购买。
3. 如果问题仍然存在，请联系支持。

## 如何收集调试日志

为了帮助诊断问题，请从 NueZip 收集调试日志：

```bash
# 将日志复制到桌面以便分享
cp ~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log ~/Desktop/NueZip-Logs
```

然后在 [GitHub Issues](https://github.com/nuezip/nuezip/issues) 上提交 issue 并附上日志。

## 权限相关问题

如果某项功能请求权限，但授予权限后仍无法正常工作：

1. 授予权限后，退出应用并重新打开。
2. 如有需要，使用 `tccutil` 重置权限提示（参见 [权限指南](./permissions.md)）。

## 性能问题

如果应用运行缓慢或无响应：

1. 关闭其他占用资源较多的应用。
2. 尝试解压一个较小的归档以隔离问题。
3. 如果性能随时间下降，请重启应用。

## 查看日志

要排查崩溃或问题，应用日志是最有用的线索。在沙盒（App Store）构建版本中，请查看：

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log
```



## 重置应用

要重置设置并清除本地数据：

1. 退出 NueZip
2. 移除容器（请注意 — 这会删除所有设置）：

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
```

3. 重新打开 NueZip 并重新配置。

## 报告问题

在提交 issue 时，请包含：

- macOS 版本（苹果菜单 → 关于本机）
- NueZip 版本（NueZip → 关于）
- 复现步骤
- 日志（收集方法见 [查看日志](#查看日志) 部分）

这有助于维护者更快地定位和修复问题。
