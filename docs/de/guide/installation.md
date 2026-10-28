# Installation

NueZip ist für macOS über den Mac App Store erhältlich.

## Download-Optionen

### Mac App Store (Empfohlen)

- **Download**: [NueZip im Mac App Store](https://apps.apple.com/app/id6785846417)

Die Mac App Store-Version bietet automatische Updates und nahtlose Integration mit macOS.

### GitHub Releases (Alternative)

Wenn Sie lieber direkt herunterladen möchten, erhalten Sie die App von [GitHub Releases](https://github.com/nuezip/nuezip/releases). Beachten Sie, dass diese Version keine automatischen Updates erhält.

## Installationsschritte

### Mac App Store

1. Klicken Sie auf den Download-Link oben oder suchen Sie im Mac App Store nach „NueZip"
2. Klicken Sie auf „Get" (Laden), um die App herunterzuladen
3. Die App wird automatisch heruntergeladen und installiert
4. Starten Sie NueZip aus Ihrem Programme-Ordner oder dem Launchpad

### GitHub Releases

1. Laden Sie die neueste `.dmg` von der Releases-Seite herunter
2. Doppelklicken Sie auf die heruntergeladene `.dmg`, um sie zu öffnen
3. Ziehen Sie das `NueZip.app`-Symbol in Ihren `Applications`-Ordner
4. Werfen Sie das eingehängte Image aus und öffnen Sie `NueZip` aus `Applications`

Wenn macOS das Öffnen der App verhindert (Gatekeeper), öffnen Sie **Systemeinstellungen → Datenschutz & Sicherheit** und klicken Sie für NueZip auf **Trotzdem öffnen**, oder klicken Sie mit der rechten Maustaste auf die App und wählen Sie **Öffnen**.

## Erster Start

Wenn Sie NueZip zum ersten Mal starten, werden Sie durch einen Onboarding-Ablauf geführt, um:

- **Ordnerzugriff gewähren**: Erlauben Sie NueZip den Zugriff auf gängige Verzeichnisse (Downloads, Dokumente, Desktop)
- **Finder-Erweiterung aktivieren**: Aktivieren Sie das Kontextmenü per Rechtsklick für schnelle Archivoperationen

Gewähren Sie die Berechtigungen, wenn Sie dazu aufgefordert werden. Sie können diese jederzeit in **Systemeinstellungen → Datenschutz & Sicherheit** ändern.

## Updates

- **Mac App Store-Version**: Updates werden automatisch vom App Store durchgeführt
- **GitHub Releases-Version**: Laden Sie das neuere Release herunter und ersetzen Sie die App in `Applications`

## Deinstallation

So deinstallieren Sie NueZip:

1. Beenden Sie NueZip
2. Ziehen Sie `NueZip.app` aus `Applications` in den Papierkorb
3. (Optional) Entfernen Sie App-Daten und -Protokolle:

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
rm -rf ~/Library/Logs/nuezip
```

## Systemanforderungen

- **macOS**: Sonoma (14) oder neuer empfohlen
- **CPU**: Apple Silicon (M-Serie) oder Intel (64-Bit)
- **Arbeitsspeicher**: 4 GB mindestens, 8 GB empfohlen
- **Speicher**: ~50 MB

## Fehlerbehebung

Wenn bei der Installation Probleme auftreten:

- **macOS blockiert die App**: Öffnen Sie **Systemeinstellungen → Datenschutz & Sicherheit** und klicken Sie für NueZip auf **Trotzdem öffnen**
- **Notarisierungswarnung**: Laden Sie ein signiertes/notarielles Build vom Mac App Store herunter

Für weitere Hilfe besuchen Sie die [Fehlerbehebungsanleitung](./troubleshooting.md).
