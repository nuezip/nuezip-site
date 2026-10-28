# 安裝說明

NueZip 可透過 Mac App Store 在 macOS 上取得。

## 下載選項

### Mac App Store（推薦）

- **下載**：[Mac App Store 上的 NueZip](https://apps.apple.com/app/id6785846417)

Mac App Store 版本提供自動更新，並與 macOS 無縫整合。

### GitHub Releases（替代方案）

如果您偏好直接下載，可以從 [GitHub Releases](https://github.com/nuezip/nuezip/releases) 取得 App。請注意，此版本不會收到自動更新。

## 安裝步驟

### Mac App Store

1. 點擊上方的下載連結，或在 Mac App Store 中搜尋「NueZip」
2. 點擊「取得」以下載 App
3. App 會自動下載並安裝
4. 從「應用程式」資料夾或 Launchpad 啟動 NueZip

### GitHub Releases

1. 從 Releases 頁面下載最新的 `.dmg`
2. 雙擊下載的 `.dmg` 以開啟它
3. 將 `NueZip.app` 圖示拖曳到您的 `Applications` 資料夾
4. 退出已掛載的映像檔，並從 `Applications` 開啟 `NueZip`

若 macOS 阻止開啟 App（Gatekeeper），請開啟 **系統設定 → 隱私權與安全性**，針對 NueZip 點擊 **仍要開啟**，或右鍵點擊 App 並選擇 **開啟**。

## 首次啟動

當您首次啟動 NueZip 時，會引導您完成一個新手設定流程：

- **授予資料夾存取權**：允許 NueZip 存取常見的目錄（下載、文件、桌面）
- **啟用 Finder 擴充功能**：啟用右鍵選單，以便快速進行壓縮檔操作

請在彈出提示時授予權限。您可以隨時在 **系統設定 → 隱私權與安全性** 中修改這些設定。

## 更新

- **Mac App Store 版本**：更新由 App Store 自動處理
- **GitHub Releases 版本**：下載較新的版本，並替換 `Applications` 中的 App

## 解除安裝

若要解除安裝 NueZip：

1. 退出 NueZip
2. 將 `NueZip.app` 從 `Applications` 拖曳到垃圾桶
3. （選用）移除 App 資料與日誌：

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
rm -rf ~/Library/Logs/nuezip
```

## 系統需求

- **macOS**：建議 Sonoma（14）或更新版本
- **CPU**：Apple Silicon（M 系列）或 Intel（64 位元）
- **記憶體**：最低 4GB，建議 8GB
- **儲存空間**：約 50 MB

## 疑難排解

如果您在安裝過程中遇到問題：

- **macOS 阻擋 App**：開啟 **系統設定 → 隱私權與安全性**，針對 NueZip 點擊 **仍要開啟**
- **公證（notarization）警告**：從 Mac App Store 下載已簽署/已公證的版本

如需更多協助，請參閱[疑難排解指南](./troubleshooting.md)。
