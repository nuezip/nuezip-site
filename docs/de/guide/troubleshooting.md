# Fehlerbehebung

Diese Seite sammelt häufige Probleme mit NueZip unter macOS und deren Lösung.

## Anwendung startet nicht oder stürzt beim Start ab

Symptome: NueZip öffnet nicht, stürzt sofort ab oder zeigt einen unerwarteten Fehler an.

Schritte zur Lösung:

1. Stellen Sie sicher, dass Ihre macOS-Version die Mindestanforderungen erfüllt (macOS 14 Sonoma+).
2. Beenden Sie die App und starten Sie sie neu.
3. Starten Sie Ihren Mac neu.
4. Wenn die App von GitHub Releases heruntergeladen wurde, versuchen Sie, das neueste Build oder die notarisierte Version herunterzuladen.
5. Wenn die Probleme bestehen bleiben, sammeln Sie Protokolle (siehe unten) und öffnen Sie ein Issue.

## Ein RAR-Archiv kann nicht geöffnet werden

Symptome: NueZip kann eine `.rar`-Datei nicht öffnen oder zeigt einen Fehler an.

Checkliste:

1. Stellen Sie sicher, dass die RAR-Datei nicht beschädigt ist. Versuchen Sie, sie mit einem anderen Werkzeug wie The Unarchiver zu öffnen.
2. Multi-Volume-RAR-Archive müssen alle Teile enthalten (`.part1.rar`, `.part2.rar` usw.).
3. Passwortgeschützte RAR-Archive benötigen das korrekte Passwort.
4. Das RAR5-Format wird unterstützt. Wenn Sie ein älteres RAR-Format haben, melden Sie es bitte.

## Extraktion schlägt mit Passwortfehler fehl

Symptome: Extraktion schlägt fehl mit „Falsches Passwort" oder Entschlüsselungsfehler.

Checkliste:

1. Verifizieren Sie, dass das Passwort korrekt ist — Passwörter sind groß-/kleinschreibungssensitiv.
2. Stellen Sie sicher, dass der korrekte Verschlüsselungstyp unterstützt wird (AES-256 für ZIP).
3. Versuchen Sie, das Passwort erneut aus dem Passwort-Manager einzugeben.

## Finder-Erweiterung wird nicht angezeigt

Symptome: Das Rechtsklicken auf ein Archiv im Finder zeigt keine NueZip-Optionen.

Checkliste:

1. Aktivieren Sie die Erweiterung: Systemeinstellungen → Datenschutz & Sicherheit → Erweiterungen → Finder-Erweiterungen → **NueZip** aktivieren.
2. Starten Sie den Finder neu: Klicken Sie im Aktivitätsmonitor mit der rechten Maustaste auf Finder → Relaunch, oder führen Sie `killall Finder` im Terminal aus.
3. Installieren Sie die App neu, falls die Erweiterung weiterhin nicht erscheint.

## Lizenz / Kauf wird nicht angezeigt

Symptome: Sie haben NueZip gekauft, aber es wird weiterhin als Testversion angezeigt.

Checkliste:

1. Stellen Sie sicher, dass Sie mit derselben Apple ID angemeldet sind, die für den Kauf verwendet wurde.
2. Stellen Sie Käufe wieder her: NueZip → Einstellungen → Lizenz → Käufe wiederherstellen.
3. Kontaktieren Sie den Support, wenn das Problem bestehen bleibt.

## Debug-Protokolle sammeln

Um bei der Diagnose von Problemen zu helfen, sammeln Sie Debug-Protokolle aus NueZip:

```bash
# Protokolle zur Freigabe auf den Desktop kopieren
cp ~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log ~/Desktop/NueZip-Logs
```

Öffnen Sie dann ein Issue auf [GitHub Issues](https://github.com/nuezip/nuezip/issues) und hängen Sie die Protokolle an.

## Berechtigungsbezogene Probleme

Wenn eine Funktion nach dem Gewähren der Berechtigung dennoch nicht funktioniert:

1. Beenden Sie die App und öffnen Sie sie erneut, nachdem Sie die Berechtigung gewährt haben.
2. Setzen Sie die Berechtigungsabfrage bei Bedarf mit `tccutil` zurück (siehe die [Berechtigungsanleitung](./permissions.md)).

## Leistungsprobleme

Wenn die App langsam ist oder nicht reagiert:

1. Schließen Sie andere ressourcenintensive Anwendungen.
2. Versuchen Sie, ein kleineres Archiv zu extrahieren, um das Problem zu isolieren.
3. Starten Sie die App neu, wenn die Leistung über die Zeit abnimmt.

## Protokolle anzeigen

Zur Fehlerbehebung bei Abstürzen oder Problemen sind Anwendungsprotokolle das nützlichste Artefakt. Bei sandboxed (App Store)-Builds prüfen Sie:

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log
```

## App zurücksetzen

So setzen Sie Einstellungen zurück und löschen lokale Daten:

1. Beenden Sie NueZip
2. Entfernen Sie den Container (Vorsicht — dies löscht alle Einstellungen):

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
```

3. Öffnen Sie NueZip erneut und konfigurieren Sie es neu.

## Ein Problem melden

Geben Sie beim Öffnen eines Issues an:

- macOS-Version (Apple-Menü → Über diesen Mac)
- NueZip-Version (NueZip → Über)
- Schritte zur Reproduktion
- Protokolle (siehe Abschnitt [Protokolle anzeigen](#view-logs) zur Vorgehensweise)

Dies hilft den Maintern, das Problem schneller zu identifizieren und zu beheben.
