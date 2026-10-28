# Contribuer

Nous accueillons avec plaisir les contributions visant à améliorer NueZip ! Que vous corrigiez un bug, ajoutiez une fonctionnalité, traduisiez ou amélioriez la documentation, votre aide est appréciée.

## Façons de contribuer

### Rapports de bugs
- Vérifiez d'abord les [problèmes existants](https://github.com/nuezip/nuezip/issues)
- Indiquez la version de macOS, la version de NueZip et les étapes pour reproduire le problème
- Joignez des archives d'exemple si possible (de taille minimale)

### Demandes de fonctionnalités
- Décrivez la fonctionnalité et le cas d'usage
- Expliquez en quoi elle profiterait aux utilisateurs de NueZip
- Vérifiez si elle s'inscrit dans la philosophie native macOS, hors ligne d'abord

### Traductions
- NueZip prend en charge plusieurs langues. Pour l'application macOS, consultez `NueZip/Resources/i18n/` pour les traductions existantes.
- Pour ce site de documentation, traduisez le markdown situé sous `docs/` — chaque langue réside dans son propre dossier de locale (par ex. `docs/zh-CN/`, `docs/es/`).
- Conservez les noms de marque et de formats (NueZip, macOS, ZIP, RAR, 7-Zip, Finder, App Store, AES-256) sous leur forme originale.

### Contributions de code
- Le projet est écrit en **Swift 6 + SwiftUI**
- Forkez le dépôt et soumettez une pull request
- Suivez les modèles d'architecture propre (Clean Architecture) utilisés dans le code

## Pour commencer

### Prérequis
- Node.js 18 ou ultérieur (pour le site)
- Gestionnaire de paquets pnpm (pour le site)
- Xcode 16+ (pour le développement de l'application)
- macOS 14 Sonoma ou ultérieur

### Configuration du développement

1. **Forkez le dépôt** sur GitHub
2. **Clonez votre fork** :
   ```bash
   git clone https://github.com/nuezip/nuezip.git
   cd nuezip-site
   ```
3. **Installez les dépendances** :
   ```bash
   pnpm install
   ```
4. **Démarrez le serveur de développement** :
   ```bash
   pnpm docs:dev
   ```
5. **Ouvrez** `http://localhost:5173` dans votre navigateur

### Apporter des modifications

1. Créez une nouvelle branche pour vos modifications :
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Apportez vos modifications aux fichiers de documentation dans `docs/`
3. Testez vos modifications en construisant le site :
   ```bash
   pnpm docs:build
   ```
4. Validez vos modifications :
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Soumettre des modifications

1. **Poussez votre branche** vers votre fork :
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Créez une Pull Request** sur GitHub
3. **Attendez la revue** et traitez les éventuels retours

## Lignes directrices

### Style d'écriture
- Utilisez un langage clair et concis
- Écrivez à la voix active lorsque possible
- Soyez inclusif et accueillant
- Utilisez un formatage cohérent
- Incluez des captures d'écran lorsque cela est utile

### Structure des fichiers
- Les pages de documentation vont dans `docs/`
- Les guides vont dans `docs/guide/`
- Utilisez des noms de fichiers en minuscules avec des tirets : `my-new-guide.md`
- Le frontmatter n'est pas requis mais peut être utilisé pour les métadonnées

### Liens
- Utilisez des liens relatifs pour la documentation interne
- Liez vers des ressources externes lorsque cela est utile
- Assurez-vous que tous les liens fonctionnent

### Images et ressources
- Placez les images dans `docs/public/` ou ses sous-dossiers
- Utilisez des noms de fichiers descriptifs
- Optimisez les images pour le web (moins de 500 Ko recommandé)

## Code de conduite

Ce projet suit un code de conduite. En participant, vous acceptez de :
- Être respectueux et inclusif
- Vous concentrer sur des retours constructifs
- Accepter la responsabilité de vos erreurs

Consultez [CODE_OF_CONDUCT.md](https://github.com/nuezip/nuezip/blob/main/CODE_OF_CONDUCT.md) pour plus de détails.

## Des questions ?

Si vous avez des questions sur la contribution :
- Consultez les [problèmes existants](https://github.com/nuezip/nuezip/issues) et les [discussions](https://github.com/nuezip/nuezip/discussions)
- Créez un nouveau problème si nécessaire
- Contactez les mainteneurs

Merci d'aider à améliorer la documentation de NueZip !
