# macOS-Berechtigungen

NueZip kann einige macOS-Berechtigungen anfordern, um das beste Erlebnis zu bieten. Diese Seite erklärt, wofür jede Berechtigung dient und wie Sie sie verwalten.

## Dateien und Ordner

Um von überall auf Ihrem System auf Archive zuzugreifen, benötigt NueZip die Dateizugriffsberechtigung.

**Wofür sie genutzt wird**: Lesen von Archivdateien, Extrahieren von Inhalten und Erstellen neuer Archive.

**Verwalten**: Systemeinstellungen → **Datenschutz & Sicherheit** → **Dateien und Ordner**

Gewähren Sie den Zugriff, wenn Sie beim ersten Start dazu aufgefordert werden. Sie können den Zugriff jederzeit verwalten oder widerrufen.

## Finder-Erweiterung

NueZip enthält eine Finder-Erweiterung, die Optionen für das Kontextmenü per Rechtsklick hinzufügt.

**Wofür sie genutzt wird**: Klicken Sie im Finder mit der rechten Maustaste auf Archivdateien, um sie direkt mit NueZip zu extrahieren, zu komprimieren oder zu öffnen.

**Aktivieren**: Systemeinstellungen → **Datenschutz & Sicherheit** → **Erweiterungen** → **Finder-Erweiterungen** → **NueZip** aktivieren

## Benachrichtigungen

NueZip kann Benachrichtigungen für zeitaufwändige Vorgänge anzeigen (Stapelextraktion, große Archivkomprimierung).

**Wofür sie genutzt wird**: Benachrichtigung, wenn ein Hintergrundvorgang abgeschlossen ist.

**Verwalten**: Systemeinstellungen → **Benachrichtigungen** → **NueZip**

## Vollständiger Datenträgerzugriff (Optional)

Zum Extrahieren von Archiven an systemgeschützte Orten kann NueZip Vollständigen Datenträgerzugriff anfordern.

**Wofür er genutzt wird**: Extrahierte Dateien an Orte außerhalb Ihres Benutzerordners schreiben.

**Verwalten**: Systemeinstellungen → **Datenschutz & Sicherheit** → **Vollständiger Datenträgerzugriff**

Diese Berechtigung ist optional und nur erforderlich, wenn Sie mit systemweiten Orten arbeiten.

## Eine Berechtigung mit dem Terminal zurücksetzen

Wenn ein Berechtigungsdialog abgelehnt wurde oder der Zustand inkonsistent ist, können Sie die macOS-Berechtigungsabfragen mit `tccutil` zurücksetzen:

```bash
# Berechtigungen für NueZip zurücksetzen
tccutil reset All com.w3cub.nuezip
```

Nach dem Ausführen von `tccutil` starten Sie die App neu und rufen die Funktion erneut auf, um erneut dazu aufgefordert zu werden.

## Fehlerbehebung

- Wenn keine Benachrichtigungen erscheinen, prüfen Sie, ob die **Benachrichtigungen**-Berechtigung gewährt ist.
- Nach dem Ändern von Berechtigungen beenden Sie NueZip stets und öffnen es erneut, damit die Änderungen wirksam werden.

Für weitere Hilfe besuchen Sie die [Fehlerbehebungsanleitung](./troubleshooting.md).
