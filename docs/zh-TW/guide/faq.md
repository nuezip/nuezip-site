# 常見問題

問：什麼是 NueZip？

答：NueZip 是一款專為 macOS 打造的專業壓縮檔管理工具，支援多種壓縮檔格式的壓縮與解壓縮，包括 RAR、ZIP、7-Zip、TAR、GZIP 和 BZIP2。

問：支援哪些 macOS 版本？

答：NueZip 需要 macOS 14 Sonoma 或更新版本，並針對 Apple Silicon（M 系列）晶片優化。

問：如何下載並安裝 NueZip？

答：請從 [Mac App Store](https://apps.apple.com/app/id6785846417)（推薦）下載，或從 [GitHub Releases](https://github.com/nuezip/nuezip/releases) 取得最新版本。

問：NueZip 是免費的嗎？

答：NueZip 提供具備核心功能的免費試用。一次性購買可解鎖完整功能集，包括批次操作、壓縮檔修復，以及進階加密。

問：支援哪些格式？

答：**讀取**：RAR、ZIP、7-Zip、TAR、GZIP、BZIP2、XZ、Zstandard\
**寫入（壓縮）**：ZIP、7-Zip、TAR、GZIP、BZIP2、XZ、Zstandard\
完整的格式對照表請參閱[產品介紹](/zh-TW/guide/introduction)。

問：NueZip 可以建立 RAR 壓縮檔嗎？

答：不行。NueZip 可以 **讀取** RAR 壓縮檔（包括多分割卷與已修復的壓縮檔），但基於授權限制，不支援 RAR 壓縮。

問：NueZip 對機密檔案安全嗎？

答：安全。NueZip 完全在離線環境下運作。所有操作都在您的 Mac 本機上執行。受密碼保護的 ZIP 壓縮檔可使用 AES-256 加密。

問：NueZip 會將我的檔案上傳到雲端嗎？

答：不會。NueZip 是一款完全離線的應用程式。您的檔案絕不會被上傳到任何地方。壓縮或解壓縮都不需要網際網路連線。

問：如何更新 App？

答：請透過 Mac App Store（自動）更新，或從 GitHub Releases 下載最新版本。

問：如何回報錯誤或提出功能建議？

答：請在 [GitHub 儲存庫](https://github.com/nuezip/nuezip/issues) 開立 issue。請包含您的 macOS 版本、NueZip 版本，以及重現步驟。

問：日誌與資料儲存在哪裡？

答：針對沙箱化（App Store）的建置版本：

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Application Support/com.w3cub.nuezip/
```

開發建置版本可能會將日誌寫入主控台。

若您需要更多解答，請在儲存庫中開立 issue，或查閱完整的文件。
