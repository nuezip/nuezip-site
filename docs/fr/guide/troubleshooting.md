# Dépannage

Cette page recense les problèmes courants de NueZip sur macOS et leur résolution.

## L'application ne démarre pas ou plante au lancement

Symptômes : NueZip ne s'ouvre pas, plante immédiatement ou affiche une erreur inattendue.

Étapes à essayer :

1. Assurez-vous que votre version de macOS répond aux exigences minimales (macOS 14 Sonoma+).
2. Quittez et relancez l'application.
3. Redémarrez votre Mac.
4. Si l'application a été téléchargée depuis GitHub Releases, essayez de télécharger la dernière version ou la version notariée.
5. Si les problèmes persistent, collectez les journaux (voir ci-dessous) et ouvrez un problème.

## Impossible d'ouvrir une archive RAR

Symptômes : NueZip échoue à ouvrir un fichier `.rar`, ou affiche une erreur.

Liste de contrôle :

1. Assurez-vous que le fichier RAR n'est pas corrompu. Essayez de l'ouvrir avec un autre outil comme The Unarchiver.
2. Les archives RAR multi-volumes doivent avoir toutes les parties présentes (`.part1.rar`, `.part2.rar`, etc.).
3. Les archives RAR protégées par mot de passe nécessitent le mot de passe correct.
4. Le format RAR5 est pris en charge. Si vous avez un format RAR plus ancien, veuillez le signaler.

## L'extraction échoue avec une erreur de mot de passe

Symptômes : L'extraction échoue avec « Mauvais mot de passe » ou une erreur de déchiffrement.

Liste de contrôle :

1. Vérifiez que le mot de passe est correct — les mots de passe sont sensibles à la casse.
2. Assurez-vous que le bon type de chiffrement est pris en charge (AES-256 pour ZIP).
3. Essayez de saisir à nouveau le mot de passe depuis le gestionnaire de mots de passe.

## L'extension Finder n'apparaît pas

Symptômes : Le clic droit sur une archive dans Finder n'affiche aucune option NueZip.

Liste de contrôle :

1. Activez l'extension : Réglages système → Confidentialité et sécurité → Extensions → Extensions Finder → Activer **NueZip**.
2. Redémarrez Finder : Clic droit sur Finder dans Moniteur d'activité → Relancer, ou exécutez `killall Finder` dans le Terminal.
3. Réinstallez l'application si l'extension n'apparaît toujours pas.

## Licence / achat non affiché

Symptômes : Vous avez acheté NueZip mais il apparaît toujours comme version d'essai.

Liste de contrôle :

1. Assurez-vous d'être connecté avec le même identifiant Apple utilisé pour l'achat.
2. Restaurez les achats : NueZip → Réglages → Licence → Restaurer les achats.
3. Contactez le support si le problème persiste.

## Comment collecter les journaux de débogage

Pour aider à diagnostiquer les problèmes, collectez les journaux de débogage depuis NueZip :

```bash
# Copier les journaux sur le Bureau pour les partager
cp ~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log ~/Desktop/NueZip-Logs
```

Ouvrez ensuite un problème sur [GitHub Issues](https://github.com/nuezip/nuezip/issues) et joignez les journaux.

## Problèmes liés aux permissions

Si une fonctionnalité demande une permission mais ne fonctionne pas après l'avoir accordée :

1. Quittez l'application et rouvrez-la après avoir accordé la permission.
2. Si nécessaire, réinitialisez l'invite de permission avec `tccutil` (voir le [guide des permissions](./permissions.md)).

## Problèmes de performance

Si l'application est lente ou ne répond pas :

1. Fermez les autres applications gourmandes.
2. Essayez d'extraire une archive plus petite pour isoler le problème.
3. Redémarrez l'application si les performances se dégradent avec le temps.

## Consulter les journaux

Pour résoudre les plantages ou problèmes, les journaux de l'application sont l'artefact le plus utile. Dans les versions sandbox (App Store), vérifiez :

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log
```



## Réinitialiser l'application

Pour réinitialiser les réglages et effacer les données locales :

1. Quittez NueZip
2. Supprimez le conteneur (soyez prudent — cela supprime tous les réglages) :

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
```

3. Rouvrez NueZip et reconfigurez.

## Signaler un problème

Lors de l'ouverture d'un problème, incluez :

- Version de macOS (menu Pomme → À propos de ce Mac)
- Version de NueZip (NueZip → À propos)
- Étapes pour reproduire
- Journaux (voir la section [Consulter les journaux](#view-logs) pour savoir comment les collecter)

Cela aide les mainteneurs à identifier et corriger le problème plus rapidement.
