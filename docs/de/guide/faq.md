# FAQ

F: Was ist NueZip?

A: NueZip ist ein professioneller Archivmanager für macOS, der die Komprimierung und Extraktion mehrerer Archivformate unterstützt, darunter RAR, ZIP, 7-Zip, TAR, GZIP und BZIP2.

F: Welche macOS-Versionen werden unterstützt?

A: NueZip benötigt macOS 14 Sonoma oder neuer und ist für Apple Silicon (M-Serie)-Chips optimiert.

F: Wie lade ich NueZip herunter und installiere es?

A: Laden Sie es aus dem [Mac App Store](https://apps.apple.com/app/id6785846417) (empfohlen) oder holen Sie sich das neueste Release von [GitHub Releases](https://github.com/nuezip/nuezip/releases).

F: Ist NueZip kostenlos?

A: NueZip bietet eine kostenlose Testversion mit Kernfunktionen. Ein einmaliger Kauf schaltet den vollen Funktionsumfang frei, einschließlich Stapelverarbeitung, Archiv-Reparatur und erweiterter Verschlüsselung.

F: Welche Formate werden unterstützt?

A: **Lesen**: RAR, ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
**Schreiben (komprimieren)**: ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
Siehe [Einführung](/de/guide/introduction) für die vollständige Formatmatrix.

F: Kann NueZip RAR-Archive erstellen?

A: Nein. NueZip kann RAR-Archive **lesen** (einschließlich Multi-Volume- und reparierter Archive), aber die RAR-Komprimierung wird aufgrund von Lizenzbeschränkungen nicht unterstützt.

F: Ist NueZip sicher für vertrauliche Dateien?

A: Ja. NueZip arbeitet vollständig offline. Alle Vorgänge laufen lokal auf Ihrem Mac. AES-256-Verschlüsselung ist für passwortgeschützte ZIP-Archive verfügbar.

F: Lädt NueZip meine Dateien in die Cloud hoch?

A: Nein. NueZip ist eine vollständig offline arbeitende Anwendung. Ihre Dateien werden niemals irgendwo hochgeladen. Für Komprimierung oder Extraktion ist keine Internetverbindung erforderlich.

F: Wie aktualisiere ich die App?

A: Aktualisieren Sie über den Mac App Store (automatisch) oder laden Sie das neueste Release von GitHub Releases herunter.

F: Wie melde ich Fehler oder fordere Funktionen an?

A: Öffnen Sie ein Issue im [GitHub-Repository](https://github.com/nuezip/nuezip/issues). Bitte geben Sie Ihre macOS-Version, NueZip-Version und Schritte zur Reproduktion an.

F: Wo werden Protokolle und Daten gespeichert?

A: Bei sandboxed (App Store)-Builds:

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Application Support/com.w3cub.nuezip/
```

Entwicklungs-Builds schreiben Protokolle möglicherweise in die Konsole.

Wenn Sie weitere Antworten benötigen, öffnen Sie bitte ein Issue im Repository oder konsultieren Sie die vollständige Dokumentation.
