# 疑難排解

本頁彙整 NueZip 在 macOS 上常見的問題及其解決方式。

## 應用程式無法啟動或啟動時崩潰

症狀：NueZip 無法開啟、立即崩潰，或顯示非預期的錯誤。

可嘗試的步驟：

1. 確認您的 macOS 版本符合最低需求（macOS 14 Sonoma 以上）。
2. 退出並重新啟動 App。
3. 重新啟動您的 Mac。
4. 若 App 是從 GitHub Releases 下載的，請嘗試下載最新的建置版本或已公證的版本。
5. 若問題持續，請蒐集日誌（見下方）並開立 issue。

## 無法開啟 RAR 壓縮檔

症狀：NueZip 無法開啟 `.rar` 檔案，或顯示錯誤。

檢查清單：

1. 確認 RAR 檔案未損毀。請嘗試使用其他工具（例如 The Unarchiver）開啟。
2. 多分割卷 RAR 壓縮檔必須具備所有分割部分（`.part1.rar`、`.part2.rar` 等）。
3. 受密碼保護的 RAR 壓縮檔需要正確的密碼。
4. 支援 RAR5 格式。若您使用的是較舊的 RAR 格式，請回報給我們。

## 解壓縮失敗並出現密碼錯誤

症狀：解壓縮失敗並顯示「密碼錯誤」或解密錯誤。

檢查清單：

1. 確認密碼正確 — 密碼有區分大小寫。
2. 確認支援正確的加密類型（ZIP 使用 AES-256）。
3. 嘗試從密碼管理員重新輸入密碼。

## Finder 擴充功能未顯示

症狀：在 Finder 中右鍵點擊壓縮檔時，沒有出現 NueZip 的選項。

檢查清單：

1. 啟用擴充功能：系統設定 → 隱私權與安全性 → 擴充功能 → Finder 擴充功能 → 啟用 **NueZip**。
2. 重新啟動 Finder：在活動監視器中右鍵點擊 Finder → 重新啟動，或在終端機執行 `killall Finder`。
3. 若擴充功能仍不出現，請重新安裝 App。

## 授權 / 購買未顯示

症狀：您已購買 NueZip，但它仍顯示為試用版。

檢查清單：

1. 確認您登入的 Apple ID 與購買時使用的相同。
2. 恢復購買：NueZip → 設定 → 授權 → 恢復購買。
3. 若問題持續，請聯絡支援團隊。

## 如何蒐集除錯日誌

為協助診斷問題，請從 NueZip 蒐集除錯日誌：

```bash
# 將日誌複製到桌面以便分享
cp ~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log ~/Desktop/NueZip-Logs
```

接著在 [GitHub Issues](https://github.com/nuezip/nuezip/issues) 開立 issue 並附上日誌。

## 權限相關問題

若某項功能要求權限，但在授予權限後仍無法運作：

1. 授予權限後，請退出 App 並重新開啟。
2. 若有需要，請使用 `tccutil` 重置權限提示（請參閱[權限指南](./permissions.md)）。

## 效能問題

若 App 運作緩慢或沒有回應：

1. 關閉其他佔用資源的大型應用程式。
2. 嘗試解壓縮較小的壓縮檔，以隔離問題。
3. 若效能隨時間下降，請重新啟動 App。

## 檢視日誌

為排除崩潰或問題，應用程式日誌是最有用的資訊。在沙箱化（App Store）的建置版本中，請檢查：

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log
```



## 重置應用程式

若要重置設定並清除本機資料：

1. 退出 NueZip
2. 移除 container（請小心 — 這會刪除所有設定）：

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
```

3. 重新開啟 NueZip 並重新設定。

## 回報問題

開立 issue 時，請包含：

- macOS 版本（蘋果選單 → 關於這台 Mac）
- NueZip 版本（NueZip → 關於）
- 重現步驟
- 日誌（蒐集方式請參閱[檢視日誌](#view-logs)一節）

這有助於維護者更快速地找出並修復問題。
