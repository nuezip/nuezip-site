# Personnalisation

Rendez NueZip véritablement vôtre en personnalisant votre expérience de gestion d'archives. Ce guide couvre tout ce que vous pouvez personnaliser.

## Préférences générales

Ouvrez **NueZip → Réglages** (ou appuyez sur `Cmd+,`) pour accéder à toutes les options de personnalisation.

### Apparence
- **Thème** : Choisissez entre Clair, Sombre ou Système (suit l'apparence macOS)
- **Style d'icône** : Définissez une icône de barre de menu monochrome ou en couleur
- **Langue** : Sélectionnez parmi les langues prises en charge (English, 中文, 日本語, 한국어, et plus)

## Valeurs par défaut de compression

Définissez vos valeurs de compression par défaut préférées :

| Réglage | Options | Description |
|---------|---------|-------------|
| **Format par défaut** | ZIP, 7z, TAR, GZIP, BZIP2, XZ | Format d'archive pour une compression rapide |
| **Niveau de compression** | Store, Fast, Normal, Maximum, Ultra | Compromis entre vitesse et taux |
| **Chiffrement** | None, AES-128, AES-256 | Chiffrement par défaut pour les archives ZIP/7z |
| **Taille de volume** | Personnalisé (Mo) | Taille de fractionnement par défaut pour les archives multi-volumes |

### Exemple de configuration

Pour un usage quotidien :
- **Format** : ZIP
- **Niveau** : Normal
- **Chiffrement** : AES-256 (pour les fichiers sensibles)
- **Volume** : Désactivé

Pour l'archivage :
- **Format** : 7-Zip
- **Niveau** : Ultra
- **Chiffrement** : AES-256
- **Volume** : 4,7 Go (pour tenir sur DVD)

## Préférences d'extraction

Personnalisez le comportement d'extraction :

- **Extraire vers un sous-dossier par défaut** : Crée automatiquement un dossier nommé lors de l'extraction
- **Ouvrir le dossier après extraction** : Révèle les contenus extraits dans Finder
- **Comportement de remplacement** : Demander, Toujours écraser ou Ignorer les fichiers existants
- **Préserver les dates de fichiers** : Conserve les horodatages originaux de l'archive

## Extension Finder

Gérez l'intégration du menu contextuel Finder :

- **Activer/Désactiver** : Active ou désactive les éléments du menu au clic droit
- **Actions rapides** : Choisissez les actions qui apparaissent dans le menu contextuel
  - Extraire ici
  - Extraire vers un dossier
  - Compresser en ZIP
  - Compresser avec options

Gérez-les dans : **Réglages système → Confidentialité et sécurité → Extensions → Extensions Finder**

## Icône de la barre de menu (zone)

Personnalisez le panneau de dépôt de la barre de menu :

- **Afficher dans la barre de menu** : Active/désactive l'icône de zone
- **Fermer automatiquement le panneau** : Ferme le panneau de dépôt après extraction
- **Archives récentes** : Nombre d'éléments récents à afficher
- **Quitter à la fermeture** : Selon que l'application reste en arrière-plan

## Notifications

- **Afficher les alertes de fin** : Notifie quand les opérations longues se terminent
- **Afficher les alertes d'erreur** : Affiche des notifications pour les opérations échouées
- **Son** : Joue un son quand les opérations se terminent

## Réglages généraux

Accédez-y dans **Réglages → Général** :

- **Langue** : Basculez entre English, 中文, 日本語, et plus
- **Lancement à la connexion** : NueZip démarre automatiquement à votre connexion
- **Thème** : Mode clair ou sombre (suit le système par défaut)
- **Icône de la barre de menu** : Affiche ou masque l'icône de la barre de menu

## Conseils

- Définissez une fois vos valeurs de compression favorites pour accélérer l'archivage quotidien
- Activez « Lancement à la connexion » pour que NueZip ne soit qu'à un clic
- Utilisez l'extension Finder pour le flux de travail d'extraction/compression le plus rapide
- Revoyez périodiquement l'accès aux dossiers dans les Réglages système pour garder les choses ordonnées
