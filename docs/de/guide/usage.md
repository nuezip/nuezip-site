# Nutzungsanleitung

## Archive öffnen

### Per Doppelklick öffnen

NueZip registriert sich als Standardhandler für alle unterstützten Archivformate. Doppelklicken Sie einfach auf eine beliebige Archivdatei (`.zip`, `.rar`, `.7z`, `.tar`, `.gz`, `.bz2`, `.xz`, `.zst`), um sie im Hauptfenster von NueZip zu öffnen.

### Mit NueZip öffnen (Finder-Kontextmenü)

Klicken Sie mit der rechten Maustaste auf eine Archivdatei und wählen Sie **Mit NueZip öffnen** aus dem Kontextmenü. Die Finder-Erweiterung bietet zudem Quick-Aktionen:

- **Hier extrahieren** — Archivinhalte in den aktuellen Ordner extrahieren
- **Nach „Ordnername/" extrahieren** — In einen benannten Unterordner extrahieren
- **Zu ZIP komprimieren** — Ausgewählte Dateien/Ordner zu einem ZIP-Archiv komprimieren
- **Mit NueZip öffnen** — Im Hauptbrowserfenster öffnen

### Per Drag & Drop auf das Tray

Ziehen Sie eine beliebige Archivdatei auf das NueZip-Menüleistensymbol, um sie schnell im Drop-Panel zu öffnen und sofortigen Zugriff zu erhalten. Sie können Dateien auch auf das Tray-Symbol ziehen, um sie zu komprimieren.

## Archive extrahieren

### Grundlegende Extraktion

1. Öffnen Sie ein Archiv in NueZip
2. Klicken Sie auf die Schaltfläche **Extrahieren** in der Toolbar
3. Wählen Sie einen Zielordner
4. Klicken Sie auf **Extrahieren**

### Schnellextraktion aus dem Finder

Klicken Sie im Finder mit der rechten Maustaste auf ein Archiv und wählen Sie eine der Quick-Aktionen:
- **Hier extrahieren** — Extrahiert direkt in den aktuellen Ordner
- **Nach „[Archivname]/" extrahieren** — Extrahiert in einen benannten Unterordner für saubere Organisation

### Mit Passwort extrahieren

Bei passwortgeschützten Archiven fragt NueZip nach dem Passwort. Der integrierte Passwort-Manager kann Anmeldedaten sicher in Ihrem lokalen Schlüsselbund für zukünftige Nutzung speichern.

## Archive komprimieren

### Ein neues Archiv erstellen

1. Wählen Sie Dateien oder Ordner im Hauptfenster von NueZip aus
2. Klicken Sie auf die Schaltfläche **Komprimieren** in der Toolbar
3. Wählen Sie das Archivformat (ZIP, 7z, TAR, GZIP usw.)
4. Konfigurieren Sie die Komprimierungseinstellungen (Stufe, Verschlüsselungsmethode)
5. Klicken Sie auf **Komprimieren**

### Aus dem Finder komprimieren

Klicken Sie im Finder mit der rechten Maustaste auf Dateien/Ordner und wählen Sie **Mit NueZip komprimieren**:
- **Zu ZIP komprimieren** — Schnelle ZIP-Archiverstellung
- **Mit Optionen komprimieren** — Öffnet NueZip mit erweiterten Einstellungen

### Per Drag & Drop komprimieren

Ziehen Sie Dateien auf das NueZip-Menüleistentray-Symbol, um schnell ein ZIP-Archiv zu erstellen.

## Stapelverarbeitung

### Stapelkomprimierung

1. Wählen Sie mehrere Elemente in NueZip aus
2. Wählen Sie **Stapelkomprimierung** aus der Toolbar oder dem Datei-Menü
3. Jedes Element wird in ein separates Archiv komprimiert

### Stapelextraktion

1. Wählen Sie mehrere Archive in NueZip aus
2. Wählen Sie **Stapelextraktion** aus der Toolbar oder dem Datei-Menü
3. Alle Archive werden gleichzeitig extrahiert

### Stapelkonvertierung

1. Wählen Sie ein oder mehrere Archive aus
2. Wählen Sie **Konvertieren** → Zielformat auswählen
3. NueZip rekomprimiert jedes Archiv in das gewählte Format

### Stapelverschlüsselung

