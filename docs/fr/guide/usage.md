# Guide d'utilisation

## Ouverture d'archives

### Double-clic pour ouvrir

NueZip s'enregistre comme gestionnaire par défaut pour tous les formats d'archives pris en charge. Il suffit de double-cliquer sur n'importe quel fichier d'archive (`.zip`, `.rar`, `.7z`, `.tar`, `.gz`, `.bz2`, `.xz`, `.zst`) pour l'ouvrir dans la fenêtre principale de NueZip.

### Ouvrir avec NueZip (menu contextuel Finder)

Faites un clic droit sur n'importe quel fichier d'archive et sélectionnez **Ouvrir avec NueZip** dans le menu contextuel. L'extension Finder propose également des actions rapides :

- **Extraire ici** — Extrait le contenu de l'archive dans le dossier courant
- **Extraire vers « NomDossier/ »** — Extrait dans un sous-dossier nommé
- **Compresser en ZIP** — Compresse les fichiers/dossiers sélectionnés en une archive ZIP
- **Ouvrir avec NueZip** — Ouvre dans la fenêtre de navigation principale

### Glisser-déposer vers la zone

Glissez n'importe quel fichier d'archive sur l'icône de la barre de menu de NueZip pour l'ouvrir rapidement dans le panneau de dépôt pour un accès instantané. Vous pouvez également glisser des fichiers sur l'icône de la zone pour les compresser.

## Extraction d'archives

### Extraction de base

1. Ouvrez une archive dans NueZip
2. Cliquez sur le bouton **Extraire** dans la barre d'outils
3. Choisissez un dossier de destination
4. Cliquez sur **Extraire**

### Extraction rapide depuis Finder

Faites un clic droit sur une archive dans Finder et sélectionnez l'une des actions rapides :
- **Extraire ici** — Extrait directement dans le dossier courant
- **Extraire vers « [NomArchive]/ »** — Extrait dans un sous-dossier nommé pour un rangement propre

### Extraction avec mot de passe

Pour les archives protégées par mot de passe, NueZip vous demandera le mot de passe. Le gestionnaire de mots de passe intégré peut stocker les identifiants en toute sécurité dans votre trousseau local pour une utilisation ultérieure.

## Compression d'archives

### Créer une nouvelle archive

1. Sélectionnez des fichiers ou dossiers dans la fenêtre principale de NueZip
2. Cliquez sur le bouton **Compresser** dans la barre d'outils
3. Choisissez le format d'archive (ZIP, 7z, TAR, GZIP, etc.)
4. Configurez les paramètres de compression (niveau, méthode de chiffrement)
5. Cliquez sur **Compresser**

### Compresser depuis Finder

Faites un clic droit sur des fichiers/dossiers dans Finder et sélectionnez **Compresser avec NueZip** :
- **Compresser en ZIP** — Création rapide d'une archive ZIP
- **Compresser avec options** — Ouvre NueZip avec les paramètres avancés

### Compresser via glisser-déposer

Glissez des fichiers sur l'icône de zone de la barre de menu de NueZip pour créer rapidement une archive ZIP.

## Opérations par lot

### Compression par lot

1. Sélectionnez plusieurs éléments dans NueZip
2. Choisissez **Compression par lot** depuis la barre d'outils ou le menu Fichier
3. Chaque élément sera compressé dans une archive séparée

### Extraction par lot

1. Sélectionnez plusieurs archives dans NueZip
2. Choisissez **Extraction par lot** depuis la barre d'outils ou le menu Fichier
3. Toutes les archives seront extraites simultanément

### Conversion par lot

1. Sélectionnez une ou plusieurs archives
2. Choisissez **Convertir** → sélectionnez le format cible
3. NueZip recompressera chaque archive dans le format choisi

### Chiffrement par lot

1. Sélectionnez plusieurs archives ZIP
2. Choisissez **Chiffrement par lot**
3. Définissez un mot de passe — toutes les archives sélectionnées seront protégées par mot de passe

## Conversion de format

Convertissez des archives entre n'importe quels formats pris en charge :

1. Ouvrez une archive
2. Cliquez sur **Convertir** dans la barre d'outils
3. Sélectionnez le format cible (par ex., RAR → ZIP, 7z → TAR.GZ)
4. Choisissez l'emplacement de sortie
5. Cliquez sur **Convertir**

## Réparation d'archive

Pour les archives RAR ou ZIP corrompues :

1. Ouvrez l'archive corrompue
2. Cliquez sur **Réparer** dans la barre d'outils
3. NueZip tentera de reconstruire les données de l'archive
4. L'archive réparée est enregistrée en tant que nouveau fichier

## Recherche dans les archives

Trouvez des fichiers spécifiques dans les archives :

1. Cliquez sur le bouton **Rechercher** dans la barre d'outils
2. Saisissez un motif de nom de fichier
3. NueZip recherche dans toutes les entrées de l'archive ouverte
4. Les résultats sont affichés avec les chemins complets pour une navigation rapide

## Test de performance

Testez les performances de compression de votre système :

1. Allez dans **Outils → Test de performance**
2. NueZip exécute des tests de compression en utilisant divers formats et paramètres
3. Les résultats affichent la vitesse de compression (Mo/s) et le taux pour chaque format
4. Utilisez cela pour comparer les performances selon les différentes méthodes de compression

## Archives multi-volumes (fractionnées)

Créez des archives fractionnées pour les données volumineuses :

1. Lors de la compression, activez **Fractionner en volumes**
2. Choisissez la taille des volumes (par ex., 100 Mo, 650 Mo, 4,7 Go, ou personnalisé)
3. NueZip crée des fichiers de parties numérotés (`.zip.001`, `.zip.002`, etc.)
4. Pour extraire, ouvrez le premier fichier de partie — NueZip charge automatiquement le reste

