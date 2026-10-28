# 參與貢獻

我們歡迎各種貢獻來改善 NueZip！無論您是在修復錯誤、新增功能、協助翻譯，還是改進文件，我們都感謝您的幫助。

## 貢獻方式

### 錯誤回報
- 請先查看現有的 [issues](https://github.com/nuezip/nuezip/issues)
- 請包含 macOS 版本、NueZip 版本，以及重現步驟
- 如有可能，請附上範例壓縮檔（儘量縮小檔案大小）

### 功能建議
- 描述該功能與使用情境
- 說明它將如何造福 NueZip 使用者
- 確認是否符合離線優先（offline-first）、原生 macOS 的產品理念

### 翻譯
- NueZip 支援多種語言。針對 macOS App，請參考 `NueZip/Resources/i18n/` 以瞭解現有的翻譯。
- 針對本文件網站，請翻譯 `docs/` 下的 markdown — 每種語言各自位於其語系資料夾中（例如 `docs/zh-CN/`、`docs/es/`）。
- 請保留品牌名稱與格式名稱（NueZip、macOS、ZIP、RAR、7-Zip、Finder、App Store、AES-256）的原始寫法。

### 程式碼貢獻
- 本專案使用 **Swift 6 + SwiftUI** 撰寫
- 請 fork 本儲存庫並提交 pull request
- 請遵循程式碼庫中使用的 Clean Architecture 模式

## 開始前準備

### 前置需求
- Node.js 18 或更新版本（用於網站）
- pnpm 套件管理工具（用於網站）
- Xcode 16+（用於 App 開發）
- macOS 14 Sonoma 以上

### 開發環境設定

1. 在 GitHub 上 **fork 本儲存庫**
2. **clone 您的 fork**：
   ```bash
   git clone https://github.com/nuezip/nuezip.git
   cd nuezip-site
   ```
3. **安裝相依套件**：
   ```bash
   pnpm install
   ```
4. **啟動開發伺服器**：
   ```bash
   pnpm docs:dev
   ```
5. 在瀏覽器中 **開啟** `http://localhost:5173`

### 進行變更

1. 為您的變更建立一個新的分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 對 `docs/` 中的文件進行修改
3. 透過建置網站來測試您的變更：
   ```bash
   pnpm docs:build
   ```
4. 提交您的變更：
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### 提交變更

1. 將您的分支 **push 到您的 fork**：
   ```bash
   git push origin feature/your-feature-name
   ```
2. 在 GitHub 上 **建立 Pull Request**
3. **等待審查** 並處理任何回饋意見

## 撰寫準則

### 寫作風格
- 使用清楚、簡潔的語言
- 儘可能使用主動語態
- 保持包容與友善
- 使用一致的格式
- 適時加入螢幕截圖

### 檔案結構
- 文件頁面請放在 `docs/`
- 指南請放在 `docs/guide/`
- 使用小寫檔名並以連字號分隔：`my-new-guide.md`
- 不需要 frontmatter，但可用於中繼資料

### 連結
- 內部文件請使用相對連結
- 適時連結至外部資源
- 確保所有連結都可正常運作

### 圖片與素材
- 圖片請放在 `docs/public/` 或其子目錄
- 使用具描述性的檔名
- 為網頁優化圖片（建議低於 500KB）

## 行為準則

本專案遵循行為準則。參與即表示您同意：
- 互相尊重與包容
- 專注於建設性的回饋
- 為自己的錯誤負責

詳細內容請參閱 [CODE_OF_CONDUCT.md](https://github.com/nuezip/nuezip/blob/main/CODE_OF_CONDUCT.md)。

## 有問題嗎？

如果您對參與貢獻有疑問：
- 先查看現有的 [issues](https://github.com/nuezip/nuezip/issues) 與 [discussions](https://github.com/nuezip/nuezip/discussions)
- 若有需要，請建立新的 issue
- 聯絡維護者

感謝您協助改善 NueZip 文件！
