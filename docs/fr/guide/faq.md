# FAQ

Q : Qu'est-ce que NueZip ?

R : NueZip est un gestionnaire d'archives professionnel pour macOS, prenant en charge la compression et l'extraction de multiples formats d'archives incluant RAR, ZIP, 7-Zip, TAR, GZIP et BZIP2.

Q : Quelles versions de macOS sont prises en charge ?

R : NueZip nécessite macOS 14 Sonoma ou ultérieur, et est optimisé pour les puces Apple Silicon (série M).

Q : Comment télécharger et installer NueZip ?

R : Téléchargez depuis le [Mac App Store](https://apps.apple.com/app/id6785846417) (recommandé) ou récupérez la dernière version depuis [GitHub Releases](https://github.com/nuezip/nuezip/releases).

Q : NueZip est-il gratuit ?

R : NueZip propose un essai gratuit avec les fonctionnalités de base. Un achat unique débloque l'ensemble complet des fonctionnalités, incluant les opérations par lot, la réparation d'archives et le chiffrement avancé.

Q : Quels formats sont pris en charge ?

R : **Lecture** : RAR, ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
**Écriture (compression)** : ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
Consultez l'[Introduction](/fr/guide/introduction) pour la matrice complète des formats.

Q : NueZip peut-il créer des archives RAR ?

R : Non. NueZip peut **lire** les archives RAR (y compris les archives multi-volumes et réparées), mais la compression RAR n'est pas prise en charge en raison de restrictions de licence.

Q : NueZip est-il sûr pour les fichiers confidentiels ?

R : Oui. NueZip fonctionne entièrement hors ligne. Toutes les opérations s'exécutent localement sur votre Mac. Le chiffrement AES-256 est disponible pour les archives ZIP protégées par mot de passe.

Q : NueZip téléverse-t-il mes fichiers vers le cloud ?

R : Non. NueZip est une application entièrement hors ligne. Vos fichiers ne sont jamais téléversés nulle part. Aucune connexion internet n'est requise pour la compression ou l'extraction.

Q : Comment mettre à jour l'application ?

R : Mettez à jour via le Mac App Store (automatique) ou téléchargez la dernière version depuis GitHub Releases.

Q : Comment signaler des bugs ou demander des fonctionnalités ?

R : Ouvrez un problème sur le [dépôt GitHub](https://github.com/nuezip/nuezip/issues). Veuillez inclure votre version de macOS, votre version de NueZip et les étapes pour reproduire.

Q : Où sont stockés les journaux et les données ?

R : Pour les versions sandbox (App Store) :

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Application Support/com.w3cub.nuezip/
```

Les versions de développement peuvent écrire des journaux dans la console.

Si vous avez besoin de plus de réponses, veuillez ouvrir un problème dans le dépôt ou consulter la documentation complète.
