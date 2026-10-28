# Anpassung

Machen Sie NueZip zu Ihrem eigenen, indem Sie Ihr Archivverwaltungserlebnis personalisieren. Diese Anleitung deckt alles ab, was Sie anpassen können.

## Allgemeine Einstellungen

Öffnen Sie **NueZip → Einstellungen** (oder drücken Sie `Cmd+,`), um auf alle Anpassungsoptionen zuzugreifen.

### Erscheinungsbild
- **Theme**: Wählen Sie zwischen Hell, Dunkel oder System (folgt dem macOS-Erscheinungsbild)
- **Symbolstil**: Legen Sie monochromes oder farbiges Menüleistensymbol fest
- **Sprache**: Aus unterstützten Sprachen wählen (Englisch, 中文, 日本語, 한국어 und mehr)

## Komprimierungs-Standardwerte

Legen Sie Ihre bevorzugten Komprimierungsstandardwerte fest:

| Einstellung | Optionen | Beschreibung |
|---------|---------|-------------|
| **Standardformat** | ZIP, 7z, TAR, GZIP, BZIP2, XZ | Archivformat für schnelle Komprimierung |
| **Kompressionsstufe** | Store, Fast, Normal, Maximum, Ultra | Abwägung zwischen Geschwindigkeit und Verhältnis |
| **Verschlüsselung** | None, AES-128, AES-256 | Standardverschlüsselung für ZIP/7z-Archive |
| **Volume-Größe** | Benutzerdefiniert (MB) | Standard-Split-Größe für Multi-Volume-Archive |

### Beispielkonfiguration

Für den täglichen Gebrauch:
- **Format**: ZIP
- **Stufe**: Normal
- **Verschlüsselung**: AES-256 (für sensible Dateien)
- **Volume**: Aus

Für Archivierung:
- **Format**: 7-Zip
- **Stufe**: Ultra
- **Verschlüsselung**: AES-256
- **Volume**: 4,7 GB (passt auf DVD)

## Extraktions-Einstellungen

Passen Sie das Extraktionsverhalten an:

- **Standardmäßig in Unterordner extrahieren**: Erstellt automatisch einen benannten Ordner beim Extrahieren
- **Ordner nach Extraktion öffnen**: Zeigt extrahierte Inhalte im Finder an
- **Überschreibungsverhalten**: Nachfragen, Immer überschreiben oder Vorhandene überspringen
- **Dateidaten bewahren**: Behält die ursprünglichen Zeitstempel aus dem Archiv bei

## Finder-Erweiterung

Verwalten Sie die Finder-Kontextmenü-Integration:

- **Aktivieren/Deaktivieren**: Schaltet die Menüeinträge per Rechtsklick ein oder aus
- **Quick-Aktionen**: Wählen Sie, welche Aktionen im Kontextmenü erscheinen
  - Hier extrahieren
  - In Ordner extrahieren
  - Zu ZIP komprimieren
  - Mit Optionen komprimieren

Verwalten Sie diese unter: **Systemeinstellungen → Datenschutz & Sicherheit → Erweiterungen → Finder-Erweiterungen**

## Menüleisten- (Tray-)Symbol

Passen Sie das Menüleisten-Drop-Panel an:

- **In Menüleiste anzeigen**: Tray-Symbol aktivieren/deaktivieren
- **Panel automatisch schließen**: Drop-Panel nach Extraktion schließen
- **Zuletzt geöffnete Archive**: Anzahl der anzuzeigenden kürzlichen Elemente
- **Beim Schließen beenden**: Ob die App im Hintergrund bleibt

## Benachrichtigungen

- **Abschlussbenachrichtigungen anzeigen**: Benachrichtigung, wenn zeitaufwändige Vorgänge abgeschlossen sind
- **Fehlerbenachrichtigungen anzeigen**: Benachrichtigungen für fehlgeschlagene Vorgänge anzeigen
- **Ton**: Einen Ton abspielen, wenn Vorgänge abgeschlossen sind

## Allgemeine Einstellungen

Greifen Sie in **Einstellungen → Allgemein** darauf zu:

- **Sprache**: Zwischen Englisch, 中文, 日本語 und mehr wechseln
- **Start bei Anmeldung**: NueZip startet automatisch, wenn Sie sich anmelden
- **Theme**: Hell- oder Dunkelmodus (folgt standardmäßig dem System)
- **Menüleistensymbol**: Menüleistensymbol anzeigen oder ausblenden

## Tipps

- Legen Sie Ihre bevorzugten Komprimierungsstandardwerte einmal fest, um die tägliche Archivierung zu beschleunigen
- Aktivieren Sie „Start bei Anmeldung", damit NueZip stets nur einen Klick entfernt ist
- Nutzen Sie die Finder-Erweiterung für den schnellsten Extraktions-/Komprimierungs-Workflow
- Prüfen Sie den Ordnerzugriff regelmäßig in den Systemeinstellungen, um alles übersichtlich zu halten
