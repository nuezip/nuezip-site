# FAQ

Q: NueZip とは何ですか？

A: NueZip は macOS 向けのプロフェッショナルなアーカイブマネージャーであり、RAR、ZIP、7-Zip、TAR、GZIP、BZIP2 を含む複数のアーカイブフォーマットの圧縮と展開をサポートしています。

Q: どの macOS バージョンがサポートされていますか？

A: NueZip は macOS 14 Sonoma 以降を必要とし、Apple Silicon（M シリーズ）チップに最適化されています。

Q: NueZip をどのようにダウンロードしてインストールすればよいですか？

A: [Mac App Store](https://apps.apple.com/app/id6785846417)（推奨）からダウンロードするか、[GitHub Releases](https://github.com/nuezip/nuezip/releases) から最新のリリースを取得してください。

Q: NueZip は無料ですか？

A: NueZip はコア機能を備えた無料試用版を提供しています。買い切りの購入により、バッチ操作、アーカイブ修復、高度な暗号化を含む全機能のセットがアンロックされます。

Q: どのフォーマットがサポートされていますか？

A: **読み取り**: RAR、ZIP、7-Zip、TAR、GZIP、BZIP2、XZ、Zstandard\
**書き込み（圧縮）**: ZIP、7-Zip、TAR、GZIP、BZIP2、XZ、Zstandard\
完全なフォーマットマトリックスについては [はじめに](/ja/guide/introduction) を参照してください。

Q: NueZip で RAR アーカイブを作成できますか？

A: いいえ。NueZip は RAR アーカイブを **読み取る** ことはできますが（マルチボリュームや修復済みのアーカイブを含む）、RAR の圧縮はライセンス制限によりサポートされていません。

Q: NueZip は機密ファイルに安全ですか？

A: はい。NueZip は完全にオフラインで動作します。すべての操作はお使いの Mac 上でローカルに実行されます。パスワードで保護された ZIP アーカイブには AES-256 暗号化を利用できます。

Q: NueZip は私のファイルをクラウドにアップロードしますか？

A: いいえ。NueZip は完全にオフラインのアプリケーションです。お客様のファイルがどこかにアップロードされることはありません。圧縮や展開にインターネット接続は不要です。

Q: アプリを更新するにはどうすればよいですか？

A: Mac App Store（自動）を通じて、または GitHub Releases から最新のリリースをダウンロードして更新してください。

Q: バグを報告したり機能をリクエストしたりするにはどうすればよいですか？

A: [GitHub リポジトリ](https://github.com/nuezip/nuezip/issues) で issue を作成してください。macOS のバージョン、NueZip のバージョン、再現手順を含めてください。

Q: ログとデータはどこに保存されますか？

A: サンドボックス化された（App Store の）ビルドの場合：

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Application Support/com.w3cub.nuezip/
```

開発ビルドはログをコンソールに出力する場合があります。

さらに回答が必要な場合は、リポジトリで issue を作成するか、完全なドキュメントを参照してください。