1. Wählen Sie mehrere ZIP-Archive aus
2. Wählen Sie **Stapelverschlüsselung**
3. Legen Sie ein Passwort fest — alle ausgewählten Archive werden passwortgeschützt

## Formatkonvertierung

Konvertieren Sie Archive zwischen allen unterstützten Formaten:

1. Öffnen Sie ein Archiv
2. Klicken Sie auf **Konvertieren** in der Toolbar
3. Wählen Sie das Zielformat (z. B. RAR → ZIP, 7z → TAR.GZ)
4. Wählen Sie den Ausgabespeicherort
5. Klicken Sie auf **Konvertieren**

## Archiv-Reparatur

Für beschädigte RAR- oder ZIP-Archive:

1. Öffnen Sie das beschädigte Archiv
2. Klicken Sie auf **Reparieren** in der Toolbar
3. NueZip versucht, die Archivdaten zu rekonstruieren
4. Das reparierte Archiv wird als neue Datei gespeichert

## Archivsuche

Finden Sie bestimmte Dateien innerhalb von Archiven:

1. Klicken Sie auf die Schaltfläche **Suchen** in der Toolbar
2. Geben Sie ein Dateinamenmuster ein
3. NueZip durchsucht alle Einträge im geöffneten Archiv
4. Ergebnisse werden mit vollständigen Pfaden für schnelle Navigation angezeigt

## Leistungs-Benchmark

Testen Sie die Kompressionsleistung Ihres Systems:

1. Gehen Sie zu **Werkzeuge → Benchmark**
2. NueZip führt KompressionsTests mit verschiedenen Formaten und Einstellungen durch
3. Ergebnisse zeigen Kompressionsgeschwindigkeit (MB/s) und Verhältnis für jedes Format
4. Nutzen Sie dies, um die Leistung verschiedener Kompressionsmethoden zu vergleichen

## Multi-Volume-Archive (Split)

Erstellen Sie Split-Archive für große Daten:

1. Aktivieren Sie während der Komprimierung **In Volumes aufteilen**
2. Wählen Sie die Volume-Größe (z. B. 100 MB, 650 MB, 4,7 GB oder benutzerdefiniert)
3. NueZip erstellt nummerierte Teildateien (`.zip.001`, `.zip.002` usw.)
4. Zum Extrahieren öffnen Sie die erste Teildatei — NueZip lädt den Rest automatisch

- **Passwort**: Geben Sie ein Passwort für verschlüsselte Archive an
- **In Ordner einbinden**: Erstellt automatisch einen Stammordner, falls das Archiv kein einzelnes Stammverzeichnis hat
- **Danach öffnen**: Zeigt die extrahierten Dateien im Finder nach Abschluss an
- **Beschädigte Dateien behalten**: Bewahrt alle Dateien, die vor einem Fehler extrahiert wurden (für Teilwiederherstellung)
- **Aktualisierungsmodus**: Wählen Sie, wie mit vorhandenen Dateien umgegangen wird (überschreiben, überspringen, umbenennen)

### Stapelextraktion

1. Gehen Sie zu **Werkzeuge → Stapelextraktion**
2. Klicken Sie auf **Dateien hinzufügen...**, um Archivdateien auszuwählen
3. Wählen Sie einen Zielordner
4. Aktivieren Sie optional **Quelldateien nach Extraktion löschen**
5. Klicken Sie auf **Start**

## Archive erstellen

### Dateien komprimieren

1. Klicken Sie auf die Schaltfläche **Komprimieren** in der Toolbar
2. Wählen Sie zu komprimierende Dateien aus (oder ziehen Sie sie per Drag & Drop in das Fenster)
3. Wählen Sie **Archivformat**: ZIP, 7Z, TAR, GZIP, BZIP2
4. Konfigurieren Sie **Kompressionsmethode** und -stufe
5. Legen Sie **Speicherort** und Archivnamen fest
6. Legen Sie optional ein **Passwort** für die Verschlüsselung fest
7. Legen Sie optional **Split-Größe** für Multi-Volume-Archive fest
8. Klicken Sie auf **Komprimieren**

### Dateien zu vorhandenem Archiv hinzufügen

1. Öffnen Sie ein vorhandenes Archiv in NueZip
2. Klicken Sie auf **Dateien hinzufügen** in der Toolbar
3. Wählen Sie hinzuzufügende Dateien aus
4. Klicken Sie auf **Hinzufügen**

## Stapelverarbeitung

### Stapelkomprimierung

