# Permissions macOS

NueZip peut demander quelques permissions macOS pour offrir la meilleure expérience. Cette page explique à quoi sert chaque permission et comment les gérer.

## Fichiers et dossiers

Pour accéder aux archives n'importe où sur votre système, NueZip a besoin d'une permission d'accès aux fichiers.

**À quoi cela sert** : Lecture des fichiers d'archive, extraction des contenus et création de nouvelles archives.

**Gérer** : Réglages système → **Confidentialité et sécurité** → **Fichiers et dossiers**

Accordez l'accès lorsque cela vous est demandé lors du premier lancement. Vous pouvez gérer ou révoquer l'accès à tout moment.

## Extension Finder

NueZip inclut une extension Finder qui ajoute des options de menu contextuel au clic droit.

**À quoi cela sert** : Faites un clic droit sur les fichiers d'archive pour extraire, compresser ou ouvrir avec NueZip directement depuis Finder.

**Activer** : Réglages système → **Confidentialité et sécurité** → **Extensions** → **Extensions Finder** → Activer **NueZip**

## Notifications

NueZip peut afficher des notifications pour les opérations de longue durée (extraction par lot, compression d'archive volumineuse).

**À quoi cela sert** : Vous alerter lorsqu'une opération en arrière-plan se termine.

**Gérer** : Réglages système → **Notifications** → **NueZip**

## Accès au disque complet (optionnel)

Pour extraire des archives vers des emplacements protégés par le système, NueZip peut demander un accès au disque complet.

**À quoi cela sert** : Écriture de fichiers extraits vers des emplacements en dehors de votre dossier utilisateur.

**Gérer** : Réglages système → **Confidentialité et sécurité** → **Accès au disque complet**

Cette permission est optionnelle et n'est nécessaire que si vous travaillez avec des emplacements à l'échelle du système.

## Réinitialiser une permission avec le Terminal

Si une boîte de dialogue de permission a été ignorée ou que l'état est incohérent, vous pouvez réinitialiser les invites de permission macOS à l'aide de `tccutil` :

```bash
# Réinitialiser les permissions pour NueZip
tccutil reset All com.w3cub.nuezip
```

Après l'exécution de `tccutil`, redémarrez l'application et déclenchez à nouveau la fonctionnalité pour être invité de nouveau.

## Dépannage

- Si les notifications n'apparaissent pas, vérifiez que la permission **Notifications** est accordée.
- Après modification des permissions, quittez et rouvrez toujours NueZip pour que les changements prennent effet.

Pour plus d'aide, consultez le [guide de dépannage](./troubleshooting.md).
