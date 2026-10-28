# Installation

NueZip est disponible pour macOS via le Mac App Store.

## Options de téléchargement

### Mac App Store (recommandé)

- **Téléchargement** : [NueZip sur le Mac App Store](https://apps.apple.com/app/id6785846417)

La version du Mac App Store propose des mises à jour automatiques et une intégration transparente avec macOS.

### Versions GitHub (alternative)

Si vous préférez télécharger directement, vous pouvez obtenir l'application depuis [GitHub Releases](https://github.com/nuezip/nuezip/releases). Notez que cette version ne reçoit pas de mises à jour automatiques.

## Étapes d'installation

### Mac App Store

1. Cliquez sur le lien de téléchargement ci-dessus ou recherchez « NueZip » dans le Mac App Store
2. Cliquez sur « Obtenir » pour télécharger l'application
3. L'application se téléchargera et s'installera automatiquement
4. Lancez NueZip depuis votre dossier Applications ou Launchpad

### Versions GitHub

1. Téléchargez le dernier `.dmg` depuis la page des Releases
2. Double-cliquez sur le `.dmg` téléchargé pour l'ouvrir
3. Glissez l'icône `NueZip.app` dans votre dossier `Applications`
4. Éjectez l'image montée et ouvrez `NueZip` depuis `Applications`

Si macOS empêche l'ouverture de l'application (Gatekeeper), ouvrez **Réglages système → Confidentialité et sécurité** et cliquez sur **Ouvrir quand même** pour NueZip, ou faites un clic droit sur l'application et choisissez **Ouvrir**.

## Premier lancement

Lors du premier lancement de NueZip, vous serez guidé à travers un parcours de prise en main pour :

- **Accorder l'accès aux dossiers** : Autorisez NueZip à accéder aux répertoires courants (Téléchargements, Documents, Bureau)
- **Activer l'extension Finder** : Activez le menu contextuel au clic droit pour des opérations d'archives rapides

Accordez les permissions lorsque cela vous est demandé. Vous pouvez les modifier à tout moment dans **Réglages système → Confidentialité et sécurité**.

## Mises à jour

- **Version Mac App Store** : Les mises à jour sont gérées automatiquement par l'App Store
- **Version GitHub Releases** : Téléchargez la version plus récente et remplacez l'application dans `Applications`

## Désinstallation

Pour désinstaller NueZip :

1. Quittez NueZip
2. Glissez `NueZip.app` de `Applications` vers la Corbeille
3. (Facultatif) Supprimez les données et journaux de l'application :

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
rm -rf ~/Library/Logs/nuezip
```

## Configuration requise

- **macOS** : Sonoma (14) ou ultérieur recommandé
- **Processeur** : Apple Silicon (série M) ou Intel (64 bits)
- **Mémoire** : 4 Go minimum, 8 Go recommandé
- **Stockage** : ~50 Mo

## Dépannage

Si vous rencontrez des problèmes lors de l'installation :

- **macOS bloque l'application** : Ouvrez **Réglages système → Confidentialité et sécurité** et cliquez sur **Ouvrir quand même** pour NueZip
- **Avertissement de notarisation** : Téléchargez une version signée/notariée depuis le Mac App Store

Pour plus d'aide, consultez le [guide de dépannage](./troubleshooting.md).