1. Gehen Sie zu **Werkzeuge → Stapelkomprimierung**
2. Klicken Sie auf **Dateien/Ordner auswählen...**, um Elemente zu wählen
3. Jedes ausgewählte Element wird zu einem separaten Archiv
4. Konfigurieren Sie Ausgabe-**Format**, **Speicherort** und Dateibenennungspräfix
5. Klicken Sie auf **Start**

### Stapelformatkonvertierung

1. Gehen Sie zu **Werkzeuge → Stapelformatkonvertierung**
2. Klicken Sie auf **Dateien hinzufügen...**, um Quellarchive auszuwählen
3. Wählen Sie **Zielformat**
4. Aktivieren Sie optional **Quelldateien nach Konvertierung löschen**
5. Klicken Sie auf **Start**

### Stapelverschlüsselung

1. Gehen Sie zu **Werkzeuge → Stapelverschlüsselung**
2. Klicken Sie auf **Dateien hinzufügen...**, um Archive auszuwählen
3. Geben Sie ein **Passwort** ein
4. Klicken Sie auf **Verschlüsseln**

## Erweiterte Funktionen

### Archiv-Reparatur

Reparieren Sie beschädigte oder defekte Archive:

1. Wählen Sie das beschädigte Archiv aus
2. Gehen Sie zu **Werkzeuge → Archiv reparieren**
3. NueZip scannt den Header, baut das Verzeichnis neu auf und repariert Datenblöcke
4. Prüfen Sie das Reparaturergebnis

### Formatkonvertierung

Konvertieren Sie Archive zwischen Formaten:

1. Öffnen Sie ein Archiv oder wählen Sie eine Datei aus
2. Gehen Sie zu **Datei → Format konvertieren**
3. Wählen Sie Zielformat und Kompressionsstufe
4. Löschen Sie optional die Originaldatei
5. Klicken Sie auf **Konvertieren**

### Passwort-Manager

NueZip speichert Archivpasswörter sicher in Ihrem lokalen Schlüsselbund:

1. Gehen Sie zu **Werkzeuge → Passwort-Manager**
2. Zeigen Sie alle gespeicherten Passwörter an
3. Fügen, bearbeiten oder löschen Sie Einträge
4. Passwörter werden beim Öffnen passender verschlüsselter Archive automatisch angewendet

### Leistungs-Benchmark

Testen Sie die Kompressionsleistung Ihres Systems:

1. Gehen Sie zu **Werkzeuge → Leistungs-Benchmark**
2. Wählen Sie eine Testdatei (oder verwenden Sie die Standarddatei)
3. Klicken Sie auf **Test**
4. Zeigen Sie Ergebnisse einschließlich Komprimier-/Dekomprimierungsgeschwindigkeit und Bewertung an

### Archivsuche

Finden Sie Dateien innerhalb von Archiven:

1. Öffnen Sie ein Archiv
2. Drücken Sie `Cmd+F` oder klicken Sie auf das Suchsymbol
3. Geben Sie einen Dateinamen ein, optional mit Groß-/Kleinschreibung oder ganzes Wort
4. Durchsuchen Sie die Ergebnisse und klicken Sie zur Navigation

## Tastenkürzel

| Kürzel | Aktion |
|----------|--------|
| `Cmd+O` | Archiv öffnen |
| `Cmd+N` | Neues Archiv |
| `Cmd+E` | Extrahieren |
| `Cmd+F` | Im Archiv suchen |
| `Cmd+,` | Einstellungen öffnen |
| `Cmd+W` | Fenster schließen |
| `Cmd+Q` | Anwendung beenden |
| `Cmd+↑` | Eine Ebene nach oben |
| `Cmd+→` | Vorwärts gehen |

## Einstellungen

Greifen Sie über **NueZip → Einstellungen** auf die Einstellungen zu oder drücken Sie `Cmd+,`:

- **Allgemein**: Sprache, Start bei Anmeldung, Erscheinungsbild-Theme
- **Komprimierung**: Standardformat, Kompressionsstufe, Split-Größe
- **Extraktion**: Standardziel, Einbindungsverhalten, Konfliktauflösung
- **Ordnerzugriff**: Ordnerberechtigungen und Lesezeichen verwalten
- **Erweitert**: Hardwarebeschleunigung, Thread-Anzahl, temporäres Verzeichnis
- **Datenschutz**: Datenerfassungspräferenzen
