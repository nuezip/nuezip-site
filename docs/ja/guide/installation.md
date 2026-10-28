# インストール

NueZip は Mac App Store を通じて macOS 向けに提供されています。

## ダウンロードオプション

### Mac App Store（推奨）

- **ダウンロード**: [Mac App Store の NueZip](https://apps.apple.com/app/id6785846417)

Mac App Store 版は自動更新と macOS とのシームレスな統合を提供します。

### GitHub Releases（代替）

直接ダウンロードをご希望の場合は、[GitHub Releases](https://github.com/nuezip/nuezip/releases) からアプリを取得できます。このバージョンは自動更新を受け取らないことに注意してください。

## インストール手順

### Mac App Store

1. 上のダウンロードリンクをクリックするか、Mac App Store で "NueZip" を検索してください
2. "入手" をクリックしてアプリをダウンロードする
3. アプリは自動的にダウンロードおよびインストールされます
4. アプリケーションフォルダまたは Launchpad から NueZip を起動する

### GitHub Releases

1. Releases ページから最新の `.dmg` をダウンロードする
2. ダウンロードした `.dmg` をダブルクリックして開く
3. `NueZip.app` アイコンを `Applications` フォルダにドラッグする
4. マウントされたイメージを取り出し、`Applications` から `NueZip` を開く

macOS がアプリの起動をブロックする場合（Gatekeeper）、**システム設定 → プライバシーとセキュリティ** を開き、NueZip の **このまま開く** をクリックするか、アプリを右クリックして **開く** を選択してください。

## 初回起動

NueZip を初めて起動すると、次のオンボーディングフローが案内されます：

- **フォルダアクセスの許可**: NueZip が一般的なディレクトリ（ダウンロード、書類、デスクトップ）にアクセスできるようにする
- **Finder 機能拡張の有効化**: クイックなアーカイブ操作のための右クリックコンテキストメニューを有効にする

プロンプトが表示されたら権限を許可してください。これらは **システム設定 → プライバシーとセキュリティ** でいつでも変更できます。

## アップデート

- **Mac App Store 版**: アップデートは App Store によって自動的に処理されます
- **GitHub Releases 版**: 新しいリリースをダウンロードし、`Applications` 内のアプリを置き換えてください

## アンインストール

NueZip をアンインストールするには：

1. NueZip を終了する
2. `NueZip.app` を `Applications` からゴミ箱にドラッグする
3. （オプション）アプリのデータとログを削除する：

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
rm -rf ~/Library/Logs/nuezip
```

## システム要件

- **macOS**: Sonoma（14）以降推奨
- **CPU**: Apple Silicon（M シリーズ）または Intel（64-bit）
- **メモリ**: 最小 4GB、推奨 8GB
- **ストレージ**: 約 50 MB

## トラブルシューティング

インストール中に問題が発生した場合：

- **macOS がアプリをブロックする**: **システム設定 → プライバシーとセキュリティ** を開き、NueZip の **このまま開く** をクリックする
- **公証（Notarization）警告**: Mac App Store から署名済み／公証済みのビルドをダウンロードする

詳しくは [トラブルシューティングガイド](./troubleshooting.md) を参照してください。