- **Mot de passe** : Fournissez un mot de passe pour les archives chiffrées
- **Regrouper dans un dossier** : Crée automatiquement un dossier racine si l'archive n'a pas de répertoire racine unique
- **Ouvrir après** : Révèle les fichiers extraits dans Finder à la fin
- **Conserver les fichiers incomplets** : Préserve les fichiers extraits avant une erreur (pour récupération partielle)
- **Mode de mise à jour** : Choisissez comment gérer les fichiers existants (écraser, ignorer, renommer)

### Extraction par lot

1. Allez dans **Outils → Extraction par lot**
2. Cliquez sur **Ajouter des fichiers...** pour sélectionner les fichiers d'archive
3. Choisissez un dossier de destination
4. Activez éventuellement **Supprimer les fichiers source après extraction**
5. Cliquez sur **Démarrer**

## Création d'archives

### Compresser des fichiers

1. Cliquez sur le bouton **Compresser** dans la barre d'outils
2. Sélectionnez les fichiers à compresser (ou glissez-déposez-les dans la fenêtre)
3. Choisissez le **Format d'archive** : ZIP, 7Z, TAR, GZIP, BZIP2
4. Configurez la **Méthode de compression** et le niveau
5. Définissez l'**Emplacement d'enregistrement** et le nom de l'archive
6. Définissez éventuellement un **Mot de passe** pour le chiffrement
7. Définissez éventuellement la **Taille de fractionnement** pour les archives multi-volumes
8. Cliquez sur **Compresser**

### Ajouter des fichiers à une archive existante

1. Ouvrez une archive existante dans NueZip
2. Cliquez sur **Ajouter des fichiers** dans la barre d'outils
3. Sélectionnez les fichiers à ajouter
4. Cliquez sur **Ajouter**

## Opérations par lot

### Compression par lot

1. Allez dans **Outils → Compression par lot**
2. Cliquez sur **Sélectionner des fichiers/dossiers...** pour choisir les éléments
3. Chaque élément sélectionné deviendra une archive séparée
4. Configurez le **Format** de sortie, l'**Emplacement d'enregistrement** et le préfixe de nommage des fichiers
5. Cliquez sur **Démarrer**

### Conversion de format par lot

1. Allez dans **Outils → Conversion de format par lot**
2. Cliquez sur **Ajouter des fichiers...** pour sélectionner les archives sources
3. Choisissez le **Format cible**
4. Activez éventuellement **Supprimer les fichiers source après conversion**
5. Cliquez sur **Démarrer**

### Chiffrement par lot

1. Allez dans **Outils → Chiffrement par lot**
2. Cliquez sur **Ajouter des fichiers...** pour sélectionner les archives
3. Saisissez un **Mot de passe**
4. Cliquez sur **Chiffrer**

## Fonctionnalités avancées

### Réparation d'archive

Réparez les archives corrompues ou endommagées :

1. Sélectionnez l'archive endommagée
2. Allez dans **Outils → Réparer l'archive**
3. NueZip analysera l'en-tête, reconstruira le répertoire et corrigera les blocs de données
4. Consultez le résultat de la réparation

### Conversion de format

Convertissez des archives entre formats :

1. Ouvrez une archive ou sélectionnez un fichier
2. Allez dans **Fichier → Convertir le format**
3. Choisissez le format cible et le niveau de compression
4. Supprimez éventuellement le fichier original
5. Cliquez sur **Convertir**

### Gestionnaire de mots de passe

NueZip stocke en toute sécurité les mots de passe d'archives dans votre trousseau local :

1. Allez dans **Outils → Gestionnaire de mots de passe**
2. Affichez tous les mots de passe enregistrés
3. Ajoutez, modifiez ou supprimez des entrées
4. Les mots de passe sont appliqués automatiquement à l'ouverture des archives chiffrées correspondantes

### Test de performance

Testez les performances de compression de votre système :

1. Allez dans **Outils → Test de performance**
2. Sélectionnez un fichier de test (ou utilisez celui par défaut)
3. Cliquez sur **Tester**
4. Consultez les résultats incluant la vitesse de compression/décompression et l'évaluation

### Recherche dans les archives

Trouvez des fichiers dans les archives :

1. Ouvrez une archive
2. Appuyez sur `Cmd+F` ou cliquez sur l'icône de recherche
3. Saisissez un nom de fichier, en respectant éventuellement la casse ou le mot entier
4. Parcourez les résultats de recherche et cliquez pour naviguer

## Raccourcis clavier

| Raccourci | Action |
|----------|--------|
| `Cmd+O` | Ouvrir une archive |
| `Cmd+N` | Nouvelle archive |
| `Cmd+E` | Extraire |
| `Cmd+F` | Rechercher dans l'archive |
| `Cmd+,` | Ouvrir les réglages |
| `Cmd+W` | Fermer la fenêtre |
| `Cmd+Q` | Quitter l'application |
| `Cmd+↑` | Remonter d'un niveau |
| `Cmd+→` | Aller vers l'avant |

## Réglages

Accédez aux réglages via **NueZip → Réglages** ou appuyez sur `Cmd+,` :

- **Général** : Langue, lancement à la connexion, thème d'apparence
- **Compression** : Format par défaut, niveau de compression, taille de fractionnement
- **Extraction** : Destination par défaut, comportement de regroupement, résolution des conflits
- **Accès aux dossiers** : Gérez les permissions de dossiers et les signets
- **Avancé** : Accélération matérielle, nombre de threads, répertoire temporaire
- **Confidentialité** : Préférences de collecte de données
