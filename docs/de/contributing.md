# Mitwirken

Wir freuen uns über Beiträge zur Verbesserung von NueZip! Ob Sie einen Fehler beheben, eine Funktion hinzufügen, übersetzen oder die Dokumentation verbessern — Ihre Hilfe ist willkommen.

## Möglichkeiten, beizutragen

### Fehlerberichte
- Prüfen Sie zunächst bestehende [Issues](https://github.com/nuezip/nuezip/issues)
- Geben Sie macOS-Version, NueZip-Version und Schritte zur Reproduktion an
- Fügen Sie nach Möglichkeit Beispielarchive bei (minimaler Größe)

### Funktionsanfragen
- Beschreiben Sie die Funktion und den Anwendungsfall
- Erläutern Sie, warum sie NueZip-Nutzern nützt
- Prüfen Sie, ob sie zur offline-first-, nativen macOS-Philosophie passt

### Übersetzungen
- NueZip unterstützt mehrere Sprachen. Für die macOS-App finden Sie vorhandene Übersetzungen unter `NueZip/Resources/i18n/`.
- Für diese Dokumentations-Website übersetzen Sie das Markdown unter `docs/` — jede Sprache liegt in ihrem eigenen Locale-Ordner (z. B. `docs/zh-CN/`, `docs/es/`).
- Behalten Sie Marken- und Formatnamen (NueZip, macOS, ZIP, RAR, 7-Zip, Finder, App Store, AES-256) in ihrer Originalform bei.

### Code-Beiträge
- Das Projekt ist in **Swift 6 + SwiftUI** geschrieben
- Forken Sie das Repository und reichen Sie einen Pull-Request ein
- Folgen Sie den Clean-Architecture-Mustern, die im Codebase verwendet werden

## Erste Schritte

### Voraussetzungen
- Node.js 18 oder neuer (für die Website)
- pnpm-Paketmanager (für die Website)
- Xcode 16+ (für die App-Entwicklung)
- macOS 14 Sonoma+

### Entwicklungsumgebung einrichten

1. **Forken Sie das Repository** auf GitHub
2. **Klonen Sie Ihren Fork**:
   ```bash
   git clone https://github.com/nuezip/nuezip.git
   cd nuezip-site
   ```
3. **Abhängigkeiten installieren**:
   ```bash
   pnpm install
   ```
4. **Entwicklungsserver starten**:
   ```bash
   pnpm docs:dev
   ```
5. **Öffnen** Sie `http://localhost:5173` in Ihrem Browser

### Änderungen vornehmen

1. Erstellen Sie einen neuen Branch für Ihre Änderungen:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Nehmen Sie Ihre Änderungen an den Dokumentationsdateien in `docs/` vor
3. Testen Sie Ihre Änderungen, indem Sie die Website bauen:
   ```bash
   pnpm docs:build
   ```
4. Committen Sie Ihre Änderungen:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Änderungen einreichen

1. **Pushen Sie Ihren Branch** in Ihren Fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Erstellen Sie einen Pull-Request** auf GitHub
3. **Warten Sie auf die Überprüfung** und gehen Sie auf Feedback ein

## Richtlinien

### Schreibstil
- Verwenden Sie klare, prägnante Sprache
- Schreiben Sie nach Möglichkeit im Aktiv
- Seien Sie integrativ und einladend
- Verwenden Sie konsistente Formatierung
- Fügen Sie bei Bedarf Screenshots hinzu

### Dateistruktur
- Dokumentationsseiten gehören nach `docs/`
- Anleitungen gehören nach `docs/guide/`
- Verwenden Sie Kleinbuchstaben-Dateinamen mit Bindestrichen: `my-new-guide.md`
- Frontmatter ist nicht erforderlich, kann aber für Metadaten verwendet werden

### Links
- Verwenden Sie relative Links für interne Dokumentation
- Verlinken Sie bei Bedarf auf externe Ressourcen
- Stellen Sie sicher, dass alle Links funktionieren

### Bilder und Assets
- Platzieren Sie Bilder in `docs/public/` oder Unterverzeichnissen
- Verwenden Sie beschreibende Dateinamen
- Optimieren Sie Bilder für das Web (unter 500 KB bevorzugt)

## Verhaltenskodex

Dieses Projekt folgt einem Verhaltenskodex. Durch Ihre Teilnahme stimmen Sie zu:
- Seien Sie respektvoll und integrativ
- Konzentrieren Sie sich auf konstruktives Feedback
- Übernehmen Sie Verantwortung für Fehler

Details finden Sie in [CODE_OF_CONDUCT.md](https://github.com/nuezip/nuezip/blob/main/CODE_OF_CONDUCT.md).

## Fragen?

Wenn Sie Fragen zum Mitwirken haben:
- Prüfen Sie bestehende [Issues](https://github.com/nuezip/nuezip/issues) und [Discussions](https://github.com/nuezip/nuezip/discussions)
- Erstellen Sie bei Bedarf ein neues Issue
- Kontaktieren Sie die Maintainer

Danke, dass Sie helfen, die NueZip-Dokumentation zu verbessern!
